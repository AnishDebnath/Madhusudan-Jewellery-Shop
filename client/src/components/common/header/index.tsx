import React, { useState, useEffect } from 'react';
import { PageView } from '../../../types';
import LiveRateMarquee from './live-rate-marquee';
import Navbar from './navbar';
import NavCategory from './nav-category';
import SearchOverlay from './search-overlay';
import MobileSidebar from './mobile-sidebar';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onNavigate: (view: PageView, data?: any) => void;
  isLoggedIn?: boolean;
  userName?: string;
  isMinimal?: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  wishlistCount, 
  onNavigate, 
  isLoggedIn = false, 
  userName, 
  isMinimal = false, 
  onLogout 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolledState, setScrolledState] = useState(false);
  const scrolled = isMinimal ? false : scrolledState;

  const currentDate = `${String(new Date().getDate()).padStart(2, '0')}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolledState(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMinimal]);

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
      <header className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? '-translate-y-16 md:-translate-y-20 xl:-translate-y-10' : 'translate-y-0'}`}>
        {!isMinimal && (
          <LiveRateMarquee currentDate={currentDate} onNavigate={onNavigate} />
        )}
        
        <Navbar
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onNavigate={onNavigate}
          isLoggedIn={isLoggedIn}
          userName={userName}
          isMinimal={isMinimal}
          onLogout={onLogout}
          scrolled={scrolled}
          onSearchOpen={() => setIsSearchOpen(true)}
          onMenuOpen={() => setIsMenuOpen(true)}
        />

        <NavCategory
          activeMega={activeMega}
          setActiveMega={setActiveMega}
          onNavigate={onNavigate}
          scrolled={scrolled}
          isMinimal={isMinimal}
          onItemClick={handleItemClick}
        />
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <MobileSidebar
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
        onNavigate={onNavigate}
        isLoggedIn={isLoggedIn}
        userName={userName}
        isMinimal={isMinimal}
        onLogout={onLogout}
        onItemClick={handleItemClick}
        currentDate={currentDate}
      />
    </>
  );
};

export default Header;
