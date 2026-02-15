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
          <span className="absolute top-4 left-4 bg-maroon-dominant text-white text-[9px] tracking-widest px-3 py-1.5 uppercase font-black shadow-lg rounded-full animate-in fade-in slide-in-from-left-2">New</span>
        )}
        {product.arSupport && (
          <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-maroon-dominant dark:text-gold border border-white/20 text-[9px] tracking-widest px-3 py-1.5 uppercase font-black flex items-center gap-1 shadow-lg rounded-full animate-in fade-in slide-in-from-right-2">
            <Maximize2 className="w-3 h-3" /> AR View
          </span>
        )}

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); onClick(product); }}
            className="bg-white text-maroon-dominant text-[10px] tracking-[0.2em] px-8 py-3.5 w-48 transition-all duration-500 scale-90 group-hover:scale-100 uppercase font-black hover:bg-gold hover:text-maroon-dominant shadow-xl rounded-full transform active:scale-95"
          >
            Quick View
          </button>
          {product.arSupport && (
            <button
              onClick={(e) => { e.stopPropagation(); onARTryOn(product); }}
              className="bg-maroon-dominant/90 backdrop-blur-md text-white text-[10px] tracking-[0.2em] px-8 py-3.5 w-48 transition-all duration-500 scale-90 group-hover:scale-100 delay-75 uppercase font-black hover:bg-gold hover:text-maroon-dominant flex items-center justify-center gap-2 shadow-xl border border-white/10 rounded-full transform active:scale-95"
            >
              <Sparkles className="w-3 h-3" /> Virtual Try-On
            </button>
          )}
        </div>
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