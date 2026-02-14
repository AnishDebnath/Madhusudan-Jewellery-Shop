import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Truck, Heart, Share2, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Product, Category } from '../types';

interface PDPProps {
  product?: Product;
  onAddToCart: (p: Product) => void;
  onARTryOn: (p: Product) => void;
  onNavigateToCategory: (cat: Category | string) => void;
}

const ProductDetailPage: React.FC<PDPProps> = ({ product, onAddToCart, onARTryOn, onNavigateToCategory }) => {
  if (!product) return null;
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen pb-24 text-luxury-text-light dark:text-luxury-text-dark transition-colors">
      <div className="container mx-auto px-6 py-6 border-b border-luxury-bg-card dark:border-maroon-border/20 mb-12">
        <div className="flex items-center gap-2 text-[10px] font-black text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest">
          <button onClick={() => onNavigateToCategory('All')} className="hover:text-gold transition-colors">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => onNavigateToCategory(product.category)} className="hover:text-gold transition-colors">{product.category}</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-maroon-dominant dark:text-white">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-4">
            <div className="hidden md:flex flex-col gap-4 w-24">
              <div 
                className={`aspect-square border-2 rounded-sm overflow-hidden cursor-pointer transition-all ${mainImage === product.image ? 'border-gold shadow-lg' : 'border-luxury-bg-card dark:border-maroon-border/20'}`}
                onClick={() => setMainImage(product.image)}
              >
                <img src={product.image} className="w-full h-full object-cover" />
              </div>
              {product.additionalImages?.map((img, i) => (
                <div 
                  key={i}
                  className={`aspect-square border-2 rounded-sm overflow-hidden cursor-pointer transition-all ${mainImage === img ? 'border-gold shadow-lg' : 'border-luxury-bg-card dark:border-maroon-border/20'}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-luxury-bg-secondary dark:bg-luxury-dark-secondary rounded-sm overflow-hidden relative group border border-luxury-bg-card dark:border-maroon-border/20 shadow-2xl">
              <img src={mainImage} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
              <button className="absolute top-6 right-6 p-4 bg-white/60 dark:bg-maroon-dominant/60 backdrop-blur-md hover:bg-gold dark:hover:bg-gold rounded-full shadow-2xl transition-all hover:scale-110 border border-gold/20">
                <Heart className="w-6 h-6 text-maroon-dominant dark:text-white" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-gold text-[11px] tracking-[0.5em] uppercase font-bold mb-4 block">The {product.category} Collection</span>
              <h1 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white mb-4 leading-tight uppercase tracking-wider">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <span className="text-xs text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest font-black">(4.8 • 12 Reviews)</span>
              </div>
              <p className="text-3xl font-serif text-maroon-dominant dark:text-gold font-bold gold-glow">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-luxury-text-light/40 dark:text-luxury-text-darkMuted text-[10px] uppercase mt-1 font-bold">Complimentary Insured Shipping Across India</p>
            </div>

            <div className="p-8 bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-sm mb-10 border border-luxury-bg-card dark:border-maroon-border/40 shadow-xl">
              <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.2em] mb-4 border-b border-luxury-bg-card dark:border-maroon-border/20 pb-2">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-y-4">
                {product.karat && (
                  <div>
                    <span className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-bold">Metal Purity</span>
                    <span className="text-sm font-bold text-maroon-dominant dark:text-white">{product.karat} Solid Gold</span>
                  </div>
                )}
                {product.weight && (
                  <div>
                    <span className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-bold">Gross Weight</span>
                    <span className="text-sm font-bold text-maroon-dominant dark:text-white">{product.weight}</span>
                  </div>
                )}
                <div>
                  <span className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase block font-bold">Certification</span>
                  <span className="text-sm font-bold text-maroon-dominant dark:text-white flex items-center gap-1">BIS Hallmark <CheckCircle2 className="w-3 h-3 text-green-500" /></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-maroon-dominant text-white py-5 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-gold transition-all shadow-2xl active:scale-95 border border-maroon-border"
              >
                Add to Shopping Bag
              </button>
              {product.arSupport && (
                <button 
                  onClick={() => onARTryOn(product)}
                  className="flex-1 border-2 border-gold text-gold py-5 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-white dark:hover:text-maroon-dominant transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" /> Virtual Try-On
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-luxury-bg-card dark:border-maroon-border/20">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-gold mb-3 gold-glow" />
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest">100% Certified</span>
              </div>
              <div className="flex flex-col items-center text-center border-x border-luxury-bg-card dark:border-maroon-border/20 px-4">
                <RefreshCw className="w-6 h-6 text-gold mb-3 gold-glow" />
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest">Lifetime Policy</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-gold mb-3 gold-glow" />
                <span className="text-[9px] font-black text-luxury-text-light/60 dark:text-white uppercase tracking-widest">Insured Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;