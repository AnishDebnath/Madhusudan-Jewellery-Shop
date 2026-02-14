import React, { useState } from 'react';

type GenderTab = 'Women' | 'Men' | 'Kids';

interface CategoryItem {
  label: string;
  image: string;
  link: string;
}

const GENDER_DATA: Record<GenderTab, CategoryItem[]> = {
  Women: [
    { label: 'Gold Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-women?category=rings' },
    { label: 'Gold Earring', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-women?category=earrings' },
    { label: 'Gold Pendant', image: 'https://images.unsplash.com/photo-1598560912005-59a0d5c1a412?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-women?category=pendants' },
    { label: 'Gold Chain', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-women?category=chains' },
  ],
  Men: [
    { label: 'Gold Ring', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-men?category=rings' },
    { label: 'Gold Chain', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-men?category=chains' },
    { label: 'Gold Kada', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-men?category=kadas' },
    { label: 'Gold Bracelet', image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=400', link: '/jewellery-for-men?category=bracelets' },
  ],
  Kids: [
    { label: 'Gold Earrings', image: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?auto=format&fit=crop&q=80&w=400', link: '/kids-jewellery?category=earrings' },
    { label: 'Gold Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400', link: '/kids-jewellery?category=bangles' },
    { label: 'Gold Chain', image: 'https://images.unsplash.com/photo-1598560912005-59a0d5c1a412?auto=format&fit=crop&q=80&w=400', link: '/kids-jewellery?category=chains' },
    { label: 'Nazariya', image: 'https://images.unsplash.com/photo-1584305323473-d674ede008f1?auto=format&fit=crop&q=80&w=400', link: '/kids-jewellery?category=nazariya' },
  ],
};

const ShopByGender: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GenderTab>('Women');

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-8">Shop By Gender</h2>
          
          <div className="flex justify-center items-center gap-4 md:gap-12 mb-12 overflow-x-auto no-scrollbar pb-2">
            {(['Women', 'Men', 'Kids'] as GenderTab[]).map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveTab(gender)}
                className={`relative py-2 px-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                  activeTab === gender ? 'text-maroon-dominant dark:text-gold' : 'text-luxury-text-light/40 dark:text-luxury-text-dark/40 hover:text-maroon-dominant dark:hover:text-white'
                }`}
              >
                {gender}’s Jewellery
                {activeTab === gender && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold animate-in fade-in slide-in-from-bottom-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-in fade-in duration-500">
          {GENDER_DATA[activeTab].map((item, idx) => (
            <a
              key={`${activeTab}-${idx}`}
              href={item.link}
              className="group flex flex-col items-center"
            >
              <div className="relative aspect-square w-full overflow-hidden mb-4 rounded-xl shadow-sm bg-luxury-bg-card dark:bg-luxury-dark-secondary border border-luxury-bg-card dark:border-maroon-border/20">
                <img
                  src={item.image}
                  alt={`${item.label} for ${activeTab}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-sans font-bold text-luxury-text-light dark:text-luxury-text-dark/80 tracking-wide uppercase text-[11px] group-hover:text-gold transition-colors text-center">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByGender;