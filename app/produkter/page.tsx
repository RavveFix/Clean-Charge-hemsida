import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ProductHero from '@/components/ProductHero';
import ProductGrid from '@/components/ProductGrid';
import { PRODUCTS } from '@/constants';
import { breadcrumbJsonLd, faqJsonLd, LOCAL_BUSINESS_ID, SITE_URL } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Produkter – AC & DC Laddboxar',
  description:
    'Köp och konfigurera AC- och DC-laddboxar från Zaptec, Easee och Autel hos Clean Charge AB. Vi hjälper dig välja rätt laddbox för företag, fastighet eller hem.',
  alternates: { canonical: 'https://www.cleancharge.se/produkter' },
  openGraph: {
    title: 'Produkter – AC & DC Laddboxar | Clean Charge AB',
    description:
      'AC- och DC-laddboxar från Zaptec, Easee och Autel. Handplockade för driftsäkerhet och design.',
    url: 'https://www.cleancharge.se/produkter',
    images: openGraphImages('Produkter — AC- och DC-laddboxar från Zaptec, Easee och Autel'),
  },
};

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: PRODUCTS.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      '@id': `${SITE_URL}/produkter#${product.id}`,
      name: product.name,
      description: product.description,
      url: `${SITE_URL}/produkter#${product.id}`,
      image: `${SITE_URL}${product.image}`,
      brand: {
        '@type': 'Brand',
        name: product.name.split(' ')[0],
      },
      category:
        product.category === 'laddbox' ? 'AC Laddbox' : 'DC Snabbladdare',
      offers:
        product.price > 0
          ? {
              '@type': 'Offer',
              priceCurrency: 'SEK',
              price: product.price,
              priceValidUntil: '2026-12-31',
              availability: 'https://schema.org/InStock',
              url: `${SITE_URL}/kontakt?product=${encodeURIComponent(product.name)}`,
              seller: { '@id': LOCAL_BUSINESS_ID },
            }
          : {
              '@type': 'Offer',
              priceCurrency: 'SEK',
              availability: 'https://schema.org/InStock',
              url: `${SITE_URL}/kontakt?product=${encodeURIComponent(product.name)}`,
              seller: { '@id': LOCAL_BUSINESS_ID },
              priceSpecification: {
                '@type': 'PriceSpecification',
                description: 'Offert på begäran',
              },
            },
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Produkter', path: '/produkter' },
]);

const faqEntries = [
  {
    question: 'Vilka märken av laddboxar säljer ni?',
    answer:
      'Vi erbjuder AC- och DC-laddboxar från Zaptec, Easee och Autel – handplockade för driftsäkerhet, säkerhet och design. Vi är auktoriserad Zaptec- och Monta-partner.',
  },
  {
    question: 'Vad är skillnaden mellan AC- och DC-laddning?',
    answer:
      'AC-laddboxar för hem, arbetsplats och fastighet laddar vanligtvis upp till 22 kW och passar bilar som står parkerade en längre stund. DC-snabbladdare ger betydligt högre effekt och används på publika och kommersiella anläggningar där bilar ska laddas snabbt.',
  },
  {
    question: 'Vilken laddbox passar mitt behov?',
    answer:
      'Det beror på hur och var du ska ladda. För villa och radhus passar en kompakt AC-laddbox, för företag och fastigheter skalbara AC-system med lastbalansering, och för publika platser en DC-snabbladdare. Vi hjälper dig välja rätt produkt utifrån din situation.',
  },
  {
    question: 'Kan jag få grönt teknik-avdrag på en laddbox?',
    answer:
      'Som privatperson kan du få 50 % grönt teknik-avdrag på både material och arbete när vi installerar en laddbox i hemmet. Avdraget dras direkt på fakturan och vi sköter administrationen mot Skatteverket åt dig.',
  },
  {
    question: 'Hjälper ni till med installationen?',
    answer:
      'Ja. Vi levererar nyckelfärdigt – från val av produkt till installation av behörig elektriker och uppkoppling mot Monta-appen. Kontakta oss så tar vi fram en kostnadsfri offert.',
  },
];

const faq = faqJsonLd(faqEntries);

export default function ProdukterPage() {
  return (
    <ClientLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <div className="min-h-screen bg-white">
        <ProductHero />
        <div className="pb-32 bg-aurora">
          <ProductGrid />
        </div>
      </div>
      <FaqSection entries={faqEntries} />
      <RelatedSolutions current="produkter" />
    </ClientLayout>
  );
}
