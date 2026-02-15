
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import heritageVideo from '../assets/hero banner.mp4';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary">
      {/* Cinematic Video/Image Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src={heritageVideo}
          type="video/mp4"
        />
      </video>

      {/* Luxury Vignette Blending */}
      {/* Top Blend */}
      <div className="absolute inset-x-0 top-0 h-[15vh] bg-gradient-to-b from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent z-10 opacity-90"></div>

      {/* Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent z-10 opacity-90"></div>

      {/* Left Blend */}
      <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent z-10 opacity-60"></div>

      {/* Right Blend */}
      <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent z-10 opacity-60"></div>

      <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>

      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center text-luxury-text-light dark:text-luxury-text-dark">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-4 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.6em] uppercase text-[10px] md:text-[11px] drop-shadow-sm">
              KOLKATA'S FINEST HERITAGE HOUSE
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[1] tracking-tight animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 text-balance drop-shadow-2xl">
            Timeless Purity, <br />
            <span className="italic font-light text-gold gold-glow block mt-2">Eternal Grace.</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 dark:text-luxury-text-darkMuted max-w-2xl mb-14 font-light leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
            Discover signature heritage collections and certified diamonds,
            crafted with the soul of Kolkata's legendary master artisans since 1952.
          </p>

          <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <button className="px-12 py-6 bg-gold hover:bg-gold-light text-maroon-dominant font-black rounded-full flex items-center gap-4 transition-all duration-500 transform hover:scale-105 uppercase tracking-[0.3em] text-[10px] md:text-[11px] group shadow-[0_20px_50px_-10px_rgba(212,175,55,0.4)]">
              EXPLORE COLLECTIONS <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="glass px-12 py-6 text-maroon-dominant dark:text-white font-bold rounded-full flex items-center gap-4 transition-all duration-500 transform hover:scale-105 hover:bg-white/20 uppercase tracking-[0.3em] text-[10px] md:text-[11px] group shadow-xl">
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
