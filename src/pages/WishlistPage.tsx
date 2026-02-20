import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface WishlistPageProps {
  wishlist: string[];
  onProductClick: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onRemove: (id: string) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ wishlist, onProductClick, onAddToCart, onRemove }) => {
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
        <div className="w-24 h-24 bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-full flex items-center justify-center shadow-lg mb-8 border border-gold/10 animate-pulse">
          <Heart className="w-10 h-10 text-gold/50" />
        </div>
        <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white mb-4 uppercase tracking-wider">Your wishlist is empty</h2>
        <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic mb-12">Keep track of items you love by adding them to your wishlist.</p>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-maroon-dominant text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all active:scale-95 shadow-xl border border-maroon-border"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-24 transition-colors">
      <div className="container mx-auto px-6 pt-12">
        <h1 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-12 text-center uppercase tracking-widest leading-none">Saved Pieces</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-3xl hover:-translate-y-2">
              <div className="aspect-square bg-luxury-bg-secondary dark:bg-black/20 relative overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 cursor-pointer"
                  onClick={() => onProductClick(product)}
                  loading="lazy"
                />
                <button
                  onClick={() => onRemove(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full text-gold hover:bg-gold hover:text-white transition-all shadow-lg z-10"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="p-6 text-center">
                <span className="text-gold text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">{product.category}</span>
                <h3 className="font-serif text-maroon-dominant dark:text-white text-xl mb-2 truncate group-hover:text-gold transition-colors cursor-pointer" onClick={() => onProductClick(product)}>{product.name}</h3>
                <p className="text-maroon-dominant dark:text-gold font-sans text-xl md:text-2xl font-bold tracking-tight mb-6">₹{product.price.toLocaleString('en-IN')}</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-maroon-dominant text-white py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-md group/btn relative overflow-hidden border border-transparent"
                  >
                    <span className="relative z-10">Move to Bag</span>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
                  </button>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="w-full border border-maroon-dominant/20 dark:border-white/20 text-maroon-dominant dark:text-white/60 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;