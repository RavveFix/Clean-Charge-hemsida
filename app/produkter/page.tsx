import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ProductHero from '@/components/ProductHero';
import ProductGrid from '@/components/ProductGrid';
import { PRODUCTS } from '@/constants';
import { breadcrumbJsonLd, LOCAL_BUSINESS_ID, SITE_URL } from '@/lib/jsonld';
import { openGraphImages } from '@/lib/seo';
import RelatedSolutions from '@/components/RelatedSolutions';

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
      <div className="min-h-screen bg-white">
        <ProductHero />
        <div className="pb-32 bg-aurora">
          <ProductGrid />
        </div>
      </div>
      <RelatedSolutions current="produkter" />
    </ClientLayout>
  );
}
