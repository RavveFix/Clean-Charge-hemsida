import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Manual SplitText reveal (since SplitText is a club plugin, we'll simulate word by word with spans)
      const animateText = (element: HTMLElement | null, delay = 0) => {
        if (!element) return;
        
        // Wrap words in spans if not already done
        if (!element.classList.contains('split-done')) {
          const words = element.innerText.split(' ');
          element.innerHTML = '';
          words.forEach(word => {
            const span = document.createElement('span');
            span.className = 'inline-block overflow-hidden pb-1 mr-[0.25em]';
            const innerSpan = document.createElement('span');
            innerSpan.className = 'inline-block translate-y-[120%] opacity-0 word-anim';
            innerSpan.innerText = word;
            span.appendChild(innerSpan);
            element.appendChild(span);
          });
          element.classList.add('split-done');
        }

        gsap.to(element.querySelectorAll('.word-anim'), {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          delay: delay,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          }
        });
      };

      animateText(textRef1.current, 0);
      animateText(textRef2.current, 0.4);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0D0D12] overflow-hidden flex items-center justify-center py-32 z-10 border-t border-white/5">
      {/* Parallaxing Organic Texture Image matching brutalist/organic feel */}
      <div 
        ref={bgRef}
        className="absolute inset-0 -top-[30%] -bottom-[30%] z-0 opacity-15"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518398450143-44165507740e?q=80&w=2938&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)'
        }}
      />
      
      {/* Soft overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0D0D12]/60 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col gap-12 md:gap-24">
          
          <div className="max-w-2xl">
            <p ref={textRef1} className="font-mono-data text-white/50 text-xl md:text-2xl leading-relaxed uppercase tracking-widest">
              Most infrastructure focuses on: generic enclosures and baseline compliance.
            </p>
          </div>

          <div className="w-full flex justify-end">
            <h2 ref={textRef2} className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] text-white max-w-4xl text-right">
              We focus on: <span className="font-serif-drama italic text-brand-green block mt-4 text-[1.2em] leading-[0.9]">PRECISION AND ENDURANCE.</span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
