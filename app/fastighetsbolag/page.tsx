import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Building2, Users, TrendingUp, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Laddbox Fastighetsbolag & Bostadsrättsförening – BRF | Clean Charge AB',
  description:
    'Laddboxar för fastighetsbolag och BRF i hela Sverige. Clean Charge AB projekter, installerar och driftar laddinfrastruktur med smart lastbalansering och debiteringshantering. Ring 019-760 42 90.',
  keywords: [
    'laddbox fastighetsbolag',
    'laddbox bostadsrättsförening',
    'laddbox BRF',
    'laddstation hyreshus',
    'kollektiv laddning',
    'lastbalansering laddbox',
    'elbilsladdning fastighet',
    'laddinfrastruktur brf',
  ],
  openGraph: {
    title: 'Laddbox Fastighetsbolag & BRF – Clean Charge AB',
    description: 'Komplett laddlösning för fastigheter. Från projektering till drift och debiteringshantering.',
    url: 'https://www.cleancharge.se/fastighetsbolag',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/fastighetsbolag' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Laddbox för Fastighetsbolag och BRF',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Charge AB',
    telephone: '+46197604290',
    url: 'https://www.cleancharge.se',
  },
  areaServed: 'SE',
  description: 'Laddinfrastruktur för fastighetsbolag, bostadsrättsföreningar och hyresfastigheter.',
  serviceType: 'EV Charging Installation for Real Estate',
};

const benefits = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Skalbar lösning',
    desc: 'Börja med ett fåtal laddare och bygg ut efterhand när efterfrågan ökar. Infrastrukturen är framtidssäkrad.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Individuell debitering',
    desc: 'Via Monta-plattformen faktureras varje boende eller hyresgäst för sin faktiska förbrukning automatiskt.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Ökar fastighetsvärdet',
    desc: 'Laddmöjligheter är en av de mest efterfrågade faciliteterna bland elbilsägare och höjer attraktiviteten.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Lastbalansering ingår',
    desc: 'Smart styrning fördelar effekten jämnt så att elnätets kapacitet aldrig överskrids.',
  },
];

const included = [
  'Kostnadsfri besiktning av befintlig elinstallation',
  'Projektering & elanmälan',
  'Installation av Zaptec Go / Pro-laddare',
  'Konfiguration av Monta för debitering',
  'Smart lastbalansering (Dynamic Power Balance)',
  'OCPP-kompatibelt system',
  'Löpande fjärrövervakning & support',
  'Rapportering till fastighetsägare',
];

export default function FastighetsbolagPage() {
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
              <Building2 className="w-4 h-4" />
              Lösningar för Fastighetsbolag & BRF
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox för{' '}
              <span className="text-[#00b182]">fastighetsbolag</span>{' '}
              & BRF – smart från start.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Vi projekterar, installerar och driftar laddinfrastruktur i er fastighet. Med individuell debitering och smart lastbalansering är lösnigen rättvis och effektiv för alla boende.
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            En lösning som fungerar för hela fastigheten
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Oavsett om ni har 10 eller 200 parkeringsplatser – vi anpassar systemet efter er fastighet.
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

      {/* Included */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Komplett paket.{' '}
                <span className="text-[#00b182]">En leverantör.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Slipp koordinera mellan flera leverantörer. Vi ansvarar för hela processen och är er enda kontaktpunkt – från projektering till drift.
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

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Dags att modernisera fastigheten?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Kontakta oss för en kostnadsfri genomgång av er fastighets förutsättningar.
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
