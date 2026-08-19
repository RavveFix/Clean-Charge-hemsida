import { notFound } from 'next/navigation';
import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';
import { getPropertyCityPage, PROPERTY_CITY_PAGES } from '@/lib/property-city-pages';

type ImageProps = { params: Promise<{ city: string }> };

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return Object.keys(PROPERTY_CITY_PAGES).map((city) => ({ city }));
}

export default async function Image({ params }: ImageProps) {
  const { city } = await params;
  const page = getPropertyCityPage(city);

  if (!page) notFound();

  return createOgImage({
    title: `Laddbox för BRF i ${page.city}.`,
    subtitle: 'Lastbalansering, individuell debitering och drift med Monta.',
  });
}
