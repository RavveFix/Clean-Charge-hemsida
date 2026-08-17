import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Laddbox för BRF och hyresfastighet i Göteborg — från hamn till kranskommun';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Laddbox för BRF i Göteborg.',
    subtitle: 'BRF och hyresfastighet – hamnen till kranskommunerna.',
  });
}
