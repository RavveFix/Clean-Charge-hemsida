import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import PrivateChargingSection from '@/components/PrivateChargingSection';

export const metadata: Metadata = {
  title: 'Ladda Privat – Laddbox Hemma',
  description:
    'Installera en laddbox hemma med Clean Charge AB. Vi hjälper dig välja rätt produkt, ordnar installation och sköter Monta-uppkopplingen.',
  alternates: { canonical: 'https://www.cleancharge.se/privat' },
};

export default function PrivatPage() {
  return (
    <ClientLayout>
      <PrivateChargingSection />
    </ClientLayout>
  );
}
