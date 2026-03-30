import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, X, ChevronUp, ArrowUpRight } from 'lucide-react';
import logo from '../../../assets/logo-favicon.png';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: 'Phone',
      icon: <Phone className="w-4 h-4" />,
      color: 'bg-[#D4AF37]',
      action: () => window.open('tel:+919830012345', '_self'),
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'bg-[#25D366]',
      action: () => window.open('https://wa.me/919830012345', '_blank'),
    },
    {
      name: 'Google Maps',
      icon: <MapPin className="w-4 h-4" />,
      color: 'bg-[#4285F4]',
      action: () => window.open('https://goo.gl/maps/example', '_blank'),
    },
  ];

  return (
    <>
      {/* Floating Concierge Button Toggle (Higher z-index to stay above the menu) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[250]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-700 shadow-xl group overflow-visible ${isOpen
            ? 'bg-black/90 backdrop-blur-md border border-white/10 hover:bg-gold hover:text-black'
            : 'bg-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]'
            }`}
          aria-label={isOpen ? "Close Concierge" : "Open Concierge"}
        >
          {/* Pulsing Aura */}
          <span className={`absolute inset-0 rounded-full bg-[#D4AF37] animate-ping transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-20'}`}></span>

          {/* Icon Switcher With Rotation */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Chat Icon (MessageCircle) */}
            <div className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center ${isOpen ? 'rotate-[-180deg] scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}>
              <MessageCircle className="w-6 h-6 text-black" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-[#D4AF37] rounded-full"></span>
            </div>

            {/* Arrow Icon (ChevronUp) */}
            <div className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center ${isOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-[180deg] scale-0 opacity-0'
              }`}>
              <ChevronUp className="w-6 h-6 text-gold group-hover:text-black" />
            </div>
          </div>
        </button>
      </div>

      {/* Concierge Backdrop Shadow Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Concierge Modal Card (Now always rendered but animated with classes) */}
      <div
        className={`fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[210] w-[90%] md:w-[320px] bg-[#0F0F0F] rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden origin-bottom-right transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen
          ? 'scale-100 opacity-100 translate-y-0'
          : 'scale-[0.1] opacity-0 translate-y-12 pointer-events-none'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-2 flex justify-between items-center bg-gradient-to-b from-white/[0.03] to-transparent">
          <h3 className="text-white text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">👋</span> Welcome to Madhusudan
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/30 hover:text-white transition-all hover:rotate-90 duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Inner Dashboard Card */}
        <div className="px-5 pb-5 mt-2">
          <div className="bg-[#161616] rounded-2xl border border-white/[0.05] p-6 flex flex-col items-center justify-center relative shadow-inner">
            {/* Status Indicator Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 rounded-full border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
              <span className="text-green-500 font-bold uppercase tracking-widest text-[9px]">Online</span>
            </div>

            {/* Logo Circle */}
            <div className="w-16 h-16 rounded-full border border-gold/40 p-1 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-transform duration-700 delay-300 group-hover:scale-110">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="object-contain" />
              </div>
            </div>

            <p className="text-white text-sm font-serif italic">Hi, how can we help?</p>
          </div>
        </div>

        {/* Action Items Links List */}
        <div className="px-5 pb-8 flex flex-col gap-2">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`w-full h-14 bg-[#161616] hover:bg-[#1C1C1C] rounded-2xl border border-white/[0.05] flex items-center justify-between px-4 transition-all duration-300 group shadow-sm active:scale-95 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
                  {option.icon}
                </div>
                <span className="text-white text-sm font-medium tracking-wide">{option.name}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Concierge;
