
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
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-12 md:py-16 overflow-hidden border-t border-gold/10 transition-colors relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">

        {/* Large Collection Banner */}
        {/* Collection Grid Banner (Refined like Nikah) */}
        {/* Desktop/Tablet View Banner (Original Full-width) - Restored for other devices */}
        <div className="hidden md:block relative md:h-[60vh] mb-16 rounded-[3rem] overflow-hidden group shadow-2xl border border-gold/10">
          <img
            src={vivaahHero}
            alt="The Wedding Masterpieces"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant/80 via-maroon-dominant/20 to-transparent"></div>
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-center items-start px-12 md:px-20 text-white text-left max-w-3xl">
            <span className="text-gold text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-black mb-6 gold-glow transition-all duration-700 group-hover:tracking-[0.8em]">Exclusive Wedding Couture</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight tracking-tight uppercase">The Wedding <br /><span className="italic text-gold gold-glow">Masterpieces</span></h2>
            <div className="w-24 h-[1px] bg-gold/50 mb-8 transition-all duration-700 group-hover:w-40"></div>
            <p className="text-sm md:text-base lg:text-lg font-light italic text-white/80 leading-relaxed max-w-xl mb-10 border-l border-gold/30 pl-6">
              "Handcrafted masterpieces designed to crown your most sacred moments with timeless elegance."
            </p>
            <button
              onClick={() => onNavigate('category', 'Bridal')}
              className="w-fit px-8 py-3.5 bg-gold hover:bg-white text-maroon-dominant font-black rounded-full uppercase tracking-[0.2em] text-[10px] transition-all duration-500 shadow-xl flex items-center gap-3 active:scale-95 group/btn whitespace-nowrap"
            >
              EXPLORE COLLECTION <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile View Banner (Refined side-by-side style) - Only for mobile */}
        <div className="md:hidden grid grid-cols-1 gap-10 items-center mb-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] group border border-gold/10 shadow-2xl">
            <img
              src={vivaahHero}
              alt="The Wedding Masterpieces"
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-white z-10 px-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-[1px] w-8 bg-gold/40"></div>
                <span className="text-gold text-[8px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                  <Sparkles className="w-2 h-2" /> Divine Union
                </span>
                <div className="h-[1px] w-8 bg-gold/40"></div>
              </div>
              <h2 className="text-xl font-serif italic">Heritage Couture</h2>
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-2">
            <div className="flex items-center justify-center gap-4 mb-4 group">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                <Sparkles className="w-2 h-2" /> Iconic Legends
              </span>
            </div>
            <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white mb-6 uppercase tracking-tight leading-tight">THE WEDDING <br /><span className="italic text-gold gold-glow font-light">MASTERPIECES</span></h2>
            <p className="text-luxury-text-light/70 dark:text-luxury-text-darkMuted text-sm leading-relaxed max-w-lg font-light italic mb-8">
              "Handcrafted masterpieces designed to crown your most sacred moments with timeless elegance."
            </p>
            <button
              onClick={() => onNavigate('category', 'Bridal')}
              className="w-fit px-8 py-3.5 bg-maroon-dominant text-white font-black rounded-full uppercase tracking-[0.2em] text-[9px] transition-all duration-500 shadow-xl flex items-center gap-3 active:scale-95 group/btn whitespace-nowrap"
            >
              EXPLORE COLLECTION <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Header Text - Restored to centered position */}
        <div className="text-center mb-10 relative">
          <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white mb-3 uppercase tracking-tight leading-tight">The Wedding Masterpieces</h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold/60 gold-glow">Curated for the Modern Bride</p>

          {/* Desktop nav buttons */}
          <div className="hidden xl:flex items-center justify-center gap-3 mt-6">
            <button onClick={prevSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button onClick={nextSlide} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
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
              <div key={`${product.id}-${idx}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
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
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
            <div className="relative w-48 h-[2px] bg-gold/10 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-500 ease-out"
                style={{
                  width: `${(itemsPerView / VIVAAH_PRODUCTS.length) * 100}%`,
                  left: `${((currentIndex % VIVAAH_PRODUCTS.length) / VIVAAH_PRODUCTS.length) * 100}%`
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
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        {/* Centered CTA */}
        <div className="flex justify-center pb-8 mt-4">
          <button
            onClick={() => onNavigate('category', 'Bridal')}
            className="w-fit px-8 py-3.5 bg-maroon-dominant text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant active:scale-95 border border-white/10 flex items-center gap-3 whitespace-nowrap"
          >
            EXPLORE COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VivaahCollection;