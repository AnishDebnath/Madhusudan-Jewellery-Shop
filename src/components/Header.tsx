import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Phone, User, TrendingUp, TrendingDown, Info, ChevronDown, Home, Sparkles, MapPin } from 'lucide-react';
import { PageView, Category } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onNavigate: (view: PageView, data?: any) => void;
}

import model1 from '../assets/models/models (1).jpg';
import model2 from '../assets/models/models (2).jpg';
import model3 from '../assets/models/models (3).jpg';
import model4 from '../assets/models/models (4).jpg';
import model14 from '../assets/models/models (14).jpg';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo.png'; // Using same logo for now, adjust if needed

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [goldRates, setGoldRates] = useState({
    gold24k: 72450,
    gold22k: 66410,
    trend: 'up' as 'up' | 'down'
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const fetchGoldRates = async () => {
      const fluctuation = Math.floor(Math.random() * 20) - 10;
      setGoldRates(prev => ({
        gold24k: prev.gold24k + fluctuation,
        gold22k: prev.gold22k + Math.floor(fluctuation * 0.916),
        trend: fluctuation >= 0 ? 'up' : 'down'
      }));
    };

    const interval = setInterval(fetchGoldRates, 15000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navCategories = [
    {
      name: 'Curated Sets',
      items: ['Heritage Bridal', 'Modern Minimalist', 'Office Elegance', 'Temple Classics', 'Investment Gold'],
      featured: model1
    },
    {
      name: 'By Category',
      items: ['Elite Rings', 'Divine Earrings', 'Royal Necklaces', 'Heirloom Bangles', 'Artisan Bracelets', 'Mangalsutra', 'Nose Pins', 'Coins & Bars'],
      featured: model2
    },
    {
      name: 'Materials',
      items: ['22K Royal Gold', '18K Fine Gold', 'Certified Diamond', 'Imperial Platinum', 'Heritage Polki', 'Antique Finish'],
      featured: model3
    },
    {
      name: 'The Muse',
      items: ['Vivaah Journey', 'Temple Spirit', 'Antique Soul', 'Modern Muse', 'Aham Men', 'Little Stars'],
      featured: model4
    },
    {
      name: 'Boutique',
      items: ['Virtual Viewing', 'Custom Atelier', 'Bespoke Design', 'Book Appointment', 'Store Locator'],
      featured: model14
    }
  ];

  const handleItemClick = (item: string) => {
    setActiveMega(null);
    setIsMenuOpen(false);
    if (item.includes('Virtual') || item.includes('Atelier')) {
      onNavigate('home');
      return;
    }
    if (item.includes('Appointment') || item.includes('Locator')) {
      onNavigate('store-locator');
      return;
    }
    onNavigate('category', item);
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? '-translate-y-10' : 'translate-y-0'}`}>
        {/* Top Ticker Bar */}
        <div className="bg-maroon-dominant text-white h-10 px-6 md:px-12 flex justify-between items-center text-[9px] tracking-[0.3em] font-black border-b border-white/5 relative overflow-hidden transition-colors">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-gold gold-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                LIVE RATES:
              </span>
              <div className="flex gap-8">
                <div className="flex items-center gap-2 hover:text-gold transition-colors cursor-default group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">24K:</span>
                  <span className="font-black">₹{goldRates.gold24k.toLocaleString('en-IN')}</span>
                  {goldRates.trend === 'up' ? <TrendingUp className="w-3 h-3 text-green-400" /> : <TrendingDown className="w-3 h-3 text-red-400" />}
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-8 hover:text-gold transition-colors cursor-default group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">22K:</span>
                  <span className="font-black">₹{goldRates.gold22k.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block text-gold/60 font-black uppercase overflow-hidden flex-1 px-20">
            <div className="animate-in slide-in-from-right-full duration-[40s] infinite linear whitespace-nowrap">
              Kolkata's Finest Heritage House Since 1952 • Complimentary Insured Shipping Across India • Hallmark Certified Purity
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={() => onNavigate('store-locator')} className="hover:text-gold flex items-center gap-2 transition-all group">
              <span className="group-hover:tracking-[0.4em] transition-all">OUR BOUTIQUES</span> <MapPin className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-1000 backdrop-blur-2xl border-b-2 border-gold/5 ${scrolled ? 'py-1.5 bg-white/95 dark:bg-luxury-dark-primary/95 shadow-2xl' : 'py-4 bg-white dark:bg-luxury-dark-primary'}`}>
          <div className="container mx-auto px-6 grid grid-cols-12 items-center">

            {/* Left Actions */}
            <div className="col-span-4 flex items-center gap-6">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-maroon-dominant dark:text-white hover:text-gold transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden lg:flex items-center gap-8">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-maroon-dominant dark:text-white hover:text-gold transition-all group"
                >
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> SEARCH
                </button>
              </div>
            </div>

            {/* Centered Logo */}
            <div className="col-span-4 flex justify-center">
              <div onClick={() => onNavigate('home')} className="flex flex-col items-center group cursor-pointer relative py-2">
                <img
                  src={logo}
                  alt="Aura Logo"
                  className={`transition-all duration-700 ${scrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'} group-hover:scale-110`}
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="col-span-4 flex items-center justify-end gap-2 md:gap-8">
              <button onClick={() => onNavigate('wishlist')} className="relative group p-2">
                <Heart className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-gold transition-all group-hover:scale-110" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-maroon-dominant text-[8px] text-white w-4.5 h-4.5 rounded-full flex items-center justify-center font-black shadow-lg border border-gold/40 animate-in zoom-in rotate-12">{wishlistCount}</span>
                )}
              </button>
              <button onClick={() => onNavigate('cart')} className="relative group p-2">
                <ShoppingBag className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-gold transition-all group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-[8px] text-maroon-dominant w-4.5 h-4.5 rounded-full flex items-center justify-center font-black shadow-[0_0_15px_rgba(212,175,55,0.5)] border border-maroon-dominant/20 animate-in zoom-in -rotate-12">{cartCount}</span>
                )}
              </button>
              <button className="p-2 hidden lg:block group hover:bg-maroon-dominant/5 dark:hover:bg-white/5 rounded-full transition-all">
                <User className="w-5 h-5 text-maroon-dominant dark:text-white group-hover:text-gold transition-all group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Category Menu */}
        <nav className={`hidden lg:flex justify-center transition-all duration-700 ${scrolled ? 'bg-white/95 dark:bg-luxury-dark-primary/95 backdrop-blur-xl border-b border-gold/10 shadow-lg' : 'bg-white dark:bg-luxury-dark-primary border-b border-gold/10 shadow-xl'}`}>
          <div className="flex items-center px-4">
            {navCategories.map((cat) => (
              <div
                key={cat.name}
                className="group relative px-6 py-3 cursor-pointer"
                onMouseEnter={() => setActiveMega(cat.name)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <div className="flex items-center gap-2 group-hover:text-gold transition-all duration-500">
                  <span className="text-[10px] font-black text-maroon-dominant/70 dark:text-white/70 group-hover:text-gold uppercase tracking-[0.25em] whitespace-nowrap transition-all">
                    {cat.name}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gold/30 transition-transform duration-500 ${activeMega === cat.name ? 'rotate-180 text-gold shadow-sm' : ''}`} />
                </div>

                <div className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-700 ease-in-out ${activeMega === cat.name ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>

                {activeMega === cat.name && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1000px] bg-white dark:bg-luxury-dark-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-transparent dark:border-white/10 animate-in fade-in slide-in-from-top-4 duration-500 z-[60] p-12 overflow-hidden">
                    <div className="absolute inset-0 bg-transparent opacity-[0.03] pointer-events-none"></div>
                    <div className="grid grid-cols-12 gap-16 relative z-10">
                      <div className="col-span-7">
                        <div className="flex items-center gap-4 mb-10">
                          <Sparkles className="w-5 h-5 text-gold gold-glow" />
                          <h4 className="text-[12px] font-black text-gold uppercase tracking-[0.5em] border-b border-gold/10 pb-3 flex-1">
                            {cat.name} Excellence
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                          {cat.items.map(item => (
                            <button
                              key={item}
                              onClick={() => handleItemClick(item)}
                              className="group/item flex items-center gap-4 text-[13px] text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white transition-all font-serif italic text-left"
                            >
                              <span className="w-2 h-[1px] bg-gold/0 group-hover/item:bg-gold group-hover/item:w-4 transition-all duration-500"></span>
                              {item}
                            </button>
                          ))}
                        </div>
                        <div className="mt-12 pt-8 border-t border-maroon-dominant/5 dark:border-white/5 flex justify-between items-center">
                          <p className="text-[9px] text-maroon-dominant/30 dark:text-white/20 uppercase tracking-[0.4em] font-black">Crafting Perfection Since 1952</p>
                          <button onClick={() => onNavigate('category', cat.name)} className="text-[10px] font-black text-gold hover:text-maroon-dominant dark:hover:text-white transition-all tracking-[0.3em] uppercase group/link">
                            VIEW FULL COLLECTION <span className="inline-block group-hover/link:translate-x-2 transition-transform duration-500">→</span>
                          </button>
                        </div>
                      </div>

                      <div className="col-span-5 relative rounded-3xl overflow-hidden group/featured shadow-2xl aspect-[4/5]">
                        <img src={cat.featured} className="w-full h-full object-cover group-hover/featured:scale-110 transition-all duration-[3s]" alt={cat.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant via-maroon-dominant/20 to-transparent flex flex-col justify-end p-10">
                          <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 gold-glow">Curated Choice</span>
                          <h5 className="text-white font-serif text-3xl leading-tight mb-8">Exclusive <br />{cat.name}</h5>
                          <button className="w-full bg-gold text-maroon-dominant py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all transform active:scale-95 shadow-xl">EXPLORE PIECES</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Modern Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-luxury-bg-primary/98 dark:bg-luxury-dark-primary/98 backdrop-blur-2xl animate-in fade-in duration-500">
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 p-4 text-luxury-text-light dark:text-luxury-text-dark hover:text-gold hover:rotate-90 transition-all">
            <X className="w-8 h-8" />
          </button>
          <div className="h-full container mx-auto px-6 flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl relative">
              <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block text-center">What are you looking for today?</span>
              <input
                autoFocus
                type="text"
                placeholder="E.g. Heritage Filigree, Polki Rings..."
                className="w-full bg-transparent border-b-2 border-gold/20 py-8 text-3xl md:text-5xl font-serif text-luxury-text-light dark:text-luxury-text-dark focus:outline-none focus:border-gold transition-all placeholder:text-luxury-text-light/10 dark:placeholder:text-white/10"
              />
              <Search className="w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 text-gold opacity-50" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm lg:hidden animate-in fade-in">
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-luxury-bg-primary dark:bg-luxury-dark-primary shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-maroon-border">
            <div className="sticky top-0 z-10 bg-maroon-dominant dark:bg-luxury-dark-secondary p-8 border-b border-white/10 flex justify-between items-center transition-colors">
              <div className="flex flex-col">
                <img src={logo} alt="Aura Logo" className="h-10" />
                <span className="text-[8px] tracking-[0.3em] text-gold uppercase mt-2">Heritage Luxury</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/5 rounded-full text-white hover:bg-gold hover:text-maroon-dominant transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {navCategories.map(cat => (
                  <div key={cat.name} className="border-b border-luxury-bg-card dark:border-white/5 pb-8">
                    <button className="w-full flex justify-between items-center mb-6 group">
                      <span className="text-sm font-bold text-luxury-text-light dark:text-luxury-text-dark uppercase tracking-[0.2em]">{cat.name}</span>
                      <ChevronDown className="w-5 h-5 text-gold" />
                    </button>
                    <div className="grid grid-cols-1 gap-4 pl-4">
                      {cat.items.map(item => (
                        <button key={item} onClick={() => handleItemClick(item)} className="text-left text-xs text-luxury-text-light/60 dark:text-luxury-text-dark/60 py-1 hover:text-gold transition-colors tracking-widest uppercase font-medium">{item}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <button
                  onClick={() => { setIsMenuOpen(false); onNavigate('contact'); }}
                  className="w-full bg-gold text-maroon-dominant py-5 rounded-full text-[11px] font-black tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-gold-light transition-all"
                >
                  Book Private Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;