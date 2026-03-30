import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  taxes: number;
  total: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, taxes, total, onCheckout }) => (
  <div className="bg-white dark:bg-luxury-dark-card p-8 rounded-3xl shadow-2xl border border-transparent dark:border-white/5 sticky top-32">
    <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.3em] mb-8 border-b border-luxury-bg-card dark:border-white/10 pb-4">Order Summary</h4>
    <div className="space-y-5 mb-8">
      <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
        <span className="uppercase">Subtotal</span>
        <span className="font-sans font-bold tracking-tight text-maroon-dominant dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
      </div>
      <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
        <span className="uppercase">GST (3%)</span>
        <span className="font-sans font-bold tracking-tight text-maroon-dominant dark:text-white">₹{taxes.toLocaleString('en-IN')}</span>
      </div>
      <div className="flex justify-between text-xs font-bold tracking-widest text-luxury-text-light/60 dark:text-white/60">
        <span className="uppercase">Shipping</span>
        <span className="text-green-600 dark:text-green-500 uppercase font-black">Complimentary</span>
      </div>
      <div className="pt-6 border-t border-luxury-bg-card dark:border-white/10 flex justify-between items-center">
        <span className="text-maroon-dominant dark:text-gold font-black uppercase text-xs tracking-widest">Estimated Total</span>
        <span className="text-2xl font-sans text-maroon-dominant dark:text-white font-bold tracking-tight">₹{total.toLocaleString('en-IN')}</span>
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
);

export default CartSummary;
