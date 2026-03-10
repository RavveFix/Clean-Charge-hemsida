import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import TermsSection from '@/components/TermsSection';

export const metadata: Metadata = {
  title: 'Allmänna Villkor',
  description: 'Läs Clean Charge AB:s allmänna villkor.',
};

export default function VillkorPage() {
  return (
    <ClientLayout>
      <div className="pt-32">
        <TermsSection />
      </div>
    </ClientLayout>
  );
}
