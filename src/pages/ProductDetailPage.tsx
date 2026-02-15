import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Truck, Heart, Share2, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
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
                    <img src={img} className="w-full h-full object-cover" />
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

            <div className="bg-luxury-bg-secondary dark:bg-luxury-dark-card/50 rounded-3xl p-8 mb-10 border border-transparent dark:border-white/5 backdrop-blur-sm">
              <h4 className="text-[10px] font-black text-luxury-text-light/40 dark:text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                Technical Specifications
                <div className="h-[1px] flex-1 bg-luxury-bg-card dark:bg-white/10"></div>
              </h4>
              <div className="grid grid-cols-2 gap-y-6">
                {product.karat && (
                  <div>
                    <span className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-black tracking-widest mb-1">Metal Purity</span>
                    <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.karat} Solid Gold</span>
                  </div>
                )}
                {product.weight && (
                  <div>
                    <span className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-black tracking-widest mb-1">Gross Weight</span>
                    <span className="text-base font-serif text-maroon-dominant dark:text-white">{product.weight}</span>
                  </div>
                )}
                <div className="col-span-2">
                  <span className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-black tracking-widest mb-1">Certification</span>
                  <span className="text-base font-serif text-maroon-dominant dark:text-white flex items-center gap-2">
                    BIS Hallmarked
                    <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded-full border border-green-500/20 font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Certified
                    </span>
                  </span>
                </div>
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