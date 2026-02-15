import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize, Play } from 'lucide-react';
import reel1 from '../assets/reels/reel 1.mp4';
import reel2 from '../assets/reels/reel 2.mp4';
import reel3 from '../assets/reels/reel 3.mp4';
import reel4 from '../assets/reels/reel 4.mp4';
import model5 from '../assets/models/models (5).jpg';
import model6 from '../assets/models/models (6).jpg';
import model7 from '../assets/models/models (7).jpg';
import model8 from '../assets/models/models (8).jpg';

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
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors overflow-hidden border-y border-luxury-bg-card dark:border-white/5 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-bg-primary dark:from-luxury-dark-primary to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black block gold-glow">Cinematic Showcase</span>
          <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
            Jewellery In Motion
          </h2>
        </div>

        <div className="relative flex items-center justify-center h-[600px] md:h-[700px]">
          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 z-40 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-maroon-dominant dark:text-white hover:bg-gold hover:text-white hover:border-gold transition-all shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-40 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-maroon-dominant dark:text-white hover:bg-gold hover:text-white hover:border-gold transition-all shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3D Stacked Slider */}
          <div className="relative w-full max-w-5xl h-full flex justify-center items-center perspective-1000">
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
                  className={`absolute w-[300px] md:w-[420px] aspect-[9/16] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${offset}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-black group border border-white/10 ${isActive ? 'ring-1 ring-gold/30' : ''}`}>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      poster={item.poster}
                      loop
                      muted={isActive ? isMuted : true}
                      playsInline
                      className="w-full h-full object-cover"
                      key={item.videoUrl}
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>

                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-gold text-[9px] tracking-[0.4em] uppercase mb-4 font-black gold-glow">{item.tag}</span>
                      <h4 className="text-white text-3xl md:text-4xl font-serif mb-8 leading-none">{item.title}</h4>

                      <div className="flex items-center justify-between">
                        <button className="bg-white/10 backdrop-blur-md hover:bg-gold text-white text-[10px] font-black py-3.5 px-7 uppercase tracking-[0.25em] transition-all rounded-full border border-white/20 hover:border-gold hover:text-maroon-dominant group/btn">
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

        <div className="flex justify-center gap-3 mt-12">
          {VIDEO_COLLECTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-10 bg-gold shadow-[0_0_10px_#D4AF37]' : 'w-2 bg-gold/20 hover:bg-gold/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCollectionSlider;