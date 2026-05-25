import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CommercialChargingSection from '@/components/CommercialChargingSection';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Publik Laddning för Företag & Parkeringar',
  description:
    'Sätt upp publika laddstationer med Clean Charge AB. Vi installerar, konfigurerar och driftar laddinfrastruktur med Monta som betalplattform.',
  alternates: { canonical: 'https://www.cleancharge.se/publik' },
  openGraph: {
    title: 'Publik Laddning – Laddstation för Företag & Parkeringar | Clean Charge AB',
    description:
      'Driftsäker hårdvara, automatisk debitering via Monta och full kontroll på drift och intäkter. 98% drifttid garanterat.',
    url: 'https://www.cleancharge.se/publik',
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Publik Laddning', path: '/publik' },
]);

const productList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Zaptec Pro',
        description:
          'Den ultimata lösningen för större anläggningar och BRF. Levererar intelligent lastbalansering och 4G-stöd.',
        image: `${SITE_URL}/images/products/zaptec-pro.png`,
        brand: { '@type': 'Brand', name: 'Zaptec' },
        category: 'AC Laddbox',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Clean Charge AB' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: 'Pris på förfrågan',
          },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Autel MaxiCharger DH480',
        description:
          'Fullt modulär 480 kW allt-i-ett-laddare. Ultrasnabb laddning med 98% drifttid, optimerad för publika nätverk och flottor.',
        image: `${SITE_URL}/images/products/autel-maxicharger.png`,
        brand: { '@type': 'Brand', name: 'Autel' },
        category: 'DC Snabbladdare',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Clean Charge AB' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: 'Pris på förfrågan',
          },
        },
      },
    },
  ],
};

export default function PublikPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productList) }}
      />
      <CommercialChargingSection />
    </ClientLayout>
  );
}
