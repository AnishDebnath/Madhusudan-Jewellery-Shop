import React, { useState } from 'react';
import { X, ChevronDown, User, ShoppingBag, Heart, LogOut } from 'lucide-react';
import { PageView } from '../../../types';
import logo from '../../../assets/logo.png';
import { navCategories } from './data';
import LiveRateMarquee from './live-rate-marquee';

const MobileAccordionItem: React.FC<{
  cat: { name: string; items: string[]; featured: string };
  onItemClick: (item: string) => void;
  onNavigate: (view: any, data?: any) => void;
  closeMenu: () => void;
}> = ({ cat, onItemClick, onNavigate, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        className="w-full flex justify-between items-center px-5 py-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-gold shadow-[0_0_6px_rgba(212,175,55,0.8)]' : 'bg-white/20'}`}></span>
          <span className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white/70'}`}>{cat.name}</span>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-white/20'}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200 bg-luxury-dark-secondary/50 border-t border-white/5">
          <div className="pt-3 pb-1">
            {cat.items.map(item => (
              <button
                key={item}
                onClick={() => { closeMenu(); onItemClick(item); }}
                className="w-full text-left flex items-center gap-3 py-2.5 text-[9px] text-white/40 hover:text-gold transition-all duration-300 tracking-[0.2em] uppercase font-bold group/item"
              >
                <span className="w-3 h-[1px] bg-gold/20 group-hover/item:bg-gold group-hover/item:w-5 transition-all duration-300 shrink-0"></span>
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => { closeMenu(); onNavigate('category', cat.name); }}
            className="flex items-center gap-2 text-[8px] text-gold/70 hover:text-gold font-black uppercase tracking-[0.35em] transition-all hover:gap-3 mt-1 pb-1"
          >
            <span>View All {cat.name}</span>
            <span className="text-[10px]">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

interface MobileSidebarProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
  onNavigate: (view: PageView, data?: any) => void;
  isLoggedIn?: boolean;
  userName?: string;
  isMinimal?: boolean;
  onLogout?: () => void;
  onItemClick: (item: string) => void;
  currentDate: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isMenuOpen,
  onMenuClose,
  onNavigate,
  isLoggedIn,
  userName,
  isMinimal,
  onLogout,
  onItemClick,
  currentDate
}) => {
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md xl:hidden animate-in fade-in duration-300"
      onClick={onMenuClose}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-luxury-dark-primary shadow-[4px_0_40px_rgba(0,0,0,0.8)] border-r border-white/10 overflow-y-auto animate-in slide-in-from-left duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="border-b border-white/10 bg-luxury-dark-secondary px-6 py-5 flex justify-between items-center shrink-0">
          <div className="flex flex-col items-start">
            <img src={logo} alt="Madhusudan Jewellers" className="h-9 object-contain" loading="lazy" />
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[1px] w-8 bg-gold/50"></div>
              <span className="text-[7px] tracking-[0.4em] text-gold/70 uppercase font-black">Heritage Luxury Since 1952</span>
            </div>
          </div>
          <button
            onClick={onMenuClose}
            className="w-9 h-9 bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Rate Marquee */}
        {!isMinimal && (
          <LiveRateMarquee currentDate={currentDate} onNavigate={onNavigate} isMobile={true} />
        )}

        {/* Navigation Categories */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center gap-3 px-6 pt-5 pb-3">
            <div className="h-[1px] w-6 bg-gold/40"></div>
            <span className="text-[7px] uppercase tracking-[0.5em] text-gold/60 font-black">Our Collections</span>
          </div>
          <div>
            {navCategories.map(cat => (
              <MobileAccordionItem
                key={cat.name}
                cat={cat}
                onItemClick={onItemClick}
                onNavigate={onNavigate}
                closeMenu={onMenuClose}
              />
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="p-5 space-y-3 border-t border-white/10 mt-3">
            {isLoggedIn ? (
              <div className="space-y-3">
                {/* User Info */}
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-gold/15">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-white/5 rounded-full flex items-center justify-center border border-gold/20 shrink-0">
                    <User className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-[7px] uppercase font-black text-gold/70 tracking-[0.3em] block">The Aura Circle</span>
                    <span className="text-sm font-black text-white leading-tight">{userName || 'Member'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Profile', icon: User, view: 'profile' },
                    { label: 'Orders', icon: ShoppingBag, view: 'orders' },
                    { label: 'Wishlist', icon: Heart, view: 'wishlist' },
                  ].map(({ label, icon: Icon, view }) => (
                    <button
                      key={label}
                      onClick={() => { onMenuClose(); onNavigate(view as PageView); }}
                      className="flex flex-col items-center justify-center gap-1.5 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 hover:text-gold transition-all"
                    >
                      <Icon className="w-4 h-4 text-white/50" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-white/50">{label}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => { onMenuClose(); onLogout?.(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/5 border border-red-500/15 rounded-xl hover:bg-red-500/10 transition-all text-red-400/70 hover:text-red-400"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Log Out</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => { onMenuClose(); onNavigate('login'); }}
                  className="w-full py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-gold/50 hover:bg-white/5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase transition-all"
                >
                  Log In
                </button>
                <button
                  onClick={() => { onMenuClose(); onNavigate('signup'); }}
                  className="w-full py-3.5 bg-gold text-maroon-dominant rounded-full text-[9px] font-black tracking-[0.25em] uppercase shadow-[0_8px_25px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)] hover:bg-gold/90 transition-all"
                >
                  Sign Up
                </button>
              </div>
            )}

            <p className="text-center text-[7px] uppercase tracking-[0.3em] text-white/15 font-black pt-1">
              Crafting Perfection Since 1952
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
