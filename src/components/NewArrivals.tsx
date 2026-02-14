import React, { useRef } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import CarouselProductCard from './CarouselProductCard';

interface NewArrivalsProps {
  onProductClick: (p: Product) => void;
}

const VIDEO_HIGHLIGHTS = [
  {
    id: 1,
    title: 'Modern Diamond Charms',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-wearing-shiny-jewelry-40340-large.mp4',
    poster: 'https://images.unsplash.com/photo-1598560912005-59a0d5c1a412?auto=format&fit=crop&q=80&w=400',
    tag: 'Shagun Collection'
  },
  {
    id: 2,
    title: 'The Groom\'s Power',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-with-a-gold-chain-on-his-neck-40342-large.mp4',
    poster: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400',
    tag: 'Aham Collection'
  },
  {
    id: 3,
    title: 'Bridal Heritage Glow',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glamorous-jewelry-of-a-woman-in-a-red-dress-40344-large.mp4',
    poster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400',
    tag: 'Vivaah Couture'
  },
  {
    id: 4,
    title: 'Minimalist Fine Gold',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-gold-jewels-on-a-woman-40347-large.mp4',
    poster: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
    tag: 'Latest Launch'
  }
];

const VideoStripCard: React.FC<{ video: typeof VIDEO_HIGHLIGHTS[0] }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[3/4] rounded-sm overflow-hidden group cursor-pointer bg-black border dark:border-maroon-border/20"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >
      <video 
        ref={videoRef}
        poster={video.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/60 group-hover:scale-110 group-hover:border-white transition-all">
        <Play className="w-5 h-5 fill-white" />
      </div>

      <div className="absolute bottom-6 left-6 text-white">
        <span className="text-gold text-[8px] font-bold tracking-[0.4em] uppercase mb-1 block">{video.tag}</span>
        <h4 className="text-lg font-serif tracking-wide">{video.title}</h4>
        
        <button className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/0 group-hover:text-gold transition-all duration-300 flex items-center gap-2 group-hover:translate-x-2">
          DISCOVER <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ onProductClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const productScrollRef = useRef<HTMLDivElement>(null);
  const newArrivalProducts = PRODUCTS.filter(p => p.isNewArrival);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden border-b border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white tracking-wider uppercase flex items-center gap-4">
            New Arrivals
            <div className="hidden md:block w-32 h-[1px] bg-gold/20"></div>
          </h2>
          <a href="#" className="text-[11px] font-black text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-[0.3em] flex items-center gap-2 hover:text-maroon-dominant dark:hover:text-gold transition-all duration-300 hover:scale-105 group">
            Shop Everything <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">Latest Collection Stories</span>
            <div className="flex gap-2">
              <button onClick={() => scroll(scrollRef, 'left')} className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"><ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white" /></button>
              <button onClick={() => scroll(scrollRef, 'right')} className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"><ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white" /></button>
            </div>
          </div>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {VIDEO_HIGHLIGHTS.map((video) => (
              <VideoStripCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
             <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">Newly Launched Heirlooms</span>
             <div className="flex gap-2">
              <button onClick={() => scroll(productScrollRef, 'left')} className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"><ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white" /></button>
              <button onClick={() => scroll(productScrollRef, 'right')} className="p-2 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"><ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white" /></button>
            </div>
          </div>
          <div 
            ref={productScrollRef}
            className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          >
            {newArrivalProducts.map((product) => (
              <div key={product.id} className="snap-start">
                <CarouselProductCard 
                  product={product} 
                  onClick={onProductClick}
                  showNewArrival={true}
                />
              </div>
            ))}
            
            <div className="flex-shrink-0 w-[240px] md:w-[280px] flex items-center justify-center border-2 border-dashed border-gold/10 rounded-sm hover:border-gold/30 transition-all duration-500 group/view-all cursor-pointer hover:bg-luxury-bg-card dark:hover:bg-maroon-dominant/10 active:scale-95 bg-luxury-bg-secondary dark:bg-luxury-dark-card">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-luxury-bg-card dark:bg-maroon-dominant flex items-center justify-center group-hover/view-all:bg-gold transition-all duration-500 group-hover/view-all:scale-110">
                  <ChevronRight className="w-6 h-6 text-maroon-dominant dark:text-white group-hover/view-all:text-white" />
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-luxury-text-light/40 dark:text-luxury-text-darkMuted group-hover/view-all:text-gold transition-colors">Catalog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;