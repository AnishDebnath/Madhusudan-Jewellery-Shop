import React from 'react';
import { Facebook, Instagram, Twitter, ShieldCheck, Award, RefreshCw, Truck, MapPin, Phone, Mail, Youtube } from 'lucide-react';
import { PageView, Category } from '../types';
import footerLogo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (view: PageView, data?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-luxury-bg-primary dark:bg-luxury-dark-primary pt-14 pb-8 border-t border-luxury-bg-card dark:border-white/5 transition-colors relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -mr-48 -mt-48 z-0 pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-maroon-dominant/5 rounded-full blur-[80px] -ml-32 -mb-32 z-0 pointer-events-none opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 lg:pr-10">
            <div
              className="mb-6 cursor-pointer transition-all duration-700 hover:opacity-80 inline-block"
              onClick={() => onNavigate('home')}
            >
              <img src={footerLogo} alt="Madhusudan Jewellery Logo" className="h-14 md:h-16 drop-shadow-sm" loading="lazy" />
            </div>
            <p className="text-maroon-dominant/70 dark:text-luxury-text-darkMuted text-[13px] md:text-sm leading-relaxed mb-8 font-serif italic text-balance max-w-md">
              "Kolkata's trusted gold and diamond jewellery store since 1952. BIS Hallmark certified gold, IGI diamonds, and beautiful bridal jewellery — at 2 stores in Kolkata."
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, link: '#' },
                { Icon: Facebook, link: '#' },
                { Icon: Twitter, link: '#' },
                { Icon: Youtube, link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 rounded-full border border-maroon-dominant/10 dark:border-white/10 hover:border-gold hover:bg-gold hover:text-maroon-dominant dark:hover:bg-gold dark:hover:text-maroon-dominant transition-all duration-500 cursor-pointer group shadow-sm"
                >
                  <social.Icon className="w-4.5 h-4.5 text-maroon-dominant dark:text-gold group-hover:text-maroon-dominant transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-3">
            <h4 className="text-gold font-black mb-6 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
              Collections
              <span className="h-[1px] flex-1 bg-gold/20"></span>
            </h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-maroon-dominant/60 dark:text-luxury-text-darkMuted font-black">
              {[
                { name: 'Gold Jewellery', cat: Category.GOLD },
                { name: 'Diamond Jewellery', cat: Category.DIAMOND },
                { name: 'Bridal Couture', cat: Category.BRIDAL },
                { name: 'Gemstone', cat: Category.GEMSTONE },
                { name: 'Silver Articles', cat: Category.SILVER }
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-gold dark:hover:text-white transition-all duration-500 cursor-pointer flex items-center gap-3 group"
                  onClick={() => onNavigate('category', item.cat)}
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 lg:pl-6">
            <h4 className="text-gold font-black mb-6 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
              The Atelier
              <span className="h-[1px] flex-1 bg-gold/20"></span>
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5 group">
                <MapPin className="w-4.5 h-4.5 text-gold mt-0.5 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-[13px] text-maroon-dominant/70 dark:text-luxury-text-darkMuted leading-snug font-serif italic">
                  Store 1: 123 Your Street, Area, Kolkata – 700001<br />
                  Store 2: 456 Your Street, Area, Kolkata – 700XXX
                </p>
              </div>
              <div className="flex items-center gap-3.5 group cursor-pointer w-fit">
                <Phone className="w-4.5 h-4.5 text-gold group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[12px] font-black tracking-widest text-maroon-dominant dark:text-white group-hover:text-gold transition-colors">+91 33 2241 XXXX</span>
              </div>
              <div className="flex items-center gap-3.5 group cursor-pointer w-fit">
                <Mail className="w-4.5 h-4.5 text-gold group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[12px] font-black tracking-widest text-maroon-dominant dark:text-white group-hover:text-gold transition-colors">info@madhusudangold.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Standards Section */}
        <div className="py-10 border-y border-maroon-dominant/5 dark:border-white/10 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              { icon: ShieldCheck, text: 'BIS Hallmark Purity', desc: '100% Certified Gold' },
              { icon: Award, text: 'IGI/GIA Diamonds', desc: 'Sourced Ethically' },
              { icon: RefreshCw, text: 'Lifetime Exchange', desc: 'Best Value' },
              { icon: Truck, text: 'Insured Shipping', desc: 'Global Delivery' }
            ].map((badge, idx) => (
              <div key={idx} className="flex gap-4 items-center group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/5 rounded-xl group-hover:border-gold/30 transition-all duration-500">
                  <badge.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h5 className="text-[9px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white group-hover:text-gold transition-colors mb-0.5">{badge.text}</h5>
                  <p className="text-[8px] text-maroon-dominant/40 dark:text-luxury-text-darkMuted font-medium uppercase tracking-tighter">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2 pb-6">
          <p className="text-maroon-dominant/30 dark:text-white/20 text-[8px] uppercase tracking-[0.4em] font-black text-center md:text-left">
            © 2026 Madhusudan Gold & Diamonds. Kolkata, West Bengal.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[8px] font-black text-maroon-dominant/20 dark:text-white/10 uppercase tracking-[0.2em] hover:text-gold transition-colors cursor-pointer">Terms</span>
            <span className="text-[8px] font-black text-maroon-dominant/20 dark:text-white/10 uppercase tracking-[0.2em] hover:text-gold transition-colors cursor-pointer">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;