import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PropertyCityPage from '@/components/PropertyCityPage';
import { getPropertyCityPage, PROPERTY_CITY_PAGES } from '@/lib/property-city-pages';
import { openGraphBase, openGraphImages } from '@/lib/seo';

type PageProps = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PROPERTY_CITY_PAGES).map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getPropertyCityPage(city);

  if (!page) return {};

  const path = `/fastighetsbolag/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [
      `laddbox brf ${page.city.toLowerCase()}`,
      `laddbox fastighetsbolag ${page.city.toLowerCase()}`,
      `lastbalansering ${page.city.toLowerCase()}`,
      `laddbox hyresfastighet ${page.city.toLowerCase()}`,
    ],
    alternates: { canonical: `https://www.cleancharge.se${path}` },
    openGraph: {
      ...openGraphBase,
      title: page.title,
      description: page.description,
      url: `https://www.cleancharge.se${path}`,
      images: openGraphImages(`Laddbox för BRF i ${page.city}`, `${path}/opengraph-image`),
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const page = getPropertyCityPage(city);

  if (!page) notFound();

  return <PropertyCityPage page={page} />;
}
