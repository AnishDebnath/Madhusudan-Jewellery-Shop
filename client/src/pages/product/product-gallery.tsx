import React, { useState, useEffect, useRef } from 'react';
import { Heart, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  product: any;
  mainImage: string;
  setMainImage: (img: string) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  product,
  mainImage,
  setMainImage,
  onToggleWishlist,
  isWishlisted
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Dynamic Thumbnail Counting
  const [maxVisibleThumbnails, setMaxVisibleThumbnails] = useState(4);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const allImages = [product.image, ...(product.additionalImages || [])];

  useEffect(() => {
    const calculateVisible = () => {
      if (thumbContainerRef.current) {
        const containerWidth = thumbContainerRef.current.clientWidth;
        // Each item requires: min width (80 on mobile, 100 on md) + 16px gap + tolerance
        const isMd = window.innerWidth >= 768;
        const itemWidth = isMd ? 116 : 96;

        let possibleItems = Math.floor(containerWidth / itemWidth);
        // Guarantee at least 3 visible items
        if (possibleItems < 3) possibleItems = 3;

        setMaxVisibleThumbnails(possibleItems);
      }
    };

    // Slight delay to ensure DOM is fully rendered on first pass
    setTimeout(calculateVisible, 50);
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, []);

  const hasExtraImages = allImages.length > maxVisibleThumbnails;
  const visibleImages = hasExtraImages ? allImages.slice(0, maxVisibleThumbnails) : allImages;

  const openGallery = (index: number) => {
    setCurrentGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const nextGalleryImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevGalleryImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div className="lg:w-1/2 flex flex-col gap-6 h-fit sticky top-[200px] lg:top-[220px]">
        <div className="flex flex-col gap-6">
          <div
            className="aspect-square bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-3xl overflow-hidden relative group border border-transparent dark:border-white/5 shadow-2xl cursor-pointer"
            onClick={() => openGallery(allImages.indexOf(mainImage) !== -1 ? allImages.indexOf(mainImage) : 0)}
          >
            <img src={mainImage} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <button
              onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
              className={`absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 group/heart ${isWishlisted ? 'bg-gold text-white' : 'bg-white/10 hover:bg-gold text-white'}`}
            >
              <Heart className={`w-4 h-4 md:w-6 md:h-6 transition-colors ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); }}
              className="absolute bottom-4 right-4 p-2.5 bg-white/10 backdrop-blur-md hover:bg-gold text-white rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100"
            >
              <Share2 className="w-4 h-4 md:w-6 md:h-6 transition-colors" />
            </button>
          </div>

          {/* Unified Thumbnails - Under the main image */}
          <div ref={thumbContainerRef} className="flex gap-4 overflow-hidden p-2 -mx-2 mb-[-8px]">
            {visibleImages.map((img, i) => {
              const isLastVisible = hasExtraImages && i === maxVisibleThumbnails - 1;
              const remainingCount = allImages.length - maxVisibleThumbnails + 1;

              return (
                <button
                  key={i}
                  className={`flex-1 min-w-[80px] md:min-w-[100px] max-w-[120px] aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${mainImage === img && !isLastVisible ? 'ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border border-transparent dark:border-white/10 opacity-70 hover:opacity-100'}`}
                  onClick={() => {
                    if (isLastVisible) {
                      openGallery(i);
                    } else {
                      setMainImage(img);
                    }
                  }}
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />

                  {isLastVisible ? (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity hover:bg-black/50">
                      <span className="text-white text-lg md:text-xl font-serif font-bold">+{remainingCount}</span>
                    </div>
                  ) : (
                    <div className={`absolute inset-0 bg-black/10 transition-opacity ${mainImage === img ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setIsGalleryOpen(false)}
        >
          {/* Main Floating Window */}
          <div
            className="relative w-full max-w-5xl bg-luxury-bg-primary dark:bg-luxury-dark-primary rounded-3xl shadow-2xl border border-white/5 dark:border-white/10 overflow-hidden flex flex-col pointer-events-auto animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <div className="absolute z-50 top-4 right-4 md:top-6 md:right-6">
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="p-3 text-luxury-text-light/50 dark:text-white/50 hover:text-maroon-dominant dark:hover:text-white bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md rounded-full transition-all"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row h-[75vh] md:h-[80vh]">

              {/* Image Viewer */}
              <div className="flex-1 relative bg-luxury-bg-secondary dark:bg-black/30 flex flex-col items-center justify-center p-4 md:p-8 shrink-0">
                <button
                  onClick={prevGalleryImage}
                  className="absolute left-4 md:left-6 p-3 text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white bg-white/70 dark:bg-black/40 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-20 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <img
                  src={allImages[currentGalleryIndex]}
                  className="w-full h-full object-contain drop-shadow-xl"
                  alt={`Product view ${currentGalleryIndex + 1}`}
                />

                <button
                  onClick={nextGalleryImage}
                  className="absolute right-4 md:right-6 p-3 text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white bg-white/70 dark:bg-black/40 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-20 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Thumbnails Sidebar / Bottom bar */}
              <div className="md:w-[220px] lg:w-[260px] bg-luxury-bg-primary dark:bg-luxury-dark-primary p-4 md:p-6 flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-y-auto border-t md:border-t-0 md:border-l border-luxury-bg-card dark:border-white/5 scrollbar-hide shrink-0 items-start h-[100px] md:h-full">
                <span className="hidden md:block text-[10px] uppercase font-black tracking-[0.2em] text-luxury-text-light/50 dark:text-white/40 mb-2">Gallery ({allImages.length})</span>
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrentGalleryIndex(i); }}
                    className={`shrink-0 w-16 h-16 md:w-full md:h-auto md:aspect-square rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 relative group border ${currentGalleryIndex === i ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border-transparent opacity-60 hover:opacity-100 dark:border-white/5'}`}
                  >
                    <img src={img} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
