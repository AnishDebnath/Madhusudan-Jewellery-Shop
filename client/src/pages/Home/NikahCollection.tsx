import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import necklace19 from '../../assets/jewellery/necklace/nacklace (19).jpg';
import necklace20 from '../../assets/jewellery/necklace/nacklace (20).jpg';
import necklace21 from '../../assets/jewellery/necklace/nacklace (21).jpg';
import nikahHero from '../../assets/models/models (21).jpg';

const NIKAH_PRODUCTS = [
  {
    id: 'n1',
    name: 'Eternal Nikah Necklace Set',
    image: necklace19,
    tag: 'Nikah Ready'
  },
  {
    id: 'n2',
    name: 'Walima Emerald Drops',
    image: necklace20,
    tag: 'Walima Special'
  },
  {
    id: 'n3',
    name: 'Traditional Polki Passa',
    image: necklace21,
    tag: 'Bridal Heritage'
  }
];

interface NikahCollectionProps {
  onNavigate: (view: string, data?: any) => void;
}

const NikahCollection: React.FC<NikahCollectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-luxury-bg-secondary dark:bg-luxury-dark-secondary py-12 md:py-16 relative overflow-hidden transition-colors border-t border-luxury-bg-card dark:border-white/5">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl group border border-transparent dark:border-white/5 shadow-2xl">
            <img
              src={nikahHero}
              alt="Nikah Bridal"
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/80 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute bottom-12 left-0 right-0 md:left-10 text-white z-10 text-center md:text-left px-6 md:px-0">
              <div className="flex items-center justify-center md:justify-start gap-4 group mb-4">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold/40"></div>
                <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                  <Sparkles className="w-2.5 h-2.5" /> Sacred Union
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-2 leading-tight">Graceful Ceremonies</h2>
              <div className="w-16 h-[1px] bg-gold/50 mx-auto md:mx-0"></div>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-5 group">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
                <span className="text-gold dark:text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                  <Sparkles className="w-2.5 h-2.5" /> Elegance Redefined
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white mb-6 uppercase tracking-tight leading-tight">NIKAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-dominant to-gold dark:from-white dark:to-gold/50 font-light italic text-center">COLLECTION</span></h2>
              <p className="text-luxury-text-light/70 dark:text-luxury-text-darkMuted text-sm md:text-base lg:text-base xl:text-base leading-relaxed max-w-lg font-light italic text-balance border-l-0 lg:border-l-2 lg:border-gold/20 lg:pl-6 mx-auto lg:mx-0">
                "Graceful jewellery for a sacred union, designed for timeless Nikah ceremonies and Walima elegance."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-8 xl:gap-10">
              {NIKAH_PRODUCTS.map((product) => (
                <div key={product.id} className="group cursor-pointer" onClick={() => onNavigate('category', 'Bridal')}>
                  <div className="relative aspect-square overflow-hidden mb-5 rounded-2xl border border-transparent dark:border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-500 bg-white dark:bg-luxury-dark-card">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white text-[9px] font-black tracking-widest uppercase border border-white/20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs font-black text-maroon-dominant dark:text-white uppercase tracking-widest truncate group-hover:text-gold transition-colors text-center">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('category', 'Bridal')}
                className="group relative px-8 py-3.5 bg-maroon-dominant text-white text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:text-maroon-dominant active:scale-95 shadow-xl rounded-full border border-white/10 flex items-center gap-3 whitespace-nowrap"
              >
                EXPLORE COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NikahCollection;
