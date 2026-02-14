import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const NIKAH_PRODUCTS = [
  {
    id: 'n1',
    name: 'Eternal Nikah Necklace Set',
    image: 'https://images.unsplash.com/photo-1616151475510-9993309a489f?auto=format&fit=crop&q=80&w=600',
    tag: 'Nikah Ready'
  },
  {
    id: 'n2',
    name: 'Walima Emerald Drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    tag: 'Walima Special'
  },
  {
    id: 'n3',
    name: 'Traditional Polki Passa',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600',
    tag: 'Bridal Heritage'
  }
];

const NikahCollection: React.FC = () => {
  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-24 relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-bg-card/50 dark:bg-maroon-dominant/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-luxury-bg-card/50 dark:bg-maroon-dominant/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group border border-luxury-bg-card dark:border-maroon-border/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200" 
              alt="Nikah Bridal" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-2 block">Sacred Union</span>
              <h2 className="text-4xl font-serif italic">Graceful Ceremonies</h2>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center">
            <div className="mb-12">
              <span className="text-gold dark:text-gold text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">Elegance Redefined</span>
              <h2 className="text-5xl font-serif text-maroon-dominant dark:text-white mb-6 uppercase tracking-wider">NIKAH COLLECTION</h2>
              <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted text-lg leading-relaxed max-w-lg font-light italic">
                "Graceful jewellery for a sacred union, designed for timeless Nikah ceremonies and Walima elegance."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {NIKAH_PRODUCTS.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden mb-4 rounded-sm border border-luxury-bg-card dark:border-maroon-border/20 shadow-sm">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-[9px] font-bold tracking-widest uppercase border border-white/40 px-3 py-1 bg-maroon-dominant/60">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-[11px] font-bold text-maroon-dominant dark:text-luxury-text-dark uppercase tracking-widest truncate group-hover:text-gold transition-colors">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <button className="group relative px-10 py-4 bg-maroon-dominant text-white text-xs font-bold tracking-[0.3em] uppercase overflow-hidden hover:bg-gold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl border border-maroon-border">
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="flex items-center gap-2 text-[10px] font-bold text-maroon-dominant dark:text-gold uppercase tracking-widest hover:text-gold dark:hover:text-white transition-all duration-300 border-b border-gold/30 pb-1 hover:scale-105 group">
                Consultation <Star className="w-3 h-3 text-gold transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NikahCollection;