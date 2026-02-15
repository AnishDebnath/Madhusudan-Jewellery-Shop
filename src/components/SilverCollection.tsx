import React from 'react';
import { ArrowRight } from 'lucide-react';
import goldDiamond22 from '../assets/jewellery/gold&diamond-jewellery(22).jpg';
import necklace23 from '../assets/jewellery/necklace/nacklace (23).jpg';

interface FeaturedSilverCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isDark?: boolean;
}

const FeaturedSilverCard: React.FC<FeaturedSilverCardProps> = ({ title, description, image, link }) => (
  <div className="relative group overflow-hidden rounded-3xl h-[420px] shadow-2xl flex flex-col justify-end border border-transparent dark:border-white/5 transition-all duration-700 hover:-translate-y-2">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant via-maroon-dominant/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

    <div className="relative p-8 md:p-10 text-center md:text-left z-10">
      <div className="mb-5 transition-transform duration-700">
        <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] inline-block mb-3 shadow-lg">
          999 Pure Silver
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-white/80 text-xs md:text-sm font-light italic leading-relaxed max-w-sm mx-auto md:mx-0 transition-opacity duration-700 delay-100 text-balance">
          {description}
        </p>
      </div>

      <a
        href={link}
        className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-maroon-dominant text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all duration-300 rounded-full group/btn hover:scale-105 active:scale-95 shadow-lg delay-200"
      >
        SHOP NOW <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </a>
    </div>

    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none delay-300">
      <div className="w-16 h-16 border border-white/20 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
        <div className="w-12 h-12 border border-white/40 rounded-full animate-ping"></div>
      </div>
    </div>
  </div>
);

const SilverCollection: React.FC = () => {
  return (
    <section className="py-20 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-t border-luxury-bg-card dark:border-white/5 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black block gold-glow">Heritage Silver</span>
          <h2 className="text-3xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-tight mb-2 uppercase">Silver <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white font-light italic">Store</span></h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-base font-light italic max-w-xl mx-auto border-t border-gold/10 pt-6">
            "Where tradition meets silver sophistication, crafted for prosperity."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 pt-4">
          <FeaturedSilverCard
            title="Coins & Bars"
            description="Tradition wrapped in purity, perfect for every Shagun moment and smart investment."
            image={goldDiamond22}
            link="/silver-coins"
          />
          <FeaturedSilverCard
            title="Divine Utensils"
            description="Embrace auspiciousness with divine silver idols, pooja thalis, and royal silverware."
            image={necklace23}
            link="/silver-articles"
          />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
          <div className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform"></div>
            <span className="text-xs font-black text-maroon-dominant dark:text-white uppercase tracking-[0.2em] group-hover:text-gold transition-colors">BIS Hallmark</span>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform"></div>
            <span className="text-xs font-black text-maroon-dominant dark:text-white uppercase tracking-[0.2em] group-hover:text-gold transition-colors">99.9% Purity</span>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform"></div>
            <span className="text-xs font-black text-maroon-dominant dark:text-white uppercase tracking-[0.2em] group-hover:text-gold transition-colors">Lifetime Buyback</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverCollection;