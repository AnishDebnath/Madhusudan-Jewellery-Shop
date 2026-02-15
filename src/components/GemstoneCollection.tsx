import React from 'react';
import necklace22 from '../assets/jewellery/necklace/nacklace (22).jpg';
import ring11 from '../assets/jewellery/ring/ring (11).jpg';
import earrings7 from '../assets/jewellery/earrings/earrings (7).jpg';
import bangles4 from '../assets/jewellery/bangles/bangles (4).jpg';

interface GemstoneTileProps {
  label: string;
  image: string;
  link: string;
}

const GemstoneTile: React.FC<GemstoneTileProps> = ({ label, image, link }) => (
  <a
    href={link}
    className="group relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-transparent dark:border-white/5"
  >
    <div className="aspect-[3/4] overflow-hidden relative">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-8 text-center flex flex-col items-center justify-end h-full">
        <div className="flex flex-col items-center">
          <span className="text-white font-serif text-3xl md:text-4xl tracking-wide group-hover:text-gold transition-colors duration-300 mb-2">
            {label}
          </span>
          <div className="w-12 h-[1px] bg-gold transition-opacity duration-500 delay-100"></div>
          <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest mt-3 transition-opacity duration-500 delay-150">View Collection</span>
        </div>
      </div>
    </div>
  </a>
);


const GemstoneCollection: React.FC = () => {
  const categories = [
    { label: 'Necklaces', image: necklace22, link: '/gemstone-jewellery/necklaces' },
    { label: 'Rings', image: ring11, link: '/gemstone-jewellery/rings' },
    { label: 'Earrings', image: earrings7, link: '/gemstone-jewellery/earrings' },
    { label: 'Bangles', image: bangles4, link: '/gemstone-jewellery/bangles' },
  ];

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">Precious Stones</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide uppercase">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Gemstone</span> Edit</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-lg font-light italic max-w-lg mx-auto">
            "Timeless grace captured in nature's most vibrant hues."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pt-4">
          {categories.map((cat, idx) => (
            <GemstoneTile key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneCollection;