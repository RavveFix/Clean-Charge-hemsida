import React, { useEffect, useState, useRef } from 'react';
import { Activity, ShieldCheck, Zap, MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

const FeaturesBento: React.FC = () => {
  // Card 1 state: Diagnostic Shuffler
  const [shufflerItems, setShufflerItems] = useState([
    { id: 1, label: 'PHASE 1: 32A', active: true },
    { id: 2, label: 'PHASE 2: 16A', active: false },
    { id: 3, label: 'PHASE 3: 16A', active: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerItems((prev) => {
        const newItems = [...prev];
        const last = newItems.pop();
        if (last) newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Card 2 state: Telemetry Typewriter
  const typewriterText = "SYSTEM NOMINAL. TEMP: -24°C. HEATER ACTIVE. CHARGING MAINTAINED.";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(typewriterText.substring(0, i));
      i++;
      if (i > typewriterText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
            // Reset for continuous loop
            setDisplayedText("");
            i = 0;
            // Optionally could completely loop it but let's just leave it typed once
            // setDisplayedText("")
        }, 5000)
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  
  // Card 3 state: Cursor Scheduler
  const schedulerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if(!cursorRef.current || !schedulerRef.current) return;
      
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      const days = gsap.utils.toArray('.scheduler-day');
      
      // Animate Cursor
      tl.to(cursorRef.current, { x: 50, y: 50, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => setActiveDay(2) }) // Click Day 3 (Tuesday)
        .to(cursorRef.current, { x: 150, y: 120, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => {
            // Fake Save click
        }})
        .to(cursorRef.current, { x: -20, y: -20, opacity: 0, duration: 0.5, delay: 0.5, onComplete: () => setActiveDay(null) })
        .set(cursorRef.current, { opacity: 1 });
        
    }, schedulerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-bg-surface font-space-grotesk overflow-hidden border-t border-text-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tighter leading-none uppercase mb-6">
            FUNCTIONAL <br />
            <span className="font-serif-drama italic text-brand-green">ARTIFACTS.</span>
          </h2>
          <p className="font-mono-data text-text-secondary">System capabilities mapped to physical hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Diagnostic Shuffler (Smart Load Balancing) */}
          <div className="bg-bg-primary rounded-[2rem] p-8 relative overflow-hidden group border border-text-primary/10 shadow-[8px_8px_0px_rgba(17,17,17,1)] h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="w-5 h-5 text-brand-green" />
                <span className="font-mono-data text-xs uppercase tracking-widest text-text-primary">Diagnostic</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2 uppercase tracking-tight">Smart Load Balancing</h3>
              <p className="text-text-secondary font-mono-data text-xs leading-relaxed max-w-[200px]">Dynamic power distribution across multiple endpoints.</p>
            </div>
            
            {/* Shuffler UI */}
            <div className="relative h-[120px] w-full mt-8 flex flex-col items-center justify-end">
              {shufflerItems.map((item, index) => {
                const isTop = index === 2;
                return (
                  <div 
                    key={item.id}
                    className="absolute w-full max-w-[240px] border border-text-primary text-center py-3 px-4 font-mono-data text-sm flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                      bottom: `${(2 - index) * 16}px`,
                      scale: isTop ? 1 : 1 - (2 - index) * 0.05,
                      zIndex: index,
                      opacity: isTop ? 1 : 0.5,
                      backgroundColor: isTop ? 'var(--brand-green)' : 'var(--bg-primary)',
                      color: isTop ? 'white' : 'var(--text-primary)',
                      borderColor: isTop ? 'var(--brand-green)' : 'rgba(17,17,17,0.2)'
                    }}
                  >
                    <span>{item.label}</span>
                    {isTop && <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter (Nordic Climate) */}
          <div className="bg-[#111111] rounded-[2rem] p-8 relative overflow-hidden group border border-white/10 shadow-[8px_8px_0px_rgba(0,177,130,1)] h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
                <span className="font-mono-data text-xs uppercase tracking-widest text-white/70">Telemetry</span>
                <div className="ml-auto flex items-center space-x-2 bg-brand-green/20 px-2 py-1 rounded text-[10px] font-mono-data text-brand-green uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                  LIVE
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Nordic Climate Tested</h3>
              <p className="text-white/60 font-mono-data text-xs leading-relaxed max-w-[200px]">Built to withstand extreme sub-zero temperatures.</p>
            </div>
            
            {/* Typewriter UI */}
            <div className="mt-8 bg-black/50 border border-white/10 p-4 rounded-xl min-h-[100px] font-mono-data text-xs text-brand-green leading-relaxed">
              <span className="text-white/40 mr-2">&gt;</span>
              {displayedText}
              <span className={`inline-block w-2.5 h-[14px] bg-brand-green translate-y-1 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler (Monta App) */}
          <div ref={schedulerRef} className="bg-bg-primary rounded-[2rem] p-8 relative overflow-hidden group border border-text-primary/10 shadow-[8px_8px_0px_rgba(17,17,17,1)] h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="w-5 h-5 text-brand-green" />
                <span className="font-mono-data text-xs uppercase tracking-widest text-text-primary">Protocol</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2 uppercase tracking-tight">Seamless Integration</h3>
              <p className="text-text-secondary font-mono-data text-xs leading-relaxed max-w-[200px]">Automate your charging schedule via Monta.</p>
            </div>
            
            {/* Scheduler UI */}
            <div className="relative mt-8 font-mono-data border border-text-primary/10 rounded-xl p-4 bg-white/50">
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 text-text-secondary">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                  <div 
                    key={day} 
                    className={`scheduler-day aspect-square rounded flex items-center justify-center text-xs transition-colors duration-300 ${activeDay === day ? 'bg-brand-green text-white font-bold scale-110 shadow-lg' : 'bg-bg-surface text-text-primary/50'}`}
                  >
                    {day + 1}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="bg-text-primary text-white text-[10px] px-3 py-1.5 uppercase transition-transform active:scale-95">Save Config</div>
              </div>
              
              {/* Fake Cursor SVG */}
              <div ref={cursorRef} className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-20 text-brand-green drop-shadow-xl" style={{ x: -20, y: -20 }}>
                <MousePointer2 className="w-6 h-6 fill-brand-green" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
