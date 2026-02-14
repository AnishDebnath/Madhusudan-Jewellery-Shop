import React from 'react';
import { Product } from '../types';
import { Heart, Maximize2, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  onARTryOn: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onARTryOn }) => {
  return (
    <div className="group relative bg-luxury-bg-secondary dark:bg-luxury-dark-card border border-luxury-bg-card dark:border-maroon-border overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-sm mobile-card-shadow">
      <div className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onClick={() => onClick(product)}
        />
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 bg-maroon-dominant text-white text-[10px] tracking-widest px-3 py-1 uppercase font-bold shadow-sm border border-maroon-border">New</span>
        )}
        {product.arSupport && (
          <span className="absolute top-4 right-4 bg-white/60 dark:bg-maroon-dominant/60 backdrop-blur-md text-gold border border-gold/30 text-[10px] tracking-widest px-3 py-1 uppercase font-bold flex items-center gap-1 shadow-sm">
            <Maximize2 className="w-3 h-3" /> AR Try-On
          </span>
        )}
        
        <div className="absolute inset-0 bg-black/5 dark:bg-black/40 transition-colors duration-300 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button 
            onClick={(e) => { e.stopPropagation(); onClick(product); }}
            className="bg-white text-maroon-dominant text-[10px] tracking-[0.2em] px-8 py-3 w-48 transition-all duration-300 translate-y-4 group-hover:translate-y-0 uppercase font-bold hover:bg-gold hover:text-white hover:scale-105 active:scale-95 shadow-lg"
          >
            Quick View
          </button>
          {product.arSupport && (
            <button 
              onClick={(e) => { e.stopPropagation(); onARTryOn(product); }}
              className="bg-maroon-dominant text-white text-[10px] tracking-[0.2em] px-8 py-3 w-48 transition-all duration-300 translate-y-4 group-hover:translate-y-0 uppercase font-bold hover:bg-gold hover:text-white hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg border border-maroon-border"
            >
              <Sparkles className="w-3 h-3" /> Virtual Try-On
            </button>
          )}
        </div>
      </div>

      <div className="p-6 text-center" onClick={() => onClick(product)}>
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{product.category} {product.karat || product.diamondCarat}</span>
          <Heart className="w-4 h-4 text-luxury-text-light/20 dark:text-luxury-text-dark/20 hover:text-red-500 transition-all duration-300 hover:scale-125" />
        </div>
        <h3 className="font-serif text-luxury-text-light dark:text-luxury-text-dark text-lg mb-2 truncate group-hover:text-gold dark:group-hover:text-gold transition-colors">{product.name}</h3>
        <p className="text-gold font-bold text-sm gold-glow font-sans">₹{product.price.toLocaleString('en-IN')}</p>
        <div className="mt-4 pt-4 border-t border-luxury-bg-card dark:border-maroon-border flex justify-center items-center gap-4 text-[10px] text-luxury-text-light/40 dark:text-luxury-text-dark/40 uppercase tracking-widest font-medium">
          <span>BIS HALLMARK</span>
          <span className="w-1 h-1 bg-gold rounded-full"></span>
          <span>CERTIFIED</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;