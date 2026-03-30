import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

interface CheckoutFormProps {
  step: number;
  setStep: (step: number) => void;
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ step, setStep, total }) => (
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
              <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 transition-colors">First Name</label>
              <input type="text" placeholder="Majesty's Name" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 rounded-full" />
            </div>
            <div className="space-y-3 group">
              <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 transition-colors">Last Name</label>
              <input type="text" placeholder="Family Name" className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 rounded-full" />
            </div>
          </div>
          <button onClick={() => setStep(2)} className="w-full bg-maroon-dominant text-white py-5 rounded-full uppercase tracking-[0.2em] font-black group relative overflow-hidden">
            Continue to Payment
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
        <button onClick={() => setStep(3)} className="w-full bg-maroon-dominant text-white py-5 rounded-full uppercase tracking-[0.2em] font-black shadow-xl">
          Authorize Payment ₹{total.toLocaleString('en-IN')}
        </button>
        <div className="flex justify-center items-center gap-3 text-[9px] uppercase font-black tracking-[0.1em] mt-4 text-luxury-text-light/40">
          <ShieldCheck className="w-4 h-4 text-gold" /> SSL Encrypted Experience
        </div>
      </div>
    )}
  </div>
);

export default CheckoutForm;
