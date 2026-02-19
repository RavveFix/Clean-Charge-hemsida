
import React from 'react';
import { SOLUTIONS } from '../constants';
import { ArrowRight, Zap, Building2, User, Globe2 } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate?: (tab: 'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub') => void;
}

const SolutionCard: React.FC<{ solution: any; index: number; onClick?: () => void }> = ({ solution, index, onClick }) => {
  const icons = [<User key="user" />, <Building2 key="building" />, <Globe2 key="globe" />];
  
  return (
    <div 
      onClick={onClick}
      className="relative group overflow-hidden rounded-[3rem] md:rounded-[3.5rem] cursor-pointer shadow-2xl hover:shadow-cc-green/20 transition-all duration-700 bg-slate-900 h-[500px] md:h-[600px] border border-white/5"
    >
      <img 
        src={solution.image} 
        alt={solution.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
      />
      
      {/* Dynamic Overlay - Enhanced for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
      
      {/* Floating Badge */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl md:rounded-3xl text-white transform group-hover:scale-110 transition-transform">
        {React.cloneElement(icons[index % icons.length] as React.ReactElement<any>, { className: "w-5 h-5 md:w-6 md:h-6" })}
      </div>

      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">
            {solution.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === solution.title.split(' ').length - 1 ? "text-cc-green" : ""}>
                {word}{' '}
              </span>
            ))}
          </h3>
          <p className="text-slate-300 text-sm md:text-lg font-medium leading-tight opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-xs">
            {solution.description}
          </p>
        </div>

        <div className="pt-2 md:pt-4 overflow-hidden">
          <div className="flex items-center space-x-4 text-cc-green text-[10px] md:text-xs font-black uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform duration-500">
            <span className="h-px w-6 md:w-8 bg-cc-green"></span>
            <span>Visa Signatur-lösning</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigate }) => {
  const handleCardClick = (index: number) => {
    if (onNavigate) {
      if (index === 0) onNavigate('private');
      if (index === 1) onNavigate('commercial');
      if (index === 2) onNavigate('commercial');
    }
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cc-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Abstract Grid Pattern for the "Empty Space" */}
      <div className="absolute top-20 right-0 w-1/3 h-64 opacity-[0.03] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4 md:space-y-6 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-cc-green/10 text-cc-green px-4 py-2 rounded-full border border-cc-green/20">
              <Zap className="w-4 h-4 fill-cc-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Branschledande expertis</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-slate-800 tracking-tighter leading-[0.85] uppercase">
              Arkitektur för <br />
              <span className="text-cc-green">E-mobilitet.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg md:text-xl max-w-md font-medium leading-relaxed border-l-2 border-slate-200 pl-8">
            Vi skräddarsyr ekosystem för laddning som växer med din verksamhet. Från den första boxen till den största flottan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard 
              key={index} 
              index={index} 
              solution={solution} 
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
