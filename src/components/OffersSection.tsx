
import React from 'react';
import { ArrowRight } from 'lucide-react';
import necklace1 from '../assets/jewellery/necklace/nacklace (20).jpg';
import necklace2 from '../assets/jewellery/necklace/nacklace (7).jpg';
import necklace3 from '../assets/jewellery/mens/mens collection (1).jpg';
import earrings4 from '../assets/jewellery/earrings/earrings (3).jpg';

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
      className="group relative flex flex-col overflow-hidden rounded-3xl shadow-xl bg-white dark:bg-luxury-dark-card transition-all duration-700 hover:-translate-y-2 border border-transparent dark:border-white/5 hover:border-gold/30 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute top-5 left-5 z-10">
          <span className="bg-maroon-dominant/80 backdrop-blur-md text-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-lg border border-gold/20 gold-glow">
            {badge}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500">
          <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] mb-3 block gold-glow opacity-90">
            {offerSubtext}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-white leading-none mb-2 tracking-tight">
            {offerHeadline}
          </h3>
          <h4 className="text-lg font-light text-white/80 italic mb-6">
            {title}
          </h4>
          <div className="flex items-center justify-between border-t border-white/20 pt-5 transition-all duration-500">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 font-black">
              {supportingLine}
            </span>
            <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform gold-glow flex items-center gap-2">
              Discover <ArrowRight className="w-3 h-3" />
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
    image: necklace1,
    badge: 'Diamond Offer',
    link: '/diamond-jewellery'
  },
  {
    title: 'Gold Jewellery',
    offerHeadline: 'FLAT 25% OFF',
    offerSubtext: 'On Making Charges',
    supportingLine: '4900+ Unique Designs',
    image: necklace2,
    badge: 'Gold Jewellery Offer',
    link: '/gold-jewellery'
  },
  {
    title: 'Gemstone Jewellery',
    offerHeadline: 'FLAT 20% OFF',
    offerSubtext: 'On Stone Value',
    supportingLine: '800+ Unique Designs',
    image: necklace3,
    badge: 'Limited Edition',
    link: '/gemstone-jewellery'
  },
  {
    title: 'Uncut Jewellery',
    offerHeadline: 'UP TO 15% OFF',
    offerSubtext: 'On Gold Rate',
    supportingLine: '1200+ Unique Designs',
    image: earrings4,
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
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-14 no-scrollbar pb-8 pt-4 md:pb-0 snap-x snap-mandatory">
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
