import React, { useRef } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-luxury-bg-secondary dark:bg-luxury-dark-card p-6 md:p-8 rounded-sm border border-luxury-bg-card dark:border-maroon-border shadow-2xl hover:border-gold transition-all duration-500 flex flex-col snap-center h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold' : 'text-luxury-text-light/20 dark:text-maroon-border fill-current'}`} 
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-black text-green-600 dark:text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded-full">
          <CheckCircle2 className="w-3 h-3" /> Verified Buyer
        </div>
      </div>

      <div className="relative flex-1 mb-6">
        <Quote className="absolute -top-4 -left-2 w-10 h-10 text-gold/10 pointer-events-none" />
        <p className="text-luxury-text-light/80 dark:text-luxury-text-dark/80 text-sm md:text-base leading-relaxed italic relative z-10 font-light">
          "{review.comment}"
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-luxury-bg-card dark:border-maroon-border/20">
        <h4 className="font-serif text-maroon-dominant dark:text-white text-lg leading-tight mb-1">{review.user}</h4>
        <div className="flex items-center justify-between text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted uppercase tracking-widest font-bold">
          <span>{review.location}</span>
          <span className="text-gold/60">Recommended</span>
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
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden relative border-t border-luxury-bg-card dark:border-maroon-border/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">Client Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider">Stories of Trust</h2>
            <div className="w-16 h-1 bg-gold mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold transition-all shadow-xl group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 border border-luxury-bg-card dark:border-maroon-border bg-luxury-bg-secondary dark:bg-maroon-dominant rounded-full hover:bg-gold transition-all shadow-xl group"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] bg-luxury-bg-card dark:bg-luxury-dark-secondary p-10 rounded-sm text-center flex flex-col items-center justify-center snap-center shadow-2xl border border-gold/20">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-gold fill-gold" />
            </div>
            <h3 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-2">4.9 / 5</h3>
            <p className="text-gold text-[10px] uppercase tracking-widest font-black mb-8">Average Rating</p>
            <div className="space-y-4">
              <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-xs italic">Based on 1,500+ verified purchase reviews from our Kolkata boutiques.</p>
              <button className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:text-maroon-dominant dark:hover:text-white transition-colors border-b border-gold/20 pb-1">
                Read All Appraisals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;