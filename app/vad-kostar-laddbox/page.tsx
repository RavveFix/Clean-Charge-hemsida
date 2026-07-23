import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Home, Building2, Landmark, Zap, BadgePercent } from 'lucide-react';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Vad Kostar en Laddbox? Prisguide 2026',
  description:
    'Vad kostar laddbox med installation 2026? Riktpriser för villa, BRF, samfällighet och företag – inklusive Grön Teknik-avdrag och Ladda bilen-bidrag. Läs guiden.',
  keywords: [
    'vad kostar laddbox',
    'laddbox pris',
    'installera laddbox pris',
    'laddbox med installation pris',
    'laddbox brf kostnad',
    'laddbox kostnad per plats',
    'pris laddstolpe företag',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Vad kostar en laddbox 2026? – Komplett prisguide',
    description: 'Riktpriser för laddbox med installation: villa, BRF, samfällighet och företag – med avdrag och bidrag.',
    url: 'https://www.cleancharge.se/vad-kostar-laddbox',
    images: openGraphImages('Vad kostar en laddbox 2026 — prisguide för villa, BRF och företag'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/vad-kostar-laddbox' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Vad kostar en laddbox?', path: '/vad-kostar-laddbox' },
]);

const article = articleJsonLd({
  headline: 'Vad Kostar en Laddbox? Prisguide 2026',
  path: '/vad-kostar-laddbox',
  description:
    'Vad kostar laddbox med installation 2026? Riktpriser för villa, BRF, samfällighet och företag – inklusive Grön Teknik-avdrag och Ladda bilen-bidrag.',
  datePublished: '2026-07-03',
  dateModified: '2026-07-05',
});

const faqEntries = [
  {
    question: 'Vad kostar en laddbox med installation för villa?',
    answer:
      'En komplett villainstallation landar typiskt på 15 000–25 000 kr före avdrag, beroende på laddbox och elförutsättningar. Med Grön Teknik-avdraget på 50 % betalar du ungefär 8 000–13 000 kr. Hos oss börjar Easee Charge Lite på 6 995 kr och Zaptec Go på 7 862 kr – priser inklusive rot-avdrag på hårdvaran.',
  },
  {
    question: 'Varför anges priser som spann och inte fasta belopp?',
    answer:
      'Slutpriset påverkas av avståndet mellan elcentral och laddplats, om kabeln kan dras inomhus eller kräver grävning, elcentralens skick och vilken laddbox du väljer. Därför besiktigar vi alltid först – och lämnar sedan en offert med fast pris utan överraskningar.',
  },
  {
    question: 'Vad kostar laddboxar per plats för BRF och samfällighet?',
    answer:
      'Riktpriset är 10 000–35 000 kr per laddplats efter Ladda bilen-bidraget. Väggmonterade laddboxar ligger i den nedre delen av spannet, medan fristående stolpar med markarbete kostar mer. Bidraget täcker 50 % av kostnaderna, max 15 000 kr per laddpunkt.',
  },
  {
    question: 'Vad kostar laddinfrastruktur för företag?',
    answer:
      'Hårdvaran för en Zaptec Pro börjar på cirka 12 000 kr exkl. moms per uttag; projektering, installation och konfiguration tillkommer. Från 1 februari 2026 kan företag få Ladda bilen-bidrag på 20–50 % beroende på företagsstorlek, max 15 000 kr per laddpunkt – och ansökan måste skickas in före installation.',
  },
  {
    question: 'Vad kostar en DC-snabbladdare?',
    answer:
      'DC-snabbladdare för publika och kommersiella anläggningar kostar från cirka 150 000 kr och uppåt inklusive installation, beroende på effekt (50–400 kW) och markförutsättningar. Vi projekterar och lämnar offert utifrån er anläggning.',
  },
  {
    question: 'Hur fungerar Grön Teknik-avdraget?',
    answer:
      'Som privatperson får du 50 % avdrag på både material och arbete när en laddningspunkt installeras vid din bostad. Vi tillämpar fakturamodellen – avdraget dras direkt på fakturan och vi sköter administrationen mot Skatteverket.',
  },
];

const faq = faqJsonLd(faqEntries);

const priceCards = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Villa & radhus',
    price: 'ca 8 000–13 000 kr',
    note: 'efter Grön Teknik-avdrag 50 %',
    desc: 'Komplett installation med laddbox, typiskt 15 000–25 000 kr före avdrag. Laddboxar från 6 995 kr.',
    href: '/privat',
    label: 'Ladda hemma',
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'BRF & samfällighet',
    price: 'ca 10 000–35 000 kr/plats',
    note: 'efter Ladda bilen-bidrag',
    desc: 'Väggmontage billigast, stolpar med markarbete dyrare. Bidrag: 50 %, max 15 000 kr per laddpunkt.',
    href: '/fastighetsbolag',
    label: 'För BRF',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Företag & arbetsplatser',
    price: 'från ca 12 000 kr/uttag',
    note: 'exkl. moms, hårdvara Zaptec Pro',
    desc: 'Projektering, installation och Monta-konfiguration tillkommer. Bidrag 20–50 % beroende på storlek.',
    href: '/foretag',
    label: 'För företag',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'DC-snabbladdning',
    price: 'från ca 150 000 kr',
    note: 'per station inkl. installation',
    desc: 'Publika och kommersiella anläggningar, 50–400 kW. Alltid offert efter projektering.',
    href: '/dc-laddstation',
    label: 'Snabbladdning',
  },
];

const factors = [
  'Avstånd mellan elcentral och laddplats',
  'Kabeldragning inomhus eller grävning utomhus',
  'Elcentralens skick och ledig kapacitet',
  'Val av laddbox och antal laddpunkter',
  'Lastbalansering och eventuell effektuppgradering',
  'Markarbete för fristående stolpar',
];

export default function VadKostarLaddboxPage() {
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

      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ name: 'Vad kostar en laddbox?', href: '/vad-kostar-laddbox' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <BadgePercent className="w-4 h-4" />
              Prisguide 2026 – med avdrag och bidrag
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Vad kostar en{' '}
              <span className="text-[#00b182]">laddbox</span>{' '}
              2026? Ärliga riktpriser.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Priset beror på var laddaren ska sitta och vad elen tillåter – men du förtjänar riktiga siffror innan du begär offert. Här är riktpriserna vi själva arbetar med, för villa, BRF, samfällighet och företag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Få exakt pris – kostnadsfri offert
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

      {/* Price cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Riktpriser per behov
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Alla priser är typiska totalkostnader 2026 – exakt pris får du alltid i en kostnadsfri offert.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceCards.map((c, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  {c.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{c.title}</h3>
                <p className="text-2xl font-black text-[#00b182] leading-tight">{c.price}</p>
                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mt-1 mb-4">{c.note}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{c.desc}</p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  {c.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price factors */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Det här avgör{' '}
                <span className="text-[#00b182]">slutpriset.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Två till synes likadana hus kan skilja tusenlappar i installationskostnad. Därför besiktigar vi alltid innan vi lämnar pris – och offerten är fast, utan tillägg i efterhand. Glöm inte att kolla{' '}
                <Link href="/ladda-bilen-bidrag" className="text-[#00b182] font-bold hover:underline">
                  Ladda bilen-bidraget 2026
                </Link>{' '}
                om ni är företag eller förening.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors"
              >
                Boka kostnadsfri besiktning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <ul className="space-y-4">
              {factors.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00b182] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Vill du veta exakt vad det kostar hos dig?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Skicka en offertförfrågan så återkommer vi med fast pris. Kostnadsfritt och utan förpliktelser.
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
