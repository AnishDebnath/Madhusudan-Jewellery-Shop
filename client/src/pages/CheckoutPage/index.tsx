import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CartItem } from '../../types';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

interface CheckoutPageProps {
  cart: CartItem[];
  onComplete: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, onComplete }) => {
  const [step, setStep] = useState(1);
  const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0) * 1.03;

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors animate-in fade-in duration-700">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mb-10 border border-gold/20 animate-pulse">
          <CheckCircle2 className="w-10 h-10 text-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white mb-6 uppercase tracking-wider text-center">Order Confirmed</h2>
        <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic mb-12 text-center max-w-md">Thank you for choosing Aura. Your royal order has been received and is being processed with the utmost care.</p>
        <button
          onClick={onComplete}
          className="bg-maroon-dominant text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl border border-maroon-border hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-24 border-t border-luxury-bg-card dark:border-white/5 transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <CheckoutForm step={step} setStep={setStep} total={total} />
          <OrderSummary cart={cart} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
