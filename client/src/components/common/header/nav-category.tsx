import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { PageView } from '../../../types';
import { navCategories } from './data';

interface NavCategoryProps {
  activeMega: string | null;
  setActiveMega: (name: string | null) => void;
  onNavigate: (view: PageView, data?: any) => void;
  scrolled: boolean;
  isMinimal: boolean;
  onItemClick: (item: string) => void;
}

const NavCategory: React.FC<NavCategoryProps> = ({
  activeMega,
  setActiveMega,
  onNavigate,
  scrolled,
  isMinimal,
  onItemClick
}) => {
  return (
    <nav className={`relative z-10 ${isMinimal ? 'hidden ' : 'hidden xl:flex '}justify-center transition-all duration-700 ${scrolled ? 'bg-luxury-dark-primary/95 backdrop-blur-xl border-b border-gold/10' : 'bg-luxury-dark-primary border-b border-gold/10'}`}>
      <div className="flex items-center px-4">
        {navCategories.map((cat) => (
          <div
            key={cat.name}
            className="group px-6 py-3 cursor-pointer"
            onMouseEnter={() => setActiveMega(cat.name)}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="relative flex items-center gap-2 group-hover:text-gold transition-all duration-500 pb-1">
              <span className="text-[10px] font-black text-white/70 group-hover:text-gold uppercase tracking-[0.25em] whitespace-nowrap transition-all">
                {cat.name}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-gold/30 transition-transform duration-500 ${activeMega === cat.name ? 'rotate-180 text-gold shadow-sm' : ''}`} />
              <div className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-700 ease-in-out ${activeMega === cat.name ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>

            {activeMega === cat.name && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[95vw] lg:w-[1200px] bg-white dark:bg-luxury-dark-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-transparent dark:border-white/10 animate-in fade-in slide-in-from-top-4 duration-500 z-[60] p-12 overflow-hidden">
                <div className="absolute inset-0 bg-transparent opacity-[0.03] pointer-events-none"></div>
                <div className="grid grid-cols-12 gap-16 relative z-10">
                  <div className="col-span-7">
                    <div className="flex items-center gap-4 mb-10">
                      <Sparkles className="w-5 h-5 text-gold gold-glow" />
                      <h4 className="text-[12px] font-black text-gold uppercase tracking-[0.5em] border-b border-gold/10 pb-3 flex-1">
                        {cat.name} Excellence
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                      {cat.items.map(item => (
                        <button
                          key={item}
                          onClick={() => onItemClick(item)}
                          className="group/item flex items-center gap-4 text-[13px] text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white transition-all font-serif italic text-left"
                        >
                          <span className="w-2 h-[1px] bg-gold/0 group-hover/item:bg-gold group-hover/item:w-4 transition-all duration-500"></span>
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-maroon-dominant/5 dark:border-white/5 flex justify-between items-center">
                      <p className="text-[9px] text-maroon-dominant/30 dark:text-white/20 uppercase tracking-[0.4em] font-black">Crafting Perfection Since 1952</p>
                      <button onClick={() => onNavigate('category', cat.name)} className="text-[10px] font-black text-gold hover:text-maroon-dominant dark:hover:text-white transition-all tracking-[0.3em] uppercase group/link">
                        VIEW FULL COLLECTION <span className="inline-block group-hover/link:translate-x-2 transition-transform duration-500">→</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-span-5 relative rounded-3xl overflow-hidden group/featured shadow-2xl aspect-[4/5]">
                    <img src={cat.featured} className="w-full h-full object-cover group-hover/featured:scale-110 transition-all duration-[3s]" alt={cat.name} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant via-maroon-dominant/20 to-transparent flex flex-col justify-end p-10">
                      <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 gold-glow">Curated Choice</span>
                      <h5 className="text-white font-serif text-3xl leading-tight mb-8">Exclusive <br />{cat.name}</h5>
                      <button className="w-full bg-gold text-maroon-dominant py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all transform active:scale-95 shadow-xl">EXPLORE PIECES</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavCategory;
