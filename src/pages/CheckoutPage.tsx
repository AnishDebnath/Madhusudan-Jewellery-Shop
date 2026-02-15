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
          {/* Main Flow */}
          <div className="flex-1 bg-white dark:bg-luxury-dark-card p-10 md:p-14 rounded-3xl shadow-2xl border border-transparent dark:border-white/5 transition-colors">
            <div className="flex justify-between mb-16 relative px-4">
              <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-luxury-bg-card dark:bg-white/10 -z-10"></div>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 border-4 ${step >= s ? 'bg-gold border-white dark:border-luxury-dark-card text-maroon-dominant shadow-lg scale-110' : 'bg-luxury-bg-secondary dark:bg-black/40 border-luxury-bg-card dark:border-white/5 text-luxury-text-light/30 dark:text-white/20'
                    }`}
                >
                  0{s}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-serif text-maroon-dominant dark:text-white mb-10 uppercase tracking-widest flex items-center gap-4">
                  Shipping Details
                  <div className="h-[1px] flex-1 bg-luxury-bg-card dark:bg-white/10"></div>
                </h3>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">First Name</label>
                      <input type="text" placeholder="Majesty's Name" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full" />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Last Name</label>
                      <input type="text" placeholder="Family Name" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Full Address</label>
                    <input type="text" placeholder="Avenue / Street / House" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <input type="text" placeholder="City" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full" />
                    <input type="text" placeholder="Pincode" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full" />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all border border-maroon-border shadow-xl hover:shadow-2xl mt-4 active:scale-95 group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Continue to Payment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-serif text-maroon-dominant dark:text-white mb-10 uppercase tracking-widest flex items-center gap-4">
                  Secure Payment
                  <div className="h-[1px] flex-1 bg-luxury-bg-card dark:bg-white/10"></div>
                </h3>
                <div className="space-y-8">
                  <div className="p-6 border border-gold/30 rounded-2xl bg-gold/5 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-black text-gold uppercase tracking-[0.2em]">Credit / Debit Card</span>
                    <Lock className="w-4 h-4 text-gold" />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Card Number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full tracking-widest" />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Expiry</label>
                      <input type="text" placeholder="MM / YY" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full text-center" />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">CVV</label>
                      <input type="password" placeholder="XXX" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full text-center" />
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all border border-maroon-border shadow-xl hover:shadow-2xl mt-8 active:scale-95 group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Authorize Payment ₹{total.toLocaleString('en-IN')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <div className="flex justify-center items-center gap-3 text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase font-black tracking-[0.1em] mt-4">
                    <ShieldCheck className="w-4 h-4 text-gold" /> SSL Encrypted & Insured Experience
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-96">
            <div className="bg-white dark:bg-luxury-dark-card p-8 rounded-3xl shadow-xl border border-transparent dark:border-white/5 sticky top-32">
              <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.3em] mb-6 border-b border-luxury-bg-card dark:border-white/10 pb-4">Cart Summary</h4>
              <div className="space-y-5 mb-8 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                {cart.map(i => (
                  <div key={i.id} className="flex justify-between text-[11px] font-medium tracking-wide items-center">
                    <span className="text-luxury-text-light/70 dark:text-white/70 truncate w-32">{i.name}</span>
                    <span className="text-luxury-text-light/50 dark:text-white/50">x{i.quantity}</span>
                    <span className="text-maroon-dominant dark:text-gold font-bold">₹{(i.price * i.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-luxury-bg-card dark:border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-black text-luxury-text-light/40 dark:text-white/40 uppercase tracking-widest">Grand Total</span>
                <span className="text-xl font-bold text-maroon-dominant dark:text-white tracking-tighter">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;