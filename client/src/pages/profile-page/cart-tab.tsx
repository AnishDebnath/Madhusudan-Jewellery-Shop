import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../../types';

interface CartTabProps {
    cart: CartItem[];
    onUpdateCartQty: (id: string, qty: number) => void;
    onRemoveFromCart: (id: string) => void;
    onNavigate: (view: any, data?: any) => void;
}

const CartTab: React.FC<CartTabProps> = ({ cart, onUpdateCartQty, onRemoveFromCart, onNavigate }) => {
    if (cart.length === 0) return (
        <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
            <ShoppingBag className="w-12 h-12 text-gold/20 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-maroon-dominant dark:text-white uppercase mb-4">Your bag is empty</h3>
            <button onClick={() => onNavigate('home')} className="text-gold text-[10px] font-black uppercase tracking-[0.3em] hover:text-maroon-dominant transition-colors border-b border-gold/30 pb-1">Explore Jewels</button>
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {cart.map(item => (
                <div key={item.id} className="bg-white dark:bg-luxury-dark-card rounded-3xl border border-maroon-dominant/5 dark:border-white/5 p-6 flex gap-6 group">
                    <div className="w-24 h-24 bg-luxury-bg-primary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-serif text-maroon-dominant dark:text-white text-lg mb-1">{item.name}</h4>
                                <p className="text-maroon-dominant dark:text-gold font-bold text-base tracking-tight">₹{item.price.toLocaleString('en-IN')}</p>
                            </div>
                            <button onClick={() => onRemoveFromCart(item.id)} className="text-maroon-dominant/20 dark:text-white/20 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/5">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center bg-luxury-bg-primary dark:bg-black/20 rounded-full border border-maroon-dominant/10 dark:border-white/10 overflow-hidden">
                                <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} className="px-4 py-1 text-maroon-dominant dark:text-gold text-lg">-</button>
                                <span className="px-2 text-xs font-black text-maroon-dominant dark:text-white">{item.quantity}</span>
                                <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} className="px-4 py-1 text-maroon-dominant dark:text-gold text-lg">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pt-6 border-t border-maroon-dominant/5 dark:border-white/5 flex justify-end">
                <button onClick={() => onNavigate('cart')} className="bg-gold text-maroon-dominant px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-maroon-dominant hover:text-gold transition-all shadow-xl">Complete Acquisition</button>
            </div>
        </div>
    );
};

export default CartTab;
