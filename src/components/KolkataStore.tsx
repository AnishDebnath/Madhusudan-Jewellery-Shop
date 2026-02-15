import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import model11 from '../assets/models/models (11).jpg';
import model12 from '../assets/models/models (12).jpg';

const KolkataStore: React.FC = () => {
  return (
    <section className="bg-maroon-dominant py-32 text-white overflow-hidden relative border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none mix-blend-overlay">
        <img src={model12} alt="Kolkata Pattern" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant via-maroon-dominant/95 to-maroon-dominant/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-black block mb-6 gold-glow">Heritage Location</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none text-white uppercase tracking-tight">
              Flagship <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic">Park Street</span>
            </h2>
            <p className="text-white/80 mb-12 text-lg leading-relaxed font-light text-balance border-l-2 border-gold/30 pl-6">
              Experience heritage luxury in person. Our Kolkata boutique houses exclusive bridal collections and allows you to customize your dream jewelry with our master craftsmen.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black mb-2 uppercase tracking-[0.2em] text-gold text-[10px]">Address</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">Aura Heritage House, 15A Park Street,<br />Near Middleton Row, Kolkata - 700016</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black mb-2 uppercase tracking-[0.2em] text-gold text-[10px]">Timings</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">Mon - Sat: 11:00 AM to 8:30 PM<br />Sun: 12:00 PM to 6:00 PM</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black mb-2 uppercase tracking-[0.2em] text-gold text-[10px]">Contact</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">+91 33 22XX XXXX | concierge@aurajewels.in</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-6">
              <button className="bg-gold text-maroon-dominant px-10 py-4 rounded-full font-black flex items-center gap-3 hover:bg-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl gold-glow uppercase text-[10px] tracking-[0.3em]">
                <Calendar className="w-4 h-4" /> BOOK APPOINTMENT
              </button>
              <button className="border border-gold/40 text-gold px-10 py-4 rounded-full font-black hover:bg-gold hover:text-maroon-dominant transition-all duration-500 hover:scale-105 active:scale-95 uppercase text-[10px] tracking-[0.3em]">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl group-hover:scale-105 transition-transform duration-700 border border-gold/20 blur-sm"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={model11}
                alt="Showroom"
                className="w-full h-[600px] object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-maroon-dominant/20 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-gold transition-all duration-500 border border-white/20 group/play shadow-2xl ring-1 ring-white/30">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover/play:border-l-maroon-dominant transition-colors"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white/90 text-lg italic font-serif tracking-wide text-center">"Experience the royal 360° virtual tour of our flagship boutique"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KolkataStore;