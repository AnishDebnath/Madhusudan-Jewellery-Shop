import React from 'react';

interface EarringCardProps {
  title: string;
  image: string;
  link: string;
}

const EarringCard: React.FC<EarringCardProps> = ({ title, image, link }) => (
  <a
    href={link}
    className="group relative block bg-white dark:bg-luxury-dark-card rounded-3xl overflow-hidden border border-transparent dark:border-white/5 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-8">
        <h4 className="text-white font-serif text-2xl md:text-3xl tracking-wide group-hover:text-gold transition-colors duration-300 leading-none mb-3">
          {title.replace(' Collection', '')}
        </h4>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="h-[1px] w-8 bg-gold"></div>
          <span className="text-[9px] font-bold text-gold uppercase tracking-[0.2em]">View Designs</span>
        </div>
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
    <section className="py-24 bg-luxury-bg-secondary dark:bg-luxury-dark-secondary border-t border-luxury-bg-card dark:border-white/5 transition-colors relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block gold-glow">Earring Masterpieces</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-wide uppercase">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Earring</span> Edit</h2>
          <div className="w-24 h-[1px] bg-gold/20 mx-auto mt-6"></div>
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