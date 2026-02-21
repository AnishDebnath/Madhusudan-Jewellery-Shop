import React, { useState } from 'react';
import { Mail, Lock, UserPlus, User } from 'lucide-react';
import { PageView } from '../types';
import signupModel from '../assets/models/models (16).jpg';

interface SignUpPageProps {
    onNavigate: (view: PageView) => void;
    onSignUp: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate, onSignUp }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUp();
    };

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative">

            {/* Image Side - Fixed on Desktop */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 md:fixed md:left-0 md:top-[110px] lg:top-[140px] md:bottom-0 overflow-hidden">
                <img
                    src={signupModel}
                    alt="Aura Model"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 gold-glow">Join The Inner Circle</span>
                    <h3 className="text-white font-serif text-4xl lg:text-5xl leading-tight mb-4">Discover Your <br />Next Heirloom</h3>
                    <p className="text-white/70 text-sm font-light italic max-w-md">Create an account to track your orders, curate your wishlist, and unlock exclusive previews.</p>
                </div>
            </div>

            {/* Form Side - Scrollable */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center min-h-[calc(100vh-110px)] lg:min-h-[calc(100vh-140px)] p-10 md:p-14 lg:p-24 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10">
                <div className="max-w-md mx-auto w-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon-dominant via-gold to-maroon-dominant z-10 md:hidden"></div>

                    <div className="flex flex-col items-center mb-10">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 border border-gold/20">
                            <UserPlus className="w-8 h-8 text-gold" />
                        </div>
                        <h2 className="text-3xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider text-center">Join Aura</h2>
                        <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted italic text-center mt-3 text-sm">Create an account to track orders and save to your wishlist.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-3 group">
                            <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 pl-12 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full"
                                    required
                                />
                                <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-luxury-text-light/40 dark:text-white/30 group-focus-within:text-gold transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-3 group">
                            <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 pl-12 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full"
                                    required
                                />
                                <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-luxury-text-light/40 dark:text-white/30 group-focus-within:text-gold transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-3 group">
                            <label className="text-[9px] uppercase tracking-widest text-luxury-text-light/50 dark:text-luxury-text-darkMuted font-black ml-1 group-focus-within:text-gold transition-colors">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-luxury-bg-secondary dark:bg-black/20 border border-luxury-bg-card dark:border-white/10 p-4 pl-12 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold transition-colors placeholder:text-luxury-text-light/20 dark:placeholder:text-white/10 rounded-full"
                                    required
                                />
                                <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-luxury-text-light/40 dark:text-white/30 group-focus-within:text-gold transition-colors" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-maroon-dominant text-white py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all border border-maroon-border shadow-xl hover:shadow-2xl mt-8 active:scale-95 group relative overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Create Account</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-luxury-bg-card dark:border-white/10 flex flex-col items-center">
                        <p className="text-[11px] text-luxury-text-light/60 dark:text-luxury-text-darkMuted mb-2">Already have an account?</p>
                        <button
                            onClick={() => onNavigate('login')}
                            className="text-xs font-black text-gold uppercase tracking-[0.2em] hover:text-maroon-dominant dark:hover:text-white transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
