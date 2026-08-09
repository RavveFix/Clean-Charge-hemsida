# SEO Improvement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Förbättra Clean Charge AB:s organiska synlighet genom teknisk SEO, tydligare sökintentioner, internlänkning och lokal trovärdighet.

**Architecture:** Behåll Next.js App Router och befintliga SEO-hjälpare. Samla gemensamma SEO-värden i `lib/seo.ts` och `lib/jsonld.ts`, uppdatera prioriterade sidor med unik metadata och tydliga interna länkar, och validera sedan de genererade SEO-filerna genom build-output.

**Tech Stack:** Next.js 16 App Router, TypeScript, Metadata API, Schema.org JSON-LD, npm scripts.

---

### Task 1: Kartlägg routes och SEO-gap

**Files:**
- Read: `app/**/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `lib/seo.ts`, `lib/jsonld.ts`
- Create: `docs/plans/2026-08-09-seo-audit.md`

**Steps:**
1. Lista alla publika routes och jämför dem med sitemap.
2. Notera saknad eller duplicerad metadata, H1, canonical, JSON-LD och internlänkar.
3. Skriv en kort audit med prioritet hög/medel/låg.
4. Kontrollera att varje föreslagen ändring bygger på befintligt innehåll eller verifierbara företagsuppgifter.
5. Commit: `docs: add SEO audit`.

### Task 2: Stärk gemensamma SEO-hjälpare

**Files:**
- Modify: `lib/seo.ts`
- Modify: `lib/jsonld.ts`

**Steps:**
1. Lägg bara till återanvändbara hjälpare som behövs av auditens prioriterade gap.
2. Behåll svenska språk- och företagsvärden konsekventa.
3. Lägg inte till schema för uppgifter som saknar verkligt underlag.
4. Kör `npm run typecheck`.
5. Commit: `refactor: strengthen shared SEO helpers`.

### Task 3: Uppdatera prioriterade sidor

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/foretag/page.tsx`
- Modify: `app/fastighetsbolag/page.tsx`
- Modify: `app/laddbox-orebro/page.tsx`
- Modify: `app/hela-sverige/page.tsx`
- Modify: `app/vad-kostar-laddbox/page.tsx`
- Modify: `app/ladda-bilen-bidrag/page.tsx`
- Modify: `app/produkter/page.tsx`

**Steps:**
1. Ge varje sida ett tydligt primärt sökord och en unik sökintention.
2. Förbättra title och description utan överdriven upprepning.
3. Kontrollera att sidans H1 och första innehåll svarar direkt på sökintentionen.
4. Lägg till eller förbättra relevanta interna länkar mellan tjänste-, pris-, produkt- och kontaktsidor.
5. Behåll befintligt svenskt innehåll, responsivitet, CTA-flöden och samtyckesflöden.
6. Kör `npm run typecheck`.
7. Commit: `feat: improve priority page SEO`.

### Task 4: Förbättra lokal trovärdighet

**Files:**
- Modify: `app/laddbox-orebro/page.tsx`
- Modify: `app/om-oss/page.tsx`
- Modify: `app/kontakt/page.tsx`
- Modify: `app/layout.tsx`

**Steps:**
1. Gör Örebro, adress, serviceområde, kontakt och auktorisationer tydliga där de redan stöds av innehållet.
2. Kontrollera att LocalBusiness-data matchar synlig information.
3. Lägg inte till påhittade recensioner, kundcase, betyg eller länkar.
4. Kör `npm run typecheck`.
5. Commit: `feat: clarify local SEO signals`.

### Task 5: Validera indexeringsfiler och metadata

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `app/robots.ts`
- Possibly modify: `app/not-found.tsx`

**Steps:**
1. Ta bort routes från sitemap som inte finns eller inte ska indexeras.
2. Kontrollera att sitemapens datum och URL:er är korrekta och stabila.
3. Behåll `/api/` blockerad och sitemap-URL:n på rätt domän.
4. Kör `npm run typecheck`.
5. Commit: `fix: align sitemap and robots SEO`.

### Task 6: Slutverifiering

**Files:**
- Read: generated Next.js build output
- Read: `app/sitemap.ts`, `app/robots.ts`, updated metadata files

**Steps:**
1. Kör `npm run typecheck`.
2. Kör `npm run build`.
3. Kontrollera att builden passerar utan route- eller metadatafel.
4. Kontrollera manuellt att prioriterade sidor har unik title, description, canonical, H1 och internlänkar.
5. Dokumentera kvarvarande osäkerheter i auditfilen.
6. Commit: `chore: verify SEO improvements`.
