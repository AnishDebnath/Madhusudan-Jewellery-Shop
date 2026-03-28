import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types';

interface ProductInfoProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onNavigate: (view: string, data?: any) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart, onNavigate }) => (
  <div className="mb-10 pb-10 border-b border-luxury-bg-card dark:border-white/10">
    <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-black mb-4 block gold-glow">The {product.category} Collection</span>
    <h1 className="text-4xl md:text-6xl font-serif text-maroon-dominant dark:text-white mb-6 leading-none uppercase tracking-tight">{product.name}</h1>

    <div className="flex flex-wrap items-center gap-6 mb-8">
      <div className="flex items-center gap-1 bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
        </div>
        <span className="text-[10px] font-black text-gold ml-2 uppercase tracking-wider">4.8 Rating</span>
      </div>
      <span className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest font-bold">• &nbsp; 12 Verified Reviews</span>
    </div>

    <div className="space-y-2">
      <p className="text-4xl font-sans font-bold tracking-tight text-maroon-dominant dark:text-gold">₹{product.price.toLocaleString('en-IN')}</p>
      <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Complimentary Insured Shipping
      </p>
    </div>

    <div className="flex flex-col gap-4 mt-8">
      <div className="flex gap-4">
        <button
          onClick={() => { onAddToCart(product); onNavigate('checkout'); }}
          className="flex-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-maroon-dominant py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all shadow-xl active:scale-95 group relative overflow-hidden border-none"
        >
          <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Buy Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="flex-[1.5] bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 group relative overflow-hidden"
        >
          <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Add to Bag</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  </div>
);

export default ProductInfo;
