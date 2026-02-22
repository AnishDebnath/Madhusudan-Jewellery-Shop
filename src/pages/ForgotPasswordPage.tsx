import React, { useState } from 'react';
import { Mail, Lock, KeyRound, ChevronRight, AlertCircle, ShieldCheck, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';
import forgotModel from '../assets/models/models (17).jpg';

interface ForgotPasswordPageProps {
    onNavigate: (view: PageView) => void;
}

type Step = 'request' | 'verify' | 'reset' | 'success';

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
    const [step, setStep] = useState<Step>('request');
    const [identifier, setIdentifier] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showAllErrors, setShowAllErrors] = useState(false);

    const handleIdentifierChange = (val: string) => {
        // If it's pure numeric, limit to 10 digits
        if (/^\d+$/.test(val)) {
            if (val.length <= 10) setIdentifier(val);
        } else {
            setIdentifier(val);
        }
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const validateIdentifier = (val: string) => {
        if (!val.trim()) return 'Email or phone number is required';

        const isEmail = val.includes('@');
        if (isEmail) {
            return !emailRegex.test(val) ? 'Enter a valid email (e.g., name@domain.com)' : '';
        } else {
            const digitsOnly = val.replace(/\D/g, '');
            if (digitsOnly.length === 0) return 'Enter a valid email or 10-digit phone number';
            return !phoneRegex.test(digitsOnly) ? 'Enter a valid 10-digit mobile number' : '';
        }
    };

    const errors = {
        identifier: validateIdentifier(identifier),
        otp: otp.length !== 6 ? 'Enter valid 6-digit code' : '',
        password: password.length < 8 ? 'Password must be at least 8 characters' : '',
        confirmPassword: confirmPassword !== password ? 'Passwords do not match' : ''
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const getError = (field: keyof typeof errors) => {
        return (touched[field] || showAllErrors) ? errors[field] : '';
    };

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        if (!errors.identifier) {
            // Simulate API call
            setStep('verify');
            setShowAllErrors(false);
            setTouched({});
        }
    };

    const handleVerifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        if (!errors.otp) {
            setStep('reset');
            setShowAllErrors(false);
            setTouched({});
        }
    };

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        if (!errors.password && !errors.confirmPassword) {
            setStep('success');
            setShowAllErrors(false);
            setTouched({});
        }
    };

    const inputClass = (error: string) => `
        w-full bg-white/50 dark:bg-black/40 border p-4 pl-12 text-sm transition-all rounded-xl backdrop-blur-sm shadow-sm 
        ${error ? 'border-red-400 ring-1 ring-red-400/20' : 'border-luxury-bg-card dark:border-white/5 focus:border-gold focus:ring-1 focus:ring-gold/20 hover:border-gold/30'}
        text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-white/20
    `;

    const labelClass = 'text-[10px] uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-luxury-text-darkMuted font-bold ml-1 transition-colors';
    const errorTextClass = 'text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1';

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative min-h-screen">

            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 md:fixed md:left-0 md:top-[110px] lg:top-[140px] md:bottom-0 overflow-hidden">
                <img
                    src={forgotModel}
                    alt="Aura Model"
                    className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-10000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 gold-glow">Security & Trust</span>
                    <h3 className="text-white font-serif text-4xl lg:text-5xl leading-tight mb-4">
                        Protecting Your <br /> Elegance
                    </h3>
                    <p className="text-white/70 text-sm font-light italic max-w-md">
                        Your security is as precious as our collections. Follow the steps to safely regain access to your profile.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-start py-24 px-8 md:px-16 lg:px-28 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10 overflow-hidden min-h-[calc(100vh-110px)] lg:min-h-[calc(100vh-140px)]">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-maroon-dominant/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-md mx-auto w-full relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon-dominant via-gold to-maroon-dominant z-10 md:hidden"></div>

                    {step === 'request' && (
                        <>
                            <div className="flex flex-col items-center mb-12 text-center">
                                <div className="relative group mb-6">
                                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 backdrop-blur-md shadow-inner">
                                        <KeyRound className="w-10 h-10 text-gold drop-shadow-lg" />
                                    </div>
                                </div>
                                <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-2">Reset Password</h2>
                                <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted italic text-sm">Enter your details to receive a verification code</p>
                            </div>

                            <form onSubmit={handleSendOTP} className="space-y-6">
                                <div className="space-y-2 group">
                                    <label className={labelClass}>Email or Phone No.</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={identifier}
                                            onChange={(e) => handleIdentifierChange(e.target.value)}
                                            onBlur={() => handleBlur('identifier')}
                                            placeholder="Enter registered email or mobile"
                                            className={inputClass(getError('identifier'))}
                                            required
                                        />
                                        <Mail className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${getError('identifier') ? 'text-red-400' : 'text-luxury-text-light/30 dark:text-white/20 group-focus-within:text-gold'}`} />
                                    </div>
                                    {getError('identifier') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('identifier')}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 border border-maroon-border shadow-2xl active:scale-[0.98] group relative overflow-hidden bg-maroon-dominant text-white hover:bg-gold hover:text-maroon-dominant hover:shadow-gold/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Send Code
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </>
                    )}

                    {step === 'verify' && (
                        <>
                            <div className="flex flex-col items-center mb-12 text-center">
                                <div className="relative group mb-6">
                                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 backdrop-blur-md shadow-inner">
                                        <ShieldCheck className="w-10 h-10 text-gold drop-shadow-lg" />
                                    </div>
                                </div>
                                <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-2">Verify Access</h2>
                                <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted italic text-sm">A 6-digit code has been sent to your device</p>
                            </div>

                            <form onSubmit={handleVerifyCode} className="space-y-6">
                                <div className="space-y-4 group">
                                    <label className={labelClass}>Verification Code</label>
                                    <div className="flex justify-between gap-2 md:gap-3">
                                        {[...Array(6)].map((_, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                maxLength={1}
                                                value={otp[index] || ''}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '');
                                                    if (val) {
                                                        const newOtp = otp.split('');
                                                        newOtp[index] = val;
                                                        const combined = newOtp.join('').slice(0, 6);
                                                        setOtp(combined);

                                                        // Auto focus next
                                                        if (index < 5) {
                                                            const next = document.getElementById(`otp-${index + 1}`);
                                                            next?.focus();
                                                        }
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Backspace') {
                                                        if (!otp[index] && index > 0) {
                                                            const prev = document.getElementById(`otp-${index - 1}`);
                                                            prev?.focus();
                                                        } else {
                                                            const newOtp = otp.split('');
                                                            newOtp[index] = '';
                                                            setOtp(newOtp.join(''));
                                                        }
                                                    }
                                                }}
                                                onBlur={() => handleBlur('otp')}
                                                className={`
                                                    w-full aspect-square bg-white/50 dark:bg-black/40 border text-center text-xl font-bold transition-all rounded-xl backdrop-blur-sm shadow-sm
                                                    ${getError('otp') ? 'border-red-400 ring-1 ring-red-400/20' : 'border-luxury-bg-card dark:border-white/5 focus:border-gold focus:ring-1 focus:ring-gold/20 hover:border-gold/30'}
                                                    text-maroon-dominant dark:text-white
                                                `}
                                                required
                                            />
                                        ))}
                                    </div>
                                    {getError('otp') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('otp')}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 border border-maroon-border shadow-2xl active:scale-[0.98] group relative overflow-hidden bg-maroon-dominant text-white hover:bg-gold hover:text-maroon-dominant hover:shadow-gold/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Verify Code
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setStep('request')}
                                    className="w-full text-[10px] uppercase tracking-widest text-maroon-dominant/60 dark:text-luxury-text-darkMuted hover:text-gold transition-colors font-bold"
                                >
                                    Change email/phone?
                                </button>
                            </form>
                        </>
                    )}

                    {step === 'reset' && (
                        <>
                            <div className="flex flex-col items-center mb-12 text-center">
                                <div className="relative group mb-6">
                                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 backdrop-blur-md shadow-inner">
                                        <Lock className="w-10 h-10 text-gold drop-shadow-lg" />
                                    </div>
                                </div>
                                <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-2">New Password</h2>
                                <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted italic text-sm">Create a secure password for your profile</p>
                            </div>

                            <form onSubmit={handleResetPassword} className="space-y-6">
                                <div className="space-y-2 group">
                                    <label className={labelClass}>New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlur={() => handleBlur('password')}
                                            placeholder="Min. 8 characters"
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

                                <div className="space-y-2 group">
                                    <label className={labelClass}>Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            onBlur={() => handleBlur('confirmPassword')}
                                            placeholder="Retype password"
                                            className={`${inputClass(getError('confirmPassword'))} pr-12`}
                                            required
                                        />
                                        <ShieldCheck className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${getError('confirmPassword') ? 'text-red-400' : 'text-luxury-text-light/30 dark:text-white/20 group-focus-within:text-gold'}`} />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-text-light/30 dark:text-white/20 hover:text-gold transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                                        </button>
                                    </div>
                                    {getError('confirmPassword') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('confirmPassword')}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 border border-maroon-border shadow-2xl active:scale-[0.98] group relative overflow-hidden bg-maroon-dominant text-white hover:bg-gold hover:text-maroon-dominant hover:shadow-gold/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Reset Password
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </>
                    )}

                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 relative group">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-500/30 transition-all duration-500 animate-pulse"></div>
                                <CheckCircle2 className="w-12 h-12 text-green-500 relative z-10" />
                            </div>
                            <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-4">Reset Complete</h2>
                            <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic text-center mb-10 max-w-xs">
                                Your security profile has been updated successfully. You can now use your new password to sign in.
                            </p>

                            <button
                                onClick={() => onNavigate('login')}
                                className="w-full py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 border border-maroon-border shadow-2xl active:scale-[0.98] group relative overflow-hidden bg-maroon-dominant text-white hover:bg-gold hover:text-maroon-dominant hover:shadow-gold/20"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Return to Login
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    )}

                    <div className="mt-12 pt-10 border-t border-maroon-dominant/5 dark:border-white/5 flex flex-col items-center text-center">
                        <button onClick={() => onNavigate('login')} className="group flex items-center gap-3 text-xs font-black text-gold uppercase tracking-[0.2em] hover:text-maroon-dominant dark:hover:text-white transition-all">
                            Back to Login <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
