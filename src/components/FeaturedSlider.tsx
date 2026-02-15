
import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Sparkles } from 'lucide-react';

const FeaturedSlider: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  }, [featured.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-maroon-dominant/5 rounded-full blur-[180px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-5">
              <span className="text-gold text-[10px] tracking-[0.7em] uppercase font-black">The Boutique Highlights</span>
              <div className="w-20 h-[1px] bg-gold/20"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-maroon-dominant dark:text-white leading-tight uppercase tracking-tight">
              Curated <span className="italic text-gold gold-glow">Masterpieces</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="group p-5 bg-luxury-bg-secondary dark:bg-maroon-dominant border border-luxury-bg-card dark:border-maroon-border/40 rounded-full hover:bg-gold transition-all duration-500 shadow-2xl hover:scale-110"
              aria-label="Previous masterpiece"
            >
              <ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="group p-5 bg-luxury-bg-secondary dark:bg-maroon-dominant border border-luxury-bg-card dark:border-maroon-border/40 rounded-full hover:bg-gold transition-all duration-500 shadow-2xl hover:scale-110"
              aria-label="Next masterpiece"
            >
              <ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)` }}
          >
            {featured.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/3 flex-shrink-0 px-5"
              >
                <div className="group relative bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-3xl p-6 md:p-10 border border-luxury-bg-card dark:border-maroon-border/20 hover:border-gold/40 transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="absolute top-8 right-8 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-gold/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110">
                    <Sparkles className="w-6 h-6 text-gold animate-pulse gold-glow" />
                  </div>

                  <div className="aspect-square mb-10 overflow-hidden relative bg-luxury-bg-card dark:bg-luxury-dark-secondary rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                    {product.isNewArrival && (
                      <div className="absolute top-0 left-0 bg-gold/90 backdrop-blur-sm text-maroon-dominant text-[9px] px-5 py-2.5 uppercase tracking-[0.4em] font-black shadow-lg rounded-full mt-4 ml-4">
                        New Launch
                      </div>
                    )}
                  </div>

                  <div className="text-center relative space-y-3 px-4">
                    <span className="text-gold/80 text-[9px] font-black uppercase tracking-[0.5em] block">Artisan's Choice</span>
                    <h4 className="font-serif text-maroon-dominant dark:text-white text-3xl mb-4 line-clamp-1 group-hover:text-gold transition-colors duration-500 tracking-wide">
                      {product.name}
                    </h4>

                    <div className="flex items-center justify-center gap-2 mb-8">
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                      </div>
                      <span className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-[0.3em] font-black">(BIS Hallmark)</span>
                    </div>

                    <div className="relative mb-8">
                      <p className="text-maroon-dominant dark:text-gold font-sans text-4xl font-bold tracking-tight">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <button className="relative w-full py-4 border border-maroon-dominant/10 dark:border-gold/20 text-maroon-dominant dark:text-gold text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden group/btn transition-all duration-500 hover:text-white dark:hover:text-maroon-dominant rounded-full hover:border-transparent">
                      <span className="relative z-10 flex items-center justify-center gap-3">
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

        <div className="flex justify-center items-center gap-6 mt-20">
          <div className="h-[1px] w-24 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {featured.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="group relative py-4"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className={`h-[2px] transition-all duration-1000 rounded-full ${currentIndex === idx ? 'w-20 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-6 bg-gold/20 hover:bg-gold/50'}`} />
              </button>
            ))}
          </div>
          <div className="h-[1px] w-24 bg-gold/10 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
