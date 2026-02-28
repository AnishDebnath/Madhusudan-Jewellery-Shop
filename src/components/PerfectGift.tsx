import React from 'react';
import { Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import earrings10 from '../assets/jewellery/earrings/earrings (10).jpg';
import necklace19 from '../assets/jewellery/necklace/nacklace (19).jpg';
import necklace20 from '../assets/jewellery/necklace/nacklace (20).jpg';
import necklace16 from '../assets/jewellery/necklace/nacklace (16).jpg';
import necklace17 from '../assets/jewellery/necklace/nacklace (17).jpg';
import necklace18 from '../assets/jewellery/necklace/nacklace (18).jpg';

interface GiftingCardProps {
  title: string;
  image: string;
  link: string;
  onNavigate: (view: string, data?: any) => void;
  isTall?: boolean;
}

const GiftingTile: React.FC<GiftingCardProps> = ({ title, image, link, onNavigate, isTall }) => (
  <div
    onClick={() => onNavigate('category', 'All')}
    className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 bg-gray-100 dark:bg-luxury-dark-secondary border border-transparent dark:border-white/5 cursor-pointer ${isTall ? 'h-full' : 'aspect-square md:aspect-auto md:h-full'}`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
      <div className="transition-transform duration-500">
        <h4 className="text-white font-serif text-lg md:text-xl lg:text-xl xl:text-xl group-hover:text-gold transition-colors duration-300 leading-tight mb-2">
          {title}
        </h4>
      </div>

      <div className="flex items-center gap-2 text-gold transition-all duration-500 delay-100">
        <span className="text-[8px] font-black uppercase tracking-[0.3em]">Explore Collection</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </div>
);


interface PerfectGiftProps {
  onNavigate: (view: string, data?: any) => void;
}

const PerfectGift: React.FC<PerfectGiftProps> = ({ onNavigate }) => {
  const occasionGifts = [
    { title: 'Birthday', image: earrings10, link: '/gifts/birthday' },
    { title: 'Anniversary', image: necklace19, link: '/gifts/anniversary' },
    { title: 'Baby Birth', image: necklace20, link: '/gifts/baby-birth' },
    { title: 'Festive Collection', image: necklace16, link: '/gifts/festive' },
  ];

  const customGifts = [
    { title: 'Personalised Jewellery', image: necklace17, link: '/personalised-jewellery' },
    { title: 'Custom Consultations', image: necklace18, link: '/customised-jewellery' },
  ];

  return (
    <section className="py-14 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors border-t border-luxury-bg-card dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-10 space-y-3">
          <div className="flex justify-center items-center gap-4 group mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Gifting & More
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white tracking-tight leading-tight uppercase">Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic font-light">Moments</span></h2>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-sm md:text-base lg:text-base xl:text-base font-light italic max-w-lg mx-auto border-t border-gold/10 pt-6">
            "Celebrate life's precious milestones with heirlooms that last forever."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 h-auto lg:h-[600px] xl:h-[700px] pt-4">
          {/* Row 1 */}
          <GiftingTile
            title={occasionGifts[0].title}
            image={occasionGifts[0].image}
            link={occasionGifts[0].link}
            onNavigate={onNavigate}
          />
          <GiftingTile
            title={occasionGifts[1].title}
            image={occasionGifts[1].image}
            link={occasionGifts[1].link}
            onNavigate={onNavigate}
          />
          <GiftingTile
            title={customGifts[0].title}
            image={customGifts[0].image}
            link={customGifts[0].link}
            onNavigate={onNavigate}
            isTall={true}
          />

          {/* Row 2 */}
          <GiftingTile
            title={occasionGifts[2].title}
            image={occasionGifts[2].image}
            link={occasionGifts[2].link}
            onNavigate={onNavigate}
          />
          <GiftingTile
            title={occasionGifts[3].title}
            image={occasionGifts[3].image}
            link={occasionGifts[3].link}
            onNavigate={onNavigate}
          />
          <GiftingTile
            title={customGifts[1].title}
            image={customGifts[1].image}
            link={customGifts[1].link}
            onNavigate={onNavigate}
            isTall={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PerfectGift;