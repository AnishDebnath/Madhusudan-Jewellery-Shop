import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Calendar, Lock, ShieldCheck, ChevronRight, ChevronDown } from 'lucide-react';
import signupModel from '../../assets/models/models (16).jpg';
import { PageView } from '../../types';

interface SignUpPageProps {
    onNavigate: (view: PageView) => void;
    onSignUp: (firstName: string, lastName: string) => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate, onSignUp }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUp(firstName, lastName);
    };

    return (
        <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary flex flex-col md:flex-row w-full border-t border-luxury-bg-card dark:border-white/5 transition-colors relative min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-120px)]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 md:fixed md:left-0 md:top-[120px] md:bottom-0 overflow-hidden">
                <img src={signupModel} alt="Aura Model" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dominant/90 via-maroon-dominant/40 to-transparent flex flex-col justify-end p-12 lg:p-20 text-white">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">The Aura Circle</span>
                    <h3 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">Where Luxury Meets Legacy</h3>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center py-10 md:py-12 px-8 md:px-16 lg:px-28 bg-luxury-bg-primary dark:bg-luxury-dark-card relative z-10 overflow-hidden min-h-full">
                <div className="max-w-md mx-auto w-full relative">
                    <div className="flex flex-col items-center mb-6 text-center">
                        <div className="relative w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border border-gold/30 mb-6 shadow-inner">
                            <UserPlus className="w-10 h-10 text-gold" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-widest mb-1">Create Your Profile</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-5">
                            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" />
                        </div>
                        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" />
                        <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/50 dark:bg-black/40 border p-4 rounded-xl" />

                        <button type="submit" className="w-full py-5 bg-maroon-dominant text-white rounded-xl uppercase tracking-[0.3em] font-black group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-3">Create a Account <ChevronRight className="w-4 h-4" /></span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <button onClick={() => onNavigate('login')} className="text-xs font-black text-gold uppercase tracking-[0.2em]">Log in to Madhusudan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
