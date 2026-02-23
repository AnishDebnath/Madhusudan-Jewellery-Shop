import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Shield, Edit3, Camera, Save, ChevronRight } from 'lucide-react';

interface ProfilePageProps {
    user: {
        firstName: string;
        lastName?: string;
        email?: string;
        phone?: string;
        joinedDate?: string;
    } | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || 'anish@example.com',
        phone: user?.phone || '+91 98765 43210',
        address: '123, Luxury Enclave, Kolkata, West Bengal'
    });

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save profile would go here
    };

    return (
        <div className="min-h-screen bg-luxury-bg-primary dark:bg-luxury-dark-primary pt-[104px] md:pt-[120px] pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Personal Sanctuary</span>
                        <h1 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider">My Profile</h1>
                    </div>
                    <button
                        onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        className="flex items-center justify-center gap-3 px-8 py-3 bg-maroon-dominant text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 group"
                    >
                        {isEditing ? (
                            <>
                                <Save className="w-4 h-4" /> Save Signature
                            </>
                        ) : (
                            <>
                                <Edit3 className="w-4 h-4" /> Edit Profile
                            </>
                        )}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Avatar Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-luxury-dark-card rounded-3xl p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none"></div>

                            <div className="relative flex flex-col items-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full border-2 border-gold/30 p-1 bg-gradient-to-br from-gold/20 to-transparent">
                                        <div className="w-full h-full rounded-full bg-luxury-bg-primary dark:bg-black/40 flex items-center justify-center overflow-hidden">
                                            <User className="w-16 h-16 text-gold/30" />
                                        </div>
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-maroon-dominant text-white rounded-full flex items-center justify-center border-4 border-white dark:border-luxury-dark-card hover:bg-gold transition-colors shadow-lg">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>

                                <h2 className="text-xl font-serif text-maroon-dominant dark:text-white mb-1 uppercase tracking-widest">
                                    {formData.firstName} {formData.lastName}
                                </h2>
                                <p className="text-[10px] text-gold font-black uppercase tracking-[0.2em] mb-6">Aura Member Since 2024</p>

                                <div className="w-full space-y-4">
                                    <div className="bg-maroon-dominant/5 dark:bg-white/5 rounded-2xl p-4 border border-gold/10">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[8px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-widest">Tier Loyalty</span>
                                            <span className="text-[10px] font-black text-gold">ELITE GOLD</span>
                                        </div>
                                        <div className="w-full h-1 bg-maroon-dominant/10 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-gold"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-luxury-dark-card rounded-3xl p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-2xl">
                            <h3 className="text-sm font-black text-maroon-dominant dark:text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                                <Shield className="w-5 h-5 text-gold" /> Account Credentials
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">First Name</label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        disabled={!isEditing}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-xl px-5 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        disabled={!isEditing}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-xl px-5 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            disabled={!isEditing}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-xl pl-12 pr-5 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            disabled={!isEditing}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-xl pl-12 pr-5 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-luxury-dark-card rounded-3xl p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-2xl">
                            <h3 className="text-sm font-black text-maroon-dominant dark:text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-gold" /> Primary Shipping Address
                            </h3>
                            <div className="space-y-2">
                                <textarea
                                    value={formData.address}
                                    disabled={!isEditing}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    rows={3}
                                    className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-xl px-5 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-gold/5 dark:bg-gold/5 rounded-2xl p-6 border border-gold/10 flex items-center gap-5 group cursor-pointer hover:bg-gold/10 transition-all">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shadow-md">
                                    <Shield className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest mb-1">Two-Factor Auth</h4>
                                    <p className="text-[9px] text-maroon-dominant/40 dark:text-white/40 font-bold uppercase tracking-wider underline">Enhance Security</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gold ml-auto group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className="flex-1 bg-maroon-dominant/5 dark:bg-white/5 rounded-2xl p-6 border border-maroon-dominant/10 dark:border-white/10 flex items-center gap-5 group cursor-pointer hover:bg-maroon-dominant/10 transition-all">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shadow-md">
                                    <Calendar className="w-6 h-6 text-maroon-dominant dark:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-widest mb-1">Booking Diary</h4>
                                    <p className="text-[9px] text-maroon-dominant/40 dark:text-white/40 font-bold uppercase tracking-wider underline">View Appointments</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-maroon-dominant dark:text-white ml-auto group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
