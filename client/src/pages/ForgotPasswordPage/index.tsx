import React, { useState } from 'react';
import { KeyRound, ShieldCheck, Lock, CheckCircle2, ChevronRight } from 'lucide-react';
import forgotModel from '../../assets/models/models (17).jpg';
import { PageView } from '../../types';

interface ForgotPasswordPageProps {
    onNavigate: (view: PageView) => void;
}

type Step = 'request' | 'verify' | 'reset' | 'success';

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
    const [step, setStep] = useState<Step>('request');
    const [identifier, setIdentifier] = useState('');

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('verify');
    };

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-120px)]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 md:fixed md:left-0 md:top-[120px] md:bottom-0 overflow-hidden">
                <img src={forgotModel} alt="Aura Model" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20 text-white">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">Security & Trust</span>
                    <h3 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">Protecting Your Elegance</h3>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center py-12 md:py-16 px-8 md:px-16 lg:px-28 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10 overflow-hidden min-h-full">
                <div className="max-w-md mx-auto w-full relative">
                    {step === 'request' && (
                        <>
                            <div className="flex flex-col items-center mb-6 text-center">
                                <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 mb-6 shadow-inner">
                                    <KeyRound className="w-10 h-10 text-gold" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-1">Reset Password</h2>
                            </div>
                            <form onSubmit={handleSendOTP} className="space-y-6">
                                <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Enter email or mobile" className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" required />
                                <button type="submit" className="w-full py-5 bg-maroon-dominant text-white rounded-xl uppercase tracking-[0.3em] font-black">Send Code</button>
                            </form>
                        </>
                    )}
                    {/* Add other steps similarly if needed, or keeping it basic for now */}
                    <div className="mt-8 text-center">
                        <button onClick={() => onNavigate('login')} className="text-xs font-black text-gold uppercase tracking-[0.2em]">Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
