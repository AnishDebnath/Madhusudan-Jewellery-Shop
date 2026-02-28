import React from 'react';
import { HandCoins, ShieldCheck, Zap, Scale, ArrowRight, Phone, Lock, Sparkles } from 'lucide-react';

const GoldLoanSection: React.FC = () => {
  const features = [
    {
      icon: HandCoins,
      title: "Unmatched Value Ratio",
      desc: "Maximize your financial potential with the highest loan-to-value ratios based on real-time premium market benchmarks.",
      accent: "bg-gold/10 text-gold"
    },
    {
      icon: ShieldCheck,
      title: "Fortress-Level Security",
      desc: "Sleep easy knowing your precious assets are guarded in bank-grade vaults with end-to-end 100% insurance coverage.",
      accent: "bg-maroon-dominant/10 text-maroon-dominant dark:bg-white/10 dark:text-white"
    },
    {
      icon: Zap,
      title: "Accelerated Liquidity",
      desc: "Access funds in minutes with our streamlined appraisal process and immediate on-the-spot jewelry valuation.",
      accent: "bg-gold/10 text-gold"
    },
    {
      icon: Scale,
      title: "Ethical & Transparent",
      desc: "Experience total peace of mind with the industry's most competitive interest rates and no hidden appraisal fees.",
      accent: "bg-maroon-dominant/10 text-maroon-dominant dark:bg-white/10 dark:text-white"
    }
  ];

  return (
    <section className="py-14 md:py-16 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary text-maroon-dominant dark:text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mt-64 pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-maroon-dominant/5 rounded-full blur-[90px] -mr-32 -mb-32 pointer-events-none opacity-30"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 space-y-4">
            <div className="inline-flex items-center gap-4 group">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <span className="text-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] gold-glow flex items-center gap-2">
                <Sparkles className="w-2.5 h-2.5" /> Financial Sovereignty
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white leading-tight uppercase tracking-tight">
              Elite Gold Loan <br />
              <span className="italic font-light text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-maroon-dominant to-gold dark:from-gold dark:via-white dark:to-gold normal-case tracking-normal">
                Powering Your Aspirations
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-[13px] md:text-sm text-maroon-dominant/60 dark:text-white/50 font-light leading-relaxed border-t border-maroon-dominant/10 dark:border-white/10 pt-6 mt-6">
              Unlock the dormant value of your gold collection with our premium financial solutions, combining centuries-old trust with modern efficiency.
            </p>
          </div>

          {/* 2/2 Grid Features */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-10">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="group relative p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/5 luxury-shadow hover:border-gold/30 hover:shadow-xl transition-all duration-700 overflow-hidden"
              >
                {/* Individual Card Background Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-gold/10 transition-all duration-500"></div>

                <div className="flex items-center gap-5 relative z-10">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${f.accent} flex items-center justify-center shadow-inner transition-transform duration-700 group-hover:scale-110`}>
                    <f.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-serif text-maroon-dominant dark:text-gold tracking-tight font-bold group-hover:translate-x-1 transition-transform duration-500 line-clamp-1">
                      {f.title}
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-maroon-dominant/70 dark:text-white/70 font-light leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <button className="w-full sm:w-auto px-10 py-3.5 bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant font-black rounded-full uppercase tracking-[0.3em] text-[10px] shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105 active:scale-95 group flex items-center justify-center gap-3">
              Initiate Application <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-3.5 border-2 border-maroon-dominant/10 dark:border-gold/30 text-maroon-dominant dark:text-gold font-black rounded-full uppercase tracking-[0.3em] text-[10px] hover:bg-maroon-dominant hover:text-white dark:hover:bg-gold dark:hover:text-maroon-dominant transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <Phone className="w-3.5 h-3.5" /> Consultation
            </button>
          </div>

          {/* Trust Footer */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-[9px] text-maroon-dominant/40 dark:text-white/30 uppercase tracking-[0.4em] font-black">
              <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gold/20"></div>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gold" /> Sovereign Grade Security
              </span>
              <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gold/20"></div>
            </div>
            <p className="text-[8px] md:text-[9px] text-maroon-dominant/30 dark:text-white/20 font-medium">Licensed & Regulated Institution • 100% Insured Assets</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoanSection;
