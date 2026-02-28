
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
  <div className="group relative p-5 md:p-6 rounded-2xl bg-white dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/5 hover:border-gold/30 hover:shadow-xl transition-all duration-700 overflow-hidden flex flex-col items-center text-center">
    {/* Corner glow */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors pointer-events-none"></div>

    <div className="mb-4 flex-shrink-0 w-11 h-11 rounded-xl bg-maroon-dominant/5 dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/10 group-hover:border-gold/30 group-hover:bg-gold/10 flex items-center justify-center transition-all duration-700 relative">
      <Icon className="w-5 h-5 text-maroon-dominant dark:text-gold gold-glow group-hover:scale-110 transition-transform duration-700" />
    </div>

    <h4 className="text-maroon-dominant dark:text-white font-serif text-sm md:text-base tracking-wide group-hover:text-gold transition-colors duration-500 uppercase leading-tight">
      {title}
    </h4>

    <div className="mt-3 w-4 h-[1px] bg-gold/30 group-hover:w-8 transition-all duration-700"></div>
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
          <div className="flex justify-center items-center gap-4 group mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> The Aura Promise
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-tight">Foundation of Trust</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-[13px] md:text-sm font-light max-w-xl mx-auto leading-relaxed border-t border-gold/10 pt-6">
            Every heritage piece is an investment in beauty, backed by unwavering purity,
            absolute transparency, and a lifetime of royal care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 pt-4">
          {TRUST_POINTS.map((point, index) => (
            <TrustCard
              key={index}
              icon={point.icon}
              title={point.title}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
          <p className="text-[9px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-[0.4em] font-black">
            BIS Hallmark Guaranteed • GIA & IGI Certified Masterpieces
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
export default TrustSection;
