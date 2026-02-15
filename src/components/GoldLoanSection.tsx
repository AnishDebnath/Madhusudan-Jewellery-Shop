import React from 'react';
import { HandCoins, ShieldCheck, Zap, Scale, ArrowRight, Phone, Lock } from 'lucide-react';

const GoldLoanSection: React.FC = () => {
  const features = [
    {
      icon: HandCoins,
      title: "High Value per Gram",
      desc: "Get the maximum loan amount against your gold jewelry based on real-time premium market rates."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Insured Storage",
      desc: "Your assets are preserved in bank-grade high-security vaults with comprehensive 100% insurance."
    },
    {
      icon: Zap,
      title: "Instant Disbursal",
      desc: "Experience immediate liquidity with minimal digital documentation and on-the-spot gold valuation."
    },
    {
      icon: Scale,
      title: "Transparent Terms",
      desc: "Absolute clarity with the lowest interest rates in the industry and flexible repayment horizons."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-maroon-dominant via-black to-maroon-dominant text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="absolute inset-0 bg-transparent opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/30"></div>
              <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] gold-glow">
                Financial Sovereignty
              </span>
              <div className="h-[1px] w-12 bg-gold/30"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif leading-none uppercase tracking-tight">
              Gold Loan <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white font-light text-2xl md:text-3xl normal-case tracking-normal">Unlock Your True Value</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light italic max-w-2xl mx-auto leading-relaxed text-balance border-t border-white/10 pt-6">
              Safe, secure, and dignified gold loans from Kolkata's most trusted heritage house.
              Turn your heirlooms into immediate opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-6 group p-6 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-500">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500 group-hover:scale-105 shadow-2xl">
                  <f.icon className="w-6 h-6 text-gold group-hover:text-maroon-dominant transition-colors duration-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-white group-hover:text-gold transition-colors duration-300">{f.title}</h4>
                  <p className="text-sm text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold to-gold/80 text-maroon-dominant font-black rounded-full uppercase tracking-[0.25em] text-[10px] shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:bg-white transition-all duration-500 hover:scale-105 active:scale-95 group border border-transparent">
              Apply for Gold Loan <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-gold/40 text-gold font-black rounded-full uppercase tracking-[0.25em] text-[10px] hover:bg-gold hover:text-maroon-dominant transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <Phone className="w-4 h-4" /> Talk to an Expert
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">
            <Lock className="w-4 h-4" /> Bank-Grade Security Protocol
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoanSection;