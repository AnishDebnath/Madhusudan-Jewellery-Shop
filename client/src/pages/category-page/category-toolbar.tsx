import React from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';

interface CategoryToolbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (open: boolean) => void;
  sortOptions: any[];
  filteredCount: number;
  sortRef: any;
}

const CategoryToolbar: React.FC<CategoryToolbarProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  isSortOpen,
  setIsSortOpen,
  sortOptions,
  filteredCount,
  sortRef
}) => (
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
        {filteredCount} items Found
      </p>
    </div>
  </div>
);

export default CategoryToolbar;
