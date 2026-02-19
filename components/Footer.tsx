
import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Zap, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (tab: 'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub' | 'privacy' | 'terms' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, dest: any) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(dest);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-charcoal pt-32 pb-16 border-t border-slate-100 font-monta">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="https://cleancharge.se/wp-content/uploads/CC_logo_1row_5.svg" 
                  alt="Clean Charge AB" 
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Enhanced Partnership Section */}
              <div className="space-y-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">In partnership with</span>
                <div className="flex flex-wrap items-center gap-6">
                  {/* Monta - SVG Text Logo */}
                  <div className="opacity-40 hover:opacity-60 transition-opacity group">
                    <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="currentColor" className="text-slate-700">
                        MONTA
                      </text>
                    </svg>
                  </div>
                  
                  {/* Zaptec - SVG Text Logo */}
                  <div className="opacity-40 hover:opacity-60 transition-opacity group">
                    <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="currentColor" className="text-slate-700">
                        ZAPTEC
                      </text>
                    </svg>
                  </div>
                  
                  {/* Easee - SVG Text Logo */}
                  <div className="opacity-40 hover:opacity-60 transition-opacity group">
                    <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="currentColor" className="text-slate-700">
                        EASEE
                      </text>
                    </svg>
                  </div>
                  
                  {/* Autel - SVG Text Logo */}
                  <div className="opacity-40 hover:opacity-60 transition-opacity group">
                    <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="currentColor" className="text-slate-700">
                        AUTEL
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
              Vi skapar smartare laddlösningar för en hållbar framtid. Som din certifierade Zaptec-partner och Monta-operatör garanterar vi högsta kvalitet.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center hover:bg-[#003DFF] transition-all group">
                  <Icon className="w-5 h-5 text-charcoal group-hover:text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Lösningar</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'private')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  För Privatpersoner
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'commercial')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  För Företag
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'commercial')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  För BRF
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'commercial')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  Snabbladdning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Support</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'support')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  Manualer
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'support')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="https://monta.com/se/help-center/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors flex items-center">
                  Monta Hjälpcenter
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'support')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  Felanmälan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-cc-green">Kontakt</h4>
            <ul className="space-y-5">
              <li>
                <span className="text-sm font-bold text-slate-500">Dialoggatan 12B, Örebro</span>
              </li>
              <li>
                <a href="mailto:info@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  info@cleancharge.se
                </a>
              </li>
              <li>
                <a href="tel:0197604290" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  019-760 42 90
                </a>
              </li>
              <li className="pt-4 space-y-1">
                <p className="text-sm font-bold text-slate-800 leading-tight">Ravon Eric Albin Strawder</p>
                <p className="text-[9px] font-black text-cc-green uppercase tracking-widest">Delägare</p>
                <a href="tel:0722110026" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors block">
                  072-211 00 26
                </a>
                <a href="mailto:ravon.strawder@cleancharge.se" className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors block">
                  ravon.strawder@cleancharge.se
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'contact')} className="text-sm font-bold text-slate-500 hover:text-[#003DFF] transition-colors">
                  Jobba hos oss
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-6">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">© 2026 Clean Charge AB</p>
              <div className="h-4 w-px bg-slate-100"></div>
              <img src="https://monta.com/app/themes/monta-sage-latest/public/build/assets/logo_soc2-t2-BsbIKEuK.png" className="h-8 opacity-30 grayscale" alt="SOC2" />
            </div>
            
            <div className="hidden md:block h-4 w-px bg-slate-100"></div>
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">
              Design by Rávon Eric Albin Strawder & AI
            </p>
            

          </div>
          <div className="flex space-x-12">
            <button onClick={(e) => handleNav(e, 'privacy')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-charcoal transition-colors">
              Integritetspolicy
            </button>
            <button onClick={(e) => handleNav(e, 'terms')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-charcoal transition-colors">
              Köpvillkor
            </button>
            <button onClick={(e) => handleNav(e, 'cookies')} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-charcoal transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
