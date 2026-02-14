import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GiftingCardProps {
  title: string;
  image: string;
  link: string;
  subtitle?: string;
  isTall?: boolean;
}

const GiftingTile: React.FC<GiftingCardProps> = ({ title, image, link, subtitle, isTall }) => (
  <a 
    href={link}
    className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 bg-luxury-bg-card dark:bg-luxury-dark-secondary border border-luxury-bg-card dark:border-maroon-border/20 ${isTall ? 'h-full' : 'aspect-square md:aspect-auto md:h-full'}`}
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    
    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
      <h4 className="text-white font-serif text-lg md:text-xl group-hover:text-gold transition-colors duration-300">
        {title}
      </h4>
      {subtitle && (
        <p className="text-white/0 group-hover:text-white/80 text-[10px] uppercase tracking-widest mt-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
        <span className="text-[10px] font-bold uppercase tracking-widest">Explore Now</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  </a>
);

const PerfectGift: React.FC = () => {
  const occasionGifts = [
    { title: 'Birthday', image: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?auto=format&fit=crop&q=80&w=600', link: '/gifts/birthday' },
    { title: 'Anniversary', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600', link: '/gifts/anniversary' },
    { title: 'Baby Birth', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=600', link: '/gifts/baby-birth' },
    { title: 'Festive Collection', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600', link: '/gifts/festive' },
  ];

  const customGifts = [
    { title: 'Personalised Jewellery', subtitle: 'Bespoke Gifts', image: 'https://images.unsplash.com/photo-1598560912005-59a0d5c1a412?auto=format&fit=crop&q=80&w=600', link: '/personalised-jewellery' },
    { title: 'Custom Consultations', subtitle: 'Royal Bespoke Design', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600', link: '/customised-jewellery' },
  ];

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-4 uppercase">Gifting & More</h2>
          <p className="text-gold text-[11px] tracking-[0.5em] uppercase font-bold">Heirlooms for every celebration</p>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[800px]">
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {occasionGifts.map((gift, idx) => (
              <GiftingTile 
                key={idx}
                title={gift.title}
                image={gift.image}
                link={gift.link}
              />
            ))}
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6 h-full">
            {customGifts.map((gift, idx) => (
              <GiftingTile 
                key={idx}
                title={gift.title}
                subtitle={gift.subtitle}
                image={gift.image}
                link={gift.link}
                isTall={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectGift;