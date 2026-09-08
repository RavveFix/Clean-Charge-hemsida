import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Gauge, CreditCard, Layers3, Wrench } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedSolutions from '@/components/RelatedSolutions';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Projektexempel: Laddbox för BRF med 20 Platser',
  description:
    'Se hur ett typiskt BRF-projekt med 20 parkeringsplatser kan planeras med lastbalansering, individuell debitering och skalbar laddinfrastruktur.',
  alternates: { canonical: 'https://www.cleancharge.se/projektexempel-brf-laddning' },
  openGraph: {
    ...openGraphBase,
    title: 'Projektexempel: Laddbox för BRF med 20 platser | Clean Charge AB',
    description:
      'Ett transparent projektexempel som visar hur elkapacitet, lastbalansering, laddboxar och individuell debitering kan hänga ihop i en BRF.',
    url: 'https://www.cleancharge.se/projektexempel-brf-laddning',
    images: openGraphImages('Projektexempel för BRF — 20 parkeringsplatser, lastbalansering och debitering'),
    type: 'article',
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Kunskapsbank', path: '/kunskap' },
  { name: 'Projektexempel BRF', path: '/projektexempel-brf-laddning' },
]);

const article = articleJsonLd({
  headline: 'Projektexempel: laddbox för BRF med 20 parkeringsplatser',
  path: '/projektexempel-brf-laddning',
  description:
    'Illustrativt projektexempel för hur en BRF kan planera 20 parkeringsplatser med skalbar laddinfrastruktur, lastbalansering och individuell debitering.',
  datePublished: '2026-09-08',
  dateModified: '2026-09-08',
});

const projectSteps = [
  {
    icon: Building2,
    title: '1. Förutsättningar',
    text: 'Föreningen har 20 parkeringsplatser och vill kunna börja med en mindre första etapp utan att behöva bygga om hela systemet när fler boende skaffar elbil.',
  },
  {
    icon: Gauge,
    title: '2. Effekt & lastbalansering',
    text: 'Tillgänglig effekt kartläggs först. Därefter dimensioneras dynamisk lastbalansering så att laddningen kan anpassas efter fastighetens övriga belastning i stället för att varje laddare dimensioneras för maximal effekt samtidigt.',
  },
  {
    icon: Layers3,
    title: '3. Skalbar installation',
    text: 'Kanalisation, matning och kommunikation planeras för hela parkeringsytan, medan antalet aktiva laddpunkter kan byggas ut stegvis. Det minskar risken för dyra omtag när efterfrågan växer.',
  },
  {
    icon: CreditCard,
    title: '4. Individuell debitering',
    text: 'Varje användare identifieras separat och debiteras utifrån sin egen laddning. Föreningen kan välja prismodell och få en tydligare administration än med manuell avläsning eller schablonavgifter.',
  },
  {
    icon: Wrench,
    title: '5. Drift & support',
    text: 'När anläggningen är driftsatt behövs en tydlig ansvarskedja för övervakning, felsökning, användarsupport och framtida utbyggnad. Det är en viktig del av helhetskalkylen, inte bara hårdvaran.',
  },
];

const decisions = [
  'Hur många platser ska vara aktiva i första etappen?',
  'Vilken effekt finns tillgänglig i fastigheten och när uppstår effekttoppar?',
  'Ska infrastrukturen förberedas för alla parkeringsplatser från start?',
  'Hur ska boende identifieras och debiteras?',
  'Vem ansvarar för drift, support och framtida utbyggnad?',
  'Vilket underlag behöver styrelsen innan beslut och eventuell bidragsansökan?',
];

export default function BrfProjectExamplePage() {
  return (
    <ClientLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { name: 'Kunskapsbank', href: '/kunskap' },
                { name: 'Projektexempel BRF', href: '/projektexempel-brf-laddning' },
              ]}
              variant="light"
            />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00b182] mb-6">
              Illustrativt projektexempel
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.03] mb-8">
              Så kan en BRF planera <span className="text-[#00b182]">20 laddplatser</span> utan att låsa sig från start.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Det här är ett transparent projektexempel som visar hur ett typiskt BRF-upplägg kan struktureras. Det är inte ett påstående om ett namngivet, slutfört kundprojekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fastighetsbolag"
                className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-[#009970] transition-colors"
              >
                Se lösningen för BRF
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Begär genomgång
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="project-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 id="project-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-5">
              Från parkeringsyta till driftsatt system
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ett bra BRF-projekt börjar inte med att välja laddbox. Först behöver man förstå effekt, utbyggnadstakt, kabelvägar, betalning och vem som ska ansvara för driften efter installationen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectSteps.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#00b182]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#00b182] mb-5">Styrelseunderlag</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Sex frågor att lösa innan föreningen beställer.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Ju tydligare svaren är på de här frågorna, desto lättare blir det att jämföra offerter på samma grund och undvika att billiga initiala lösningar blir dyra vid nästa utbyggnad.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/lastbalansering-laddbox" className="text-[#00b182] font-bold hover:underline">
                Läs om lastbalansering
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/individuell-debitering-laddbox" className="text-[#00b182] font-bold hover:underline">
                Läs om individuell debitering
              </Link>
            </div>
          </div>
          <ul className="space-y-4">
            {decisions.map((item) => (
              <li key={item} className="flex items-start gap-4 text-slate-300 font-medium leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#00b182] shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Varför ett projektexempel är bättre än ett påhittat kundcase
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Ett riktigt kundcase bör innehålla verifierbara fakta: faktisk anläggning, antal laddpunkter, genomförd lösning och gärna kundens godkännande. Tills ett sådant case är redo publicerar vi hellre ett tydligt projektexempel än att framställa ett scenario som ett genomfört referensprojekt.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            När Clean Charge har ett färdigt projekt med publicerbara data kan den här sidan ersättas eller kompletteras med ett riktigt case med före/efter, valda komponenter, driftsmodell och resultat.
          </p>
        </div>
      </section>

      <RelatedSolutions current="projektexempel-brf-laddning" />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Vill ni få samma struktur för er fastighet?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Vi går igenom parkering, elkapacitet, utbyggnadstakt och debitering innan ni låser er vid en teknisk lösning.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-3 bg-[#00b182] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-[#009970] transition-colors"
          >
            Boka kostnadsfri genomgång
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
