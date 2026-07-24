import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Package, Wrench, MonitorSmartphone, MapPin, Building2, Truck } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddinfrastruktur i Hela Sverige',
  description:
    'Clean Charge levererar och driftar laddinfrastruktur i hela Sverige. Vi projekterar, sköter hårdvara och Monta-drift – er lokala elektriker installerar. Ring 019-760 42 90.',
  keywords: [
    'laddbox hela sverige',
    'laddinfrastruktur leverantör',
    'laddoperatör företag',
    'laddstationer flera orter',
    'driftpartner laddning',
    'Monta driftavtal',
    'laddbox fastighetsbolag hela sverige',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddinfrastruktur i hela Sverige – Clean Charge AB',
    description:
      'Vi levererar hårdvara, projektering och Monta-drift nationellt – er lokala elektriker installerar. En driftpartner för fastighetsbestånd i hela landet.',
    url: 'https://www.cleancharge.se/hela-sverige',
    images: openGraphImages('Laddinfrastruktur i hela Sverige — leverans, projektering och drift'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/hela-sverige' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddinfrastruktur & drift i hela Sverige',
  path: '/hela-sverige',
  description:
    'Leverans, projektering och drift av laddinfrastruktur i hela Sverige. Clean Charge sköter hårdvara, konfiguration och Monta-drift; lokal behörig elektriker utför installationen.',
  serviceType: 'EV Charging Infrastructure & Operation',
  areaServed: { '@type': 'Country', name: 'Sweden' },
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'Laddning i hela Sverige', path: '/hela-sverige' },
]);

const faqEntries = [
  {
    question: 'Installerar Clean Charge laddboxar i hela Sverige?',
    answer:
      'Vi utför kompletta installationer med egna behöriga elektriker i Mellansverige – Örebro län och angränsande delar av Mälardalen, Västmanland, Östergötland och Värmland. I resten av landet levererar och driftar vi laddinfrastrukturen medan er egen eller anlitad lokal elektriker gör själva monteringen. Vi tar fram installationsunderlag så att arbetet blir rätt utfört.',
  },
  {
    question: 'Hur fungerar upplägget med lokal elektriker?',
    answer:
      'Vi projekterar anläggningen, levererar hårdvaran (Zaptec), förbereder Monta-konfigurationen och tar fram tydligt installationsunderlag. Er lokala elektriker utför monteringen enligt underlaget. När laddarna är på plats aktiverar vi drift, debitering och fjärrövervakning. Ni får en driftpartner – inte bara en låda i en kartong.',
  },
  {
    question: 'Kan ni hantera fastighetsbestånd på flera orter?',
    answer:
      'Ja. Det är själva poängen med upplägget. Ett fastighetsbolag med bestånd i flera städer får en samlad driftpartner, en plattform (Monta) och enhetlig debitering – oavsett vilken lokal elektriker som monterar var. Det ger överblick, enhetliga avtal och en kontaktväg för hela portföljen.',
  },
  {
    question: 'Vad ingår i den nationella leveransen?',
    answer:
      'Projektering och dimensionering, hårdvara (Zaptec AC/DC), installationsunderlag till er elektriker, konfiguration och driftsättning i Monta, individuell debitering, lastbalansering samt löpande fjärrövervakning och support. Själva den fysiska monteringen utförs av oss i Mellansverige eller av lokal elektriker i övriga landet.',
  },
  {
    question: 'Kan vi använda vår egen elektriker?',
    answer:
      'Absolut. Har ni redan en elektriker eller ett ramavtal med en installatör arbetar vi gärna mot dem. Vi levererar underlag och hårdvara, de monterar, och vi tar hand om konfiguration och drift. Har ni ingen elektriker hjälper vi er att hitta en behörig lokalt.',
  },
];

const faq = faqJsonLd(faqEntries);

const steps = [
  {
    icon: <Package className="w-6 h-6" />,
    step: '01',
    title: 'Vi projekterar & levererar',
    desc: 'Behovsanalys, dimensionering och hårdvara (Zaptec) skickas till er fastighet – med tydligt installationsunderlag.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    step: '02',
    title: 'Elektriker installerar',
    desc: 'Vi monterar själva i Mellansverige. I övriga Sverige utför er egen eller anlitad lokal behörig elektriker installationen enligt underlaget.',
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    step: '03',
    title: 'Vi driftar & övervakar',
    desc: 'Konfiguration, debitering och driftsättning i Monta – följt av löpande fjärrövervakning och support. En driftpartner för hela beståndet.',
  },
];

const nationellt = [
  'Projektering & dimensionering',
  'Hårdvara (Zaptec AC & DC)',
  'Installationsunderlag till er elektriker',
  'Konfiguration & driftsättning i Monta',
  'Individuell debitering & fakturering',
  'Lastbalansering & energioptimering',
  'Fjärrövervakning & support',
  'Enhetliga avtal över flera orter',
];

export default function HelaSverigePage() {
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

      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ name: 'Laddning i hela Sverige', href: '/hela-sverige' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <MapPin className="w-4 h-4" />
              Leverans & drift i hela landet
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddinfrastruktur i{' '}
              <span className="text-[#00b182]">hela Sverige</span>.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Vi levererar, konfigurerar och driftar er laddinfrastruktur nationellt – och er lokala elektriker sköter monteringen. En driftpartner för fastighetsbestånd över hela landet, oavsett var laddarna sitter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Få kostnadsfri offert
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

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Så fungerar det – oavsett ort
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Vi tar det som inte är platsbundet. Den lokala elektrikern tar monteringen. Ni får en partner för hela kedjan.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <span className="absolute top-8 right-8 text-4xl font-black text-slate-200">{s.step}</span>
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region split */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-[#00b182] mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-3">
                Mellansverige – vi gör allt
              </h3>
              <p className="text-slate-500 leading-relaxed">
                I Örebro län och angränsande delar av Mälardalen, Västmanland, Östergötland och Värmland utför vi kompletta installationer med egna behöriga elektriker – från besiktning till driftsatt laddare.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-[#00b182] mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-3">
                Övriga Sverige – leverans & drift
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Vi levererar hårdvara, projektering och Monta-drift nationellt. Er egen eller anlitad lokal elektriker monterar enligt vårt underlag – vi tar hand om konfiguration, debitering och drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included nationally */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Det här levererar vi{' '}
                <span className="text-[#00b182]">över hela landet.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Allt utom den fysiska monteringen är platsoberoende – och monteringen löser vi antingen själva eller med er lokala elektriker. Ni får en driftpartner för hela beståndet.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors"
              >
                Kontakta oss nu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <ul className="space-y-4">
              {nationellt.map((item, i) => (
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

      <RelatedSolutions current="hela-sverige" />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Laddning på flera orter? Prata med oss.
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Berätta var ni har fastigheter så tar vi fram ett upplägg för hela beståndet. Vi svarar inom en arbetsdag.
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
