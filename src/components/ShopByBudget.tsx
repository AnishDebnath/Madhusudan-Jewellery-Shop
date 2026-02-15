import React from 'react';

const BUDGET_CATEGORIES = [
  {
    label: 'Under 10K',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=400',
    link: '#'
  },
  {
    label: '10K - 25K',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=400',
    link: '#'
  },
  {
    label: '25K - 50K',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400',
    link: '#'
  },
  {
    label: '50K Above',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
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