import React from 'react';
import { Facebook, Instagram, Twitter, ShieldCheck, Award, RefreshCw, Truck } from 'lucide-react';
import { PageView, Category } from '../types';

interface FooterProps {
  onNavigate: (view: PageView, data?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-luxury-bg-secondary dark:bg-luxury-dark-primary pt-20 pb-10 border-t border-luxury-bg-card dark:border-maroon-border transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white mb-6 cursor-pointer tracking-widest gold-glow" onClick={() => onNavigate('home')}>AURA</h2>
            <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted mb-8 max-w-sm font-light italic leading-relaxed">
              Celebrating the spirit of Indian heritage through meticulously crafted gold and diamond jewelry. Kolkata's most trusted name in jewelry since 1952.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full border border-luxury-bg-card dark:border-maroon-border hover:bg-gold hover:text-maroon-dominant transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="p-2 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full border border-luxury-bg-card dark:border-maroon-border hover:bg-gold hover:text-maroon-dominant transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="p-2 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full border border-luxury-bg-card dark:border-maroon-border hover:bg-gold hover:text-maroon-dominant transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-6 text-xs uppercase tracking-[0.2em] gold-glow">Collections</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-bold">
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('category', Category.GOLD)}>Gold Jewellery</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('category', Category.DIAMOND)}>Diamond Jewellery</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('category', Category.BRIDAL)}>Bridal Sets</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('category', Category.GEMSTONE)}>Gemstone</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('category', Category.SILVER)}>Silver Articles</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-6 text-xs uppercase tracking-[0.2em] gold-glow">Customer Care</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-bold">
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('contact')}>Virtual Appointment</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('about')}>About Aura</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors" onClick={() => onNavigate('store-locator')}>Store Locator</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors">Jewellery Care</li>
              <li className="hover:text-maroon-dominant dark:hover:text-gold cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gold font-bold mb-6 text-xs uppercase tracking-[0.2em] gold-glow">Newsletter</h4>
            <p className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-darkMuted mb-4 italic uppercase tracking-widest font-bold">Stay informed on heritage launches.</p>
            <div className="flex border-b border-luxury-bg-card dark:border-maroon-border pb-2 focus-within:border-gold transition-colors">
              <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full focus:outline-none text-luxury-text-light dark:text-white font-light placeholder:text-luxury-text-light/20 dark:placeholder:text-white/20" />
              <button className="text-[10px] font-bold uppercase tracking-widest text-gold hover:text-maroon-dominant dark:hover:text-white transition-all">Join</button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-luxury-bg-card dark:border-maroon-border mb-12">
          <div className="flex flex-col items-center text-center group">
            <ShieldCheck className="w-8 h-8 text-gold mb-3 gold-glow group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-dominant dark:text-white">BIS Hallmark Gold</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Award className="w-8 h-8 text-gold mb-3 gold-glow group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-dominant dark:text-white">Certified Diamonds</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <RefreshCw className="w-8 h-8 text-gold mb-3 gold-glow group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-dominant dark:text-white">Lifetime Exchange</span>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Truck className="w-8 h-8 text-gold mb-3 gold-glow group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-dominant dark:text-white">Free Insured Shipping</span>
          </div>
        </div>

        <div className="text-center text-luxury-text-light/40 dark:text-luxury-text-darkMuted text-[10px] uppercase tracking-widest font-bold">
          <p>© 2025 Aura Luxury Jewelry Heritage. All Rights Reserved. Crafted for Excellence in Kolkata.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;