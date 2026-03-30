import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data';
import { Product } from '../../types';
import ProductCarouselSection, { ProductCarouselRef } from '../../components/ui/product-carousel-section';

interface FeaturedSliderProps {
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
  onAddToCart?: (p: Product) => void;
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({
  onProductClick,
  onToggleWishlist,
  wishlist,
  onNavigate,
  onAddToCart
}) => {
  const featuredProducts = PRODUCTS.filter(p => p.isBestSeller).slice(0, 8); // Showing selected bestsellers as featured
  const carouselRef = useRef<ProductCarouselRef>(null);

  return (
    <section className="bg-luxury-bg-secondary dark:bg-luxury-dark-primary py-14 border-t border-maroon-dominant/5 dark:border-white/5 transition-colors overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-4 group justify-center md:justify-start">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                <Sparkles className="w-2.5 h-2.5" /> The Boutique Highlights
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight text-center md:text-left">
              Curated Masterpieces
            </h2>
          </div>

          {/* Desktop nav buttons (connected via Ref) - visible from 1024px up */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => carouselRef.current?.prev()}
              className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button
              onClick={() => carouselRef.current?.next()}
              className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <ProductCarouselSection
        ref={carouselRef}
        products={featuredProducts}
        onProductClick={onProductClick}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
        onNavigate={onNavigate}
        onAddToCart={onAddToCart}
        sectionClassName="bg-transparent overflow-visible"
      />
    </section>
  );
};

export default FeaturedSlider;
