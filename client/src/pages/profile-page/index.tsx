import React, { useState } from 'react';
import { Camera, ChevronRight, LogOut, User as UserIcon } from 'lucide-react';
import { Product, CartItem, PageView } from '../../types';
import { MOCK_ORDERS, NAV_TABS } from './data';
import ProfileTab from './profile-tab';
import OrdersTab from './orders-tab';
import WishlistTab from './wishlist-tab';
import CartTab from './cart-tab';

interface ProfilePageProps {
    user: {
        firstName: string;
        lastName?: string;
        email?: string;
        phone?: string;
        joinedDate?: string;
    } | null;
    onLogout: () => void;
    cart: CartItem[];
    onUpdateCartQty: (id: string, qty: number) => void;
    onRemoveFromCart: (id: string) => void;
    wishlist: string[];
    onToggleWishlist: (id: string) => void;
    onProductClick: (product: Product) => void;
    onNavigate: (view: PageView, data?: any) => void;
}

type TabType = 'profile' | 'orders' | 'wishlist' | 'cart';

const ProfilePage: React.FC<ProfilePageProps> = ({
    user, onLogout, cart, onUpdateCartQty, onRemoveFromCart,
    wishlist, onToggleWishlist, onProductClick, onNavigate
}) => {
    const [activeTab, setActiveTab] = useState<TabType>('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: user?.firstName || 'Anish',
        lastName: user?.lastName || 'Debnath',
        email: user?.email || 'anish@example.com',
        phone: user?.phone || '+91 98765 43210',
        address: '123, Luxury Enclave, Kolkata, West Bengal'
    });

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save profile would go here
    };

    return (
        <div className="min-h-screen bg-luxury-bg-primary dark:bg-luxury-dark-primary pt-32 lg:pt-44 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Partition: Sidebar */}
                    <div className="lg:col-span-4 space-y-8 sticky top-32 lg:top-44">
                        {/* Profile Summary Card */}
                        <div className="bg-white dark:bg-luxury-dark-card rounded-[40px] p-8 border border-maroon-dominant/5 dark:border-white/5 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 opacity-50"></div>
                            <div className="relative flex items-center gap-8">
                                <div className="relative flex-shrink-0">
                                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gold/20 p-1.5 bg-gradient-to-br from-gold/10 via-transparent to-maroon-dominant/5 shadow-inner">
                                        <div className="w-full h-full rounded-full bg-luxury-bg-primary dark:bg-black/40 flex items-center justify-center overflow-hidden border border-gold/10">
                                            <UserIcon className="w-12 h-12 text-gold/30" />
                                        </div>
                                    </div>
                                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-maroon-dominant text-white rounded-full flex items-center justify-center border-2 border-white dark:border-luxury-dark-card hover:bg-gold transition-all shadow-xl group-hover:scale-110">
                                        <Camera className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl md:text-2xl font-serif text-maroon-dominant dark:text-white mb-1 uppercase tracking-wider truncate">
                                        {formData.firstName} {formData.lastName}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                                        <p className="text-[9px] text-gold font-black uppercase tracking-[0.3em] opacity-80">Heirloom Circle</p>
                                    </div>
                                    <div className="mt-4 flex gap-3">
                                        <div className="px-3 py-1 bg-maroon-dominant/5 dark:bg-white/5 border border-maroon-dominant/5 dark:border-white/5 rounded-full">
                                            <span className="text-[7px] font-black text-maroon-dominant dark:text-white/60 uppercase tracking-widest">ID: {formData.firstName.slice(0, 3).toUpperCase()}-2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Options */}
                        <div className="bg-white dark:bg-luxury-dark-card rounded-[32px] p-4 border border-maroon-dominant/5 dark:border-white/5 shadow-xl">
                            <nav className="space-y-2">
                                {NAV_TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as TabType)}
                                        className={`w-full flex items-center gap-5 px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all group ${activeTab === tab.id
                                                ? 'bg-maroon-dominant text-white shadow-xl translate-x-3'
                                                : 'text-maroon-dominant/60 dark:text-white/60 hover:text-gold hover:bg-gold/5'
                                            }`}
                                    >
                                        <tab.icon className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 ${activeTab === tab.id ? 'text-gold shadow-gold-sm' : ''}`} />
                                        {tab.label}
                                        <ChevronRight className={`ml-auto w-4 h-4 transition-all duration-500 ${activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                                    </button>
                                ))}
                                <div className="h-px bg-maroon-dominant/5 dark:bg-white/5 my-4 mx-4"></div>
                                <button
                                    onClick={onLogout}
                                    className="w-full flex items-center gap-5 px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-red-500/70 hover:text-red-500 hover:bg-red-500/5 transition-all group"
                                >
                                    <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                                    Log Out Session
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Right Partition: Content */}
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <span className="text-gold text-[11px] font-black uppercase tracking-[0.6em] mb-3 block opacity-60">
                                {NAV_TABS.find(t => t.id === activeTab)?.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
                                {NAV_TABS.find(t => t.id === activeTab)?.label}
                            </h1>
                        </div>

                        {activeTab === 'profile' && (
                            <ProfileTab 
                                formData={formData} 
                                isEditing={isEditing} 
                                setFormData={setFormData} 
                                setIsEditing={setIsEditing} 
                                handleSave={handleSave} 
                            />
                        )}
                        {activeTab === 'orders' && <OrdersTab orders={MOCK_ORDERS} />}
                        {activeTab === 'wishlist' && (
                            <WishlistTab 
                                wishlist={wishlist} 
                                onToggleWishlist={onToggleWishlist} 
                                onNavigate={onNavigate} 
                            />
                        )}
                        {activeTab === 'cart' && (
                            <CartTab 
                                cart={cart} 
                                onUpdateCartQty={onUpdateCartQty} 
                                onRemoveFromCart={onRemoveFromCart} 
                                onNavigate={onNavigate} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
