
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ShoppingCart, ShieldCheck, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isPremium = product.category === 'laddbox' || product.category === 'snabbladdare';

  return (
    <div className={`group relative transition-all duration-700 ${isPremium ? 'magic-border p-[1px] rounded-[2.5rem]' : ''}`}>
      <div className="bg-white rounded-[2.5rem] p-5 pb-8 border border-slate-100 group-hover:border-cc-green/20 group-hover:shadow-[0_40px_80px_-15px_rgba(0,177,130,0.15)] transition-all duration-500 flex flex-col h-full relative overflow-hidden">
        
        {/* Magic Shine Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shine-glass"></div>

        <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] bg-slate-50/50 flex items-center justify-center p-6 transition-all group-hover:bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 relative z-10 drop-shadow-2xl"
          />
          
          {/* Badge Overlay */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            {isPremium && (
              <div className="glass-card px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-2 border border-white/50 animate-float">
                <ShieldCheck className="w-3.5 h-3.5 text-cc-green" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-800">Premium Choice</span>
              </div>
            )}
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-cc-green/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"></div>
        </div>

        <div className="flex flex-col flex-1 px-2 space-y-4 relative z-10">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-cc-green transition-colors">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-2.5 h-2.5" 
                      style={{ 
                        fill: i < 4 ? '#00b182' : 'rgba(0,177,130,0.2)', 
                        color: i < 4 ? '#00b182' : 'rgba(0,177,130,0.2)' 
                      }} 
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black text-cc-green uppercase tracking-widest bg-cc-green/5 px-2 py-0.5 rounded-md">Bäst i test</span>
              </div>
            </div>
            <div className="flex flex-col items-end shrink-0">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verifierad</span>
            </div>
          </div>

          <p className="text-slate-500 text-[13px] font-medium leading-relaxed" style={{ minHeight: '2.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {product.features?.slice(0, 2).map((f, i) => (
              <span key={i} className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-2 py-1 rounded-lg group-hover:border-cc-green/20 transition-colors">
                {f}
              </span>
            ))}
          </div>

          {/* Price + CTA pinned to bottom */}
          <div className="pt-6 flex items-center justify-between border-t border-slate-50 mt-auto">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] opacity-80">Pris inkl. rot</p>
              <p className="text-2xl font-black text-slate-900 tracking-tighter">
                {product.price > 0 ? `${product.price.toLocaleString()} kr` : 'Offert'}
              </p>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="shimmer-btn bg-slate-900 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-cc-green hover:shadow-2xl hover:shadow-cc-green/30 transition-all active:scale-95 group/btn"
              aria-label="Lägg i varukorg"
            >
              Köp
              <ShoppingCart className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  limit?: number;
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ limit, onAddToCart }) => {
  const displayedProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
