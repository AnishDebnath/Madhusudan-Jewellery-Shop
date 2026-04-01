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
      {/* Pill Toggle Switch — matches Login/Signup style */}
      <div className="flex justify-start mb-8">
        <div className="bg-white/50 dark:bg-black/30 backdrop-blur-md p-1.5 rounded-full flex relative max-w-[380px] w-full shadow-sm border border-maroon-dominant/10 dark:border-white/10">
          {/* Sliding pill indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-maroon-dominant dark:bg-gold rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 ease-out pointer-events-none"
            style={{ left: activeTab === 'specs' ? '6px' : 'calc(50%)' }}
          />
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`flex-1 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-all duration-500 ${activeTab === 'specs' ? 'text-white dark:text-maroon-dominant' : 'text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white'}`}
          >
            Specification
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('price')}
            className={`flex-1 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-all duration-500 ${activeTab === 'price' ? 'text-white dark:text-maroon-dominant' : 'text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white'}`}
          >
            Price Breakdown
          </button>
        </div>
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
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.grossWeight || product.weight || 'N/A'} g</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Weight</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldWeight || product.weight || 'N/A'} g</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Base Metal</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.baseMetal || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Purity</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldPurity || product.karat || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Color</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.goldColor || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Metal Stamp</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.metalStamp || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Details Accordion (Conditional) */}
          {(product.diamondCarat || product.diamondWeight || product.diamondCount) && (
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
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondWeight || product.diamondCarat || 'N/A'} carat</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Clarity</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondClarity || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Color</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondColor || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">No of Diamonds</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondCount || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Shape</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.diamondShape || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stone Details Accordion (Conditional) */}
          {product.stoneName && (
            <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('stone') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
              <button
                onClick={() => toggleAccordion('stone')}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
              >
                <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('stone') ? 'text-gold' : 'group-hover:text-gold'}`}>
                  {(product.diamondCarat || product.diamondWeight || product.diamondCount) ? '3. Stone Details' : '2. Stone Details'}
                </span>
                <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('stone') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                  <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('stone') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 md:px-6 pb-6 md:pt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Stone Name</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.stoneName || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">No of Stones</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.stoneCount || 'N/A'}</span>
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
                {(() => {
                  let count = 2;
                  if (product.diamondCarat || product.diamondWeight || product.diamondCount) count++;
                  if (product.stoneName) count++;
                  return `${count}. More Info`;
                })()}
              </span>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('more') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('more') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 md:px-6 pb-6 md:pt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Size</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.sizes?.join(', ') || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Resizeable</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.resizeable || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Warranty</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.warranty || 'N/A'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Jewellery for</span>
                  <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white">{product.jewelleryFor || 'N/A'}</span>
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
                {(() => {
                  let count = 3;
                  if (product.diamondCarat || product.diamondWeight || product.diamondCount) count++;
                  if (product.stoneName) count++;
                  return `${count}. Product Details`;
                })()}
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
