import React from 'react';
import { ChevronDown, CircleDollarSign, Hammer, Percent, Scale, Info, ShieldCheck, Gem, Sparkles, User, FileText, Barcode, Ruler, Calculator } from 'lucide-react';
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
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex flex-col gap-3">
          {/* Metal Details Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openAccordions.includes('metal') ? 'border-gold/30 bg-gold/[0.02] shadow-[0_10px_30px_rgba(212,175,55,0.08)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('metal')}
              className="w-full px-5 py-3.5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openAccordions.includes('metal') ? 'bg-gold text-maroon-dominant rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:scale-110'}`}>
                  <Scale className="w-4 h-4" />
                </div>
                <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('metal') ? 'text-gold' : 'group-hover:text-gold'}`}>1. Metal Details</span>
              </div>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('metal') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('metal') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 pb-5 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                {[
                  { label: 'Gross Weight', value: `${product.grossWeight || product.weight || 'N/A'} g`, icon: Scale },
                  { label: 'Gold Weight', value: `${product.goldWeight || product.weight || 'N/A'} g`, icon: ShieldCheck },
                  { label: 'Base Metal', value: product.baseMetal || 'N/A' },
                  { label: 'Gold Purity', value: product.goldPurity || product.karat || 'N/A', highlight: true },
                  { label: 'Gold Color', value: product.goldColor || 'N/A' },
                  { label: 'Metal Stamp', value: product.metalStamp || 'N/A' },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col gap-0.5 p-2 rounded-xl transition-colors ${item.highlight ? 'bg-gold/5 border border-gold/10' : 'hover:bg-luxury-bg-secondary dark:hover:bg-white/5'}`}>
                    <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">{item.label}</span>
                    <span className={`text-sm md:text-base font-serif ${item.highlight ? 'text-gold' : 'text-maroon-dominant dark:text-white'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diamond Details Accordion (Conditional) */}
          {(product.diamondCarat || product.diamondWeight || product.diamondCount) && (
            <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openAccordions.includes('diamond') ? 'border-gold/30 bg-gold/[0.02] shadow-[0_10px_30px_rgba(212,175,55,0.08)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
              <button
                onClick={() => toggleAccordion('diamond')}
                className="w-full px-5 py-3.5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openAccordions.includes('diamond') ? 'bg-gold text-maroon-dominant rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:scale-110'}`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('diamond') ? 'text-gold' : 'group-hover:text-gold'}`}>2. Diamond Details</span>
                </div>
                <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('diamond') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('diamond') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                  {[
                    { label: 'Weight', value: `${product.diamondWeight || product.diamondCarat || 'N/A'} carat`, highlight: true },
                    { label: 'Clarity', value: product.diamondClarity || 'N/A' },
                    { label: 'Color', value: product.diamondColor || 'N/A' },
                    { label: 'No. of Diamonds', value: product.diamondCount || 'N/A' },
                    { label: 'Shape', value: product.diamondShape || 'N/A' },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex flex-col gap-0.5 p-2 rounded-xl transition-colors ${item.highlight ? 'bg-gold/5 border border-gold/10' : 'hover:bg-luxury-bg-secondary dark:hover:bg-white/5'}`}>
                      <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond {item.label}</span>
                      <span className={`text-sm md:text-base font-serif ${item.highlight ? 'text-gold' : 'text-maroon-dominant dark:text-white'}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stone Details Accordion (Conditional) */}
          {(product.stoneName || product.stoneCount) && (
            <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openAccordions.includes('stone') ? 'border-gold/30 bg-gold/[0.02] shadow-[0_10px_30px_rgba(212,175,55,0.08)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
              <button
                onClick={() => toggleAccordion('stone')}
                className="w-full px-5 py-3.5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openAccordions.includes('stone') ? 'bg-gold text-maroon-dominant rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:scale-110'}`}>
                    <Gem className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('stone') ? 'text-gold' : 'group-hover:text-gold'}`}>
                    {(product.diamondCarat || product.diamondWeight || product.diamondCount) ? '3. Stone Details' : '2. Stone Details'}
                  </span>
                </div>
                <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('stone') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('stone') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                  {[
                    { label: 'Stone Name', value: product.stoneName || 'N/A', highlight: true },
                    { label: 'No. of Stones', value: product.stoneCount || 'N/A' },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex flex-col gap-0.5 p-2 rounded-xl transition-colors ${item.highlight ? 'bg-gold/5 border border-gold/10' : 'hover:bg-luxury-bg-secondary dark:hover:bg-white/5'}`}>
                      <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">{item.label}</span>
                      <span className={`text-sm md:text-base font-serif ${item.highlight ? 'text-gold' : 'text-maroon-dominant dark:text-white'}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* More Info Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openAccordions.includes('more') ? 'border-gold/30 bg-gold/[0.02] shadow-[0_10px_30px_rgba(212,175,55,0.08)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('more')}
              className="w-full px-5 py-3.5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openAccordions.includes('more') ? 'bg-gold text-maroon-dominant rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:scale-110'}`}>
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('more') ? 'text-gold' : 'group-hover:text-gold'}`}>
                  {(() => {
                    let count = 2;
                    if (product.diamondCarat || product.diamondWeight || product.diamondCount) count++;
                    if (product.stoneName || product.stoneCount) count++;
                    return `${count}. More Info`;
                  })()}
                </span>
              </div>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('more') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('more') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 pb-5 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                {[
                  { label: 'Size', value: product.sizes?.join(', ') || 'N/A', icon: Ruler },
                  { label: 'Resizeable', value: product.resizeable ? 'Yes' : 'No' },
                  { label: 'Warranty', value: product.warranty ? '1 Year Official' : '6 Months' },
                  { label: 'Jewellery for', value: product.jewelleryFor || 'N/A' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-0.5 p-2 rounded-xl hover:bg-luxury-bg-secondary dark:hover:bg-white/5 transition-colors">
                    <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">{item.label}</span>
                    <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white capitalize">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Accordion */}
          <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${openAccordions.includes('details') ? 'border-gold/30 bg-gold/[0.02] shadow-[0_10px_30px_rgba(212,175,55,0.08)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
            <button
              onClick={() => toggleAccordion('details')}
              className="w-full px-5 py-3.5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openAccordions.includes('details') ? 'bg-gold text-maroon-dominant rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:scale-110'}`}>
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('details') ? 'text-gold' : 'group-hover:text-gold'}`}>
                  {(() => {
                    let count = 3;
                    if (product.diamondCarat || product.diamondWeight || product.diamondCount) count++;
                    if (product.stoneName || product.stoneCount) count++;
                    return `${count}. Product Details`;
                  })()}
                </span>
              </div>
              <div className={`p-1 rounded-full transition-all duration-300 ${openAccordions.includes('details') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('details') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 pb-5 space-y-4 border-t border-luxury-bg-card/50 dark:border-white/5 mt-1 pt-4">
                <div className="grid grid-cols-2 gap-x-5 md:gap-x-12 gap-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-luxury-bg-secondary dark:bg-white/5 border border-transparent hover:border-gold/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <Barcode className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Product Code</span>
                      <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white uppercase tracking-tighter">{product.productCode || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-luxury-bg-secondary dark:bg-white/5 border border-transparent hover:border-gold/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-maroon-dominant/5 dark:bg-gold/5 flex items-center justify-center text-maroon-dominant dark:text-gold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] md:text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Design Code</span>
                      <span className="text-sm md:text-base font-serif text-maroon-dominant dark:text-white uppercase tracking-tighter">{product.designCode || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                  <div className="pt-6">
                    <span className="text-[9px] md:text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.2em] mb-3 block">Description</span>
                    <p className="text-sm md:text-base font-serif text-maroon-dominant/70 dark:text-white/60 leading-relaxed italic border-l-2 border-gold/40 pl-5">
                      "{product.description}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex flex-col gap-5">
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-maroon-dominant/40 dark:text-white/30">Detailed Price Breakdown</span>
            {/* <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gold/5 border border-gold/10 rounded-full">
              <span className="text-[8px] font-black uppercase tracking-widest text-gold whitespace-nowrap">Live Price</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            </div> */}
          </div>

          {(() => {
            const payableAmount = product.price;
            const netAmount = Math.floor(payableAmount);
            const roundOff = (payableAmount - netAmount).toFixed(2);
            const grandTotal = Math.round(netAmount / 1.03);
            const gst3 = netAmount - grandTotal;
            const makingCharge = Math.round(grandTotal * 0.12);
            const goldValue = grandTotal - makingCharge;

            return (
              <div className="space-y-2">
                {[
                  { label: 'Gold Value', value: goldValue, icon: Scale, subtitle: `Live Rate @ ${product.karat || 'N/A'}` },
                  { label: 'Making Charge', value: makingCharge, icon: Hammer, subtitle: '@ 12% of Metal Value' },
                  { label: 'Grand Total', value: grandTotal, isHighlight: true, isDivider: true },
                  { label: 'GST (3%)', value: gst3, icon: Percent },
                  { label: 'Net Amount', value: netAmount, icon: Calculator },
                  { label: 'Round Off', value: roundOff, isString: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 border ${item.isHighlight
                      ? 'bg-gold/[0.03] border-gold/20 shadow-[0_4px_12px_rgba(212,175,55,0.05)] mt-4 mb-2'
                      : 'bg-white/5 dark:bg-white/[0.02] border-transparent hover:border-gold/10 hover:bg-white/10 dark:hover:bg-white/[0.04]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${item.isHighlight ? 'bg-gold text-maroon-dominant' : 'bg-gold/5 text-gold'}`}>
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-wider ${item.isHighlight ? 'text-gold' : 'text-maroon-dominant dark:text-white/90'}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className="text-[9px] font-medium text-maroon-dominant/60 dark:text-white/40 uppercase tracking-widest leading-none mt-1">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm md:text-base font-serif tracking-tight ${item.isHighlight ? 'text-gold font-bold' : 'text-maroon-dominant dark:text-white'}`}>
                      ₹{item.isString ? item.value : item.value.toLocaleString('en-IN')}{!item.isString && '.00'}
                    </span>
                  </div>
                ))}

                {/* Payable Amount Card */}
                <div className="mt-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gold/5 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-maroon-dominant/[0.04] to-maroon-dominant/[0.08] dark:from-white/[0.03] dark:to-white/[0.06] p-5 rounded-2xl border border-gold/20 flex items-center justify-between overflow-hidden shadow-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] md:text-[11px] font-black text-gold uppercase tracking-[0.3em]">Payable Amount</span>
                        <span className="text-[8px] font-bold text-maroon-dominant/30 dark:text-white/20 uppercase tracking-widest">(Inclusive of all taxes)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-px h-8 bg-gold/10"></div>
                        <span className="text-xl md:text-3xl font-serif text-gold font-bold tracking-tight">
                          ₹{payableAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
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
