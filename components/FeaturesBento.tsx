'use client';

import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Smartphone } from 'lucide-react';

const FeaturesBento: React.FC = () => {
  // Card 1 state: Diagnostic Shuffler -> Smart Load Balancing Visualizer
  const [isBox1Active, setIsBox1Active] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBox1Active((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // Card 2 state: Telemetry Typewriter
  const typewriterText = "SYSTEM NOMINAL. TEMP: -24°C. HEATER ACTIVE. CHARGING MAINTAINED.";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let active = true;
    const cursorInterval = setInterval(() => setCursorVisible((v) => !v), 500);

    const runTyper = () => {
      if (!active) return;
      let i = 0;
      setDisplayedText('');
      const typingInterval = setInterval(() => {
        if (!active) { clearInterval(typingInterval); return; }
        i++;
        setDisplayedText(typewriterText.substring(0, i));
        if (i >= typewriterText.length) {
          clearInterval(typingInterval);
          setTimeout(() => { if (active) runTyper(); }, 3000);
        }
      }, 80);
    };

    runTyper();
    return () => {
      active = false;
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-[800] text-text-primary tracking-tight mb-4">
            Framtidens teknik, idag.
          </h2>
          <p className="text-text-secondary text-[17px] font-medium max-w-2xl mx-auto">Smarta funktioner designade för att göra din vardag enklare och din laddning effektivare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Load Balancing */}
          <div className="bg-white rounded-[32px] p-10 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-[440px]">
            <div>
              <div className="mb-6">
                <Activity strokeWidth={1.5} className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3 tracking-tight">Dynamisk Lastbalansering</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed max-w-[260px]">Skyddar din hus huvudsäkring genom att automatiskt fördela strömmen optimalt.</p>
            </div>
            
            {/* Shuffler UI */}
            <div className="relative h-[100px] w-full mt-8 flex flex-col items-center justify-end">
                  {/* Pill 2 */}
                  <div 
                    className="absolute w-full max-w-[220px] rounded-2xl text-center py-3.5 px-5 text-[15px] font-semibold flex justify-between items-center transition-all duration-700 ease-in-out border"
                    style={{ 
                      bottom: !isBox1Active ? '8px' : '24px', 
                      scale: !isBox1Active ? 1 : 0.95,
                      zIndex: !isBox1Active ? 10 : 0,
                      opacity: !isBox1Active ? 1 : 0.4,
                      backgroundColor: !isBox1Active ? '#00b182' : '#f8fafc',
                      color: !isBox1Active ? 'white' : '#64748b', // text-slate-500
                      borderColor: !isBox1Active ? 'transparent' : '#f1f5f9', // border-slate-100
                      boxShadow: !isBox1Active ? '0 10px 20px rgba(0,177,130,0.2)' : 'none'
                    }}
                  >
                    <span>Laddbox 2: 16A</span>
                    <span className={`w-2 h-2 rounded-full bg-white opacity-90 transition-opacity duration-300 ${!isBox1Active ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                  {/* Pill 1 */}
                  <div 
                    className="absolute w-full max-w-[220px] rounded-2xl text-center py-3.5 px-5 text-[15px] font-semibold flex justify-between items-center transition-all duration-700 ease-in-out border"
                    style={{ 
                      bottom: isBox1Active ? '8px' : '24px', 
                      scale: isBox1Active ? 1 : 0.95,
                      zIndex: isBox1Active ? 10 : 0,
                      opacity: isBox1Active ? 1 : 0.4,
                      backgroundColor: isBox1Active ? '#00b182' : '#f8fafc',
                      color: isBox1Active ? 'white' : '#64748b',
                      borderColor: isBox1Active ? 'transparent' : '#f1f5f9',
                      boxShadow: isBox1Active ? '0 10px 20px rgba(0,177,130,0.2)' : 'none'
                    }}
                  >
                    <span>Laddbox 1: 32A</span>
                    <span className={`w-2 h-2 rounded-full bg-white opacity-90 transition-opacity duration-300 ${isBox1Active ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
            </div>
          </div>

          {/* Card 2: Climate Tested */}
          <div className="bg-[#0b1021] rounded-[32px] p-10 relative overflow-hidden h-[440px] flex flex-col justify-between shadow-[0_20px_40px_rgba(11,16,33,0.15)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <ShieldCheck strokeWidth={1.5} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">Nordiskt Klimatanpassad</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-[260px]">Hårdvara byggd för att motstå extrem kyla, snö och regn utan att kompromissa med prestandan.</p>
            </div>
            
            {/* Terminal UI -> Typewriter Widget */}
            <div className="mt-8 bg-white/[0.03] border border-white/[0.06] p-5 rounded-2xl w-full font-mono">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Status</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-cc-green uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-cc-green animate-pulse" />
                    Live
                  </span>
               </div>
               <div className="text-[13px] leading-[1.8] text-slate-300 min-h-[60px]">
                  {displayedText}<span className={`inline-block w-[2px] h-[14px] bg-cc-green ml-0.5 align-middle transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
               </div>
            </div>
          </div>

          {/* Card 3: Monta Integration */}
          <div className="bg-[#f5f8ff] rounded-[32px] p-10 relative overflow-hidden h-[440px] flex flex-col justify-between border border-[#e2e8f0]/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#dbe4ff] flex items-center justify-center mb-6 shadow-sm">
                <Smartphone strokeWidth={1.5} className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3 tracking-tight">Sömlös App-integration</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed max-w-[260px]">Full kontroll i mobilen via Monta. Schemalägg laddning, följ kostnader och dela din laddare.</p>
            </div>
            
            {/* Modern App UI Mockup snippet */}
            <div className="relative mt-8 bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/60 w-full mb-2">
               <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center">
                     <Zap className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                     <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Kostnad denna månad</div>
                     <div className="text-[20px] font-bold text-text-primary leading-none">345 kr</div>
                  </div>
               </div>
               <div className="w-full bg-slate-100/80 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#003dff] h-full rounded-full w-[65%]"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
