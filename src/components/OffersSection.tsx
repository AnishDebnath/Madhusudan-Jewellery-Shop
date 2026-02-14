
import React from 'react';

interface OfferCardProps {
  title: string;
  offerHeadline: string;
  offerSubtext: string;
  supportingLine: string;
  image: string;
  badge: string;
  link: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ 
  title, 
  offerHeadline, 
  offerSubtext, 
  supportingLine, 
  image, 
  badge, 
  link 
}) => {
  return (
    <a 
      href={link} 
      className="group relative flex flex-col overflow-hidden rounded-sm shadow-2xl bg-dark-card transition-all duration-700 hover:-translate-y-2 border border-luxury-border dark:border-maroon-border/20 hover:border-gold/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-dark-secondary">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute top-5 left-5 z-10">
          <span className="bg-maroon-dominant/90 backdrop-blur-xl text-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-lg border border-gold/30 gold-glow">
            {badge}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="relative bg-luxury-bg-secondary dark:bg-luxury-dark-card p-6 md:p-8 text-white border-t border-luxury-border dark:border-maroon-border/20">
        <div className="flex flex-col gap-1">
          <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] mb-2 gold-glow opacity-80">
            {offerSubtext}
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-black text-maroon-dominant dark:text-white leading-tight mb-1 tracking-tighter">
            {offerHeadline}
          </h3>
          <h4 className="text-lg font-serif text-maroon-dominant/70 dark:text-luxury-text-darkMuted italic mb-4">
            {title}
          </h4>
          <div className="flex items-center justify-between mt-4 border-t border-luxury-border dark:border-maroon-border/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-text-light/40 dark:text-luxury-text-darkMuted font-black">
              {supportingLine}
            </span>
            <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform gold-glow">
              Discover →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const OFFERS_DATA: OfferCardProps[] = [
  {
    title: 'Diamond Jewellery',
    offerHeadline: 'UP TO 30% OFF',
    offerSubtext: 'On Diamond Value',
    supportingLine: '1900+ Unique Designs',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    badge: 'Diamond Offer',
    link: '/diamond-jewellery'
  },
  {
    title: 'Gold Jewellery',
    offerHeadline: 'FLAT 25% OFF',
    offerSubtext: 'On Making Charges',
    supportingLine: '4900+ Unique Designs',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    badge: 'Gold Jewellery Offer',
    link: '/gold-jewellery'
  },
  {
    title: 'Gemstone Jewellery',
    offerHeadline: 'FLAT 20% OFF',
    offerSubtext: 'On Stone Value',
    supportingLine: '800+ Unique Designs',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600',
    badge: 'Limited Edition',
    link: '/gemstone-jewellery'
  },
  {
    title: 'Uncut Jewellery',
    offerHeadline: 'UP TO 15% OFF',
    offerSubtext: 'On Gold Rate',
    supportingLine: '1200+ Unique Designs',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600',
    badge: 'Polki Special',
    link: '/uncut-jewellery'
  }
];

const OffersSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-y border-luxury-bg-card dark:border-maroon-border/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black block gold-glow">Limited Time Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider leading-tight">Curated Offers</h2>
          </div>
          <div className="flex items-center gap-4 text-luxury-text-light/40 dark:text-luxury-text-darkMuted text-[10px] font-black uppercase tracking-[0.4em]">
            Available across Kolkata boutiques
            <div className="w-16 h-[1px] bg-gold/30"></div>
          </div>
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 no-scrollbar pb-8 md:pb-0 snap-x snap-mandatory">
          {OFFERS_DATA.map((offer, idx) => (
            <div key={idx} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
