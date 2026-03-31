import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Calendar, ShieldCheck, ChevronDown, ChevronRight, AlertCircle, Eye, EyeOff, UserPlus } from 'lucide-react';
import { PageView } from '../../types';
import AuthLayout from './index';

interface SignupProps {
    onNavigate: (view: PageView) => void;
    onSignUp: (fullName: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate, onSignUp }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dobDay, setDobDay] = useState('');
    const [dobMonth, setDobMonth] = useState('');
    const [dobYear, setDobYear] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showAllErrors, setShowAllErrors] = useState(false);

    // Dropdown visibility state
    const [openDropdown, setOpenDropdown] = useState<'day' | 'month' | 'year' | null>(null);

    const internalMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    const errors = {
        fullName: fullName.trim() === '' ? 'Full name required' : '',
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Valid email required' : '',
        phone: !/^\d{10}$/.test(phone) ? '10-digit phone required' : '',
        dob: (!dobDay || !dobMonth || !dobYear) ? 'Full birth date required' : '',
        password: password.length < 8 ? 'Min. 8 characters' : '',
        confirmPassword: confirmPassword !== password ? 'Passwords must match' : '',
        terms: !agreeTerms ? 'Terms must be accepted' : ''
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const handlePhoneInput = (val: string) => {
        setPhone(val.replace(/\D/g, ''));
    };

    const handleNameInput = (val: string) => {
        setFullName(val.replace(/[0-9]/g, ''));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAllErrors(true);
        const hasErrors = Object.values(errors).some(err => err !== '');
        if (!hasErrors) {
            onSignUp(fullName);
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

    const selectClass = (error: string) => `
        w-full bg-white dark:bg-black/40 border p-3.5 text-xs transition-all appearance-none
        ${error ? 'border-red-400 ring-1 ring-red-400/20' : 'border-maroon-dominant/10 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold/30 hover:border-gold/50'}
        text-maroon-dominant dark:text-white outline-none cursor-pointer
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
                            <UserPlus className="w-8 h-8 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white tracking-widest mb-3 leading-tight uppercase relative inline-block">
                        Create Profile
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/40 rounded-full"></span>
                    </h2>
                    <p className="text-luxury-text-muted dark:text-luxury-text-darkMuted text-[10px] sm:text-xs md:text-sm font-light tracking-[0.15em] mt-2 uppercase">
                        Join our legacy of exquisite craftsmanship
                    </p>
                </div>

                {/* View Toggle Switch */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/50 dark:bg-black/30 backdrop-blur-md p-1.5 rounded-full flex relative w-full max-w-[260px] shadow-sm border border-maroon-dominant/10 dark:border-white/10">
                        {/* Indicator - Sign Up (Right) */}
                        <div className="absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-maroon-dominant dark:bg-gold rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 ease-out pointer-events-none" />
                        
                        <button 
                            type="button"
                            onClick={() => onNavigate('login')}
                            className="flex-1 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-maroon-dominant dark:hover:text-white relative z-10 transition-all duration-500 cursor-pointer"
                        >
                            Log In
                        </button>
                        <button 
                            type="button"
                            className="flex-1 py-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-white dark:text-maroon-dominant relative z-10 transition-all duration-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="group relative">
                        <label className={labelClass}>Full Name</label>
                        <div className="relative text-left">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => handleNameInput(e.target.value)}
                                onBlur={() => handleBlur('fullName')}
                                placeholder="Alexander Windsor"
                                className={`${inputClass(getError('fullName'))} rounded-2xl relative z-10`}
                                required
                            />
                            <User className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('fullName') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                        </div>
                        {getError('fullName') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('fullName')}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="group relative">
                        <label className={labelClass}>Email Address</label>
                        <div className="relative text-left">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleBlur('email')}
                                placeholder="yourname@domain.com"
                                className={`${inputClass(getError('email'))} rounded-2xl relative z-10`}
                                required
                            />
                            <Mail className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('email') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                        </div>
                        {getError('email') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('email')}</p>}
                    </div>

                    {/* Contact No. */}
                    <div className="group relative">
                        <label className={labelClass}>Contact No.</label>
                        <div className="relative text-left">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => handlePhoneInput(e.target.value)}
                                onBlur={() => handleBlur('phone')}
                                placeholder="10-digit mobile number"
                                className={`${inputClass(getError('phone'))} rounded-2xl relative z-10`}
                                required
                                maxLength={10}
                            />
                            <Phone className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('phone') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                        </div>
                        {getError('phone') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('phone')}</p>}
                    </div>

                    {/* Date of Birth: Premium Custom Dropdowns */}
                    <div className={"group relative z-50"}>
                        <label className={labelClass}>Date of Birth</label>
                        <div className="relative text-left">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-focus-within:opacity-100 rounded-2xl blur-lg transition-opacity duration-500"></div>
                            <div className="flex gap-2 pl-12 relative z-10">
                                {/* Day Dropdown */}
                                <div className="relative flex-1">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === 'day' ? null : 'day')}
                                        onBlur={() => setTimeout(() => setOpenDropdown(prev => prev === 'day' ? null : prev), 200)}
                                        className={`${selectClass(getError('dob'))} rounded-xl flex items-center justify-between px-4`}
                                    >
                                        <span className={dobDay ? 'text-maroon-dominant dark:text-white' : 'text-luxury-text-light/40 dark:text-white/30'}>
                                            {dobDay || 'Day'}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-gold ${openDropdown === 'day' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'day' && (
                                        <div className="absolute top-full mt-2 left-0 w-full max-h-48 overflow-y-auto bg-white dark:bg-black border border-maroon-dominant/10 dark:border-white/10 rounded-xl shadow-xl py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-300 custom-scrollbar">
                                            {days.map(d => (
                                                <button
                                                    key={d}
                                                    type="button"
                                                    onClick={() => { setDobDay(d.toString()); setOpenDropdown(null); }}
                                                    className={`w-full text-left px-5 py-2.5 text-xs transition-colors hover:bg-gold/10 hover:text-gold ${dobDay === d.toString() ? 'bg-gold/20 text-gold font-bold' : 'text-maroon-dominant/70 dark:text-white/60'}`}
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Month Dropdown */}
                                <div className="relative flex-[2]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === 'month' ? null : 'month')}
                                        onBlur={() => setTimeout(() => setOpenDropdown(prev => prev === 'month' ? null : prev), 200)}
                                        className={`${selectClass(getError('dob'))} rounded-xl flex items-center justify-between px-4`}
                                    >
                                        <span className={dobMonth ? 'text-maroon-dominant dark:text-white' : 'text-luxury-text-light/40 dark:text-white/30'}>
                                            {dobMonth ? internalMonths[parseInt(dobMonth) - 1] : 'Month'}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-gold ${openDropdown === 'month' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'month' && (
                                        <div className="absolute top-full mt-2 left-0 w-full max-h-48 overflow-y-auto bg-white dark:bg-black border border-maroon-dominant/10 dark:border-white/10 rounded-xl shadow-xl py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-300 custom-scrollbar">
                                            {internalMonths.map((m, idx) => (
                                                <button
                                                    key={m}
                                                    type="button"
                                                    onClick={() => { setDobMonth((idx + 1).toString()); setOpenDropdown(null); }}
                                                    className={`w-full text-left px-5 py-2.5 text-xs transition-colors hover:bg-gold/10 hover:text-gold ${dobMonth === (idx + 1).toString() ? 'bg-gold/20 text-gold font-bold' : 'text-maroon-dominant/70 dark:text-white/60'}`}
                                                >
                                                    {m}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Year Dropdown */}
                                <div className="relative flex-[1.5]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === 'year' ? null : 'year')}
                                        onBlur={() => setTimeout(() => setOpenDropdown(prev => prev === 'year' ? null : prev), 200)}
                                        className={`${selectClass(getError('dob'))} rounded-xl flex items-center justify-between px-4`}
                                    >
                                        <span className={dobYear ? 'text-maroon-dominant dark:text-white' : 'text-luxury-text-light/40 dark:text-white/30'}>
                                            {dobYear || 'Year'}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-gold ${openDropdown === 'year' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'year' && (
                                        <div className="absolute top-full mt-2 left-0 w-full max-h-48 overflow-y-auto bg-white dark:bg-black border border-maroon-dominant/10 dark:border-white/10 rounded-xl shadow-xl py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-300 custom-scrollbar">
                                            {years.map(y => (
                                                <button
                                                    key={y}
                                                    type="button"
                                                    onClick={() => { setDobYear(y.toString()); setOpenDropdown(null); }}
                                                    className={`w-full text-left px-5 py-2.5 text-xs transition-colors hover:bg-gold/10 hover:text-gold ${dobYear === y.toString() ? 'bg-gold/20 text-gold font-bold' : 'text-maroon-dominant/70 dark:text-white/60'}`}
                                                >
                                                    {y}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <Calendar className={`w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('dob') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
                        </div>
                        {getError('dob') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('dob')}</p>}
                    </div>

                    {/* Security Credentials */}
                    <div className="space-y-6 pt-8 border-t border-maroon-dominant/5 dark:border-white/5 mt-8">
                        <div className="group relative">
                            <label className={labelClass}>Security Password</label>
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
                                <Lock className={`w-[19px] h-[19px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('password') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
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
                            <label className={labelClass}>Verify Password</label>
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
                                <ShieldCheck className={`w-[19px] h-[19px] absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${getError('confirmPassword') ? 'text-red-400' : 'text-gold group-focus-within:scale-110'}`} />
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
                    </div>

                    {/* Terms checkbox: Premium Styled */}
                    <div className="space-y-4 pt-4 px-1">
                        <div className="space-y-2">
                            <label className="flex items-center gap-4 cursor-pointer group/check">
                                <div className="relative flex items-center justify-center flex-shrink-0">
                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) => {
                                            setAgreeTerms(e.target.checked);
                                            handleBlur('terms');
                                        }}
                                        className="sr-only"
                                        required
                                    />
                                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-500 border-2
                                        ${agreeTerms ? 'bg-maroon-dominant border-maroon-dominant shadow-[0_5px_15px_rgba(91,15,27,0.3)]' :
                                            getError('terms') ? 'border-red-400 bg-red-400/5' : 'bg-transparent border-maroon-dominant/10 dark:border-white/10 group-hover/check:border-gold group-hover/check:bg-gold/5'}`}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 text-gold transition-all duration-500 ${agreeTerms ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-[11px] text-maroon-dominant/60 dark:text-luxury-text-darkMuted leading-relaxed font-medium select-none tracking-wide text-left">
                                    I accept the <button type="button" className="text-maroon-dominant dark:text-gold font-bold underline underline-offset-4 decoration-gold transition-all">Terms of Service</button> and <button type="button" className="text-maroon-dominant dark:text-gold font-bold underline underline-offset-4 decoration-gold transition-all">Privacy Policy</button>.
                                </span>
                            </label>
                            {getError('terms') && <p className={errorTextClass}><AlertCircle className="w-3 h-3" /> {getError('terms')}</p>}
                        </div>
                    </div>

                    {/* Final Action: Shimmering Button */}
                    <div className="pt-8 text-center sm:text-left">
                        <button
                            type="submit"
                            className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-500 shadow-2xl active:scale-[0.97] group relative overflow-hidden
                                ${Object.values(errors).some(e => e) && showAllErrors ? 'bg-luxury-text-muted/40 cursor-not-allowed text-white/50' : 'bg-maroon-dominant dark:bg-gold text-white dark:text-maroon-dominant hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] hover:-translate-y-1.5'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                            <span className="relative z-10 flex items-center justify-center gap-4">
                                Create Account
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                            </span>
                        </button>
                    </div>
                </form>

                <div className="flex justify-center items-center gap-8 my-14 text-center">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-maroon-dominant/20 dark:via-white/20 to-transparent"></div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-maroon-dominant/30 dark:text-white/30 font-black px-2 whitespace-nowrap">Access with</span>
                    <div className="h-px w-full bg-gradient-to-l from-transparent via-maroon-dominant/20 dark:via-white/20 to-transparent"></div>
                </div>

                <button type="button" className="w-full flex items-center justify-center gap-5 bg-white/70 dark:bg-black/40 backdrop-blur-md border border-maroon-dominant/10 dark:border-white/10 rounded-2xl py-5 transition-all hover:bg-white dark:hover:bg-black/60 text-maroon-dominant dark:text-white text-[11px] font-black uppercase tracking-[0.25em] group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className="mt-16 text-center pt-10 border-t border-maroon-dominant/5 dark:border-white/5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 font-medium">
                        Already part of our legacy?{' '}<br />
                        <button onClick={() => onNavigate('login')} className="text-gold hover:text-gold/80 font-black ml-2 underline underline-offset-[10px] decoration-gold/20 hover:decoration-gold transition-all">
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Signup;
