import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize, Play } from 'lucide-react';

const VIDEO_COLLECTIONS = [
  {
    id: 1,
    title: 'Aham Men\'s Collection',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-with-a-gold-chain-on-his-neck-40342-large.mp4',
    poster: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400',
    tag: 'Bold & Masculine'
  },
  {
    id: 2,
    title: 'Vivaah Bridal Couture',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glamorous-jewelry-of-a-woman-in-a-red-dress-40344-large.mp4',
    poster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400',
    tag: 'Bridal Heritage'
  },
  {
    id: 3,
    title: 'Eternal Diamond Glow',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-wearing-shiny-jewelry-40340-large.mp4',
    poster: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
    tag: 'Pure Brilliance'
  },
  {
    id: 4,
    title: 'Antique Polki Secrets',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-jewelry-on-a-woman-in-a-fancy-dress-40345-large.mp4',
    poster: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=400',
    tag: 'Royal Heirloom'
  },
  {
    id: 5,
    title: 'Rose Gold Filigree',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-gold-jewels-on-a-woman-40347-large.mp4',
    poster: 'https://images.unsplash.com/photo-1616151475510-9993309a489f?auto=format&fit=crop&q=80&w=400',
    tag: 'Kolkata Signature'
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
          video.play().catch(() => {});
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
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors overflow-hidden border-y border-luxury-bg-card dark:border-maroon-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-maroon-dominant dark:text-gold uppercase tracking-[0.2em] font-bold">
            Jewellery Design Showcases
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        <div className="relative flex items-center justify-center h-[600px] md:h-[700px]">
          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-10 z-40 w-12 h-12 bg-luxury-bg-primary dark:bg-maroon-dominant border border-gold/20 rounded-full flex items-center justify-center text-maroon-dominant dark:text-white hover:bg-gold hover:text-white transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-40 w-12 h-12 bg-luxury-bg-primary dark:bg-maroon-dominant border border-gold/20 rounded-full flex items-center justify-center text-maroon-dominant dark:text-white hover:bg-gold hover:text-white transition-all shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3D Stacked Slider */}
          <div className="relative w-full max-w-4xl h-full flex justify-center items-center">
            {VIDEO_COLLECTIONS.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex === 0 ? VIDEO_COLLECTIONS.length - 1 : activeIndex - 1);
              const isNext = index === (activeIndex === VIDEO_COLLECTIONS.length - 1 ? 0 : activeIndex + 1);
              
              let offset = 'translate-x-0 scale-50 opacity-0 z-0';
              if (isActive) offset = 'translate-x-0 scale-100 opacity-100 z-30 shadow-2xl';
              else if (isPrev) offset = '-translate-x-[60%] md:-translate-x-[70%] scale-75 opacity-40 z-20 grayscale';
              else if (isNext) offset = 'translate-x-[60%] md:translate-x-[70%] scale-75 opacity-40 z-20 grayscale';

              return (
                <div 
                  key={item.id}
                  className={`absolute w-[280px] md:w-[380px] h-[500px] md:h-[650px] transition-all duration-700 ease-in-out cursor-pointer ${offset}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-full rounded-sm overflow-hidden bg-black group border dark:border-maroon-border">
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
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-gold text-[10px] tracking-widest uppercase mb-2 font-bold">{item.tag}</span>
                      <h4 className="text-white text-2xl font-serif mb-6">{item.title}</h4>
                      
                      <div className="flex items-center justify-between">
                        <button className="bg-maroon-dominant hover:bg-gold text-white text-[10px] font-bold py-2 px-8 uppercase tracking-widest transition-colors rounded-sm border border-maroon-border">
                          View
                        </button>
                        
                        <div className="flex gap-4">
                           <button 
                            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                            className="text-white/70 hover:text-gold"
                           >
                             {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                           </button>
                           <button className="text-white/70 hover:text-gold">
                             <Maximize className="w-5 h-5" />
                           </button>
                        </div>
                      </div>
                    </div>

                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/40">
                          <Play className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {VIDEO_COLLECTIONS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-10 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCollectionSlider;