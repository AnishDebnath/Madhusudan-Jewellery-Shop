import React from 'react';
import { MapPin } from 'lucide-react';
import { PageView } from '../../../types';

interface LiveRateMarqueeProps {
  currentDate: string;
  onNavigate: (view: PageView, data?: any) => void;
  isMobile?: boolean;
}

{/* Mobile Sidebar menu */ }
const LiveRateMarquee: React.FC<LiveRateMarqueeProps> = ({ currentDate, onNavigate, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="border-b border-white/10 py-2.5 overflow-hidden bg-white/5 shrink-0">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-8 pr-8 items-center text-[8px] font-black tracking-[0.2em]">
            <span className="text-white/40">22K GOLD</span>
            <span className="text-gold gold-glow">₹ 1,48,090 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white/40">18K GOLD</span>
            <span className="text-gold gold-glow">₹ 1,24,880 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white/40">SILVER</span>
            <span className="text-gold gold-glow">₹ 2,590 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
          </div>
          <div className="flex gap-8 pr-8 items-center text-[8px] font-black tracking-[0.2em]">
            <span className="text-white/40">22K GOLD</span>
            <span className="text-gold gold-glow">₹ 1,48,090 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white/40">18K GOLD</span>
            <span className="text-gold gold-glow">₹ 1,24,880 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white/40">SILVER</span>
            <span className="text-gold gold-glow">₹ 2,590 / 10g</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
          </div>
        </div>
      </div>
    );
  }

  {/* Desktop menu */ }
  return (
    <div className="bg-maroon-dominant text-white flex flex-col xl:flex-row items-center text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] font-black border-b border-white/5 relative overflow-hidden transition-colors">
      <div className="w-full xl:w-auto flex justify-between items-center px-4 md:px-8 xl:px-10 2xl:px-12 h-8 md:h-10 z-10 bg-maroon-dominant xl:border-none border-b border-white/5 xl:pr-10">
        <span className="flex items-center gap-1.5 md:gap-2 text-gold gold-glow whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
          <span className="hidden sm:inline">TODAY'S LIVE RATES ({currentDate}):</span>
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
  );
};

export default LiveRateMarquee;
