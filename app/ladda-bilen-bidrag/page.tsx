import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Landmark, Scale, CalendarClock, CarFront, Building2, Users } from 'lucide-react';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Ladda Bilen-bidraget 2026 – Nya Regler',
  description:
    'Nya regler för Ladda bilen-bidraget från 1 februari 2026: stöd 20–50 % beroende på företagsstorlek, max 15 000 kr per laddpunkt och ansökan före installation.',
  keywords: [
    'ladda bilen bidrag',
    'ladda bilen 2026',
    'bidrag laddstolpar företag',
    'bidrag laddbox brf',
    'naturvårdsverket laddbidrag',
    'stöd laddpunkter företag',
    'bidrag laddinfrastruktur',
  ],
  openGraph: {
    title: 'Ladda bilen-bidraget 2026 – så fungerar de nya reglerna',
    description: 'Stödnivåer, maxbelopp och ansökningskrav för företag, BRF och samfälligheter från 1 februari 2026.',
    url: 'https://www.cleancharge.se/ladda-bilen-bidrag',
    images: openGraphImages('Ladda bilen-bidraget 2026 — nya regler för företag och BRF'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/ladda-bilen-bidrag' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Ladda bilen-bidraget 2026', path: '/ladda-bilen-bidrag' },
]);

const article = articleJsonLd({
  headline: 'Ladda Bilen-bidraget 2026 – Nya Regler & Nivåer',
  path: '/ladda-bilen-bidrag',
  description:
    'Nya regler för Ladda bilen-bidraget från 1 februari 2026: stöd 20–50 % beroende på företagsstorlek, max 15 000 kr per laddpunkt och ansökan före installation.',
  datePublished: '2026-07-03',
  dateModified: '2026-07-05',
});

const faqEntries = [
  {
    question: 'Hur mycket bidrag kan vårt företag få 2026?',
    answer:
      'Från 1 februari 2026 differentieras stödet efter företagsstorlek: små företag får 50 %, medelstora 40 % och stora företag 20 % av bidragsberättigade kostnader – i samtliga fall max 15 000 kr per laddpunkt. Storleken bedöms på koncernnivå.',
  },
  {
    question: 'Vad räknas som litet, medelstort och stort företag?',
    answer:
      'Små företag har färre än 50 anställda och högst 10 miljoner euro i omsättning eller balansomslutning. Medelstora har färre än 250 anställda och högst 50 miljoner euro i omsättning eller 43 miljoner euro i balansomslutning. Företag över detta räknas som stora. Uppgifterna omfattar hela koncernen.',
  },
  {
    question: 'Måste vi ansöka innan installationen påbörjas?',
    answer:
      'Ja, om ni är ett företag. Från 1 februari 2026 måste företag och organisationer som tillhandahåller varor eller tjänster på marknaden skicka in ansökan innan installationen påbörjas. Efter 31 januari 2026 går det inte längre att ansöka i efterhand för påbörjade installationer.',
  },
  {
    question: 'Gäller de nya reglerna även BRF:er och samfälligheter?',
    answer:
      'För laddpunkter till boende och medlemmar gäller samma regler som tidigare – ansökan görs på samma sätt som förut. Men om föreningen installerar laddpunkter för lokalhyresgäster eller andra externa användare räknas den som företag och omfattas av de nya reglerna, inklusive kravet på ansökan före installation.',
  },
  {
    question: 'Kan vi få bidrag för gästparkering och verksamhetsbilar?',
    answer:
      'Ja, det är nytt från 2026. Ladda bilen kan nu ge stöd till laddpunkter på gästparkeringar, till exempel för besökare på handelsplatser och hotell, samt för verksamhetsbilar – exempelvis budfirmor, vårdföretag och taxibolag som laddar på företagets fastighet.',
  },
  {
    question: 'Vad hände med taket på 300 000 euro?',
    answer:
      'Det tidigare taket på 300 000 euro per koncern över en treårsperiod tas bort från 1 februari 2026. Det gör att större fastighetsbolag och företag kan söka stöd för fler laddpunkter och högre belopp än tidigare.',
  },
];

const faq = faqJsonLd(faqEntries);

const changes = [
  { icon: <Scale className="w-6 h-6" />, title: 'Stöd efter företagsstorlek', desc: 'Små företag 50 %, medelstora 40 % och stora 20 % av kostnaderna – max 15 000 kr per laddpunkt.' },
  { icon: <Landmark className="w-6 h-6" />, title: 'Taket är borttaget', desc: 'Gränsen på 300 000 euro per koncern försvinner – större satsningar på laddinfrastruktur blir möjliga.' },
  { icon: <CalendarClock className="w-6 h-6" />, title: 'Ansökan före installation', desc: 'Företag måste skicka in ansökan innan installationen påbörjas – i efterhand går inte längre.' },
  { icon: <CarFront className="w-6 h-6" />, title: 'Gästparkering & verksamhetsbilar', desc: 'Nytt stöd för laddpunkter på gästparkeringar och för verksamhetsbilar som budbilar och taxi.' },
];

const levels = [
  {
    size: 'Små företag',
    pct: '50 %',
    def: 'Färre än 50 anställda och högst 10 miljoner euro i omsättning eller balansomslutning.',
  },
  {
    size: 'Medelstora företag',
    pct: '40 %',
    def: 'Färre än 250 anställda och högst 50 M€ i omsättning eller 43 M€ i balansomslutning.',
  },
  {
    size: 'Stora företag',
    pct: '20 %',
    def: 'Fler än 250 anställda och omsättning över 50 M€ och/eller balansomslutning över 43 M€.',
  },
];

const help = [
  'Behovsanalys och projektering av laddplatserna',
  'Kostnadskalkyl som underlag till ansökan',
  'Installation av behöriga elektriker',
  'Konfiguration, betalning och drift via Monta',
  'Dokumentation för redovisning av stödet',
];

export default function LaddaBilenBidragPage() {
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
            <Breadcrumbs items={[{ name: 'Ladda bilen-bidraget 2026', href: '/ladda-bilen-bidrag' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Landmark className="w-4 h-4" />
              Nya regler från 1 februari 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Ladda bilen-bidraget{' '}
              <span className="text-[#00b182]">2026</span>{' '}
              – så fungerar de nya reglerna.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Naturvårdsverkets stöd för laddpunkter görs om från 1 februari 2026. Här går vi igenom vad som gäller för företag, BRF:er och samfälligheter – och hur ni får ut mesta möjliga av bidraget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Få hjälp med er ansökan
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

      {/* Key changes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            De viktigaste förändringarna
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Fyra saker att känna till innan ni planerar er laddinfrastruktur 2026.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {changes.map((c, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  {c.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support levels */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Stödnivåer per{' '}
            <span className="text-[#00b182]">företagsstorlek.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl">
            Stödet gäller bidragsberättigade kostnader och är i samtliga fall begränsat till max 15 000 kr per laddpunkt. Företagsstorleken bedöms på koncernnivå.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((l, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <p className="text-5xl font-black text-[#00b182] mb-4">{l.pct}</p>
                <h3 className="text-lg font-black text-white mb-3">{l.size}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{l.def}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-8">
            Källa: Naturvårdsverket, förändringar i Ladda bilen-bidraget (granskad december 2025).
          </p>
        </div>
      </section>

      {/* BRF section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-[#00b182] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                BRF & samfällighet – för boende gäller samma som förut
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Installerar er förening laddpunkter för boende och medlemmar finns Ladda bilen kvar precis som tidigare, och ansökan görs på samma sätt som förut.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Men observera: om föreningen installerar laddpunkter för <strong>lokalhyresgäster</strong> eller andra externa användare räknas den som företag – och då gäller de nya reglerna, inklusive kravet på ansökan före installation.
              </p>
              <Link
                href="/fastighetsbolag"
                className="inline-flex items-center gap-3 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                Laddlösningar för BRF & fastighetsbolag
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-[#00b182] mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                Så hjälper vi er hela vägen
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Vi levererar laddinfrastruktur i hela Sverige – nyckelfärdigt från projektering till drift – och ser till att ni har rätt underlag för bidraget.
              </p>
              <ul className="space-y-4">
                {help.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#00b182] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Planerar ni laddplatser 2026?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Kom ihåg: företag måste ansöka innan installationen påbörjas. Hör av er tidigt så hjälper vi er med kalkyl och underlag.
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
