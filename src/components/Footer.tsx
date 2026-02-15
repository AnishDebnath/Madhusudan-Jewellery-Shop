import React from 'react';
import { Facebook, Instagram, Twitter, ShieldCheck, Award, RefreshCw, Truck } from 'lucide-react';
import { PageView, Category } from '../types';

interface FooterProps {
  onNavigate: (view: PageView, data?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-luxury-bg-secondary dark:bg-luxury-dark-primary pt-24 pb-12 border-t border-luxury-bg-card dark:border-white/5 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2
              className="text-6xl font-serif text-maroon-dominant dark:text-white mb-8 cursor-pointer tracking-tighter hover:text-gold transition-colors duration-500"
              onClick={() => onNavigate('home')}
            >
              AURA
            </h2>
            <p className="text-luxury-text-light/70 dark:text-luxury-text-darkMuted mb-10 max-w-md font-serif text-lg leading-relaxed">
              Celebrating the spirit of Indian heritage through meticulously crafted gold and diamond jewelry. Kolkata's most trusted name since 1952.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 rounded-full border border-transparent dark:border-white/10 hover:bg-gold hover:text-maroon-dominant dark:hover:bg-gold dark:hover:text-maroon-dominant transition-all duration-300 cursor-pointer group shadow-lg">
                  <Icon className="w-5 h-5 text-maroon-dominant dark:text-gold group-hover:text-maroon-dominant transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] uppercase tracking-[0.2em] relative inline-block">
              Collections
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50"></span>
            </h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-widest text-luxury-text-light/60 dark:text-luxury-text-darkMuted font-bold">
              {[
                { name: 'Gold Jewellery', cat: Category.GOLD },
                { name: 'Diamond Jewellery', cat: Category.DIAMOND },
                { name: 'Bridal Sets', cat: Category.BRIDAL },
                { name: 'Gemstone', cat: Category.GEMSTONE },
                { name: 'Silver Articles', cat: Category.SILVER }
              ].map((item) => (
                <li key={item.name} className="hover:text-maroon-dominant dark:hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center gap-2 group" onClick={() => onNavigate('category', item.cat)}>
                  <span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-black mb-8 text-[10px] uppercase tracking-[0.2em] relative inline-block">
              Customer Care
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50"></span>
            </h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-widest text-luxury-text-light/60 dark:text-luxury-text-darkMuted font-bold">
              {[
                { name: 'Virtual Appointment', action: () => onNavigate('contact') },
                { name: 'About Aura', action: () => onNavigate('about') },
                { name: 'Store Locator', action: () => onNavigate('store-locator') },
                { name: 'Jewellery Care', action: () => { } },
                { name: 'Privacy Policy', action: () => { } }
              ].map((item) => (
                <li key={item.name} className="hover:text-maroon-dominant dark:hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center gap-2 group" onClick={item.action}>
                  <span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-gold font-black mb-8 text-[10px] uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-xs text-luxury-text-light/50 dark:text-luxury-text-darkMuted mb-6 leading-relaxed">
              Join our exclusive list for early access to heritage launches and private events.
            </p>
            <div className="flex border-b border-luxury-bg-card dark:border-white/20 pb-4 focus-within:border-gold transition-colors duration-500 pt-2 group">
              <input type="email" placeholder="Your Email Address" className="bg-transparent text-sm w-full focus:outline-none text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/40 dark:placeholder:text-white/20 transition-colors" />
              <button className="text-[10px] font-black uppercase tracking-widest text-gold hover:text-maroon-dominant dark:hover:text-white transition-all transform hover:scale-110">JOIN</button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-luxury-bg-card dark:border-white/10 mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold/30"></div>
          {[
            { icon: ShieldCheck, text: 'BIS Hallmark Gold' },
            { icon: Award, text: 'Certified Diamonds' },
            { icon: RefreshCw, text: 'Lifetime Exchange' },
            { icon: Truck, text: 'Free Insured Shipping' }
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group p-6 hover:bg-white dark:hover:bg-white/5 rounded-3xl transition-all duration-500 hover:-translate-y-1">
              <badge.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant dark:text-white group-hover:text-gold transition-colors">{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-luxury-bg-card dark:border-white/5 pt-12">
          <p className="text-luxury-text-light/30 dark:text-white/20 text-[10px] uppercase tracking-[0.3em] font-black">
            © 2025 Aura Luxury Jewelry Heritage. Crafted for Excellence in Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;