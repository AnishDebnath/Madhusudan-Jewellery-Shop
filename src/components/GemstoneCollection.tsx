import React from 'react';
import { Sparkles } from 'lucide-react';
import necklace22 from '../assets/jewellery/necklace/nacklace (22).jpg';
import ring11 from '../assets/jewellery/ring/ring (11).jpg';
import earrings7 from '../assets/jewellery/earrings/earrings (7).jpg';
import bangles4 from '../assets/jewellery/bangles/bangles (4).jpg';

interface GemstoneTileProps {
  label: string;
  image: string;
  link: string;
  onNavigate: (view: string, data?: any) => void;
}

const GemstoneTile: React.FC<GemstoneTileProps> = ({ label, image, link, onNavigate }) => (
  <div
    onClick={() => onNavigate('category', 'Gemstone')}
    className="group relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-transparent dark:border-white/5 cursor-pointer"
  >
    <div className="aspect-square overflow-hidden relative">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-center flex flex-col items-center justify-end h-full">
        <div className="flex flex-col items-center">
          <span className="text-white font-serif text-lg md:text-xl lg:text-xl xl:text-xl tracking-wide group-hover:text-gold transition-colors duration-300 mb-2">
            {label}
          </span>
          <div className="w-10 h-[1px] bg-gold transition-opacity duration-500 delay-100"></div>
          <span className="text-[8px] font-black text-white/80 uppercase tracking-widest mt-3 transition-opacity duration-500 delay-150">View Collection</span>
        </div>
      </div>
    </div>
  </div>
);


interface GemstoneCollectionProps {
  onNavigate: (view: string, data?: any) => void;
}

const GemstoneCollection: React.FC<GemstoneCollectionProps> = ({ onNavigate }) => {
  const categories = [
    { label: 'Necklaces', image: necklace22, link: '/gemstone-jewellery/necklaces' },
    { label: 'Rings', image: ring11, link: '/gemstone-jewellery/rings' },
    { label: 'Earrings', image: earrings7, link: '/gemstone-jewellery/earrings' },
    { label: 'Bangles', image: bangles4, link: '/gemstone-jewellery/bangles' },
  ];

  return (
    <section className="py-10 md:py-14 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-10 space-y-3">
          <div className="flex justify-center items-center gap-4 group mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Precious Stones
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white tracking-tight uppercase leading-tight">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-light">Gemstone</span> Edit</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-sm md:text-base lg:text-base xl:text-base font-light italic max-w-lg mx-auto border-t border-gold/10 pt-6">
            "Timeless grace captured in nature's most vibrant hues."
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-4">
          {categories.map((cat, idx) => (
            <GemstoneTile key={idx} {...cat} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneCollection;