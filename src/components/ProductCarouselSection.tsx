import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import CarouselProductCard from './CarouselProductCard';

interface ProductCarouselSectionProps {
  title: string;
  products: Product[];
  onProductClick: (p: Product) => void;
  showBestsellerBadge?: boolean;
}

const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  title,
  products,
  onProductClick,
  showBestsellerBadge
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden group/section border-t border-maroon-dominant/5 dark:border-white/5">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/30"></div>
              <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">The Elite Selection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
              {title}
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-4 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 border border-maroon-dominant/10 dark:border-white/20 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 md:gap-10 pb-16 pt-4 no-scrollbar scroll-smooth snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start flex-shrink-0">
              <CarouselProductCard
                product={product}
                onClick={onProductClick}
                showBestseller={showBestsellerBadge}
              />
            </div>
          ))}

          <div className="flex-shrink-0 w-[260px] md:w-[300px] snap-start flex flex-col items-center justify-center border-2 border-dashed border-gold/20 rounded-3xl hover:border-gold/50 transition-all duration-700 group/view-all cursor-pointer hover:bg-maroon-dominant active:scale-95 bg-luxury-bg-secondary/30 dark:bg-luxury-dark-card/30 backdrop-blur-sm relative overflow-hidden">
            <div className="flex flex-col items-center gap-6 relative z-10 transition-all duration-500">
              <div className="w-20 h-20 rounded-full bg-white dark:bg-luxury-dark-card flex items-center justify-center group-hover/view-all:bg-transparent group-hover/view-all:border-white/40 border border-gold/10 transition-all duration-500 group-hover/view-all:scale-110 shadow-2xl">
                <ChevronRight className="w-8 h-8 text-maroon-dominant dark:text-white group-hover/view-all:text-white transition-colors" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-maroon-dominant dark:text-gold group-hover/view-all:text-white transition-colors">Catalog View</span>
                <span className="text-[9px] font-serif italic text-maroon-dominant/40 dark:text-white/30 group-hover/view-all:text-white/60">Explore More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarouselSection;