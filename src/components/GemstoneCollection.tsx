import React from 'react';

interface GemstoneTileProps {
  label: string;
  image: string;
  link: string;
}

const GemstoneTile: React.FC<GemstoneTileProps> = ({ label, image, link }) => (
  <a 
    href={link} 
    className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img 
        src={image} 
        alt={label} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
      
      <div className="absolute inset-x-0 bottom-0 p-8 text-center">
        <span className="text-white font-serif text-xl md:text-2xl tracking-widest group-hover:text-gold transition-colors duration-300">
          {label}
        </span>
        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-8 h-[1px] bg-gold"></div>
        </div>
      </div>
    </div>
  </a>
);

const GemstoneCollection: React.FC = () => {
  const categories = [
    { label: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=400', link: '/gemstone-jewellery/necklaces' },
    { label: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400', link: '/gemstone-jewellery/rings' },
    { label: 'Earrings', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400', link: '/gemstone-jewellery/earrings' },
    { label: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400', link: '/gemstone-jewellery/bangles' },
  ];

  return (
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary transition-colors border-y border-luxury-bg-card dark:border-maroon-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-4">Gemstone Collection</h2>
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold">Timeless Grace in Precious Stones</p>
          <div className="w-24 h-[1px] bg-gold/20 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {categories.map((cat, idx) => (
            <GemstoneTile key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneCollection;