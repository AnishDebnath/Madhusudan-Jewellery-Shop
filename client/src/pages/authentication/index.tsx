import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageView } from '../../types';

import mod1 from '../../assets/models/models (1).jpg';
import mod2 from '../../assets/models/models (2).jpg';
import mod3 from '../../assets/models/models (3).jpg';
import mod4 from '../../assets/models/models (4).jpg';
import mod5 from '../../assets/models/models (5).jpg';
import mod6 from '../../assets/models/models (6).jpg';
import mod7 from '../../assets/models/models (7).jpg';
import mod8 from '../../assets/models/models (8).jpg';
import mod9 from '../../assets/models/models (9).jpg';
import mod10 from '../../assets/models/models (10).jpg';

interface AuthLayoutProps {
    children: React.ReactNode;
    onBack: () => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, onBack }) => {
    const col1 = [mod1, mod2, mod3, mod4, mod5, mod1, mod2, mod3, mod4, mod5, mod1, mod2, mod3, mod4, mod5];
    const col2 = [mod6, mod7, mod8, mod9, mod10, mod6, mod7, mod8, mod9, mod10, mod6, mod7, mod8, mod9, mod10];

    return (
        <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] bg-luxury-bg-secondary dark:bg-luxury-dark-secondary">
            {/* Left Side: Animated Marquee (Fixed in screen) */}
            <div className="fixed top-[64px] md:top-[80px] left-0 w-[40%] sm:w-1/2 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] overflow-hidden bg-luxury-bg-secondary dark:bg-luxury-dark-secondary border-r border-maroon-dominant/5 dark:border-white/5 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4 h-full">
                    {/* Column 1: Up to Down */}
                    <div className="flex flex-col gap-2 sm:gap-4 v-marquee-down h-fit shrink-0">
                        {col1.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    {/* Column 2: Down to Up - Visible on sm and above */}
                    <div className="hidden sm:flex flex-col gap-4 v-marquee-up h-fit shrink-0">
                        {col2.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="absolute top-4 sm:top-6 left-4 sm:left-12 z-20">
                    <button
                        onClick={onBack}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-black/90 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-xl hover:scale-110 transition-all text-maroon-dominant dark:text-white group"
                    >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right Side: Form Container (Offset by fixed left side, scrolls with main page) */}
            <div className="ml-[40%] sm:ml-[50%] w-[60%] sm:w-[50%] flex items-start justify-center p-4 sm:p-8 lg:p-12 relative min-h-screen">
                {/* Subtle Mesh Background for depth */}
                <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-maroon-dominant/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
