'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  CONSENT_EVENT,
  getConsent,
  type ConsentRecord,
} from '@/lib/cookie-consent';

export default function AnalyticsGate() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent()?.analytics === true);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentRecord | null>).detail;
      setAllowed(detail?.analytics === true);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed) return null;
  return <Analytics />;
}
