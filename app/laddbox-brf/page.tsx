import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Landmark, Phone, Settings, Users } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import ArticleMeta from '@/components/ArticleMeta';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialSources from '@/components/EditorialSources';
import FaqSection from '@/components/FaqSection';
import RelatedSolutions from '@/components/RelatedSolutions';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';

const PUBLISHED_DATE = '2026-08-17';
const MODIFIED_DATE = '2026-08-19';

export const metadata: Metadata = {
  title: 'Laddbox till BRF – Lastbalansering & Debitering',
  description:
    'Guide till laddbox i bostadsrättsförening: lastbalansering, individuell debitering via Monta och Ladda bilen-bidraget – från styrelseunderlag till drift.',
  keywords: [
    'laddbox brf',
    'laddbox bostadsrättsförening',
    'lastbalansering brf',
    'individuell debitering laddbox',
    'ladda bilen bidrag brf',
  ],
  alternates: { canonical: 'https://www.cleancharge.se/laddbox-brf' },
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox till BRF – lastbalansering, debitering och bidrag',
    description:
      'Så planerar styrelsen laddning som går att bygga ut, debitera rättvist och drifta utan extra administration.',
    url: 'https://www.cleancharge.se/laddbox-brf',
    images: openGraphImages('Laddbox till BRF — lastbalansering, debitering och bidrag', '/laddbox-brf/opengraph-image'),
    type: 'article',
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: ['Clean Charge AB'],
  },
};

const faqEntries = [
  {
    question: 'Behöver föreningen bygga ut elen för att installera laddboxar i garaget?',
    answer:
      'Inte alltid. En effektutredning och dynamisk lastbalansering visar hur många laddplatser fastigheten kan hantera med befintlig kapacitet och när en uppgradering faktiskt behövs.',
  },
  {
    question: 'Hur betalar medlemmarna för sin egen laddning?',
    answer:
      'Med Monta identifieras användaren och debiteras efter faktisk förbrukning. Föreningen slipper manuella avläsningar och elkostnaden hamnar inte på medlemmar som inte laddar.',
  },
  {
    question: 'Kan vi börja med några platser och bygga ut senare?',
    answer:
      'Ja. Vi kan planera centraler, kabelvägar och styrning för framtida platser men installera en första etapp utifrån dagens behov och tillgängliga effekt.',
  },
  {
    question: 'Kan en BRF få Ladda bilen-bidrag?',
    answer:
      'För laddpunkter till boende och medlemmar finns Ladda bilen kvar. Om föreningen installerar laddning för externa användare eller lokalhyresgäster kan andra regler och ansökan före installation gälla.',
  },
  {
    question: 'Vad behöver styrelsen för att fatta beslut?',
    answer:
      'Ett beslutsunderlag bör omfatta effekt- och behovsanalys, etappplan, debiteringsmodell, offert och ansvar för installation, drift och support.',
  },
];

const article = articleJsonLd({
  headline: 'Laddbox till BRF – Lastbalansering, Debitering och Bidrag',
  path: '/laddbox-brf',
  description: metadata.description!,
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'Kunskapsbank', path: '/kunskap' },
  { name: 'Laddbox till BRF', path: '/laddbox-brf' },
]);

const faq = faqJsonLd(faqEntries);

const pillars = [
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Lastbalansering',
    description: 'Systemet delar den effekt som finns mellan fastigheten och laddarna, i stället för att dimensionera för full effekt på varje plats.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Individuell debitering',
    description: 'Varje medlem betalar sin egen kWh. Föreningen slipper schabloner, Excel-listor och onödiga mellanhavanden.',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Underlag för styrelsen',
    description: 'Besiktning, etappplan och tydlig offert gör det möjligt att fatta beslut på fakta i stället för antaganden.',
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: 'Skalbar utbyggnad',
    description: 'Förbered infrastrukturen för fler laddplatser, även om första etappen bara omfattar de med elbil i dag.',
  },
];

export default function LaddboxBrfPage() {
  return (
    <ClientLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="relative overflow-hidden bg-white pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ name: 'Kunskapsbank', href: '/kunskap' }, { name: 'Laddbox till BRF', href: '/laddbox-brf' }]} variant="light" />
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Building2 className="h-4 w-4" />
              Guide för styrelser och fastighetsägare
            </div>
            <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
              Laddbox till BRF – <span className="text-[#00b182]">lastbalansering</span>, debitering och bidrag.
            </h1>
            <p className="mb-7 max-w-2xl text-xl font-medium leading-relaxed text-slate-600">
              En villa-laddbox i ett föreningsgarage blir snabbt orättvis och dyr. Här är hur ni delar effekten, låter varje medlem betala sin egen laddning och skapar ett underlag som går att besluta om.
            </p>
            <ArticleMeta published={PUBLISHED_DATE} modified={MODIFIED_DATE} />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/fastighetsbolag" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#00b182] px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-lg shadow-[#00b182]/20 transition-colors hover:bg-[#009970]">
                Lösning för BRF & fastighet
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:0197604290" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-black uppercase tracking-wider text-slate-900 transition-colors hover:bg-slate-50">
                <Phone className="h-5 w-5" />
                019-760 42 90
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-4xl font-black tracking-tighter text-slate-900">Fyra saker som skiljer BRF från villa</h2>
          <p className="mb-16 max-w-2xl text-lg text-slate-500">Samma laddare kan användas, men kalkylen, ansvaret och förvaltningen behöver planeras på ett helt annat sätt.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:border-[#00b182]/30 hover:bg-emerald-50/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#00b182] shadow-sm">{pillar.icon}</div>
                <h3 className="mb-3 text-lg font-black text-slate-900">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white md:text-5xl">Lastbalansering är inte en extragrej.</h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-400">Tio platser à 11 kW är 110 kW. De flesta föreningsgarage har inte den marginalen mot hissar, tvättstuga och bostäder. Dynamisk lastbalansering ger bilarna den effekt som blir över och skyddar fastighetens huvudsäkring.</p>
            <Link href="/basta-laddboxen" className="inline-flex items-center gap-3 font-black uppercase tracking-wider text-[#00b182] transition-colors hover:text-emerald-300">
              Jämför laddboxar för BRF
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-4 text-2xl font-black text-white">Individuell debitering, inte schablon</h2>
            <p className="leading-relaxed text-slate-400">Med Monta kan föreningen koppla användning till rätt medlem, följa driften och låta varje förare betala för sin faktiska förbrukning. Det gör beslutet enklare att förankra och anläggningen lättare att förvalta.</p>
            <Link href="/ladda-bilen-bidrag" className="mt-6 inline-flex items-center gap-2 font-black uppercase tracking-wider text-[#00b182] transition-colors hover:text-emerald-300">
              Läs om Ladda bilen-bidraget
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-slate-900">Från garagebesök till drift</h2>
            <ol className="space-y-6">
              {[
                ['El och behov', 'Hur många platser, vilken säkring och hur garaget faktiskt används.'],
                ['Underlag till styrelsen', 'Etappplan, lastbalansering, debiteringsmodell och offert som går att fatta beslut på.'],
                ['Bidrag och installation', 'Ansökan där den krävs, sedan installation av behörig elektriker.'],
                ['Debitering och drift', 'Monta driftsätts, medlemmarna ansluts och föreningen får en tydlig kontaktväg.'],
              ].map(([title, description], index) => (
                <li key={title} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-black text-[#00b182]">{index + 1}</span>
                  <div>
                    <h3 className="mb-1 text-xl font-black text-slate-900">{title}</h3>
                    <p className="leading-relaxed text-slate-500">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <EditorialSources
            sources={[
              { label: 'Naturvårdsverket – förändringar i Ladda bilen-bidraget', href: 'https://www.naturvardsverket.se/bidrag/ladda-bilen/forandringar-i-ladda-bilen-bidraget/' },
              { label: 'Elsäkerhetsverket – installera laddningspunkt', href: 'https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare/installera-din-laddningspunkt/' },
              { label: 'Zaptec – dynamisk fas- och lastbalansering', href: 'https://help.zaptec.com/using-products/about-zaptec-s-dynamic-phase-and-load-balancing' },
            ]}
          />
        </div>
      </section>

      <FaqSection entries={faqEntries} />
      <RelatedSolutions current="fastighetsbolag" />
    </ClientLayout>
  );
}
