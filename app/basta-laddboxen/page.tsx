import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Trophy, Home, Building2, Zap, ShieldCheck } from 'lucide-react';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Bästa Laddboxen 2026 – Jämförelse',
  description:
    'Vilken är bästa laddboxen 2026? Vi jämför Zaptec Go, Zaptec Pro och Easee utifrån behov – villa, BRF eller företag. Ärlig guide från auktoriserad installatör.',
  keywords: [
    'bästa laddboxen 2026',
    'laddbox bäst i test',
    'zaptec eller easee',
    'zaptec go test',
    'jämför laddbox',
    'vilken laddbox ska jag välja',
  ],
  openGraph: {
    title: 'Bästa laddboxen 2026 – jämförelse från installatör',
    description: 'Zaptec Go, Zaptec Pro, Easee eller Autel? Vi installerar alla – här är vår ärliga rekommendation per behov.',
    url: 'https://www.cleancharge.se/basta-laddboxen',
    images: openGraphImages('Bästa laddboxen 2026 — Zaptec, Easee och Autel jämförda'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/basta-laddboxen' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Bästa laddboxen 2026', path: '/basta-laddboxen' },
]);

const article = articleJsonLd({
  headline: 'Bästa Laddboxen 2026 – Zaptec, Easee & Autel',
  path: '/basta-laddboxen',
  description:
    'Vilken är bästa laddboxen 2026? Vi jämför Zaptec Go, Zaptec Pro och Easee utifrån behov – villa, BRF eller företag. Ärlig guide från auktoriserad installatör.',
  datePublished: '2026-07-03',
  dateModified: '2026-07-05',
});

const faqEntries = [
  {
    question: 'Vilken laddbox är bäst i test 2026?',
    answer:
      'Zaptec Go har utsetts till bäst i test i flera oberoende jämförelser flera år i rad, tack vare sin kompakta design, 22 kW-kapacitet och Zaptec-appens smarta funktioner som schemaläggning och elprisoptimering. Det är också den laddbox vi oftast rekommenderar för villor.',
  },
  {
    question: 'Vad är skillnaden mellan Zaptec Go och Zaptec Pro?',
    answer:
      'Zaptec Go är byggd för hemmet – enkel, kompakt och snabbinstallerad. Zaptec Pro är byggd för flera användare: den har RFID-identifiering, stöd för många laddpunkter på samma elanslutning och avancerad lastbalansering, vilket gör den till standardvalet för BRF:er, samfälligheter och företag.',
  },
  {
    question: 'Ska jag välja Zaptec eller Easee?',
    answer:
      'Båda är nordiska kvalitetsmärken som vi installerar. Zaptec Go vinner de flesta oberoende tester och har mycket stabil mjukvara. Easee Charge Lite är ett prisvärt alternativ med smidig app. Står du mellan dem hjälper vi dig välja utifrån din elcentral, bil och budget.',
  },
  {
    question: 'Behöver jag en laddbox med 22 kW?',
    answer:
      'De flesta elbilar laddar med högst 11 kW växelström, och många villor har inte effektutrymme för mer. En 22 kW-kapabel laddbox som Zaptec Go är ändå smart – den är framtidssäker och lastbalanseringen anpassar effekten automatiskt efter husets förbrukning.',
  },
  {
    question: 'Vilken laddbox passar företag och BRF bäst?',
    answer:
      'Zaptec Pro är vårt standardval: den hanterar många laddpunkter på delad kapacitet, identifierar användare med RFID och integreras med Monta för automatisk debitering per användare. För publika miljöer och snabbladdning rekommenderar vi DC-laddare från Autel.',
  },
  {
    question: 'Ingår installation när jag köper laddbox av er?',
    answer:
      'Ja, vi levererar alltid nyckelfärdigt – laddbox, installation av behörig elektriker och uppkoppling mot appen. Som privatperson får du 50 % Grön Teknik-avdrag på både material och arbete, draget direkt på fakturan.',
  },
];

const faq = faqJsonLd(faqEntries);

const boxes = [
  {
    icon: <Trophy className="w-6 h-6" />,
    badge: 'Testvinnaren',
    name: 'Zaptec Go',
    price: '7 862 kr inkl. rot',
    bestFor: 'Villa & radhus',
    points: ['Bäst i test flera år i rad', 'Upp till 22 kW, 1- och 3-fas', 'Elprisoptimering i appen', 'Kompakt nordisk design'],
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    badge: 'Proffsvalet',
    name: 'Zaptec Pro',
    price: 'Pris på förfrågan',
    bestFor: 'BRF, samfällighet & företag',
    points: ['Byggd för många laddpunkter', 'RFID & användaridentifiering', 'Avancerad lastbalansering', 'Full Monta-integration'],
  },
  {
    icon: <Home className="w-6 h-6" />,
    badge: 'Prisvärd',
    name: 'Easee Charge Lite',
    price: '6 995 kr inkl. rot',
    bestFor: 'Villa med budgetfokus',
    points: ['Lägst pris i vårt sortiment', 'Smidig app och design', 'Dynamisk lastbalansering', 'Nordiskt kvalitetsmärke'],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    badge: 'Snabbast',
    name: 'Autel MaxiCharger DC',
    price: 'Pris på förfrågan',
    bestFor: 'Publik & kommersiell laddning',
    points: ['DC-snabbladdning', 'För publika anläggningar', 'Betalterminal möjlig', 'Drift via Monta'],
  },
];

export default function BastaLaddboxenPage() {
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
            <Breadcrumbs items={[{ name: 'Bästa laddboxen 2026', href: '/basta-laddboxen' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <ShieldCheck className="w-4 h-4" />
              Jämförelse från auktoriserad installatör
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Bästa{' '}
              <span className="text-[#00b182]">laddboxen</span>{' '}
              2026 – vi jämför det vi själva installerar.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Vi säljer inte allt – vi har handplockat Zaptec, Easee och Autel för att de håller. Här är vår ärliga rekommendation för vilken laddbox som passar villa, förening och företag 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/produkter"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Se alla produkter
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

      {/* Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Fyra laddare – fyra olika behov
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            &quot;Bäst&quot; beror på var och hur du laddar. Så här väljer vi åt våra kunder.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boxes.map((b, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] shadow-sm">
                    {b.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{b.name}</h3>
                <p className="text-[#00b182] font-black mb-1">{b.price}</p>
                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-6">{b.bestFor}</p>
                <ul className="space-y-3 flex-1">
                  {b.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00b182] shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Vår rekommendation?{' '}
              <span className="text-[#00b182]">Den som passar din el.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Testvinnare i all ära – rätt laddbox avgörs av din elcentral, din bil och hur ni laddar. En villa med modern trefas har andra förutsättningar än en samfällighet med tjugo platser på delad kapacitet.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Därför börjar vi alltid med en kostnadsfri besiktning och rekommenderar därefter – ärligt, även när det billigare alternativet räcker. Nyfiken på vad det kostar? Läs vår{' '}
              <Link href="/vad-kostar-laddbox" className="text-[#00b182] font-bold hover:underline">
                prisguide för laddbox 2026
              </Link>
              .
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors"
            >
              Få en ärlig rekommendation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Redo att välja laddbox?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Berätta hur du laddar så rekommenderar vi rätt modell – och installerar nyckelfärdigt.
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
