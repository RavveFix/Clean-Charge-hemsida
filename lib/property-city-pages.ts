import type { FaqEntry } from '@/lib/jsonld';

export type PropertyCityPage = {
  slug: 'stockholm' | 'goteborg' | 'malmo';
  city: string;
  region: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  angle: string;
  challengesTitle: string;
  challengesIntro: string;
  challenges: Array<{ title: string; description: string }>;
  processTitle: string;
  process: string;
  cta: string;
  faq: FaqEntry[];
};

export const PROPERTY_CITY_PAGES: Record<PropertyCityPage['slug'], PropertyCityPage> = {
  stockholm: {
    slug: 'stockholm',
    city: 'Stockholm',
    region: 'Stockholm och Mälardalen',
    title: 'Laddbox BRF Stockholm – innerstadsgarage',
    description:
      'Laddbox för BRF och fastighetsbolag i Stockholm. Lastbalansering, Zaptec och individuell Monta-debitering – projektering från Örebro och lokal installation.',
    heading: 'Laddbox för BRF i Stockholm – lastbalansering i innerstadsgarage.',
    intro:
      'När garagets effekt redan delas av hissar, ventilation och bostäder krävs en plan som fungerar på riktigt. Vi projekterar laddningen, samordnar en behörig elektriker på plats och driftar anläggningen i Monta.',
    angle: 'För BRF och fastighetsbolag i Stockholm',
    challengesTitle: 'Där källargaraget sätter villkoren',
    challengesIntro:
      'Täta fastigheter och begränsad elkraft gör effektplanen lika viktig som själva laddboxen.',
    challenges: [
      {
        title: 'Tight el i befintliga garage',
        description:
          'Vi kartlägger tillgänglig effekt och dimensionerar dynamisk lastbalansering innan ni bestämmer antal laddplatser.',
      },
      {
        title: 'Etappvis utbyggnad',
        description:
          'Börja med dagens behov men förbered centraler, kabelvägar och system för den kö som kommer senare.',
      },
      {
        title: 'Tydlig debitering',
        description:
          'Varje användare identifieras och betalar sin egen förbrukning i stället för att kostnaden hamnar på föreningen.',
      },
    ],
    processTitle: 'Från elcentral till debiterad kWh',
    process:
      'Vi tar fram underlag för styrelsen, effektberäknar, samordnar installationen med behörig elektriker och driftsätter Monta. Ni får en kontakt för lösning, drift och vidare utbyggnad.',
    cta: 'Har garaget i er BRF blivit en kölista?',
    faq: [
      {
        question: 'Behöver en BRF i Stockholm bygga ut elen för att installera laddboxar?',
        answer:
          'Inte alltid. En effektutredning och dynamisk lastbalansering visar hur många laddplatser fastigheten kan hantera med befintlig kapacitet och när en uppgradering kan behövas.',
      },
      {
        question: 'Kan ni installera i ett innerstadsgarage?',
        answer:
          'Ja. Vi projekterar från Örebro och samordnar montage med behörig elektriker på plats i Stockholm. Förutsättningar som kabelvägar, brandskydd och elcentral gårs igenom före offert.',
      },
      {
        question: 'Hur betalar medlemmarna för sin laddning?',
        answer:
          'Med Monta kopplas varje användare till sin egen laddning och debiteras efter faktisk förbrukning. Styrelsen får en tydlig driftöversikt utan manuella avläsningar.',
      },
      {
        question: 'Kan vi bygga ut anläggningen i flera steg?',
        answer:
          'Ja. Vi projekterar stam och styrning för fler laddpunkter så att ni kan börja i en rimlig första etapp och bygga vidare när behovet ökar.',
      },
    ],
  },
  goteborg: {
    slug: 'goteborg',
    city: 'Göteborg',
    region: 'Göteborg och kranskommunerna',
    title: 'Laddbox BRF & hyresfastighet Göteborg',
    description:
      'Laddbox för BRF och hyresfastighet i Göteborg. Zaptec, lastbalansering och Monta-debitering med projektering från Örebro och lokal installation.',
    heading: 'Laddbox för BRF och hyresfastighet i Göteborg – från hamnen till kranskommunerna.',
    intro:
      'När bostadsrätter, hyresrätter och verksamhetslokaler delar samma fastighet behöver laddningen vara rättvis, skalbar och enkel att administrera. Vi gör elunderlag, samordnar montage på plats och tar hand om driften.',
    angle: 'För BRF och hyresfastigheter i Göteborg',
    challengesTitle: 'En anläggning som tål blandad bebyggelse',
    challengesIntro:
      'Olika användare, avtal och parkeringsytor kan dela samma teknik – om systemet planeras från början.',
    challenges: [
      {
        title: 'Flera användargrupper',
        description:
          'Boende, hyresgäster och besökare kan få separata behörigheter och debiteringsregler i samma laddanläggning.',
      },
      {
        title: 'Effekt där den behövs',
        description:
          'Lastbalansering fördelar effekten efter fastighetens aktuella förbrukning så att laddningen inte överbelastar abonnemanget.',
      },
      {
        title: 'Drift som går att följa',
        description:
          'Med Monta ser ni laddstatus, användning och betalningar utan att fastighetsteamet behöver administrera varje laddning.',
      },
    ],
    processTitle: 'Projektering och drift. Montage på plats.',
    process:
      'Vi ansvarar för behovsanalys, dimensionering, hårdvara och Monta-konfiguration. Den fysiska installationen utförs av behörig elektriker i Göteborg, med ett tydligt underlag och en gemensam plan.',
    cta: 'Har ni både BRF och hyresrätter i samma kvarter?',
    faq: [
      {
        question: 'Kan samma laddsystem användas för både BRF och hyresfastighet?',
        answer:
          'Ja. Vi sätter upp användare, behörigheter och debitering efter fastighetens struktur så att olika grupper kan använda samma infrastruktur utan att kostnader blandas ihop.',
      },
      {
        question: 'Vem installerar laddboxarna i Göteborg?',
        answer:
          'Vi projekterar och samordnar arbetet från Örebro. Montaget utförs av behörig elektriker på plats i Göteborg enligt underlaget för er fastighet.',
      },
      {
        question: 'Går det att ha gästladdning senare?',
        answer:
          'Ja. En anläggning kan förberedas för gästladdning och öppnas när fastighetsägaren vill, utan att ni behöver byta ut den grundläggande infrastrukturen.',
      },
      {
        question: 'Hur undviker vi höga effekttoppar?',
        answer:
          'Dynamisk lastbalansering prioriterar fastighetens övriga förbrukning och ger laddarna den effekt som finns tillgänglig. Det kan minska behovet av att uppgradera abonnemanget.',
      },
    ],
  },
  malmo: {
    slug: 'malmo',
    city: 'Malmö',
    region: 'Malmö, Lund och Öresundsregionen',
    title: 'Laddbox BRF Malmö & Lund – Öresund',
    description:
      'Laddbox för BRF och fastighetsbolag i Malmö och Lund. Zaptec, lastbalansering och Monta-debitering med projektering från Örebro och lokal installation.',
    heading: 'Laddbox för BRF i Malmö och Lund – Öresundsregionen.',
    intro:
      'Tomrör och en ny elcentral är en bra start, men de löser inte kapacitet, användare eller betalning. Vi gör en laddplan för fastigheten, samordnar behörig installation på plats och håller ihop driften efteråt.',
    angle: 'För BRF och fastighetsbolag i Malmö och Lund',
    challengesTitle: 'Nyare bestånd är inte samma sak som färdig laddning',
    challengesIntro:
      'Även moderna garage behöver en plan för effekt, framtida utbyggnad och rättvis betalning.',
    challenges: [
      {
        title: 'Förberedelse som går att använda',
        description:
          'Vi granskar befintliga tomrör, centraler och gruppförteckningar innan lösningen dimensioneras och offereras.',
      },
      {
        title: 'Kapacitet över tid',
        description:
          'Styrningen anpassar laddningen efter fastighetens last och gör det möjligt att växa utan att överdimensionera dag ett.',
      },
      {
        title: 'Enkel ekonomihantering',
        description:
          'Monta kopplar användning till rätt person och ger styrelse eller förvaltare underlag för uppföljning och debitering.',
      },
    ],
    processTitle: 'Färdigställ garaget. Öppna debiteringen.',
    process:
      'Vi går från förutsättningarna i garaget till en konkret etappplan: effekt, hårdvara, kabelvägar, installation och Monta. Projekteringen sker från Örebro och montaget utförs av behörig elektriker i regionen.',
    cta: 'Tomrör i garaget – men ingen debitering?',
    faq: [
      {
        question: 'Räcker tomrör och förberedd elcentral för att installera laddboxar?',
        answer:
          'De är bra förutsättningar, men vi behöver fortfarande granska tillgänglig effekt, kabelvägar, skydd och hur många laddplatser som ska kunna byggas ut över tid.',
      },
      {
        question: 'Installerar ni i Malmö och Lund?',
        answer:
          'Ja. Vi projekterar lösningen och samordnar arbetet från Örebro, medan behörig elektriker i Malmö- och Lundområdet utför montaget på plats.',
      },
      {
        question: 'Kan styrelsen följa laddningen efter driftsättning?',
        answer:
          'Ja. Monta ger en samlad vy för laddstatus och användning, medan varje förare betalar för sin egen förbrukning enligt den modell fastigheten väljer.',
      },
      {
        question: 'Kan vi börja med få laddplatser?',
        answer:
          'Ja. Vi kan planera infrastrukturen för framtida platser och installera den första etappen utifrån dagens efterfrågan och tillgängliga effekt.',
      },
    ],
  },
};

export function getPropertyCityPage(slug: string) {
  return PROPERTY_CITY_PAGES[slug as PropertyCityPage['slug']];
}
