import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Sparkles, X, Check, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';
import heritageVideo from '../assets/Hero Banner.webm';
import heroPoster from '../assets/models/models (2).jpg';

interface CategoryPageProps {
  category?: Category | string;
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onProductClick, onToggleWishlist, wishlist }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [selectedPurities, setSelectedPurities] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video playback failed:", error);
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low-High' },
    { value: 'price-desc', label: 'Price: High-Low' },
    { value: 'newest', label: 'New Arrivals' },
  ];

  // Derived filter options from PRODUCTS
  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), []);
  const subCategories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.subCategory))), []);
  const purities = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.karat || p.goldPurity).filter(Boolean))), []);
  const genders = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.jewelleryFor).filter(Boolean))), []);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subCategory.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // SubCategory Filter
    if (selectedSubCategories.length > 0) {
      result = result.filter(p => selectedSubCategories.includes(p.subCategory));
    }

    // Price Filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Purity Filter
    if (selectedPurities.length > 0) {
      result = result.filter(p => selectedPurities.includes(p.karat || '') || selectedPurities.includes(p.goldPurity || ''));
    }

    // Gender Filter
    if (selectedGenders.length > 0) {
      result = result.filter(p => selectedGenders.includes(p.jewelleryFor || ''));
    }

    const sorted = [...result];
    if (sortBy === 'price-asc') return sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') return sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') return sorted.filter(p => p.isNewArrival);
    return sorted;
  }, [selectedCategories, selectedSubCategories, priceRange, selectedPurities, selectedGenders, searchQuery, sortBy]);

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setList(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setPriceRange([0, 1000000]);
    setSelectedPurities([]);
    setSelectedGenders([]);
    setSearchQuery('');
  };

  const activeFilterCount = (
    (selectedCategories.length > 0 ? 1 : 0) +
    (selectedSubCategories.length > 0 ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 1000000 ? 1 : 0) +
    (selectedPurities.length > 0 ? 1 : 0) +
    (selectedGenders.length > 0 ? 1 : 0)
  );

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 transition-colors animate-in fade-in duration-700">
      {/* Premium Hero Section */}
      <section className="relative h-[280px] md:h-[350px] flex items-center justify-center overflow-hidden bg-maroon-dominant">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-50"
        >
          <source src={heritageVideo} type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dominant/60 via-transparent to-luxury-bg-primary dark:to-luxury-dark-primary"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-6 bg-gold/40"></div>
            <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black gold-glow">Handcrafted Elegance</span>
            <div className="h-[1px] w-6 bg-gold/40"></div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 uppercase tracking-tight leading-tight">
            {selectedCategories.length === 1 ? selectedCategories[0] : 'All Treasures'} <span className="italic text-gold gold-glow">Collection</span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/70 font-light italic text-sm md:text-lg leading-relaxed">
            "A legacy of brilliance, where every piece tells a story of timeless craftsmanship and Bengali heritage."
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Search and Sort Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 border-b border-gold/10 mb-8 sticky top-[130px] lg:top-[180px] bg-luxury-bg-primary/95 dark:bg-luxury-dark-primary/95 backdrop-blur-md z-30">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
            <input
              type="text"
              placeholder="Search for your masterpiece..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-white/5 border border-gold/10 rounded-full text-xs font-light tracking-wide focus:outline-none focus:border-gold/30 transition-all placeholder:text-maroon-dominant/30 dark:placeholder:text-white/20"
            />
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto gap-6 pb-2 lg:pb-0">
            <div className="relative" ref={sortRef}>
              <div
                className="flex items-center gap-3 bg-white/40 dark:bg-black/20 px-5 py-2.5 rounded-full border border-gold/20 cursor-pointer hover:border-gold/40 hover:bg-white/60 dark:hover:bg-black/40 transition-all duration-300 group backdrop-blur-sm"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <span className="text-xs text-maroon-dominant/60 dark:text-white/50 font-black uppercase tracking-widest whitespace-nowrap">Sort By:</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-maroon-dominant dark:text-gold uppercase tracking-widest whitespace-nowrap transition-colors">
                    {sortOptions.find(opt => opt.value === sortBy)?.label}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gold/80 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                </div>
              </div>

              {isSortOpen && (
                <div className="absolute top-[calc(100%+0.5rem)] right-0 lg:right-auto lg:left-0 w-64 bg-white/95 dark:bg-luxury-dark-primary/95 backdrop-blur-md border border-gold/20 rounded-xl shadow-xl shadow-black/5 dark:shadow-none overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between group ${sortBy === option.value
                          ? 'text-gold font-bold bg-gold/5'
                          : 'text-maroon-dominant/70 dark:text-white/60 font-medium hover:text-maroon-dominant hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5'
                          }`}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{option.label}</span>
                        {sortBy === option.value && <Check className="w-4 h-4 text-gold" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <p className="text-[10px] text-maroon-dominant/40 dark:text-white/30 font-black uppercase tracking-widest italic whitespace-nowrap">
              {filteredProducts.length} items Found
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 space-y-8">
            <div className="flex items-center justify-between group">
              <h3 className="text-[11px] font-black text-gold uppercase tracking-[0.4em] gold-glow">Refine Your Selection</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[9px] text-maroon-dominant/40 dark:text-white/30 hover:text-gold uppercase tracking-widest transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* Product Type */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">Product Type</h4>
              <div className="grid grid-cols-1 gap-2">
                {Object.values(Category).map((cat) => (
                  <label key={cat} className="group flex items-center justify-between cursor-pointer py-1.5 hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedCategories.includes(cat) ? 'bg-gold border-gold' : 'border-gold/30'
                        }`}>
                        {selectedCategories.includes(cat) && <Check className="w-3 h-3 text-maroon-dominant" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                      />
                      <span className={`text-[11px] uppercase tracking-wider transition-colors ${selectedCategories.includes(cat) ? 'text-gold font-bold' : 'text-maroon-dominant/70 dark:text-white/60 font-light'
                        }`}>{cat}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Sub Category */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">Material & Style</h4>
              <div className="grid grid-cols-1 gap-2">
                {subCategories.map((sub) => (
                  <label key={sub} className="group flex items-center justify-between cursor-pointer py-1.5 hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedSubCategories.includes(sub) ? 'bg-gold border-gold' : 'border-gold/30'
                        }`}>
                        {selectedSubCategories.includes(sub) && <Check className="w-3 h-3 text-maroon-dominant" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedSubCategories.includes(sub)}
                        onChange={() => toggleFilter(selectedSubCategories, setSelectedSubCategories, sub)}
                      />
                      <span className={`text-[11px] uppercase tracking-wider transition-colors ${selectedSubCategories.includes(sub) ? 'text-gold font-bold' : 'text-maroon-dominant/70 dark:text-white/60 font-light'
                        }`}>{sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">Price Spectrum</h4>
                <span className="text-[10px] text-gold font-bold italic">Max: ₹{(priceRange[1] / 1000).toFixed(0)}k</span>
              </div>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold bg-gold/20 h-1 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[8px] text-maroon-dominant/40 dark:text-white/30 uppercase font-black">₹0</span>
                  <span className="text-[8px] text-maroon-dominant/40 dark:text-white/30 uppercase font-black">₹10L+</span>
                </div>
              </div>
            </div>

            {/* Purity */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">Metal Purity</h4>
              <div className="flex flex-wrap gap-2">
                {purities.map((purity) => (
                  <button
                    key={purity}
                    onClick={() => toggleFilter(selectedPurities, setSelectedPurities, purity)}
                    className={`px-3 py-1.5 rounded-full border text-[9px] font-bold tracking-widest uppercase transition-all ${selectedPurities.includes(purity)
                      ? 'bg-gold border-gold text-maroon-dominant shadow-md'
                      : 'border-gold/20 text-maroon-dominant/60 dark:text-white/50 hover:border-gold/50'
                      }`}
                  >
                    {purity}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">Treasures For</h4>
              <div className="flex flex-wrap gap-2">
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => toggleFilter(selectedGenders, setSelectedGenders, gender)}
                    className={`px-3 py-1.5 rounded-full border text-[9px] font-bold tracking-widest uppercase transition-all ${selectedGenders.includes(gender)
                      ? 'bg-gold border-gold text-maroon-dominant shadow-md'
                      : 'border-gold/20 text-maroon-dominant/60 dark:text-white/50 hover:border-gold/50'
                      }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    product={product}
                    onClick={onProductClick}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;