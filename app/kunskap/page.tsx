import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgePercent, Calculator, Trophy, Building2, BriefcaseBusiness, Home } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kunskapsbank – Guider om Laddboxar',
  description:
    'Guider från Clean Charges laddexperter: priser, bidrag, produktval och planering av laddbox för villa, BRF, samfällighet och företag.',
  alternates: { canonical: 'https://www.cleancharge.se/kunskap' },
  openGraph: {
    ...openGraphBase,
    title: 'Kunskapsbank – Guider om laddboxar | Clean Charge AB',
    description:
      'Praktiska och faktagranskade guider om kostnader, bidrag och val av laddbox.',
    url: 'https://www.cleancharge.se/kunskap',
    images: openGraphImages(
      'Clean Charges kunskapsbank — guider om laddboxar, priser och bidrag',
      '/kunskap/opengraph-image',
    ),
  },
};

const guides = [
  {
    href: '/vad-kostar-laddbox',
    title: 'Vad kostar en laddbox 2026?',
    description: 'Riktpriser för villa, BRF, samfällighet, företag och DC-snabbladdning.',
    label: 'Prisguide',
    icon: Calculator,
  },
  {
    href: '/ladda-bilen-bidrag',
    title: 'Ladda bilen-bidraget 2026',
    description: 'Stödnivåer, krav och ansökningsprocess för företag och föreningar.',
    label: 'Bidragsguide',
    icon: BadgePercent,
  },
  {
    href: '/basta-laddboxen',
    title: 'Bästa laddboxen för ditt behov',
    description: 'Vår praktiska jämförelse av Zaptec, Easee och Autel för olika miljöer.',
    label: 'Jämförelse',
    icon: Trophy,
  },
];

const audiences = [
  { href: '/privat', title: 'Villa & radhus', description: 'Laddbox hemma med Grön Teknik-avdrag.', icon: Home },
  { href: '/fastighetsbolag', title: 'BRF & fastighet', description: 'Skalbar laddning och individuell debitering.', icon: Building2 },
  { href: '/foretag', title: 'Företag', description: 'Laddning för anställda, besökare och fordonsflottor.', icon: BriefcaseBusiness },
];

const breadcrumb = breadcrumbJsonLd([{ name: 'Kunskapsbank', path: '/kunskap' }]);
const collection = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/kunskap#collection`,
  name: 'Clean Charges kunskapsbank om laddboxar',
  url: `${SITE_URL}/kunskap`,
  inLanguage: 'sv-SE',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `${SITE_URL}${guide.href}`,
    })),
  },
};

export default function KnowledgePage() {
  return (
    <ClientLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />

      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ name: 'Kunskapsbank', href: '/kunskap' }]} variant="light" />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00b182] mb-6">
              Kunskap från verkliga laddprojekt
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.03] mb-8">
              Guider som gör valet av <span className="text-[#00b182]">laddbox</span> enklare.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
              Här samlar vi faktagranskade råd om pris, stöd, installation och produktval – baserade på vår erfarenhet av laddinfrastruktur för hem, föreningar och företag.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="guides-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="guides-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Våra mest lästa guider
          </h2>
          <p className="text-lg text-slate-500 mb-14 max-w-2xl">
            Börja med frågan du vill lösa. Varje guide leder vidare till rätt lösning och rådgivning.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {guides.map(({ href, title, description, label, icon: Icon }) => (
              <article key={href} className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#00b182]" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700">{label}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{description}</p>
                <Link href={href} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#00b182]">
                  Läs guiden <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100" aria-labelledby="audiences-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="audiences-heading" className="text-4xl font-black text-slate-900 tracking-tighter mb-12">
            Eller välj efter ert behov
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map(({ href, title, description, icon: Icon }) => (
              <Link key={href} href={href} className="group bg-white border border-slate-200 rounded-3xl p-7 hover:border-[#00b182]/40 hover:shadow-lg transition-all">
                <Icon className="w-7 h-7 text-[#00b182] mb-5" aria-hidden="true" />
                <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#00b182]">
                  Se lösningen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
