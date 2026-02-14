import React from 'react';

interface EarringCardProps {
  title: string;
  image: string;
  link: string;
}

const EarringCard: React.FC<EarringCardProps> = ({ title, image, link }) => (
  <a 
    href={link} 
    className="group relative block bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-xl overflow-hidden border border-luxury-bg-card dark:border-maroon-border transition-all duration-500 hover:shadow-2xl"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h4 className="text-white font-serif text-lg md:text-xl tracking-wide group-hover:text-gold transition-colors duration-300">
          {title}
        </h4>
        <div className="h-0.5 w-0 group-hover:w-12 bg-gold mt-2 transition-all duration-500"></div>
      </div>
    </div>
  </a>
);

const EarringCollection: React.FC = () => {
  const categories = [
    { title: 'Studs Collection', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=400', link: '/earrings/studs' },
    { title: 'Jhumkas Collection', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400', link: '/earrings/jhumkas' },
    { title: 'Drops Collection', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400', link: '/earrings/drops' },
    { title: 'Hoops–Balis Collection', image: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?auto=format&fit=crop&q=80&w=400', link: '/earrings/hoops' },
  ];

  return (
    <section className="py-24 bg-luxury-bg-primary dark:bg-luxury-dark-primary border-t border-gold/5 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide mb-4">Earring Collection</h2>
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold">Our Exclusive Earring Masterpieces</p>
          <div className="w-24 h-[1px] bg-gold/20 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <EarringCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarringCollection;