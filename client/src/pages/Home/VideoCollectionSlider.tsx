import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize, Play, Sparkles } from 'lucide-react';
import reel1 from '../../assets/reels/Reel 1.webm';
import reel2 from '../../assets/reels/Reel 2.webm';
import reel3 from '../../assets/reels/Reel 3.webm';
import reel4 from '../../assets/reels/Reel 4.webm';
import model5 from '../../assets/models/models (5).jpg';
import model6 from '../../assets/models/models (6).jpg';
import model7 from '../../assets/models/models (7).jpg';
import model8 from '../../assets/models/models (8).jpg';

const VIDEO_COLLECTIONS = [
  {
    id: 1,
    title: 'Aham Men\'s Collection',
    videoUrl: reel1,
    poster: model5,
    tag: 'Bold & Masculine'
  },
  {
    id: 2,
    title: 'Vivaah Bridal Couture',
    videoUrl: reel2,
    poster: model6,
    tag: 'Bridal Heritage'
  },
  {
    id: 3,
    title: 'Eternal Diamond Glow',
    videoUrl: reel3,
    poster: model7,
    tag: 'Pure Brilliance'
  },
  {
    id: 4,
    title: 'Antique Polki Secrets',
    videoUrl: reel4,
    poster: model8,
    tag: 'Royal Heirloom'
  }
];

const VideoCollectionSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeIndex) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === VIDEO_COLLECTIONS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? VIDEO_COLLECTIONS.length - 1 : prev - 1));
  };

  return (
    <section className="py-10 md:py-16 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden border-y border-luxury-bg-card dark:border-white/5 relative">

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="text-center mb-4 md:mb-8 lg:mb-16 space-y-3">
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Cinematic Showcase
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
            Jewellery In Motion
          </h2>
        </div>

        <div className="relative flex items-center justify-center h-[500px] sm:h-[600px] md:h-[700px]">
          {/* 3D Stacked Slider Container */}
          <div className="relative w-full max-w-5xl h-full flex justify-center items-center perspective-1000">
            {/* Desktop Navigation Buttons - Positioned relative to max-w-5xl to reduce gap */}
            <div className="hidden xl:block absolute -left-12 lg:-left-20 z-40 top-1/2 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
              </button>
            </div>

            <div className="hidden xl:block absolute -right-12 lg:-right-20 z-40 top-1/2 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
              </button>
            </div>
            {VIDEO_COLLECTIONS.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex === 0 ? VIDEO_COLLECTIONS.length - 1 : activeIndex - 1);
              const isNext = index === (activeIndex === VIDEO_COLLECTIONS.length - 1 ? 0 : activeIndex + 1);

              let offset = 'translate-x-0 scale-50 opacity-0 z-0';
              if (isActive) offset = 'translate-x-0 scale-100 opacity-100 z-30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]';
              else if (isPrev) offset = '-translate-x-[55%] md:-translate-x-[65%] scale-[0.85] opacity-40 z-20 grayscale blur-[1px]';
              else if (isNext) offset = 'translate-x-[55%] md:translate-x-[65%] scale-[0.85] opacity-40 z-20 grayscale blur-[1px]';

              return (
                <div
                  key={item.id}
                  className={`absolute w-[260px] md:w-[380px] lg:w-[420px] aspect-[9/16] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${offset}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-black group border border-white/10 ${isActive ? 'ring-1 ring-gold/30' : ''}`}>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      poster={item.poster}
                      loop
                      muted={isActive ? isMuted : true}
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                      key={item.videoUrl}
                    >
                      <source src={item.videoUrl} type="video/webm" />
                    </video>

                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-gold text-[9px] tracking-[0.4em] uppercase mb-4 font-black gold-glow">{item.tag}</span>
                      <h4 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif mb-8 leading-none">{item.title}</h4>

                      <div className="flex items-center justify-between">
                        <button className="bg-white/10 backdrop-blur-md hover:bg-gold text-white text-[9px] md:text-[10px] font-black py-3.5 px-4 md:px-7 uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all rounded-full border border-white/20 hover:border-gold hover:text-maroon-dominant group/btn whitespace-nowrap">
                          View details
                        </button>

                        <div className="flex gap-4">
                          <button
                            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:bg-white/10 transition-all"
                          >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-1 fill-white/80" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 md:mt-16 lg:mt-20">
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
            <div className="relative w-48 h-[2px] bg-gold/10 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-500 ease-out"
                style={{
                  width: `${(1 / VIDEO_COLLECTIONS.length) * 100}%`,
                  left: `${(activeIndex / VIDEO_COLLECTIONS.length) * 100}%`
                }}
              />
            </div>
            <div className="h-[1px] w-20 bg-gold/10 hidden md:block"></div>
          </div>

          {/* Mobile/Tablet nav buttons (includes 1024px) */}
          <div className="flex xl:hidden items-center gap-6">
            <button onClick={handlePrev} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
            <button onClick={handleNext} className="group p-3 border border-gold/20 bg-white/5 backdrop-blur-md rounded-full hover:border-gold hover:bg-gold transition-all duration-500 shadow-xl active:scale-90" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-gold group-hover:text-maroon-dominant transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCollectionSlider;
