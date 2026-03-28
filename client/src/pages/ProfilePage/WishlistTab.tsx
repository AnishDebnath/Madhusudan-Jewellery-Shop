import React from 'react';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data';

interface WishlistTabProps {
    wishlist: string[];
    onToggleWishlist: (id: string) => void;
    onNavigate: (view: any, data?: any) => void;
}

const WishlistTab: React.FC<WishlistTabProps> = ({ wishlist, onToggleWishlist, onNavigate }) => {
    const items = PRODUCTS.filter(p => wishlist.includes(p.id));

    if (items.length === 0) return (
        <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
            <Heart className="w-12 h-12 text-gold/20 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-maroon-dominant dark:text-white uppercase mb-4">Your wishlist is empty</h3>
            <button onClick={() => onNavigate('home')} className="text-gold text-[10px] font-black uppercase tracking-[0.3em] hover:text-maroon-dominant transition-colors border-b border-gold/30 pb-1">Begin Your Collection</button>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {items.map(product => (
                <div key={product.id} className="bg-white dark:bg-luxury-dark-card rounded-3xl border border-maroon-dominant/5 dark:border-white/5 p-4 flex gap-4 group">
                    <div className="w-24 h-24 bg-luxury-bg-primary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                    </div>
                    <div className="flex-1 py-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-serif text-maroon-dominant dark:text-white text-base mb-1">{product.name}</h4>
                                <p className="text-gold font-bold text-sm tracking-tight">₹{product.price.toLocaleString('en-IN')}</p>
                            </div>
                            <button onClick={() => onToggleWishlist(product.id)} className="text-red-500/40 hover:text-red-500 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                            onClick={() => onNavigate('pdp', product)}
                            className="mt-3 flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white/60 hover:text-gold transition-colors"
                        >
                            View Piece <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WishlistTab;
