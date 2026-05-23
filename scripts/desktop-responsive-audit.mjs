import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const PAGES = ['/', '/produkter', '/privat', '/publik', '/kontakt'];
const VIEWPORTS = [
  { name: 'mobile-sm', width: 320, height: 720 },
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop-sm', width: 1024, height: 768 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'fullhd', width: 1920, height: 1080 },
];

async function audit(browser, url, viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);

  const result = await page.evaluate((vw) => {
    const issues = [];

    // 1. Horisontell overflow
    const horizontalOverflow = document.documentElement.scrollWidth - window.innerWidth;
    if (horizontalOverflow > 1) {
      issues.push({ type: 'overflow-document', extra: horizontalOverflow });
    }

    // 2. Element som spillerut
    const all = document.querySelectorAll('body *');
    const overflowing = [];
    all.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.right > window.innerWidth + 1 && rect.width > 50) {
        overflowing.push({
          tag: el.tagName.toLowerCase(),
          class: (el.className || '').toString().slice(0, 80),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        });
      }
    });
    if (overflowing.length) issues.push({ type: 'overflow-elements', items: overflowing.slice(0, 5) });

    // 3. Text-radlängder (>75ch på brödtext)
    const bodyTextSelectors = 'p, [class*="text-base"], [class*="text-sm"], [class*="text-lg"], [class*="text-xl"]';
    const longLines = [];
    document.querySelectorAll(bodyTextSelectors).forEach((el) => {
      const text = el.textContent?.trim() || '';
      if (text.length < 60) return;
      const fontSize = parseFloat(getComputedStyle(el).fontSize);
      const width = el.getBoundingClientRect().width;
      const chWidth = fontSize * 0.5;
      const ch = Math.round(width / chWidth);
      if (ch > 75) {
        longLines.push({
          tag: el.tagName.toLowerCase(),
          ch,
          preview: text.slice(0, 60),
        });
      }
    });
    if (longLines.length) issues.push({ type: 'long-lines', count: longLines.length, samples: longLines.slice(0, 3) });

    // 4. Container utilization
    const containers = document.querySelectorAll('.container, [class*="max-w-"]');
    let widest = 0;
    containers.forEach((el) => {
      const w = el.getBoundingClientRect().width;
      if (w > widest) widest = w;
    });
    const utilization = widest / window.innerWidth;
    if (vw >= 1920 && utilization < 0.7) {
      issues.push({ type: 'low-utilization', pct: Math.round(utilization * 100) });
    }

    // 5. Touch-targets (mobil regression)
    if (vw <= 768) {
      const tooSmall = [];
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          if (rect.width > 0 && rect.height > 0) {
            tooSmall.push({ tag: el.tagName.toLowerCase(), w: Math.round(rect.width), h: Math.round(rect.height) });
          }
        }
      });
      if (tooSmall.length) issues.push({ type: 'touch-too-small', count: tooSmall.length, samples: tooSmall.slice(0, 3) });
    }

    // 6. Brödtext <14px (mobil regression)
    if (vw <= 768) {
      const tooSmallText = [];
      document.querySelectorAll('p, span').forEach((el) => {
        const fontSize = parseFloat(getComputedStyle(el).fontSize);
        const text = el.textContent?.trim() || '';
        if (text.length > 20 && fontSize < 14) {
          tooSmallText.push({ size: fontSize, preview: text.slice(0, 40) });
        }
      });
      if (tooSmallText.length) issues.push({ type: 'text-too-small', count: tooSmallText.length, samples: tooSmallText.slice(0, 3) });
    }

    return issues;
  }, viewport.width);

  await context.close();
  return result;
}

(async () => {
  const browser = await chromium.launch();
  const lines = [`# Audit Results — ${new Date().toISOString()}`, `Base: ${BASE}`, ''];
  let totalIssues = 0;

  for (const path of PAGES) {
    lines.push(`## ${path}`);
    for (const vp of VIEWPORTS) {
      const issues = await audit(browser, BASE + path, vp);
      totalIssues += issues.length;
      if (!issues.length) {
        lines.push(`- ${vp.name} (${vp.width}px): OK`);
      } else {
        lines.push(`- ${vp.name} (${vp.width}px): ${issues.length} issue(s)`);
        for (const i of issues) {
          lines.push(`  - ${i.type}: ${JSON.stringify(i).slice(0, 200)}`);
        }
      }
    }
    lines.push('');
  }

  lines.unshift(`Total issues: ${totalIssues}`, '');
  await browser.close();
  const outfile = process.argv[2] || 'audit-results-before.md';
  await fs.writeFile(outfile, lines.join('\n'));
  console.log(`Wrote ${outfile} (${totalIssues} issues)`);
})();
