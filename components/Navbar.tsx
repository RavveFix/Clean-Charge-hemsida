
import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (tab: 'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub' | 'privacy' | 'terms' | 'cookies') => void;
  activeTab: string;
  onSearchClick: () => void;
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeTab, onSearchClick, cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer shrink-0"
          onClick={() => handleNavigation('home')}
        >
          <img 
            src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg" 
            alt="Clean Charge AB" 
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => handleNavigation(tab.id)}
              className={`text-sm font-bold transition-all duration-300 relative py-2 ${
                activeTab === tab.id ? 'text-cc-green' : 'text-slate-600 hover:text-cc-green'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cc-green rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={onSearchClick}
            className="text-slate-400 hover:text-cc-green transition-colors hidden sm:block p-2 hover:bg-slate-50 rounded-full"
            aria-label="Sök med AI"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onCartClick}
            className="text-slate-400 hover:text-cc-green transition-colors relative p-2 hover:bg-slate-50 rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-cc-green text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-white leading-none animate-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => handleNavigation('contact')}
            className="hidden lg:block bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-black transition-all shadow-lg"
          >
            Boka Installation
          </button>
          
          <button 
            className="lg:hidden text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => handleNavigation(tab.id)}
              className={`text-2xl font-black text-left uppercase tracking-tighter ${
                activeTab === tab.id ? 'text-cc-green' : 'text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <button 
              onClick={() => handleNavigation('contact')}
              className="w-full bg-cc-green text-white text-sm font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-cc-green/20"
            >
              Boka Installation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
