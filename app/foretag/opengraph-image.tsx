import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox för företag — installation, drift och Monta';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för företag.',
    subtitle:
      'Skalbara AC- och DC-lösningar med lastbalansering, Monta och löpande drift.',
  });
}
