import { createOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Ladda bilen-bidraget 2026 — nya regler för företag och BRF';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: 'Ladda bilen-bidraget 2026.',
    subtitle:
      'Nya stödnivåer 20–50 %, maxbelopp och ansökningskrav – så fungerar reglerna.',
  });
}
