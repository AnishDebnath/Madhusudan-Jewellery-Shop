import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff, ChevronRight, AlertCircle } from 'lucide-react';
import loginModel from '../../assets/models/models (15).jpg';
import { PageView } from '../../types';

interface LoginPageProps {
    onNavigate: (view: PageView) => void;
    onLogin: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLogin }) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showAllErrors, setShowAllErrors] = useState(false);

    const errors = {
        identifier: identifier.trim() === '' ? 'Email or phone number is required' : '',
        password: password.length < 1 ? 'Password is required' : '',
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        const hasErrors = Object.values(errors).some(err => err !== '');
        if (!hasErrors) {
            const displayName = identifier.includes('@') ? identifier.split('@')[0] : 'Account';
            onLogin(displayName);
        }
    };

    const getError = (field: keyof typeof errors) => {
        return (touched[field] || showAllErrors) ? errors[field] : '';
    };

    const inputClass = (error: string) => `
        w-full bg-white/50 dark:bg-black/40 border p-4 pl-12 text-sm transition-all rounded-xl backdrop-blur-sm shadow-sm 
        ${error ? 'border-red-400 ring-1 ring-red-400/20' : 'border-luxury-bg-card dark:border-white/5 focus:border-gold focus:ring-1 focus:ring-gold/20 hover:border-gold/30'}
        text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-white/20
    `;

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-120px)]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 md:fixed md:left-0 md:top-[120px] md:bottom-0 overflow-hidden">
                <img src={loginModel} alt="Aura Model" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20 text-white">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">The Aura Legacy</span>
                    <h3 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">Crafting Timeless Elegance</h3>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center py-12 md:py-16 px-8 md:px-16 lg:px-28 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10 overflow-hidden min-h-full">
                <div className="max-w-md mx-auto w-full relative">
                    <div className="flex flex-col items-center mb-6 text-center">
                        <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 mb-6 shadow-inner">
                            <LogIn className="w-10 h-10 text-gold" />
                        </div>
                        <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-2">Welcome Back</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-maroon-dominant/60">Email or Phone No.</label>
                            <div className="relative">
                                <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} onBlur={() => handleBlur('identifier')} className={inputClass(getError('identifier'))} />
                                <Mail className="w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 text-luxury-text-light/30" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-maroon-dominant/60">Security Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => handleBlur('password')} className={inputClass(getError('password'))} />
                                <Lock className="w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 text-luxury-text-light/30" />
                            </div>
                        </div>

                        <button type="submit" className="w-full py-5 bg-maroon-dominant text-white rounded-xl uppercase tracking-[0.3em] font-black">Sign In</button>
                    </form>

                    <div className="mt-8 text-center">
                        <button onClick={() => onNavigate('signup')} className="text-xs font-black text-gold uppercase tracking-[0.2em]">Create Your Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
