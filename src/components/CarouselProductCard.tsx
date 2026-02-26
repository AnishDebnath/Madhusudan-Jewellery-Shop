import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface CarouselProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
  showBestseller?: boolean;
  showNewArrival?: boolean;
  onAddToCart?: (p: Product) => void;
}

const CarouselProductCard: React.FC<CarouselProductCardProps> = ({
  product,
  onClick,
  onToggleWishlist,
  isWishlisted,
  showBestseller,
  showNewArrival,
  onAddToCart
}) => {
  const mrp = product.price * 1.15;

  const getOfferBadge = () => {
    if (product.category === 'Gold') return 'Flat ₹100 off on Gold Rate';
    if (product.category === 'Diamond' || product.category === 'Bridal') return 'Flat 20% off on Making';
    return null;
  };

  const offer = getOfferBadge();

  return (
    <div className="flex-shrink-0 w-full bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group cursor-pointer p-3 md:p-4 transition-all duration-700 rounded-[2rem] hover:border-gold/20 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-black/20 mb-3 rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          onClick={() => onClick(product)}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none z-10">
          {showNewArrival && (
            <div className="bg-gold/90 backdrop-blur-sm text-maroon-dominant text-[8px] px-3 py-1.5 uppercase tracking-[0.3em] font-black shadow-lg rounded-full">
              New Launch
            </div>
          )}
          {offer && !showNewArrival && (
            <span className="inline-flex bg-white dark:bg-maroon-dominant/90 text-maroon-dominant dark:text-gold border border-gold/20 text-[8px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg backdrop-blur-md whitespace-nowrap">
              {offer}
            </span>
          )}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-3 right-3 w-9 h-9 backdrop-blur-md border rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 z-20 ${isWishlisted ? 'bg-gold text-white border-gold' : 'bg-white/90 dark:bg-luxury-dark-card/90 text-maroon-dominant dark:text-white border-white/20 dark:border-white/10 hover:bg-gold/20'}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Info */}
      <div className="px-1 flex-1 flex flex-col justify-between" onClick={() => onClick(product)}>
        <div>
          <span className="text-[9px] text-gold uppercase tracking-[0.4em] font-black mb-1 block">{product.category} {product.karat || product.diamondCarat}</span>
          <h3 className="text-base md:text-lg lg:text-lg xl:text-lg font-serif text-maroon-dominant dark:text-white mb-2 truncate group-hover:text-gold transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-maroon-dominant dark:text-gold font-sans text-base md:text-lg lg:text-lg xl:text-lg font-bold tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="font-sans text-[11px] text-maroon-dominant/30 dark:text-white/20 line-through font-bold">
              ₹{Math.round(mrp).toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-luxury-bg-card dark:border-white/5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'fill-gold text-gold gold-glow' : 'fill-gold/10 text-gold/10'}`} />
            ))}
          </div>
          <span className="text-[9px] text-maroon-dominant/40 dark:text-white/30 uppercase tracking-[0.2em] font-black">24 Reviews</span>
        </div>

        {onAddToCart && (
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-full mt-3 bg-maroon-dominant text-white py-2 md:py-2.5 rounded-full text-xs md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-md active:scale-95"
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default CarouselProductCard;