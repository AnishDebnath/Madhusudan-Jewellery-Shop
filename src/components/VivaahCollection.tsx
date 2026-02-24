import React from 'react';
import { ArrowRight } from 'lucide-react';
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
    price: '₹4,50,000'
  },
  {
    id: 'v2',
    name: 'Antique Gold Temple Set',
    image: necklace13,
    price: '₹7,20,000'
  },
  {
    id: 'v3',
    name: 'Kundan Meena Bridal Haar',
    image: necklace14,
    price: '₹5,80,000'
  },
  {
    id: 'v4',
    name: 'Rose Gold Diamond Maang Tikka',
    image: necklace15,
    price: '₹1,25,000'
  }
];

interface VivaahCollectionProps {
  onNavigate: (view: string, data?: any) => void;
  onProductClick: (p: any) => void;
  onAddToCart?: (p: any) => void;
}

const VivaahCollection: React.FC<VivaahCollectionProps> = ({ onNavigate, onProductClick, onAddToCart }) => {
  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-16 overflow-hidden border-t border-gold/10 transition-colors relative">
      <div className="container mx-auto px-6">


        {/* Large Collection Banner */}
        <div className="relative h-[50vh] md:h-[80vh] mb-12 rounded-[3rem] overflow-hidden group shadow-2xl border border-gold/10">
          <img
            src={vivaahHero}
            alt="The Wedding Masterpieces"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant/80 via-maroon-dominant/20 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white max-w-3xl">
            <span className="text-gold text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-black mb-6 gold-glow transition-all duration-700 group-hover:tracking-[0.8em]">Exclusive Wedding Couture</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight tracking-tight">The Wedding <br /><span className="italic text-gold gold-glow">Masterpieces</span></h2>
            <div className="w-24 h-[1px] bg-gold/50 mb-10 transition-all duration-700 group-hover:w-40"></div>
            <p className="text-base md:text-xl font-light italic text-white/80 leading-relaxed max-w-xl mb-12 border-l border-gold/30 pl-6">
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

        {/* Header Text */}
        <div className="text-center mb-10 space-y-3">
          <h3 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white mb-3 uppercase tracking-tight">The Wedding Masterpieces</h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold/60 gold-glow">Curated for the Modern Bride</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {VIVAAH_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 hover:border-gold/20 overflow-hidden transition-all duration-700 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 p-3 md:p-4">
              <div className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-black/20 rounded-2xl mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Quick Actions Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-3 z-10">
                  <button
                    onClick={() => onProductClick({ ...product, price: parseInt(product.price.replace(/[^\d]/g, '')) })}
                    className="bg-maroon-dominant/90 backdrop-blur-md text-white text-[9px] font-black tracking-[0.2em] px-6 py-3 w-44 hover:bg-gold hover:text-maroon-dominant transition-all duration-300 transform active:scale-95 shadow-xl border border-white/10 rounded-full translate-y-4 group-hover:translate-y-0"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              <div className="px-1 text-center flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-maroon-dominant dark:text-white text-lg mb-1 truncate group-hover:text-gold transition-colors">{product.name}</h4>
                  <p className="text-maroon-dominant dark:text-gold font-sans text-lg font-bold tracking-tight mb-2">₹{product.price.replace('₹', '')}</p>
                </div>
                {onAddToCart && (
                  <button
                    onClick={(e) => { e.stopPropagation(); onAddToCart({ ...product, price: parseInt(product.price.replace(/[^\d]/g, '')) }); }}
                    className="w-full bg-maroon-dominant text-white py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-md active:scale-95"
                  >
                    Add to Bag
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center pb-12">
          <button
            onClick={() => onNavigate('category', 'Bridal')}
            className="group relative px-8 py-3.5 bg-maroon-dominant text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant hover:scale-105 shadow-xl active:scale-95 border border-white/10"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore The Collection <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VivaahCollection;