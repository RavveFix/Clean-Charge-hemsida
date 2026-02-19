
import React, { useEffect, useRef, useState } from 'react';
import { Zap, Award, MapPin, Clock } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, sublabel, icon: Icon, delay }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = value / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, value, delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-cc-green/10 flex items-center justify-center mb-5 group-hover:bg-cc-green group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-cc-green group-hover:text-white transition-colors" />
      </div>
      <div className="flex items-end justify-center gap-1 mb-2">
        <span className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter leading-none tabular-nums">
          {count.toLocaleString('sv-SE')}
        </span>
        <span className="text-3xl font-black text-cc-green mb-1">{suffix}</span>
      </div>
      <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-700">{label}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{sublabel}</p>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const stats = [
    { value: 50000, suffix: '+', label: 'Genomförda laddningar', sublabel: 'Via Monta-plattformen', icon: Zap, delay: 0 },
    { value: 4, suffix: '.6★', label: 'Monta Operatörsbetyg', sublabel: 'Verifierat av våra användare', icon: Award, delay: 150 },
    { value: 4, suffix: ' år', label: 'Års erfarenhet', sublabel: 'Grundat 2021', icon: Clock, delay: 300 },
    { value: 2, suffix: 'h', label: 'Svarstid support', sublabel: 'Under kontorstid', icon: MapPin, delay: 450 },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Subtle background pattern */}
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

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cc-green to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cc-green/8 text-cc-green px-5 py-2 rounded-full border border-cc-green/15 mb-6">
            <Zap className="w-3.5 h-3.5 fill-cc-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Bevisad Expertis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Siffrorna talar för sig själva.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <StatItem {...stat} />
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Partner logos strip */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <p className="text-center text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">
            Auktoriserad partner för
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {['EASEE', 'ZAPTEC', 'MONTA', 'AUTEL'].map((brand) => (
              <span
                key={brand}
                className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-slate-300 hover:text-cc-green transition-colors duration-300 cursor-default"
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
