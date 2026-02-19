
import React from 'react';
import { ArrowRight, Zap, Sparkles, ShieldCheck, Star, CreditCard } from 'lucide-react';

// En högkvalitativ och minimalistisk bild på en Easee-laddare som matchar premium-känslan
const HERO_IMAGE = "https://easee.com/wp-content/uploads/2025/05/wave-wall.jpg";

interface HeroProps {
  onNavigate: () => void;
  onNavigateToPayment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onNavigateToPayment }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-white overflow-hidden font-monta">
      {/* Dekorativa bakgrundselement för "outside the box" känsla */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-cc-green rounded-full blur-[160px] -translate-y-1/2"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-8 md:py-16">
        <div className="space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 text-cc-green bg-cc-green/5 border border-cc-green/10 px-6 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 fill-cc-green animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Clean Charge Signature Edition</span>
            </div>
            
            <div className="relative">
              <h1 className="text-7xl md:text-[9rem] font-black text-slate-800 leading-[0.85] tracking-tighter uppercase transition-all">
                Ren Energi <br />
                <span className="text-cc-green relative inline-block">
                  för din Elbil.
                  <span className="absolute -right-8 top-0 text-slate-200 text-4xl font-light hidden md:block">®</span>
                </span>
              </h1>
              <div className="absolute -left-4 top-0 w-1 h-full bg-cc-green/20 hidden md:block"></div>
            </div>
          </div>
          
          <div className="max-w-md space-y-6">
            <h2 className="text-2xl text-slate-500 font-semibold leading-tight tracking-tight">
              Vi bygger framtidens laddinfrastruktur med <span className="text-slate-800">marknadsledande betallösningar</span> för publika anläggningar.
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              Clean Charge är experter på Easee- och Zaptec-installationer. Vi erbjuder kompletta lösningar för hem, företag och drift av publika laddstationer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
            <button 
              onClick={onNavigate}
              className="btn-cc group px-14 py-7 text-xl shadow-2xl shadow-cc-green/40 flex items-center justify-center uppercase tracking-widest bg-cc-green hover:bg-[#008e68] border-none"
            >
              Utforska Frihet
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            {onNavigateToPayment && (
              <button 
                onClick={onNavigateToPayment}
                className="group px-10 py-5 rounded-full font-black border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 bg-transparent transition-all duration-300 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-lg"
              >
                <CreditCard className="w-4 h-4" />
                Betallösning
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" style={{ fill: '#00b182', color: '#00b182' }} />)}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">4.6 Monta Operatörsbetyg</p>
            </div>
            <div className="w-px h-8 bg-slate-100 hidden sm:block" />
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-slate-800">
                <ShieldCheck className="w-4 h-4 text-cc-green" />
                <span className="text-sm font-black tracking-tighter">Certifierad</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Auktoriserad i Sverige</p>
            </div>
            <div className="w-px h-8 bg-slate-100 hidden sm:block" />
            <div className="space-y-1">
              <p className="text-sm font-black text-slate-800 tracking-tighter">50 000+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Genomförda laddningar</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          {/* Hero-bilden med modern asymmetrisk inramning */}
          <div className="relative rounded-[5rem] lg:rounded-tr-[12rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] border-[12px] border-slate-50 h-[500px] md:h-[750px] group bg-white">
            <img 
              src={HERO_IMAGE} 
              alt="Easee Elbilsladdare"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
          
          {/* Flytande produkt-badge med mer luft */}
          <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 md:p-10 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-50 animate-bounce-slow z-20 max-w-[280px]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-cc-green p-3 rounded-2xl shadow-lg shadow-cc-green/20">
                <Zap className="w-7 h-7 fill-white text-white" />
              </div>
              <div>
                <p className="text-slate-900 font-black text-3xl tracking-tighter leading-none uppercase">Charge Lite</p>
                <p className="text-[10px] font-bold text-cc-green uppercase tracking-[0.2em] mt-1">Designikonen</p>
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 mb-4"></div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Bäst i Test 2024</span>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Charge Badge */}
          <div className="absolute -top-6 right-6 md:-right-6 bg-slate-900 px-10 py-6 rounded-full shadow-2xl z-20 group-hover:-rotate-3 transition-transform">
             <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Certifierad Clean Charge Partner</p>
          </div>
          
          {/* Bakomliggande dekorativ ram */}
          <div className="absolute -z-10 -bottom-12 -right-12 w-full h-full border-2 border-cc-green/10 rounded-[5rem] lg:rounded-tr-[12rem] translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
