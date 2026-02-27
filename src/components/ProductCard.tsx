
import React from 'react';
import { Product } from '../types';
import { Heart, ShieldCheck, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
  showBestseller?: boolean;
  showNewArrival?: boolean;
  onAddToCart?: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  onToggleWishlist,
  isWishlisted,
  showBestseller,
  showNewArrival,
  onAddToCart
}) => {
  const isDiscounted = true; // Simulating a discount state as requested
  const discountPercentage = 15;
  const mrp = isDiscounted ? product.price / (1 - discountPercentage / 100) : product.price;

  const getTag = () => {
    if (showNewArrival || product.isNewArrival) return 'New Launch';
    if (showBestseller || product.isBestSeller) return 'Best Seller';
    if (isDiscounted) return `${discountPercentage}% OFF`;
    return null;
  };

  const tag = getTag();

  return (
    <div className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 hover:border-gold/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-[2rem] h-full flex flex-col p-3 md:p-4">
      {/* Image Container */}
      <div
        className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary rounded-2xl mb-4"
        onClick={() => onClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Top Left Tags */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {tag && (
            <div className={`${tag.includes('OFF') ? 'bg-red-600 text-white' : 'bg-gold/90 text-maroon-dominant'} backdrop-blur-sm text-[8px] px-3 py-1.5 uppercase tracking-[0.3em] font-black shadow-lg rounded-full`}>
              {tag}
            </div>
          )}
        </div>

        {/* Top Right Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-3 right-3 w-9 h-9 backdrop-blur-md border rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 z-20 ${isWishlisted ? 'bg-gold text-white border-gold' : 'bg-white/90 dark:bg-luxury-dark-card/90 text-maroon-dominant dark:text-white border-white/20 dark:border-white/10 hover:bg-gold/20'}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Info Container */}
      <div className="text-center flex-1 flex flex-col justify-between" onClick={() => onClick(product)}>
        <div>
          {/* Category */}
          <span className="text-[9px] text-gold uppercase tracking-[0.4em] font-black mb-1 block">
            {product.category} {product.karat || product.diamondCarat}
          </span>

          {/* Name */}
          <h3 className="font-serif text-maroon-dominant dark:text-white text-base md:text-lg lg:text-lg xl:text-lg mb-1 truncate group-hover:text-gold transition-colors">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-maroon-dominant dark:text-gold font-sans text-base md:text-lg lg:text-lg xl:text-lg font-bold tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {isDiscounted && (
              <span className="font-sans text-[11px] text-maroon-dominant/30 dark:text-white/20 line-through font-bold">
                ₹{Math.round(mrp).toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Reviews & BIS Details Block */}
        <div className="mt-2 pt-2 border-t border-luxury-bg-card dark:border-white/5 flex justify-center items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'fill-gold text-gold gold-glow' : 'fill-gold/10 text-gold/10'}`} />
              ))}
            </div>
            <span className="text-[9px] text-maroon-dominant/40 dark:text-white/30 font-black">(24)</span>
          </div>

          <div className="w-[1px] h-3 bg-maroon-dominant/10 dark:bg-white/10"></div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 border border-maroon-dominant/10 dark:border-white/10 rounded-sm">
            <ShieldCheck className="w-2.5 h-2.5 text-gold" />
            <span className="text-[8px] text-maroon-dominant/60 dark:text-white/60 uppercase tracking-[0.2em] font-black italic whitespace-nowrap">BIS Hallmark</span>
          </div>
        </div>

        {/* Add to Bag Button */}
        {onAddToCart && (
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-full mt-4 bg-maroon-dominant text-white py-2 md:py-3 rounded-full text-xs md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-md active:scale-95"
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;