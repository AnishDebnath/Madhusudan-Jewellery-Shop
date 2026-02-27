
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import CarouselProductCard from './CarouselProductCard';

interface ProductCarouselSectionProps {
  title: string;
  products: Product[];
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
  showBestsellerBadge?: boolean;
  onAddToCart?: (p: Product) => void;
}

const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  title,
  products,
  onProductClick,
  onToggleWishlist,
  wishlist,
  onNavigate,
  showBestsellerBadge,
  onAddToCart
}) => {
  const [currentIndex, setCurrentIndex] = useState(products.length);
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
    if (isTransitioning || products.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning, products.length]);

  const prevSlide = () => {
    if (isTransitioning || products.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= products.length * 2) {
      setCurrentIndex(currentIndex - products.length);
    } else if (currentIndex < products.length) {
      setCurrentIndex(currentIndex + products.length);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, products.length]);

  const displayProducts = [...products, ...products, ...products];

  if (products.length === 0) return null;

  return (
    <section className="py-14 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors overflow-hidden group/section border-t border-maroon-dominant/5 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/30"></div>
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black block gold-glow">The Elite Selection</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
              {title}
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="group p-3 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 overflow-visible">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {displayProducts.map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                <CarouselProductCard
                  product={product}
                  onClick={onProductClick}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                  showBestseller={showBestsellerBadge}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mt-12">
        <div className="flex justify-center items-center gap-6">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {products.map((_, idx) => {
              const isActive = (currentIndex % products.length) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(products.length + idx);
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
      </div>
    </section>
  );
};

export default ProductCarouselSection;