import React from 'react';
import heritageVideo from '../../assets/hero-banner.webm';
import heroPoster from '../../assets/models/models (2).jpg';

interface CategoryHeroProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  selectedCategories: string[];
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ videoRef, selectedCategories }) => (
  <section className="relative h-[280px] md:h-[350px] flex items-center justify-center overflow-hidden bg-maroon-dominant">
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={heroPoster}
      className="absolute inset-0 w-full h-full object-cover scale-105 opacity-50"
    >
      <source src={heritageVideo} type="video/webm" />
    </video>

    <div className="absolute inset-0 bg-gradient-to-b from-maroon-dominant/60 via-transparent to-luxury-bg-primary dark:to-luxury-dark-primary"></div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-[1px] w-6 bg-gold/40"></div>
        <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black gold-glow">Handcrafted Elegance</span>
        <div className="h-[1px] w-6 bg-gold/40"></div>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 uppercase tracking-tight leading-tight">
        {selectedCategories.length === 1 ? selectedCategories[0] : 'All Treasures'} <span className="italic text-gold gold-glow">Collection</span>
      </h1>

      <p className="max-w-2xl mx-auto text-white/70 font-light italic text-sm md:text-lg leading-relaxed">
        "A legacy of brilliance, where every piece tells a story of timeless craftsmanship and Bengali heritage."
      </p>
    </div>
  </section>
);

export default CategoryHero;
