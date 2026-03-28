import React, { useState, useMemo, useRef, useEffect } from 'react';
import { PRODUCTS } from '../../data';
import { Category, Product } from '../../types';
import ProductCard from '../../components/product/ProductCard';
import CategoryHero from './CategoryHero';
import CategoryToolbar from './CategoryToolbar';
import CategorySidebar from './CategorySidebar';

interface CategoryPageProps {
  category?: Category | string;
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onAddToCart?: (p: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onProductClick, onToggleWishlist, wishlist, onAddToCart }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>(category ? [category as string] : []);
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

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subCategory.toLowerCase().includes(query)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedSubCategories.length > 0) {
      result = result.filter(p => selectedSubCategories.includes(p.subCategory));
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedPurities.length > 0) {
      result = result.filter(p => selectedPurities.includes(p.karat || '') || selectedPurities.includes(p.goldPurity || ''));
    }

    if (selectedGenders.length > 0) {
      result = result.filter(p => selectedGenders.includes(p.jewelleryFor || ''));
    }

    const sorted = [...result];
    if (sortBy === 'price-asc') return sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') return sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') return sorted.filter(p => p.isNewArrival);
    return sorted;
  }, [selectedCategories, selectedSubCategories, priceRange, selectedPurities, selectedGenders, searchQuery, sortBy]);

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
      <CategoryHero videoRef={videoRef} selectedCategories={selectedCategories} />

      <div className="container mx-auto px-6">
        <CategoryToolbar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            isSortOpen={isSortOpen}
            setIsSortOpen={setIsSortOpen}
            sortOptions={sortOptions}
            filteredCount={filteredProducts.length}
            sortRef={sortRef}
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <CategorySidebar 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedSubCategories={selectedSubCategories}
            setSelectedSubCategories={setSelectedSubCategories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedPurities={selectedPurities}
            setSelectedPurities={setSelectedPurities}
            selectedGenders={selectedGenders}
            setSelectedGenders={setSelectedGenders}
            clearFilters={clearFilters}
            activeFilterCount={activeFilterCount}
            subCategories={subCategories}
            purities={purities}
            genders={genders}
          />

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
                    onAddToCart={onAddToCart}
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
