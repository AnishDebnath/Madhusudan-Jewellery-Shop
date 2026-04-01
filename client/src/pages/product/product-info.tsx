import React from 'react';
import { Star, Zap, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';

interface ProductInfoProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onNavigate: (view: string, data?: any) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart, onNavigate }) => (
  <div className="mb-8 pb-8 border-b border-luxury-bg-card dark:border-white/10">
    <span className="text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-black mb-3 md:mb-4 block gold-glow">The {product.category} Collection</span>
    <h1 className="text-[22px] md:text-[28px] lg:text-[36px] font-serif text-maroon-dominant dark:text-white mb-2 md:mb-3 leading-tight uppercase tracking-tight">{product.name}</h1>
    {product.productCode && (
      <span className="inline-flex items-center gap-2 mb-4 md:mb-6">
        <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-luxury-text-light/40 dark:text-white/30">Product Code:</span>
        <span className="text-[9px] uppercase tracking-[0.25em] font-black text-maroon-dominant/60 dark:text-white/50 bg-luxury-bg-card dark:bg-white/5 px-3 py-1 rounded-full border border-luxury-bg-card dark:border-white/10">{product.productCode}</span>
      </span>
    )}

    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
      <div className="flex items-center gap-1 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-gold" />)}
        </div>
        <span className="text-[9px] font-black text-gold ml-2 uppercase tracking-wider">4.8 Rating</span>
      </div>
      <span className="text-[9px] md:text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest font-bold">• &nbsp; 12 Verified Reviews</span>
    </div>

    <div className="space-y-1 md:space-y-2">
      <p className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-maroon-dominant dark:text-gold">₹{product.price.toLocaleString('en-IN')}</p>
      <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-[9px] md:text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        Complimentary Insured Shipping
      </p>
    </div>

    <div className="flex flex-col gap-4 mt-6 md:mt-8">
      <div className="flex gap-4">
        <button
          onClick={() => { onAddToCart(product); onNavigate('checkout'); }}
          className="flex-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-maroon-dominant py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all shadow-xl active:scale-95 group relative overflow-hidden border-none"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:tracking-[0.3em] transition-all duration-300">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
            Buy Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="flex-[1.5] bg-maroon-dominant text-white py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:tracking-[0.3em] transition-all duration-300">
            <ShoppingBag className="w-3 h-3 md:w-3.5 md:h-3.5" />
            Add to Cart
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  </div>
);

export default ProductInfo;
