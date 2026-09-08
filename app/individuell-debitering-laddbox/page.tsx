import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CreditCard, Building2, Users, BarChart3, WalletCards } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqSection from '@/components/FaqSection';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Individuell Debitering av Laddbox – Så Fungerar Det',
  description:
    'Guide till individuell debitering av laddbox för BRF, samfällighet och företag. Se hur användare identifieras, hur kWh mäts och hur betalning kan automatiseras via Monta.',
  alternates: { canonical: 'https://www.cleancharge.se/individuell-debitering-laddbox' },
  openGraph: {
    ...openGraphBase,
    title: 'Individuell debitering av laddbox – Guide | Clean Charge AB',
    description:
      'Så fungerar mätning, prissättning och automatisk debitering av elbilsladdning för BRF, samfällighet och företag.',
    url: 'https://www.cleancharge.se/individuell-debitering-laddbox',
    type: 'article',
    images: openGraphImages('Individuell debitering av laddbox — mätning, pris och betalning'),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Kunskapsbank', path: '/kunskap' },
  { name: 'Individuell debitering av laddbox', path: '/individuell-debitering-laddbox' },
]);

const faqEntries = [
  {
    question: 'Vad betyder individuell debitering av laddbox?',
    answer:
      'Det betyder att varje användares laddning registreras separat och att kostnaden kan beräknas utifrån den faktiska energimängden eller den prismodell som anläggningsägaren har valt. Därmed behöver kostnaden inte fördelas med schabloner mellan alla boende eller användare.',
  },
  {
    question: 'Hur identifieras den som laddar?',
    answer:
      'Det kan ske exempelvis via app, RFID eller annan användaridentifiering som är kopplad till laddsystemet. När laddningen startar kopplas sessionen till rätt användare och förbrukningen registreras.',
  },
  {
    question: 'Kan en BRF eller samfällighet sätta eget pris per kWh?',
    answer:
      'I ett administrerat laddsystem kan anläggningsägaren normalt konfigurera en tariff eller prismodell för användarna. Exakt upplägg bör anpassas efter föreningens kostnader, avtal och administrativa modell.',
  },
  {
    question: 'Kan betalningen automatiseras?',
    answer:
      'Ja. Med en betal- och driftplattform som Monta kan laddsessioner, användare och betalflöden hanteras digitalt. Det minskar behovet av manuell avläsning och separata kalkylblad.',
  },
  {
    question: 'Fungerar individuell debitering även för anställda och gäster?',
    answer:
      'Ja. Företag kan skilja på olika användargrupper och välja hur anställda, tjänstebilar eller besökare ska hanteras. För publika anläggningar kan betalning även erbjudas till externa användare beroende på vald lösning.',
  },
];

const faq = faqJsonLd(faqEntries);
const article = articleJsonLd({
  headline: 'Individuell debitering av laddbox – så fungerar det',
  path: '/individuell-debitering-laddbox',
  description:
    'Praktisk guide till mätning, användaridentifiering, prissättning och automatisk debitering av elbilsladdning.',
  datePublished: '2026-09-08',
  dateModified: '2026-09-08',
  imagePath: '/opengraph-image',
});

const flow = [
  {
    icon: Users,
    title: '1. Identifiera användaren',
    text: 'Föraren startar laddningen med exempelvis app eller RFID så att sessionen kopplas till rätt person eller konto.',
  },
  {
    icon: BarChart3,
    title: '2. Mät laddningen',
    text: 'Laddsystemet registrerar energimängd och sessionsdata för den enskilda användaren.',
  },
  {
    icon: WalletCards,
    title: '3. Beräkna kostnaden',
    text: 'Den valda tariffen eller prismodellen används för att beräkna vad just den laddsessionen ska kosta.',
  },
  {
    icon: CreditCard,
    title: '4. Hantera betalningen',
    text: 'En plattform som Monta kan automatisera betalflödet och ge anläggningsägaren rapporter och överblick.',
  },
];

export default function IndividualBillingGuidePage() {
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
                { name: 'Individuell debitering', href: '/individuell-debitering-laddbox' },
              ]}
              variant="light"
            />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00b182] mb-6">
              Guide för BRF, samfällighet & företag
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.03] mb-8">
              Individuell <span className="text-[#00b182]">debitering</span> av laddbox – så fungerar det.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              När flera personer delar en laddanläggning behöver varje laddsession kunna kopplas till rätt användare. Med individuell debitering kan kostnaden fördelas efter faktisk användning i stället för med en generell schablon.
            </p>
            <p className="text-sm text-slate-500 font-semibold">Faktagranskad av Clean Charge AB · Uppdaterad 8 september 2026</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-5">Från laddsession till rätt kostnad</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-14">
              Grundprincipen är enkel: systemet behöver veta vem som laddar, hur mycket energi som används och vilken prismodell som gäller. Därefter kan administrationen automatiseras.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {flow.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                  <Icon className="w-7 h-7 text-[#00b182] mb-5" aria-hidden="true" />
                  <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-950 text-white">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-6">För BRF & fastighetsbolag</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Individuell debitering gör det möjligt att skilja varje boendes eller hyresgästs laddning från fastighetens övriga elförbrukning. Det ger ett tydligare underlag och minskar behovet av manuell administration.
              </p>
              <Link href="/fastighetsbolag" className="inline-flex items-center gap-2 text-[#00b182] font-black">
                Se lösningen för BRF & fastighet <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-6">För samfällighet & företag</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Samfälligheter kan separera medlemmarnas laddning och företag kan hantera olika typer av användare, till exempel anställda, tjänstebilar och besökare, i samma laddmiljö.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/samfallighet" className="inline-flex items-center gap-2 text-[#00b182] font-black">
                  Laddning för samfällighet <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/foretag" className="inline-flex items-center gap-2 text-[#00b182] font-black">
                  Laddbox för företag <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">Monta som betal- och driftplattform</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Clean Charge använder Monta för att konfigurera användare, betalning, debitering och löpande drift i många av våra anläggningar. Vilket upplägg som passar bäst beror på vilka som ska ladda och hur ni vill hantera kostnaden.
              </p>
              <Link href="/monta" className="inline-flex items-center gap-2 text-[#00b182] font-black">
                Läs om Monta & debitering <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <FaqSection entries={faqEntries} />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Building2 className="w-10 h-10 text-[#00b182] mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Vill ni slippa manuell laddadministration?</h2>
            <p className="text-lg text-slate-600 mb-10">Vi hjälper er välja laddsystem, prismodell och driftupplägg utifrån anläggningens användare.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider">
              Boka kostnadsfri genomgång <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </ClientLayout>
  );
}
