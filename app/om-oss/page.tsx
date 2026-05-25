import type { Metadata } from 'next';
import Link from 'next/link';
import ClientLayout from '@/app/ClientLayout';
import AboutSection from '@/components/AboutSection';
import { MapPin, Calendar, Award, Users, Phone, Mail, ArrowRight } from 'lucide-react';
import { breadcrumbJsonLd } from '@/lib/jsonld';

const breadcrumb = breadcrumbJsonLd([{ name: 'Om Oss', path: '/om-oss' }]);

export const metadata: Metadata = {
  title: 'Om Oss – Laddexperter i Örebro',
  description:
    'Clean Charge AB grundades 2021 i Örebro. Auktoriserad partner för Zaptec och Monta – vi hjälper företag och fastighetsbolag med komplett laddinfrastruktur.',
  alternates: { canonical: 'https://www.cleancharge.se/om-oss' },
  openGraph: {
    title: 'Om Clean Charge AB – Laddexperter sedan 2021',
    description:
      'Auktoriserad Zaptec- och Monta-partner från Örebro. Vi levererar komplett laddinfrastruktur för företag och fastighetsbolag.',
    url: 'https://www.cleancharge.se/om-oss',
    images: ['/opengraph-image'],
  },
};

const VALUES = [
  {
    title: 'Oberoende experter',
    body: 'Vi binder oss inte vid ett enda fabrikat. Vi rekommenderar den hårdvara som passar er bäst – från Zaptec och Easee till Autel och Monta.',
  },
  {
    title: 'Hela kedjan',
    body: 'Från besiktning och projektering till installation, drift och support – allt sker hos oss. En kontaktperson, ett ansvar.',
  },
  {
    title: 'Långsiktiga relationer',
    body: 'En laddinstallation håller i 10+ år. Vi finns kvar för att underhålla, optimera och bygga ut när behoven växer.',
  },
];

const FACTS = [
  { icon: Calendar, label: 'Grundat', value: '2021' },
  { icon: MapPin, label: 'Huvudkontor', value: 'Örebro' },
  { icon: Award, label: 'Monta-betyg', value: '4.6 ★' },
  { icon: Users, label: 'Genomförda laddningar', value: '50 000+' },
];

export default function OmOssPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cc-green/5 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-cc-green font-black tracking-[0.3em] uppercase text-xs mb-4 block">Om Clean Charge</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6 sm:mb-8">
              Vi är specialisterna<br />
              på <span className="text-cc-green">laddinfrastruktur</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Clean Charge AB grundades i Örebro 2021 av människor som tröttnade på att laddstationer slutade fungera dagen efter installationen. Vi finns för att laddinfrastruktur ska bara funka – varje dag, i många år.
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {FACTS.map((f) => (
              <div key={f.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-cc-green" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter leading-none">{f.value}</p>
                  <p className="text-[12px] font-black uppercase tracking-widest text-slate-400 mt-1.5">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <span className="text-cc-green font-black tracking-[0.3em] uppercase text-xs mb-3 block">Vår historia</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Från elektriker­frustration till driftsäker laddning.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Vi startade 2021 efter att ha sett samma mönster gång på gång: laddboxar installerades, men ingen tog ansvar för att de skulle fungera över tid. Föreningar fick fakturor utan förklaring, företag fick laddare som låg nere, och privatpersoner fick aldrig den hjälp de blivit lovade.
              </p>
              <p>
                Clean Charge byggdes som motsatsen. Vi paketerade hårdvara, installation, mjukvara och drift i en lösning där en kontaktperson ansvarar för hela kedjan. Inga svarta hål mellan elektriker, plattformsleverantör och kund.
              </p>
              <p>
                Idag är vi auktoriserad partner till Zaptec och Monta-operatör med <span className="font-black text-slate-900">4.6 ★</span> i betyg och över <span className="font-black text-slate-900">50 000 genomförda laddningar</span> via vår plattform. Vi installerar i hela Sverige – med teamet baserat i Örebro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-cc-green font-black tracking-[0.3em] uppercase text-xs mb-3 block">Det här tror vi på</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Tre principer som styr hur vi jobbar.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-100 hover:border-cc-green/30 hover:shadow-xl hover:shadow-cc-green/5 transition-all">
                <p className="text-[12px] font-black uppercase tracking-[0.3em] text-cc-green mb-5">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">{v.title}</h3>
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-cc-green font-black tracking-[0.3em] uppercase text-xs mb-3 block">Möt teamet</span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                Du pratar direkt med beslutsfattaren.
              </h2>
              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                Vi är ett litet team med ett tydligt fokus. När du kontaktar oss kommer du alltid till någon som har mandat att ta beslut – ingen ärendekö, inga eskaleringar.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cc-green/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cc-green/15 border border-cc-green/30 flex items-center justify-center shrink-0">
                    <span className="text-3xl sm:text-4xl font-black text-cc-green tracking-tighter">PL</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-black uppercase tracking-[0.3em] text-cc-green mb-2">VD & Ekonomiansvarig</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">Petra Lind</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      <a href="mailto:petra.lind@cleancharge.se" className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-cc-green transition-colors">
                        <Mail className="w-4 h-4" />
                        petra.lind@cleancharge.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cc-green/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cc-green/15 border border-cc-green/30 flex items-center justify-center shrink-0">
                    <span className="text-3xl sm:text-4xl font-black text-cc-green tracking-tighter">RS</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-black uppercase tracking-[0.3em] text-cc-green mb-2">Teknik & Drift</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">Ravon Eric Albin Strawder</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      <a href="tel:0722110026" className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-cc-green transition-colors">
                        <Phone className="w-4 h-4" />
                        072-211 00 26
                      </a>
                      <a href="mailto:ravon.strawder@cleancharge.se" className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-cc-green transition-colors">
                        <Mail className="w-4 h-4" />
                        ravon.strawder@cleancharge.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cc-green/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cc-green/15 border border-cc-green/30 flex items-center justify-center shrink-0">
                    <span className="text-3xl sm:text-4xl font-black text-cc-green tracking-tighter">EL</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-black uppercase tracking-[0.3em] text-cc-green mb-2">Säljansvarig</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">Elisabeth Lindh</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      <a href="tel:019333099" className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-cc-green transition-colors">
                        <Phone className="w-4 h-4" />
                        019-33 30 99
                      </a>
                      <a href="mailto:elisabeth.lindh@cleancharge.se" className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-cc-green transition-colors">
                        <Mail className="w-4 h-4" />
                        elisabeth.lindh@cleancharge.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us – återanvänd befintlig sektion längst ner */}
      <AboutSection />
    </ClientLayout>
  );
}
