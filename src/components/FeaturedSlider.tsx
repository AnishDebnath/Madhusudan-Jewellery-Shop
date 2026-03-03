
import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import CarouselProductCard from './CarouselProductCard';


interface FeaturedSliderProps {
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
  onAddToCart?: (p: Product) => void;
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ onProductClick, onToggleWishlist, wishlist, onNavigate, onAddToCart }) => {
  const featured = PRODUCTS.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(6);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerView = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    if (windowWidth < 1280) return 3;
    return 4;
  };

  const itemsPerView = getItemsPerView();

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setIsTransitioning(false);
    if (currentIndex >= featured.length * 2) {
      setCurrentIndex(currentIndex - featured.length);
    } else if (currentIndex < featured.length) {
      setCurrentIndex(currentIndex + featured.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const displayFeatured = [...featured, ...featured, ...featured];

  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-4 group">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                <Sparkles className="w-2.5 h-2.5" /> The Boutique Highlights
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white leading-tight uppercase tracking-tight">
              Curated <span className="italic text-gold gold-glow font-light">Masterpieces</span>
            </h2>
          </div>

          {/* Desktop nav buttons */}
          <div className="hidden xl:flex gap-3">
            <button onClick={prevSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button onClick={nextSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : 'transition-none'}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView})))`,
            }}
          >
            {displayFeatured.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <CarouselProductCard
                  product={product}
                  onClick={onProductClick}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mt-12">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
            <div className="relative w-48 h-[2px] bg-gold/10 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-500 ease-out"
                style={{
                  width: `${(itemsPerView / featured.length) * 100}%`,
                  left: `${((currentIndex % featured.length) / featured.length) * 100}%`
                }}
              />
            </div>
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          </div>

          {/* Mobile/Tablet nav buttons (includes 1024px) */}
          <div className="flex xl:hidden items-center gap-6">
            <button onClick={prevSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button onClick={nextSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => onNavigate('category', 'All')}
            className="w-fit px-8 py-3.5 bg-maroon-dominant text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant active:scale-95 flex items-center gap-3 whitespace-nowrap"
          >
            EXPLORE ALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
