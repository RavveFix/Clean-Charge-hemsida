import { Suspense } from 'react';
import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ContactSection from '@/components/ContactSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Kontakta Oss – Offert & Rådgivning',
  description:
    'Kontakta Clean Charge AB för kostnadsfri rådgivning och offert. Ring 019-760 42 90 eller fyll i formuläret så återkommer vi inom 2 timmar.',
  alternates: { canonical: 'https://www.cleancharge.se/kontakt' },
};

const breadcrumb = breadcrumbJsonLd([{ name: 'Kontakt', path: '/kontakt' }]);

export default function KontaktPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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
