import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow mb-4">Collections For Everyone</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-10 uppercase">Shop By <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic">Gender</span></h2>

          <div className="flex justify-center items-center gap-6 md:gap-12 mb-12 overflow-x-auto no-scrollbar pb-2">
            {(['Women', 'Men', 'Kids'] as GenderTab[]).map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveTab(gender)}
                className={`relative py-3 px-8 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full border ${activeTab === gender
                  ? 'bg-maroon-dominant text-gold border-gold/50 shadow-[0_5px_15px_rgba(212,175,55,0.2)]'
                  : 'bg-transparent text-luxury-text-light/40 dark:text-white/40 border-transparent hover:border-gold/20 hover:text-maroon-dominant dark:hover:text-white'
                  }`}
              >
                {gender}
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
              <div className="relative aspect-square w-full overflow-hidden mb-6 rounded-3xl shadow-lg bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group-hover:border-gold/30 transition-all duration-500">
                <img
                  src={item.image}
                  alt={`${item.label} for ${activeTab}`}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-center">
                    <ArrowRight className="text-gold w-5 h-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100" />
                  </div>
                </div>
              </div>
              <span className="text-xs md:text-sm font-black text-maroon-dominant dark:text-white tracking-[0.2em] uppercase group-hover:text-gold transition-colors text-center">
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