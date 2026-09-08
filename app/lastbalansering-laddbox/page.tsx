import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gauge, Building2, BriefcaseBusiness, Home, Zap } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqSection from '@/components/FaqSection';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Lastbalansering för Laddbox – Så Fungerar Det',
  description:
    'Så fungerar lastbalansering för laddbox i villa, BRF och företag. Lär dig skillnaden mellan dynamisk och statisk styrning och när elanslutningen kan behöva förstärkas.',
  alternates: { canonical: 'https://www.cleancharge.se/lastbalansering-laddbox' },
  openGraph: {
    ...openGraphBase,
    title: 'Lastbalansering för laddbox – Guide | Clean Charge AB',
    description:
      'En praktisk guide till dynamisk lastbalansering för laddboxar i villa, BRF, samfällighet och företag.',
    url: 'https://www.cleancharge.se/lastbalansering-laddbox',
    type: 'article',
    images: openGraphImages('Lastbalansering för laddbox — så fungerar dynamisk effektstyrning'),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Kunskapsbank', path: '/kunskap' },
  { name: 'Lastbalansering för laddbox', path: '/lastbalansering-laddbox' },
]);

const faqEntries = [
  {
    question: 'Vad är lastbalansering för laddbox?',
    answer:
      'Lastbalansering styr hur mycket effekt laddboxen eller laddsystemet får använda utifrån den kapacitet som finns tillgänglig. Syftet är att undvika onödiga effekttoppar och minska risken att huvudsäkringen överbelastas.',
  },
  {
    question: 'Vad är skillnaden mellan statisk och dynamisk lastbalansering?',
    answer:
      'Statisk lastbalansering utgår från en fast effektgräns. Dynamisk lastbalansering mäter fastighetens aktuella förbrukning och kan löpande öka eller minska laddarnas effekt när annan förbrukning förändras.',
  },
  {
    question: 'Kan lastbalansering göra att vi slipper höja huvudsäkringen?',
    answer:
      'Ofta kan befintlig effekt användas betydligt effektivare med dynamisk lastbalansering, men det går inte att lova att en säkrings- eller servisuppgradering aldrig behövs. Det avgörs av fastighetens kapacitet, övrig förbrukning, antal laddpunkter och önskad laddhastighet.',
  },
  {
    question: 'Fungerar lastbalansering med många laddboxar?',
    answer:
      'Ja. I större anläggningar fördelas den tillgängliga effekten mellan flera laddpunkter. Det gör att en BRF, samfällighet eller arbetsplats kan bygga ut stegvis utan att varje laddare behöver dimensioneras för full effekt samtidigt.',
  },
  {
    question: 'Behöver lastbalansering internet?',
    answer:
      'Det beror på systemet. Vissa lösningar kommunicerar lokalt medan andra använder molntjänster eller internetanslutning för styrning och övervakning. Vi väljer lösning utifrån anläggningens krav och nätverksförutsättningar.',
  },
];

const faq = faqJsonLd(faqEntries);
const article = articleJsonLd({
  headline: 'Lastbalansering för laddbox – så fungerar det',
  path: '/lastbalansering-laddbox',
  description:
    'Praktisk guide till dynamisk och statisk lastbalansering för laddboxar i villa, BRF, samfällighet och företag.',
  datePublished: '2026-09-08',
  dateModified: '2026-09-08',
  imagePath: '/opengraph-image',
});

const audiences = [
  {
    icon: Home,
    title: 'Villa & radhus',
    text: 'Laddaren anpassar sig efter exempelvis värmepump, spis och övrig hushållsförbrukning.',
    href: '/privat',
    link: 'Laddbox hemma',
  },
  {
    icon: Building2,
    title: 'BRF & fastighet',
    text: 'Tillgänglig effekt delas mellan många laddplatser och fastighetens övriga laster.',
    href: '/fastighetsbolag',
    link: 'Laddbox för BRF & fastighet',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Företag & arbetsplats',
    text: 'Laddning kan skalas efter arbetsplatsens effekttak och hur länge bilarna normalt står parkerade.',
    href: '/foretag',
    link: 'Laddbox för företag',
  },
];

export default function LoadBalancingGuidePage() {
  return (
    <ClientLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <article>
        <section className="relative bg-white pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6">
            <Breadcrumbs
              items={[
                { name: 'Kunskapsbank', href: '/kunskap' },
                { name: 'Lastbalansering för laddbox', href: '/lastbalansering-laddbox' },
              ]}
              variant="light"
            />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00b182] mb-6">
              Guide till effektstyrning
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.03] mb-8">
              Lastbalansering för <span className="text-[#00b182]">laddbox</span> – så fungerar det.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Lastbalansering gör att laddningen använder den effekt som faktiskt finns tillgänglig i fastigheten. Det är ofta nyckeln till att kunna installera fler laddpunkter utan att dimensionera allt för maximal samtidig laddning.
            </p>
            <p className="text-sm text-slate-500 font-semibold">Faktagranskad av Clean Charge AB · Uppdaterad 8 september 2026</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
            <div className="space-y-10 text-lg text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">Varför behövs lastbalansering?</h2>
                <p>
                  En laddbox kan vara en av fastighetens större laster. Om flera bilar laddar samtidigt som annan förbrukning är hög kan den totala effekten bli onödigt stor. Lastbalanseringen begränsar eller fördelar laddningen så att anläggningen håller sig inom en definierad nivå.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">Dynamisk lastbalansering</h2>
                <p>
                  Dynamisk styrning mäter den aktuella förbrukningen och justerar laddningen löpande. När fastigheten använder mindre el kan mer effekt gå till bilarna. När övrig förbrukning ökar sänks laddarnas effekt. Resultatet är att den befintliga elkapaciteten används mer effektivt.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">För många laddplatser</h2>
                <p>
                  I BRF:er, samfälligheter och på arbetsplatser fördelas effekten mellan flera laddare. Eftersom bilar ofta står parkerade i flera timmar behöver alla uttag sällan leverera maximal effekt samtidigt. Systemet kan därför prioritera och fördela kapaciteten över tid.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">När räcker inte lastbalansering?</h2>
                <p>
                  Om den tillgängliga effekten är mycket begränsad, om många fordon måste snabbladdas samtidigt eller om fastigheten redan ligger nära sin kapacitetsgräns kan en förstärkning ändå behövas. Därför börjar större projekt med en genomgång av elcentral, huvudsäkring, effektbehov och framtida antal laddplatser.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 bg-slate-950 text-white rounded-3xl p-8">
              <Gauge className="w-9 h-9 text-[#00b182] mb-6" aria-hidden="true" />
              <h2 className="text-2xl font-black mb-4">Kort sagt</h2>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li>• Mäter eller begränsar anläggningens effektuttag.</li>
                <li>• Fördelar effekt mellan en eller flera laddboxar.</li>
                <li>• Kan minska behovet av onödig säkringshöjning.</li>
                <li>• Gör stegvis utbyggnad enklare i större anläggningar.</li>
              </ul>
              <Link href="/kontakt" className="mt-8 inline-flex items-center gap-2 text-[#00b182] font-black">
                Få hjälp att dimensionera <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </section>

        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-12">Lastbalansering i olika miljöer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map(({ icon: Icon, title, text, href, link }) => (
                <div key={href} className="bg-white border border-slate-200 rounded-3xl p-8">
                  <Icon className="w-7 h-7 text-[#00b182] mb-6" aria-hidden="true" />
                  <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{text}</p>
                  <Link href={href} className="inline-flex items-center gap-2 text-sm font-black text-[#00b182]">
                    {link} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection entries={faqEntries} />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Zap className="w-10 h-10 text-[#00b182] mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Vill ni veta hur mycket effekt ni faktiskt behöver?</h2>
            <p className="text-lg text-slate-600 mb-10">Vi går igenom anläggningen och dimensionerar laddningen efter dagens behov och framtida utbyggnad.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider">
              Boka kostnadsfri genomgång <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </ClientLayout>
  );
}
