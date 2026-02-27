import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  onNavigate: (tab: 'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub' | 'privacy' | 'terms' | 'cookies') => void;
  activeTab: string;
  onSearchClick: () => void;
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeTab, onSearchClick, cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  
  const handleNavigation = (tab: any) => {
    onNavigate(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Hem' },
    { id: 'private', label: 'Ladda Privat' },
    { id: 'commercial', label: 'Publik Laddning' },
    { id: 'contact', label: 'Kontakta Oss' },
    { id: 'products', label: 'Produkter' },
    { id: 'about', label: 'Om Oss' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Morphing logic: Transparent -> Glass Pill
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          targets: navRef.current,
          className: 'scrolled'
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl transition-all duration-500 rounded-[2rem] px-6 py-4 flex items-center justify-between
          bg-transparent text-white
          [&.scrolled]:bg-bg-surface/80 [&.scrolled]:backdrop-blur-xl [&.scrolled]:text-text-primary [&.scrolled]:shadow-2xl [&.scrolled]:border [&.scrolled]:border-text-primary/10"
      >
        <div 
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => handleNavigation('home')}
        >
          <img 
            src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg" 
            alt="Clean Charge AB" 
            className="h-7 md:h-8 w-auto filter brightness-0 invert [&.scrolled]:filter-none transition-all duration-500"
            // Hacky CSS to invert logo when at top, and normal when scrolled.
            style={{ filter: "inherit" }}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => handleNavigation(tab.id)}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 ${
                activeTab === tab.id ? 'text-brand-green' : 'opacity-80 hover:opacity-100 hover:text-brand-green'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-green rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-brand-green text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white leading-none">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => handleNavigation('contact')}
            className="hidden lg:block bg-brand-green text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-[2rem] hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-lg"
          >
            Utforska Produkter
          </button>
          
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-bg-primary z-50 transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <button 
          className="absolute top-10 right-6 p-2 text-text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center space-y-8 w-full px-8">
          {navLinks.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => handleNavigation(tab.id)}
              className={`text-4xl font-serif-drama tracking-tight ${
                activeTab === tab.id ? 'text-brand-green' : 'text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="pt-12 w-full">
            <button 
              onClick={() => handleNavigation('contact')}
              className="w-full bg-brand-green text-white text-lg font-bold uppercase tracking-widest py-6 rounded-[2rem] shadow-xl hover:scale-[1.02] transition-transform"
            >
              Utforska Produkter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
