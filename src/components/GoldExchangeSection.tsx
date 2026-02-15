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
    <section className="py-28 md:py-40 bg-luxury-dark-primary relative transition-colors overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-gold gold-glow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider leading-tight">
            Exchange or Sell <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white gold-glow font-light">Your Old Gold</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto italic mt-6 text-balance">
            Get the best value for your gold – any condition, any brand.
            Experience a transparent appraisal process with zero hidden deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-center group hover:bg-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
              <div className="mb-8 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/40 border border-white/5 group-hover:border-gold/30 transition-all duration-500">
                <step.icon className="w-10 h-10 text-gold gold-glow group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute -top-1 -right-1 text-[10px] font-black text-white/20 select-none bg-white/10 px-2 py-0.5 rounded-full border border-white/5">0{idx + 1}</span>
              </div>
              <h4 className="text-white font-serif text-2xl mb-3 tracking-wide group-hover:text-gold transition-colors">{step.label}</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-gold to-gold/80 text-maroon-dominant font-black rounded-full uppercase tracking-[0.3em] text-[10px] shadow-xl hover:shadow-gold/20 hover:to-white transition-all duration-500 hover:scale-105 active:scale-95 group border border-transparent">
            Exchange Gold <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/20 text-white font-black rounded-full uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 hover:border-gold transition-all duration-500 hover:scale-105 active:scale-95 hover:text-gold">
            Sell Old Gold
          </button>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/silk-weave.png')] invert"></div>
    </section>
  );
};

export default GoldExchangeSection;