import React from 'react';
import { Product } from '../types';
import { Heart, Maximize2, Sparkles, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  onARTryOn: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onARTryOn }) => {
  return (
    <div className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 hover:border-gold/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-3xl h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-luxury-bg-secondary dark:bg-black/20 rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          onClick={() => onClick(product)}
        />
        {product.isNewArrival && (
          <span className="inline-block absolute top-4 left-4 bg-maroon-dominant text-white text-[9px] tracking-widest px-3 py-1.5 uppercase font-black shadow-lg rounded-full animate-in fade-in slide-in-from-left-2 whitespace-nowrap">New</span>
        )}

        {/* Wishlist Button - Top Right Corner */}
        <button
          onClick={(e) => { e.stopPropagation(); /* Add to wishlist logic here */ }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-luxury-dark-card/90 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center text-maroon-dominant dark:text-white hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 z-20"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 text-center flex-1 flex flex-col justify-between" onClick={() => onClick(product)}>
        <div>
          <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-black mb-2 block">{product.category} {product.karat || product.diamondCarat}</span>
          <h3 className="font-serif text-maroon-dominant dark:text-white text-lg mb-2 truncate group-hover:text-gold transition-colors">{product.name}</h3>
          <p className="text-maroon-dominant dark:text-gold font-bold text-base font-serif">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-luxury-bg-card dark:border-white/5 flex justify-center items-center gap-4 text-[9px] text-luxury-text-light/40 dark:text-white/40 uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> BIS Hallmark</span>
          <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
          <span>Certified</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;