import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import model11 from '../assets/models/models (11).jpg';
import model12 from '../assets/models/models (12).jpg';

import heritageVideo from '../assets/Hero Banner.webm';

const KolkataStore: React.FC = () => {
  return (
    <section className="bg-maroon-dominant py-24 text-white overflow-hidden relative border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none mix-blend-overlay">
        <img src={model12} alt="Kolkata Pattern" className="w-full h-full object-cover grayscale" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dominant via-maroon-dominant/95 to-maroon-dominant/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-black block mb-4 gold-glow">Heritage Location</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-white uppercase tracking-tight">
              Flagship <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white italic">Park Street</span>
            </h2>
            <p className="text-white/80 mb-10 text-base md:text-lg leading-relaxed font-light text-balance border-l-2 border-gold/30 pl-6">
              Experience heritage luxury in person. Our Kolkata boutique houses exclusive bridal collections and allows you to customize your dream jewelry with our master craftsmen.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5 items-start group">
                <div className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black mb-1 uppercase tracking-[0.2em] text-gold text-[9px]">Address</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">Aura Heritage House, 15A Park Street,<br />Near Middleton Row, Kolkata - 700016</p>
                </div>
              </div>
              <div className="flex gap-5 items-start group">
                <div className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black mb-1 uppercase tracking-[0.2em] text-gold text-[9px]">Timings</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">Mon - Sat: 11:00 AM to 8:30 PM<br />Sun: 12:00 PM to 6:00 PM</p>
                </div>
              </div>
              <div className="flex gap-5 items-start group">
                <div className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black mb-1 uppercase tracking-[0.2em] text-gold text-[9px]">Contact</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed text-balance">+91 33 22XX XXXX | concierge@aurajewels.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-gold text-maroon-dominant px-8 py-3.5 rounded-full font-black flex items-center gap-3 hover:bg-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl gold-glow uppercase text-[10px] tracking-[0.2em]">
                <Calendar className="w-4 h-4" /> BOOK APPOINTMENT
              </button>
              <button className="border border-gold/40 text-gold px-8 py-3.5 rounded-full font-black hover:bg-gold hover:text-maroon-dominant transition-all duration-500 hover:scale-105 active:scale-95 uppercase text-[10px] tracking-[0.2em]">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl group-hover:scale-105 transition-transform duration-700 border border-gold/20 blur-sm"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              >
                <source src={heritageVideo} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-maroon-dominant/20 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white/90 text-lg italic font-serif tracking-wide text-center">"Step into our heritage Flagship boutique on Park Street"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KolkataStore;