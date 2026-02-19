
import React from 'react';
import { Zap, Box, ArrowRight } from 'lucide-react';

const ProductHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Aurora Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cc-green/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full mb-8 shadow-sm">
            <Box className="w-4 h-4 text-cc-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Premium Sortiment</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase mb-8">
            Hårdvara i <br />
            <span className="text-cc-green italic">Världsklass.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Vi handplockar varje laddbox för dess driftsäkerhet, design och intelligens. 
              Från marknadens minsta hemladdare till industriella snabbstationer.
            </p>
            
            <div className="flex items-center gap-4">
               <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
               <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cc-green fill-cc-green" />
                    <span className="text-sm font-black text-slate-800 uppercase">Grön Teknik</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">50% skatteavdrag inkl.</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magical floating element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-cc-green/20 rounded-full animate-spin-slow"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-100 rounded-full"></div>
           <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-cc-green/30 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
