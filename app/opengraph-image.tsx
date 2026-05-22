import { ImageResponse } from 'next/og';

export const alt =
  'Clean Charge AB — Laddbox för företag och fastighetsbolag';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 90px',
          color: 'white',
          fontFamily: 'sans-serif',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #00b182 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 36,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}
        >
          Clean Charge<span style={{ color: '#00b182' }}>.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              marginBottom: 28,
            }}
          >
            Laddbox för företag
            <br />& fastighetsbolag.
          </div>
          <div
            style={{
              fontSize: 30,
              opacity: 0.85,
              maxWidth: 950,
              lineHeight: 1.3,
            }}
          >
            Vi levererar, konfigurerar och driftar er laddinfrastruktur.
            Auktoriserad Zaptec & Monta-partner.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span style={{ color: '#00b182' }}>cleancharge.se</span>
          <span style={{ opacity: 0.7 }}>019-760 42 90</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
