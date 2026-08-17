import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Building2, Users, Settings, Zap, MapPin } from 'lucide-react';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Laddbox BRF Stockholm – innerstadsgarage',
  description:
    'Laddbox för BRF och fastighetsbolag i Stockholm. Lastbalansering i innerstadsgarage med tight el, Zaptec och individuell Monta-debitering. Vi projekterar från Örebro och installerar via behöriga elektriker. Ring 019-760 42 90.',
  keywords: [
    'laddbox BRF Stockholm',
    'laddbox fastighetsbolag Stockholm',
    'lastbalansering innerstadsgarage',
    'elbilsladdning bostadsrätt Stockholm',
    'laddinfrastruktur Solna Sundbyberg',
    'Monta debitering BRF garage',
    'Zaptec laddbox flerbostadshus Stockholm',
    'kollektiv laddning Nacka Huddinge',
  ],
  openGraph: {
    ...openGraphBase,
    title: 'Laddbox för BRF i Stockholm – innerstadsgarage och lastbalansering',
    description:
      'Projektering, Zaptec och Monta-debitering för Stockholms BRF:er. Lastbalansering där elen i källargaraget redan är trång.',
    url: 'https://www.cleancharge.se/fastighetsbolag/stockholm',
    images: openGraphImages(
      'Laddbox för BRF i Stockholm — lastbalansering i innerstadsgarage',
      '/fastighetsbolag/stockholm/opengraph-image',
    ),
    type: 'website',
  },
  alternates: { canonical: 'https://www.cleancharge.se/fastighetsbolag/stockholm' },
};

const jsonLd = serviceJsonLd({
  name: 'Laddbox för BRF och fastighet i Stockholm',
  path: '/fastighetsbolag/stockholm',
  description:
    'Laddinfrastruktur för bostadsrättsföreningar och fastighetsbolag i Stockholm, med lastbalansering för innerstadsgarage och individuell debitering via Monta.',
  serviceType: 'EV Charging Installation for Housing Associations',
  areaServed: { '@type': 'City', name: 'Stockholm' },
});

const breadcrumb = breadcrumbJsonLd([
  { name: 'För BRF & Fastighet', path: '/fastighetsbolag' },
  { name: 'Stockholm', path: '/fastighetsbolag/stockholm' },
]);

const faqEntries = [
  {
    question: 'Hur laddar en BRF i innerstaden när elen i garaget redan är trång?',
    answer:
      'Stockholms källargarage – särskilt i stenstad och 40–60-talsbestånd – har sällan reserv i servisen. Vi dimensionerar lastbalansering (Dynamic Power Balance) så att Zaptec-laddarna delar den effekt som faktiskt finns kvar efter hissar, tvättstuga och belysning. Målet är att ni ska kunna erbjuda laddning utan att först beställa en dyr näthöjning.',
  },
  {
    question: 'Kan föreningen börja med några platser i ett stort garage?',
    answer:
      'Ja. Många stockholmska BRF:er har fler p-platser än elabonnemanget tål att belasta på en gång. Vi förbereder stammar och Monta så att ni kan öppna ett första kluster – till exempel längs en vägg i källaren – och koppla på fler stolpar när kön växer, utan att riva upp hela anläggningen.',
  },
  {
    question: 'Hur fungerar individuell debitering när många lägenheter delar garage?',
    answer:
      'Varje boende identifieras i Monta och betalar bara sin egen kWh. Styrelsen slipper excelark och interna mellanhavanden. Det är särskilt värdefullt i Stockholm där garage ofta delas av flera trapphus eller till och med flera föreningar i samma kvarter.',
  },
  {
    question: 'Har Clean Charge kontor i Stockholm?',
    answer:
      'Nej. Clean Charge AB har sitt säte på Dialoggatan 12B i Örebro. För Stockholmsområdet projekterar vi anläggningen, levererar Zaptec-hårdvara och sätter upp Monta-drift. Själva montaget utförs av behöriga elektriker i vårt nationella nätverk, eller av den installatör föreningen redan har ramavtal med. Kontakt: 019-760 42 90.',
  },
  {
    question: 'Vilka kommuner kring Stockholm tar ni uppdrag i?',
    answer:
      'Vi tar BRF- och fastighetsuppdrag i Stockholm, Solna, Sundbyberg, Nacka, Huddinge, Sollentuna, Täby och Södertälje. Samma modell gäller: projektering och drift från oss, montage via behörig elektriker på plats.',
  },
];

const faq = faqJsonLd(faqEntries);

const benefits = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Byggt för innerstadsgarage',
    desc: 'Källare under stenstad och miljonprogram har trånga schakt och begränsad servis. Vi ritar anläggningen efter det – inte efter ett öppet markparkeringstänk.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Lastbalansering först',
    desc: 'I Stockholm är elen ofta flaskhalsen, inte antalet stolpar. Dynamisk lastbalansering fördelar effekten så att garaget inte löser ut när alla kommer hem samtidigt.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Monta per lägenhet',
    desc: 'Varje medlem eller hyresgäst faktureras automatiskt. Styrelsen ser förbrukning per plats utan att hantera betalningar manuellt.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Zaptec i flerbostadshus',
    desc: 'Zaptec Go och Pro är byggda för att kedjas i garage. De pratar lastbalansering och Monta nativt, vilket passar Stockholms täta BRF-bestånd.',
  },
];

const included = [
  'Genomgång av servis och elcentral i garaget',
  'Projektering anpassad för källargarage',
  'Zaptec Go / Pro med lastbalansering',
  'Monta uppsatt för individuell BRF-debitering',
  'Installationsunderlag till behörig elektriker',
  'OCPP-kompatibel drift och fjärrövervakning',
  'Skalbar utbyggnad när kön i föreningen växer',
  'En kontaktväg: 019-760 42 90',
];

const districts = [
  'Stockholm',
  'Solna',
  'Sundbyberg',
  'Nacka',
  'Huddinge',
  'Sollentuna',
  'Täby',
  'Södertälje',
];

export default function FastighetsbolagStockholmPage() {
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
                { name: 'Stockholm', href: '/fastighetsbolag/stockholm' },
              ]}
              variant="light"
            />
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Building2 className="w-4 h-4" />
              Lösningar för Fastighetsbolag & BRF
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Laddbox för{' '}
              <span className="text-[#00b182]">BRF i Stockholm</span>
              {' '}– lastbalansering i innerstadsgarage.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              Stockholms bostadsrättsföreningar sitter på tätt garagebestånd och en elanläggning som sällan ritades för elbil. Vi projekterar Zaptec med lastbalansering och Monta-debitering så att föreningen kan erbjuda laddning utan att belasta styrelsen med mätaravläsning.
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
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Där källargaraget sätter villkoren
          </h2>
          <p className="text-slate-500 text-lg mb-16 max-w-xl">
            Inte en villalösning i större format – en anläggning ritad för Stockholms flerbostadshus.
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

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                Tight el, många BRF:er, samma garagekö.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                I Stockholm är laddfrågan sällan att hitta markyta. Den sitter i källaren: låg takhöjd, långa kabeldragningar genom befintliga schakt och en servis som redan matar hissar och frånluft. En BRF på Östermalm, Södermalm eller i en 50-talsfastighet i Solna har sällan samma utgångsläge som ett nybygge med reserverad effekt.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Därför börjar vi med elen, inte med stolparna. Lastbalansering gör att flera Zaptec-laddare kan dela den kapacitet som faktiskt finns. Monta ser till att den som laddar betalar – oavsett om platsen tillhör en bostadsrätt, en hyresrätt i samma port eller en extern p-platsinnehavare.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Clean Charge AB utgår från Dialoggatan 12B i Örebro och arbetar i Stockholm genom behöriga elektriker. Vi äger projektering, hårdvara och drift. Ni får en kontakt, inte ett lokalt skyltfönster vi inte har.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[#00b182] font-semibold mb-6">
                <MapPin className="w-5 h-5" />
                Kommuner vi tar BRF-uppdrag i
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {districts.map((name) => (
                  <li
                    key={name}
                    className="bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-800 font-bold"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Från elcentral till{' '}
                <span className="text-[#00b182]">debiterad kWh.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Vi tar fram underlag, levererar Zaptec och sätter Monta i drift. Behörig elektriker monterar i garaget. Styrelsen behöver inte jaga tre leverantörer.
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
            Fler sidor för fastighet och drift
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl">
            Stockholm är ett av tre storstadsområden vi beskriver särskilt. Samma BRF-modell gäller nationellt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/fastighetsbolag/goteborg" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Göteborg
            </Link>
            <Link href="/fastighetsbolag/malmo" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#00b182]/30 hover:bg-emerald-50/30 transition-all duration-300 font-black text-slate-900">
              BRF i Malmö
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
            Har garaget i er BRF blivit en kölista?
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Skicka planritning eller en kort beskrivning av elcentralen. Vi återkommer med hur lastbalansering och Monta kan se ut i just ert garage – utan påhittade referenser eller priser vi inte kan stå för.
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
