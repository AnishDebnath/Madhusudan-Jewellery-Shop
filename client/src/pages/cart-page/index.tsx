import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { CartItem } from '../../types';
import EmptyCart from './empty-cart';
import CartItemRow from './cart-item-row';
import CartSummary from './cart-summary';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onShopMore: () => void;
  onProductClick: (product: any) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQty, onRemove, onCheckout, onShopMore, onProductClick }) => {
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const taxes = subtotal * 0.03; // GST 3%
  const total = subtotal + taxes;

  if (cart.length === 0) {
    return <EmptyCart onShopMore={onShopMore} />;
  }

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-16 border-t border-luxury-bg-card dark:border-white/5 transition-colors">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-12 text-center uppercase tracking-widest leading-none">Your Shopping Bag</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <CartItemRow 
                key={item.id} 
                item={item} 
                onUpdateQty={onUpdateQty} 
                onRemove={onRemove} 
                onProductClick={onProductClick} 
              />
            ))}

            <button onClick={onShopMore} className="flex items-center gap-3 text-[11px] font-black text-maroon-dominant dark:text-gold uppercase tracking-[0.3em] hover:text-gold dark:hover:text-white transition-all mt-8 group w-fit">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <CartSummary 
                subtotal={subtotal} 
                taxes={taxes} 
                total={total} 
                onCheckout={onCheckout} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
