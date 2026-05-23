export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
};

export type ConsentRecord = ConsentCategories & {
  timestamp: number;
  version: 1;
};

export const CONSENT_STORAGE_KEY = 'cc-cookie-consent';
export const CONSENT_EVENT = 'cc-consent-change';

export function getConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(consent: { analytics: boolean; preferences: boolean }) {
  if (typeof window === 'undefined') return;
  const record: ConsentRecord = {
    necessary: true,
    analytics: consent.analytics,
    preferences: consent.preferences,
    timestamp: Date.now(),
    version: 1,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
}

export function clearConsent() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
