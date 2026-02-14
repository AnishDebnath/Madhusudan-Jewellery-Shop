import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface WishlistPageProps {
  wishlist: string[];
  onProductClick: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ wishlist, onProductClick, onAddToCart }) => {
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
        <div className="w-24 h-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary rounded-full flex items-center justify-center shadow-xl mb-8 border border-gold/10">
          <Heart className="w-10 h-10 text-gold opacity-30" />
        </div>
        <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white mb-4 uppercase tracking-widest">Your wishlist is empty</h2>
        <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic mb-12">Keep track of items you love by adding them to your wishlist.</p>
        <button 
          onClick={() => window.scrollTo(0, 0)}
          className="bg-maroon-dominant text-white px-12 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-xl"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-24 transition-colors">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-12 text-center uppercase tracking-widest">Saved Pieces</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <div key={product.id} className="group relative bg-luxury-bg-secondary dark:bg-luxury-dark-card border border-luxury-bg-card dark:border-maroon-border/20 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-sm">
              <div className="aspect-square bg-luxury-bg-card dark:bg-luxury-dark-secondary relative overflow-hidden">
                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-maroon-dominant dark:text-white text-lg mb-2 truncate">{product.name}</h3>
                <p className="text-gold font-bold mb-6">₹{product.price.toLocaleString('en-IN')}</p>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-maroon-dominant text-white py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-gold transition-all"
                  >
                    Move to Bag
                  </button>
                  <button 
                    onClick={() => onProductClick(product)}
                    className="w-full border border-maroon-dominant dark:border-gold/30 text-maroon-dominant dark:text-gold py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-maroon-dominant hover:text-white transition-all"
                  >
                    View Details
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