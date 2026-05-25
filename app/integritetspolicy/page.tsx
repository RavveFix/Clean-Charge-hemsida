import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import PrivacyPolicySection from '@/components/PrivacyPolicySection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Läs om hur Clean Charge AB hanterar dina personuppgifter.',
  alternates: { canonical: 'https://www.cleancharge.se/integritetspolicy' },
  openGraph: {
    title: 'Integritetspolicy | Clean Charge AB',
    description: 'Så hanterar vi dina personuppgifter i enlighet med GDPR.',
    url: 'https://www.cleancharge.se/integritetspolicy',
    images: ['/opengraph-image'],
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Integritetspolicy', path: '/integritetspolicy' },
]);

export default function IntegritetspolicyPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-32">
        <PrivacyPolicySection />
      </div>
    </ClientLayout>
  );
}
