
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import SolutionsSection from './components/SolutionsSection';
import MontaSection from './components/MontaSection';
import MontaHubSection from './components/MontaHubSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import PrivateChargingSection from './components/PrivateChargingSection';
import CommercialChargingSection from './components/CommercialChargingSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import GroundingInsights from './components/GroundingInsights';
import PrivacyPolicySection from './components/PrivacyPolicySection';
import TermsSection from './components/TermsSection';
import CookiePolicySection from './components/CookiePolicySection';
import ChatWidget from './components/ChatWidget';
import CartDrawer from './components/CartDrawer';
import StatsStrip from './components/StatsStrip';
import FeaturesBento from './components/FeaturesBento';
import PreFooterCTA from './components/PreFooterCTA';
import ProductHero from './components/ProductHero';
import VideoSection from './components/VideoSection';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about' | 'contact' | 'private' | 'commercial' | 'support' | 'monta-hub' | 'privacy' | 'terms' | 'cookies'>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const scrollToProducts = () => {
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onNavigate={setActiveTab} 
        activeTab={activeTab} 
        onSearchClick={() => setIsChatOpen(true)}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero 
              onNavigate={scrollToProducts} 
              onNavigateToPayment={() => {
                setActiveTab('monta-hub');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <StatsStrip />
            <VideoSection />
            <SolutionsSection onNavigate={setActiveTab} />
      <FeaturesBento />
            <GroundingInsights />
            <MontaSection onNavigate={setActiveTab} />
            <div className="py-24 bg-slate-50/50">
              <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-4 uppercase">Populära Laddboxar</h2>
                <p className="text-slate-500 font-medium">Våra mest efterfrågade laddlösningar för nordiska förhållanden.</p>
              </div>
              <ProductGrid limit={4} onAddToCart={addToCart} />
            </div>
          </div>
        )}
        
        {activeTab === 'products' && (
          <div className="animate-in fade-in duration-500 bg-white min-h-screen">
            <ProductHero />
            <div className="pb-32 bg-aurora">
              <ProductGrid onAddToCart={addToCart} />
            </div>
          </div>
        )}

        {activeTab === 'private' && (
          <PrivateChargingSection onNavigate={setActiveTab} />
        )}

        {activeTab === 'commercial' && (
          <CommercialChargingSection onNavigate={setActiveTab} />
        )}

        {activeTab === 'support' && (
          <SupportSection />
        )}

        {activeTab === 'monta-hub' && (
          <MontaHubSection onNavigate={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-500">
            <ContactSection />
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-500">
            <AboutSection />
          </div>
        )}

        {activeTab === 'privacy' && <PrivacyPolicySection />}
        {activeTab === 'terms' && <TermsSection />}
        {activeTab === 'cookies' && <CookiePolicySection />}
      </main>

      <PreFooterCTA onNavigate={setActiveTab} />
      <Footer onNavigate={setActiveTab} />
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;
