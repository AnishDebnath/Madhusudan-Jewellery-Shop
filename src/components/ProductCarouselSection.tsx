
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
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
            <div className="flex items-center gap-4 group">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                <Sparkles className="w-2.5 h-2.5" /> The Elite Selection
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
              {title}
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
              <div key={`${product.id}-${idx}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
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

      {/* Slide Indicators & Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mt-12">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
            <div className="relative w-48 h-[2px] bg-gold/10 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-500 ease-out"
                style={{
                  width: `${(itemsPerView / products.length) * 100}%`,
                  left: `${((currentIndex % products.length) / products.length) * 100}%`
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

export default ProductCarouselSection;