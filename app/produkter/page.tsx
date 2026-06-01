import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ProductHero from '@/components/ProductHero';
import ProductGrid from '@/components/ProductGrid';
import { PRODUCTS } from '@/constants';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Produkter – AC & DC Laddboxar',
  description:
    'Vi säljer och konfigurerar AC- och DC-laddboxar från Zaptec, Easee och Autel. Välj rätt laddbox för ditt företag eller fastighet.',
  alternates: { canonical: 'https://www.cleancharge.se/produkter' },
  openGraph: {
    title: 'Produkter – AC & DC Laddboxar | Clean Charge AB',
    description:
      'AC- och DC-laddboxar från Zaptec, Easee och Autel. Handplockade för driftsäkerhet och design.',
    url: 'https://www.cleancharge.se/produkter',
    images: ['/opengraph-image'],
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
      name: product.name,
      description: product.description,
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
              seller: { '@type': 'Organization', name: 'Clean Charge AB' },
            }
          : {
              '@type': 'Offer',
              priceCurrency: 'SEK',
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'Organization', name: 'Clean Charge AB' },
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
    </ClientLayout>
  );
}
