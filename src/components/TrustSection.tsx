
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

    <h4 className="text-[10px] md:text-xs font-serif font-black text-maroon-dominant dark:text-white uppercase tracking-[0.15em] leading-relaxed text-balance group-hover:text-gold transition-colors duration-500 px-4">
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
    <section className="py-20 md:py-28 bg-luxury-bg-secondary/50 dark:bg-luxury-dark-primary transition-colors relative border-t border-luxury-bg-card dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gold/30"></div>
            <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] gold-glow">
              The Aura Promise
            </span>
            <div className="h-[1px] w-8 bg-gold/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider mb-4">Foundation of Trust</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-base md:text-lg font-light italic max-w-2xl mx-auto leading-relaxed text-balance border-t border-gold/10 pt-6">
            "Every heritage piece is an investment in beauty, backed by unwavering purity,
            absolute transparency, and a lifetime of royal care."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 pt-6">
          {TRUST_POINTS.map((point, index) => (
            <TrustCard
              key={index}
              icon={point.icon}
              title={point.title}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
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
