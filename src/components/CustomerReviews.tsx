import React, { useRef } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../constants';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[450px] bg-white dark:bg-luxury-dark-card p-10 rounded-3xl border border-transparent dark:border-white/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-700 flex flex-col snap-center h-full group hover:border-gold/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors"></div>

      <div className="flex items-center justify-between mb-10 relative z-10">
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold gold-glow' : 'text-maroon-dominant/10 dark:text-white/5 fill-current'}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-green-600 dark:text-green-400 uppercase tracking-widest bg-green-500/5 px-4 py-2 rounded-full border border-green-500/10 backdrop-blur-sm">
          <CheckCircle2 className="w-4 h-4" /> Verified
        </div>
      </div>

      <div className="relative flex-1 mb-10 group-hover:translate-x-1 transition-transform duration-700">
        <Quote className="absolute -top-10 -left-6 w-16 h-16 text-gold/10 pointer-events-none transform -scale-x-100 rotate-12" />
        <p className="text-maroon-dominant/80 dark:text-white/90 text-2xl leading-[1.6] italic relative z-10 font-serif text-balance">
          "{review.comment}"
        </p>
      </div>

      <div className="mt-auto pt-8 border-t border-maroon-dominant/5 dark:border-white/5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon-dominant/10 to-gold/20 flex items-center justify-center text-maroon-dominant dark:text-gold font-serif font-black text-xl border border-gold/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
            {review.user.charAt(0)}
          </div>
          <div>
            <h4 className="font-serif font-black text-maroon-dominant dark:text-white text-lg leading-tight uppercase tracking-tight">{review.user}</h4>
            <div className="text-[10px] text-maroon-dominant/40 dark:text-white/30 uppercase tracking-[0.3em] font-black mt-1">
              {review.location}
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Sparkles className="w-6 h-6 text-gold/20 group-hover:text-gold/40 transition-colors" />
        </div>
      </div>
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-luxury-bg-secondary/30 dark:bg-luxury-dark-primary transition-colors overflow-hidden relative border-t border-luxury-bg-card dark:border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="text-center md:text-left space-y-4">
            <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black block gold-glow">Client Experiences</span>
            <h2 className="text-5xl md:text-6xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">Stories of Trust</h2>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-4 border border-luxury-bg-card dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:border-gold hover:text-maroon-dominant text-luxury-text-light dark:text-white transition-all shadow-lg hover:scale-110 group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 border border-luxury-bg-card dark:border-white/10 bg-white dark:bg-luxury-dark-card rounded-full hover:bg-gold hover:border-gold hover:text-maroon-dominant text-luxury-text-light dark:text-white transition-all shadow-lg hover:scale-110 group"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 transition-colors" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] bg-white dark:bg-luxury-dark-card/60 backdrop-blur-md p-10 rounded-3xl text-center flex flex-col items-center justify-center snap-center shadow-2xl border border-transparent dark:border-white/5 hover:border-gold/20 transition-all">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-8 ring-1 ring-gold/20">
              <Star className="w-10 h-10 text-gold fill-gold" />
            </div>
            <h3 className="text-5xl font-serif text-maroon-dominant dark:text-white mb-2 font-medium">4.9</h3>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
            </div>
            <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-sm italic max-w-[200px] leading-relaxed">Based on 1,500+ verified purchase reviews from our Kolkata boutiques.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;