import React from 'react';
import { X, Search } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-luxury-bg-primary/98 dark:bg-luxury-dark-primary/98 backdrop-blur-2xl animate-in fade-in duration-500">
      <button onClick={onClose} className="absolute top-10 right-10 p-4 text-luxury-text-light dark:text-luxury-text-dark hover:text-gold hover:rotate-90 transition-all">
        <X className="w-8 h-8" />
      </button>
      <div className="h-full container mx-auto px-6 flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl relative">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block text-center">What are you looking for today?</span>
          <input
            autoFocus
            type="text"
            placeholder="E.g. Heritage Filigree, Polki Rings..."
            className="w-full bg-transparent border-b-2 border-gold/20 py-8 text-3xl md:text-5xl font-serif text-luxury-text-light dark:text-luxury-text-dark focus:outline-none focus:border-gold transition-all placeholder:text-luxury-text-light/10 dark:placeholder:text-white/10"
          />
          <Search className="w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 text-gold opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
