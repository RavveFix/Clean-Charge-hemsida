import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import MontaHubSection from '@/components/MontaHubSection';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Monta & IT-drift – Konfiguration',
  description:
    'Clean Charge AB programmerar och konfigurerar dina laddboxar med Monta som betalplattform. Vi sköter driften och ser till att laddarna alltid är online.',
  alternates: { canonical: 'https://www.cleancharge.se/monta' },
  openGraph: {
    title: 'Monta Hub – Operativsystem för Elbilister | Clean Charge AB',
    description:
      'SmartCharge, roaming till 500 000+ laddpunkter och betalning via app eller terminal. Authorized Operator Partner.',
    url: 'https://www.cleancharge.se/monta',
    images: ['/opengraph-image'],
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Monta & IT-drift', path: '/monta' },
]);

export default function MontaPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MontaHubSection />
    </ClientLayout>
  );
}
