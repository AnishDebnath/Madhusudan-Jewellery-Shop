
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import CarouselProductCard from './CarouselProductCard';

interface NewArrivalsProps {
  onProductClick: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  onNavigate: (view: string, data?: any) => void;
  onAddToCart?: (p: Product) => void;
}

import reel1 from '../assets/reels/Reel 1.webm';
import reel2 from '../assets/reels/Reel 2.webm';
import reel3 from '../assets/reels/Reel 3.webm';
import reel4 from '../assets/reels/Reel 4.webm';


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
      className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4"
    >
      <div className="w-full h-full aspect-[9/16] relative rounded-[2rem] overflow-hidden group cursor-pointer bg-black border border-white/5 lg:border-white/10 hover:border-gold/40 transition-all duration-700 shadow-2xl shadow-black/50">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
        >
          <source src={video.videoUrl} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-40 transition-opacity duration-700" />

        <div className="absolute bottom-8 left-8 right-8 text-white z-10 transition-transform duration-700">
          <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block gold-glow opacity-95 transition-all duration-500">{video.tag}</span>
          <h4 className="text-xl md:text-2xl font-serif tracking-tight leading-tight mb-6 text-balance group-hover:text-gold transition-colors">{video.title}</h4>

          <div className="h-[1px] w-full bg-gold/50 transition-all duration-700 mb-4 group-hover:w-full"></div>

          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-gold transition-all duration-500 flex items-center gap-3">
            DISCOVER STORY <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ onProductClick, onToggleWishlist, wishlist, onNavigate, onAddToCart }) => {
  const newArrivalProducts = PRODUCTS.filter(p => p.isNewArrival);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slider State for Visual Stories
  const [videoIndex, setVideoIndex] = useState(VIDEO_HIGHLIGHTS.length);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);

  // Slider State for Just Dropped
  const [productIndex, setProductIndex] = useState(newArrivalProducts.length);
  const [isProductTransitioning, setIsProductTransitioning] = useState(false);

  // Focus on showing 4 videos nicely on XL as per request
  const getItemsPerViewVideo = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    if (windowWidth < 1280) return 3;
    return 4;
  };

  const getItemsPerViewProduct = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    if (windowWidth < 1280) return 3;
    return 4;
  };

  const itemsPerViewVideo = getItemsPerViewVideo();
  const itemsPerViewProduct = getItemsPerViewProduct();

  const nextVideo = useCallback(() => {
    if (isVideoTransitioning) return;
    setIsVideoTransitioning(true);
    setVideoIndex(prev => prev + 1);
  }, [isVideoTransitioning]);

  const prevVideo = () => {
    if (isVideoTransitioning) return;
    setIsVideoTransitioning(true);
    setVideoIndex(prev => prev - 1);
  };

  const handleVideoTransitionEnd = () => {
    setIsVideoTransitioning(false);
    if (videoIndex >= VIDEO_HIGHLIGHTS.length * 2) {
      setVideoIndex(videoIndex - VIDEO_HIGHLIGHTS.length);
    } else if (videoIndex < VIDEO_HIGHLIGHTS.length) {
      setVideoIndex(videoIndex + VIDEO_HIGHLIGHTS.length);
    }
  };

  const nextProduct = useCallback(() => {
    if (isProductTransitioning) return;
    setIsProductTransitioning(true);
    setProductIndex(prev => prev + 1);
  }, [isProductTransitioning]);

  const prevProduct = () => {
    if (isProductTransitioning) return;
    setIsProductTransitioning(true);
    setProductIndex(prev => prev - 1);
  };

  const handleProductTransitionEnd = () => {
    setIsProductTransitioning(false);
    if (productIndex >= newArrivalProducts.length * 2) {
      setProductIndex(productIndex - newArrivalProducts.length);
    } else if (productIndex < newArrivalProducts.length) {
      setProductIndex(productIndex + newArrivalProducts.length);
    }
  };

  useEffect(() => {
    const videoInterval = setInterval(nextVideo, 6000);
    const productInterval = setInterval(nextProduct, 5000);
    return () => {
      clearInterval(videoInterval);
      clearInterval(productInterval);
    };
  }, [nextVideo, nextProduct]);

  const displayVideos = [...VIDEO_HIGHLIGHTS, ...VIDEO_HIGHLIGHTS, ...VIDEO_HIGHLIGHTS];
  const displayProducts = [...newArrivalProducts, ...newArrivalProducts, ...newArrivalProducts];

  return (
    <section className="py-16 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors overflow-hidden border-b border-gold/10 relative">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/30"></div>
              <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black block gold-glow">Fresh from the Atelier</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
              New Arrivals
            </h2>
          </div>

          <button
            onClick={() => onNavigate('category', 'All')}
            className="group relative px-6 py-3 md:px-8 md:py-3.5 border border-maroon-dominant/10 dark:border-white/10 text-maroon-dominant dark:text-white text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant hover:border-gold shadow-lg active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Full Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>

        {/* Visual Stories Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-maroon-dominant/5 dark:border-white/5">
            <div className="space-y-2">
              <span className="text-[11px] md:text-sm font-black text-gold uppercase tracking-[0.3em] block gold-glow">Visual Stories</span>
              <p className="text-sm font-serif italic text-maroon-dominant/60 dark:text-white/50 tracking-wide">Behind the craftsmanship</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevVideo} className="group p-3 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"><ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" /></button>
              <button onClick={nextVideo} className="group p-3 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"><ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Slider Viewport - Shows exactly 4 at 1440px for a perfect fit */}
      <div className="relative mb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 overflow-visible">
          <div
            className={`flex ${isVideoTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
            onTransitionEnd={handleVideoTransitionEnd}
            style={{
              transform: `translateX(-${videoIndex * (100 / itemsPerViewVideo)}%)`
            }}
          >
            {displayVideos.map((video, idx) => (
              <VideoStripCard key={`${video.id}-${idx}`} video={video} />
            ))}
          </div>
        </div>
      </div>

      {/* Video Slider Dots */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mb-20">
        <div className="flex justify-center items-center gap-6">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {VIDEO_HIGHLIGHTS.map((_, idx) => {
              const isActive = (videoIndex % VIDEO_HIGHLIGHTS.length) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isVideoTransitioning) return;
                    setIsVideoTransitioning(true);
                    setVideoIndex(VIDEO_HIGHLIGHTS.length + idx);
                  }}
                  className="group relative py-3"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-1000 rounded-full ${isActive ? 'w-16 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-5 bg-gold/20 hover:bg-gold/50'}`} />
                </button>
              );
            })}
          </div>
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-maroon-dominant/5 dark:border-white/5">
            <div className="space-y-2">
              <span className="text-[11px] md:text-sm font-black text-gold uppercase tracking-[0.3em] block gold-glow">Just Dropped</span>
              <p className="text-sm font-serif italic text-maroon-dominant/60 dark:text-white/50 tracking-wide">Ready for your collection</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevProduct} className="group p-3 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"><ChevronLeft className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" /></button>
              <button onClick={nextProduct} className="group p-3 border border-maroon-dominant/5 dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:border-gold transition-all duration-500 shadow-xl active:scale-90"><ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white group-hover:text-gold transition-colors" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 overflow-visible">
          <div
            className={`flex ${isProductTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
            onTransitionEnd={handleProductTransitionEnd}
            style={{
              transform: `translateX(-${productIndex * (100 / itemsPerViewProduct)}%)`
            }}
          >
            {displayProducts.map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/4 px-4">
                <CarouselProductCard
                  product={product}
                  onClick={onProductClick}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                  showNewArrival={true}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Slider Dots */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 mb-16">
        <div className="flex justify-center items-center gap-6">
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          <div className="flex gap-4">
            {newArrivalProducts.map((_, idx) => {
              const isActive = (productIndex % newArrivalProducts.length) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isProductTransitioning) return;
                    setIsProductTransitioning(true);
                    setProductIndex(newArrivalProducts.length + idx);
                  }}
                  className="group relative py-3"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-1000 rounded-full ${isActive ? 'w-16 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-5 bg-gold/20 hover:bg-gold/50'}`} />
                </button>
              );
            })}
          </div>
          <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10 flex justify-center">
        <button
          onClick={() => onNavigate('category', 'All')}
          className="group relative px-10 py-4 bg-maroon-dominant text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant shadow-2xl active:scale-95 flex items-center gap-3"
        >
          Explore All New <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;