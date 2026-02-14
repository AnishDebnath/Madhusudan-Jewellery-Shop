import React from 'react';
import { BringToFront, Search, IndianRupee, Handshake, ArrowRight, ShieldCheck } from 'lucide-react';

const GoldExchangeSection: React.FC = () => {
  const steps = [
    {
      icon: BringToFront,
      label: "Bring Your Gold",
      desc: "Any brand, any condition"
    },
    {
      icon: Search,
      label: "Purity Check",
      desc: "Tested in your presence"
    },
    {
      icon: IndianRupee,
      label: "Market Value",
      desc: "Best spot market rates"
    },
    {
      icon: Handshake,
      label: "Instant Cash",
      desc: "Disbursal or exchange"
    }
  ];

  return (
    <section className="py-28 md:py-40 bg-luxury-dark-primary relative transition-colors overflow-hidden border-b border-maroon-border/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center mb-4">
             <ShieldCheck className="w-8 h-8 text-gold gold-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider leading-tight">
            Exchange or Sell <span className="italic text-gold gold-glow font-light">Your Old Gold</span>
          </h2>
          <p className="text-luxury-text-darkMuted text-lg font-light max-w-2xl mx-auto italic mt-6">
            Get the best value for your gold – any condition, any brand. 
            Experience a transparent appraisal process with zero hidden deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-luxury-dark-card/50 border border-maroon-border/20 rounded-sm text-center group hover:border-gold/30 transition-all duration-500">
              <div className="mb-6 relative inline-block">
                <step.icon className="w-10 h-10 text-gold gold-glow group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute -top-4 -right-4 text-[40px] font-serif text-gold/5 italic select-none">0{idx + 1}</span>
              </div>
              <h4 className="text-white font-serif text-xl mb-2 tracking-wide group-hover:text-gold transition-colors uppercase">{step.label}</h4>
              <p className="text-luxury-text-darkMuted text-sm font-light italic">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <button className="w-full sm:w-auto px-14 py-6 bg-gold text-maroon-dominant font-black rounded-sm uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-gold-light transition-all duration-500 hover:scale-105 active:scale-95 group">
            Exchange Gold <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button className="w-full sm:w-auto px-14 py-6 border border-gold/40 text-gold font-black rounded-sm uppercase tracking-[0.4em] text-[11px] hover:bg-white/5 transition-all duration-500 hover:scale-105 active:scale-95">
            Sell Old Gold
          </button>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/silk-weave.png')]"></div>
    </section>
  );
};

export default GoldExchangeSection;