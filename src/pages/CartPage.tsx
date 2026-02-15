import React from 'react';
import { Trash2, ChevronLeft, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onShopMore: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQty, onRemove, onCheckout, onShopMore }) => {
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const taxes = subtotal * 0.03; // GST 3%
  const total = subtotal + taxes;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
        <div className="w-24 h-24 bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-full flex items-center justify-center shadow-lg mb-8 border border-gold/10 animate-pulse">
          <ShoppingBag className="w-10 h-10 text-gold/50" />
        </div>
        <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white mb-4 uppercase tracking-wider">Your bag is empty</h2>
        <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic mb-12">Discover our heritage collections and find something extraordinary.</p>
        <button
          onClick={onShopMore}
          className="bg-maroon-dominant text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all active:scale-95 shadow-xl border border-maroon-border"
        >
          Explore Collections
        </button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-16 border-t border-luxury-bg-card dark:border-white/5 transition-colors">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-12 text-center uppercase tracking-widest leading-none">Your Shopping Bag</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white dark:bg-luxury-dark-card p-6 rounded-3xl shadow-lg border border-transparent dark:border-white/5 flex gap-6 group hover:border-gold/20 transition-all duration-300">
                <div className="w-32 h-32 bg-luxury-bg-secondary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0 border border-luxury-bg-card dark:border-white/5 relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-gold text-[9px] font-black uppercase tracking-[0.2em] block mb-2">{item.category}</span>
                      <h3 className="text-xl font-serif text-maroon-dominant dark:text-white tracking-wide leading-none mb-2">{item.name}</h3>
                      <p className="text-lg font-serif text-maroon-dominant/80 dark:text-gold font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-luxury-text-light/40 dark:text-white/40 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-full">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-luxury-bg-card dark:border-white/10 rounded-full overflow-hidden bg-luxury-bg-secondary dark:bg-black/20">
                      <button onClick={() => onUpdateQty(item.id, item.quantity - 1)} className="px-4 py-2 text-maroon-dominant dark:text-gold hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-bold">-</button>
                      <span className="px-4 py-2 text-xs font-black text-maroon-dominant dark:text-white border-x border-luxury-bg-card dark:border-white/10 min-w-[40px] text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.quantity + 1)} className="px-4 py-2 text-maroon-dominant dark:text-gold hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-bold">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={onShopMore} className="flex items-center gap-3 text-[11px] font-black text-maroon-dominant dark:text-gold uppercase tracking-[0.3em] hover:text-gold dark:hover:text-white transition-all mt-8 group w-fit">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white dark:bg-luxury-dark-card p-8 rounded-3xl shadow-2xl border border-transparent dark:border-white/5 sticky top-32">
              <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.3em] mb-8 border-b border-luxury-bg-card dark:border-white/10 pb-4">Order Summary</h4>
              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
                  <span className="uppercase">Subtotal</span>
                  <span className="text-maroon-dominant dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
                  <span className="uppercase">GST (3%)</span>
                  <span className="text-maroon-dominant dark:text-white">₹{taxes.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
                  <span className="uppercase">Shipping</span>
                  <span className="text-green-600 dark:text-green-500 uppercase font-black">Complimentary</span>
                </div>
                <div className="pt-6 border-t border-luxury-bg-card dark:border-white/10 flex justify-between items-center">
                  <span className="text-maroon-dominant dark:text-gold font-black uppercase text-xs tracking-widest">Estimated Total</span>
                  <span className="text-2xl font-serif text-maroon-dominant dark:text-white font-bold tracking-tight">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 mb-6 border border-maroon-border group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Proceed to Checkout</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <div className="flex items-center justify-center gap-3 text-[9px] text-luxury-text-light/40 dark:text-white/30 uppercase font-black tracking-widest">
                <ShieldCheck className="w-4 h-4 text-gold" /> Secure Royal Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;