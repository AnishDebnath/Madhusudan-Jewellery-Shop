import React from 'react';
import { Maximize2, Sparkles, ArrowRight } from 'lucide-react';

const VIVAAH_PRODUCTS = [
  {
    id: 'v1',
    name: 'Heritage Polki Choker Set',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    price: '₹4,50,000'
  },
  {
    id: 'v2',
    name: 'Antique Gold Temple Set',
    image: 'https://images.unsplash.com/photo-1603561591411-0e7041f02c63?auto=format&fit=crop&q=80&w=600',
    price: '₹7,20,000'
  },
  {
    id: 'v3',
    name: 'Kundan Meena Bridal Haar',
    image: 'https://images.unsplash.com/photo-1629215031123-09746536b139?auto=format&fit=crop&q=80&w=600',
    price: '₹5,80,000'
  },
  {
    id: 'v4',
    name: 'Rose Gold Diamond Maang Tikka',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    price: '₹1,25,000'
  }
];

const VivaahCollection: React.FC = () => {
  return (
    <section className="bg-luxury-bg-primary dark:bg-luxury-dark-primary py-24 overflow-hidden border-t border-gold/10 transition-colors">
      <div className="container mx-auto px-6">
        {/* Cinematic Hero Image */}
        <div className="relative h-[60vh] mb-16 rounded-sm overflow-hidden group border border-maroon-border/20">
          <img 
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920" 
            alt="Vivaah Collection" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
            <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 animate-in fade-in slide-in-from-left-5">Heritage Bridal House</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 animate-in fade-in slide-in-from-left-10 duration-700">VIVAAH</h2>
            <p className="text-xl max-w-lg font-light italic leading-relaxed text-white/90 animate-in fade-in slide-in-from-left-10 duration-1000">
              "Timeless gold & diamond jewellery crafted for sacred wedding moments."
            </p>
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif text-maroon-dominant dark:text-gold italic">The Wedding Masterpieces</h3>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {VIVAAH_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-luxury-bg-secondary dark:bg-luxury-dark-card border border-luxury-bg-card dark:border-maroon-border overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="relative aspect-square overflow-hidden bg-luxury-bg-card dark:bg-luxury-dark-secondary">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Quick Actions Hover Overlay */}
                <div className="absolute inset-0 bg-maroon-dominant/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <button className="bg-white text-maroon-dominant text-[10px] font-bold tracking-widest px-6 py-3 w-40 hover:bg-gold hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 active:scale-95">
                    <Maximize2 className="w-3 h-3" /> TRY IN VR
                  </button>
                  <button className="bg-maroon-dominant text-white text-[10px] font-bold tracking-widest px-6 py-3 w-40 hover:bg-gold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 active:scale-95 border border-maroon-border">
                    <Sparkles className="w-3 h-3" /> VIEW SET
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-serif text-maroon-dominant dark:text-white text-lg mb-1">{product.name}</h4>
                <p className="text-gold font-bold">{product.price}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_#D4AF37]"></div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center">
          <button className="group relative px-12 py-4 border border-gold text-maroon-dominant dark:text-gold text-xs font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 active:scale-95 shadow-sm hover:shadow-gold/20">
            <span className="relative z-10 flex items-center gap-2">
              SHOP VIVAAH COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VivaahCollection;