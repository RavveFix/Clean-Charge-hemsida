'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Zap, Calendar, CreditCard, MapPinned } from 'lucide-react';
import useReducedMotion from '@/lib/useReducedMotion';

interface StatItemProps {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, sublabel, icon: Icon, delay }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center group transition-all duration-700 ${visible || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms` }}
    >
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cc-green/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-brand-green-interactive group-hover:scale-110 transition-all duration-300">
        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-brand-green-interactive group-hover:text-white transition-colors" />
      </div>
      <div className="mb-2">
        <span className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-none">
          {value}
        </span>
      </div>
      <p className="text-[12px] sm:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-slate-700">{label}</p>
      <p className="text-[12px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-600 mt-1 hidden sm:block">{sublabel}</p>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const stats = [
    { value: '2021', label: 'Grundat', sublabel: 'Clean Charge AB', icon: Calendar, delay: 0 },
    { value: 'Monta', label: 'Operatör', sublabel: 'Betalning & debitering', icon: CreditCard, delay: 150 },
    { value: 'Zaptec', label: 'Partner', sublabel: 'Laddboxar & konfiguration', icon: Zap, delay: 300 },
    { value: 'Sverige', label: 'Leverans', sublabel: 'Projekt med behöriga elektriker', icon: MapPinned, delay: 450 },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="stat-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#00b182" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-dots)" />
        </svg>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cc-green to-transparent opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-cc-green/8 text-brand-green-interactive px-5 py-2 rounded-full border border-cc-green/15 mb-4 md:mb-6">
            <Zap className="w-3.5 h-3.5 fill-brand-green-interactive" />
            <span className="text-[12px] md:text-[12px] font-black uppercase tracking-[0.3em]">Så arbetar vi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Tydligt ansvar från teknik till drift.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem {...stat} />
              {i < stats.length - 1 && <div className="hidden lg:block absolute" />}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-slate-100">
          <p className="text-center text-[12px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-600 mb-6 sm:mb-10">
            Plattformar & hårdvara vi arbetar med
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-20">
            {['EASEE', 'ZAPTEC', 'MONTA', 'AUTEL'].map((brand) => (
              <span
                key={brand}
                className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-slate-500 hover:text-brand-green-interactive transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
