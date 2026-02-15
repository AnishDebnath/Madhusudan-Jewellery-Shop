
import React, { useRef, useState, useEffect } from 'react';
import { Camera, X, RefreshCw, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ARTryOnProps {
  onClose: () => void;
  product: Product;
}

const ARTryOn: React.FC<ARTryOnProps> = ({ onClose, product: initialProduct }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeProduct, setActiveProduct] = useState<Product>(initialProduct);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);

  // Filter similar products for the quick switcher
  const similarProducts = PRODUCTS.filter(p => p.category === activeProduct.category && p.arSupport);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1920 }, height: { ideal: 1080 } }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsReady(true);
        }
      } catch (err) {
        setError("Camera permission is required for the Virtual Try-On experience. Please enable it in your browser settings.");
      }
    }
    setupCamera();
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleCapture = () => {
    setIsCapturing(true);
    setTimeout(() => setIsCapturing(false), 300); // Shutter effect
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">

      <div className="w-full h-full max-w-6xl max-h-[90vh] md:aspect-video bg-luxury-dark-card md:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 flex flex-col md:flex-row">

        {/* Left Side: Camera Feed */}
        <div className="relative flex-1 bg-black overflow-hidden group">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover scale-x-[-1] transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Flash Effect */}
          {isCapturing && <div className="absolute inset-0 bg-white z-[310] animate-out fade-out duration-500"></div>}

          {/* AR Overlay Guide */}
          {isReady && showGuide && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Face/Neck Alignment Guide */}
                <div className="w-72 h-96 border-2 border-dashed border-gold/40 rounded-[120px] flex items-center justify-center opacity-40 animate-pulse">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-1 bg-gold/20"></div>
                </div>

                {/* Simulated Jewelry Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 animate-float opacity-90 transition-all duration-500">
                    <img
                      src={activeProduct.image}
                      alt="AR Jewelry"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] contrast-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Camera Controls Overlay */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-8 z-[310]">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className={`p-4 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 ${showGuide ? 'bg-gold text-maroon-dominant shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-black/40 text-white hover:bg-white/10'}`}
              title="Toggle Alignment Guide"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={handleCapture}
              className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full p-1.5 shadow-2xl border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 group/capture"
            >
              <div className="w-full h-full rounded-full bg-white group-hover/capture:bg-gold flex items-center justify-center text-maroon-dominant transition-colors duration-300">
                <Camera className="w-8 h-8" />
              </div>
            </button>
            <button className="p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {!isReady && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black z-20">
              <div className="w-16 h-16 border-t-2 border-gold rounded-full animate-spin mb-6"></div>
              <p className="font-serif italic text-gold/80 tracking-widest text-xs uppercase">Initializing Aura Vision...</p>
            </div>
          )}
        </div>

        {/* Right Side: Product Info & Switcher (Desktop Only) */}
        <div className="hidden md:flex w-96 bg-luxury-dark-card flex-col p-10 border-l border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

          <div className="mb-10 relative z-10">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-4 block gold-glow">Virtual Try-On</span>
            <h3 className="text-3xl font-serif text-white mb-3 leading-tight">{activeProduct.name}</h3>
            <p className="text-gold font-light text-xl">₹{activeProduct.price.toLocaleString('en-IN')}</p>
          </div>

          <div className="flex-1 relative z-10">
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">Similar Styles</h4>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[400px] pr-2">
              {similarProducts.map(p => (
                <div
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group/item border ${activeProduct.id === p.id ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-white/5 hover:border-white/20'}`}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity" />
                  {activeProduct.id === p.id && (
                    <div className="absolute top-2 right-2 bg-gold text-maroon-dominant rounded-full p-1 shadow-sm">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4 relative z-10">
            <button className="w-full bg-gold text-maroon-dominant py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-lg">
              Add to Bag
            </button>
            <button onClick={onClose} className="w-full border border-white/20 py-4 rounded-full text-[10px] font-black text-white/60 uppercase tracking-[0.2em] hover:bg-white/5 hover:text-white transition-colors">
              Exit Experience
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[350] p-3 bg-black/50 hover:bg-red-500/20 backdrop-blur-md rounded-full text-white/60 hover:text-red-500 border border-white/10 hover:border-red-500/50 shadow-2xl transition-all duration-300 group/close"
        >
          <X className="w-5 h-5 group-hover/close:rotate-90 transition-transform duration-300" />
        </button>

        {/* Error State */}
        {error && (
          <div className="absolute inset-0 z-[400] bg-black/95 flex flex-col items-center justify-center text-center p-10">
            <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20 animate-pulse">
              <X className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Access Denied</h3>
            <p className="text-white/50 max-w-sm mb-10 font-light">{error}</p>
            <button onClick={onClose} className="bg-gold text-maroon-dominant px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">Return to Shop</button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ARTryOn;
