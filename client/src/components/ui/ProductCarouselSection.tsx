import React, { useState, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from '../product/ProductCard';

interface ProductCarouselSectionProps {
  products: Product[];
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
  showBestsellerBadge?: boolean;
  onAddToCart?: (p: Product) => void;
  sectionClassName?: string;
}

export interface ProductCarouselRef {
  next: () => void;
  prev: () => void;
}

const ProductCarouselSection = forwardRef<ProductCarouselRef, ProductCarouselSectionProps>(({
  products,
  onProductClick,
  onToggleWishlist,
  wishlist,
  onNavigate,
  showBestsellerBadge,
  onAddToCart,
  sectionClassName = "py-10 md:py-14 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors overflow-hidden group/section border-t border-maroon-dominant/5 dark:border-white/5"
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useImperativeHandle(ref, () => ({
    next: nextSlide,
    prev: prevSlide
  }));

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
    <section className={sectionClassName}>
      <div className="relative mb-4 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
          {/* Main Slider Track */}
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : 'transition-none'}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView})))`,
            }}
          >
            {displayProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="flex-shrink-0 px-4 sm:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <ProductCard
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

      {/* Slide Indicators & Navigation Buttons (Mobile/Tablet and Dots) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mt-8">
        <div className="flex flex-col items-center gap-8 mb-8">
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

          {/* Mobile/Tablet nav buttons (includes 1024px) - hidden on desktop (lg up) */}
          <div className="flex lg:hidden items-center gap-6">
            <button onClick={prevSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button onClick={nextSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => onNavigate('category', 'All')}
            className="w-fit px-8 py-3.5 bg-maroon-dominant text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap shadow-xl"
          >
            EXPLORE ALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ProductCarouselSection;
