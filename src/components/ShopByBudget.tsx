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
    <section className="py-20 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
      <div className="container mx-auto px-6">
        <div className="w-full h-[1px] bg-luxury-bg-card dark:bg-maroon-border/20 mb-12"></div>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif text-maroon-dominant dark:text-gold uppercase tracking-[0.1em] font-medium">Shop By Budget</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {BUDGET_CATEGORIES.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="group flex flex-col items-center"
            >
              <div className="relative aspect-square w-full overflow-hidden mb-4 bg-luxury-bg-card dark:bg-luxury-dark-secondary rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-sans font-bold text-luxury-text-light dark:text-luxury-text-dark/80 group-hover:text-gold transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBudget;