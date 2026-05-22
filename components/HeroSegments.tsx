'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Building, Wrench, ArrowRight } from 'lucide-react';

const SEGMENTS = [
  {
    label: 'För Företag',
    desc: 'Laddning för anställda och besökare. Skalbar drift, automatisk debitering.',
    href: '/foretag',
    icon: Building2,
  },
  {
    label: 'För BRF & Fastighet',
    desc: 'Helhetslösning för bostadsrättsföreningar och fastighetsbolag.',
    href: '/fastighetsbolag',
    icon: Building,
  },
  {
    label: 'För Elektriker',
    desc: 'Vi levererar hårdvara, support och Grön Teknik-avdrag till installatörer.',
    href: '/privat',
    icon: Wrench,
  },
];

const HeroSegments: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-20 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-end justify-between mb-7 sm:mb-10">
          <div>
            <span className="text-cc-green font-black tracking-[0.3em] uppercase text-[12px] mb-2 block">
              Välj din väg
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Vad letar du efter?
            </h2>
          </div>
          <Link
            href="/produkter"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-700 transition-colors"
          >
            Alla produkter
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SEGMENTS.map(({ label, desc, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 hover:border-cc-green/40 hover:shadow-xl hover:shadow-cc-green/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* hover accent in corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cc-green/0 group-hover:bg-cc-green/8 blur-2xl transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-cc-green group-hover:text-white group-hover:border-cc-green transition-all duration-300 mb-5 sm:mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-cc-green transition-colors">
                  {label}
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed mb-6">
                  {desc}
                </p>

                <div className="mt-auto inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-cc-green transition-colors">
                  Läs mer
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSegments;
