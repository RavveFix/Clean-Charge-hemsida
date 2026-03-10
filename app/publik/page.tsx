import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CommercialChargingSection from '@/components/CommercialChargingSection';

export const metadata: Metadata = {
  title: 'Publik Laddning – Laddstation för Företag & Parkeringar',
  description:
    'Sätt upp publika laddstationer med Clean Charge AB. Vi installerar, konfigurerar och driftar laddinfrastruktur med Monta som betalplattform.',
  alternates: { canonical: 'https://www.cleancharge.se/publik' },
};

export default function PublikPage() {
  return (
    <ClientLayout>
      <CommercialChargingSection />
    </ClientLayout>
  );
}
