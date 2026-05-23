# Desktop Responsive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bygg Clean Charge AB-sajten responsiv enligt branschstandard över 320→1920px med audit-driven approach, fluid hero-typografi via `clamp()`, och expansion av containers på stora skärmar.

**Architecture:** 4-fas-flöde — (1) Playwright audit → (2) Tailwind-tokens → (3) Komponent-waves A/B/C → (4) Re-audit + deploy. Bibehåll alla touch-target och body-text fixar från föregående pass.

**Tech Stack:** Next.js 16.2.6, Tailwind CSS 3, Playwright MCP, TypeScript 5.8, Vercel.

**Spec:** `docs/superpowers/specs/2026-05-23-desktop-responsive-design.md`

**Base SHA:** `f4f66cd` (branch: `feature/desktop-responsive`)

---

## Task 1: Audit-skript och baseline-rapport (Phase 1)

**Files:**
- Create: `scripts/desktop-responsive-audit.mjs`
- Create: `audit-results-before.md`

- [ ] **Step 1.1: Skapa audit-skriptet**

Skapa `scripts/desktop-responsive-audit.mjs`:

```javascript
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
```

- [ ] **Step 1.2: Starta dev-server (om inte redan igång)**

Run: `npm run dev` (i bakgrunden)
Wait: dev-server ska svara på http://localhost:3000

- [ ] **Step 1.3: Kör baseline-audit**

Run: `node scripts/desktop-responsive-audit.mjs audit-results-before.md`
Expected: Skriver `audit-results-before.md` med konkret lista av issues.

- [ ] **Step 1.4: Granska resultatet**

Read: `audit-results-before.md`
Notera: totala issues, värsta sidor/bredder. Detta är baseline.

- [ ] **Step 1.5: Commit**

```bash
git add scripts/desktop-responsive-audit.mjs audit-results-before.md
git commit -m "chore(audit): desktop-responsive Playwright audit script + baseline"
```

---

## Task 2: Tailwind design-tokens (Phase 2)

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 2.1: Lägg `3xl` breakpoint**

Modify `tailwind.config.ts` — i `theme.extend`, addera `screens`:

```typescript
theme: {
  extend: {
    screens: {
      '3xl': '1920px',
    },
    colors: {
      // ... (befintliga)
    },
    // ... (resten oförändrat)
  },
},
```

- [ ] **Step 2.2: Bygg och verifiera**

Run: `npm run build 2>&1 | tail -20`
Expected: Build lyckas utan Tailwind-warnings om okänt breakpoint.

- [ ] **Step 2.3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(tailwind): add 3xl breakpoint (1920px) for ultrawide screens"
```

---

## Task 3: Wave A — Heros med fluid clamp() (Phase 3)

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/HeroSegments.tsx`
- Modify: `components/ProductHero.tsx`

- [ ] **Step 3.1: Hero.tsx — fluid h1**

Open `components/Hero.tsx`, hitta hero-rubriken (oftast `<h1>` med `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` eller liknande kaskad).

Ersätt font-size-kaskaden med:
```jsx
className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tighter leading-[1.05]"
```
Behåll andra klasser (`font-black`, `tracking-tighter`, etc.) — bara font-size-kaskaden byts.

Lägg `3xl:max-w-[1600px]` på det yttersta container-div:
```jsx
<div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 3.2: HeroSegments.tsx — fluid h1 + container expand**

Open `components/HeroSegments.tsx`. Samma mönster: ersätt h1 font-size-kaskad med `text-[clamp(2rem,5vw,5rem)]`.

Container på rad 31:
```jsx
<div className="container mx-auto px-4 sm:px-6 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 3.3: ProductHero.tsx — fluid h1 + container expand**

Open `components/ProductHero.tsx`. Hitta h1, ersätt font-size-kaskad med `text-[clamp(1.75rem,4.5vw,4.5rem)]` (mindre eftersom det inte är sajten-hero).

Lägg på row 15:
```jsx
<div className="container mx-auto px-4 sm:px-6 relative z-10 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 3.4: Build och typecheck**

Run: `npm run build 2>&1 | tail -10`
Expected: Build lyckas, inga TypeScript-fel.

- [ ] **Step 3.5: Visuell verifiering — desktop**

I dev-server, öppna http://localhost:3000 och http://localhost:3000/produkter i en 1920px-bredd browser-window. Hero ska:
- Visa större h1 än tidigare på 1920px (skalat upp via clamp)
- Container ska sträcka sig bredare (sidomarginalerna ska vara mindre)

Om browser saknas: använd Playwright MCP-snapshot på 1920px för båda sidor.

- [ ] **Step 3.6: Commit**

```bash
git add components/Hero.tsx components/HeroSegments.tsx components/ProductHero.tsx
git commit -m "feat(responsive): fluid hero typografi via clamp + 2xl/3xl container expand"
```

---

## Task 4: Wave B — Section containers (Phase 3)

**Files:**
- Modify: `components/MontaSection.tsx`
- Modify: `components/FeaturesBento.tsx`
- Modify: `components/SolutionsSection.tsx`
- Modify: `components/CommercialChargingSection.tsx`
- Modify: `components/PrivateChargingSection.tsx`

För varje fil: hitta `container mx-auto px-...`-elementen (oftast på top-level i `<section>`) och addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]`.

- [ ] **Step 4.1: MontaSection.tsx**

Rad 14: `<div className="container mx-auto px-4 sm:px-6">` →
```jsx
<div className="container mx-auto px-4 sm:px-6 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 4.2: FeaturesBento.tsx**

Rad 49: redan har `max-w-7xl`. Lägg till:
```jsx
<div className="container mx-auto px-4 sm:px-6 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 4.3: SolutionsSection.tsx**

Rad 76: `<div className="container mx-auto px-4 sm:px-6">` →
```jsx
<div className="container mx-auto px-4 sm:px-6 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 4.4: CommercialChargingSection.tsx**

Lägg `2xl:max-w-[1440px] 3xl:max-w-[1600px]` på alla `container mx-auto px-4 sm:px-6`-divs (rader 48, 86, 109, 157). Använd Edit replace_all eller per-rad om varje skiljer sig.

- [ ] **Step 4.5: PrivateChargingSection.tsx**

Lägg `2xl:max-w-[1440px] 3xl:max-w-[1600px]` på alla `container mx-auto px-4 sm:px-6`-divs (rader 22, 105, 159, 217).

- [ ] **Step 4.6: Build**

Run: `npm run build 2>&1 | tail -10`
Expected: Inga fel.

- [ ] **Step 4.7: Commit**

```bash
git add components/MontaSection.tsx components/FeaturesBento.tsx components/SolutionsSection.tsx components/CommercialChargingSection.tsx components/PrivateChargingSection.tsx
git commit -m "feat(responsive): section containers expand to 2xl/3xl on large screens"
```

---

## Task 5: Wave C — Navbar + Footer + globala containers (Phase 3)

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `components/Footer.tsx`
- Modify: `components/ProductGrid.tsx`
- Modify: `components/AboutSection.tsx`
- Modify: `components/ContactSection.tsx`
- Modify: `components/StatsStrip.tsx`
- Modify: `components/MontaHubSection.tsx`
- Modify: `components/SupportSection.tsx`
- Modify: `components/HeroSegments.tsx` (om missad i Task 3)

- [ ] **Step 5.1: Navbar.tsx**

Rad 58: `w-[95%] max-w-7xl` →
```jsx
className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] transition-all duration-500 rounded-full px-6 lg:px-8 py-3 flex items-center justify-between bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/80 [&.scrolled]:shadow-[0_8px_30px_rgb(0,0,0,0.08)] [&.scrolled]:bg-white/98"
```

- [ ] **Step 5.2: Footer.tsx**

Rad 11: `<div className="container mx-auto px-4 sm:px-6">` →
```jsx
<div className="container mx-auto px-4 sm:px-6 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 5.3: ProductGrid.tsx**

Rad 106: `<div className="container mx-auto px-6">` →
```jsx
<div className="container mx-auto px-6 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
```

- [ ] **Step 5.4: AboutSection.tsx**

Rad 32: redan har `max-w-6xl`. Ändra till:
```jsx
<div className="container mx-auto px-4 sm:px-6 max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1400px]">
```
(About är textmang, vi expanderar mindre aggressivt än grid-sektioner.)

- [ ] **Step 5.5: ContactSection.tsx**

Rader 78, 111: addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]` till `container mx-auto px-4 sm:px-6`.

- [ ] **Step 5.6: StatsStrip.tsx**

Rad 102: addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]`.

- [ ] **Step 5.7: MontaHubSection.tsx**

Rader 21, 86, 127, 197: addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]` till varje `container mx-auto px-4 sm:px-6`.

- [ ] **Step 5.8: SupportSection.tsx**

Rader 23, 40, 66: addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]`. (Rad 66 har redan `max-w-5xl` — bygg på den: `max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl`.)

- [ ] **Step 5.9: Build**

Run: `npm run build 2>&1 | tail -10`
Expected: Inga fel.

- [ ] **Step 5.10: Commit**

```bash
git add components/Navbar.tsx components/Footer.tsx components/ProductGrid.tsx components/AboutSection.tsx components/ContactSection.tsx components/StatsStrip.tsx components/MontaHubSection.tsx components/SupportSection.tsx
git commit -m "feat(responsive): Wave C - navbar, footer, alla section-containers expand till 2xl/3xl"
```

---

## Task 6: Re-audit + jämförelse (Phase 4)

**Files:**
- Create: `audit-results-after.md`

- [ ] **Step 6.1: Bygg och starta lokal preview**

Run: `npm run build 2>&1 | tail -5`
Run: `npm run start` (i bakgrunden på port 3000)
Wait: server svarar.

- [ ] **Step 6.2: Kör audit igen**

Run: `node scripts/desktop-responsive-audit.mjs audit-results-after.md`
Expected: Skriver `audit-results-after.md`.

- [ ] **Step 6.3: Jämför före/efter**

Read: `audit-results-before.md` och `audit-results-after.md`.

Verifiera mot acceptance criteria:
- 0 horisontella overflow på de 7 testade bredderna (annars: fixa)
- 0 text-radlängder >75ch på brödtext (annars: lägg max-w-prose eller max-w-[65ch])
- Container utilization ≥70% på 1920px för alla testade sidor
- 0 touch-target regressioner på mobil
- 0 brödtext <14px regressioner på mobil

Om någon kategori fortfarande har issues: fixa dem i en commit innan Task 7.

- [ ] **Step 6.4: Commit audit-resultaten**

```bash
git add audit-results-after.md
git commit -m "chore(audit): desktop-responsive after-state audit"
```

---

## Task 7: Merge + deploy (Phase 4)

- [ ] **Step 7.1: Final sanity check**

Run: `npm run build && npx tsc --noEmit 2>&1 | tail -10`
Expected: Build + typecheck grönt.

- [ ] **Step 7.2: Merge till main**

```bash
git checkout main
git merge --no-ff feature/desktop-responsive -m "merge: desktop responsive audit + förbättringar"
```

- [ ] **Step 7.3: Push till origin**

```bash
git push origin main
```

- [ ] **Step 7.4: Deploy till Vercel prod**

Run: `vercel deploy --prod --yes`
Expected: Ny prod-deploy. Notera deploy-URL.

- [ ] **Step 7.5: Verifiering på prod**

Run: `BASE_URL=https://cleancharge.se node scripts/desktop-responsive-audit.mjs audit-results-prod.md`
Expected: 0 horisontella overflow, godkända utilization-värden.

- [ ] **Step 7.6: Spec-uppdatering med slutresultat**

Edit `docs/superpowers/specs/2026-05-23-desktop-responsive-design.md` — addera sektion längst ner:

```markdown
## Final Results (2026-05-23)

- Baseline: <N> issues
- After: <M> issues
- Prod: <P> issues
- Container utilization @ 1920px: <X>% (mål ≥70%)
- All acceptance criteria: ✅
```

- [ ] **Step 7.7: Final commit**

```bash
git add docs/superpowers/specs/2026-05-23-desktop-responsive-design.md audit-results-prod.md
git commit -m "docs: final results - desktop responsive pass deployed"
git push origin main
```
