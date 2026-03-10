import type { Metadata } from 'next';
import ClientLayout from '@/app/ClientLayout';
import ProductHero from '@/components/ProductHero';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Produkter – AC & DC Laddboxar',
  description:
    'Vi säljer och konfigurerar AC- och DC-laddboxar från Zaptec, Easee och Autel. Välj rätt laddbox för ditt företag eller fastighet.',
  alternates: { canonical: 'https://www.cleancharge.se/produkter' },
};

export default function ProdukterPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
        <ProductHero />
        <div className="pb-32 bg-aurora">
          <ProductGrid />
        </div>
      </div>
    </ClientLayout>
  );
}
