import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CookiePolicySection from '@/components/CookiePolicySection';
import RelatedSolutions from '@/components/RelatedSolutions';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cookie-policy',
  description:
    'Cookie-policy för Clean Charge AB – vilka cookies vi använder för funktion, statistik och marknadsföring, varför de behövs och hur du hanterar ditt samtycke.',
  alternates: { canonical: 'https://www.cleancharge.se/cookies' },
  openGraph: {
    title: 'Cookie-policy | Clean Charge AB',
    description: 'Information om vilka cookies vi använder och hur du hanterar dem.',
    url: 'https://www.cleancharge.se/cookies',
    images: openGraphImages('Cookie-policy — Clean Charge AB'),
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
      <RelatedSolutions />
    </ClientLayout>
  );
}
