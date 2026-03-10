import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Kontakta Oss – Offert & Rådgivning',
  description:
    'Kontakta Clean Charge AB för kostnadsfri rådgivning och offert. Ring 019-760 42 90 eller fyll i formuläret så återkommer vi inom 2 timmar.',
  alternates: { canonical: 'https://www.cleancharge.se/kontakt' },
};

export default function KontaktPage() {
  return (
    <ClientLayout>
      <ContactSection />
    </ClientLayout>
  );
}
