
import React from 'react';
import {
  ShieldCheck,
  RefreshCw,
  Gem,
  Scale,
  HandCoins,
  Truck,
  Lock,
  Sparkles,
  Tag,
  Calendar
} from 'lucide-react';

interface TrustCardProps {
  icon: React.ElementType;
  title: string;
}

const TrustCard: React.FC<TrustCardProps> = ({ icon: Icon, title }) => (
  <div className="group bg-white dark:bg-luxury-dark-card p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-700 hover:-translate-y-2 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-2xl border border-transparent dark:border-white/5 hover:border-gold/30 relative overflow-hidden h-full">
    <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-gold/10 transition-colors"></div>

    <div className="mb-6 p-5 rounded-full bg-maroon-dominant/5 dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/10 group-hover:border-gold/30 transition-all duration-700 relative shadow-inner group-hover:bg-gold/10">
      <Icon className="w-8 h-8 text-maroon-dominant dark:text-gold gold-glow group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 rounded-full group-hover:animate-ping bg-gold/5 pointer-events-none"></div>
    </div>

    <h4 className="text-maroon-dominant dark:text-white font-serif text-lg md:text-xl xl:text-lg mb-2 tracking-wide group-hover:text-gold transition-colors duration-500 text-center uppercase">
      {title}
    </h4>

    <div className="mt-4 w-4 h-[1px] bg-gold/30 group-hover:w-8 transition-all duration-700"></div>
  </div>
);

const TRUST_POINTS = [
  { icon: RefreshCw, title: "Lifetime Maintenance" },
  { icon: Scale, title: "Price Transparency" },
  { icon: Gem, title: "100% Certified" },
  { icon: ShieldCheck, title: "HUID Compliant" },
  { icon: HandCoins, title: "Guaranteed Buyback" },
  { icon: Truck, title: "Insured Shipping" },
  { icon: Lock, title: "Secure Delivery" },
  { icon: Sparkles, title: "Exclusive Designs" },
  { icon: Tag, title: "Affordable Luxury" },
  { icon: Calendar, title: "New Weekly Drops" }
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-14 md:py-16 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors relative border-t border-luxury-bg-card dark:border-white/5">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gold/30"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] gold-glow">
              The Aura Promise
            </span>
            <div className="h-[1px] w-8 bg-gold/30"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight mb-4 leading-tight">Foundation of Trust</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-sm md:text-base lg:text-base xl:text-base font-light italic max-w-2xl mx-auto leading-relaxed text-balance border-t border-gold/10 pt-6">
            "Every heritage piece is an investment in beauty, backed by unwavering purity,
            absolute transparency, and a lifetime of royal care."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-6">
          {TRUST_POINTS.map((point, index) => (
            <TrustCard
              key={index}
              icon={point.icon}
              title={point.title}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-[0.4em] font-black">
              BIS Hallmark Guaranteed • GIA & IGI Certified Masterpieces
            </p>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Visual placeholders for certification logos if available, otherwise just the divider */}
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustSection;
