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
    <section className="py-28 md:py-40 bg-gradient-to-br from-maroon-dominant via-[#2A0C12] to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="h-[1px] w-8 bg-gold/30"></div>
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] gold-glow">
                Financial Sovereignty
              </span>
              <div className="h-[1px] w-8 bg-gold/30"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight uppercase tracking-wider">
              Gold Loan – <span className="italic text-gold gold-glow font-light">Unlock Your Value</span>
            </h2>
            <p className="text-luxury-text-darkMuted text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
              Safe, secure, and dignified gold loans from Kolkata's most trusted heritage house. 
              Turn your heirlooms into immediate opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-24">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/5 border border-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-500 group-hover:scale-110 shadow-2xl">
                  <f.icon className="w-7 h-7 text-gold group-hover:text-maroon-dominant transition-colors" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-serif text-white uppercase tracking-wide group-hover:text-gold transition-colors">{f.title}</h4>
                  <p className="text-base text-luxury-text-darkMuted font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-gold text-maroon-dominant font-black rounded-sm uppercase tracking-[0.3em] text-[11px] shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:bg-gold-light transition-all duration-500 hover:scale-105 active:scale-95 group">
              Apply for Gold Loan <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-gold/50 text-gold font-black rounded-sm uppercase tracking-[0.3em] text-[11px] hover:bg-white/5 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <Phone className="w-4 h-4" /> Talk to an Expert
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-3 text-[10px] text-gold/40 uppercase tracking-[0.2em] font-black">
            <Lock className="w-3 h-3" /> Bank-Grade Security Protocol
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoanSection;