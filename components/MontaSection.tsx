
import React from 'react';
import { ShieldCheck, Smartphone, BarChart3, ArrowRight } from 'lucide-react';

interface MontaSectionProps {
  onNavigate?: (tab: any) => void;
}

const MontaSection: React.FC<MontaSectionProps> = ({ onNavigate }) => {
  // Använder samma bild som tidigare för konsekvens
  const montaImage = "/Charge_grey.png";

  return (
    <section className="py-24 bg-white overflow-hidden font-monta">
      <div className="container mx-auto px-6">
        <div className="bg-[#003DFF] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-20 shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,80 70,120 100,100 L100,0 L0,0 Z" fill="white" />
            </svg>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block pb-4">
                  <img 
                    src="https://monta.com/app/themes/monta-sage-latest/public/build/assets/Monta_Logo-6IYbGNWl.svg" 
                    alt="Monta Logo" 
                    className="h-12 w-auto brightness-0 invert transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="flex items-center space-x-3 text-blue-200">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Authorized Operator Partner</span>
                  <div className="h-px w-12 bg-blue-400"></div>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white uppercase">
                  Marknadens smartaste <br />
                  <span className="text-blue-300 italic">Betallösning.</span>
                </h2>
                
                <p className="text-xl text-blue-50 font-medium leading-relaxed max-w-xl opacity-90">
                  Vi fokuserar på kraftfulla betallösningar för publika anläggningar. Med Monta automatiserar ni debiteringsflödet och gör era laddstationer till en lönsam tillgång.
                </p>
              </div>
              
              <button 
                onClick={() => onNavigate && onNavigate('monta-hub')}
                className="bg-white text-[#003DFF] px-12 py-5 rounded-full font-black text-lg transition-all hover:bg-blue-50 hover:shadow-xl active:scale-95 flex items-center group"
              >
                Läs mer om Monta Hub
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              {/* Premium Dual-Image Layout */}
              <div className="relative">
                {/* Background Image - App Collage */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white/10 transform hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="/Charge_2.png" 
                    alt="Monta Charge App Collage" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
                
                {/* Overlapping Image - Admin Interface */}
                <div className="absolute -bottom-8 -right-8 w-2/3 rounded-[2rem] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img 
                    src="/Charge_1.png" 
                    alt="Monta Admin Interface" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Badge on the admin interface */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Live Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature strip header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Vad du får med Monta</span>
          </div>
          <div className="h-px flex-1 bg-slate-100 ml-8 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Automatisk Debitering",
              text: "Vi automatiserar hela betalflödet. Pengarna betalas ut direkt till er, medan vi sköter kvittohantering och skatter.",
              stat: "100%",
              statLabel: "Automatiserat"
            },
            {
              icon: Smartphone,
              title: "Publik Tillgänglighet",
              text: "Gör era laddare tillgängliga för allmänheten. Med Monta kan vem som helst ladda och betala med kort, Apple Pay eller Google Pay.",
              stat: "Plug & Pay",
              statLabel: "Enkelhet"
            },
            {
              icon: ShieldCheck,
              title: "Smart Förvaltning",
              text: "Vi tar hand om driften av er publika anläggning. Övervakning dygnet runt säkerställer att laddarna alltid fungerar.",
              stat: "24/7",
              statLabel: "Monitorering"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="relative p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
            >
              {/* Number accent */}
              <span className="absolute top-8 right-10 text-[72px] font-black text-slate-50 leading-none select-none group-hover:text-blue-50 transition-colors duration-500">
                0{i + 1}
              </span>

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003DFF] to-[#0055ff] rounded-t-[2.5rem] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="bg-blue-50 text-[#003DFF] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#003DFF] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-black text-slate-800 mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm mb-6">{feature.text}</p>

                <div className="pt-5 border-t border-slate-50 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#003DFF] tracking-tighter">{feature.stat}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{feature.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MontaSection;
