import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedSilverCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isDark?: boolean;
}

const FeaturedSilverCard: React.FC<FeaturedSilverCardProps> = ({ title, description, image, link }) => (
  <div className="relative group overflow-hidden rounded-2xl h-[450px] shadow-2xl flex flex-col justify-end border border-luxury-bg-card dark:border-maroon-border/20">
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    
    <div className="relative p-8 md:p-12 text-center md:text-left">
      <div className="mb-4">
        <span className="bg-gold text-maroon-dominant text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] inline-block mb-3 shadow-lg">
          999 Pure Silver
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-gold-light tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base font-light italic leading-relaxed max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </div>
      
      <a 
        href={link}
        className="inline-flex items-center gap-3 px-8 py-3 border border-gold/50 text-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all duration-300 rounded-sm group/btn hover:scale-105 active:scale-95 shadow-lg"
      >
        SHOP NOW <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </a>
    </div>

    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="w-12 h-12 border border-gold/20 rounded-full animate-pulse flex items-center justify-center">
        <div className="w-6 h-6 border border-gold/40 rounded-full animate-ping"></div>
      </div>
    </div>
  </div>
);

const SilverCollection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-4">Silver Articles</h2>
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold italic">
            Where tradition meets silver sophistication!
          </p>
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="w-12 h-[1px] bg-gold/30"></div>
            <span className="text-[10px] text-maroon-dominant/40 dark:text-gold/40 uppercase tracking-[0.2em]">Kolkata Heritage Since 1952</span>
            <div className="w-12 h-[1px] bg-gold/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeaturedSilverCard 
            title="Coins & Bars"
            description="Tradition wrapped in purity, perfect for every Shagun moment and smart investment."
            image="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800"
            link="/silver-coins"
          />
          <FeaturedSilverCard 
            title="Divine Utensils"
            description="Embrace auspiciousness with divine silver idols, pooja thalis, and royal silverware."
            image="https://images.unsplash.com/photo-1584305323473-d674ede008f1?auto=format&fit=crop&q=80&w=800"
            link="/silver-articles"
          />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <span className="text-[10px] font-bold text-maroon-dominant dark:text-white uppercase tracking-widest">BIS Hallmark</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <span className="text-[10px] font-bold text-maroon-dominant dark:text-white uppercase tracking-widest">99.9% Purity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <span className="text-[10px] font-bold text-maroon-dominant dark:text-white uppercase tracking-widest">Lifetime Buyback</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverCollection;