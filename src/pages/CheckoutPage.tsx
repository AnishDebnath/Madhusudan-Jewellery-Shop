import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  cart: CartItem[];
  onComplete: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, onComplete }) => {
  const [step, setStep] = useState(1);
  const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0) * 1.03;

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-dark-primary">
        <div className="w-24 h-24 bg-maroon/20 rounded-full flex items-center justify-center mb-8 border border-gold/20">
          <CheckCircle2 className="w-12 h-12 text-gold gold-glow" />
        </div>
        <h2 className="text-4xl font-serif text-white mb-4 uppercase tracking-widest">Order Confirmed</h2>
        <p className="text-luxury-secondary italic mb-12">Thank you for choosing Aura. Your royal order is being processed.</p>
        <button 
          onClick={onComplete}
          className="bg-maroon text-white px-12 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-dark-primary transition-all gold-glow border border-maroon-secondary"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-primary min-h-screen py-24 border-t border-luxury-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Flow */}
          <div className="flex-1 bg-dark-card p-10 rounded-sm shadow-2xl border border-luxury-border">
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-luxury-border -z-10"></div>
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all border shadow-lg ${
                    step >= s ? 'bg-maroon border-gold text-white gold-glow' : 'bg-dark-primary border-luxury-border text-luxury-muted'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="animate-in fade-in">
                <h3 className="text-2xl font-serif text-white mb-8 uppercase tracking-wider">Shipping Details</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">First Name</label>
                      <input type="text" placeholder="Majesty's Name" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Last Name</label>
                      <input type="text" placeholder="Family Name" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Full Address</label>
                    <input type="text" placeholder="Avenue / Street / House" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="City" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                    <input type="text" placeholder="Pincode" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-maroon text-white py-5 rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-dark-primary transition-all border border-maroon-secondary gold-glow"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in">
                <h3 className="text-2xl font-serif text-white mb-8 uppercase tracking-wider">Secure Payment</h3>
                <div className="space-y-6">
                  <div className="p-5 border border-gold/30 rounded-sm bg-maroon/10 flex items-center justify-between shadow-xl">
                    <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] gold-glow">Credit / Debit Card</span>
                    <Lock className="w-4 h-4 text-gold gold-glow" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Card Number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">Expiry</label>
                      <input type="text" placeholder="MM / YY" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold ml-1">CVV</label>
                      <input type="password" placeholder="XXX" className="w-full bg-dark-primary border border-luxury-border p-4 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-disabled" />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full bg-maroon text-white py-5 rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-dark-primary transition-all border border-maroon-secondary gold-glow mt-8 shadow-2xl"
                  >
                    Authorize Payment ₹{total.toLocaleString('en-IN')}
                  </button>
                  <div className="flex justify-center items-center gap-3 text-[10px] text-luxury-muted uppercase font-bold tracking-[0.1em] mt-4">
                    <ShieldCheck className="w-4 h-4 text-gold gold-glow" /> SSL Encrypted & Insured Experience
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-80">
            <div className="bg-dark-card p-6 rounded-sm shadow-2xl border border-luxury-border sticky top-[160px]">
              <h4 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6 gold-glow border-b border-luxury-border pb-4">Cart Summary</h4>
              <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                {cart.map(i => (
                  <div key={i.id} className="flex justify-between text-[11px] font-medium tracking-wide">
                    <span className="text-luxury-secondary truncate w-32">{i.name}</span>
                    <span className="text-white">x{i.quantity}</span>
                    <span className="text-gold font-bold">₹{(i.price * i.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-luxury-border flex justify-between items-center">
                <span className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest">Grand Total</span>
                <span className="text-xl font-bold text-white tracking-tighter">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;