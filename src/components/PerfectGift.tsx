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
    className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 bg-gray-100 dark:bg-luxury-dark-secondary border border-transparent dark:border-white/5 ${isTall ? 'h-full' : 'aspect-square md:aspect-auto md:h-full'}`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-white font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors duration-300 leading-none mb-2">
          {title}
        </h4>
        {subtitle && (
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-medium group-hover:text-white transition-colors delay-75">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Explore Collection</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
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
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-luxury-bg-card dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">Gifting & More</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-tight uppercase">Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic">Moments</span></h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-sm font-light italic max-w-lg mx-auto">
            "Celebrate life's precious milestones with heirlooms that last forever."
          </p>
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