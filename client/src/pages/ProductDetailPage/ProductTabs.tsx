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
          {/* Metal Details Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('metal') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('metal')}
              className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('metal') ? 'text-gold' : 'group-hover:text-gold'}`}>1. Metal Details</span>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('metal') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('metal') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 md:px-6 pb-6 md:pt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gross Weight</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.grossWeight || product.weight || '6.81'} (Approx.)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Weight</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldWeight || product.weight || '6.81'} (Approx.)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Base Metal</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.baseMetal || 'Gold'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Purity</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldPurity || product.karat || '22K'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Color</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldColor || 'Yellow'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Metal Stamp</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.metalStamp || 'BIS'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Details Accordion (Conditional) */}
          {(product.diamondCarat || product.category === 'Diamond') && (
            <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('diamond') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
              <button
                onClick={() => toggleAccordion('diamond')}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
              >
                <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('diamond') ? 'text-gold' : 'group-hover:text-gold'}`}>2. Diamond Details</span>
                <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('diamond') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                  <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('diamond') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 md:px-6 pb-6 md:pt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Weight</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondCarat || '0.8ct'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Quality</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">VS-SI / G-H</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Setting Type</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">Prong / Pave</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* More Info Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('more') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('more')}
              className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('more') ? 'text-gold' : 'group-hover:text-gold'}`}>
                {(product.diamondCarat || product.category === 'Diamond') ? '3. More Info' : '2. More Info'}
              </span>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('more') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('more') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 md:px-6 pb-6 md:pt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Size</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.sizes?.join(', ') || '15, 16, 17, 18, 19, 20'} No</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Resizeable</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.resizeable ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Warranty</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.warranty ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Jewellery for</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.jewelleryFor || 'Female'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('details') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('details')}
              className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('details') ? 'text-gold' : 'group-hover:text-gold'}`}>
                {(product.diamondCarat || product.category === 'Diamond') ? '4. Product Details' : '3. Product Details'}
              </span>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('details') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('details') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 md:px-6 pb-6 md:pt-2 space-y-4 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 pt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Product Code</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white uppercase">{product.productCode || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Design Code</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white uppercase">{product.designCode || 'N/A'}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-luxury-bg-card/30 dark:border-white/5">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest mb-2 block">Description</span>
                  <p className="text-sm md:text-base font-serif text-maroon-dominant/80 dark:text-white/80 leading-relaxed italic">
                    "{product.description}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {(() => {
            const payableAmount = product.price;
            const netAmount = Math.floor(payableAmount);
            const roundOff = (payableAmount - netAmount).toFixed(2);
            const grandTotal = Math.round(netAmount / 1.03);
            const gst3 = netAmount - grandTotal;
            const makingCharge = Math.round(grandTotal * 0.12);
            const goldValue = grandTotal - makingCharge;

            return (
              <div className="space-y-0.5">
                <div className="flex justify-between items-end py-2 md:py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Gold Value</span>
                  <span className="text-base md:text-lg font-serif text-maroon-dominant dark:text-white">₹{goldValue.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-end py-2 md:py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Making Charge</span>
                  <span className="text-base md:text-lg font-serif text-maroon-dominant dark:text-white">₹{makingCharge.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gold/20 -mx-4 px-4 rounded-lg my-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] md:text-[11px] text-gold uppercase font-black tracking-[0.2em]">Grand Total</span>
                  </div>
                  <span className="text-lg md:text-xl font-serif text-gold font-bold">₹{grandTotal.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-end py-2 md:py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">GST (3%)</span>
                  <span className="text-base md:text-lg font-serif text-maroon-dominant dark:text-white">₹{gst3.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-end py-2 md:py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Net Amount</span>
                  <span className="text-base md:text-lg font-serif text-maroon-dominant dark:text-white">₹{netAmount.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-end py-2 md:py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Round Off</span>
                  <span className="text-base md:text-lg font-serif text-maroon-dominant dark:text-white">₹{roundOff}</span>
                </div>
                <div className="mt-4 pt-4 md:mt-6 md:pt-6">
                  <div className="bg-gold/10 -mx-4 px-6 py-4 md:py-5 rounded-xl border border-gold/20 flex items-center justify-between group">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] md:text-[11px] font-black text-maroon-dominant dark:text-gold uppercase tracking-[0.25em]">Payable Amount</span>
                      <span className="text-[8px] md:text-[9px] text-luxury-text-light/60 dark:text-white/40 font-bold uppercase tracking-widest">(Incl. of all taxes)</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-sans text-maroon-dominant dark:text-gold font-bold tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                      ₹{payableAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
