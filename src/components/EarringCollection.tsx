import React from 'react';
import { Sparkles } from 'lucide-react';
import earrings7 from '../assets/jewellery/earrings/earrings (7).jpg';
import earrings8 from '../assets/jewellery/earrings/earrings (8).jpg';
import earrings9 from '../assets/jewellery/earrings/earrings (9).jpg';
import earrings10 from '../assets/jewellery/earrings/earrings (10).jpg';

interface EarringCardProps {
  title: string;
  image: string;
  link: string;
  onNavigate: (view: string, data?: any) => void;
}

const EarringCard: React.FC<EarringCardProps> = ({ title, image, link, onNavigate }) => (
  <div
    onClick={() => onNavigate('category', 'Earrings')}
    className="group flex flex-col items-center cursor-pointer"
  >
    <div className="relative aspect-square w-full overflow-hidden mb-3 rounded-2xl shadow-lg bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group-hover:border-gold/30 transition-all duration-500">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 hidden md:block" />

      <div className="absolute inset-x-0 bottom-0 p-6 hidden md:block">
        <h4 className="text-white font-serif text-lg md:text-xl lg:text-xl xl:text-xl tracking-wide group-hover:text-gold transition-colors duration-300 leading-tight mb-3">
          {title.replace(' Collection', '')}
        </h4>
        <div className="flex items-center gap-2 transition-all duration-500">
          <div className="h-[1px] w-6 bg-gold"></div>
          <span className="text-[8px] font-black text-gold uppercase tracking-[0.2em]">View Designs</span>
        </div>
      </div>
    </div>
    <span className="text-[11px] md:hidden font-black text-maroon-dominant dark:text-white tracking-[0.15em] uppercase group-hover:text-gold transition-colors text-center mt-2">
      {title.replace(' Collection', '')}
    </span>
  </div>
);


interface EarringCollectionProps {
  onNavigate: (view: string, data?: any) => void;
}

const EarringCollection: React.FC<EarringCollectionProps> = ({ onNavigate }) => {
  const categories = [
    { title: 'Studs Collection', image: earrings7, link: '/earrings/studs' },
    { title: 'Jhumkas Collection', image: earrings8, link: '/earrings/jhumkas' },
    { title: 'Drops Collection', image: earrings9, link: '/earrings/drops' },
    { title: 'Hoops–Balis Collection', image: earrings10, link: '/earrings/hoops' },
  ];

  return (
    <section className="py-14 bg-luxury-bg-primary dark:bg-luxury-dark-primary border-t border-luxury-bg-card dark:border-white/5 transition-colors relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-10 space-y-3">
          <div className="flex justify-center items-center gap-4 group mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Earring Masterpieces
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white tracking-tight uppercase leading-tight">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white font-light">Earring</span> Edit</h2>
          <div className="w-20 h-[1px] bg-gold/20 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-4">
          {categories.map((cat, idx) => (
            <EarringCard key={idx} {...cat} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarringCollection;