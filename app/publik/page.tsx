import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CommercialChargingSection from '@/components/CommercialChargingSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Publik Laddning – Laddstation för Företag & Parkeringar',
  description:
    'Sätt upp publika laddstationer med Clean Charge AB. Vi installerar, konfigurerar och driftar laddinfrastruktur med Monta som betalplattform.',
  alternates: { canonical: 'https://www.cleancharge.se/publik' },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Publik Laddning', path: '/publik' },
]);

export default function PublikPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <CommercialChargingSection />
    </ClientLayout>
  );
}
