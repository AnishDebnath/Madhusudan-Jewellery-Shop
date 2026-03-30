import React from 'react';
import { STATUS_STEPS } from './data';

interface OrderTrackerProps {
    trackStep: number;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ trackStep }) => (
    <div className="p-6 md:p-8 bg-luxury-bg-primary/30 dark:bg-black/20">
        <div className="relative flex justify-between">
            {/* Background Line */}
            <div className="absolute top-5 left-8 right-8 h-1 bg-maroon-dominant/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gold transition-all duration-1000" style={{ width: `${(trackStep / 4) * 100}%` }}></div>
            </div>

            {/* Steps */}
            {STATUS_STEPS.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 shadow-lg ${idx <= trackStep ? 'bg-gold border-gold text-maroon-dominant' : 'bg-white dark:bg-luxury-dark-card border-maroon-dominant/10 dark:border-white/10 text-maroon-dominant/20'}`}>
                        <step.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${idx <= trackStep ? 'text-maroon-dominant dark:text-white' : 'text-maroon-dominant/30 dark:text-white/30'}`}>{step.label}</span>
                </div>
            ))}
        </div>
    </div>
);

export default OrderTracker;
