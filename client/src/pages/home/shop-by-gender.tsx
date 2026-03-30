import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

type GenderTab = 'Women' | 'Men' | 'Kids';

interface CategoryItem {
  label: string;
  image: string;
  link: string;
}

import ring12 from '../../assets/jewellery/ring/ring (12).jpg';
import earrings7 from '../../assets/jewellery/earrings/earrings (7).jpg';
import necklace10 from '../../assets/jewellery/necklace/nacklace (10).jpg';
import necklace11 from '../../assets/jewellery/necklace/nacklace (11).jpg';
import mens1 from '../../assets/jewellery/mens/mens collection (1).jpg';
import mens2 from '../../assets/jewellery/mens/mens collection (2).jpg';
import mens3 from '../../assets/jewellery/mens/mens collection (3).jpg';
import mens4 from '../../assets/jewellery/mens/mens collection (4).jpg';
import earrings8 from '../../assets/jewellery/earrings/earrings (8).jpg';
import bangles3 from '../../assets/jewellery/bangles/bangles (3).jpg';
import ring13 from '../../assets/jewellery/ring/ring (13).jpg';
import goldDiamond22 from '../../assets/jewellery/gold&diamond-jewellery(22).jpg';

const GENDER_DATA: Record<GenderTab, CategoryItem[]> = {
  Women: [
    { label: 'Gold Ring', image: ring12, link: '/jewellery-for-women?category=rings' },
    { label: 'Gold Earring', image: earrings7, link: '/jewellery-for-women?category=earrings' },
    { label: 'Gold Pendant', image: necklace10, link: '/jewellery-for-women?category=pendants' },
    { label: 'Gold Chain', image: necklace11, link: '/jewellery-for-women?category=chains' },
  ],
  Men: [
    { label: 'Gold Ring', image: mens1, link: '/jewellery-for-men?category=rings' },
    { label: 'Gold Chain', image: mens2, link: '/jewellery-for-men?category=chains' },
    { label: 'Gold Kada', image: mens3, link: '/jewellery-for-men?category=kadas' },
    { label: 'Gold Bracelet', image: mens4, link: '/jewellery-for-men?category=bracelets' },
  ],
  Kids: [
    { label: 'Gold Earrings', image: earrings8, link: '/kids-jewellery?category=earrings' },
    { label: 'Gold Bangles', image: bangles3, link: '/kids-jewellery?category=bangles' },
    { label: 'Gold Chain', image: ring13, link: '/kids-jewellery?category=chains' },
    { label: 'Nazariya', image: goldDiamond22, link: '/kids-jewellery?category=nazariya' },
  ],
};

interface ShopByGenderProps {
  onNavigate: (view: string, data?: any) => void;
}

const ShopByGender: React.FC<ShopByGenderProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<GenderTab>('Women');
  const genders: GenderTab[] = ['Women', 'Men', 'Kids'];

  return (
    <section className="py-10 md:py-14 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-dominant/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 group mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Curated Collections
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white tracking-tight mb-8 uppercase leading-tight">
            Shop By <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic font-light">Gender</span>
          </h2>

          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-luxury-bg-card/50 dark:bg-white/5 backdrop-blur-md rounded-full border border-gold/10 relative min-w-[300px] md:min-w-[400px]">
              {/* Sliding Pill Indicator */}
              <div
                className="absolute inset-y-1 transition-all duration-500 ease-out bg-maroon-dominant rounded-full shadow-[0_4px_15px_rgba(91,15,27,0.3)] border border-white/10"
                style={{
                  width: `calc(100% / ${genders.length} - 8px)`,
                  left: "4px",
                  transform: `translateX(calc(${genders.indexOf(activeTab) * 100}% + ${genders.indexOf(activeTab) * 0}px))`
                }}
              ></div>

              {genders.map((gender) => (
                <button
                  key={gender}
                  onClick={() => setActiveTab(gender)}
                  className={`relative z-10 flex-1 py-2 px-4 text-[9px] md:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full text-center ${activeTab === gender
                    ? 'text-gold'
                    : 'text-luxury-text-light/50 dark:text-white/40 hover:text-maroon-dominant dark:hover:text-white'
                    }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {GENDER_DATA[activeTab].map((item, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              onClick={() => onNavigate('category', item.label)}
              className="group flex flex-col items-center cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both w-full max-w-[280px]"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square w-full overflow-hidden mb-5 rounded-3xl shadow-xl bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group-hover:border-gold/30 transition-all duration-700">
                <img
                  src={item.image}
                  alt={`${item.label} for ${activeTab}`}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors duration-700"></div>

                {/* Hover Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-700">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight className="text-gold w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>

              <div className="w-full flex flex-col items-center justify-center">
                <span className="text-[11px] md:text-xs font-black text-maroon-dominant dark:text-white tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-300 text-center px-2">
                  {item.label}
                </span>
                <div className="h-[1px] w-6 bg-gold/50 mt-2.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByGender;
