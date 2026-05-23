import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import PrivateChargingSection from '@/components/PrivateChargingSection';
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Ladda Privat – Laddbox Hemma',
  description:
    'Installera en laddbox hemma med Clean Charge AB. Vi hjälper dig välja rätt produkt, ordnar installation och sköter Monta-uppkopplingen.',
  alternates: { canonical: 'https://www.cleancharge.se/privat' },
  openGraph: {
    title: 'Ladda Privat – Laddbox Hemma | Clean Charge AB',
    description:
      '50% Grön Teknik-avdrag direkt på fakturan. Vi installerar marknadens säkraste laddboxar och sköter all administration åt dig.',
    url: 'https://www.cleancharge.se/privat',
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Ladda Privat', path: '/privat' },
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
        name: 'Zaptec Go',
        description:
          'Världens minsta 22kW laddare. Prisbelönt skandinavisk design som kombinerar kraft med minimalism.',
        image: `${SITE_URL}/images/products/zaptec-go.png`,
        brand: { '@type': 'Brand', name: 'Zaptec' },
        category: 'AC Laddbox',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          price: 3931,
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Clean Charge AB' },
          description: 'Pris efter 50% Grön Teknik-avdrag',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Easee Charge Lite',
        description:
          'Smart, kraftfull och säker. Easee Charge Lite är designad för enkelhet och passar alla bilar och elnät.',
        image: `${SITE_URL}/images/products/easee-charge-lite.png`,
        brand: { '@type': 'Brand', name: 'Easee' },
        category: 'AC Laddbox',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'SEK',
          price: 3498,
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Clean Charge AB' },
          description: 'Pris efter 50% Grön Teknik-avdrag',
        },
      },
    },
  ],
};

const faq = faqJsonLd([
  {
    question: 'Hur fungerar 50% Grön Teknik-avdraget?',
    answer:
      'När du beställer installation via oss får du 50% avdrag på både material och arbete direkt på fakturan. Vi sköter all administration och kontakt med Skatteverket — du behöver inte själv ansöka i efterhand.',
  },
  {
    question: 'Hur lång tid tar en installation?',
    answer:
      'En standardinstallation hemma tar oftast en halvdag (3–5 timmar). Vi gör en platsbesiktning i förväg så att vi vet exakt var laddboxen ska monteras och att din elcentral klarar lasten.',
  },
  {
    question: 'Vilken laddbox passar villa eller radhus?',
    answer:
      'Zaptec Go och Easee Charge Lite är våra två favoriter för hemmet. Båda är 22kW, kompakta, väderbeständiga (IP54) och har smart app-styrning. Zaptec Go har prisbelönt norsk design, Easee Charge Lite är kraftfull och fungerar i alla elnät.',
  },
  {
    question: 'Vad ingår i priset?',
    answer:
      'I våra paketpriser ingår själva laddboxen, monteringsmaterial, installation, driftsättning och uppkoppling mot Monta-appen. Kostnad för längre kabeldragning eller behov av elcentralarbete tillkommer enligt offert.',
  },
  {
    question: 'Får jag garanti på laddboxen?',
    answer:
      'Ja. Vi ger 3 års produktgaranti på laddboxen och 2 års arbetsgaranti på installationen. Vid fel hjälper vi dig först felsöka på distans innan ett servicebesök bokas.',
  },
]);

export default function PrivatPage() {
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
      <PrivateChargingSection />
    </ClientLayout>
  );
}
