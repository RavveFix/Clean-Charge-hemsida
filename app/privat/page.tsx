import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import PrivateChargingSection from '@/components/PrivateChargingSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Ladda Privat – Laddbox Hemma',
  description:
    'Installera en laddbox hemma med Clean Charge AB. Vi hjälper dig välja rätt produkt, ordnar installation och sköter Monta-uppkopplingen.',
  alternates: { canonical: 'https://www.cleancharge.se/privat' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Ladda Privat', path: '/privat' },
]);

export default function PrivatPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PrivateChargingSection />
    </ClientLayout>
  );
}
