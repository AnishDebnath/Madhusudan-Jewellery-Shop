import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface CarouselProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
  showBestseller?: boolean;
  showNewArrival?: boolean;
}

const CarouselProductCard: React.FC<CarouselProductCardProps> = ({
  product,
  onClick,
  showBestseller,
  showNewArrival
}) => {
  const mrp = product.price * 1.15;

  const getOfferBadge = () => {
    if (product.category === 'Gold') return 'Flat ₹100 off on Gold Rate';
    if (product.category === 'Diamond' || product.category === 'Bridal') return 'Flat 20% off on Making';
    return null;
  };

  const offer = getOfferBadge();

  return (
    <div className="flex-shrink-0 w-[260px] md:w-[300px] bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group cursor-pointer p-4 transition-all duration-700 rounded-3xl hover:border-gold/20 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-luxury-bg-secondary dark:bg-black/20 mb-6 rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          onClick={() => onClick(product)}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-none z-10">
          {showBestseller && (
            <span className="bg-red-600 text-white text-[8px] font-black tracking-[0.2em] px-3 py-1.5 uppercase rounded-full shadow-lg animate-in fade-in slide-in-from-left-2 transition-all">
              Bestseller
            </span>
          )}
          {showNewArrival && (
            <span className="bg-maroon-dominant text-white text-[8px] font-black tracking-[0.2em] px-3 py-1.5 uppercase rounded-full shadow-lg animate-in fade-in slide-in-from-left-2 transition-all">
              New
            </span>
          )}
          {offer && (
            <span className="bg-white dark:bg-maroon-dominant/90 text-maroon-dominant dark:text-gold border border-gold/20 text-[8px] font-black px-3 py-1.5 uppercase tracking-widest rounded-full shadow-lg backdrop-blur-md">
              {offer}
            </span>
          )}
        </div>

        <button className="absolute top-3 right-3 p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/50 hover:text-red-500 hover:bg-white hover:scale-110 transition-all shadow-lg border border-white/20 z-10">
          <Heart className="w-4 h-4" />
        </button>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center scale-95 group-hover:scale-100 z-20">
          <button
            onClick={() => onClick(product)}
            className="bg-white text-maroon-dominant text-[10px] font-black tracking-[0.2em] px-8 py-4 rounded-full hover:bg-gold hover:text-maroon-dominant transition-all shadow-2xl active:scale-95"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="px-2 flex-1 flex flex-col justify-between" onClick={() => onClick(product)}>
        <div>
          <span className="text-[9px] text-gold uppercase tracking-[0.3em] font-black mb-2 block">{product.category} {product.karat || product.diamondCarat}</span>
          <h3 className="text-base font-serif text-maroon-dominant dark:text-white mb-3 line-clamp-1 min-h-[1.5rem] group-hover:text-gold transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xl font-black text-maroon-dominant dark:text-gold tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-maroon-dominant/30 dark:text-white/20 line-through Decoration-1 font-bold">
              ₹{Math.round(mrp).toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-luxury-bg-card dark:border-white/5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'fill-gold text-gold gold-glow' : 'fill-gold/10 text-gold/10'}`} />
            ))}
          </div>
          <span className="text-[9px] text-maroon-dominant/40 dark:text-white/30 uppercase tracking-[0.2em] font-black">24 Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselProductCard;