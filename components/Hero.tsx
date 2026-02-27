import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const HERO_IMAGE = "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop";

interface HeroProps {
  onNavigate: () => void;
  onNavigateToPayment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onNavigateToPayment }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for hero text elements
      gsap.fromTo('.hero-anim', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full flex items-end overflow-hidden"
    >
      {/* Full Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Raw concrete architecture"
          className="w-full h-full object-cover origin-center scale-105"
        />
        {/* Heavy primary-to-black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full mb-16 md:mb-24 flex flex-col justify-end h-full">
        {/* Signal Tag */}
        <div className="hero-anim inline-flex items-center space-x-3 text-white border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md self-start mb-8">
          <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
          <span className="text-xs font-mono-data tracking-widest uppercase text-white/80">System Ready</span>
        </div>

        {/* Brutalist Signal Hero Line Pattern */}
        <div className="mb-8">
          <h1 className="hero-anim text-[10vw] md:text-[6rem] lg:text-[8rem] font-bold text-[#f5f3ee] leading-[0.9] tracking-tighter uppercase mb-0">
            CONNECT THE
          </h1>
          <h1 className="hero-anim text-[15vw] md:text-[9rem] lg:text-[12rem] font-serif-drama italic text-brand-green leading-[0.8] tracking-tight -ml-1 md:-ml-2">
            INFRASTRUCTURE.
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 w-full border-t border-white/20 pt-8 mt-4 hero-anim">
          <p className="font-mono-data text-white/70 max-w-sm text-sm leading-relaxed">
            Intelligent charging networks engineered for raw performance and resilience. Built for a sustainable tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNavigate}
              className="group overflow-hidden relative px-8 py-5 flex items-center justify-center gap-3 bg-[#f5f3ee] text-[#111111] rounded-[2rem] font-bold text-sm tracking-widest uppercase transition-transform duration-300 hover:scale-[1.03] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span className="relative z-10">Explore Products</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </button>

            {onNavigateToPayment && (
              <button 
                onClick={onNavigateToPayment}
                className="group px-8 py-5 rounded-[2rem] font-bold border border-white/20 text-white hover:bg-white/10 transition-colors duration-300 uppercase text-sm tracking-widest flex items-center justify-center gap-3 backdrop-blur-md"
              >
                Contact Sales
              </button>
            )}
          </div>
        </div>
        
        <div className="absolute bottom-8 right-6 hidden md:flex items-center gap-3 text-white/50 hero-anim">
           <span className="font-mono-data text-xs uppercase tracking-widest">Scroll to scan</span>
           <div className="border border-white/20 rounded-full p-2">
             <ArrowDown className="w-3 h-3 animate-bounce" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
