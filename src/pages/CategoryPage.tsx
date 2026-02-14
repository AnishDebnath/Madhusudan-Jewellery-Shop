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
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result = result.filter(p => p.isNewArrival);
    return result;
  }, [category, sortBy]);

  return (
    <div className="bg-dark-primary min-h-screen pb-24">
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden bg-dark-card border-b border-luxury-border">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk-weave.png')] opacity-5"></div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Curated Collection</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 uppercase tracking-wider">{category || 'Jewellery Catalog'}</h1>
          <p className="max-w-xl mx-auto text-luxury-secondary italic text-sm md:text-base">
            Discover {category ? category.toLowerCase() : 'our entire'} collection of heritage gold and certified diamonds.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-dark-card p-6 rounded-sm shadow-2xl border border-luxury-border">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">
              <Filter className="w-4 h-4 text-gold" /> Filter By <ChevronDown className="w-3 h-3" />
            </div>
            <div className="h-4 w-[1px] bg-luxury-border"></div>
            <p className="text-[11px] text-luxury-muted font-medium uppercase tracking-widest">
              Showing {filteredProducts.length} Results
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-luxury-muted font-bold uppercase tracking-widest">Sort By:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-[11px] font-bold text-white uppercase tracking-widest focus:outline-none cursor-pointer border-b border-gold/30 pb-1"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={onProductClick} 
              onARTryOn={onARTryOn} 
            />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-32 text-center text-luxury-muted italic">
              No results found in this collection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;