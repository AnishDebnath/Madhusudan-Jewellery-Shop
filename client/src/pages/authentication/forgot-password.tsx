import React, { useState } from 'react';
import { Mail, Lock, KeyRound, ShieldCheck, CheckCircle2, ChevronRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { PageView } from '../../types';
import AuthLayout from './index';

interface ForgotPasswordProps {
    onNavigate: (view: PageView) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onNavigate }) => {
    const [step, setStep] = useState<'request' | 'verify' | 'reset' | 'success'>('request');
    const [identifier, setIdentifier] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showAllErrors, setShowAllErrors] = useState(false);

    const errors = {
        identifier: identifier.trim() === '' ? 'Email or phone required' : '',
        otp: otp.length !== 6 ? 'Enter 6-digit code' : '',
        password: password.length < 8 ? 'Min. 8 characters' : '',
        confirmPassword: confirmPassword !== password ? 'Passwords must match' : ''
    };

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        if (!errors.identifier) {
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

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const getError = (field: keyof typeof errors) => {
        return (touched[field] || showAllErrors) ? errors[field] : '';
    };

    const inputClass = (error: string) => `
        w-full bg-white dark:bg-black/40 border p-4 pl-12 text-sm transition-all rounded-xl shadow-sm
        ${error ? 'border-red-400 ring-1 ring-red-400/20' : 'border-maroon-dominant/10 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold/30 hover:border-gold/50'}
        text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/40 dark:placeholder:text-white/30 outline-none
    `;

    const labelClass = 'text-[10px] uppercase tracking-[0.2em] text-maroon-dominant/80 dark:text-luxury-text-darkMuted font-bold ml-1 transition-colors block mb-2';
    const errorTextClass = 'text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1';

    return (
        <AuthLayout onBack={() => onNavigate('login')}>
            <div className="w-full max-w-[440px] py-12 lg:py-24 relative z-10 text-center sm:text-left">
                {step === 'request' && (
                    <>
                        {/* Header: Elevated & More Premium */}
                        <div className="flex flex-col items-center mb-12 text-center">
                            <div className="relative group mb-6">
                                <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl group-hover:bg-gold/40 transition-all duration-700 animate-pulse"></div>
                                <div className="relative w-20 h-20 bg-white dark:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-gold/20 shadow-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-maroon-dominant/5 to-transparent"></div>
                                    <KeyRound className="w-8 h-8 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                </div>
                            </div>
                            <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-widest mb-3 leading-tight uppercase relative inline-block">
                                Reset Password
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/40 rounded-full"></span>
                            </h2>
                            <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-xs font-light tracking-[0.15em] mt-2 uppercase">
                                Securely recover access to your profile
                            </p>
                        </div>

                        <form onSubmit={handleSendOTP} className="space-y-8">
                            <div className="group relative">
                                <label className={labelClass}>Email or Phone No.</label>
                                <div className="relative text-left">
                                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                                    <input
                                        type="text"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                        onBlur={() => handleBlur('identifier')}
                                        placeholder="Enter registered email or mobile"
                                        className={`${inputClass(getError('identifier'))} rounded-2xl relative z-10`}
                                        required
                                    />
                                    <Mail className={`w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('identifier') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                                </div>
                                {getError('identifier') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('identifier')}</p>}
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        Send Code
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 'verify' && (
                    <>
                        {/* Header: Verification Stage */}
                        <div className="flex flex-col items-center mb-12 text-center">
                            <div className="relative group mb-6">
                                <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl group-hover:bg-gold/40 transition-all duration-700 animate-pulse"></div>
                                <div className="relative w-20 h-20 bg-white dark:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-gold/20 shadow-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-maroon-dominant/5 to-transparent"></div>
                                    <ShieldCheck className="w-8 h-8 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                </div>
                            </div>
                            <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-widest mb-3 leading-tight uppercase relative inline-block">
                                Verify Access
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/40 rounded-full"></span>
                            </h2>
                            <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-xs font-light tracking-[0.15em] mt-2 uppercase">
                                6-digit code has been sent
                            </p>
                        </div>

                        <form onSubmit={handleVerifyCode} className="space-y-8">
                            <div className="group relative">
                                <label className={labelClass}>Verification Code</label>
                                <div className="flex justify-between gap-3 relative z-10">
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
                                                w-full aspect-square bg-white dark:bg-black/40 border text-center text-xl font-bold transition-all duration-300 rounded-2xl shadow-sm outline-none isolate z-10
                                                ${getError('otp') ? 'border-red-400 ring-1 ring-red-400/20' : 'border-maroon-dominant/10 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold/30 hover:border-gold/50'}
                                                text-maroon-dominant dark:text-white
                                            `}
                                            required
                                        />
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -inset-x-4"></div>
                                {getError('otp') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('otp')}</p>}
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        Verify Code
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 'reset' && (
                    <>
                        {/* Header: New Password Stage */}
                        <div className="flex flex-col items-center mb-12 text-center">
                            <div className="relative group mb-6">
                                <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl group-hover:bg-gold/40 transition-all duration-700 animate-pulse"></div>
                                <div className="relative w-20 h-20 bg-white dark:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-gold/20 shadow-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-maroon-dominant/5 to-transparent"></div>
                                    <Lock className="w-8 h-8 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                </div>
                            </div>
                            <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-widest mb-3 leading-tight uppercase relative inline-block">
                                New Password
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/40 rounded-full"></span>
                            </h2>
                            <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-xs font-light tracking-[0.15em] mt-2 uppercase">
                                Create a highly secure password
                            </p>
                        </div>

                        <form onSubmit={handleResetPassword} className="space-y-8">
                            <div className="group relative">
                                <label className={labelClass}>New Password</label>
                                <div className="relative text-left">
                                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => handleBlur('password')}
                                        placeholder="Min. 8 characters"
                                        className={`${inputClass(getError('password'))} pr-14 rounded-2xl relative z-10`}
                                        required
                                        minLength={8}
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

                            <div className="group relative">
                                <label className={labelClass}>Confirm Password</label>
                                <div className="relative text-left">
                                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onBlur={() => handleBlur('confirmPassword')}
                                        placeholder="Retype password"
                                        className={`${inputClass(getError('confirmPassword'))} pr-14 rounded-2xl relative z-10`}
                                        required
                                    />
                                    <ShieldCheck className={`w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('confirmPassword') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-maroon-dominant/30 dark:text-white/20 hover:text-gold transition-all z-20 hover:scale-110"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                                    </button>
                                </div>
                                {getError('confirmPassword') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('confirmPassword')}</p>}
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        Reset Password
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 'success' && (
                    <div className="flex flex-col items-center justify-center py-4 animate-in fade-in zoom-in duration-700">
                        <div className="relative group mb-10">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[40px] group-hover:bg-green-500/30 transition-all duration-700 animate-pulse"></div>
                            <div className="relative w-24 h-24 bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-green-500/30 shadow-2xl overflow-hidden scale-110">
                                <CheckCircle2 className="w-12 h-12 text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif text-maroon-dominant dark:text-white tracking-[0.1em] mb-4 leading-tight uppercase text-center">
                            Reset Complete
                        </h2>
                        <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-xs font-light tracking-wide text-center mb-12 max-w-[280px] leading-relaxed">
                            Your security profile has been successfully updated.
                        </p>

                        <button
                            onClick={() => onNavigate('login')}
                            className="w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                            <span className="relative z-10 flex items-center justify-center gap-4">
                                Return to Login
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                            </span>
                        </button>
                    </div>
                )}

                {step !== 'success' && (
                    <div className="mt-16 text-center pt-10 border-t border-maroon-dominant/5 dark:border-white/5">
                        <button onClick={() => onNavigate('login')} className="group flex items-center justify-center w-full gap-4 text-[10px] font-black text-maroon-dominant/40 hover:text-gold dark:text-white/40 dark:hover:text-gold uppercase tracking-[0.4em] transition-all">
                            <span className="border-b border-transparent group-hover:border-gold/30 pb-0.5 transition-all">Back to Login</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                        </button>
                    </div>
                )}
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
