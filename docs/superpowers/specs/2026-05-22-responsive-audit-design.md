# Responsiv genomgång — Clean Charge AB

**Datum:** 2026-05-22
**Status:** Design godkänd, redo för implementation
**Ägare:** Clean Charge AB / Rávon

## Bakgrund

Sajten är redan responsiv i grunden (ingen horisontell overflow, hamburger-meny på mobil, content max-width 1280px, kontaktformulär följer mobile best practices). Audit på 3 viewports (375 mobil, 768 tablet, 1440 desktop) har dock identifierat följande gap mot branschstandard:

- Footer-länkar 17px höjd (under WCAG 2.5.5 minimum 44px)
- Mobile menu-länkar 32px höjd
- Hamburger-knapp 40×40, scroll-top 36×36
- Decorative uppercase-badges 9-10px (under läsbarhetsgolv 12px för tracked labels)
- Vissa brödtexter 12-13px på mobil (under standard 14px)
- Favicon 404 (console-error på alla sidor)

## Mål

Lyfta hela sajten till **WCAG 2.5.5 + iOS HIG-standard** för touch targets (≥44×44px) och **läsbarhet** (≥12px för uppercase labels, ≥14px för brödtext, ≥16px body). Inga arkitekturändringar — enbart Tailwind utility tweaks och en ny `app/icon.tsx`.

## Standarder som följs

| Område | Standard | Källa |
|---|---|---|
| Touch target | ≥44×44px | WCAG 2.5.5 AAA, iOS HIG |
| Body font | ≥16px | iOS auto-zoom skydd |
| Uppercase labels | ≥12px | Material Design Caption |
| Brödtext | ≥14px | iOS HIG body |
| Viewport meta | Redan satt i `app/layout.tsx` viewport export ✅ |
| No horizontal scroll | ✅ Verifierat på 375/768/1440 |

## Scope

**In scope:**
- `components/Footer.tsx` — footer-länkar touch targets
- `components/Navbar.tsx` — mobile menu items, hamburger, scroll-top knapp
- `components/Hero.tsx` — "AUKTORISERAD ZAPTEC..." badge
- `components/HeroSegments.tsx` — "VÄLJ DIN VÄG" + 3-cols cards
- `components/FeaturesBento.tsx` — feature bento brödtext
- `components/StatsStrip.tsx` — "BEVISAD EXPERTIS" + stat labels
- `components/ProductGrid.tsx` — "PREMIUM CHOICE", "AC LADDBOX", "VERIFIERAD", feature tags
- `components/ProductHero.tsx` — "PREMIUM SORTIMENT", "50% SKATTEAVDRAG"
- `components/AboutSection.tsx` — partner-logos area
- `components/ScrollToTop.tsx` — knappstorlek
- `components/Footer.tsx` (igen) — SOC2 + design-by-line
- `app/icon.tsx` (ny) — favicon via Next ImageResponse

**Out of scope:**
- Designspråk-ändringar (färger, fontfamiljer, layout-arkitektur)
- Animationer
- Content-ändringar
- Komponentstruktur

## Beslut (från brainstorming)

- **Touch target mål:** 44px (WCAG 2.5.5 + iOS HIG minimum) — inte 48px (Material). Mindre layout-impact.
- **Små labels:** Höj alla till min 12px globalt (mobile + desktop). Behåller estetik utan att fragmentera kod.

## Implementation-plan (översikt)

5 atomic commits, varje följt av Playwright re-verify på sista commit:

### Commit 1 — `fix: touch targets ≥44px`
Lägg `min-h-[44px] flex items-center` (eller `py-3` motsvarande) på:
- Footer-länkar (Footer.tsx — alla `<Link>` i `Lösningar`, `Support`, `Kontakt`-kolumner)
- Mobile menu items (Navbar.tsx — `navLinks.map` i overlay)
- Hamburger button (Navbar.tsx — `lg:hidden p-2`)
- Scroll-to-top button (ScrollToTop.tsx)
- Tab-pills i navbar desktop (redan ok, men verifiera)

### Commit 2 — `fix: typografi ≥12px för labels, ≥14px brödtext`
Global sökning efter `text-[9px]`, `text-[10px]`, `text-[11px]` → `text-[12px]` (uppercase labels). Sökning efter brödtexter under `text-sm` (14px) → `text-sm` minimum. Behåller `text-xs` (12px) för enradiga labels.

Komponenter att granska:
- Hero (badge "AUKTORISERAD..." 9px → 12px)
- HeroSegments ("VÄLJ DIN VÄG" 10px → 12px)
- FeaturesBento (brödtext 12px → 14px)
- StatsStrip ("BEVISAD EXPERTIS" 9px, stat labels 11px → 12px)
- ProductGrid ("PREMIUM CHOICE" 9px, feature tags 9px → 12px)
- ProductHero ("PREMIUM SORTIMENT" 10px → 12px)
- AboutSection ("AUKTORISERAD PARTNER FÖR" 9px → 12px)
- Footer ("Design by..." 10px → 12px, badge labels)
- Andra `text-[9-11px]` i kodbasen

### Commit 3 — `feat: favicon via app/icon.tsx`
Skapa `app/icon.tsx` med Next ImageResponse (samma teknik som opengraph-image). 32×32 grön CC-ikon på mörk bakgrund.

### Commit 4 — `feat: tablet-specifika justeringar`
- Footer på tablet (768): säkerställ att 4-kol grid är `md:grid-cols-2 lg:grid-cols-4` (verifiera state)
- Hero-segments på tablet: säkerställ 2- eller 3-kol layout fungerar
- Spline-scen padding på tablet (verifiera)

### Commit 5 — `chore: Playwright re-verify`
- Kör om audit-script på alla 3 viewports
- Confirma 0 touch targets <44px (förutom dekorativa decorative-only)
- Confirma 0 text <12px
- Dokumentera resultat i denna spec
- Deploy till prod
- Smoke-test hem + produkter + kontakt på 3 viewports

## Acceptanskriterier

- [ ] 0 horizontal overflow på 375/768/1440 (status: redan ✅)
- [ ] 0 touch targets <44×44px på interaktiva element (länkar, knappar, formulärfält)
  - Exception: dekorativa element utan funktion (dropdown caret, decorative icons)
- [ ] 0 textelement <12px i synlig viewport (förutom helt dekorativa, t.ex. CSS pseudo-element)
- [ ] H1 storlek per viewport: mobil ≥28px, tablet ≥48px, desktop ≥72px (status: redan ✅)
- [ ] Body font-size 16px på mobil (status: redan ✅)
- [ ] Favicon laddar utan 404
- [ ] Kontaktformulär: input/select 16px font, ≥44px höjd (status: redan ✅, behåll)

## Verifieringsmetod

Återanvänd audit-script från Playwright-sessionen idag. Eval-script returnerar JSON med:
- `overflow` (px), ska vara ≤0
- `smallTouch.count`, ska vara 0 efter exception-filter
- `smallText.count`, ska vara 0 efter exception-filter
- `h1Size`, ska vara över viewport-specifikt minimum

Kör på 3 viewports × 3 sidor (/, /produkter, /kontakt) före och efter.

## Risker

- **Layout-shift:** Att höja text från 9px → 12px kan ändra wraps. Mitigation: testa per-komponent visuellt på desktop innan mobil.
- **Touch-target padding kan bryta tight footer layout:** Risk att `min-h-[44px]` på footer-link ändrar grid-gap. Mitigation: använd `inline-flex items-center` med `py-3` istället för `min-h`, mer förutsägbart.
- **Spline-scen height på tablet:** Inte verifierat tidigare. Mitigation: snabb visuell check på tablet före slutleverans.
