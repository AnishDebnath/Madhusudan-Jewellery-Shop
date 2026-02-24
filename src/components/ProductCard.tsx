import React from 'react';
import { Product } from '../types';
import { Heart, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
  onAddToCart?: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onToggleWishlist, isWishlisted, onAddToCart }) => {
  return (
    <div className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 hover:border-gold/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-[2rem] h-full flex flex-col p-4 md:p-5">
      <div className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary rounded-2xl mb-6">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          onClick={() => onClick(product)}
        />
        {product.isNewArrival && (
          <div className="absolute top-3 left-3 bg-gold/90 backdrop-blur-sm text-maroon-dominant text-[8px] px-4 py-2 uppercase tracking-[0.3em] font-black shadow-lg rounded-full">
            New Launch
          </div>
        )}

        {/* Wishlist Button - Top Right Corner */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-3 right-3 w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 z-20 ${isWishlisted ? 'bg-gold text-white border-gold' : 'bg-white/90 dark:bg-luxury-dark-card/90 text-maroon-dominant dark:text-white border-white/20 dark:border-white/10 hover:bg-gold/20'}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-2 text-center flex-1 flex flex-col justify-between" onClick={() => onClick(product)}>
        <div>
          <span className="text-[10px] md:text-[11px] text-gold uppercase tracking-[0.4em] font-black mb-3 block">{product.category} {product.karat || product.diamondCarat}</span>
          <h3 className="font-serif text-maroon-dominant dark:text-white text-lg md:text-xl mb-2 truncate group-hover:text-gold transition-colors">{product.name}</h3>
          <p className="text-maroon-dominant dark:text-gold font-sans text-xl md:text-2xl font-bold tracking-tight mt-1">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-luxury-bg-card dark:border-white/5 flex justify-center items-center gap-4 text-[9px] text-luxury-text-light/40 dark:text-white/40 uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> BIS Hallmark</span>
          <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
          <span>Certified</span>
        </div>
        {onAddToCart && (
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-full mt-4 bg-maroon-dominant text-white py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-md active:scale-95"
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;