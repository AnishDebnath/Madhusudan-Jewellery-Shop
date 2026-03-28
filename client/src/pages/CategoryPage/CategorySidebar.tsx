import React from 'react';
import { X, Check } from 'lucide-react';
import { Category } from '../../types';

interface CategorySidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSubCategories: string[];
  setSelectedSubCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedPurities: string[];
  setSelectedPurities: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenders: string[];
  setSelectedGenders: React.Dispatch<React.SetStateAction<string[]>>;
  clearFilters: () => void;
  activeFilterCount: number;
  subCategories: string[];
  purities: string[];
  genders: string[];
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedSubCategories,
  setSelectedSubCategories,
  priceRange,
  setPriceRange,
  selectedPurities,
  setSelectedPurities,
  selectedGenders,
  setSelectedGenders,
  clearFilters,
  activeFilterCount,
  subCategories,
  purities,
  genders
}) => {
  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setList(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
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
  );
};

export default CategorySidebar;
