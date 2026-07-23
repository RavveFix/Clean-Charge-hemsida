import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Zap, MapPin, Wrench, BadgePercent, Home, Building2, Landmark } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddbox Örebro – Installation & 50% Avdrag',
  description:
    'Installera laddbox i Örebro med lokala laddexperter. Kontor i Örebro, Grön Teknik-avdrag 50 %, behöriga elektriker och alltid fast pris. Ring 019-760 42 90.',
  keywords: [
    'laddbox örebro',
    'installera laddbox örebro',
    'laddbox installation örebro',
    'elbilsladdare örebro',
    'laddstolpe örebro',
    'Zaptec örebro',
    'grön teknik laddbox örebro',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox Örebro – Clean Charge AB',
    description: 'Lokala laddexperter med kontor i Örebro. Installation av laddbox med 50 % Grön Teknik-avdrag.',
    url: 'https://www.cleancharge.se/laddbox-orebro',
    images: openGraphImages('Laddbox Örebro — installation av lokala laddexperter'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/laddbox-orebro' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddbox Installation i Örebro',
  path: '/laddbox-orebro',
  description: 'Installation av laddboxar för villa, företag och BRF i Örebro med omnejd.',
  serviceType: 'EV Charging Installation',
  areaServed: { '@type': 'City', name: 'Örebro' },
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'Laddbox Örebro', path: '/laddbox-orebro' },
]);

const faqEntries = [
  {
    question: 'Vad kostar det att installera en laddbox i Örebro?',
    answer:
      'En typisk villainstallation i Örebro landar på 15 000–25 000 kr före avdrag beroende på laddbox och elförutsättningar. Med Grön Teknik-avdraget på 50 % betalar du ungefär hälften, direkt på fakturan. Vi lämnar alltid en kostnadsfri offert med fast pris innan vi börjar.',
  },
  {
    question: 'Hur snabbt kan ni installera en laddbox i Örebro?',
    answer:
      'Eftersom vi utgår från vårt kontor i Örebro kan vi ofta erbjuda besiktning och installation med kort varsel. Exakt tid beror på laddbox och elförutsättningar – du får en tydlig tidplan i offerten.',
  },
  {
    question: 'Vilka områden kring Örebro täcker ni?',
    answer:
      'Vi installerar i hela Örebro med omnejd – bland annat Kumla, Hallsberg, Lindesberg, Nora, Askersund och Karlskoga. Vi tar även uppdrag i övriga Sverige, framför allt för företag och fastighetsbolag.',
  },
  {
    question: 'Hur fungerar Grön Teknik-avdraget?',
    answer:
      'Som privatperson får du 50 % avdrag på både material och arbete när vi installerar en laddningspunkt vid din bostad. Vi tillämpar fakturamodellen – avdraget dras direkt på fakturan och vi sköter administrationen mot Skatteverket åt dig.',
  },
  {
    question: 'Vilka laddboxar rekommenderar ni?',
    answer:
      'Vi är auktoriserad Zaptec-partner och installerar även Easee och Autel. Zaptec Go är utsedd till bäst i test flera år i rad och passar de flesta villor, medan Zaptec Pro passar företag och BRF:er som behöver lastbalansering över många laddpunkter.',
  },
  {
    question: 'Installerar ni även för företag och BRF i Örebro?',
    answer:
      'Ja. Vi projekterar, installerar och driftar laddinfrastruktur för företag, fastighetsbolag och BRF:er i Örebroområdet – med betalning och övervakning via Monta. Vi hjälper er också med underlaget för Naturvårdsverkets Ladda bilen-bidrag.',
  },
];

const faq = faqJsonLd(faqEntries);

const benefits = [
  { icon: <MapPin className="w-6 h-6" />, title: 'Lokalt kontor i Örebro', desc: 'Vi finns på Dialoggatan 12B och känner till elnäten och fastigheterna i området.' },
  { icon: <Wrench className="w-6 h-6" />, title: 'Behöriga elektriker', desc: 'Alla installationer utförs av behöriga elektriker enligt Elsäkerhetsverkets krav.' },
  { icon: <BadgePercent className="w-6 h-6" />, title: '50 % Grön Teknik-avdrag', desc: 'Avdraget dras direkt på fakturan – vi sköter administrationen mot Skatteverket.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Drift & support', desc: 'Fjärrövervakning och support via Monta, från vårt kontor i Örebro.' },
];

const areas = [
  'Örebro',
  'Kumla',
  'Hallsberg',
  'Lindesberg',
  'Nora',
  'Askersund',
  'Karlskoga',
  'Laxå',
  'Degerfors',
  'Hällefors',
];

const segments = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Villa & radhus',
    desc: 'Nyckelfärdig laddbox hemma med 50 % Grön Teknik-avdrag direkt på fakturan.',
    href: '/privat',
    label: 'Ladda hemma',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Företag & arbetsplatser',
    desc: 'Skalbar laddinfrastruktur med lastbalansering och fakturering via Monta.',
    href: '/foretag',
    label: 'För företag',
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'BRF & fastighetsbolag',
    desc: 'Projektering, installation och drift – med stöd för Ladda bilen-bidraget.',
    href: '/fastighetsbolag',
    label: 'För BRF',
  },
];

export default function LaddboxOrebroPage() {
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
            <Breadcrumbs items={[{ name: 'Laddbox Örebro', href: '/laddbox-orebro' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <MapPin className="w-4 h-4" />
              Lokala laddexperter – kontor i Örebro
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox i{' '}
              <span className="text-[#00b182]">Örebro</span>{' '}
              – installerad av dina lokala laddexperter.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Clean Charge AB är laddföretaget som faktiskt finns i Örebro. Vi besiktigar, installerar och driftar laddboxar för villor, företag och BRF:er – med 50 % Grön Teknik-avdrag direkt på fakturan.
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
            Därför väljer Örebro oss
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            De flesta laddboxföretag åker hit. Vi bor här – och det märks i allt från rådgivning till support.
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

      {/* Coverage */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Vi installerar i hela{' '}
                <span className="text-[#00b182]">Örebro med omnejd.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Från villakvarteren i Örebro till företagsparkeringar i Karlskoga. Närheten gör att vi kan besiktiga snabbt, hålla tider och finnas kvar när installationen är klar.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors"
              >
                Boka kostnadsfri besiktning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00b182] shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Laddlösningar för hela Örebro
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Samma lokala team – tre olika behov. Välj det som passar dig.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#00b182] mb-6 shadow-sm">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[#00b182] font-black text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  {s.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Redo för laddbox hemma i Örebro?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Hör av dig så bokar vi en kostnadsfri besiktning. Vi svarar inom en arbetsdag.
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
