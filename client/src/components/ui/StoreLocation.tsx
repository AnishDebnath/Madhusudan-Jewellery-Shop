import React from 'react';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';

const STORES = [
  {
    id: 1,
    name: 'Store 1 — Main Branch',
    area: 'Kolkata',
    address: '123 Your Street Name, Area Name,\nKolkata, West Bengal – 700001',
    timings: 'Mon – Sat: 11:00 AM – 8:30 PM\nSun: 12:00 PM – 6:00 PM',
    phone: '+91 33 2241 XXXX',
    badge: 'Flagship Store',
  },
  {
    id: 2,
    name: 'Store 2 — Branch',
    area: 'Kolkata',
    address: '456 Your Street Name, Area Name,\nKolkata, West Bengal – 700XXXX',
    timings: 'Mon – Sat: 11:00 AM – 8:30 PM\nSun: 12:00 PM – 6:00 PM',
    phone: '+91 33 2241 YYYY',
    badge: 'Branch Store',
  },
];

const StoreLocation: React.FC = () => {
  return (
    <section className="bg-luxury-bg-secondary dark:bg-luxury-dark-secondary py-12 md:py-16 text-white overflow-hidden relative border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
            <span className="text-gold text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
              <Sparkles className="w-2.5 h-2.5" /> Visit Us in Kolkata
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif uppercase tracking-tight leading-tight">
            Our 2 Stores in{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white font-light">
              Kolkata
            </span>
          </h2>
          <p className="text-white/60 text-sm font-light max-w-lg mx-auto">
            Visit Madhusudan Gold &amp; Diamonds at either of our Kolkata stores. Walk in to see our full collection of gold, diamond, and bridal jewellery.
          </p>
        </div>

        {/* Two Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {STORES.map((store) => (
            <div key={store.id} className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-500 group">

              {/* Badge */}
              <span className="inline-block text-[8px] font-black uppercase tracking-[0.3em] text-maroon-dominant bg-gold px-4 py-1.5 rounded-full mb-6 gold-glow">
                {store.badge}
              </span>

              <h3 className="text-xl md:text-2xl font-serif mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                {store.name}
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white/5 rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold mb-1">Address</p>
                    <p className="text-white/80 text-sm font-light leading-relaxed whitespace-pre-line">{store.address}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white/5 rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold mb-1">Store Timings</p>
                    <p className="text-white/80 text-sm font-light leading-relaxed whitespace-pre-line">{store.timings}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white/5 rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gold mb-1">Phone</p>
                    <p className="text-white/80 text-sm font-light">{store.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-4">
                <button className="w-auto px-6 py-2.5 bg-gold text-maroon-dominant rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap">
                  Directions
                </button>
                <a
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  className="w-auto px-6 py-2.5 border border-gold/40 text-gold rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all duration-300 hover:scale-105 active:scale-95 text-center whitespace-nowrap"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-white/30 text-[9px] uppercase tracking-[0.4em] font-black mt-10">
          Madhusudan Gold &amp; Diamonds · Serving Kolkata Since 1952 · BIS Hallmark Certified
        </p>
      </div>
    </section>
  );
};

export default StoreLocation;
