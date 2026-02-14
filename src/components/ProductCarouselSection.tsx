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
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden group/section">
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-maroon-dominant dark:text-white tracking-wider uppercase flex items-center gap-4">
            {title}
            <div className="hidden md:block w-24 h-[1px] bg-gold/30"></div>
          </h2>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all shadow-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all shadow-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-8 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start">
              <CarouselProductCard 
                product={product} 
                onClick={onProductClick}
                showBestseller={showBestsellerBadge}
              />
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[240px] md:w-[280px] snap-start flex items-center justify-center border-2 border-dashed border-gold/10 rounded-sm hover:border-gold/30 transition-colors group/view-all bg-luxury-bg-secondary dark:bg-luxury-dark-card">
            <button className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-luxury-bg-card dark:bg-maroon-dominant flex items-center justify-center group-hover/view-all:bg-gold transition-colors">
                <ChevronRight className="w-6 h-6 text-maroon-dominant dark:text-white group-hover/view-all:text-white" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-luxury-text-light/40 dark:text-luxury-text-darkMuted group-hover/view-all:text-gold">Catalog View</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarouselSection;