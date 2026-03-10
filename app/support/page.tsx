import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import SupportSection from '@/components/SupportSection';

export const metadata: Metadata = {
  title: 'Support – Clean Charge AB',
  description:
    'Behöver du hjälp med din laddbox? Clean Charge AB erbjuder support under kontorstid. Ring 019-760 42 90 eller skicka ett mejl.',
  alternates: { canonical: 'https://www.cleancharge.se/support' },
};

export default function SupportPage() {
  return (
    <ClientLayout>
      <SupportSection />
    </ClientLayout>
  );
}
