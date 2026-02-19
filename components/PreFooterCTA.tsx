
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, PhoneCall, CheckCircle2, ShieldCheck, ZapIcon, CreditCard, HeadphonesIcon } from 'lucide-react';

interface PreFooterCTAProps {
  onNavigate?: (tab: any) => void;
}

const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const perks = [
    { title: 'Kostnadsfri rådgivning', desc: 'Personlig expertis för dina behov', icon: <ZapIcon className="w-5 h-5" /> },
    { title: 'Certifierade installatörer', desc: 'Säkerhet och kvalitet i varje detalj', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'Grön Teknik-avdrag', desc: 'Vi sköter allt pappersarbete åt dig', icon: <CreditCard className="w-5 h-5" /> },
    { title: 'Garanti & support', desc: 'Trygghet även efter installationen', icon: <HeadphonesIcon className="w-5 h-5" /> }
  ];

  return (
    <section
      ref={ref}
      className={`mx-4 md:mx-10 mb-20 rounded-[4rem] overflow-hidden relative transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-[0.98]'}`}
    >
      {/* Background System */}
      <div className="absolute inset-0 bg-[#020617]" />
      
      {/* Animated Aurora Effects */}
      <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] opacity-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cc-green/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] animate-float" />
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Decorative Border Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cc-green to-transparent opacity-50 shadow-[0_0_20px_rgba(0,177,130,0.5)]" />

      <div className="relative z-10 px-8 md:px-20 py-32 md:py-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 lg:gap-32 items-center">
            
            {/* Left: Dynamic Headlines */}
            <div className="space-y-14">
              <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 group cursor-default">
                <div className="w-2 h-2 rounded-full bg-cc-green animate-pulse shadow-[0_0_10px_rgba(0,177,130,1)]" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.4em] group-hover:text-white transition-colors">Starta din resa idag</span>
              </div>

              <div className="relative">
                <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.85] uppercase">
                  Laddbox.
                  <br />
                  <span className="relative">
                    <span className="bg-gradient-to-r from-cc-green via-[#4ade80] to-cc-green bg-clip-text text-transparent italic decoration-cc-green underline underline-offset-[12px] decoration-[1px]">
                      Installerad.
                    </span>
                    {/* Subtle glow behind the main word */}
                    <span className="absolute inset-0 blur-2xl bg-cc-green/20 -z-10" />
                  </span>
                </h2>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="h-0.5 w-12 bg-cc-green rounded-full" />
                  <span className="text-slate-400 text-3xl md:text-5xl font-black uppercase flex items-center gap-2">
                    Klart
                    <CheckCircle2 className="w-8 h-8 text-cc-green" />
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                Vi bygger framtidens laddinfrastruktur. Från offert till färdig installation på rekordtid, med marknadens ledande produkter.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="shimmer-btn group bg-cc-green text-white px-10 py-6 rounded-2xl font-black text-base uppercase tracking-widest flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_rgba(0,177,130,0.3)] hover:-translate-y-1 transition-all duration-500 active:scale-95"
                >
                  Boka kostnadsfri rådgvining
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
                <a
                  href="tel:0197604290"
                  className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-slate-200 px-10 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-500 backdrop-blur-md"
                >
                  <PhoneCall className="w-5 h-5" />
                  Ring 019-760 42 90
                </a>
              </div>
            </div>

            {/* Right: Premium Card List */}
            <div className="relative">
              {/* Glass background for the right side on large screens */}
              <div className="absolute inset-x-[-40px] inset-y-[-40px] bg-cc-green/5 border border-cc-green/10 rounded-[3rem] blur-3xl -z-10 lg:block hidden" />
              
              <div className="space-y-5">
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className={`card-hover group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-start space-x-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    style={{ transitionDelay: `${400 + i * 150}ms` }}
                  >
                    {/* Floating Glow on Hover */}
                    <div className="absolute inset-0 bg-cc-green/0 group-hover:bg-cc-green/[0.03] rounded-3xl transition-colors duration-500" />
                    
                    <div className="relative shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cc-green group-hover:bg-cc-green group-hover:text-white group-hover:border-cc-green group-hover:shadow-[0_0_20px_rgba(0,177,130,0.4)] transition-all duration-500 group-hover:rotate-[10deg]">
                      {perk.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-white font-black text-lg md:text-xl tracking-tight mb-1 group-hover:text-cc-green transition-colors duration-300">
                        {perk.title}
                      </h3>
                      <p className="text-slate-400 font-medium text-sm leading-tight">
                        {perk.desc}
                      </p>
                    </div>

                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-cc-green/40" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge / Support Info */}
              <div className="mt-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(n => (
                    <div key={n} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${n + 10}`} alt="Customer" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm font-bold">
                  Hundratals nöjda kunder över hela landet
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
