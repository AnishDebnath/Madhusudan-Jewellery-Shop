
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import CarouselProductCard from './CarouselProductCard';
import necklace12 from '../assets/jewellery/necklace/nacklace (12).jpg';
import necklace13 from '../assets/jewellery/necklace/nacklace (13).jpg';
import necklace14 from '../assets/jewellery/necklace/nacklace (14).jpg';
import necklace15 from '../assets/jewellery/necklace/nacklace (15).jpg';
import vivaahHero from '../assets/models/models (2).jpg';

const VIVAAH_PRODUCTS = [
  {
    id: 'v1',
    name: 'Heritage Polki Choker Set',
    image: necklace12,
    price: 450000,
    category: 'Bridal'
  },
  {
    id: 'v2',
    name: 'Antique Gold Temple Set',
    image: necklace13,
    price: 720000,
    category: 'Gold'
  },
  {
    id: 'v3',
    name: 'Kundan Meena Bridal Haar',
    image: necklace14,
    price: 580000,
    category: 'Bridal'
  },
  {
    id: 'v4',
    name: 'Rose Gold Diamond Maang Tikka',
    image: necklace15,
    price: 125000,
    category: 'Diamond'
  }
];

interface VivaahCollectionProps {
  onNavigate: (view: string, data?: any) => void;
  onProductClick: (p: any) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onAddToCart?: (p: any) => void;
}

const VivaahCollection: React.FC<VivaahCollectionProps> = ({ onNavigate, onProductClick, onToggleWishlist, wishlist, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(VIVAAH_PRODUCTS.length);
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
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= VIVAAH_PRODUCTS.length * 2) {
      setCurrentIndex(currentIndex - VIVAAH_PRODUCTS.length);
    } else if (currentIndex < VIVAAH_PRODUCTS.length) {
      setCurrentIndex(currentIndex + VIVAAH_PRODUCTS.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const displayProducts = [...VIVAAH_PRODUCTS, ...VIVAAH_PRODUCTS, ...VIVAAH_PRODUCTS];

  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-16 overflow-hidden border-t border-gold/10 transition-colors relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">

        {/* Large Collection Banner */}
        <div className="relative h-[45vh] md:h-[60vh] mb-12 rounded-[3rem] overflow-hidden group shadow-2xl border border-gold/10">
          <img
            src={vivaahHero}
            alt="The Wedding Masterpieces"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant/80 via-maroon-dominant/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white max-w-3xl">
            <span className="text-gold text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-black mb-6 gold-glow transition-all duration-700 group-hover:tracking-[0.8em]">Exclusive Wedding Couture</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight tracking-tight">The Wedding <br /><span className="italic text-gold gold-glow">Masterpieces</span></h2>
            <div className="w-24 h-[1px] bg-gold/50 mb-10 transition-all duration-700 group-hover:w-40"></div>
            <p className="text-sm md:text-base lg:text-lg xl:text-lg font-light italic text-white/80 leading-relaxed max-w-xl mb-12 border-l border-gold/30 pl-6">
              "Handcrafted masterpieces designed to crown your most sacred moments with timeless elegance."
            </p>
            <button
              onClick={() => onNavigate('category', 'Bridal')}
              className="w-fit px-10 py-4 bg-gold hover:bg-white text-maroon-dominant font-black rounded-full uppercase tracking-[0.3em] text-[10px] transition-all duration-500 shadow-xl flex items-center gap-3 active:scale-95 group/btn"
            >
              Discover Heritage <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Header Text - Restored to centered position */}
        <div className="text-center mb-10 relative">
          <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white mb-3 uppercase tracking-tight leading-tight">The Wedding Masterpieces</h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold/60 gold-glow">Curated for the Modern Bride</p>

          {/* Navigation Buttons integrated into the center header row but floated to the sides if needed or keeping them for manual control */}
          <div className="flex items-center justify-center gap-4 mt-8">
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

      {/* Product Slider Viewport */}
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
                  product={product as any}
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

      {/* Slide Indicators */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mt-12 mb-16">
        <div className="flex justify-center items-center gap-6">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {VIVAAH_PRODUCTS.map((_, idx) => {
              const isActive = (currentIndex % VIVAAH_PRODUCTS.length) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(VIVAAH_PRODUCTS.length + idx);
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

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        {/* Centered CTA */}
        <div className="flex justify-center pb-12">
          <button
            onClick={() => onNavigate('category', 'Bridal')}
            className="group relative px-10 py-4 bg-maroon-dominant text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant hover:scale-105 shadow-2xl active:scale-95 border border-white/10"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore The Full Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VivaahCollection;