import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, MapPin, Phone, Settings, Users } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqSection from '@/components/FaqSection';
import RelatedSolutions from '@/components/RelatedSolutions';
import type { PropertyCityPage } from '@/lib/property-city-pages';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';

export default function PropertyCityPage({ page }: { page: PropertyCityPage }) {
  const path = `/fastighetsbolag/${page.slug}`;
  const breadcrumb = breadcrumbJsonLd([
    { name: 'För BRF & Fastighet', path: '/fastighetsbolag' },
    { name: `Laddbox ${page.city}`, path },
  ]);
  const service = serviceJsonLd({
    name: `Laddbox för BRF och fastighetsbolag i ${page.region}`,
    path,
    description: page.description,
    serviceType: 'EV Charging Installation for Real Estate',
    areaServed: { '@type': 'City', name: page.city },
  });
  const faq = faqJsonLd(page.faq);

  return (
    <ClientLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="relative overflow-hidden bg-white pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'För BRF & Fastighet', href: '/fastighetsbolag' },
                { name: `Laddbox ${page.city}`, href: path },
              ]}
              variant="light"
            />
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <MapPin className="h-4 w-4" />
              {page.angle}
            </div>
            <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
              {page.heading}
            </h1>
            <p className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-600">{page.intro}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#00b182] px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-lg shadow-[#00b182]/20 transition-colors hover:bg-[#009970]">
                Få kostnadsfri offert
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:0197604290" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-black uppercase tracking-wider text-slate-900 transition-colors hover:bg-slate-50">
                <Phone className="h-5 w-5" />
                019-760 42 90
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-4xl font-black tracking-tighter text-slate-900">{page.challengesTitle}</h2>
          <p className="mb-16 max-w-2xl text-lg text-slate-500">{page.challengesIntro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {page.challenges.map((challenge, index) => {
              const Icon = [Settings, Users, Building2][index] ?? Building2;
              return (
                <div key={challenge.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:border-[#00b182]/30 hover:bg-emerald-50/30">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#00b182] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-slate-900">{challenge.title}</h3>
                  <p className="leading-relaxed text-slate-500">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white md:text-5xl">{page.processTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-400">{page.process}</p>
          </div>
          <ul className="space-y-4">
            {['Effekt- och behovsanalys', 'Underlag för styrelse eller förvaltare', 'Installation av behörig elektriker', 'Monta-konfiguration och löpande drift'].map((item) => (
              <li key={item} className="flex items-center gap-4 font-medium text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00b182]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection entries={page.faq} />
      <RelatedSolutions current="fastighetsbolag" />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tighter text-slate-900">{page.cta}</h2>
          <p className="mb-10 text-lg text-slate-500">Skicka adress och ungefärligt antal platser, så återkommer vi med nästa rimliga steg.</p>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#00b182] px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-lg shadow-[#00b182]/20 transition-colors hover:bg-[#009970]">
            Skicka offertförfrågan
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
