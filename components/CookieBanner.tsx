'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X, ShieldCheck, BarChart3, Settings } from 'lucide-react';
import {
  CONSENT_EVENT,
  getConsent,
  saveConsent,
  type ConsentRecord,
} from '@/lib/cookie-consent';

type Mode = 'hidden' | 'banner' | 'customize';

export default function CookieBanner() {
  const [mode, setMode] = useState<Mode>('hidden');
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      setMode('banner');
    }
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentRecord | null>).detail;
      if (!detail) {
        setMode('banner');
      }
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener('cc-open-consent', () => setMode('customize'));
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
    };
  }, []);

  function acceptAll() {
    saveConsent({ analytics: true, preferences: true });
    setMode('hidden');
  }
  function rejectAll() {
    saveConsent({ analytics: false, preferences: false });
    setMode('hidden');
  }
  function saveCustom() {
    saveConsent({ analytics, preferences });
    setMode('hidden');
  }

  if (mode === 'hidden') return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-0 z-[200] p-3 sm:p-4 md:p-6 pointer-events-none"
    >
      <div className="mx-auto max-w-3xl rounded-[1.5rem] sm:rounded-[2rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-slate-200 pointer-events-auto overflow-hidden">
        {mode === 'banner' && (
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-700">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h2
                  id="cookie-banner-title"
                  className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-1"
                >
                  Vi använder cookies
                </h2>
                <p
                  id="cookie-banner-description"
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  Vi använder nödvändiga cookies för att sajten ska fungera, och valfria
                  cookies för analys och inställningar. Du väljer själv vad du godkänner.{' '}
                  <Link
                    href="/cookies"
                    className="underline font-bold text-slate-900 hover:text-brand-green"
                  >
                    Läs mer
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              <button
                onClick={rejectAll}
                className="order-3 sm:order-1 inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-full text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
              >
                Avvisa alla
              </button>
              <button
                onClick={() => setMode('customize')}
                className="order-2 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <Settings className="w-4 h-4" />
                Anpassa
              </button>
              <button
                onClick={acceptAll}
                className="order-1 sm:order-3 inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-full text-sm font-black text-white bg-cc-green hover:bg-cc-green/90 transition-colors shadow-lg shadow-cc-green/20"
              >
                Acceptera alla
              </button>
            </div>
          </div>
        )}

        {mode === 'customize' && (
          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-1">
                  Anpassa cookies
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Välj vilka cookies du vill tillåta.
                </p>
              </div>
              <button
                onClick={() => setMode('banner')}
                aria-label="Tillbaka"
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-5 sm:mb-6">
              <CategoryRow
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Nödvändiga"
                description="Krävs för att sajten ska fungera (t.ex. säkerhet, sessionshantering). Kan ej stängas av."
                checked={true}
                disabled
              />
              <CategoryRow
                icon={<BarChart3 className="w-5 h-5" />}
                title="Analys"
                description="Anonym besöksstatistik via Vercel Analytics. Hjälper oss förstå vilka sidor som används."
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryRow
                icon={<Settings className="w-5 h-5" />}
                title="Inställningar"
                description="Sparar dina visningsval (t.ex. om du valt att stänga miljörapporten)."
                checked={preferences}
                onChange={setPreferences}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={saveCustom}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Spara mina val
              </button>
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-full text-sm font-black text-white bg-cc-green hover:bg-cc-green/90 transition-colors shadow-lg shadow-cc-green/20"
              >
                Acceptera alla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryRow({
  icon,
  title,
  description,
  checked,
  onChange,
  disabled = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl border border-slate-100 bg-slate-50/40">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-600 border border-slate-100">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-black text-slate-900">{title}</p>
        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{description}</p>
      </div>
      <label className={`relative inline-flex items-center cursor-pointer shrink-0 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
        />
        <span className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-cc-green transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-5" />
      </label>
    </div>
  );
}
