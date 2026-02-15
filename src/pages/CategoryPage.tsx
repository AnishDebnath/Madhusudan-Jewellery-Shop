import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  category?: Category | string;
  onProductClick: (p: Product) => void;
  onARTryOn: (p: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onProductClick, onARTryOn }) => {
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
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 transition-colors animate-in fade-in duration-500">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-maroon-dominant border-b border-gold/10">
        <div className="absolute inset-0 bg-maroon-dominant opacity-10 animate-kenburns_slow"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700 gold-glow">Curated Collection</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-none animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">{category || 'Jewellery Catalog'}</h1>
          <p className="max-w-xl mx-auto text-white/70 font-light italic text-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Discover {category ? category.toLowerCase() : 'our entire'} collection of heritage gold and certified diamonds.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-luxury-dark-card p-6 rounded-3xl shadow-xl border border-transparent dark:border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-maroon-dominant dark:text-white text-[10px] font-black uppercase tracking-[0.2em] hover:text-gold transition-colors group">
              <Filter className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" /> Filter By <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="h-4 w-[1px] bg-luxury-bg-card dark:bg-white/10"></div>
            <p className="text-[10px] text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-bold uppercase tracking-widest">
              Showing {filteredProducts.length} Results
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-bold uppercase tracking-widest hidden sm:inline">Sort By:</span>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-[0.2em] focus:outline-none cursor-pointer border-b border-gold/30 pb-1 pr-6 hover:border-gold transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gold absolute right-0 top-0.5 pointer-events-none group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
              onARTryOn={onARTryOn}
            />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-40 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-luxury-bg-secondary dark:bg-white/5 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-gold/50" />
              </div>
              <p className="text-luxury-text-light/40 dark:text-white/40 italic font-serif text-xl">No treasures found in this collection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;