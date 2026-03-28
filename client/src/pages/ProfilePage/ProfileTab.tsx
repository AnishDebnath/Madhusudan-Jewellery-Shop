import React from 'react';
import { User, Save, Edit3, Mail, Phone, MapPin } from 'lucide-react';

interface ProfileTabProps {
    formData: any;
    isEditing: boolean;
    setFormData: (data: any) => void;
    setIsEditing: (editing: boolean) => void;
    handleSave: () => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({
    formData,
    isEditing,
    setFormData,
    setIsEditing,
    handleSave
}) => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white dark:bg-luxury-dark-card rounded-3xl p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-sm font-black text-maroon-dominant dark:text-white uppercase tracking-[0.3em] flex items-center gap-3">
                    <User className="w-5 h-5 text-gold" /> Personal Credentials
                </h3>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="text-[10px] font-black uppercase tracking-widest text-gold hover:text-maroon-dominant dark:hover:text-white flex items-center gap-2 transition-all p-2 hover:bg-gold/5 rounded-lg"
                >
                    {isEditing ? <><Save className="w-4 h-4" /> Save Details</> : <><Edit3 className="w-4 h-4" /> Edit Profile</>}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">First Name</label>
                    <input
                        type="text"
                        value={formData.firstName}
                        disabled={!isEditing}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-2xl px-6 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Last Name</label>
                    <input
                        type="text"
                        value={formData.lastName}
                        disabled={!isEditing}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-2xl px-6 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                        <input
                            type="email"
                            value={formData.email}
                            disabled={!isEditing}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-2xl pl-12 pr-6 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[9px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-[0.2em] ml-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                        <input
                            type="tel"
                            value={formData.phone}
                            disabled={!isEditing}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-2xl pl-12 pr-6 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-luxury-dark-card rounded-3xl p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-2xl">
            <h3 className="text-sm font-black text-maroon-dominant dark:text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" /> Shipping Sanctuary
            </h3>
            <textarea
                value={formData.address}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full bg-luxury-bg-primary dark:bg-black/20 border border-maroon-dominant/5 dark:border-white/5 rounded-2xl px-6 py-4 text-sm text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all disabled:opacity-70 resize-none font-serif italic"
            />
        </div>
    </div>
);

export default ProfileTab;
