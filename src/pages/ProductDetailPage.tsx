import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Truck, Heart, Share2, Sparkles, ChevronRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Product, Category } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface PDPProps {
  product?: Product;
  onAddToCart: (p: Product) => void;
  onNavigateToCategory: (cat: Category | string) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
}

const ProductDetailPage: React.FC<PDPProps> = ({
  product,
  onAddToCart,
  onNavigateToCategory,
  onToggleWishlist,
  isWishlisted,
  wishlist,
  onNavigate
}) => {
  if (!product) return null;
  const [mainImage, setMainImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState<'specs' | 'price'>('specs');
  const [openAccordions, setOpenAccordions] = useState<string[]>(['metal']);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 text-luxury-text-light dark:text-luxury-text-dark transition-colors animate-in fade-in duration-500">
      {/* Breadcrumbs - Adjusted sticky top for header height */}
      <div className="container mx-auto px-6 py-4 border-b border-luxury-bg-card dark:border-white/10 mb-8 sticky top-[110px] lg:top-[140px] z-20 bg-luxury-bg-primary/95 dark:bg-luxury-dark-primary/95 backdrop-blur-md transition-all">
        <div className="flex items-center gap-2 text-[10px] font-black text-luxury-text-light/50 dark:text-luxury-text-darkMuted uppercase tracking-widest">
          <button onClick={() => onNavigateToCategory('All')} className="hover:text-gold transition-colors">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => onNavigateToCategory(product.category)} className="hover:text-gold transition-colors">{product.category}</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-maroon-dominant dark:text-white line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery Section */}
          {/* Gallery Section - Adjusted sticky top */}
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6 h-fit sticky top-[200px] lg:top-[220px]">
            <div className="hidden md:flex flex-col gap-4 w-24">
              <button
                className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${mainImage === product.image ? 'ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border border-transparent dark:border-white/10 opacity-70 hover:opacity-100'}`}
                onClick={() => setMainImage(product.image)}
              >
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className={`absolute inset-0 bg-black/10 transition-opacity ${mainImage === product.image ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
              </button>
              {product.additionalImages?.map((img, i) => (
                <button
                  key={i}
                  className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${mainImage === img ? 'ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border border-transparent dark:border-white/10 opacity-70 hover:opacity-100'}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className={`absolute inset-0 bg-black/10 transition-opacity ${mainImage === img ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="aspect-[4/5] bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-3xl overflow-hidden relative group border border-transparent dark:border-white/5 shadow-2xl">
                <img src={mainImage} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`absolute top-6 right-6 p-4 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 group/heart ${isWishlisted ? 'bg-gold text-white' : 'bg-white/10 hover:bg-gold text-white'}`}
                >
                  <Heart className={`w-6 h-6 transition-colors ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-md hover:bg-gold text-white rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100">
                  <Share2 className="w-6 h-6 transition-colors" />
                </button>
              </div>

              {/* Mobile Thumbnails */}
              <div className="flex md:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  className={`min-w-[70px] aspect-square rounded-xl overflow-hidden relative ${mainImage === product.image ? 'ring-2 ring-gold' : 'opacity-60'}`}
                  onClick={() => setMainImage(product.image)}
                >
                  <img src={product.image} className="w-full h-full object-cover" />
                </button>
                {product.additionalImages?.map((img, i) => (
                  <button
                    key={i}
                    className={`min-w-[70px] aspect-square rounded-xl overflow-hidden relative ${mainImage === img ? 'ring-2 ring-gold' : 'opacity-60'}`}
                    onClick={() => setMainImage(img)}
                  >
                    <img img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="lg:w-1/2">
            <div className="mb-10 pb-10 border-b border-luxury-bg-card dark:border-white/10">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-black mb-4 block gold-glow">The {product.category} Collection</span>
              <h1 className="text-4xl md:text-6xl font-serif text-maroon-dominant dark:text-white mb-6 leading-none uppercase tracking-tight">{product.name}</h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-1 bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                  </div>
                  <span className="text-[10px] font-black text-gold ml-2 uppercase tracking-wider">4.8 Rating</span>
                </div>
                <span className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest font-bold">• &nbsp; 12 Verified Reviews</span>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-serif text-maroon-dominant dark:text-gold font-light">₹{product.price.toLocaleString('en-IN')}</p>
                <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Complimentary Insured Shipping
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-12">
              <div className="flex gap-4">
                <button
                  onClick={() => { onAddToCart(product); onNavigate('checkout'); }}
                  className="flex-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-maroon-dominant py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all shadow-xl active:scale-95 group relative overflow-hidden border-none"
                >
                  <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Buy Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-[1.5] bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 group relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Add to Bag</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>

            <div className="bg-luxury-bg-secondary dark:bg-luxury-dark-card/50 rounded-3xl p-8 mb-10 border border-transparent dark:border-white/5 backdrop-blur-sm">
              <div className="flex gap-8 mb-8 border-b border-luxury-bg-card dark:border-white/10">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'specs' ? 'text-maroon-dominant dark:text-gold' : 'text-luxury-text-light/40 dark:text-white/40 hover:text-maroon-dominant dark:hover:text-gold'}`}
                >
                  Product Specification
                  {activeTab === 'specs' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold animate-in slide-in-from-left duration-300"></div>}
                </button>
                <button
                  onClick={() => setActiveTab('price')}
                  className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'price' ? 'text-maroon-dominant dark:text-gold' : 'text-luxury-text-light/40 dark:text-white/40 hover:text-maroon-dominant dark:hover:text-gold'}`}
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
                      className="w-full px-6 py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
                    >
                      <span className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('metal') ? 'text-gold' : 'group-hover:text-gold'}`}>1. Metal Details</span>
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${openAccordions.includes('metal') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('metal') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gross Weight</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.grossWeight || product.weight || '6.81'} (Approx.)</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Weight</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.goldWeight || product.weight || '6.81'} (Approx.)</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Base Metal</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.baseMetal || 'Gold'}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Purity</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.goldPurity || product.karat || '22K'}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Gold Color</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.goldColor || 'Yellow'}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Metal Stamp</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.metalStamp || 'BIS'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diamond Details Accordion (Conditional) */}
                  {(product.diamondCarat || product.category === 'Diamond') && (
                    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('diamond') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
                      <button
                        onClick={() => toggleAccordion('diamond')}
                        className="w-full px-6 py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
                      >
                        <span className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('diamond') ? 'text-gold' : 'group-hover:text-gold'}`}>2. Diamond Details</span>
                        <div className={`p-1.5 rounded-full transition-all duration-300 ${openAccordions.includes('diamond') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('diamond') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-x-12 gap-y-6">
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Weight</span>
                            <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.diamondCarat || '0.8ct'}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Diamond Quality</span>
                            <span className="text-base font-serif text-maroon-dominant dark:text-white">VS-SI / G-H</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Setting Type</span>
                            <span className="text-base font-serif text-maroon-dominant dark:text-white">Prong / Pave</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* More Info Accordion */}
                  <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('more') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
                    <button
                      onClick={() => toggleAccordion('more')}
                      className="w-full px-6 py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
                    >
                      <span className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('more') ? 'text-gold' : 'group-hover:text-gold'}`}>
                        {(product.diamondCarat || product.category === 'Diamond') ? '3. More Info' : '2. More Info'}
                      </span>
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${openAccordions.includes('more') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('more') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Size</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.sizes?.join(', ') || '15, 16, 17, 18, 19, 20'} No</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Resizeable</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.resizeable ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Warranty</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.warranty ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Jewellery for</span>
                          <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.jewelleryFor || 'Female'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Accordion */}
                  <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openAccordions.includes('details') ? 'border-gold/30 bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : 'border-luxury-bg-card dark:border-white/10 hover:border-gold/20'}`}>
                    <button
                      onClick={() => toggleAccordion('details')}
                      className="w-full px-6 py-5 flex items-center justify-between text-maroon-dominant dark:text-white transition-colors group"
                    >
                      <span className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors ${openAccordions.includes('details') ? 'text-gold' : 'group-hover:text-gold'}`}>
                        {(product.diamondCarat || product.category === 'Diamond') ? '4. Product Details' : '3. Product Details'}
                      </span>
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${openAccordions.includes('details') ? 'bg-gold text-maroon-dominant rotate-180' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.includes('details') ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-2 space-y-4">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4 pt-2">
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Product Code</span>
                            <span className="text-base font-serif text-maroon-dominant dark:text-white uppercase">{product.productCode || 'N/A'}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest">Design Code</span>
                            <span className="text-base font-serif text-maroon-dominant dark:text-white uppercase">{product.designCode || 'N/A'}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-luxury-bg-card/30 dark:border-white/5">
                          <span className="text-[10px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-widest mb-2 block">Description</span>
                          <p className="text-base font-serif text-maroon-dominant/80 dark:text-white/80 leading-relaxed italic">
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
                        <div className="flex justify-between items-end py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                          <span className="text-[11px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Gold Value</span>
                          <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{goldValue.toLocaleString('en-IN')}.00</span>
                        </div>
                        <div className="flex justify-between items-end py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                          <span className="text-[11px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Making Charge</span>
                          <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{makingCharge.toLocaleString('en-IN')}.00</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-gold/20 bg-gold/10 -mx-4 px-4 rounded-lg my-1">
                          <span className="text-[11px] text-gold uppercase font-black tracking-[0.2em]">Grand Total</span>
                          <span className="text-2xl font-serif text-gold font-bold">₹{grandTotal.toLocaleString('en-IN')}.00</span>
                        </div>
                        <div className="flex justify-between items-end py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                          <span className="text-[11px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">GST (3%)</span>
                          <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{gst3.toLocaleString('en-IN')}.00</span>
                        </div>
                        <div className="flex justify-between items-end py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                          <span className="text-[11px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Net Amount</span>
                          <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{netAmount.toLocaleString('en-IN')}.00</span>
                        </div>
                        <div className="flex justify-between items-end py-3 border-b border-luxury-bg-card/50 dark:border-white/5 group hover:bg-gold/5 transition-colors -mx-4 px-4 rounded-lg">
                          <span className="text-[11px] text-luxury-text-light/70 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.15em]">Round Off</span>
                          <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{roundOff}</span>
                        </div>
                        <div className="flex justify-between items-center pt-8 px-2">
                          <span className="text-xs text-maroon-dominant dark:text-gold uppercase font-black tracking-[0.3em]">Payable Amount</span>
                          <div className="flex flex-col items-end">
                            <span className="text-4xl font-serif text-maroon-dominant dark:text-gold font-bold drop-shadow-sm">₹{payableAmount.toLocaleString('en-IN')}</span>
                            <div className="h-1 w-full bg-gold/50 rounded-full mt-1"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-luxury-bg-card dark:border-white/10">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-luxury-bg-secondary dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 text-gold group-hover:text-maroon-dominant transition-colors" />
                </div>
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest group-hover:text-gold transition-colors">100% Certified</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer border-x border-luxury-bg-card dark:border-white/5 px-4">
                <div className="w-12 h-12 rounded-full bg-luxury-bg-secondary dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
                  <RefreshCw className="w-5 h-5 text-gold group-hover:text-maroon-dominant transition-colors" />
                </div>
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest group-hover:text-gold transition-colors">Lifetime Policy</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-luxury-bg-secondary dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
                  <Truck className="w-5 h-5 text-gold group-hover:text-maroon-dominant transition-colors" />
                </div>
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest group-hover:text-gold transition-colors">Insured Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-32 pt-20 border-t border-luxury-bg-card dark:border-white/10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-black mb-3 block gold-glow">Curated For You</span>
              <h3 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">You May Also <span className="italic text-gold">Adore</span></h3>
            </div>
            <button
              onClick={() => onNavigateToCategory('All')}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant dark:text-gold hover:tracking-[0.3em] transition-all border-b border-gold pb-1"
            >
              Explore Collection
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onClick={(prod) => onNavigate('pdp', prod)}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(p.id)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;