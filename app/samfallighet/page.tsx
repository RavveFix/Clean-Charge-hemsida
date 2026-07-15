import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Landmark, Scale, CreditCard, Wrench, FileSearch } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddstolpar för Samfällighet',
  description:
    'Laddstolpar för samfälligheter – vi utreder, installerar och driftar med individuell debitering via Monta. Ladda bilen-bidrag för medlemmar. Kostnadsfri offert.',
  keywords: [
    'laddstolpar samfällighet',
    'laddbox samfällighet',
    'elbilsladdning samfällighet',
    'laddstolpe gemensam parkering',
    'ladda bilen bidrag samfällighet',
    'anläggningsbeslut laddstolpar',
  ],
  openGraph: {
    title: 'Laddstolpar för Samfälligheter – Clean Charge AB',
    description: 'Gemensam elbilsladdning för samfälligheter – från utredning och bidrag till installation och drift.',
    url: 'https://www.cleancharge.se/samfallighet',
    images: openGraphImages('Laddstolpar för samfälligheter — utredning, installation och drift'),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/samfallighet' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddstolpar för Samfälligheter',
  path: '/samfallighet',
  description: 'Utredning, installation och drift av laddstolpar för samfällighetsföreningar i Sverige.',
  serviceType: 'EV Charging Installation',
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'För Samfälligheter', path: '/samfallighet' },
]);

const faqEntries = [
  {
    question: 'Vad kostar laddstolpar för en samfällighet?',
    answer:
      'Riktpriset ligger typiskt på 10 000–35 000 kr per laddplats efter Ladda bilen-bidraget, beroende på om laddarna väggmonteras eller kräver stolpar med markarbete. Väggmontage är oftast billigast. Vi lämnar alltid en kostnadsfri offert med fast pris per plats.',
  },
  {
    question: 'Får samfälligheten installera laddstolpar på gemensam parkering?',
    answer:
      'Det beror på ert anläggningsbeslut. En gemensamhetsanläggning får bara användas för det ändamål som anges i beslutet, och många samfälligheter behöver därför få laddning prövad hos Lantmäteriet innan installation. Vi guidar er genom vad som gäller för just er förening.',
  },
  {
    question: 'Kan samfälligheten få Ladda bilen-bidraget?',
    answer:
      'Ja. För laddpunkter till medlemmar gäller samma regler som tidigare – 50 % av kostnaderna, max 15 000 kr per laddpunkt. Observera att en samfällighet som installerar laddpunkter för externa användare räknas som företag och då omfattas av nya regler från 1 februari 2026, med krav på ansökan före installation.',
  },
  {
    question: 'Hur betalar medlemmarna för sin laddning?',
    answer:
      'Via Monta-plattformen debiteras varje medlem automatiskt för exakt den el hen laddar – ingen manuell avläsning eller schablonavgift behövs. Föreningen får utbetalningar och rapporter utan administration.',
  },
  {
    question: 'Räcker elen i vår anläggning till alla som vill ladda?',
    answer:
      'Oftast ja. Vi installerar dynamisk lastbalansering som fördelar tillgänglig effekt mellan laddplatserna, så att anläggningen klarar många laddare utan att huvudsäkringen behöver höjas. I utredningen ser vi över era faktiska förutsättningar.',
  },
  {
    question: 'Hur lång tid tar det från beslut till färdiga laddplatser?',
    answer:
      'Räkna med några veckor till ett par månader beroende på om anläggningsbeslutet behöver omprövas och nätägarens handläggningstid. Själva installationen tar oftast bara några dagar. Vi ger er en tydlig tidplan i offerten.',
  },
];

const faq = faqJsonLd(faqEntries);

const benefits = [
  { icon: <FileSearch className="w-6 h-6" />, title: 'Utredning & beslutsstöd', desc: 'Vi utreder elkapacitet och hjälper styrelsen med underlag – inklusive frågan om anläggningsbeslutet.' },
  { icon: <Landmark className="w-6 h-6" />, title: 'Ladda bilen-bidrag', desc: '50 % av kostnaderna i bidrag, max 15 000 kr per laddpunkt för medlemmarnas laddning.' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Individuell debitering', desc: 'Varje medlem betalar för sin egen laddning via Monta – noll administration för föreningen.' },
  { icon: <Wrench className="w-6 h-6" />, title: 'Drift & övervakning', desc: 'Vi fjärrövervakar laddarna och agerar proaktivt vid driftstörningar.' },
];

const steps = [
  'Kostnadsfri utredning av parkering och elkapacitet',
  'Underlag till styrelse och stämma – inklusive bidragskalkyl',
  'Stöd i frågan om anläggningsbeslut och Lantmäteriet',
  'Ansökan om Ladda bilen-bidraget',
  'Installation av behöriga elektriker',
  'Konfiguration av betalning och debitering i Monta',
  'Löpande drift, support och övervakning',
];

export default function SamfallighetPage() {
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
            <Breadcrumbs items={[{ name: 'För Samfälligheter', href: '/samfallighet' }]} variant="light" />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Scale className="w-4 h-4" />
              Från utredning till driftsatta laddplatser
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddstolpar för{' '}
              <span className="text-[#00b182]">samfälligheter</span>{' '}
              – gemensam laddning som bara fungerar.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Delad parkering, gemensam el och ett anläggningsbeslut att ta hänsyn till – samfälligheter har sina egna frågor. Vi tar hand om hela processen, från utredning och bidrag till installation och rättvis debitering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-[#009970] transition-colors shadow-lg shadow-[#00b182]/20"
              >
                Boka kostnadsfri utredning
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
            Allt en samfällighet behöver
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Styrelsen ska inte behöva bli experter på laddinfrastruktur. Det är vårt jobb.
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

      {/* Process */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                En process.{' '}
                <span className="text-[#00b182]">Inga överraskningar.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Vi vet vilka beslut en samfällighet behöver fatta och i vilken ordning. Ni får en kontaktperson som följer föreningen hela vägen – och läs gärna vår guide om{' '}
                <Link href="/ladda-bilen-bidrag" className="text-[#00b182] font-bold hover:underline">
                  Ladda bilen-bidraget 2026
                </Link>{' '}
                innan stämman.
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
              {steps.map((item, i) => (
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

      <RelatedSolutions current="samfallighet" />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Dags att lösa laddfrågan i föreningen?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Hör av er så tar vi fram ett komplett underlag till styrelsen. Vi svarar inom en arbetsdag.
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
