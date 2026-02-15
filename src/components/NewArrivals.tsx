import React, { useRef } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import CarouselProductCard from './CarouselProductCard';

interface NewArrivalsProps {
  onProductClick: (p: Product) => void;
}

import reel1 from '../assets/reels/reel 1.mp4';
import reel2 from '../assets/reels/reel 2.mp4';
import reel3 from '../assets/reels/reel 3.mp4';
import reel4 from '../assets/reels/reel 4.mp4';


const VIDEO_HIGHLIGHTS = [
  {
    id: 1,
    title: 'Modern Diamond Charms',
    videoUrl: reel1,
    tag: 'Shagun Collection'
  },
  {
    id: 2,
    title: 'The Groom\'s Power',
    videoUrl: reel2,
    tag: 'Aham Collection'
  },
  {
    id: 3,
    title: 'Bridal Heritage Glow',
    videoUrl: reel3,
    tag: 'Vivaah Couture'
  },
  {
    id: 4,
    title: 'Minimalist Fine Gold',
    videoUrl: reel4,
    tag: 'Latest Launch'
  }
];

const VideoStripCard: React.FC<{ video: typeof VIDEO_HIGHLIGHTS[0] }> = ({ video }) => {
  return (
    <div
      className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer bg-black border border-transparent hover:border-gold/30 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-40 transition-opacity duration-700" />

      <div className="absolute bottom-8 left-8 right-8 text-white z-10 transition-transform duration-700">
        <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block gold-glow opacity-95 transition-all duration-500">{video.tag}</span>
        <h4 className="text-2xl font-serif tracking-tight leading-tight mb-6 text-balance">{video.title}</h4>

        <div className="h-[1px] w-full bg-gold/50 transition-all duration-700 mb-4"></div>

        <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-gold transition-all duration-500 flex items-center gap-3">
          DISCOVER STORY <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
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
    <section className="py-32 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden border-b border-gold/10 relative">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-maroon-dominant/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/30"></div>
              <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">Fresh from the Atelier</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
              New Arrivals
            </h2>
          </div>

          <button className="group relative px-10 py-4 border border-maroon-dominant/10 dark:border-white/10 text-maroon-dominant dark:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold shadow-lg active:scale-95">
            <span className="relative z-10 flex items-center gap-3">
              View Full Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>

        <div className="mb-32">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-maroon-dominant/5 dark:border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-gold/60 uppercase tracking-[0.4em]">Visual Stories</span>
              <p className="text-sm font-serif italic text-maroon-dominant/40 dark:text-white/30 tracking-wide">Behind the craftsmanship</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scroll(scrollRef, 'left')} className="p-4 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"><ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-maroon-dominant" /></button>
              <button onClick={() => scroll(scrollRef, 'right')} className="p-4 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"><ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-maroon-dominant" /></button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-12 pt-6 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {VIDEO_HIGHLIGHTS.map((video) => (
              <VideoStripCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-maroon-dominant/5 dark:border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-gold/60 uppercase tracking-[0.4em]">Just Dropped</span>
              <p className="text-sm font-serif italic text-maroon-dominant/40 dark:text-white/30 tracking-wide">Ready for your collection</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scroll(productScrollRef, 'left')} className="p-4 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"><ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-maroon-dominant" /></button>
              <button onClick={() => scroll(productScrollRef, 'right')} className="p-4 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold transition-all duration-500 shadow-xl group active:scale-90"><ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-maroon-dominant" /></button>
            </div>
          </div>
          <div
            ref={productScrollRef}
            className="flex gap-8 md:gap-10 overflow-x-auto no-scrollbar scroll-smooth pb-12 pt-4 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {newArrivalProducts.slice(0, 8).map((product) => (
              <div key={product.id} className="snap-start h-full">
                <CarouselProductCard
                  product={product}
                  onClick={onProductClick}
                  showNewArrival={true}
                />
              </div>
            ))}

            <div className="flex-shrink-0 w-[260px] md:w-[300px] flex flex-col items-center justify-center border-2 border-dashed border-gold/20 rounded-3xl hover:border-gold/50 transition-all duration-700 group/view-all cursor-pointer hover:bg-maroon-dominant active:scale-95 bg-luxury-bg-secondary/30 dark:bg-luxury-dark-card/30 backdrop-blur-sm relative overflow-hidden">
              <div className="flex flex-col items-center gap-6 relative z-10 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-luxury-dark-card flex items-center justify-center group-hover/view-all:bg-transparent group-hover/view-all:border-white/40 border border-gold/10 transition-all duration-500 group-hover/view-all:scale-110 shadow-2xl">
                  <ChevronRight className="w-8 h-8 text-maroon-dominant dark:text-white group-hover/view-all:text-white transition-colors" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[11px] font-black tracking-[0.4em] uppercase text-maroon-dominant dark:text-gold group-hover/view-all:text-white transition-colors">View All</span>
                  <span className="text-[9px] font-serif italic text-maroon-dominant/40 dark:text-white/30 group-hover/view-all:text-white/60">New Masterpieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;