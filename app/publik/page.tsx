import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import CommercialChargingSection from '@/components/CommercialChargingSection';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, SITE_URL } from '@/lib/jsonld';
import { openGraphBase, openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Publik Laddstation för Företag & Parkeringar',
  description:
    'Publika laddstationer för företag, parkeringar och handelsplatser. Clean Charge installerar, konfigurerar och driftar AC- och DC-laddning med Monta som betalplattform.',
  keywords: [
    'publik laddstation',
    'publik laddning företag',
    'laddstation parkering',
    'laddstation handelsplats',
    'betallösning laddstation',
    'publik elbilsladdning',
  ],
  alternates: { canonical: 'https://www.cleancharge.se/publik' },
  openGraph: {
    ...openGraphBase,
    title: 'Publik Laddstation för Företag & Parkeringar | Clean Charge AB',
    description:
      'Driftsäker AC- och DC-laddning, automatisk debitering via Monta och löpande fjärrövervakning för publika laddanläggningar.',
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
      'Vi installerar driftsäker hårdvara anpassad efter anläggningen – till exempel Zaptec Pro för skalbar AC-laddning och Autel MaxiCharger DH480 för DC-snabbladdning.',
  },
  {
    question: 'Hur arbetar ni med driftsäkerhet?',
    answer:
      'Vi kombinerar hårdvara anpassad för hög belastning med fjärrövervakning och löpande drift. Upplägget dimensioneras efter anläggningens användning och krav på tillgänglighet.',
  },
  {
    question: 'Är lösningen nyckelfärdig – sköter ni installation och drift?',
    answer:
      'Ja. Vi installerar, konfigurerar och driftar hela laddinfrastrukturen nyckelfärdigt, med Monta som betalplattform och löpande fjärrövervakning.',
  },
  {
    question: 'Var passar publika laddstationer?',
    answer:
      'Publika laddstationer passar företag, parkeringar, handelsplatser och andra platser där besökare eller kunder ska kunna ladda och betala enkelt.',
  },
];

const faq = faqJsonLd(faqEntries);

const service = serviceJsonLd({
  name: 'Publik laddstation – installation, betalning och drift',
  path: '/publik',
  description:
    'Installation, konfiguration och drift av publika AC- och DC-laddstationer med Monta som betalplattform.',
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
          'Skalbar AC-laddbox för större anläggningar med intelligent lastbalansering och uppkoppling.',
        url: `${SITE_URL}/publik#zaptec-pro`,
        image: `${SITE_URL}/images/products/zaptec-pro.png`,
        brand: { '@type': 'Brand', name: 'Zaptec' },
        category: 'AC Laddbox',
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
          'Modulär DC-snabbladdare för publika och kommersiella anläggningar med höga effektbehov.',
        url: `${SITE_URL}/publik#autel-dh480`,
        image: `${SITE_URL}/images/products/autel-dh480-product.png`,
        brand: { '@type': 'Brand', name: 'Autel' },
        category: 'DC Snabbladdare',
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
