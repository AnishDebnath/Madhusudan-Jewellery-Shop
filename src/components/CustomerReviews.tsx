import React from 'react';
import { Star, CheckCircle2, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../constants';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[380px] bg-white dark:bg-luxury-dark-card p-8 md:p-10 rounded-[32px] border border-transparent dark:border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-20px_rgba(212,175,55,0.12)] transition-all duration-1000 flex flex-col group hover:border-gold/20 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-gold/10 transition-all duration-1000"></div>

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold gold-glow' : 'text-maroon-dominant/5 dark:text-white/5 fill-current'}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-[8px] font-black text-maroon-dominant/60 dark:text-gold/60 uppercase tracking-[0.3em] bg-luxury-bg-secondary dark:bg-white/5 px-3 py-1.5 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors">
          <ShieldCheck className="w-3 h-3 text-gold" /> Verified
        </div>
      </div>

      <div className="relative flex-1 mb-8 group-hover:translate-x-1 transition-transform duration-1000 ease-out">
        <Quote className="absolute -top-10 -left-4 w-16 h-16 text-gold/5 pointer-events-none transform -scale-x-100 rotate-12 group-hover:text-gold/10 transition-colors duration-1000" />
        <p className="text-maroon-dominant/80 dark:text-white/90 text-lg md:text-xl leading-[1.6] italic relative z-10 font-serif text-balance">
          "{review.comment}"
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-maroon-dominant/5 dark:border-white/5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-dominant/10 to-gold/20 flex items-center justify-center text-maroon-dominant dark:text-gold font-serif font-black text-lg border border-gold/20 shadow-inner group-hover:scale-110 transition-transform duration-700">
              {review.user.charAt(0)}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-luxury-dark-card rounded-full shadow-sm"></div>
          </div>
          <div>
            <h4 className="font-serif font-black text-maroon-dominant dark:text-white text-base leading-tight uppercase tracking-tight">{review.user}</h4>
            <div className="text-[9px] text-maroon-dominant/40 dark:text-white/30 uppercase tracking-[0.4em] font-black mt-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full"></span> {review.location}
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Sparkles className="w-5 h-5 text-gold/10 group-hover:text-gold/30 transition-all duration-700 group-hover:rotate-12" />
        </div>
      </div>
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  const doubledReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS]; // Triple for smoother non-loop break

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors overflow-hidden relative border-t border-luxury-bg-card dark:border-white/5">
      {/* Decorative luxury elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon-dominant/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 space-y-3 text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-[1px] w-12 bg-gold/30"></div>
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-black block gold-glow">The Voice of Heritage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-tight">
            Stories <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold italic font-light tracking-tight">of Trust</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Fixed Rating Card */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-white dark:bg-luxury-dark-card/40 backdrop-blur-xl p-8 md:p-10 rounded-[32px] text-center lg:text-left flex flex-col items-center lg:items-start justify-center shadow-xl border border-white/20 dark:border-white/5 hover:border-gold/30 transition-all duration-700 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-maroon-dominant/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-gold/30 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-700 shadow-xl">
                  <Star className="w-8 h-8 text-gold fill-gold gold-glow" />
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white font-medium">4.9</h3>
                  <span className="text-gold text-lg font-serif italic text-white/40">/ 5.0</span>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold shadow-sm" />)}
                </div>

                <p className="text-maroon-dominant/60 dark:text-luxury-text-darkMuted text-sm italic leading-relaxed font-light mb-8">
                  "Unmatched brilliance as shared by our 1,500+ verified patrons across the city."
                </p>

                <div className="pt-6 border-t border-maroon-dominant/5 dark:border-white/5 w-full space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-luxury-dark-card bg-luxury-bg-secondary overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform cursor-pointer relative z-[10-i]">
                          <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-gold/40 to-maroon-dominant/20' : 'from-maroon-dominant/30 to-gold/10'}`}></div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-0">
                      <span className="text-[9px] font-black uppercase tracking-widest text-maroon-dominant dark:text-gold block">Loyal Family</span>
                      <span className="text-[8px] text-maroon-dominant/30 dark:text-white/20 uppercase font-bold tracking-widest">1.5K+ Stories</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Marquee Testimonials - Extending to screen edge */}
          <div className="lg:col-span-8 relative mt-10 lg:mt-0 lg:-mr-[calc((100vw-100%)/2+2rem)] overflow-visible">
            {/* Fade masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-luxury-bg-primary via-luxury-bg-primary/80 to-transparent dark:from-luxury-dark-primary dark:via-luxury-dark-primary/80 z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-luxury-bg-primary via-luxury-bg-primary/95 to-transparent dark:from-luxury-dark-primary dark:via-luxury-dark-primary/95 z-20 pointer-events-none lg:right-[calc((100vw-100%)/2)] translate-x-full"></div>

            <div className="flex overflow-hidden group/container py-10 w-full lg:w-[calc(100%+50vw)]">
              <div className="flex gap-8 md:gap-12 animate-marquee group-hover/container:pause pointer-events-auto">
                {doubledReviews.map((review, idx) => (
                  <ReviewCard key={`${review.id}-${idx}`} review={review} />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700 lg:pl-32">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-maroon-dominant dark:text-white">GIA Certified Review Pool</span>
              </div>
              <div className="w-1 h-1 bg-gold rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-maroon-dominant dark:text-white">Heritage Quality Assured</span>
              </div>
            </div>

            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              .animate-marquee {
                animation: marquee 60s linear infinite;
              }
              .pause {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;