
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
  <div className="group bg-luxury-bg-secondary dark:bg-luxury-dark-card p-10 md:p-12 rounded-sm flex flex-col items-center justify-center text-center transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-luxury-bg-card dark:border-maroon-border/20 hover:border-gold/50 dark:hover:border-gold/50">
    <div className="mb-8 p-6 rounded-full bg-luxury-bg-primary dark:bg-maroon-dominant/30 border border-luxury-bg-card dark:border-maroon-border/10 group-hover:border-gold/30 transition-all duration-700 relative shadow-inner">
      <Icon className="w-8 h-8 text-gold gold-glow group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute inset-0 rounded-full group-hover:animate-ping bg-gold/5 pointer-events-none"></div>
    </div>
    <h4 className="text-[10px] md:text-[11px] font-black text-maroon-dominant dark:text-white uppercase tracking-[0.25em] leading-loose">
      {title}
    </h4>
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
    <section className="py-32 md:py-40 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors relative overflow-hidden border-t border-luxury-bg-card dark:border-maroon-border/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-maroon-dominant/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-4">
             <div className="h-[1px] w-8 bg-gold/30"></div>
             <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] gold-glow">
               The Aura Promise
             </span>
             <div className="h-[1px] w-8 bg-gold/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider mb-6">Foundation of Trust</h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-lg md:text-xl font-light italic max-w-3xl mx-auto leading-relaxed">
            "Every heritage piece is an investment in beauty, backed by unwavering purity, 
            absolute transparency, and a lifetime of royal care."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {TRUST_POINTS.map((point, index) => (
            <TrustCard 
              key={index} 
              icon={point.icon} 
              title={point.title} 
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-[9px] text-luxury-text-light/30 dark:text-luxury-text-darkMuted uppercase tracking-[0.4em] font-black">
              BIS Hallmark Guaranteed • GIA & IGI Certified Masterpieces
            </p>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
