import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Product, Category } from '../../types';
import { PRODUCTS } from '../../data';
import ProductCard from '../../components/product/ProductCard';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

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
  product, onAddToCart, onNavigateToCategory, onToggleWishlist, isWishlisted, wishlist, onNavigate
}) => {
  if (!product) return null;
  const [mainImage, setMainImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState<'specs' | 'price'>('specs');
  const [openAccordions, setOpenAccordions] = useState<string[]>(['metal']);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 text-luxury-text-light dark:text-luxury-text-dark transition-colors animate-in fade-in duration-500">
      <div className="container mx-auto px-6 py-4 border-b border-luxury-bg-card dark:border-white/10 mb-8 sticky top-[110px] lg:top-[140px] z-20 bg-luxury-bg-primary/95 dark:bg-luxury-dark-primary/95 backdrop-blur-md">
        <div className="flex items-center gap-2 text-[10px] font-black text-luxury-text-light/50 dark:text-luxury-text-darkMuted uppercase tracking-widest">
          <button onClick={() => onNavigateToCategory('All')} className="hover:text-gold">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => onNavigateToCategory(product.category)} className="hover:text-gold">{product.category}</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-maroon-dominant dark:text-white">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <ProductGallery product={product} mainImage={mainImage} setMainImage={setMainImage} onToggleWishlist={onToggleWishlist} isWishlisted={isWishlisted} />
          <div className="lg:w-1/2">
            <ProductInfo product={product} onAddToCart={onAddToCart} onNavigate={onNavigate} />
            <ProductTabs product={product} activeTab={activeTab} setActiveTab={setActiveTab} openAccordions={openAccordions} toggleAccordion={toggleAccordion} />
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-luxury-bg-card dark:border-white/10">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <span className="text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-black mb-2 md:mb-3 block gold-glow">Curated For You</span>
              <h3 className="text-2xl md:text-3xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">You May Also <span className="italic text-gold">Adore</span></h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} onClick={(prod) => onNavigate('pdp', prod)} onToggleWishlist={onToggleWishlist} isWishlisted={wishlist.includes(p.id)} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
