import { chromium } from 'playwright';

const VIEWPORTS = [
  { name: 'mobile', w: 375, h: 667 },
  { name: 'tablet', w: 768, h: 1024 },
  { name: 'desktop', w: 1440, h: 900 },
];

const PAGES = ['/', '/produkter', '/foretag', '/kontakt'];

const BASE = process.env.BASE_URL || 'https://www.cleancharge.se';

async function audit(page) {
  return await page.evaluate(() => {
    const viewport = { w: window.innerWidth, h: window.innerHeight };
    const overflow = document.documentElement.scrollWidth - window.innerWidth;

    const touchEls = Array.from(document.querySelectorAll('a, button, [role=button], input, select, textarea'));
    const small = touchEls.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return false;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      if (el.classList.contains('sr-only')) return false;
      return r.width < 44 || r.height < 44;
    });

    const textEls = Array.from(document.querySelectorAll('p, span, a, button, h1, h2, h3, h4, h5, h6, li, label'));
    const tooSmall = textEls.filter((el) => {
      if (!el.innerText || el.children.length > 0) return false;
      if (el.innerText.trim().length < 5) return false;
      const style = getComputedStyle(el);
      const size = parseFloat(style.fontSize);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return false;
      return size < 12;
    });

    return {
      viewport,
      overflow,
      smallTouchCount: small.length,
      smallTextCount: tooSmall.length,
    };
  });
}

const browser = await chromium.launch();
const page = await browser.newPage();
const results = [];

for (const vp of VIEWPORTS) {
  await page.setViewportSize({ width: vp.w, height: vp.h });
  for (const pagePath of PAGES) {
    await page.goto(`${BASE}${pagePath}`, { waitUntil: 'networkidle' });
    const r = await audit(page);
    results.push({ viewport: vp.name, page: pagePath, ...r });
    console.log(`${vp.name.padEnd(8)} ${pagePath.padEnd(15)} touch<44: ${r.smallTouchCount.toString().padStart(2)} | text<12: ${r.smallTextCount.toString().padStart(2)} | overflow: ${r.overflow}`);
  }
}

await browser.close();

const totalTouch = results.reduce((sum, r) => sum + r.smallTouchCount, 0);
const totalText = results.reduce((sum, r) => sum + r.smallTextCount, 0);
const totalOverflow = results.filter((r) => r.overflow > 0).length;

console.log('\n--- TOTALS ---');
console.log(`Small touch (<44px): ${totalTouch}`);
console.log(`Small text  (<12px): ${totalText}`);
console.log(`Pages with overflow: ${totalOverflow}`);

if (totalText > 0 || totalOverflow > 0) {
  console.error('\n❌ FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PASSED');
}
