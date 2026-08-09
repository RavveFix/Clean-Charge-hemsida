# SEO-design för Clean Charge AB

## Mål
Förbättra Clean Charge AB:s organiska synlighet genom ett helhetslyft av teknisk SEO, sökordsanpassning, sidstruktur, lokal relevans och förtroendesignaler.

## Nuläge
Projektet använder Next.js App Router och har redan:

- global och sidunik metadata
- canonical URLs
- sitemap och robots
- Open Graph-bilder
- JSON-LD för organisation, lokal verksamhet, tjänster, FAQ och brödsmulor

## Lösning

### Teknisk SEO
- Kontrollera att sitemap bara innehåller riktiga, indexerbara routes.
- Behålla `/api/` blockerad i robots.
- Säkerställa unik metadata, canonical och social metadata för prioriterade sidor.
- Förbättra relevanta JSON-LD-typer och kontrollera deras koppling till sidinnehållet.
- Kontrollera 404, indexering, interna länkar och eventuellt dubbelt innehåll.

### Sökord och sidstruktur
Prioriterade sökintentioner:

- `/foretag`: laddbox för företag
- `/fastighetsbolag`: laddbox för BRF och fastighetsbolag
- `/laddbox-orebro`: lokal installation
- `/hela-sverige`: rikstäckande leverans
- `/vad-kostar-laddbox`: pris och offert
- `/ladda-bilen-bidrag`: bidrag och regler
- `/produkter`: produkter och jämförelser

Förbättringar ska fokusera på rubriker, ingresser, FAQ, CTA:er och relevanta interna länkar. Texten ska vara naturlig och svara på användarens sökintention.

### Lokal SEO och förtroende
- Göra företagets erfarenhet, auktorisationer, område och arbetssätt tydligare.
- Använda kundcase eller referenser endast där det finns verkligt underlag.
- Hålla företagsuppgifter konsekventa.
- Förbättra Örebro-relevans utan tunna stadssidor.

## Verifiering
Kör:

- `npm run typecheck`
- `npm run build`

Kontrollera även genererad sitemap, robots, metadata samt att prioriterade sidor har unik titel, beskrivning, canonical, H1 och internlänkar.

## Avgränsningar
Ingen garanti om en viss Google-position. Ingen ändring av svenskt innehåll, samtyckesflöden eller responsivt beteende utan direkt SEO-skäl.
