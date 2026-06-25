'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Zap } from 'lucide-react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';

const SplineScene = dynamic(
  () => import('./SplineScene').then((m) => m.SplineScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-green rounded-full animate-spin" />
      </div>
    ),
  },
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smoother opacity & y-translation reveal for hero text elements (eliminates clip-path clipping bugs)
      gsap.fromTo('.hero-anim', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.12, 
          ease: "power3.out", 
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
      className="relative min-h-[70vh] sm:min-h-[85vh] md:min-h-screen w-full flex items-center overflow-hidden bg-white pt-28 sm:pt-32 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-8">
          
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left">
            
            {/* Tag/Badge */}
            <div className="hero-anim w-fit flex items-center space-x-2 bg-slate-50 text-slate-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-100 self-center lg:self-start mb-4 sm:mb-6 md:mb-8 lg:mb-10 transition-colors hover:bg-slate-100 cursor-default">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-[12px] sm:text-xs font-semibold tracking-wide uppercase">Auktoriserad Zaptec &amp; Monta Partner</span>
            </div>

            <h1 className="hero-anim text-[clamp(2rem,5vw,5rem)] font-[800] text-text-primary tracking-tighter leading-[1.12] mb-5 sm:mb-6 md:mb-8 lg:pr-10 pb-2">
              Vi levererar,{' '}<br className="hidden sm:block" />
              konfigurerar och{' '}<br className="hidden sm:block" />
              driftar era laddboxar.
            </h1>
            
            <p className="hero-anim text-base sm:text-lg md:text-xl text-text-primary font-medium leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0 pr-0 lg:pr-8">
              Skalbara laddlösningar för företag och fastighetsbolag – från offert till färdig drift. Intelligent hårdvara möter sömlös mjukvara.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 hero-anim pt-2 md:pt-4 w-full sm:w-auto">
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
            <div className="hero-anim mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-6 sm:gap-12 lg:gap-16 opacity-90">
               <div className="text-xs sm:text-sm font-semibold text-text-secondary">
                  <span className="block text-xl sm:text-[28px] font-bold text-text-primary leading-none mb-1">4.6/5</span>
                  Kundnöjdhet
               </div>
               <div className="w-px h-10 sm:h-12 bg-slate-200"></div>
               <div className="text-xs sm:text-sm font-semibold text-text-secondary">
                  <span className="block text-xl sm:text-[28px] font-bold text-text-primary leading-none mb-1">50 000+</span>
                  Genomförda laddningar
               </div>
            </div>

          </div>

          {/* Visual Content - Right Side */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end hero-anim mt-6 sm:mt-12 lg:mt-0">
             <div className="relative w-full max-w-[320px] sm:max-w-[500px] aspect-[4/5] lg:aspect-square flex items-center justify-center">
                
                {/* Ambient Glow behind Spline Scene */}
                <div className="absolute inset-0 bg-gradient-to-r from-cc-green/5 to-blue-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />
                
                {/* Spline 3D Scene */}
                <div className="relative w-full h-full scale-100 sm:scale-110 md:scale-120 lg:scale-110 xl:scale-120 origin-center translate-x-0">
                  <SplineScene 
                    scene="https://prod.spline.design/NYnTe3YctwcC8ihb/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce z-10" style={{ animationDuration: '2.5s' }}>
        <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 hidden sm:block">Scrolla</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-cc-green animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
