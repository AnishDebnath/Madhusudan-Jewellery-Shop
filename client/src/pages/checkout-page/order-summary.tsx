import React from 'react';
import { CartItem } from '../../types';

interface OrderSummaryProps {
  cart: CartItem[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart, total }) => (
  <div className="lg:w-96">
    <div className="bg-white dark:bg-luxury-dark-card p-8 rounded-3xl shadow-xl border border-transparent dark:border-white/5 sticky top-32">
      <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.3em] mb-6 border-b border-luxury-bg-card dark:border-white/10 pb-4">Cart Summary</h4>
      <div className="space-y-5 mb-8 max-h-[300px] overflow-y-auto pr-2">
        {cart.map(i => (
          <div key={i.id} className="flex justify-between text-[11px] font-medium tracking-wide items-center">
            <span className="text-luxury-text-light/70 dark:text-white/70 truncate w-32">{i.name}</span>
            <span className="text-luxury-text-light/50 dark:text-white/50">x{i.quantity}</span>
            <span className="font-sans text-maroon-dominant dark:text-gold font-bold tracking-tight">₹{(i.price * i.quantity).toLocaleString('en-IN')}</span>
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-luxury-bg-card dark:border-white/10 flex justify-between items-center">
        <span className="text-[10px] font-black text-luxury-text-light/40 dark:text-white/40 uppercase tracking-widest">Grand Total</span>
        <span className="text-xl font-sans font-bold text-maroon-dominant dark:text-white tracking-tight">₹{total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  </div>
);

export default OrderSummary;
