import React from 'react';
import { Maximize2, Sparkles, ArrowRight } from 'lucide-react';
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
}

const VivaahCollection: React.FC<VivaahCollectionProps> = ({ onNavigate, onProductClick }) => {
  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-24 overflow-hidden border-t border-gold/10 transition-colors relative">
      <div className="container mx-auto px-6">
        {/* Cinematic Hero Image */}
        <div className="relative h-[65vh] mb-20 rounded-3xl overflow-hidden group border border-transparent dark:border-white/5 shadow-2xl">
          <img
            src={vivaahHero}
            alt="Vivaah Collection"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant/80 via-maroon-dominant/10 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-20 text-white">
            <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black mb-5 animate-in fade-in slide-in-from-left-5 block gold-glow">Heritage Bridal House</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-5 animate-in fade-in slide-in-from-left-10 duration-1000 leading-tight uppercase tracking-tight">VIVAAH</h2>
            <div className="w-14 h-[1px] bg-gold/50 mb-6"></div>
            <p className="text-base md:text-lg max-w-md font-serif italic leading-relaxed text-white/90 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
              "Timeless gold & diamond jewellery crafted for sacred wedding moments."
            </p>
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-12 space-y-3">
          <h3 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white mb-3 uppercase tracking-tight">The Wedding Masterpieces</h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold/60 gold-glow">Curated for the Modern Bride</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {VIVAAH_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 hover:border-gold/20 overflow-hidden transition-all duration-700 rounded-3xl hover:shadow-2xl hover:-translate-y-2">
              <div className="relative aspect-square overflow-hidden bg-luxury-bg-secondary dark:bg-black/20 rounded-t-3xl border-b border-black/5 dark:border-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Quick Actions Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-3 z-10">
                  <button
                    onClick={() => onNavigate('category', 'Diamond')}
                    className="bg-white text-maroon-dominant text-[9px] font-black tracking-[0.2em] px-6 py-3 w-44 hover:bg-gold transition-all duration-300 transform active:scale-95 shadow-xl rounded-full translate-y-4 group-hover:translate-y-0"
                  >
                    VIRTUAL TRY-ON
                  </button>
                  <button
                    onClick={() => onProductClick({ ...product, price: parseInt(product.price.replace(/[^\d]/g, '')) })}
                    className="bg-maroon-dominant/90 backdrop-blur-md text-white text-[9px] font-black tracking-[0.2em] px-6 py-3 w-44 hover:bg-gold hover:text-maroon-dominant transition-all duration-300 transform active:scale-95 shadow-xl border border-white/10 rounded-full translate-y-4 group-hover:translate-y-0 delay-75"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
              <div className="p-8 text-center flex flex-col justify-between h-36">
                <h4 className="font-serif text-maroon-dominant dark:text-white text-lg mb-2 line-clamp-1 group-hover:text-gold transition-colors">{product.name}</h4>
                <p className="text-maroon-dominant dark:text-gold font-black text-base tracking-tight">₹{product.price.replace('₹', '')}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center pb-20">
          <button
            onClick={() => onNavigate('category', 'Bridal')}
            className="group relative px-12 py-5 bg-maroon-dominant text-white text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant hover:scale-105 shadow-2xl active:scale-95 border border-white/10"
          >
            <span className="relative z-10 flex items-center gap-4">
              Explore The Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VivaahCollection;