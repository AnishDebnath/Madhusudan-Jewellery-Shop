import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Phone, User, TrendingUp, TrendingDown, Info, ChevronDown, Home, Sparkles, MapPin, Sun, Moon } from 'lucide-react';
import { PageView, Category } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onNavigate: (view: PageView, data?: any) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onNavigate, isDarkMode, toggleTheme }) => {
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
      name: 'Shop Jewellery', 
      items: ['Everyday Jewellery', 'Wedding Jewellery', 'Festival Jewellery', 'Office Wear', 'Investment (Coins & Bars)'],
      featured: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'By Category', 
      items: ['Rings', 'Earrings', 'Necklaces', 'Bangles', 'Bracelets', 'Chains', 'Mangalsutra', 'Nose Pins', 'Coins & Bars'],
      featured: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'By Material', 
      items: ['22K Gold', '18K Gold', 'Diamond', 'Platinum', 'Polki', 'Antique'],
      featured: 'https://images.unsplash.com/photo-1616151475510-9993309a489f?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Collections', 
      items: ['Vivaah Wedding', 'Temple Heritage', 'Antique Royal', 'Polki Heirloom', 'Modern Diamond', 'Aham Men\'s', 'Kids Sparkle', 'Festival Specials'],
      featured: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Gift Shop', 
      items: ['Wedding Gifts', 'Anniversary Gifts', 'Birthday Gifts', 'Corporate Gifts', 'Digital Gift Cards'],
      featured: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Gold Schemes', 
      items: ['Monthly Savings', 'Advance Booking', 'Digi Gold', 'Digi Silver', 'Buyback & Exchange'],
      featured: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Experience', 
      items: ['Virtual Try‑On', '360° VR View', 'Video Shopping', 'Custom Design', 'Book Appointment'],
      featured: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400'
    },
    { 
      name: 'Trust & Stores', 
      items: ['Store Locator', 'BIS Guarantee', 'Ethical Sourcing', 'Certifications', 'Customer Reviews', 'Education'],
      featured: 'https://images.unsplash.com/photo-1541093226354-28b934667791?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const handleItemClick = (item: string) => {
    setActiveMega(null);
    setIsMenuOpen(false);
    if (item === 'Virtual Try‑On' || item === '360° VR View') {
        onNavigate('home');
        return;
    }
    if (item === 'Book Appointment' || item === 'Store Locator') {
        onNavigate('store-locator');
        return;
    }
    onNavigate('category', item);
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? '-translate-y-10' : 'translate-y-0'}`}>
        {/* Top Ticker Bar - Maroon First */}
        <div className="bg-maroon-dominant text-white h-10 px-4 md:px-8 flex justify-between items-center text-[10px] tracking-[0.2em] font-medium border-b border-white/5 relative overflow-hidden transition-colors">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                LIVE MARKET:
              </span>
              <div className="flex gap-6">
                <div className="flex items-center gap-1.5">
                  <span className="opacity-60">24K:</span> 
                  <span className="font-bold">₹{goldRates.gold24k.toLocaleString('en-IN')}</span>
                  {goldRates.trend === 'up' ? <TrendingUp className="w-3 h-3 text-green-400" /> : <TrendingDown className="w-3 h-3 text-red-400" />}
                </div>
                <div className="flex items-center gap-1.5 border-l border-white/10 pl-6">
                  <span className="opacity-60">22K:</span> 
                  <span className="font-bold">₹{goldRates.gold22k.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block text-gold font-bold uppercase group overflow-hidden">
             <div className="animate-in slide-in-from-right-full duration-[30s] infinite linear">
               Complimentary Insured Shipping Across India • Kolkata's Finest Heritage since 1952
             </div>
          </div>

          <div className="flex items-center gap-6">
             <button onClick={() => onNavigate('store-locator')} className="hover:text-gold flex items-center gap-2 transition-colors uppercase">
               OUR BOUTIQUES <MapPin className="w-3 h-3 text-gold" />
             </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-500 bg-luxury-bg-secondary/95 dark:bg-luxury-dark-primary/95 backdrop-blur-xl border-b border-luxury-bg-card dark:border-maroon-border ${scrolled ? 'py-3' : 'py-5'}`}>
          <div className="container mx-auto px-6 grid grid-cols-3 items-center">
            
            {/* Left Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="lg:hidden p-2 -ml-2 text-luxury-text-light dark:text-luxury-text-dark hover:text-gold transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden lg:flex items-center gap-6">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-luxury-text-light dark:text-luxury-text-dark hover:text-gold transition-all group"
                >
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> SEARCH
                </button>
                <button 
                  onClick={toggleTheme}
                  className="p-2 text-luxury-text-light dark:text-luxury-text-dark hover:text-gold transition-all rounded-full hover:bg-maroon-dominant/10"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center">
              <div onClick={() => onNavigate('home')} className="flex flex-col items-center group cursor-pointer">
                <h1 className="text-3xl md:text-5xl font-serif text-maroon-dominant dark:text-white tracking-[0.15em] leading-none transition-all duration-700 group-hover:tracking-[0.25em] group-hover:text-gold">AURA</h1>
                <div className="flex items-center gap-2 mt-1 opacity-60">
                   <div className="h-[1px] w-4 bg-gold/50"></div>
                   <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-gold uppercase font-light">Heritage House</span>
                   <div className="h-[1px] w-4 bg-gold/50"></div>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center justify-end gap-2 md:gap-6">
              <button onClick={() => onNavigate('wishlist')} className="relative group p-2">
                <Heart className="w-5 h-5 text-luxury-text-light dark:text-luxury-text-dark group-hover:text-gold transition-all group-hover:scale-110" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-gold text-[8px] text-maroon-dominant w-4 h-4 rounded-full flex items-center justify-center font-black shadow-[0_0_10px_rgba(212,175,55,0.4)]">{wishlistCount}</span>
                )}
              </button>
              <button onClick={() => onNavigate('cart')} className="relative group p-2">
                <ShoppingBag className="w-5 h-5 text-luxury-text-light dark:text-luxury-text-dark group-hover:text-gold transition-all group-hover:scale-110" />
                <span className="absolute top-0 right-0 bg-gold text-[8px] text-maroon-dominant w-4 h-4 rounded-full flex items-center justify-center font-black shadow-[0_0_10px_rgba(212,175,55,0.4)]">{cartCount}</span>
              </button>
              <button className="lg:hidden p-2 text-luxury-text-light dark:text-luxury-text-dark hover:text-gold transition-all" onClick={toggleTheme}>
                 {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="p-2 hidden lg:block group">
                <User className="w-5 h-5 text-luxury-text-light dark:text-luxury-text-dark group-hover:text-gold transition-all group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Category Menu */}
        <nav className="hidden lg:flex bg-luxury-bg-secondary/95 dark:bg-luxury-dark-primary/95 backdrop-blur-md justify-center border-b border-luxury-bg-card dark:border-maroon-border transition-colors">
          {navCategories.map((cat) => (
            <div 
              key={cat.name}
              className="group relative px-6 py-4 cursor-pointer"
              onMouseEnter={() => setActiveMega(cat.name)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <div className="flex items-center gap-1 group-hover:text-gold transition-all duration-300">
                <span className="text-[10px] font-bold text-luxury-text-light/80 dark:text-luxury-text-dark/80 uppercase tracking-[0.2em] whitespace-nowrap">
                  {cat.name}
                </span>
                <ChevronDown className={`w-3 h-3 text-gold/40 transition-transform duration-300 ${activeMega === cat.name ? 'rotate-180 text-gold' : ''}`} />
              </div>
              
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold transition-all duration-500 ${activeMega === cat.name ? 'w-2/3' : 'w-0'}`}></div>

              {activeMega === cat.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-luxury-bg-secondary dark:bg-luxury-dark-card shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-luxury-bg-card dark:border-maroon-border animate-in fade-in slide-in-from-top-2 duration-300 z-[60] p-10">
                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-8">
                      <div className="flex items-center gap-3 mb-8">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <h4 className="text-[11px] font-black text-gold uppercase tracking-[0.4em] border-b border-luxury-bg-card dark:border-maroon-border pb-2 flex-1">
                          The {cat.name} Collection
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                        {cat.items.map(item => (
                          <button 
                            key={item} 
                            onClick={() => handleItemClick(item)}
                            className="group/item flex items-center gap-3 text-[12px] text-luxury-text-light/70 dark:text-luxury-text-dark/70 hover:text-maroon-dominant dark:hover:text-white transition-all font-medium text-left"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/0 border border-gold/40 group-hover/item:bg-gold group-hover/item:scale-125 transition-all"></span>
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="mt-10 pt-6 border-t border-luxury-bg-card dark:border-maroon-border flex justify-between items-center">
                         <p className="text-[10px] text-luxury-text-light/40 dark:text-luxury-text-dark/40 uppercase tracking-widest italic">Experience artisanal perfection since 1952</p>
                         <button onClick={() => onNavigate('category', cat.name)} className="text-[10px] font-bold text-gold hover:text-maroon-dominant dark:hover:text-white transition-colors tracking-[0.2em] uppercase">View All Masterpieces →</button>
                      </div>
                    </div>
                    
                    <div className="col-span-4 relative rounded-sm overflow-hidden group/featured border border-luxury-bg-card dark:border-maroon-border aspect-[3/4]">
                      <img src={cat.featured} className="w-full h-full object-cover grayscale-[0.2] group-hover/featured:grayscale-0 group-hover/featured:scale-110 transition-all duration-1000" alt={cat.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant dark:from-luxury-dark-primary/90 to-transparent flex flex-col justify-end p-6">
                        <span className="text-[9px] text-gold font-black uppercase tracking-[0.4em] mb-2">Curated Choice</span>
                        <h5 className="text-white font-serif text-xl leading-tight mb-4">Limited Edition <br/>{cat.name}</h5>
                        <button className="w-fit bg-gold text-maroon-dominant px-6 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-gold-light transition-all active:scale-95">Explore</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
                <span className="font-serif text-3xl text-white tracking-widest">AURA</span>
                <span className="text-[9px] tracking-[0.3em] text-gold uppercase mt-1">Heritage Luxury</span>
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
                  className="w-full bg-gold text-maroon-dominant py-5 rounded-sm text-[11px] font-black tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-gold-light transition-all"
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