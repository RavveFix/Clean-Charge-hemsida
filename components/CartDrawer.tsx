
import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CreditCard, Mail, FileText } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const hasQuoteItems = items.some(item => item.price === 0);

  const handleCheckout = () => {
    if (hasQuoteItems) {
      // Logic for Quote Request (Email)
      const subject = encodeURIComponent("Offertförfrågan från CleanCharge.se");
      
      const itemList = items.map(item => 
        `• ${item.quantity}st ${item.name} - ${item.price > 0 ? item.price.toLocaleString() + ' kr' : 'OFFERTFÖRFRÅGAN'}`
      ).join('\n');

      const totalText = total > 0 ? `\n\nTotalt värde för prissatta varor: ${total.toLocaleString()} kr (exkl. offertprodukter)` : '';

      const body = encodeURIComponent(
        `Hej Clean Charge,\n\nJag är intresserad av följande produkter och önskar en offert/beställning:\n\n${itemList}${totalText}\n\nVänligen återkom till mig med ett förslag.\n\nMina kontaktuppgifter:\nNamn:\nTelefon:\n\nMvh,\n`
      );

      window.location.href = `mailto:info@cleancharge.se?subject=${subject}&body=${body}`;
    } else {
      // Logic for Standard Checkout (Placeholder for now)
      alert("Här skulle en betallösning (t.ex. Klarna/Stripe) öppnas för direktköp.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] font-monta">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-5 h-5 text-cc-green" />
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Din Varukorg</h2>
            <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-16 h-16 text-slate-300" />
              <p className="text-lg font-bold text-slate-400">Varukorgen är tom</p>
              <button onClick={onClose} className="text-cc-green font-bold text-sm hover:underline">
                Börja handla
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center p-2 border border-slate-100 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm truncate">{item.name}</h3>
                    <p className={`text-xs font-medium ${item.price === 0 ? 'text-cc-green font-bold uppercase tracking-wider' : 'text-slate-500'}`}>
                      {item.price > 0 ? `${item.price.toLocaleString()} kr` : 'Begär Offert'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-3 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-800 font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-slate-800 w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-800 font-bold"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-slate-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Delsumma</span>
                <span className="font-bold text-slate-800">{total.toLocaleString()} kr</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Moms (25%)</span>
                <span className="font-bold text-slate-800">{(total * 0.25).toLocaleString()} kr</span>
              </div>
              
              {/* Conditional Total Display */}
              <div className="flex justify-between text-lg pt-4 border-t border-slate-200">
                <span className="font-black text-slate-900 uppercase tracking-wide">Totalt</span>
                <div className="text-right">
                  {hasQuoteItems ? (
                     <div className="flex flex-col items-end">
                       <span className="font-black text-slate-800 text-lg">Offertförfrågan</span>
                       {total > 0 && <span className="text-xs text-slate-400 font-medium">+ {total.toLocaleString()} kr produkter</span>}
                     </div>
                  ) : (
                    <span className="font-black text-cc-green text-xl">{total.toLocaleString()} kr</span>
                  )}
                </div>
              </div>
            </div>

            {/* Dynamic Button based on content */}
            <button 
              onClick={handleCheckout}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center space-x-3 group ${
                hasQuoteItems 
                  ? 'bg-slate-900 text-white hover:bg-cc-green' 
                  : 'bg-cc-green text-white hover:bg-slate-900'
              }`}
            >
              {hasQuoteItems ? (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Skicka Offertförfrågan</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Gå till Kassan</span>
                </>
              )}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {hasQuoteItems && (
               <p className="text-[10px] text-center text-slate-400 font-medium">
                 Öppnar din e-postklient för att skicka en förfrågan till info@cleancharge.se
               </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
