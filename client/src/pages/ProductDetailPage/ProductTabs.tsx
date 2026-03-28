import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Product } from '../../types';

interface ProductTabsProps {
  product: Product;
  activeTab: 'specs' | 'price';
  setActiveTab: (tab: 'specs' | 'price') => void;
  openAccordions: string[];
  toggleAccordion: (id: string) => void;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  product,
  activeTab,
  setActiveTab,
  openAccordions,
  toggleAccordion
}) => {
  return (
    <div className="bg-luxury-bg-secondary dark:bg-luxury-dark-card/50 rounded-3xl p-8 mb-10 border border-transparent dark:border-white/5 backdrop-blur-sm">
      <div className="flex gap-8 mb-8 border-b border-luxury-bg-card dark:border-white/10">
        <button
          onClick={() => setActiveTab('specs')}
          className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'specs' ? 'text-maroon-dominant dark:text-gold' : 'text-luxury-text-light/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-gold'}`}
        >
          Product Specification
          {activeTab === 'specs' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold animate-in slide-in-from-left duration-300"></div>}
        </button>
        <button
          onClick={() => setActiveTab('price')}
          className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'price' ? 'text-maroon-dominant dark:text-gold' : 'text-luxury-text-light/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-gold'}`}
        >
          Price Breakdown
          {activeTab === 'price' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold animate-in slide-in-from-left duration-300"></div>}
        </button>
      </div>

      {activeTab === 'specs' ? (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex flex-col gap-4">
          <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('metal') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button onClick={() => toggleAccordion('metal')} className="w-full px-6 py-5 flex items-center justify-between text-maroon-dominant dark:text-white group">
              <span className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('metal') ? 'text-gold' : 'group-hover:text-gold'}`}>1. Metal Details</span>
              <div className={`p-1.5 rounded-full transition-all duration-300 ${openAccordions.includes('metal') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 overflow-hidden ${openAccordions.includes('metal') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-1.5"><span className="text-[10px] uppercase font-black tracking-widest text-luxury-text-light/70 dark:text-luxury-text-darkMuted">Gross Weight</span><span className="text-base font-serif text-maroon-dominant dark:text-white">{product.grossWeight || product.weight || '6.81'}</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-[10px] uppercase font-black tracking-widest text-luxury-text-light/70 dark:text-luxury-text-darkMuted">Gold Weight</span><span className="text-base font-serif text-maroon-dominant dark:text-white">{product.goldWeight || product.weight || '6.81'}</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-[10px] uppercase font-black tracking-widest text-luxury-text-light/70 dark:text-luxury-text-darkMuted">Base Metal</span><span className="text-base font-serif text-maroon-dominant dark:text-white">{product.baseMetal || 'Gold'}</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-[10px] uppercase font-black tracking-widest text-luxury-text-light/70 dark:text-luxury-text-darkMuted">Gold Purity</span><span className="text-base font-serif text-maroon-dominant dark:text-white">{product.goldPurity || product.karat || '22K'}</span></div>
              </div>
            </div>
          </div>
          {/* Add other accordions similarly... */}
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Price breakdown details... */}
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
