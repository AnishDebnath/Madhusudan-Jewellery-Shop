import React from 'react';
import earrings7 from '../assets/jewellery/earrings/earrings (7).jpg';
import earrings8 from '../assets/jewellery/earrings/earrings (8).jpg';
import earrings9 from '../assets/jewellery/earrings/earrings (9).jpg';
import earrings10 from '../assets/jewellery/earrings/earrings (10).jpg';

interface EarringCardProps {
  title: string;
  image: string;
  link: string;
}

const EarringCard: React.FC<EarringCardProps> = ({ title, image, link }) => (
  <a
    href={link}
    className="group relative block bg-white dark:bg-luxury-dark-card rounded-3xl overflow-hidden border border-transparent dark:border-white/5 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="aspect-square overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h4 className="text-white font-serif text-xl md:text-2xl tracking-wide group-hover:text-gold transition-colors duration-300 leading-tight mb-3">
          {title.replace(' Collection', '')}
        </h4>
        <div className="flex items-center gap-2 transition-all duration-500">
          <div className="h-[1px] w-6 bg-gold"></div>
          <span className="text-[8px] font-black text-gold uppercase tracking-[0.2em]">View Designs</span>
        </div>
      </div>
    </div>
  </a>
);


const EarringCollection: React.FC = () => {
  const categories = [
    { title: 'Studs Collection', image: earrings7, link: '/earrings/studs' },
    { title: 'Jhumkas Collection', image: earrings8, link: '/earrings/jhumkas' },
    { title: 'Drops Collection', image: earrings9, link: '/earrings/drops' },
    { title: 'Hoops–Balis Collection', image: earrings10, link: '/earrings/hoops' },
  ];

  return (
    <section className="py-20 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary border-t border-luxury-bg-card dark:border-white/5 transition-colors relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black block gold-glow">Earring Masterpieces</span>
          <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white tracking-wide uppercase">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Earring</span> Edit</h2>
          <div className="w-20 h-[1px] bg-gold/20 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {categories.map((cat, idx) => (
            <EarringCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarringCollection;