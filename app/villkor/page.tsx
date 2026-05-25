import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import TermsSection from '@/components/TermsSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Allmänna Villkor',
  description: 'Läs Clean Charge AB:s allmänna villkor.',
  alternates: { canonical: 'https://www.cleancharge.se/villkor' },
  openGraph: {
    title: 'Allmänna Villkor | Clean Charge AB',
    description: 'Köp- och leveransvillkor för Clean Charge AB:s tjänster och produkter.',
    url: 'https://www.cleancharge.se/villkor',
    images: ['/opengraph-image'],
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Allmänna Villkor', path: '/villkor' },
]);

export default function VillkorPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-32">
        <TermsSection />
      </div>
    </ClientLayout>
  );
}
