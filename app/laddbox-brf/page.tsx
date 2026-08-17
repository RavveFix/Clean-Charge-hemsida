import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Gauge,
  Wallet,
  ClipboardList,
  Users,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleMeta from '@/components/ArticleMeta';
import EditorialSources from '@/components/EditorialSources';

const PUBLISHED_DATE = '2026-08-17';
const MODIFIED_DATE = '2026-08-17';

export const metadata: Metadata = {
  title: 'Laddbox till BRF – Lastbalansering & Debitering',
  description:
    'Guide till laddbox i bostadsrättsförening: lastbalansering i garaget, individuell debitering via Monta och Ladda bilen-bidraget. Från styrelseunderlag till drift.',
  keywords: [
    'laddbox brf',
    'laddbox bostadsrättsförening',
    'lastbalansering laddbox',
    'individuell debitering elbil',
    'laddstolpe brf',
    'laddbox föreningsgarage',
    'zaptec pro brf',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox till BRF – lastbalansering, debitering och bidrag',
    description:
      'Så tar styrelsen beslut, lastbalanserar garaget och debiterar varje medlem för sin egen laddning.',
    url: 'https://www.cleancharge.se/laddbox-brf',
    images: openGraphImages(
      'Laddbox till BRF — lastbalansering, debitering och bidrag',
      '/laddbox-brf/opengraph-image',
    ),
    type: 'article',
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: ['Clean Charge AB'],
  },
  alternates: { canonical: 'https://www.cleancharge.se/laddbox-brf' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Kunskapsbank', path: '/kunskap' },
  { name: 'Laddbox till BRF', path: '/laddbox-brf' },
]);

const article = articleJsonLd({
  headline: 'Laddbox till BRF – lastbalansering, debitering och bidrag',
  path: '/laddbox-brf',
  description:
    'Guide till laddbox i bostadsrättsförening: lastbalansering i garaget, individuell debitering via Monta och Ladda bilen-bidraget.',
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
});

const faqEntries = [
  {
    question: 'Behöver föreningen bygga ut elen för att sätta laddboxar i garaget?',
    answer:
      'Oftast inte från start. Lastbalansering fördelar den effekt som redan finns i fastigheten mellan laddarna och övrig förbrukning, så att säkringen inte löser ut. En elbesiktning visar om ni kan börja med befintlig anslutning och när en utbyggnad faktiskt lönar sig.',
  },
  {
    question: 'Hur betalar medlemmarna för sin egen laddning?',
    answer:
      'Varje användare identifieras (app eller RFID) och Monta debiterar den faktiska förbrukningen. Föreningen slipper dela elkostnaden schablonmässigt, och den som inte har elbil betalar inte för andras laddning.',
  },
  {
    question: 'Kan vi börja med några platser och bygga ut senare?',
    answer:
      'Ja. Det vanliga är att förbereda stammar och lastbalansering för fler platser än ni sätter första året. Då blir nästa etapp en ny laddare på befintlig infrastruktur, inte en ny elentreprenad.',
  },
  {
    question: 'Vilken laddbox passar BRF bäst?',
    answer:
      'Zaptec Pro är vårt standardval i föreningsgarage: den är byggd för många laddpunkter på delad kapacitet, har RFID och går att koppla mot Monta för debitering. Easee och Autel används när förutsättningarna kräver det. Villa-boxar som Zaptec Go är sällan rätt i ett gemensamt garage.',
  },
  {
    question: 'Kan BRF:en få Ladda bilen-bidrag?',
    answer:
      'För laddpunkter till boende och medlemmar söks Ladda bilen på samma sätt som tidigare. Sätter föreningen däremot laddare för lokalhyresgäster eller andra externa användare räknas den som företag, och då gäller de nya 2026-reglerna med ansökan före installation. Läs vår bidragsguide för nivåerna.',
  },
  {
    question: 'Vad behöver styrelsen för att fatta beslut?',
    answer:
      'Ett underlag med antal platser, elcentralens utrymme, föreslagen etappindelning, hur debiteringen sköts och en offert. Vi tar fram det underlaget efter en kostnadsfri genomgång av garaget – sedan kan styrelsen ta frågan till stämman.',
  },
];

const faq = faqJsonLd(faqEntries);

const steps = [
  {
    title: 'El och behov',
    desc: 'Hur många platser, vilken säkring, och hur garaget faktiskt används. Utan det blir både offert och styrelsebeslut gissningar.',
  },
  {
    title: 'Underlag till styrelsen',
    desc: 'Etappplan, lastbalansering, debiteringsmodell och pris. Något ni kan ta till stämman utan att översätta elektrikerjargong.',
  },
  {
    title: 'Bidrag och installation',
    desc: 'Ansökan där den krävs, sedan installation av behörig elektriker. Huvudkontoret sitter i Örebro – montaget görs av vårt nätverk på plats.',
  },
  {
    title: 'Debitering och drift',
    desc: 'Monta kopplas på, medlemmarna loggar in, och ni har en kontakt om något strular. Inte tre leverantörer att jaga.',
  },
];

const pillars = [
  {
    icon: Gauge,
    title: 'Lastbalansering',
    desc: 'Garagets el räcker sällan till 11 kW per plats. Systemet delar ut effekten som finns, natt mot dag, så att huset och bilarna samsas.',
  },
  {
    icon: Wallet,
    title: 'Individuell debitering',
    desc: 'Varje medlem betalar sin kWh. Föreningen tar inte elkostnaden på gemensamheten, och ni slipper excel-listor i källaren.',
  },
  {
    icon: ClipboardList,
    title: 'Styrelseunderlag',
    desc: 'Besiktning, etappplan och offert som går att besluta om. Inte en säljpresentation som saknar säkringstabell.',
  },
  {
    icon: Users,
    title: 'Skalbar utbyggnad',
    desc: 'Första etappen täcker de som kör elbil i dag. Nästa etapp hänger på samma stam när kön växer.',
  },
];

const cities = [
  {
    name: 'Stockholm',
    href: '/fastighetsbolag/stockholm',
    desc: 'Innerstadsgarage där elen redan är trång och lastbalansering är A och O.',
  },
  {
    name: 'Göteborg',
    href: '/fastighetsbolag/goteborg',
    desc: 'BRF och hyresfastighet från hamnen ut mot kranskommunerna.',
  },
  {
    name: 'Malmö',
    href: '/fastighetsbolag/malmo',
    desc: 'Nyare föreningsgarage i Malmö, Lund och Öresund.',
  },
];

export default function LaddboxBrfPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'Kunskapsbank', href: '/kunskap' },
                { name: 'Laddbox till BRF', href: '/laddbox-brf' },
              ]}
              variant="light"
            />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <ShieldCheck className="w-4 h-4" />
              Guide för styrelser och fastighetsägare
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox till{' '}
              <span className="text-[#00b182]">BRF</span>
              {' '}– lastbalansering, debitering och bidrag.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-7 max-w-2xl">
              En villa-laddbox i ett föreningsgarage blir snabbt orättvis och dyr. Här är hur ni tar beslut, delar effekten och ser till att varje medlem betalar sin egen laddning.
            </p>
            <ArticleMeta published={PUBLISHED_DATE} modified={MODIFIED_DATE} />
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fastighetsbolag"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Lösning för BRF & fastighet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0197604290"
                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                019-760 42 90
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Fyra saker som skiljer BRF från villa
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Samma Zaptec-laddare, helt annan kalkyl. Det är därför styrelsen behöver ett annat underlag än villaägaren.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Lastbalansering är{' '}
            <span className="text-[#00b182]">inte en extragrej.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl">
            Tio platser à 11 kW är 110 kW. De flesta föreningsgarage har inte den marginalen mot hiss, tvättstuga och lägenheter. Utan lastbalansering tvingas ni antingen bygga ut abonnemanget i onödan, eller sätta så få laddare att kön aldrig tar slut.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl">
            Dynamisk lastbalansering läser av fastighetens förbrukning och ger bilarna det som blir över – mer på natten, mindre när spisen och hissen går. Zaptec Pro är byggd för just det, med flera laddpunkter på samma anslutning.
          </p>
          <Link
            href="/basta-laddboxen"
            className="inline-flex items-center gap-3 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-4 transition-all"
          >
            Zaptec Pro jämfört med Easee och Autel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                Individuell debitering, inte schablon
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Om elen till garaget går på föreningens abonnemang utan mätning per användare betalar den utan elbil för grannens pendling. Det är det vanligaste skälet till att stämmor säger nej.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Med Monta identifieras varje medlem och faktureras för sin förbrukning. Föreningen ser driftstatus, ni slipper manuella avläsningar, och gästladdning kan slås på senare utan att bygga om.
              </p>
              <Link
                href="/monta"
                className="inline-flex items-center gap-3 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                Så fungerar Monta
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                Bidraget är inte samma som för villa
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Privatpersoner har Grön Teknik. BRF söker Ladda bilen. För laddpunkter till boende gäller i stort sett samma ansökan som tidigare. Sätter ni laddare för lokalhyresgäster eller externa användare räknas föreningen som företag – då måste ansökan in <strong>före</strong> installationen, med stöd 20–50 % beroende på storlek och max 15 000 kr per laddpunkt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Vi tar fram kalkylen ni skickar in. Siffrorna och villkoren ligger i bidragsguiden, inte här – de ändras, och ni ska inte fatta beslut på en föråldrad procentsats i en annan artikel.
              </p>
              <Link
                href="/ladda-bilen-bidrag"
                className="inline-flex items-center gap-3 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                Ladda bilen-bidraget 2026
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Från garagebesök till drift
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Fyra steg. Inget av dem kräver att styrelsen blir elektriker.
          </p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="bg-white border border-slate-100 rounded-3xl p-8"
              >
                <p className="text-[11px] font-black uppercase tracking-widest text-emerald-700 mb-4">
                  Steg {index + 1}
                </p>
                <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Samma modell i tre storstäder
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Vi har inget extra kontor i varje stad. Projekteringen sitter i Örebro, installationen görs av behöriga elektriker på plats.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{city.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{city.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <EditorialSources
            sources={[
              {
                label: 'Elsäkerhetsverket – installera laddningspunkt',
                href: 'https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare/installera-din-laddningspunkt/',
              },
              {
                label: 'Naturvårdsverket – Ladda bilen för föreningar',
                href: 'https://www.naturvardsverket.se/bidrag/ladda-bilen/forandringar-i-ladda-bilen-bidraget/',
              },
              {
                label: 'Zaptec – dynamisk lastbalansering',
                href: 'https://help.zaptec.com/using-products/about-zaptec-s-dynamic-phase-and-load-balancing',
              },
            ]}
          />
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions current="fastighetsbolag" />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Behöver styrelsen ett underlag?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Skicka adress och ungefärligt antal platser. Vi återkommer med en genomgång av elen – utan att ni först måste veta vilken box ni vill ha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
            >
              Skicka offertförfrågan
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0197604290"
              className="inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ring direkt
            </a>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
