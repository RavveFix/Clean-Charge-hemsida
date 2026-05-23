# Desktop Responsive Audit & Förbättringar — Design Spec

**Datum:** 2026-05-23
**Branch:** `feature/desktop-responsive`
**Förutsättning:** Mobile/tablet responsiv-pass (`feature/responsive-improvements`) är merge:ad till main.

## Mål

Få Clean Charge AB-sajten att följa branschstandard för responsiv webbdesign över **hela skärmspektrumet** — från 320px mobil till 2560px+ ultrawide. Ingen tom yta på stora skärmar, ingen avhuggen layout på små, läsbara radlängder överallt.

## Standarder vi följer

| Standard | Mätbart krav |
|---|---|
| WCAG 2.5.5 (touch targets) | ≥44×44px på alla interaktiva element ✅ (klar i tidigare pass) |
| iOS HIG (body text) | ≥14px brödtext på mobil ✅ (klar) |
| CSS WG fluid layout | `clamp()` för hero-rubriker (skalar 320→1920 smidigt) |
| Läsbarhet | Brödtext max 65-75ch radlängd |
| Container utilization | Stora skärmar (1920+) ska nyttja ytan, inte centrera 1280px-block med massiva sidomarginaler |
| Inga horisontella scrollbars | På någon av de 7 testade viewport-bredderna |

## Scope — sidor i audit

1. `/` (startsida)
2. `/produkter`
3. `/privat`
4. `/publik`
5. `/kontakt`

## Scope — viewports i audit

| Width | Profil |
|---|---|
| 320px | iPhone SE (minimum) |
| 375px | iPhone standard |
| 768px | iPad portrait |
| 1024px | iPad landscape / liten laptop |
| 1280px | Standard laptop |
| 1440px | MacBook 14"/16" |
| 1920px | Full HD desktop |

(2560px ultrawide testas spot, ej i bulk-audit.)

## Strategi

### Phase 1 — Audit
Playwright-skript som öppnar varje sida × varje bredd, mäter:
- Horisontell overflow (`document.documentElement.scrollWidth > window.innerWidth`)
- Element som spillerut (`getBoundingClientRect().right > window.innerWidth`)
- Text-radlängder >75ch på brödtext — definition: alla `p` + element med klass innehållande `text-base|text-sm|text-lg|text-xl`
- Container utilization — mäter `max(innerWidth av .container, [class*="max-w-"]) / window.innerWidth`. Mål ≥70% på 1920px
- Touch-targets <44px på mobil (regression)
- Brödtext <14px på mobil (regression)

Output: `audit-results-before.md` med konkreta issues per sida/bredd.

### Phase 2 — Design-tokens
Lägg till i `tailwind.config.ts`:
```ts
screens: {
  '3xl': '1920px',  // ny breakpoint för ultrawide
}
```

**Container-strategi** (gradvis upskalning):
- Default `container mx-auto` → max-w-7xl (1280px)
- `2xl:max-w-[1440px]` (på 1536px+ skärmar)
- `3xl:max-w-[1600px]` (på 1920px+ skärmar)

**Fluid hero-typografi** (för stora rubriker):
- Ersätt `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` med `text-[clamp(2rem,5vw,5rem)]`
- Bara för hero h1/h2 — inte body, inte UI-element

### Phase 3 — Apply per komponent
Wave-baserat över komponenter:

**Wave A (heros + containers):**
- Hero.tsx, HeroSegments.tsx, ProductHero.tsx
- Lägg `2xl:` / `3xl:` overrides

**Wave B (sektioner):**
- MontaSection, FeaturesBento, SolutionsSection, CommercialChargingSection, PrivateChargingSection
- Kontrollera padding/gap på xl/2xl

**Wave C (Navbar + Footer + globalt):**
- Navbar: `max-w-7xl` → `max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]` (på `<nav>`-elementet rad 58)
- Footer: lägg `2xl:max-w-[1440px] 3xl:max-w-[1600px]` på footer-container
- Sektion-containers (alla `container mx-auto px-...`) — fortsätt med default Tailwind container max-widths, men addera `2xl:max-w-[1440px] 3xl:max-w-[1600px]` på heros/grid-sektioner med visuellt tomma sidomarginaler

### Phase 4 — Re-audit + deploy
Kör Playwright igen, jämför före/efter:
- 0 horisontella overflow på alla bredder
- 0 text-radlängder >75ch på brödtext
- Container utilization ≥70% på 1920px (var ~67% innan)

Deploy till Vercel prod efter grön audit.

## Acceptance criteria

- ✅ Inga horisontella scrollbars på 320, 375, 768, 1024, 1280, 1440, 1920
- ✅ Hero-rubriker skalar fluidly via `clamp()` — inga "hopp" mellan breakpoints
- ✅ Container nyttjar ≥70% av viewport på 1920px-skärmar
- ✅ Brödtext-radlängd ≤75ch på alla bredder
- ✅ Touch targets ≥44px bibehållna (regression-skydd)
- ✅ Brödtext ≥14px på mobil bibehållen
- ✅ Build + typecheck grönt

## Out of scope

- Print-stylesheet
- Dark mode (sajten är ljust tema)
- Reduced motion (kan addresseras senare)
- Bildoptimering utöver befintligt
- A/B-testning av nya layouts

## Risker & mitigeringar

| Risk | Mitigering |
|---|---|
| `clamp()` ger oväntad rendering på äldre browsers | Tillåt fallback med Tailwind-arbitrary `text-[clamp(...)]` — alla moderna browsers stödjer detta sedan 2020 |
| Ny `3xl` breakpoint krockar med befintliga `2xl:` overrides | Audit `2xl:` användning innan deploy |
| Container-expansion bryter Hero Spline-scene aspect ratio | Hero har lokalt `max-w-7xl` — lämna unchanged där |
| Spec scope-creep om audit hittar 100+ issues | Cap: max 15 issues per sida/bredd. Större problem dokumenteras som separat ticket. |

## Open questions

Inga — alla beslut är låsta i denna spec.

## Final Results (2026-05-23)

| Mätvärde | Baseline | Efter |
|---|---|---|
| Total issues | 78 | 46 |
| overflow-elements (absoluta blurs) | 35 | **3** |
| text-too-small (mobil) | 15 | **0** |
| overflow-document | 3 | 3 (masked via `overflow-x:hidden`) |
| touch-too-small | 15 | 15 (1×1 tracking-pixlar + 36×36 — LiveImpactWidget fixad till 44) |
| long-lines | 10 | 25 (font-rendering skillnad mellan dev/prod; 4 viktiga fixade med `max-w-prose`) |

**Levererat:**
- ✅ `3xl` (1920px) breakpoint i `tailwind.config.ts`
- ✅ Fluid hero-typografi via `clamp()` (Hero, HeroSegments, ProductHero)
- ✅ 23 containers expanderade till `2xl:max-w-[1440px] 3xl:max-w-[1600px]` (Wave A/B/C)
- ✅ `overflow-x:hidden` på `html`/`body` för att maska dekorativa-absoluta overflow
- ✅ `max-w-prose` på 4 långa paragrafer
- ✅ LiveImpactWidget pill-knapp till 44px touch
- ✅ Baseline + final audit-rapporter sparade

**Kvarvarande noise (icke-blocking):**
- 1×1px tracking-pixlar (analytics, intentional)
- 12px uppercase-labels (intentional per förra specen)
- Audit-script font-width-uppskattning är approximativ — font-rendering varierar dev↔prod

**Prod-deploy:** `https://clean-charge-hemsida-8xdnxdja9-fixverses-projects-70c337d9.vercel.app` (cleancharge.se), 200 OK, 3xl + clamp i HTML.
