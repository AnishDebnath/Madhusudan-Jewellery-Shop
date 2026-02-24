
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import heritageVideo from '../assets/Hero Banner.webm';
import heroPoster from '../assets/models/models (2).jpg';

interface HeroProps {
  onNavigate: (view: string, data?: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay blocked or failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-luxury-bg-primary dark:bg-luxury-dark-primary">
      {/* Cinematic Video/Image Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src={heritageVideo}
          type="video/webm"
        />
      </video>

      <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10"></div>
      <div className="relative z-30 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-4 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="text-gold font-black tracking-[0.4em] uppercase text-[10px] md:text-[11px] drop-shadow-sm">
              KOLKATA'S FINEST HERITAGE HOUSE
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight tracking-tight animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 text-balance drop-shadow-2xl">
            Timeless Purity, <br />
            <span className="italic font-light text-gold gold-glow block mt-1">Eternal Grace.</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-2xl mb-10 font-light leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
            Discover signature heritage collections and certified diamonds,
            crafted with the soul of Kolkata's legendary master artisans since 1952.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <button
              onClick={() => onNavigate('category', 'All')}
              className="px-8 py-4 bg-gold hover:bg-gold-light text-maroon-dominant font-black rounded-full flex items-center gap-3 transition-all duration-500 transform hover:scale-105 uppercase tracking-[0.2em] text-[10px] md:text-[11px] group shadow-[0_15px_35px_-5px_rgba(212,175,55,0.3)]"
            >
              EXPLORE COLLECTIONS <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-gold transition-all duration-500">
          Scroll
        </span>
        <div className="w-[20px] h-[34px] rounded-full border-2 border-gold/50 transition-colors duration-500 flex justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-1 bg-gold rounded-full animate-scroll-dot shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
        </div>
      </div>
      {/* Bezier-Eased Blending Stack */}
      <div className="absolute -bottom-1 left-0 w-full h-[300px] bg-gradient-to-t from-luxury-bg-primary via-transparent dark:from-luxury-dark-primary dark:via-transparent to-transparent z-11 pointer-events-none opacity-40"></div>
      <div className="absolute -bottom-1 left-0 w-full h-[200px] bg-gradient-to-t from-luxury-bg-primary via-transparent dark:from-luxury-dark-primary dark:via-transparent to-transparent z-12 pointer-events-none opacity-70"></div>
      <div className="absolute -bottom-1 left-0 w-full h-[100px] bg-gradient-to-t from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent z-13 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
