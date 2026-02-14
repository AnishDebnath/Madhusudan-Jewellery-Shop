import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const KolkataStore: React.FC = () => {
  return (
    <section className="bg-maroon py-20 text-white overflow-hidden relative border-y border-maroon-secondary">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none grayscale invert">
        <img src="https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=800" alt="Kolkata Pattern" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-white uppercase tracking-wider">
              Visit Our Flagship <br/> Showroom in <span className="text-gold italic gold-glow">Park Street</span>
            </h2>
            <p className="text-luxury-secondary mb-10 text-lg leading-relaxed font-light italic">
              Experience heritage luxury in person. Our Kolkata boutique houses exclusive bridal collections and allows you to customize your dream jewelry with our master craftsmen.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-maroon-secondary rounded-full border border-gold/20 group-hover:bg-gold group-hover:text-maroon transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-gold text-xs">Address</h4>
                  <p className="text-luxury-secondary text-sm">Aura Heritage House, 15A Park Street,<br/>Near Middleton Row, Kolkata - 700016</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-maroon-secondary rounded-full border border-gold/20 group-hover:bg-gold group-hover:text-maroon transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-gold text-xs">Timings</h4>
                  <p className="text-luxury-secondary text-sm">Mon - Sat: 11:00 AM to 8:30 PM<br/>Sun: 12:00 PM to 6:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-maroon-secondary rounded-full border border-gold/20 group-hover:bg-gold group-hover:text-maroon transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-gold text-xs">Contact</h4>
                  <p className="text-luxury-secondary text-sm">+91 33 22XX XXXX | concierge@aurajewels.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-gold text-dark-primary px-10 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-gold-light transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl gold-glow uppercase text-xs tracking-widest">
                <Calendar className="w-4 h-4" /> BOOK APPOINTMENT
              </button>
              <button className="border border-gold/30 text-gold px-10 py-4 rounded-sm font-bold hover:bg-maroon-secondary transition-all duration-300 hover:scale-105 active:scale-95 uppercase text-xs tracking-widest">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/5 rounded-2xl group-hover:scale-105 transition-transform duration-500 border border-gold/10"></div>
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-luxury-border">
              <img 
                src="https://images.unsplash.com/photo-1541093226354-28b934667791?auto=format&fit=crop&q=80&w=800" 
                alt="Showroom" 
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-maroon/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-dark-primary/40 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-maroon transition-all duration-500 border border-gold/20 group/play shadow-2xl">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gold border-b-[10px] border-b-transparent ml-1 group-hover/play:border-l-white transition-colors"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-primary to-transparent">
                <p className="text-white text-sm italic font-serif tracking-wide">"Experience the royal 360° virtual tour of our flagship boutique"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KolkataStore;