import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface EmptyCartProps {
  onShopMore: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onShopMore }) => (
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

export default EmptyCart;
