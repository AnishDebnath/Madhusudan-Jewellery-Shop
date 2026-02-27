
import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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

  const handleTransitionEnd = () => {
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
    <section className="relative py-12 md:py-16 overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-5">
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black">The Boutique Highlights</span>
              <div className="w-16 h-[1px] bg-gold/20"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white leading-tight uppercase tracking-tight">
              Curated <span className="italic text-gold gold-glow font-light">Masterpieces</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Previous masterpiece"
            >
              <ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Next masterpiece"
            >
              <ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 overflow-visible">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {displayFeatured.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 flex-shrink-0 px-4"
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
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {featured.map((_, idx) => {
              const isActive = (currentIndex % featured.length) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(featured.length + idx);
                  }}
                  className="group relative py-3"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-1000 rounded-full ${isActive ? 'w-16 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-5 bg-gold/20 hover:bg-gold/50'}`} />
                </button>
              );
            })}
          </div>
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onNavigate('category', 'All')}
            className="group relative px-10 py-4 bg-maroon-dominant text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant shadow-2xl active:scale-95 flex items-center gap-3"
          >
            Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
