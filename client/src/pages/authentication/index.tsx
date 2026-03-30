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
        <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] bg-luxury-bg-secondary dark:bg-luxury-dark-secondary flex flex-col md:block">
            {/* Left Side: Animated Marquee (Relative on mobile, Fixed on Tablet/Desktop) */}
            <div className="relative md:fixed md:top-[80px] left-0 w-full md:w-1/2 h-[35vh] sm:h-[40vh] md:h-[calc(100vh-80px)] overflow-hidden bg-luxury-bg-secondary dark:bg-luxury-dark-secondary border-b md:border-b-0 md:border-r border-maroon-dominant/5 dark:border-white/5 z-10">
                {/* Tablet/Desktop: Vertical Marquee Columns */}
                <div className="hidden md:grid grid-cols-2 gap-4 p-4 h-full">
                    {/* Column 1: Up to Down */}
                    <div className="flex flex-col gap-4 v-marquee-down h-fit shrink-0">
                        {col1.map((img, idx) => (
                            <div key={`d1-${idx}`} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    {/* Column 2: Down to Up */}
                    <div className="flex flex-col gap-4 v-marquee-up h-fit shrink-0">
                        {col2.map((img, idx) => (
                            <div key={`d2-${idx}`} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Horizontal Marquee Rows */}
                <div className="flex md:hidden flex-col gap-3 py-4 h-full justify-center">
                    {/* Row 1: Left to Right */}
                    <div className="flex flex-row gap-3 h-marquee-right w-fit shrink-0">
                        {col1.map((img, idx) => (
                            <div key={`m1-${idx}`} className="relative h-[14vh] sm:h-[16vh] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg shrink-0">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    {/* Row 2: Right to Left */}
                    <div className="flex flex-row gap-3 h-marquee-left w-fit shrink-0">
                        {col2.map((img, idx) => (
                            <div key={`m2-${idx}`} className="relative h-[14vh] sm:h-[16vh] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg shrink-0">
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

            {/* Right Side: Form Container (Normal flow on mobile, Offset on desktop/tablet) */}
            <div className="w-full md:ml-[50%] md:w-[50%] flex items-center justify-center px-8 py-8 sm:px-12 sm:py-10 md:p-12 relative md:min-h-[calc(100vh-80px)]">
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
