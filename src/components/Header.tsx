import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Phone, User, Info, ChevronDown, Home, Sparkles, MapPin, LogOut, Settings } from 'lucide-react';
import { PageView, Category } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onNavigate: (view: PageView, data?: any) => void;
  isLoggedIn?: boolean;
  userName?: string;
  isMinimal?: boolean;
  onLogout?: () => void;
}

import model1 from '../assets/models/models (1).jpg';
import model2 from '../assets/models/models (2).jpg';
import model3 from '../assets/models/models (3).jpg';
import model4 from '../assets/models/models (4).jpg';
import model14 from '../assets/models/models (14).jpg';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo.png'; // Using same logo for now, adjust if needed

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onNavigate, isLoggedIn = false, userName, isMinimal = false, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolledState, setScrolledState] = useState(false);
  const scrolled = isMinimal ? false : scrolledState;

  const currentDate = `${String(new Date().getDate()).padStart(2, '0')}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`;

  useEffect(() => {
    const handleScroll = () => setScrolledState(window.scrollY > 20);
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navCategories = [
    {
      name: 'Gold',
      items: ['Necklaces', 'Bangles', 'Earrings', 'Rings', 'Chains', 'Investment Gold'],
      featured: model1
    },
    {
      name: 'Diamond',
      items: ['Elite Rings', 'Divine Earrings', 'Royal Necklaces', 'Heirloom Bangles', 'Pendants', 'Solitaires'],
      featured: model2
    },
    {
      name: 'Bridal',
      items: ['Heritage Sets', 'Polki Collection', 'Necklaces & Sets', 'Bridal Kadas', 'Wedding Special'],
      featured: model3
    },
    {
      name: 'Silver',
      items: ['Investment Coins', 'Pure 999 Bars', 'Silver Articles', 'Silver Utensils', 'Modern Silver'],
      featured: model4
    },
    {
      name: 'Gemstone',
      items: ['Emerald Pieces', 'Ruby Highlights', 'Sapphire Classics', 'Navratna Heritage', 'Natural Pearls'],
      featured: model14
    },
    {
      name: 'Bespoke',
      items: ['Custom Atelier', 'Virtual Viewing', 'Book Appointment', 'Aham Men', 'Little Stars', 'Store Locator'],
      featured: model1
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
      <header className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? '-translate-y-20' : 'translate-y-0'}`}>
        {/* Top Ticker Bar */}
        <div className="bg-maroon-dominant text-white flex flex-col xl:flex-row items-center text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] font-black border-b border-white/5 relative overflow-hidden transition-colors">

          <div className="w-full xl:w-auto flex justify-between items-center px-4 md:px-8 xl:px-10 2xl:px-12 h-8 md:h-10 z-10 bg-maroon-dominant xl:border-none border-b border-white/5 xl:pr-10">
            <span className="flex items-center gap-1.5 md:gap-2 text-gold gold-glow whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
              <span className="hidden sm:inline">TODAY'S RATES ({currentDate}):</span>
              <span className="sm:hidden">TODAY'S RATES ({currentDate}):</span>
            </span>

            <button onClick={() => onNavigate('store-locator')} className="xl:hidden hover:text-gold flex items-center gap-2 transition-all group">
              <span className="group-hover:tracking-[0.4em] transition-all">OUR STORES</span> <MapPin className="w-3 h-3 text-gold group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="w-full xl:flex-1 h-8 md:h-10 overflow-hidden relative flex items-center">
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
              <div className="flex gap-12 pr-12 items-center">
                <span className="hover:text-gold transition-colors">22K GOLD - <span className="text-gold">₹ 1,48,090 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="hover:text-gold transition-colors">18K GOLD - <span className="text-gold">₹ 1,24,880 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="hover:text-gold transition-colors">SILVER - <span className="text-gold">₹ 2,590 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-12 pr-12 items-center">
                <span className="hover:text-gold transition-colors">22K GOLD - <span className="text-gold">₹ 1,48,090 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="hover:text-gold transition-colors">18K GOLD - <span className="text-gold">₹ 1,24,880 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="hover:text-gold transition-colors">SILVER - <span className="text-gold">₹ 2,590 (10g)</span></span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-8 z-10 bg-maroon-dominant pl-10 h-10 px-4 md:px-8 xl:px-10 2xl:px-12">
            <button onClick={() => onNavigate('store-locator')} className="hover:text-gold flex items-center gap-2 transition-all group">
              <span className="group-hover:tracking-[0.4em] transition-all">OUR STORES</span> <MapPin className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`relative z-20 transition-all duration-1000 backdrop-blur-2xl border-b-2 border-gold/5 ${scrolled ? 'py-1.5 bg-luxury-dark-primary/95 text-white' : 'py-2 bg-luxury-dark-primary text-white'}`}>
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 2xl:px-12 grid grid-cols-12 items-center">

            {/* Left Actions */}
            <div className="col-span-3 xl:col-span-4 flex items-center gap-6">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="xl:hidden p-2 -ml-2 text-white hover:text-gold transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden xl:flex items-center gap-8">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white hover:text-gold transition-all group"
                >
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> SEARCH
                </button>
              </div>
            </div>

            {/* Centered Logo */}
            <div className="col-span-6 xl:col-span-4 flex justify-center">
              <div onClick={() => onNavigate('home')} className="flex flex-col items-center group cursor-pointer relative py-1">
                <img
                  src={logo}
                  alt="Aura Logo"
                  className={`transition-all duration-700 ${scrolled ? 'h-10 sm:h-10 xl:h-10' : 'h-12 sm:h-12 xl:h-16'} group-hover:scale-110`}
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="col-span-3 xl:col-span-4 flex items-center justify-end">
              {!isMinimal && (
                <div className="flex items-center gap-2 md:gap-4">
                  <button onClick={() => onNavigate('wishlist')} className="relative group p-2">
                    <Heart className="w-5 h-5 text-white group-hover:text-gold transition-all group-hover:scale-110" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-maroon-dominant text-[10px] text-white min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-black shadow-lg border border-gold/40 animate-in zoom-in">{wishlistCount}</span>
                    )}
                  </button>
                  <button onClick={() => onNavigate('cart')} className="relative group p-2">
                    <ShoppingBag className="w-5 h-5 text-white group-hover:text-gold transition-all group-hover:scale-110" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-gold text-[10px] text-maroon-dominant min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center font-black shadow-[0_0_15px_rgba(212,175,55,0.5)] border border-maroon-dominant/20 animate-in zoom-in">{cartCount}</span>
                    )}
                  </button>
                </div>
              )}

              {isLoggedIn ? (
                <div
                  className="hidden xl:block relative group/account"
                  onMouseEnter={() => setIsAccountOpen(true)}
                  onMouseLeave={() => setIsAccountOpen(false)}
                >
                  <div
                    onClick={() => { onNavigate('profile'); setIsAccountOpen(false); }}
                    className="flex items-center gap-3 pl-4 md:pl-6 border-l border-maroon-dominant/10 dark:border-white/10 cursor-pointer py-2 ml-2 md:ml-6"
                  >
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-[7px] uppercase tracking-[0.3em] text-gold font-black mb-0.5 opacity-70">The Aura Circle</span>
                      <span className="text-[12px] uppercase tracking-[0.1em] text-white font-black group-hover/account:text-gold transition-colors whitespace-nowrap">{userName || 'Member'}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold/20 rounded-full blur-md opacity-0 group-hover/account:opacity-100 transition-opacity duration-500"></div>
                      <button className="relative w-10 h-10 flex items-center justify-center bg-white dark:bg-luxury-dark-card border border-gold/20 rounded-full shadow-lg group-hover/account:border-gold/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-maroon-dominant/5"></div>
                        <User className="w-5 h-5 text-white group-hover/account:text-gold transition-all" />
                      </button>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-luxury-dark-primary shadow-sm"></div>
                    </div>
                  </div>

                  {/* Account Dropdown */}
                  <div className={`absolute right-0 top-full pt-2 w-64 transition-all duration-500 ease-out z-[70] ${isAccountOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <div className="bg-white dark:bg-luxury-dark-card shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-maroon-dominant/5 dark:border-white/5 p-2 rounded-2xl overflow-hidden backdrop-blur-xl">
                      <div className="p-4 border-b border-maroon-dominant/5 dark:border-white/5 mb-2">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-black block mb-1">Authenticated Member</span>
                        <span className="text-sm font-serif italic text-maroon-dominant dark:text-white block truncate">{userName}</span>
                      </div>
                      <button onClick={() => { setIsAccountOpen(false); onNavigate('profile'); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-gold hover:bg-gold/5 rounded-xl transition-all group/item">
                        <User className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                        My Profile
                      </button>
                      <button onClick={() => { setIsAccountOpen(false); onNavigate('orders'); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-gold hover:bg-gold/5 rounded-xl transition-all group/item">
                        <ShoppingBag className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                        My Orders
                      </button>
                      <button onClick={() => { setIsAccountOpen(false); onNavigate('wishlist'); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-gold hover:bg-gold/5 rounded-xl transition-all group/item">
                        <Heart className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                        My Wishlist
                      </button>
                      <button onClick={() => { setIsAccountOpen(false); onNavigate('cart'); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-gold hover:bg-gold/5 rounded-xl transition-all group/item">
                        <ShoppingBag className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                        My Cart
                      </button>
                      <div className="h-px bg-maroon-dominant/5 dark:bg-white/5 my-2 mx-4"></div>
                      <button onClick={() => { setIsAccountOpen(false); onLogout?.(); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-red-500/70 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all group/item">
                        <LogOut className="w-4 h-4 group-hover/item:-translate-x-1 transition-transform" />
                        Log Out Session
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${isMinimal ? 'flex' : 'hidden xl:flex'} items-center gap-3 md:gap-6 ml-2 md:ml-6 pl-4 md:pl-6 border-l border-maroon-dominant/10 dark:border-white/10`}>
                  <button onClick={() => onNavigate('login')} className="text-[10px] font-black tracking-[0.2em] text-white hover:text-gold transition-colors uppercase">
                    Log In
                  </button>
                  <button onClick={() => onNavigate('signup')} className="text-[10px] font-black tracking-[0.2em] px-4 py-2 border border-white text-white hover:bg-white hover:text-maroon-dominant transition-all uppercase rounded-full">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Category Menu */}
        <nav className={`relative z-10 ${isMinimal ? 'hidden ' : 'hidden xl:flex '}justify-center transition-all duration-700 ${scrolled ? 'bg-luxury-dark-primary/95 backdrop-blur-xl border-b border-gold/10' : 'bg-luxury-dark-primary border-b border-gold/10'}`}>
          <div className="flex items-center px-4">
            {navCategories.map((cat) => (
              <div
                key={cat.name}
                className="group relative px-6 py-3 cursor-pointer"
                onMouseEnter={() => setActiveMega(cat.name)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <div className="flex items-center gap-2 group-hover:text-gold transition-all duration-500">
                  <span className="text-[10px] font-black text-white/70 group-hover:text-gold uppercase tracking-[0.25em] whitespace-nowrap transition-all">
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
                        <img src={cat.featured} className="w-full h-full object-cover group-hover/featured:scale-110 transition-all duration-[3s]" alt={cat.name} loading="lazy" />
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
        </nav >
      </header >

      {/* Modern Search Overlay */}
      {
        isSearchOpen && (
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
        )
      }

      {/* Mobile Sidebar */}
      {
        isMenuOpen && (
          <div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm xl:hidden animate-in fade-in"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-luxury-bg-primary dark:bg-luxury-dark-primary shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-maroon-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-maroon-dominant dark:bg-luxury-dark-secondary p-8 border-b border-white/10 flex justify-between items-center transition-colors">
                <div className="flex flex-col">
                  <img src={logo} alt="Aura Logo" className="h-10" loading="lazy" />
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
                <div className="mt-16 space-y-4">
                  {isLoggedIn ? (
                    <div className="space-y-4">
                      <div className="w-full p-5 bg-maroon-dominant/5 dark:bg-white/5 rounded-3xl border border-gold/10 flex items-center gap-4">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 shadow-inner">
                          <User className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-gold tracking-[0.3em] mb-0.5">The Aura Circle</span>
                          <span className="text-base font-black text-maroon-dominant dark:text-white leading-tight">{userName || 'Member'}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => { setIsMenuOpen(false); onNavigate('profile'); }}
                          className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-luxury-dark-card border border-maroon-dominant/5 dark:border-white/5 rounded-2xl shadow-sm hover:border-gold/30 transition-all"
                        >
                          <User className="w-4 h-4 text-maroon-dominant dark:text-white" />
                          <span className="text-[7px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white">Profile</span>
                        </button>

                        <button
                          onClick={() => { setIsMenuOpen(false); onNavigate('orders'); }}
                          className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-luxury-dark-card border border-maroon-dominant/5 dark:border-white/5 rounded-2xl shadow-sm hover:border-gold/30 transition-all"
                        >
                          <ShoppingBag className="w-4 h-4 text-maroon-dominant dark:text-white" />
                          <span className="text-[7px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white">Orders</span>
                        </button>

                        <button
                          onClick={() => { setIsMenuOpen(false); onNavigate('wishlist'); }}
                          className="flex flex-col items-center justify-center gap-2 p-3 bg-white dark:bg-luxury-dark-card border border-maroon-dominant/5 dark:border-white/5 rounded-2xl shadow-sm hover:border-gold/30 transition-all"
                        >
                          <Heart className="w-4 h-4 text-maroon-dominant dark:text-white" />
                          <span className="text-[7px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white">Wishlist</span>
                        </button>
                      </div>

                      <button
                        onClick={() => { setIsMenuOpen(false); onLogout?.(); }}
                        className="w-full flex items-center justify-center gap-3 py-4 bg-red-500/5 border border-red-500/10 rounded-2xl shadow-sm hover:bg-red-500/10 transition-all text-red-500"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Log Out Session</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setIsMenuOpen(false); onNavigate('login'); }}
                      className="w-full border border-maroon-dominant/30 dark:border-white/30 text-maroon-dominant dark:text-white py-4 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-maroon-dominant hover:text-white dark:hover:bg-white dark:hover:text-maroon-dominant transition-all"
                    >
                      Sign In / Create Account
                    </button>
                  )}
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
        )
      }
    </>
  );
};

export default Header;