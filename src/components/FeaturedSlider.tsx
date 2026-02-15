
import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Heart } from 'lucide-react';


interface FeaturedSliderProps {
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ onProductClick, onToggleWishlist, wishlist }) => {
  const featured = PRODUCTS.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewState, setViewState] = useState({ isMobile: false, isTablet: false });

  useEffect(() => {
    const handleResize = () => {
      setViewState({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1280
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  }, [featured.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-maroon-dominant/5 rounded-full blur-[180px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-5">
              <span className="text-gold text-[9px] tracking-[0.6em] uppercase font-black">The Boutique Highlights</span>
              <div className="w-16 h-[1px] bg-gold/20"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white leading-tight uppercase tracking-tight">
              Curated <span className="italic text-gold gold-glow">Masterpieces</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Previous masterpiece"
            >
              <ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Next masterpiece"
            >
              <ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{
              transform: `translateX(-${currentIndex * (100 / (viewState.isMobile ? 1 : viewState.isTablet ? 2 : 4))}%)`
            }}
          >
            {featured.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4"
              >
                <div className="group relative bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-[2rem] p-4 md:p-5 border border-luxury-bg-card dark:border-maroon-border/20 hover:border-gold/40 transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="aspect-square mb-6 overflow-hidden relative bg-luxury-bg-card dark:bg-luxury-dark-secondary rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Wishlist Button - Top Right Corner of Image */}
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
                      className={`absolute top-4 right-4 z-30 w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 ${wishlist.includes(product.id) ? 'bg-gold text-white border-gold' : 'bg-white/90 dark:bg-luxury-dark-card/90 text-maroon-dominant dark:text-white border-white/20 dark:border-white/10 hover:bg-gold/20'}`}
                      aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </button>

                    {product.isNewArrival && (
                      <div className="absolute top-0 left-0 bg-gold/90 backdrop-blur-sm text-maroon-dominant text-[8px] px-4 py-2 uppercase tracking-[0.3em] font-black shadow-lg rounded-full mt-3 ml-3">
                        New Launch
                      </div>
                    )}
                  </div>

                  <div className="text-center relative space-y-2 px-2">
                    <span className="text-gold/80 text-[8px] font-black uppercase tracking-[0.4em] block">Artisan's Choice</span>
                    <h4 className="font-serif text-maroon-dominant dark:text-white text-lg md:text-xl mb-2 line-clamp-1 group-hover:text-gold transition-colors duration-500 tracking-wide">
                      {product.name}
                    </h4>

                    <div className="flex items-center justify-center gap-2 mb-5">
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-gold" />)}
                      </div>
                      <span className="text-[8px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-[0.25em] font-black">(BIS Hallmark)</span>
                    </div>

                    <div className="relative mb-4">
                      <p className="text-maroon-dominant dark:text-gold font-sans text-xl md:text-2xl font-bold tracking-tight">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <button
                      onClick={() => onProductClick(product)}
                      className="relative w-full py-3.5 border border-maroon-dominant/10 dark:border-gold/20 text-maroon-dominant dark:text-gold text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden group/btn transition-all duration-500 hover:text-white dark:hover:text-maroon-dominant rounded-full hover:border-transparent"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        EXPLORE THE CRAFT <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-maroon-dominant dark:bg-gold transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {featured.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="group relative py-3"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className={`h-[2px] transition-all duration-1000 rounded-full ${currentIndex === idx ? 'w-16 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-5 bg-gold/20 hover:bg-gold/50'}`} />
              </button>
            ))}
          </div>
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
