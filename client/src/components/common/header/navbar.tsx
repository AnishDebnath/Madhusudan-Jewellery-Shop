import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, User, LogOut } from 'lucide-react';
import { PageView } from '../../../types';
import logo from '../../../assets/logo.png';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onNavigate: (view: PageView, data?: any) => void;
  isLoggedIn?: boolean;
  userName?: string;
  isMinimal?: boolean;
  onLogout?: () => void;
  scrolled: boolean;
  onSearchOpen: () => void;
  onMenuOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onNavigate,
  isLoggedIn,
  userName,
  isMinimal,
  onLogout,
  scrolled,
  onSearchOpen,
  onMenuOpen
}) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className={`relative z-20 transition-all duration-1000 backdrop-blur-2xl border-b-2 border-gold/5 ${scrolled ? 'py-1.5 bg-luxury-dark-primary/95 text-white' : 'py-2 bg-luxury-dark-primary text-white'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 2xl:px-12 grid grid-cols-12 items-center">

        {/* Left Actions */}
        <div className="col-span-3 xl:col-span-4 flex items-center gap-6">
          <button
            onClick={onMenuOpen}
            className="xl:hidden p-2 -ml-2 text-white hover:text-gold transition-all"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden xl:flex items-center gap-8">
            <button
              onClick={onSearchOpen}
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
  );
};

export default Navbar;
