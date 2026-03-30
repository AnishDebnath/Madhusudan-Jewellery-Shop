import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import earrings9 from '../../assets/jewellery/earrings/earrings (9).jpg';
import necklace12 from '../../assets/jewellery/necklace/nacklace (12).jpg';
import necklace9 from '../../assets/jewellery/necklace/nacklace (9).jpg';
import bangles2 from '../../assets/jewellery/bangles/bangles (2).jpg';

const BUDGET_CATEGORIES = [
  { label: 'Under 10K', image: earrings9, link: '#' },
  { label: '10K - 25K', image: necklace12, link: '#' },
  { label: '25K - 50K', image: necklace9, link: '#' },
  { label: '50K Above', image: bangles2, link: '#' }
];

interface ShopByBudgetProps {
  onNavigate: (view: string, data?: any) => void;
}

const ShopByBudget: React.FC<ShopByBudgetProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 group mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Curated For You
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-tight">
            Shop By <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic font-light">Budget</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {BUDGET_CATEGORIES.map((item, index) => (
            <div
              key={index}
              onClick={() => onNavigate('category', item.label)}
              className="group flex flex-col items-center cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both w-full max-w-[280px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square w-full overflow-hidden mb-5 rounded-3xl shadow-xl bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/5 group-hover:border-gold/30 transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors duration-700"></div>

                {/* Hover Action Indicator (Restored Emoji) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-700">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-lg font-light text-gold">₹</span>
                  </div>
                </div>

                {/* Bottom Shine Line */}
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
export default ShopByBudget;
