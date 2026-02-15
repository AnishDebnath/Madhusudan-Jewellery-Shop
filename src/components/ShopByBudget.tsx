import React from 'react';
import earrings9 from '../assets/jewellery/earrings/earrings (9).jpg';
import necklace12 from '../assets/jewellery/necklace/nacklace (12).jpg';
import necklace9 from '../assets/jewellery/necklace/nacklace (9).jpg';
import bangles2 from '../assets/jewellery/bangles/bangles (2).jpg';

const BUDGET_CATEGORIES = [
  {
    label: 'Under 10K',
    image: earrings9,
    link: '#'
  },
  {
    label: '10K - 25K',
    image: necklace12,
    link: '#'
  },
  {
    label: '25K - 50K',
    image: necklace9,
    link: '#'
  },
  {
    label: '50K Above',
    image: bangles2,
    link: '#'
  }
];

const ShopByBudget: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">Curated For You</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">Shop By <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic">Budget</span></h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {BUDGET_CATEGORIES.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center"
            >
              <div className="relative aspect-square w-full overflow-hidden mb-6 bg-white dark:bg-luxury-dark-card rounded-3xl shadow-lg border border-transparent dark:border-white/5 group-hover:border-gold/30 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <span className="text-xl font-light">₹</span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-black text-maroon-dominant dark:text-white group-hover:text-gold transition-colors uppercase tracking-[0.2em]">
                {item.label}
              </span>
              <div className="w-12 h-[1px] bg-gold/50 mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ShopByBudget;