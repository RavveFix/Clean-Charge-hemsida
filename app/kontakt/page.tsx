import { Suspense } from 'react';
import type { Metadata } from 'next';
import { MessageSquare } from 'lucide-react';
import ClientLayout from '@/app/ClientLayout';
import ContactSection from '@/components/ContactSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Kontakta Oss – Offert & Rådgivning',
  description:
    'Kontakta Clean Charge AB för kostnadsfri rådgivning och offert. Ring 019-760 42 90 eller fyll i formuläret så återkommer vi inom 2 timmar.',
  alternates: { canonical: 'https://www.cleancharge.se/kontakt' },
  openGraph: {
    title: 'Kontakta Oss – Offert & Rådgivning | Clean Charge AB',
    description:
      'Kostnadsfri rådgivning och offert. Svar inom 2 timmar under kontorstid. Ring 019-760 42 90.',
    url: 'https://www.cleancharge.se/kontakt',
    images: ['/opengraph-image'],
  },
};

const breadcrumb = breadcrumbJsonLd([{ name: 'Kontakt', path: '/kontakt' }]);

export default function KontaktPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ── Page Hero (server-renderad så H1 finns i SSR) ── */}
      <section className="relative pt-28 pb-20 sm:py-28 md:py-36 bg-slate-950 overflow-hidden font-monta">
        {/* Green glow */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cc-green/20 rounded-full blur-[200px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cc-green/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 bg-cc-green/10 text-cc-green px-5 py-2.5 rounded-full border border-cc-green/20 mb-10">
              <MessageSquare className="w-4 h-4" />
              <span className="text-[12px] font-black uppercase tracking-[0.3em]">Vi finns här för dig</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.88] uppercase mb-6 sm:mb-8">
              Kom i<br />
              <span className="text-cc-green">Kontakt.</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
              Oavsett om du representerar en BRF, ett företag eller vill ladda hemma – våra experter hjälper dig hitta rätt lösning.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
              {[
                { label: 'Svarstid', value: '< 2h' },
                { label: 'Monta Operatörsbetyg', value: '4.6 ★' },
                { label: 'Genomf. laddningar', value: '50 000+' },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-black text-white tracking-tighter">{s.value}</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-monta">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-cc-green border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Laddar formulär...</p>
          </div>
        </div>
      }>
        <ContactSection />
      </Suspense>
    </ClientLayout>
  );
}
