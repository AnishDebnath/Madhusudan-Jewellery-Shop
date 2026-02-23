import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff, ChevronRight, AlertCircle } from 'lucide-react';
import { PageView } from '../types';
import loginModel from '../assets/models/models (15).jpg';

interface LoginPageProps {
    onNavigate: (view: PageView) => void;
    onLogin: () => void;
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
            onLogin();
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

    const labelClass = 'text-[10px] uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-luxury-text-darkMuted font-bold ml-1 transition-colors';
    const errorTextClass = 'text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1';

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-120px)]">

            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 md:fixed md:left-0 md:top-[120px] md:bottom-0 overflow-hidden">
                <img
                    src={loginModel}
                    alt="Aura Model"
                    className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-10000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 gold-glow">The Aura Legacy</span>
                    <h3 className="text-white font-serif text-4xl lg:text-5xl leading-tight mb-4">
                        Crafting Timeless <br /> Elegance
                    </h3>
                    <p className="text-white/70 text-sm font-light italic max-w-md">
                        Experience the pinnacle of fine jewelry making, where every piece tells a story of heritage.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center py-12 md:py-16 px-8 md:px-16 lg:px-28 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10 overflow-hidden min-h-full">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-maroon-dominant/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-md mx-auto w-full relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon-dominant via-gold to-maroon-dominant z-10 md:hidden"></div>

                    {/* Header */}
                    <div className="flex flex-col items-center mb-6 text-center">
                        <div className="relative group mb-6">
                            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 backdrop-blur-md shadow-inner">
                                <LogIn className="w-10 h-10 text-gold drop-shadow-lg" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-2">Welcome Back</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-px bg-gold/50"></span>
                            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted italic text-sm">Sign in to continue your journey</p>
                            <span className="w-4 h-px bg-gold/50"></span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Identifier */}
                        <div className="space-y-2 group">
                            <label className={labelClass}>Email or Phone No.</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    onBlur={() => handleBlur('identifier')}
                                    placeholder="Enter email or mobile"
                                    className={inputClass(getError('identifier'))}
                                    required
                                />
                                <Mail className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${getError('identifier') ? 'text-red-400' : 'text-luxury-text-light/30 dark:text-white/20 group-focus-within:text-gold'}`} />
                            </div>
                            {getError('identifier') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('identifier')}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-2 group">
                            <label className={labelClass}>Security Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={() => handleBlur('password')}
                                    placeholder="••••••••"
                                    className={`${inputClass(getError('password'))} pr-12`}
                                    required
                                />
                                <Lock className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${getError('password') ? 'text-red-400' : 'text-luxury-text-light/30 dark:text-white/20 group-focus-within:text-gold'}`} />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-text-light/30 dark:text-white/20 hover:text-gold transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                                </button>
                            </div>
                            {getError('password') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('password')}</p>}
                        </div>

                        <div className="flex justify-center -mt-2">
                            <button
                                type="button"
                                onClick={() => onNavigate('forgot-password')}
                                className="text-[10px] uppercase tracking-widest text-gold hover:text-maroon-dominant dark:hover:text-white transition-colors font-black"
                            >
                                Forget your password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className={`w-full py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 border border-maroon-border shadow-2xl active:scale-[0.98] group relative overflow-hidden
                                    ${Object.values(errors).some(e => e) && showAllErrors ? 'bg-luxury-text-muted opacity-80 cursor-not-allowed' : 'bg-maroon-dominant text-white hover:bg-gold hover:text-maroon-dominant hover:shadow-gold/20'}`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Sign In
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </form>

                    {/* Social Auth */}
                    <div className="flex items-center gap-6 my-6 px-4 text-center">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-maroon-dominant/10 dark:to-white/10"></div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-maroon-dominant/40 dark:text-white/20 font-black whitespace-nowrap">Social Authentication</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-maroon-dominant/10 dark:to-white/10"></div>
                    </div>

                    <button type="button" className="w-full flex items-center justify-center gap-4 bg-white dark:bg-white/5 border border-luxury-bg-card dark:border-white/10 rounded-xl py-4 px-6 hover:border-gold/50 hover:shadow-xl transition-all group backdrop-blur-sm">
                        <div className="bg-white p-1.5 rounded-full shadow-sm">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-maroon-dominant dark:text-white group-hover:text-gold transition-colors">Continue with Google</span>
                    </button>

                    <div className="mt-8 pt-6 border-t border-maroon-dominant/5 dark:border-white/5 flex flex-col items-center text-center">
                        <p className="text-[11px] uppercase tracking-widest text-maroon-dominant/40 dark:text-luxury-text-darkMuted mb-4">New to our heritage?</p>
                        <button onClick={() => onNavigate('signup')} className="group flex items-center gap-3 text-xs font-black text-gold uppercase tracking-[0.2em] hover:text-maroon-dominant dark:hover:text-white transition-all">
                            Create Your Profile <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
