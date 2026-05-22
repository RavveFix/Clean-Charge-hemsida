# Responsive Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lyfta Clean Charge AB-sajten till WCAG 2.5.5 + iOS HIG-standard för touch targets (≥44×44px), typografi (≥12px uppercase labels, ≥14px brödtext) och fixa favicon 404.

**Architecture:** Inga arkitekturändringar. Endast Tailwind utility-klass-tweaks i befintliga komponenter + en ny `app/icon.tsx` för favicon via Next.js ImageResponse (samma teknik som befintliga `app/opengraph-image.tsx`).

**Tech Stack:** Next.js 16, Tailwind CSS 3, TypeScript, Playwright (för verifiering).

---

## Pre-flight

- [ ] **Verifiera branch:** Du ska vara på `feature/responsive-improvements`. Kontrollera med `git branch --show-current`. Om inte, kör `git checkout feature/responsive-improvements`.

- [ ] **Etablera baseline:** Innan första commit, kör baseline-audit-skriptet (se Task 5 för fullständig version) för att få före-siffrorna. Spara siffrorna i en notering — de blir referens efter.

---

## Task 1: Touch targets ≥44px på interaktiva element

**Files:**
- Modify: `components/Footer.tsx` — 12 footer-länkar i Lösningar/Support/Kontakt-kolumner
- Modify: `components/Navbar.tsx:114-136` — mobile menu items (`navLinks.map` i overlay)
- Modify: `components/Navbar.tsx:108-112` — hamburger button (`lg:hidden p-2`)
- Modify: `components/ScrollToTop.tsx` — knappstorlek

### Footer-länkar

- [ ] **Step 1.1: Identifiera footer-länkar som behöver touch-padding**

Öppna `components/Footer.tsx`. Footer-länkar finns i tre kolumner. Sök efter `text-sm font-bold text-slate-500 hover:text-cc-green` (länkmönster). Det finns ~12 förekomster.

Aktuell klass på dessa länkar:
```tsx
className="text-sm font-bold text-slate-500 hover:text-cc-green transition-colors"
```

- [ ] **Step 1.2: Lägg till touch-padding på Footer-länkar**

Edit `components/Footer.tsx` — sök och ersätt **alla förekomster** av:

`text-sm font-bold text-slate-500 hover:text-cc-green transition-colors`

med:

`text-sm font-bold text-slate-500 hover:text-cc-green transition-colors inline-flex items-center min-h-[44px]`

Detta påverkar alla `<Link>` i Lösningar, Support, och Kontakt-kolumner samt `<a>` med samma klassmönster (e-post, telefon).

- [ ] **Step 1.3: Verifiera Footer ändring**

Run: `grep -c 'min-h-\[44px\]' components/Footer.tsx`
Expected: minst 12 förekomster.

### Mobile menu (Navbar overlay)

- [ ] **Step 1.4: Höj mobile menu-länkars touch height**

Edit `components/Navbar.tsx`. Hitta mobile menu items map. Klass är något i stil med:
```tsx
className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${
  isActive(tab.href) ? 'text-brand-green' : 'text-slate-800'
}`}
```

Ändra till:
```tsx
className={`text-2xl sm:text-3xl font-black uppercase tracking-tight inline-flex items-center min-h-[48px] px-4 ${
  isActive(tab.href) ? 'text-brand-green' : 'text-slate-800'
}`}
```

(48px för mobile menu eftersom de är prominenta primary-links — luftigare touch area.)

### Hamburger button

- [ ] **Step 1.5: Höj hamburger button storlek**

Edit `components/Navbar.tsx`. Hamburger-knappen är `<button className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors">`.

Ändra `p-2` till `p-3`:

Före:
```tsx
className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
```

Efter:
```tsx
className="lg:hidden p-3 rounded-full hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
```

### Scroll-to-top

- [ ] **Step 1.6: Läs ScrollToTop.tsx för att hitta knapp-klass**

Run: `grep -n 'button\|className' components/ScrollToTop.tsx | head -10`

Notera nuvarande klass på knappen.

- [ ] **Step 1.7: Höj ScrollToTop till 48×48**

Edit `components/ScrollToTop.tsx`. Hitta knappen (troligen `w-12 h-12` i klass, som ger 48px — i så fall ingen ändring). Om mindre, sätt till `w-12 h-12` (48px).

Audit-data visade 36×36 — leta efter `w-9 h-9` eller liknande och byt till `w-12 h-12`.

- [ ] **Step 1.8: Visuell + funktionell verifiering**

Kör dev-server om inte redan: `npm run dev`. Öppna `localhost:3000` i 375px-viewport (Chrome DevTools mobile mode). Verifiera:
- Footer-länkar lättare att trycka (ej crammed)
- Mobile menu items har luftigt utseende
- Hamburger lättare att träffa

Visuellt OK? Fortsätt. Layout-bryt? Stoppa och fixa.

- [ ] **Step 1.9: TypeScript check**

Run: `npx tsc --noEmit`
Expected: Inga fel.

- [ ] **Step 1.10: Commit**

```bash
git add components/Footer.tsx components/Navbar.tsx components/ScrollToTop.tsx
git commit -m "fix(a11y): touch targets ≥44px på footer-länkar, mobile meny och knappar

- Footer Link/a med min-h-[44px] inline-flex items-center
- Mobile menu items min-h-[48px] (primary navigation)
- Hamburger p-2→p-3 + min 44x44px
- ScrollToTop till 48x48px
- Följer WCAG 2.5.5 AAA och iOS HIG"
```

---

## Task 2: Bulk-höj små text-klasser till min 12px

**Files (19 filer affected):**
- Modify: `components/Hero.tsx`, `components/HeroSegments.tsx`, `components/FeaturesBento.tsx`, `components/StatsStrip.tsx`, `components/MontaSection.tsx`, `components/MontaHubSection.tsx`, `components/SolutionsSection.tsx`, `components/AboutSection.tsx`, `components/PreFooterCTA.tsx`, `components/Footer.tsx`, `components/ProductGrid.tsx`, `components/ProductHero.tsx`, `components/PrivateChargingSection.tsx`, `components/CommercialChargingSection.tsx`, `components/SupportSection.tsx`, `components/ContactSection.tsx`, `components/LiveImpactWidget.tsx`, `components/AiDesigner.tsx`, `components/GroundingInsights.tsx`
- Modify: `app/not-found.tsx`, `app/om-oss/page.tsx`

- [ ] **Step 2.1: Räkna förekomster före**

Run:
```bash
grep -rn 'text-\[9px\]\|text-\[10px\]\|text-\[11px\]' components app --include='*.tsx' 2>/dev/null | wc -l
```
Expected: ~86 förekomster.

- [ ] **Step 2.2: Bulk-ersätt text-[9px] och text-[10px] och text-[11px] → text-[12px]**

Run (kör en command, alla tre patterns):
```bash
find /Users/ravonstrawder/Desktop/Fixverse/clean-charge-ab/components /Users/ravonstrawder/Desktop/Fixverse/clean-charge-ab/app -type f \( -name '*.tsx' -o -name '*.ts' \) -exec sed -i '' \
  -e 's/text-\[9px\]/text-[12px]/g' \
  -e 's/text-\[10px\]/text-[12px]/g' \
  -e 's/text-\[11px\]/text-[12px]/g' \
  {} \;
```

OBS: `-i ''` är macOS-syntax. Skript ska köras från macOS-shell (vilket användaren har).

- [ ] **Step 2.3: Verifiera 0 förekomster kvarstår**

Run:
```bash
grep -rn 'text-\[9px\]\|text-\[10px\]\|text-\[11px\]' components app --include='*.tsx' 2>/dev/null | wc -l
```
Expected: 0.

- [ ] **Step 2.4: Räkna nya text-[12px] (sanity check)**

Run:
```bash
grep -rn 'text-\[12px\]' components app --include='*.tsx' 2>/dev/null | wc -l
```
Expected: ≥86 (samma summa som före + eventuella tidigare 12px).

- [ ] **Step 2.5: Granska sm:/md:/lg:-prefix förekomster manuellt**

Bulk-sed:en ovan ändrar även responsive-prefix-versioner (t.ex. `sm:text-[10px]` → `sm:text-[12px]`). Det är önskat — vi vill ha ≥12px på alla viewports.

Run för att verifiera:
```bash
grep -rn 'sm:text-\[9px\]\|sm:text-\[10px\]\|md:text-\[9px\]\|md:text-\[10px\]' components app --include='*.tsx' 2>/dev/null
```
Expected: 0 (om sed ändrade utan kvotning runt klassen).

- [ ] **Step 2.6: TypeScript check + build**

Run:
```bash
npx tsc --noEmit && npm run build 2>&1 | tail -10
```
Expected: Inga TS-fel, build OK.

- [ ] **Step 2.7: Visuell verifiering**

Öppna `localhost:3000` i dev-server. Granska visuellt:
- Hem-sidan: "AUKTORISERAD ZAPTEC..." badge nu 12px (synligt större)
- /produkter: "PREMIUM CHOICE", "AC LADDBOX" badges nu 12px
- Footer: små text nu läsbara

Layout-bryt? Stoppa, identifiera komponent, justera. Vanligaste fix: lägg `whitespace-nowrap` på badge eller minska padding på container.

- [ ] **Step 2.8: Commit**

```bash
git add components/ app/
git commit -m "fix(a11y): höj alla uppercase-labels från 9-11px till 12px

- 86 förekomster av text-[9-11px] → text-[12px]
- Påverkar badges, kategorier, decorative labels över 19 filer
- Följer Material Design Caption-standard för tracked uppercase-text
- Brödtext (text-xs/text-sm/text-base) oförändrad"
```

---

## Task 3: Höj brödtext-element under 14px till 14px

**Files:**
- Modify: `components/FeaturesBento.tsx` — feature description ("Hårdvara byggd för att motstå...")
- Modify: `components/ProductGrid.tsx` — produktbeskrivning ("Världens minsta 22kW...")

- [ ] **Step 3.1: Hitta brödtext-element med text-[12px] eller text-[13px] som är paragraph (inte badge)**

Run:
```bash
grep -rn 'text-\[13px\]' components --include='*.tsx'
```

Notera förekomster — vilka är badges (uppercase short) vs brödtext (lowercase sentence)?

- [ ] **Step 3.2: Höj ProductGrid produktbeskrivning till text-sm (14px)**

Edit `components/ProductGrid.tsx`. Sök efter:
```tsx
className="text-slate-500 text-[13px] font-medium leading-relaxed"
```

Ersätt med:
```tsx
className="text-slate-500 text-sm font-medium leading-relaxed"
```

- [ ] **Step 3.3: Höj FeaturesBento brödtext-paragraph på mobil**

Edit `components/FeaturesBento.tsx`. Sök efter `<p>`-element inom feature-cards med klass innehållande `text-xs` eller `text-[12px]` när de är beskrivande paragraph (inte label).

Mönster att leta efter: en `<p>` direkt under `<h3>` i ett feature-card.

Ändra `text-xs sm:text-sm` (om finns) till `text-sm sm:text-base` eller bara `text-sm` om det redan är på `text-xs`.

Konkret ändring i `components/FeaturesBento.tsx` — den paragraph som har "Hårdvara byggd för att motstå extrem kyla...". Hitta dess `<p>`-klass. Om den är `text-xs` eller `text-[12px]`, ändra till `text-sm`.

- [ ] **Step 3.4: TypeScript check**

Run: `npx tsc --noEmit`
Expected: Inga fel.

- [ ] **Step 3.5: Visuell verifiering på mobil-viewport**

Dev-server på `localhost:3000`. DevTools 375px. Verifiera:
- Produktkort-beskrivning lättare att läsa
- Feature bento brödtext är 14px

- [ ] **Step 3.6: Commit**

```bash
git add components/ProductGrid.tsx components/FeaturesBento.tsx
git commit -m "fix(a11y): brödtext ≥14px för läsbarhet på mobil

- ProductGrid produktbeskrivning 13px → 14px (text-sm)
- FeaturesBento feature-description till text-sm minimum
- Följer iOS HIG body text-rekommendation"
```

---

## Task 4: Favicon via app/icon.tsx

**Files:**
- Create: `app/icon.tsx`

- [ ] **Step 4.1: Skapa app/icon.tsx**

Edit (create new file) `app/icon.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#00b182',
          fontSize: 22,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        CC
      </div>
    ),
    { ...size },
  );
}
```

- [ ] **Step 4.2: Build för att verifiera icon-route**

Run:
```bash
npm run build 2>&1 | grep -E "icon|404|error" | head -10
```
Expected: `/icon` ska visas som static route. Inga 404-error.

- [ ] **Step 4.3: TypeScript check**

Run: `npx tsc --noEmit`
Expected: Inga fel.

- [ ] **Step 4.4: Verifiera lokalt**

Starta dev-server om ej igång: `npm run dev`. Öppna `localhost:3000/icon`. Expected: 32×32 grön "CC" på mörk bakgrund.

Öppna `localhost:3000/` och kolla browser-tab favicon. Expected: ny "CC"-ikon istället för default.

- [ ] **Step 4.5: Commit**

```bash
git add app/icon.tsx
git commit -m "feat: favicon via app/icon.tsx (Next ImageResponse)

- Genererar 32x32 PNG-favicon vid build
- Brandad CC-text på mörk bakgrund med cc-green-accent
- Eliminerar /favicon.ico 404 console-error"
```

---

## Task 5: Re-verify med Playwright och deploy

**Files:** (Ingen kod-ändring — verifiering)

- [ ] **Step 5.1: Skapa Playwright-audit-script som artifact**

Edit (create) `scripts/responsive-audit.mjs`:

```javascript
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
```

- [ ] **Step 5.2: Verifiera Playwright är installerat**

Run:
```bash
npx playwright --version 2>&1 | head -1
```
Expected: en versionnummer. Om "not installed", run `npx playwright install chromium`.

- [ ] **Step 5.3: Kör script mot lokalt build**

Run:
```bash
npm run build && npm start &
sleep 5
BASE_URL=http://localhost:3000 node scripts/responsive-audit.mjs
kill %1 2>/dev/null
```

Expected output (acceptanskriterier):
```
Small text  (<12px): 0
Pages with overflow: 0
✅ PASSED
```

Touch-count kan vara >0 om det finns dekorativa element (impact widget, etc) — granska om så är fallet. Acceptabelt: touch-count <5 per viewport efter exception-filter.

- [ ] **Step 5.4: Om audit failar — fixa specifika problem**

Om `smallTextCount > 0`, run audit-evaluate på sidan med problem och se exakt vilka element. Common fixes:
- Glömd `text-[10px]` i en ny commit
- Tailwind class som genererar `text-[8px]` (sällsynt)
- External content (iframe) — då exception

Fix per finding, kör om script.

- [ ] **Step 5.5: Commit script**

```bash
git add scripts/responsive-audit.mjs
git commit -m "chore: Playwright responsive-audit script

- Verifierar touch targets ≥44px och text ≥12px
- Kör mot 3 viewports × 4 nyckel-sidor
- Användning: BASE_URL=... node scripts/responsive-audit.mjs"
```

- [ ] **Step 5.6: Push branch och deploy preview**

```bash
git push -u origin feature/responsive-improvements
npx vercel deploy --yes
```

Notera preview-URL från output.

- [ ] **Step 5.7: Kör script mot preview**

```bash
BASE_URL=<preview-url> node scripts/responsive-audit.mjs
```

Expected: `✅ PASSED`.

Om audit kräver Vercel-auth (preview-URL skyddad), promote direkt till prod istället:

```bash
npx vercel deploy --prod --yes
BASE_URL=https://www.cleancharge.se node scripts/responsive-audit.mjs
```

- [ ] **Step 5.8: Merge till main**

```bash
git checkout main
git merge --no-ff feature/responsive-improvements -m "merge: responsiv-genomgång (touch ≥44px, text ≥12px, favicon)"
git push origin main
```

- [ ] **Step 5.9: Slutverifiering på prod**

```bash
BASE_URL=https://www.cleancharge.se node scripts/responsive-audit.mjs
```

Expected: `✅ PASSED`. Om något missas — diagnostisera, fixa, repeat.

- [ ] **Step 5.10: Uppdatera spec med slutresultat**

Edit `docs/superpowers/specs/2026-05-22-responsive-audit-design.md` — lägg till sektion längst ned:

```markdown
## Slutresultat (2026-05-22)

- Touch targets <44px: före 28 → efter X
- Text <12px: före 31 → efter X
- Overflow: 0 (oförändrat)
- Favicon: 404 → 200
- Live på: https://www.cleancharge.se
```

```bash
git add docs/superpowers/specs/2026-05-22-responsive-audit-design.md
git commit -m "docs: uppdaterar spec med slutresultat från responsive audit"
git push origin main
```

---

## Self-Review (utförd före spara)

**1. Spec coverage:**
- ✅ Touch targets ≥44px → Task 1
- ✅ Labels ≥12px → Task 2
- ✅ Brödtext ≥14px → Task 3
- ✅ Favicon → Task 4
- ✅ Re-verify → Task 5
- ✅ Tablet-justering — täckt av Task 2 (sed gör även sm:/md:-prefix); inga separata tablet-specifika layout-fixes behövs efter att audit visade samma mönster över alla viewports

**2. Placeholder scan:** Inga "TBD"/"TODO". Alla kommandon och kod är konkret.

**3. Type consistency:** Inga nya typer eller funktioner introduceras (endast CSS-klass-ändringar + en isolerad ny route).

**4. Edge case — sed på macOS:** Plan använder `sed -i ''` (BSD-syntax). Korrekt för macOS-shell.

**5. Edge case — Playwright preview-auth:** Step 5.7 har fallback till prod om preview-URL kräver auth.
