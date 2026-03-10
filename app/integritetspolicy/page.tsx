import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import PrivacyPolicySection from '@/components/PrivacyPolicySection';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Läs om hur Clean Charge AB hanterar dina personuppgifter.',
};

export default function IntegritetspolicyPage() {
  return (
    <ClientLayout>
      <div className="pt-32">
        <PrivacyPolicySection />
      </div>
    </ClientLayout>
  );
}
