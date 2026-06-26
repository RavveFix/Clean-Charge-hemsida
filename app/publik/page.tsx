import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CommercialChargingSection from '@/components/CommercialChargingSection';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, LOCAL_BUSINESS_ID, SITE_URL } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Publik Laddning för Företag & Parkeringar',
  description:
    'Sätt upp publika laddstationer med Clean Charge AB. Vi installerar, konfigurerar och driftar laddinfrastrukturen med Monta som betalplattform – nyckelfärdigt.',
  alternates: { canonical: 'https://www.cleancharge.se/publik' },
  openGraph: {
    title: 'Publik Laddning – Laddstation för Företag & Parkeringar | Clean Charge AB',
    description:
      'Driftsäker hårdvara, automatisk debitering via Monta och full kontroll på drift och intäkter. 98% drifttid garanterat.',
    url: 'https://www.cleancharge.se/publik',
    images: openGraphImages('Publik laddning — laddstationer för företag, parkeringar och laddnätverk'),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Publik Laddning', path: '/publik' },
]);

const faqEntries = [
  {
    question: 'Hur tar vi betalt av dem som laddar?',
    answer:
      'Betalning och debitering sker automatiskt via Monta-plattformen. Ni sätter prissättningen och får full kontroll över både drift och intäkter, medan användarna betalar enkelt via app eller kort.',
  },
  {
    question: 'Vilken hårdvara använder ni för publik laddning?',
    answer:
      'Vi installerar driftsäker hårdvara anpassad efter anläggningen – till exempel Zaptec Pro (AC med intelligent lastbalansering och 4G) och Autel MaxiCharger DH480 (modulär 480 kW DC-snabbladdare).',
  },
  {
    question: 'Hur hög drifttid kan vi räkna med?',
    answer:
      'Vår publika laddinfrastruktur är byggd för hög tillgänglighet med driftsäker hårdvara och fjärrövervakning dygnet runt – med omkring 98 % drifttid.',
  },
  {
    question: 'Är lösningen nyckelfärdig – sköter ni installation och drift?',
    answer:
      'Ja. Vi installerar, konfigurerar och driftar hela laddinfrastrukturen nyckelfärdigt, med Monta som betalplattform och löpande fjärrövervakning så att stationerna alltid fungerar.',
  },
  {
    question: 'Var passar publika laddstationer?',
    answer:
      'Publika laddstationer passar företag, parkeringar, handelsplatser och laddnätverk – platser där besökare, kunder eller anställda ska kunna ladda och betala enkelt.',
  },
];

const faq = faqJsonLd(faqEntries);

const service = serviceJsonLd({
  name: 'Publik laddinfrastruktur – installation och drift',
  path: '/publik',
  description:
    'Vi installerar, konfigurerar och driftar publika laddstationer med Monta som betalplattform – nyckelfärdigt med fjärrövervakning.',
  serviceType: 'Installation och drift av publika laddstationer',
});

const productList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        '@id': `${SITE_URL}/publik#zaptec-pro`,
        name: 'Zaptec Pro',
        description:
          'Den ultimata lösningen för större anläggningar och BRF. Levererar intelligent lastbalansering och 4G-stöd.',
        url: `${SITE_URL}/publik#zaptec-pro`,
        image: `${SITE_URL}/images/products/zaptec-pro.png`,
        brand: { '@type': 'Brand', name: 'Zaptec' },
        category: 'AC Laddbox',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/kontakt?product=Zaptec%20Pro`,
          seller: { '@id': LOCAL_BUSINESS_ID },
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
        '@id': `${SITE_URL}/publik#autel-dh480`,
        name: 'Autel MaxiCharger DH480',
        description:
          'Fullt modulär 480 kW allt-i-ett-laddare. Ultrasnabb laddning med 98% drifttid, optimerad för publika nätverk och flottor.',
        url: `${SITE_URL}/publik#autel-dh480`,
        image: `${SITE_URL}/images/products/autel-dh480-product.png`,
        brand: { '@type': 'Brand', name: 'Autel' },
        category: 'DC Snabbladdare',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/kontakt?product=Autel%20MaxiCharger%20DH480`,
          seller: { '@id': LOCAL_BUSINESS_ID },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <CommercialChargingSection />
      <FaqSection entries={faqEntries} />
      <RelatedSolutions current="publik" />
    </ClientLayout>
  );
}
