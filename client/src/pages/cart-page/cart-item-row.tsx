import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemRowProps {
  item: CartItemType;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onProductClick: (product: any) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQty, onRemove, onProductClick }) => (
  <div className="bg-white dark:bg-luxury-dark-card p-6 rounded-3xl shadow-lg border border-transparent dark:border-white/5 flex gap-6 group hover:border-gold/20 transition-all duration-300">
    <div
      className="w-32 h-32 bg-luxury-bg-secondary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0 border border-luxury-bg-card dark:border-white/5 relative cursor-pointer"
      onClick={() => onProductClick(item)}
    >
      <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:opacity-0 transition-opacity" />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-gold text-[9px] font-black uppercase tracking-[0.2em] block mb-2">{item.category}</span>
          <h3
            className="text-xl font-serif text-maroon-dominant dark:text-white tracking-wide leading-none mb-2 cursor-pointer hover:text-gold transition-colors"
            onClick={() => onProductClick(item)}
          >
            {item.name}
          </h3>
          <p className="text-lg font-sans text-maroon-dominant dark:text-gold font-bold tracking-tight">₹{item.price.toLocaleString('en-IN')}</p>
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
);

export default CartItemRow;
