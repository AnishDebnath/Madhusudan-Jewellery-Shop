
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary">
      {/* Cinematic Video/Image Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        poster="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1920"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-glamorous-jewelry-of-a-woman-in-a-red-dress-40344-large.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Luxury Layering Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg-primary dark:from-luxury-dark-primary via-transparent to-transparent opacity-85 dark:opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dominant/30 via-transparent to-luxury-bg-primary/60 dark:to-luxury-dark-primary/80"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center text-luxury-text-light dark:text-luxury-text-dark">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-4 animate-in fade-in slide-in-from-left-10 duration-1000">
             <div className="h-[1px] w-12 bg-gold/50"></div>
             <span className="text-gold font-bold tracking-[0.6em] uppercase text-[10px] md:text-[11px] drop-shadow-sm">
               KOLKATA'S FINEST HERITAGE HOUSE
             </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[1.05] tracking-tight animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
            Timeless Purity, <br/>
            <span className="italic font-light text-gold gold-glow block mt-2">Eternal Grace.</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 dark:text-luxury-text-darkMuted max-w-2xl mb-14 font-light leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
            Discover signature heritage collections and certified diamonds, 
            crafted with the soul of Kolkata's legendary master artisans since 1952.
          </p>
          
          <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <button className="px-12 py-6 bg-gold hover:bg-gold-light text-maroon-dominant font-black rounded-sm flex items-center gap-4 transition-all duration-500 transform hover:scale-105 uppercase tracking-[0.3em] text-[10px] md:text-[11px] group shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
              EXPLORE COLLECTIONS <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 bg-white/5 dark:bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-maroon-dominant dark:text-white font-bold rounded-sm flex items-center gap-4 transition-all duration-500 transform hover:scale-105 uppercase tracking-[0.3em] text-[10px] md:text-[11px] group shadow-xl">
              VIRTUAL TRY-ON <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
         <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
