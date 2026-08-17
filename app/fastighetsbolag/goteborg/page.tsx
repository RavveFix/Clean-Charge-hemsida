import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Building2, Users, Settings, Home, MapPin } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddbox BRF & hyresfastighet Göteborg',
  description:
    'Laddbox för BRF och hyresfastighet i Göteborg. Blandad bebyggelse från hamn till kranskommuner, Zaptec, lastbalansering och Monta-debitering. Projektering från Örebro, montage via behöriga elektriker. Ring 019-760 42 90.',
  keywords: [
    'laddbox BRF Göteborg',
    'laddbox hyresfastighet Göteborg',
    'elbilsladdning bostadsrätt Göteborg',
    'laddinfrastruktur Mölndal Partille',
    'Monta debitering hyresgäst',
    'Zaptec garage Göteborg',
    'lastbalansering flerbostadshus Västsverige',
    'laddstolpe BRF Kungälv Lerum',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox för BRF och hyresfastighet i Göteborg',
    description:
      'En modell för både bostadsrätt och hyres. Zaptec, lastbalansering och Monta – från hamnen till kranskommunerna.',
    url: 'https://www.cleancharge.se/fastighetsbolag/goteborg',
    images: openGraphImages(
      'Laddbox för BRF och hyresfastighet i Göteborg — hamn till kranskommun',
      '/fastighetsbolag/goteborg/opengraph-image',
    ),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/fastighetsbolag/goteborg' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddbox för BRF och hyresfastighet i Göteborg',
  path: '/fastighetsbolag/goteborg',
  description:
    'Laddinfrastruktur för bostadsrättsföreningar och hyresfastigheter i Göteborg, med lastbalansering och individuell debitering via Monta.',
  serviceType: 'EV Charging Installation for Housing Associations and Rental Property',
  areaServed: { '@type': 'City', name: 'Göteborg' },
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'För BRF & Fastighet', path: '/fastighetsbolag' },
  { name: 'Göteborg', path: '/fastighetsbolag/goteborg' },
]);

const faqEntries = [
  {
    question: 'Kan samma laddlösning användas i både BRF och hyresfastighet i Göteborg?',
    answer:
      'Ja. Skillnaden sitter i avtalet, inte i hårdvaran. I en BRF fakturerar Monta medlemmen per kWh. I ett hyreshus kan samma plattform belasta hyresgästen eller lägga kostnaden på hyresvärden enligt era regler. Zaptec och lastbalansering är identiska – det är driftprofilen i Monta som ändras.',
  },
  {
    question: 'Hur tar ni höjd för Göteborgs blandade bebyggelse?',
    answer:
      'Hamnområdet, landshövdingehus, miljonprogram och nyare förortsgarage i Mölndal eller Partille har olika el och olika p-ytor. Vi ritar inte en mall över hela beståndet. Varje hus får en genomgång av servis, central och hur bilarna faktiskt står – längs kaj, i bergrum eller på markparkering bakom lamellhus.',
  },
  {
    question: 'Vad gör lastbalansering i en västsvensk fastighet med äldre el?',
    answer:
      'Många göteborgska hus har el som byggts om i omgångar. Lastbalansering ser till att laddarna backar när spisar, tvättstugor och frånluft toppar. Det minskar behovet av att omedelbart höja abonnemanget, vilket annars snabbt äter kalkylen för både förening och bolag.',
  },
  {
    question: 'Hur samarbetar ni med elektriker i Göteborgsregionen?',
    answer:
      'Clean Charge AB sitter i Örebro (Dialoggatan 12B) och har inget göteborgskontor. Vi projekterar, skickar Zaptec och konfigurerar Monta. Montage utförs av behöriga elektriker i vårt nätverk, eller av den firma fastighetsägaren redan anlitar. Ni har oss som driftpartner och elektrikern som utförare på plats.',
  },
  {
    question: 'Vilka kommuner runt Göteborg ingår?',
    answer:
      'Vi tar uppdrag i Göteborg, Mölndal, Partille, Kungälv, Lerum, Härryda, Kungsbacka och Ale. Fastighetsbolag med hus i flera av kommunerna kan ha en Monta-struktur och en kontaktväg för hela portföljen.',
  },
];

const faq = faqJsonLd(faqEntries);

const benefits = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'BRF och hyres i samma modell',
    desc: 'Göteborg har båda upplåtelserna tätt inpå varandra. En plattform, två debiteringsprofiler – medlem eller hyresgäst.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Från hamn till kranskommun',
    desc: 'Kajnära garage, gårdshus och förortsparkering ställer olika krav på kabelväg och väderskydd. Projekteringen följer huset, inte stadsdelen på kartan.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Lastbalansering mot blandad last',
    desc: 'När elen är påbyggd i omgångar är det lastbalanseringen som håller anläggningen inom säkringarna – inte en överskattad servis.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Monta för hela beståndet',
    desc: 'Bolag med hus i Göteborg plus Mölndal eller Kungälv får en driftvy. Föreningar slipper manuell avräkning mot medlemmarna.',
  },
];

const included = [
  'Behovsanalys per hus – BRF eller hyres',
  'Dimensionering mot befintlig servis',
  'Zaptec-laddare med dynamisk lastbalansering',
  'Monta med profil för medlem eller hyresgäst',
  'Underlag till behörig elektriker på plats',
  'Fjärrövervakning efter driftsättning',
  'Utbyggnad när fler platser efterfrågas',
  'Support via 019-760 42 90',
];

const districts = [
  'Göteborg',
  'Mölndal',
  'Partille',
  'Kungälv',
  'Lerum',
  'Härryda',
  'Kungsbacka',
  'Ale',
];

export default function FastighetsbolagGoteborgPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'För BRF & Fastighet', href: '/fastighetsbolag' },
                { name: 'Göteborg', href: '/fastighetsbolag/goteborg' },
              ]}
              variant="light"
            />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Building2 className="w-4 h-4" />
              Lösningar för Fastighetsbolag & BRF
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox för BRF och hyresfastighet i{' '}
              <span className="text-[#00b182]">Göteborg</span>
              {' '}– från hamnen till kranskommunerna.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Västsveriges fastighetskarta är blandad: bostadsrätt i ett kvarter, allmännytta i nästa, markparkering bakom miljonprogram och garage i berget. Vi sätter Zaptec, lastbalansering och Monta efter hur huset faktiskt används – inte efter en stockholmsmall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Begär offert
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

      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Hamnstad med två upplåtelseformer i samma kvarter.
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <p className="text-slate-600 leading-relaxed">
              Göteborgs laddbehov i flerbostadshus handlar sällan bara om BRF. Hyresvärdar och kommunala bolag har samma tryck från hyresgäster som vill ladda över natten, medan föreningar på linjen mot Mölndal eller Kungälv har medlemskö till de få platser som redan finns. En lösning som bara talar till styrelsen missar halva marknaden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Vi utgår från Dialoggatan 12B i Örebro och påstår inte att vi har ett kontor vid Avenyn. Uppdraget i Göteborg går via behöriga elektriker: vi ritar, levererar och driftar, de monterar. För ett bolag med hus i flera kranskommuner är det just driftpartnern som behöver vara densamma – inte postadressen på installatörsbilen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            En anläggning som tål blandad bebyggelse
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Kaj, gård, bergrum eller asfalt bakom lamellhus – lastbalansering och Monta är den gemensamma kärnan.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  {b.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#00b182] font-semibold mb-6">
            <MapPin className="w-5 h-5" />
            Göteborgsregionen vi tar fastighetsuppdrag i
          </div>
          <p className="text-slate-500 mb-10 max-w-2xl">
            Samma Zaptec- och Monta-kedja, oavsett om garaget ligger i staden eller i en kranskommun med mer markparkering.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {districts.map((name) => (
              <li
                key={name}
                className="bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Projektering och drift.{' '}
                <span className="text-[#00b182]">Montage på plats.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Ni slipper välja mellan en nationell plattform och en lokal elektriker. Vi tar det första, nätverket det andra. Telefon: 019-760 42 90.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors"
              >
                Kontakta oss
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00b182] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">
            Relaterade sidor
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl">
            Läs om samma fastighetserbjudande i andra städer, eller gå vidare till samfällighet, Monta och kontakt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/fastighetsbolag/stockholm" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Stockholm
            </Link>
            <Link href="/fastighetsbolag/malmo" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Malmö
            </Link>
            <Link href="/fastighetsbolag" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              För BRF &amp; Fastighet
            </Link>
            <Link href="/samfallighet" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Samfällighet
            </Link>
            <Link href="/monta" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Monta-debitering
            </Link>
            <Link href="/kontakt" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions current="fastighetsbolag" />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Har ni både BRF och hyres i Göteborg?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Berätta vilka hus och vilken upplåtelseform det gäller. Vi tar fram ett upplägg för lastbalansering och Monta – utan att hitta på lokala referenser vi inte har.
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
