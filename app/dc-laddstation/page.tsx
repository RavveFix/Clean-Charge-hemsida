import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Zap, Timer, Globe, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DC Laddstation Installation – Snabbladdare för Publik & Kommersiell Drift | Clean Charge AB',
  description:
    'Clean Charge AB installerar DC-snabbladdare för publika och kommersiella anläggningar i Sverige. OCPP-kompatibelt, betalningslösning ingår. Kontakta oss för offert – 019-760 42 90.',
  keywords: [
    'DC laddstation installation',
    'snabbladdare installation',
    'publikt laddnätverk',
    'kommersiell laddstation',
    'snabbladdare företag',
    'DC-laddare Sverige',
    'CCS laddstation',
    'laddnätverk operatör',
  ],
  openGraph: {
    title: 'DC Laddstation & Snabbladdare – Clean Charge AB',
    description: 'Installation av DC-snabbladdare för publika och kommersiella anläggningar. OCPP och betalning ingår.',
    url: 'https://www.cleancharge.se/dc-laddstation',
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/dc-laddstation' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DC Laddstation Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Charge AB',
    telephone: '+46197604290',
    url: 'https://www.cleancharge.se',
  },
  areaServed: 'SE',
  description: 'Installation och drift av DC-snabbladdare för publik och kommersiell användning.',
  serviceType: 'DC EV Fast Charging Installation',
};

const benefits = [
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Snabbladdning 50–360 kW',
    desc: 'DC-snabbladdare laddar ett genomsnittligt elbilsbatteri till 80% på 20–40 minuter.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'OCPP & bakåtkompatibelt',
    desc: 'Öppet protokoll som stöds av alla större nätverk – Monta, Recharge, Mer och ZapMap.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Betalning & intäktsmodell',
    desc: 'Sätt upp din prissättning, ta betalt via app eller kreditkort och generera intäkter från dag ett.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Komplett nyckelhantering',
    desc: 'Vi projekterar elnätsanslutning, transformatorer och jordning – allt enligt gällande krav.',
  },
];

const included = [
  'Behovsanalys & nätanslutningsutredning',
  'Projektering inkl. elnätsanmälan & bygganmälan',
  'Installation av DC-snabbladdare (50–360 kW)',
  'Konfiguration i OCPP-backend (Monta eller annan)',
  'Betalningslösning (kort, app, RFID)',
  'Skyltning och markeringar',
  'Driftsättning & provkörning',
  'Fjärrövervakning & driftsupport',
];

export default function DcLaddstationPage() {
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
              DC Snabbladdning – Publik & Kommersiell
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              DC-laddstation{' '}
              <span className="text-[#00b182]">installation</span>{' '}
              – nyckel­färdigt.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Clean Charge AB installerar och driftar DC-snabbladdare för publika parkeringar, handelsplatser, köpcentrum och motorvägsrastplatser. Vi tar hela ansvaret – från nätanslutning till intäktsmodell.
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

      {/* Stats bar */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50–360', unit: 'kW', label: 'Effektintervall' },
              { value: 'CCS', unit: '+ CHAdeMO', label: 'Standarder' },
              { value: '99,5%', unit: '', label: 'Drifttid (uptime)' },
              { value: '24/7', unit: '', label: 'Fjärrövervakning' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white">{s.value}<span className="text-[#00b182] ml-1 text-xl font-bold">{s.unit}</span></div>
                <div className="text-slate-500 text-sm font-semibold mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Komplett DC-lösning för er anläggning
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Vi har erfarenhet av allt från enstaka snabbladdare till hela laddparker med multipla DC-units.
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
                Nyckelfärdigt.{' '}
                <span className="text-[#00b182]">Redo att tjäna pengar.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Från tillståndsansökan och nätanslutning till betalningslösning och drift – vi levererar en komplett DC-lösning redo att generera intäkter från dag ett.
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
            Planerar ni en publik laddanläggning?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Kontakta oss för en kostnadsfri diskussion om er specifika situation och potential.
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
