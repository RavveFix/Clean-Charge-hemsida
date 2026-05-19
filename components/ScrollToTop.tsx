'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle parameters for the progress ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scrolla till toppen"
      className={`fixed bottom-24 right-6 z-[130] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
        {/* Background circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(148,163,184,0.15)"
          strokeWidth="2"
        />
        {/* Progress arc */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#00b182"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* Button core */}
      <div className="relative w-10 h-10 bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center border border-slate-700/50 shadow-lg group-hover:bg-cc-green group-hover:border-cc-green/50 group-hover:shadow-[0_8px_30px_rgba(0,177,130,0.3)] transition-all duration-300 group-active:scale-90">
        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
      </div>
    </button>
  );
};

export default ScrollToTop;
