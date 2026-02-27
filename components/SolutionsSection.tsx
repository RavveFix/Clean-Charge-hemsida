import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SolutionsSectionProps {
  onNavigate?: (tab: 'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub') => void;
}

const ProtocolSection: React.FC<SolutionsSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stacking logic
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        // Pin each card
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });

        // If it's not the last card, animate it scaling down and blurring as the next card covers it
        if (i < cardsRef.current.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
      
      // Card 1 Animation: Rotating Geometric Motif
      gsap.to('.motif-rotate', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

      // Card 2 Animation: Laser Scan
      gsap.to('.laser-scan', {
        y: "200px",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });

      // Card 3 Animation: Waveform (EKG Path)
      gsap.to('.wave-path', {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: "linear"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      id: "01",
      title: "STRUCTURAL AUDIT",
      desc: "Comprehensive site analysis and grid capacity evaluation. We build the foundation before dropping the hardware.",
      color: "#f5f3ee",
      textMode: "dark",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] opacity-20">
            <g className="motif-rotate origin-center" stroke="#111111" strokeWidth="1" fill="none">
              <circle cx="100" cy="100" r="80" strokeDasharray="4 8" />
              <rect x="40" y="40" width="120" height="120" transform="rotate(45 100 100)" />
              <rect x="40" y="40" width="120" height="120" />
            </g>
          </svg>
        </div>
      )
    },
    {
      id: "02",
      title: "DEPLOYMENT VECTOR",
      desc: "Precision installation of charging nodes. Raw hardware secured to architectural standards.",
      color: "#e8e4dd",
      textMode: "dark",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-[#e8e4dd] overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          {/* Scanning Laser */}
          <div className="laser-scan absolute top-20 left-10 right-10 h-0.5 bg-brand-green shadow-[0_0_15px_rgba(0,177,130,1)] z-10"></div>
          {/* Target Box */}
          <div className="w-48 h-48 border border-[#111111]/20 flex items-center justify-center">
            <div className="w-32 h-32 border border-[#111111]/40 flex items-center justify-center">
               <div className="w-4 h-4 rounded-full bg-brand-green/20 border border-brand-green"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      title: "SYSTEM TELEMETRY",
      desc: "Live network activation. Load balancing online. Monta software handshake confirmed.",
      color: "#111111",
      textMode: "light",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-[#111111]">
          <svg viewBox="0 0 400 100" className="w-[80%] h-auto drop-shadow-[0_0_8px_rgba(0,177,130,0.5)]">
            <path 
              className="wave-path" 
              d="M0,50 L100,50 L120,20 L140,80 L160,50 L400,50" 
              fill="none" 
              stroke="var(--brand-green)" 
              strokeWidth="2"
              strokeDasharray="400"
              strokeDashoffset="400"
            />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="relative font-space-grotesk bg-[#f5f3ee]">
      {protocols.map((protocol, i) => (
        <div 
          key={protocol.id}
          ref={el => cardsRef.current[i] = el}
          className="h-[100dvh] w-full flex flex-col md:flex-row shadow-[0px_-20px_50px_rgba(0,0,0,0.1)] border-t border-[#111111]/5"
          style={{ backgroundColor: protocol.color }}
        >
          {/* Text Content */}
          <div className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-10 md:px-20 ${protocol.textMode === 'light' ? 'text-[#f5f3ee]' : 'text-[#111111]'}`}>
            <span className="font-mono-data opacity-50 mb-4 tracking-widest uppercase">[{protocol.id}] PROTOCOL</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">{protocol.title}</h2>
            <p className="font-mono-data text-sm md:text-base opacity-70 max-w-md leading-relaxed">
              {protocol.desc}
            </p>
          </div>
          
          {/* Visual Content */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center border-l border-[#111111]/5">
            {protocol.visual}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProtocolSection;
