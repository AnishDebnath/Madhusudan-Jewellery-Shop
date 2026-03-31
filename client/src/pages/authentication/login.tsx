import React, { useState } from 'react';
import { Mail, Lock, ChevronRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { PageView } from '../../types';
import AuthLayout from './index';

interface LoginProps {
    onNavigate: (view: PageView) => void;
    onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate, onLogin }) => {
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
            const displayName = identifier.includes('@')
                ? identifier.split('@')[0]
                : 'Account';
            onLogin(displayName);
        }
    };

    const getError = (field: keyof typeof errors) => {
        return (touched[field] || showAllErrors) ? errors[field] : '';
    };

    const inputClass = (error: string) => `
        w-full bg-white dark:bg-black/40 border p-4 pl-12 text-sm transition-all rounded-xl shadow-sm
        ${error ? 'border-red-400 ring-1 ring-red-400/20' : 'border-maroon-dominant/10 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold/30 hover:border-gold/50'}
        text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/40 dark:placeholder:text-white/30 outline-none
    `;

    const labelClass = 'text-[10px] uppercase tracking-[0.2em] text-maroon-dominant/80 dark:text-luxury-text-darkMuted font-bold ml-1 transition-colors block mb-2 text-left';
    const errorTextClass = 'text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1';

    return (
        <AuthLayout onBack={() => onNavigate('home')}>
            <div className="w-full max-w-[440px] py-8 sm:py-12 md:py-16 relative z-10 text-center sm:text-left">
                {/* Header: Elevated & More Premium */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="relative group mb-6">
                        <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl group-hover:bg-gold/40 transition-all duration-700 animate-pulse"></div>
                        <div className="relative w-20 h-20 bg-white dark:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-gold/20 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-maroon-dominant/5 to-transparent"></div>
                            <Lock className="w-8 h-8 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white tracking-widest mb-3 leading-tight uppercase relative inline-block">
                        Welcome Back
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/40 rounded-full"></span>
                    </h2>
                    <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-[10px] sm:text-xs md:text-sm font-light tracking-[0.15em] mt-2 uppercase">
                        Log in to your premium account
                    </p>
                </div>

                {/* View Toggle Switch */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/50 dark:bg-black/30 backdrop-blur-md p-1.5 rounded-full flex relative w-full max-w-[260px] shadow-sm border border-maroon-dominant/10 dark:border-white/10">
                        {/* Indicator - Login (Left) */}
                        <div className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-maroon-dominant dark:bg-gold rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 ease-out pointer-events-none" />
                        
                        <button 
                            type="button"
                            className="flex-1 py-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-white dark:text-maroon-dominant relative z-10 transition-all duration-500"
                        >
                            Log In
                        </button>
                        <button 
                            type="button"
                            onClick={() => onNavigate('signup')}
                            className="flex-1 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white relative z-10 transition-all duration-500 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Identifier Field: Enhanced focus state */}
                    <div className="group relative">
                        <label className={labelClass}>Email or Phone No.</label>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <input
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                onBlur={() => handleBlur('identifier')}
                                placeholder="Enter your registered identifier"
                                className={`${inputClass(getError('identifier'))} rounded-2xl relative z-10`}
                                required
                            />
                            <Mail className={`w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('identifier') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                        </div>
                        {getError('identifier') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('identifier')}</p>}
                    </div>

                    {/* Password Field: Elegant interactivity */}
                    <div className="group relative">
                        <div className="flex justify-between items-center mb-2 px-1">
                            <label className={`${labelClass} mb-0`}>Password</label>
                            <button
                                type="button"
                                onClick={() => onNavigate('forgot-password')}
                                className="text-[10px] uppercase tracking-[0.25em] text-gold/60 hover:text-gold transition-colors font-black border-b border-transparent hover:border-gold/30 pb-0.5"
                            >
                                Forgot?
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => handleBlur('password')}
                                placeholder="••••••••"
                                className={`${inputClass(getError('password'))} pr-14 rounded-2xl relative z-10`}
                                required
                            />
                            <Lock className={`w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('password') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-maroon-dominant/30 dark:text-white/20 hover:text-gold transition-all z-20 hover:scale-110"
                            >
                                {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                            </button>
                        </div>
                        {getError('password') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('password')}</p>}
                    </div>

                    {/* Submit Button: Shimmering Luxury effect */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            className={`w-full py-5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden
                                ${Object.values(errors).some(e => e) && showAllErrors ? 'bg-luxury-text-muted/40 cursor-not-allowed text-white/50' : 'bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Log In
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                        </button>
                    </div>
                </form>

                <div className="flex justify-center items-center gap-6 my-12 text-center">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-maroon-dominant/20 dark:via-white/20 to-transparent"></div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-maroon-dominant/30 dark:text-white/30 font-bold px-2 whitespace-nowrap">Access with</span>
                    <div className="h-px w-full bg-gradient-to-l from-transparent via-maroon-dominant/20 dark:via-white/20 to-transparent"></div>
                </div>

                <button type="button" className="w-full flex items-center justify-center gap-4 bg-white/70 dark:bg-black/30 backdrop-blur-md border border-maroon-dominant/10 dark:border-white/10 rounded-2xl py-5 transition-all hover:bg-white dark:hover:bg-black/50 text-maroon-dominant dark:text-white text-[11px] font-black uppercase tracking-widest group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className="mt-14 text-center pt-10 border-t border-maroon-dominant/5 dark:border-white/5">
                    <p className="text-[11px] uppercase tracking-widest text-maroon-dominant/60 dark:text-white/60 font-medium">
                        New to our collections?{' '}<br />
                        <button onClick={() => onNavigate('signup')} className="text-gold hover:text-gold/80 font-black ml-2 underline underline-offset-8 transition-all hover:decoration-gold/50">
                            Create Account
                        </button>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
