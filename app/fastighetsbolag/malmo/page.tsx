import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Building2, Users, Settings, Layers, MapPin } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddbox BRF Malmö & Lund – Öresund',
  description:
    'Laddbox för nyare BRF i Malmö och Lund. Öresundsregionens fastighetsbolag får Zaptec, lastbalansering och Monta-debitering. Projektering från Örebro, installation via behöriga elektriker. Ring 019-760 42 90.',
  keywords: [
    'laddbox BRF Malmö',
    'laddbox bostadsrätt Lund',
    'elbilsladdning fastighet Öresund',
    'laddinfrastruktur Helsingborg Trelleborg',
    'Monta debitering ny BRF',
    'Zaptec garage Malmö',
    'lastbalansering nyproduktion Skåne',
    'laddstolpe BRF Landskrona Vellinge',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox för nyare BRF i Malmö och Lund',
    description:
      'Öresundsregionens föreningar och fastighetsbolag: Zaptec, lastbalansering och Monta redan från inflyttning eller som eftermontage.',
    url: 'https://www.cleancharge.se/fastighetsbolag/malmo',
    images: openGraphImages(
      'Laddbox för nyare BRF i Malmö och Lund — Öresundsregionen',
      '/fastighetsbolag/malmo/opengraph-image',
    ),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/fastighetsbolag/malmo' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddbox för BRF och fastighet i Malmö',
  path: '/fastighetsbolag/malmo',
  description:
    'Laddinfrastruktur för nyare bostadsrättsföreningar och fastighetsbolag i Malmö och Lund, med lastbalansering och individuell debitering via Monta.',
  serviceType: 'EV Charging Installation for Housing Associations',
  areaServed: { '@type': 'City', name: 'Malmö' },
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'För BRF & Fastighet', path: '/fastighetsbolag' },
  { name: 'Malmö', path: '/fastighetsbolag/malmo' },
]);

const faqEntries = [
  {
    question: 'Passar lösningen nyare BRF-garage i Malmö och Lund?',
    answer:
      'Ja, och det är just det beståndet sidan vänder sig till. Många skånska föreningar sitter i hus från 2000-talet och framåt, med garage som redan har tomrör eller en reserverad effekt – men utan färdig debitering. Vi kopplar Zaptec till den förberedelsen, sätter lastbalansering mot den faktiska servisen och öppnar Monta så att varje medlem betalar från första laddningen.',
  },
  {
    question: 'Kan ett bolag ha samma debitering i Malmö och Helsingborg?',
    answer:
      'Ja. Monta är inte bundet till en kommun. Fastighetsbolag med hus längs Öresund – Malmö, Lund, Landskrona, Helsingborg – kan samla platserna i en struktur. Varje anläggning lastbalanseras lokalt, medan rapporteringen till bolaget blir densamma.',
  },
  {
    question: 'Behöver nybyggda Öresundsfastigheter lastbalansering?',
    answer:
      'Ofta ja. Nyproduktion har bättre utgångsläge än stenstad, men elbilspenetrationen i Malmö och Lund stiger snabbt. Om alla platser i ett garage laddar samtidigt tar de mer än den reserverade schablonen. Lastbalansering skyddar både servisen och kalkylen när fler medlemmar köper elbil efter inflyttning.',
  },
  {
    question: 'Hur fungerar installationen när ni inte har kontor i Skåne?',
    answer:
      'Clean Charge AB har sitt säte på Dialoggatan 12B i Örebro, inte i Malmö. Vi projekterar, levererar Zaptec och driftar Monta. Behöriga elektriker i vårt nationella nätverk – eller föreningens egen installatör – utför montaget. Ni når oss på 019-760 42 90. Vi hittar inte på ett skånskt kontor vi inte har.',
  },
  {
    question: 'Vilka orter i Skåne tar ni BRF-uppdrag i?',
    answer:
      'Malmö, Lund, Helsingborg, Trelleborg, Landskrona, Staffanstorp, Burlöv och Vellinge. Samma modell i alla: projektering och drift från oss, montage via behörig elektriker.',
  },
];

const faq = faqJsonLd(faqEntries);

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Nyare BRF-garage',
    desc: 'Tomrör, beredda centraler och inflyttade föreningar som saknar debitering – vi färdigställer det som byggaren lämnade halvfärdigt.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Malmö, Lund och Öresund',
    desc: 'Pendling över bron och mellan orterna gör nattladdning i föreningsgaraget till vardag. Anläggningen ska tåla att bilen står hemma, inte vid en publik stolpe.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Lastbalansering redan vid inflytt',
    desc: 'Sätt taket mot servisen från dag ett, så att nästa års elbilar inte tvingar fram en omprojektering.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Monta från första kWh',
    desc: 'Nya föreningar slipper en period med schablon och internavräkning. Varje plats är en användare från driftsättning.',
  },
];

const included = [
  'Avstämning mot bygghandling eller befintlig central',
  'Zaptec Go / Pro i nyare garage',
  'Lastbalansering mot reserverad och faktisk effekt',
  'Monta öppnad för alla medlemmar vid driftstart',
  'Installationsunderlag till skånsk behörig elektriker',
  'OCPP och fjärrövervakning',
  'Samma struktur för bolag med hus i flera Öresundskommuner',
  'Kontakt 019-760 42 90 – Örebro, inte ett påhittat Malmökontor',
];

const districts = [
  'Malmö',
  'Lund',
  'Helsingborg',
  'Trelleborg',
  'Landskrona',
  'Staffanstorp',
  'Burlöv',
  'Vellinge',
];

export default function FastighetsbolagMalmoPage() {
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

      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'För BRF & Fastighet', href: '/fastighetsbolag' },
                { name: 'Malmö', href: '/fastighetsbolag/malmo' },
              ]}
              variant="light"
            />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Building2 className="w-4 h-4" />
              Lösningar för Fastighetsbolag & BRF
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox för nyare BRF i{' '}
              <span className="text-[#00b182]">Malmö</span>
              {' '}och Lund – Öresundsregionen.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Skånes nyare föreningsgarage är ofta förberedda för elbil men inte färdiga: rören finns, debiteringen saknas. Vi sätter Zaptec, lastbalansering och Monta så att medlemmen betalar sin egen laddning från första kvällen hemma från bron.
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#00b182] font-semibold mb-4">
            <MapPin className="w-5 h-5" />
            Öresundskommuner för BRF och fastighet
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Malmö och Lund först – sedan kusten norrut.
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-xl">
            Nyproduktion, ombildningar och blandat bolagsbestånd längs Öresund. Inte villaladdning, utan föreningsgarage.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {districts.map((name) => (
              <li
                key={name}
                className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold"
              >
                {name}
              </li>
            ))}
          </ul>
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

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Nyare bestånd är inte samma sak som färdig laddning.
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <p className="text-slate-600 leading-relaxed">
              I Malmö och Lund har många BRF:er tillkommit i vågor av nyproduktion. Garagen är rymligare än innerstadens källare, men föreningen ärver ofta en elanläggning där byggaren dragit tomrör till ett fåtal platser. Resten av kön hamnar i styrelsens knä. Eftermontage med Zaptec och lastbalansering är då ett fastighetsprojekt, inte ett villaköp.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Öresundspendlare laddar helst där bilen står över natten. Publik stolpe vid bron löser inte föreningens interndebitering. Vi kopplar Monta så att kWh hamnar på rätt medlem, och vi gör det från Örebro via behöriga elektriker – utan att låtsas att Dialoggatan ligger i Västra Hamnen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Färdigställ garaget.{' '}
                <span className="text-[#00b182]">Öppna debiteringen.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Projektering, Zaptec och Monta från oss. Montage av behörig elektriker i Skåne. En leveranskedja, en fakturamodell.
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">
            Fortsätt till andra fastighetssidor
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl">
            Malmö är Öresundssidan. Stockholm och Göteborg har egna förutsättningar. Samfällighet, Monta och kontakt ligger ett klick bort.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/fastighetsbolag/stockholm" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Stockholm
            </Link>
            <Link href="/fastighetsbolag/goteborg" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Göteborg
            </Link>
            <Link href="/fastighetsbolag" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              För BRF &amp; Fastighet
            </Link>
            <Link href="/samfallighet" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Samfällighet
            </Link>
            <Link href="/monta" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Monta-debitering
            </Link>
            <Link href="/kontakt" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <FaqSection entries={faqEntries} />

      <RelatedSolutions current="fastighetsbolag" />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
            Tomrör i garaget – men ingen debitering?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Skicka bygghandling eller en bild på centralen. Vi säger hur Zaptec och Monta kan kopplas på i er Malmö- eller Lundaförening, utan påhittade kundcase.
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
