# Frontend-granskning — cleancharge.se

**Granskat:** 2026-05-22 · lokalt mot `npm run dev` (Next 16, React 19, Tailwind 3.4) · viewport 1440 + 390.

Sammanfattningen nedan är sorterad efter konsekvens. Buggar i ⛔-listan är synliga för besökare just nu och bör fixas innan estetiska förbättringar.

---

## ⛔ Måste-fixas (buggar + brutna länkar)

### 1. Dubbel titelsuffix på flera sidor
`app/layout.tsx` definierar `template: '%s | Clean Charge AB'`. Flera undersidor sätter dock själv `title: 'X | Clean Charge AB'` — resultatet renderas som `'X | Clean Charge AB | Clean Charge AB'`.

Drabbade: `app/foretag/page.tsx:7`, `app/fastighetsbolag/page.tsx:7`, `app/dc-laddstation/page.tsx:7`, samt `om-oss` via en gammal title. Fixa genom att ta bort `| Clean Charge AB` från varje sidas egen title — `template`et lägger till det.

### 2. Footerns lösningsmeny pekar fel
`components/Footer.tsx:55-56`:
```
{ label: 'För Företag', href: '/publik' },   // ska vara /foretag
{ label: 'För BRF',     href: '/publik' },   // ska vara /fastighetsbolag
```
Sidorna `/foretag` och `/fastighetsbolag` finns och är skrivna — men inget länkar dit från footern, vilket också skadar internlänkning för SEO.

### 3. /produkter triggar hydration mismatch
Konsollen loggar `Error: Hydration failed because the server rendered HTML didn't match the client.` på `/produkter`. Sannolikt orsakat av `ProductHero` (Spline-scen) eller `ProductGrid`'s slumpgenererade dekoration. Wrappa Spline-noden i `dynamic(() => …, { ssr: false })` eller mounta innehållet bakom en `useEffect`/`mounted`-flagga.

### 4. Formulärfält saknar `htmlFor`
`components/ContactSection.tsx:115, 129, 141, 156` — alla fyra labels är `<label className="…">…</label>` utan `htmlFor` mot input-`id`. Screenreaders kopplar inte texten till fältet. Lägg till `htmlFor={id}` (och `aria-label` på textarea + select).

### 5. "Bäst i test" hårdkodat på *varje* produkt
`components/ProductGrid.tsx` renderar badgen `Bäst i test` per kort i en `.map()`. Fyra produkter kan inte alla vara bäst i test. Antingen ta bort, eller lyft till `Product`-typen så bara faktiska tester får märket. (Marknadsföringsmässig + förtroenderisk — Konsumentverket kan klassa det som vilseledande.)

### 6. `/om-oss` är i praktiken tom
`app/om-oss/page.tsx` renderar bara `<AboutSection/>` — exakt samma komponent som ligger på startsidan. Ingen team-presentation, ingen historik, ingen grundarinfo trots att SEO-beskrivningen lovar *"grundades 2021 i Örebro"*. Antingen bygg riktig om-oss-content, eller redirecta `/om-oss` till sektionen på startsidan.

### 7. Sociala ikoner i footern länkar till `#`
`components/Footer.tsx:43` — alla fyra ikoner är `<a href="#">`. Antingen länka till riktiga konton eller dölj dem tills de finns.

### 8. Footer hover-färg = Monta-blå
Alla länkar i footern har `hover:text-[#003DFF]` (Monta-blå). Resten av sajten använder `cc-green`. Inkonsekvent och får footern att kännas obesläktad med huvud-CTA:erna.

---

## 🟠 Designkonsekvenser — det här bromsar wow-faktorn

### 9. Endast en font, kallad tre saker
`tailwind.config.ts:14-18`:
```ts
fontFamily: {
  sans: ['Instrument Sans', 'sans-serif'],
  'serif-drama': ['Instrument Sans', 'sans-serif'],   // identisk
  monta: ['Instrument Sans', 'sans-serif'],            // identisk
}
```
Tre fontslot men en font. Resultat: noll typografisk hierarki. Hjältens H1, statsens siffror, formulärlabels och kvittotext har alla samma karaktär. **Lägg till en display-font** (t.ex. PP Neue Montreal, Söhne, Migra, eller Recoleta för kontrast) och behåll Instrument Sans för brödtext. Förhållandet display ⇄ body är där dagens design dör.

### 10. Stat-ikonerna mismatchar betydelsen
`components/StatsStrip.tsx:6` importerar `Zap, Award, MapPin, Clock`. På live-sidan visas dock klockan både för "Års erfarenhet" och "Svarstid", och `Award` ser ut som klocka. Mappningen behöver ses över så ikon = innebörd (t.ex. `BatteryCharging` för laddningar, `Star` för betyg, `Calendar` för år, `Clock` för svarstid).

### 11. Partners visas som grå text — inte logotyper
Både StatsStrip (`['EASEE', 'ZAPTEC', 'MONTA', 'AUTEL']`) och footern renderar dessa som `<span>` med bokstavsmellanrum. För ett företag vars hela trovärdighet bygger på *"auktoriserad partner"* förlorar man ett av sidans starkaste säljargument. Lägg in riktiga SVG-logotyper i monokrom variant — finns på respektive presskit.

### 12. `Solutions`-kortens kopplingar är inkonsekventa
`components/SolutionsSection.tsx`: kort #2 ("För Bostadsrättsföreningar") länkar till `/publik` medan dedikerad `/fastighetsbolag`-sida existerar. Samma fel som Footer #2.

### 13. Tre nästan identiska produktkort
`ProductGrid` ger alla fyra produkter samma layout: bild i bakgrundskort + namn + 5 stjärnor + "Bäst i test" + chip-rad + pris + knapp. Tänk om en eller två kort kan bryta mönstret (t.ex. featured-kort med större bild, eller färgad bakgrund för DC-laddaren) — det skulle skapa visuell hierarki och göra det enklare för besökaren att förstå "vilket val är för mig".

### 14. Knappstilarna är spridda
`globals.css` definierar `.btn-cc`, `.btn-monta`, `.shimmer-btn` parallellt med Tailwind-byggda CTA-knappar i komponenterna (t.ex. `bg-brand-green text-white rounded-full…`). Konsolidera till **två** primitiv: `Button primary` (grön/svart) och `Button secondary` (vit/utline). Den maximalist-italic "INSTALLERAD."-knappen i `PreFooterCTA` är sidans starkaste moment — den stilkonfidensen borde leda alla CTA:er.

### 15. Hjältens högra sida lämnar oss i sticket på `/produkter`
`ProductHero` riggar en Spline-scen men före loadtid visas bara tom plats. Antingen lägg en statisk poster-bild (t.ex. en Zaptec Go-render från `public/`) som visas tills scenen tonar in, eller skippa 3D-scenen på produktsidan helt och låt det första produktkortet ta plats där.

### 16. Mobil: navbar overflowar
Vid 390 px läcker `nav`-pillen lite över höger viewport-kant (syns i `cc-mobile-hero.png`). Navens `w-[95%] max-w-7xl` kombinerat med `px-6` gör att den blir bredare än man tror. Lägg till `box-sizing: border-box` (Tailwind har det redan) och justera padding till `px-4` på mindre skärmar, eller `max-w-[calc(100%-1rem)]`.

### 17. Om-oss-sidan har 1000px tomrum innan footern
Som följd av punkt 6 — när det enda innehållet är AboutSection (som är `py-32`) får besökaren en gigantisk vit yta och måste scrolla för att komma till PreFooterCTA. Sidans `pt-32` förvärrar det.

---

## 🟢 Mindre observationer

- **Custom cursor** är aktiv för alla — på touch-enheter ska den helt enkelt inte renderas. Komponenten behöver en `@media (hover: hover)`-guard eller motsvarande i JS.
- **`AboutSection`-bg**: `bg-bg-surface` ger grårosa nyans som inte återfinns på resten av sidan — kollar man närmare ser det ut som om sidan tappat färg där. Antingen kommittera till en sektionsfärgskontrast (mörk panel som `PreFooterCTA`) eller stick till `bg-white`.
- **`LiveImpactWidget`** dyker upp innan man hunnit läsa hjälten — bra moment men positionen `top-left` kolliderar visuellt med navens vänsterkant på mellanstora skärmar. Flytta in den i hjältesektionen som en del av designen i stället för flytande overlay.
- **`Footer.tsx:71-79`**: "Installation" och "Support & Manualer" pekar båda till `/support`. Bör peka till olika ankarpunkter eller slå ihop till en länk.
- **Stats-card siffran "0"** i layoutsnapshot pekar på att GSAP-räknaren startar från 0 och endast animerar via intersection observer — om man har scrollat förbi sektionen och tillbaka stannar siffrorna på 0 i ett par sekunder. Kontrollera att `setVisible(true)` triggas korrekt vid back-navigation.
- **JSON-LD** i `layout.tsx` är bra (`Organization` schema) — men `sameAs` listar bara Facebook och LinkedIn. Lägg till YouTube + Instagram om de finns.

---

## 🎨 Designriktning — vad man får om man bara lappar

Sidan har redan en mörk italic-burst i `PreFooterCTA` ("LADDBOX. INSTALLERAD.") som är genuint snygg, plus en levande Spline-scen i hjälten och ett Monta-block med stark blå. Om man bara fixar punkterna ovan landar man på en *kompetent* nordisk SaaS-look — fin men anonym.

Om Clean Charge vill att sidan ska **kännas som något få konkurrenter har**, är de tre största hävstängerna:

1. **Display-font (punkt 9)** — den enda enskilda förändringen som skulle förändra varumärkets karaktär mest.
2. **Mer "INSTALLERAD."-energi** — den editorial-italic-attityden borde dyka upp på minst ett ställe per undersida (hjälte-callout, sektionsavslut etc.), inte bara i pre-footern.
3. **Logotyper istället för text** för partners — det ger sidan tyngd och säljer "auktoriserad partner"-budskapet direkt.

---

## 📋 Förslag på prioritering

| Sprint | Innehåll | Effekt |
|--------|----------|--------|
| **Nu** | Punkt 1–4 (titel, footer-länkar, hydration, label-htmlFor) | Buggar bort, SEO + a11y upp |
| **Vecka 1** | Punkt 5–8 (innehåll om-oss, sociala, hover-färg, Bäst i test) | Trovärdighet upp |
| **Vecka 2–3** | Punkt 9, 11, 14 (display-font, partner-logotyper, knappsystem) | Varumärket sticker ut |
| **Senare** | Punkt 10, 13, 15, 17 (ikoner, produktkort, hjältevarianter, om-oss-tomrum) | Polering |

Skärmdumpar från granskningen ligger i projektroten: `cc-home-desktop.png`, `cc-hero-vp.png`, `cc-stats.png`, `cc-features.png`, `cc-monta.png`, `cc-solutions.png`, `cc-solution-cards.png`, `cc-about-footer.png`, `cc-mobile-hero.png`, `cc-produkter.png`, `cc-foretag.png`, `cc-om-oss.png`.
