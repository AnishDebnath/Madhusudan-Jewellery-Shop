import React, { useRef } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCarouselSection, { ProductCarouselRef } from '../../components/ui/product-carousel-section';
import necklace12 from '../../assets/jewellery/necklace/nacklace (12).jpg';
import necklace13 from '../../assets/jewellery/necklace/nacklace (13).jpg';
import necklace14 from '../../assets/jewellery/necklace/nacklace (14).jpg';
import necklace15 from '../../assets/jewellery/necklace/nacklace (15).jpg';
import vivaahHero from '../../assets/models/models (2).jpg';

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
  const carouselRef = useRef<ProductCarouselRef>(null);

  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-12 md:py-16 overflow-hidden border-t border-gold/10 transition-colors relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        {/* Large Collection Banner */}
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

        {/* Mobile View Banner */}
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
        </div>

        {/* RESTORED Custom Vivaah Header (Centered Style) */}
        <div className="text-center mb-10 relative">
          <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white mb-3 uppercase tracking-tight leading-tight">The Wedding <span className="italic text-gold gold-glow">Masterpieces</span></h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold/60 gold-glow">Curated for the Modern Bride</p>

          {/* Desktop nav buttons (linked to ref) - visible from 1024px up */}
          <div className="hidden lg:flex items-center justify-center gap-3 mt-6">
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

      {/* Shared Carousel with hideHeader */}
      <div className="relative z-10 -mt-10">
        <ProductCarouselSection
          ref={carouselRef}
          products={VIVAAH_PRODUCTS as any}
          onProductClick={onProductClick}
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
          onNavigate={onNavigate}
          onAddToCart={onAddToCart}
          hideHeader={true}
          sectionClassName="py-14 bg-transparent transition-colors overflow-hidden"
        />
      </div>
    </section>
  );
};

export default VivaahCollection;
