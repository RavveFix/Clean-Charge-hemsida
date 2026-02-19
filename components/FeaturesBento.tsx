
import React from 'react';
import { ShieldCheck, Zap, Smartphone, MapPin, Clock, Award, ArrowUpRight } from 'lucide-react';

const FeaturesBento: React.FC = () => {
  return (
    <section className="py-24 bg-white font-monta overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-3 bg-slate-100 text-slate-500 px-5 py-2 rounded-full border border-slate-200 mb-6">
            <Award className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Högsta standard</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter leading-none uppercase">
            Varför välja <br />
            <span className="text-cc-green">Clean Charge?</span>
          </h2>
        </div>

        {/* Bento Grid Layout - Simplified to single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          
          {/* Card 1: Monta (Large) */}
          <div className="bg-slate-950 rounded-[3rem] p-10 relative overflow-hidden group border border-white/5 card-hover min-h-[400px]">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Smartaste mjukvaran</h3>
                <p className="text-slate-400 font-medium max-w-sm">
                  Vi är partner till Monta, vilket ger dig tillgång till automatiserad debitering, smart laddning när elen är billigast och full kontroll i mobilen.
                </p>
              </div>
            </div>
            {/* Visual element */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30 pointer-events-none group-hover:opacity-100 transition-all duration-700">
               <img src="/Charge_2.png" alt="Monta App" className="w-full h-full object-contain translate-x-12 translate-y-12 group-hover:translate-x-4 group-hover:translate-y-4 shadow-[-20px_-20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] transition-all duration-700" />
            </div>
          </div>

          {/* Card 2: Zaptec/Hardware */}
          <div className="bg-slate-50 rounded-[3rem] p-10 relative overflow-hidden group border border-slate-100 shadow-xl shadow-slate-200/50 card-hover min-h-[400px]">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 bg-cc-green/10 rounded-2xl flex items-center justify-center text-cc-green border border-cc-green/20 group-hover:rotate-12 transition-transform duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-800 mb-4 uppercase tracking-tight">Ledande hårdvara</h3>
                <p className="text-slate-500 font-medium max-w-sm">
                  Genom att arbeta med Zaptec och Easee säkerställer vi att din laddlösning är driftsäker och klarar det nordiska klimatet.
                </p>
              </div>
            </div>
            {/* Visual element */}
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-1/2 h-[120%] pointer-events-none group-hover:scale-110 group-hover:rotate-[-10deg] transition-all duration-1000 rotate-[-15deg]">
               <img src="https://cleancharge.se/wp-content/uploads/Zaptec-go-4.png" alt="Zaptec Go" className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
