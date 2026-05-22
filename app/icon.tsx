import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#00b182',
          fontSize: 22,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        CC
      </div>
    ),
    { ...size },
  );
}
