import React from 'react';
import { Trash2, ChevronLeft, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onShopMore: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQty, onRemove, onCheckout, onShopMore }) => {
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const taxes = subtotal * 0.03; // GST 3%
  const total = subtotal + taxes;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-dark-primary">
        <div className="w-24 h-24 bg-dark-card rounded-full flex items-center justify-center shadow-2xl mb-8 border border-gold/10">
          <ShoppingBag className="w-10 h-10 text-gold opacity-30" />
        </div>
        <h2 className="text-3xl font-serif text-white mb-4 uppercase tracking-wider">Your bag is empty</h2>
        <p className="text-luxury-muted italic mb-12">Discover our heritage collections and find something extraordinary.</p>
        <button 
          onClick={onShopMore}
          className="bg-maroon text-white px-12 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-dark-primary transition-all active:scale-95 shadow-2xl border border-maroon-secondary"
        >
          Explore Collections
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-primary min-h-screen py-16 border-t border-luxury-border">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-white mb-12 text-center uppercase tracking-widest">Your Shopping Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-dark-card p-6 rounded-sm shadow-xl border border-luxury-border flex gap-6 group hover:border-gold/20 transition-all">
                <div className="w-32 h-32 bg-dark-secondary rounded-sm overflow-hidden flex-shrink-0 border border-luxury-border">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[0.2] group-hover:grayscale-0" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] gold-glow">{item.category}</span>
                      <h3 className="text-lg font-serif text-white tracking-wide">{item.name}</h3>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-luxury-muted hover:text-red-500 transition-colors p-2">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gold font-bold mb-4 gold-glow">₹{item.price.toLocaleString('en-IN')}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-luxury-border rounded-sm overflow-hidden">
                      <button onClick={() => onUpdateQty(item.id, item.quantity - 1)} className="px-4 py-2 text-gold hover:bg-maroon/20 transition-colors">-</button>
                      <span className="px-6 py-2 text-xs font-bold text-white border-x border-luxury-border bg-dark-primary">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.quantity + 1)} className="px-4 py-2 text-gold hover:bg-maroon/20 transition-colors">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button onClick={onShopMore} className="flex items-center gap-3 text-[11px] font-bold text-gold uppercase tracking-[0.3em] hover:text-white transition-all mt-8 group gold-glow">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-dark-card p-8 rounded-sm shadow-2xl border border-luxury-border sticky top-[160px]">
              <h4 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-8 border-b border-luxury-border pb-4 gold-glow">Order Summary</h4>
              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-xs font-bold tracking-widest">
                  <span className="text-luxury-muted uppercase">Subtotal</span>
                  <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs font-bold tracking-widest">
                  <span className="text-luxury-muted uppercase">GST (3%)</span>
                  <span className="text-white">₹{taxes.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs font-bold tracking-widest">
                  <span className="text-luxury-muted uppercase">Shipping</span>
                  <span className="text-green-500 uppercase">Complimentary</span>
                </div>
                <div className="pt-6 border-t border-luxury-border flex justify-between items-center">
                  <span className="text-gold font-bold uppercase text-xs tracking-widest gold-glow">Estimated Total</span>
                  <span className="text-2xl font-serif text-white font-bold tracking-tight">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button 
                onClick={onCheckout}
                className="w-full bg-maroon text-white py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-dark-primary transition-all shadow-2xl active:scale-95 mb-6 border border-maroon-secondary gold-glow"
              >
                Proceed to Checkout
              </button>
              
              <div className="flex items-center justify-center gap-3 text-[9px] text-luxury-muted uppercase font-bold tracking-widest">
                <ShieldCheck className="w-4 h-4 text-gold gold-glow" /> Secure Royal Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;