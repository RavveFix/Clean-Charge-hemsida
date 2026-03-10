import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CookiePolicySection from '@/components/CookiePolicySection';

export const metadata: Metadata = {
  title: 'Cookie-policy',
  description: 'Läs om hur Clean Charge AB använder cookies.',
};

export default function CookiesPage() {
  return (
    <ClientLayout>
      <div className="pt-32">
        <CookiePolicySection />
      </div>
    </ClientLayout>
  );
}
