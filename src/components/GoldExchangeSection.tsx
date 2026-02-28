import React from 'react';
import { BringToFront, Search, IndianRupee, Handshake, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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
    <section className="py-14 md:py-16 bg-luxury-dark-primary dark:bg-luxury-dark-primary relative transition-colors overflow-hidden border-b border-maroon-dominant/10 dark:border-white/5">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center items-center gap-4 group mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Trust & Security
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-white uppercase tracking-tight leading-tight">
            Exchange or Sell <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white gold-glow font-light">Your Old Gold</span>
          </h2>
          <p className="text-white/60 text-[13px] md:text-sm font-light max-w-xl mx-auto leading-relaxed border-t border-white/10 pt-6 mt-6">
            Get the best value for your gold – any condition, any brand.
            Experience a transparent appraisal process with zero hidden deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-5 md:p-6 bg-white/5 backdrop-blur-xl border border-gold/40 rounded-2xl text-center group hover:bg-white/[0.10] hover:border-gold/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-xl overflow-hidden">
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-gold/15 transition-all duration-500 pointer-events-none"></div>
              <div className="mb-5 relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/40 border border-gold/50 rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <step.icon className="w-5 h-5 text-gold gold-glow" />
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-maroon-dominant border border-gold/30 flex items-center justify-center shadow-md">
                  <span className="text-[8px] font-black text-gold gold-glow">0{idx + 1}</span>
                </div>
              </div>
              <h4 className="text-gold font-serif text-base md:text-lg mb-2 tracking-wide">{step.label}</h4>
              <p className="text-white/50 text-xs font-light italic leading-relaxed">{step.desc}</p>

              {/* Accent highlight always visible */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-10 py-3.5 bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant font-black rounded-full uppercase tracking-[0.3em] text-[10px] shadow-[0_15px_30px_-10px_rgba(212,175,55,0.3)] hover:shadow-gold/20 transition-all duration-500 hover:scale-105 active:scale-95 group flex items-center justify-center gap-3">
            Exchange Gold <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-3.5 border-2 border-white/20 dark:border-gold/30 text-white dark:text-gold font-black rounded-full uppercase tracking-[0.3em] text-[10px] hover:bg-white/10 hover:text-white dark:hover:bg-gold dark:hover:text-maroon-dominant transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
            Sell Old Gold
          </button>
        </div>
      </div>


    </section>
  );
};

export default GoldExchangeSection;