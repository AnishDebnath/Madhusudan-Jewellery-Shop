
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
    <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black opacity-90"></div>

      <div className="w-full h-full max-w-6xl max-h-[90vh] md:aspect-video bg-gray-900 md:rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(212,175,55,0.2)] border-2 border-gold/20 flex flex-col md:flex-row">
        
        {/* Left Side: Camera Feed */}
        <div className="relative flex-1 bg-black overflow-hidden group">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className={`w-full h-full object-cover scale-x-[-1] transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Flash Effect */}
          {isCapturing && <div className="absolute inset-0 bg-white z-[310] animate-out fade-out duration-300"></div>}

          {/* AR Overlay Guide */}
          {isReady && showGuide && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Face/Neck Alignment Guide */}
                <div className="w-64 h-80 border-2 border-dashed border-gold/30 rounded-[100px] flex items-center justify-center opacity-40">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gold/10"></div>
                </div>

                {/* Simulated Jewelry Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-48 h-48 animate-float opacity-90">
                      <img 
                        src={activeProduct.image} 
                        alt="AR Jewelry" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] contrast-110" 
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
              className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all ${showGuide ? 'bg-gold text-maroon' : 'bg-white/10 text-white'}`}
              title="Toggle Alignment Guide"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button 
              onClick={handleCapture}
              className="w-16 h-16 bg-white rounded-full p-1 shadow-2xl border-4 border-gold/50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
            >
              <div className="w-full h-full rounded-full bg-maroon flex items-center justify-center text-white">
                <Camera className="w-6 h-6" />
              </div>
            </button>
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {!isReady && !error && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="font-serif italic text-gold/80">Initializing Aura Vision...</p>
             </div>
          )}
        </div>

        {/* Right Side: Product Info & Switcher (Desktop Only) */}
        <div className="hidden md:flex w-80 bg-white flex-col p-8 border-l border-gold/10">
          <div className="mb-8">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2 block">Trying On</span>
            <h3 className="text-2xl font-serif text-maroon mb-2">{activeProduct.name}</h3>
            <p className="text-maroon font-bold text-lg">₹{activeProduct.price.toLocaleString('en-IN')}</p>
          </div>

          <div className="flex-1">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Switch Style</h4>
            <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
              {similarProducts.map(p => (
                <div 
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  className={`relative aspect-square rounded-lg border-2 overflow-hidden cursor-pointer transition-all ${activeProduct.id === p.id ? 'border-gold shadow-lg scale-95' : 'border-gray-100 opacity-60 hover:opacity-100 hover:border-gold/30'}`}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  {activeProduct.id === p.id && (
                    <div className="absolute top-1 right-1 bg-gold text-white rounded-full p-1 shadow-sm">
                      <Check className="w-2 h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-maroon text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors">
              Add to Bag
            </button>
            <button onClick={onClose} className="w-full border border-gray-200 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
              Exit Experience
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[350] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 shadow-2xl transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Error State */}
        {error && (
          <div className="absolute inset-0 z-[400] bg-gray-900 flex flex-col items-center justify-center text-center p-10">
             <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                <X className="w-10 h-10 text-red-500" />
             </div>
             <h3 className="text-2xl font-serif text-white mb-4">Access Denied</h3>
             <p className="text-gray-400 max-w-sm mb-8">{error}</p>
             <button onClick={onClose} className="bg-gold text-maroon px-8 py-3 rounded-full font-bold">RETURN TO SHOP</button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ARTryOn;
