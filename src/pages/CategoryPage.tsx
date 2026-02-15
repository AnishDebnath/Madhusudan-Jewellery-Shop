import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';
import heritageVideo from '../assets/Hero Banner.webm';

interface CategoryPageProps {
  category?: Category | string;
  onProductClick: (p: Product) => void;
  onARTryOn: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onProductClick, onARTryOn, onToggleWishlist, wishlist }) => {
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (category && category !== 'All') {
      result = result.filter(p => p.category === category || p.subCategory === category);
    }
    const sorted = [...result];
    if (sortBy === 'price-asc') return sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') return sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') return sorted.filter(p => p.isNewArrival);
    return sorted;
  }, [category, sortBy]);

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 transition-colors animate-in fade-in duration-700">
      {/* Premium Hero Section with Video */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-maroon-dominant">
        {/* Cinematic Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
        >
          <source src={heritageVideo} type="video/webm" />
        </video>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-black/20 blur-[100px] rounded-full translate-y-1/2"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="h-[1px] w-8 bg-gold/40"></div>
            <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black gold-glow">The Eternal Collection</span>
            <div className="h-[1px] w-8 bg-gold/40"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 uppercase tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            {category || 'Jewellery'} <span className="italic text-gold block md:inline gold-glow">Catalog</span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/70 font-light italic text-base md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            "Discover the soul of Bengal in every curve, where heritage meets the brilliance of modern artisanry."
          </p>
        </div>

        {/* Floating Scroll Indicator Decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 hidden md:block"></div>
      </section>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        {/* Refined Filter & Sort Bar - Centered & Compact Width */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/95 dark:bg-luxury-dark-card/95 p-3.5 md:p-4 rounded-full shadow-xl border border-gold/10 dark:border-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-6 md:gap-8">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.4, behavior: 'smooth' })}
                className="flex items-center gap-2.5 text-maroon-dominant dark:text-white text-[10px] font-black uppercase tracking-[0.2em] hover:text-gold transition-all group px-4 py-2 hover:bg-maroon-dominant/5 dark:hover:bg-white/5 rounded-full"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                Refine Search
                <ChevronDown className="w-3 h-3 text-gold/50 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="h-5 w-[1px] bg-maroon-dominant/10 dark:bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <p className="text-[9px] text-maroon-dominant/40 dark:text-white/30 font-black uppercase tracking-[0.2em]">Treasures Unveiled</p>
                <p className="text-[11px] text-maroon-dominant dark:text-gold font-bold font-serif italic">
                  {filteredProducts.length} Exquisite Pieces
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-maroon-dominant/5 dark:bg-white/5 px-5 py-2 rounded-full border border-gold/5">
                <span className="text-[9px] text-maroon-dominant/50 dark:text-white/40 font-black uppercase tracking-widest hidden lg:inline">Sort Masterpieces:</span>
                <div className="relative group min-w-[130px]">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-transparent text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-[0.1em] focus:outline-none cursor-pointer pr-6"
                  >
                    <option value="featured">Featured Selection</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gold absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid Header */}
        <div className="mt-20 mb-12 flex items-center gap-6">
          <h2 className="text-[10px] font-black text-gold uppercase tracking-[0.5em] whitespace-nowrap gold-glow">Exquisite Catalog</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent"></div>
        </div>

        {/* Optimized Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-10 duration-700">
              <ProductCard
                product={product}
                onClick={onProductClick}
                onARTryOn={onARTryOn}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-48 text-center flex flex-col items-center justify-center">
              <div className="relative mb-10">
                <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-gold/30" />
                </div>
                <div className="absolute inset-0 w-24 h-24 border border-gold/5 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-3xl font-serif text-maroon-dominant dark:text-white/80 italic mb-4">Seeking a unique creation?</h3>
              <p className="max-w-md mx-auto text-sm text-maroon-dominant/40 dark:text-white/30 font-light leading-relaxed mb-10">
                While this specific collection is currently being curated, our artisans are ready to bring your vision to life.
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-10 py-4 border border-gold text-gold text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-gold hover:text-maroon-dominant transition-all duration-500 shadow-xl active:scale-95"
              >
                Request Custom Atelier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;