import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Zap, Shield, BarChart3, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Laddbox för Företag – AC & DC Laddstationer | Clean Charge AB',
  description:
    'Clean Charge AB installerar och driftar laddboxar för företag i hela Sverige. Auktoriserad Zaptec & Monta-partner. Få en kostnadsfri offert idag – ring 019-760 42 90.',
  keywords: [
    'laddbox företag',
    'laddstation kontor',
    'företagsladdning',
    'arbetsplatsladdning elbil',
    'Zaptec företag',
    'Monta laddbox',
    'laddinfrastruktur företag',
    'elbilsladdning arbetsplats',
  ],
  openGraph: {
    title: 'Laddbox för Företag – Clean Charge AB',
    description: 'Skalbara laddlösningar för företag. Vi levererar, installerar och driftar – helt klart.',
    url: 'https://www.cleancharge.se/foretag',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/foretag' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Laddbox Installation för Företag',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Charge AB',
    telephone: '+46197604290',
    url: 'https://www.cleancharge.se',
  },
  areaServed: 'SE',
  description: 'Installation och drift av laddboxar för företag och arbetsplatser i Sverige.',
  serviceType: 'EV Charging Installation',
};

const benefits = [
  { icon: <Zap className="w-6 h-6" />, title: 'Snabb installation', desc: 'Från offert till färdig installation på rekordtid med minimal störning för er verksamhet.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Certifierade installatörer', desc: 'Alla installationer utförs av behöriga elektriker med STARK-auktorisation.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Smart lastbalansering', desc: 'Optimerar effektuttaget så ni aldrig behöver dimensionera upp er elanslutning i onödan.' },
  { icon: <Wrench className="w-6 h-6" />, title: 'Drift & support', desc: 'Vi övervakar era laddare på distans och agerar proaktivt vid driftstörningar.' },
];

const included = [
  'Kostnadsfri besiktning & behovsanalys',
  'Projektering och elanmälan',
  'Montering av laddboxar (Zaptec Pro / Go)',
  'Konfiguration i Monta-appen',
  'Lastbalansering & energioptimering',
  'Fakturering direkt till anställda eller företag',
  'Löpande fjärrövervakning',
  'Support & garantihantering',
];

export default function ForetagPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              Auktoriserad Zaptec & Monta Partner
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox för{' '}
              <span className="text-[#00b182]">företag</span>{' '}
              – levererat, installerat, driftat.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Vi tar hand om hela processen: från besiktning och projektering till installation och löpande drift. Ni fokuserar på kärnverksamheten – vi ser till att laddarna fungerar.
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

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Varför välja Clean Charge?
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Vi är inte bara en hårdvaruleverantör – vi är er partner för laddinfrastruktur.
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

      {/* What's Included */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Allt ingår.{' '}
                <span className="text-[#00b182]">Inga dolda kostnader.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Vår helhetslösning för företag täcker hela kedjan från planering till drift. Ni får en kontaktperson som ansvarar för hela projektet.
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

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Redo att ladda upp er arbetsplats?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Hör av er så berättar vi mer. Vi svarar inom en arbetsdag.
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
