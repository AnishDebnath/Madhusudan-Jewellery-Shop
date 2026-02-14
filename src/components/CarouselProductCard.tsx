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
    if (product.category === 'Diamond' || product.category === 'Bridal') return 'Flat 25% off on Making Charges';
    return null;
  };

  const offer = getOfferBadge();

  return (
    <div className="flex-shrink-0 w-[240px] md:w-[280px] bg-luxury-bg-secondary dark:bg-luxury-dark-card group cursor-pointer p-2 transition-all duration-300 rounded-sm border border-luxury-bg-card dark:border-maroon-border/20 shadow-sm hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary mb-4 rounded-sm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onClick={() => onClick(product)}
        />
        
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none">
          {showBestseller && (
            <span className="bg-red-600 text-white text-[8px] font-black tracking-widest px-2 py-0.5 uppercase rounded-sm shadow-sm">
              BESTSELLER
            </span>
          )}
          {showNewArrival && (
            <span className="bg-maroon-dominant text-white text-[8px] font-black tracking-widest px-2 py-0.5 uppercase rounded-sm shadow-sm">
              NEW
            </span>
          )}
          {offer && (
            <span className="bg-white/90 backdrop-blur-md border border-gold/20 text-maroon-dominant text-[8px] font-black px-2 py-0.5 uppercase tracking-tighter rounded-sm shadow-sm">
              {offer}
            </span>
          )}
        </div>

        <button className="absolute top-2 right-2 p-1.5 bg-white/50 backdrop-blur-md rounded-full text-luxury-text-light/40 hover:text-red-500 hover:bg-white transition-all">
          <Heart className="w-4 h-4" />
        </button>

        <button className="absolute bottom-4 right-4 p-3 bg-maroon-dominant text-white rounded-full shadow-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      <div className="px-1" onClick={() => onClick(product)}>
        <h3 className="text-sm font-sans font-bold text-luxury-text-light dark:text-white mb-1 line-clamp-2 min-h-[40px] leading-snug group-hover:text-maroon-dominant dark:group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-3">
          <span className="text-base font-bold text-maroon-dominant dark:text-gold">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-luxury-text-light/40 dark:text-luxury-text-darkMuted line-through">
            ₹{Math.round(mrp).toLocaleString('en-IN')}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'fill-gold text-gold' : 'fill-luxury-bg-card text-luxury-bg-card'}`} />
          ))}
          <span className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted ml-1 uppercase tracking-widest font-black">(24 Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselProductCard;