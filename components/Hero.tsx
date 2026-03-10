'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { SplineScene } from './SplineScene';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered clip-path reveal for hero text elements
      gsap.fromTo('.hero-anim', 
        { y: 50, opacity: 0, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { 
          y: 0, 
          opacity: 1, 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power4.out", 
          delay: 0.1 
        }
      );

      // No longer animating imageRef since we use Spline 3D scene now
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center overflow-hidden bg-white pt-32 lg:pt-40 pb-16"
    >
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left">
            
            {/* Tag/Badge */}
            <div className="hero-anim w-fit flex items-center space-x-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-full border border-slate-100 self-center lg:self-start mb-8 lg:mb-10 transition-colors hover:bg-slate-100 cursor-default">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-wide">Auktoriserad Zaptec &amp; Monta Partner</span>
            </div>

            <h1 className="hero-anim text-6xl md:text-7xl lg:text-[5.5rem] font-[800] text-text-primary tracking-tighter leading-[1.05] mb-8 lg:pr-10">
              Vi levererar,{' '}<br/>
              konfigurerar och{' '}<br/>
              driftar er laddinfrastruktur.
            </h1>
            
            <p className="hero-anim text-xl text-text-primary font-medium leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0 pr-0 lg:pr-8">
              Skalbara laddlösningar för företag och fastighetsbolag – från offert till färdig drift. Intelligent hårdvara möter sömlös mjukvara.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 hero-anim pt-4">
              <Link href="/produkter">
                <MagneticButton 
                  strength={15}
                  magneticRadius={60}
                  className="group w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 bg-white text-text-primary rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] border border-slate-100"
                >
                  Utforska Produkter
                </MagneticButton>
              </Link>

              <Link href="/kontakt">
                <MagneticButton 
                  strength={10}
                  magneticRadius={50}
                  className="group w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 rounded-full font-bold text-[15px] border border-slate-200 text-text-primary hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                >
                  Kontakta oss
                </MagneticButton>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="hero-anim mt-16 pt-10 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-12 lg:gap-16 opacity-90">
               <div className="text-sm font-semibold text-text-secondary">
                  <span className="block text-[28px] font-bold text-text-primary leading-none mb-1">4.6/5</span>
                  Kundnöjdhet
               </div>
               <div className="w-px h-12 bg-slate-200"></div>
               <div className="text-sm font-semibold text-text-secondary">
                  <span className="block text-[28px] font-bold text-text-primary leading-none mb-1">50 000+</span>
                  Genomförda laddningar
               </div>
            </div>

          </div>

          {/* Visual Content - Right Side */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end hero-anim mt-12 lg:mt-0">
             <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square flex items-center justify-center">
                
                {/* Spline 3D Scene */}
                <div className="relative w-full h-full scale-125 md:scale-150 origin-center translate-x-4">
                  <SplineScene 
                    scene="https://prod.spline.design/NYnTe3YctwcC8ihb/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
