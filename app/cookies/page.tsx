import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CookiePolicySection from '@/components/CookiePolicySection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Cookie-policy',
  description: 'Läs om hur Clean Charge AB använder cookies.',
  alternates: { canonical: 'https://www.cleancharge.se/cookies' },
  openGraph: {
    title: 'Cookie-policy | Clean Charge AB',
    description: 'Information om vilka cookies vi använder och hur du hanterar dem.',
    url: 'https://www.cleancharge.se/cookies',
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Cookies', path: '/cookies' },
]);

export default function CookiesPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-32">
        <CookiePolicySection />
      </div>
    </ClientLayout>
  );
}
