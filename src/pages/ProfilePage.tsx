import React, { useState } from 'react';
import {
    User, Mail, Phone, MapPin, Edit3, Camera, Save,
    ShoppingBag, Heart, LogOut, ChevronRight, Package,
    Truck, CheckCircle2, Clock, Trash2, ArrowRight
} from 'lucide-react';
import { Product, CartItem, PageView } from '../types';
import { PRODUCTS } from '../constants';

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

    const mockOrders = [
        {
            id: 'MSJ-82741',
            date: 'Feb 12, 2024',
            status: 'Delivered',
            total: 125400,
            items: 2,
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=200',
            trackStep: 4
        },
        {
            id: 'MSJ-71932',
            date: 'Jan 28, 2024',
            status: 'In Transit',
            total: 45000,
            items: 1,
            image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=200',
            trackStep: 3
        }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save profile would go here
    };

    const renderProfile = () => (
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

    const renderOrders = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {mockOrders.map((order) => (
                <div key={order.id} className="bg-white dark:bg-luxury-dark-card rounded-3xl overflow-hidden border border-maroon-dominant/5 dark:border-white/5 shadow-xl group">
                    <div className="p-6 flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-20 overflow-hidden rounded-xl border border-gold/10">
                                <img src={order.image} alt="Order" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-1 block">{order.id}</span>
                                <h4 className="text-base font-serif text-maroon-dominant dark:text-white uppercase">Heritage Collection Piece</h4>
                                <p className="text-[9px] font-bold text-maroon-dominant/40 dark:text-white/40 uppercase tracking-widest mt-1">Placed on {order.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <span className="text-lg font-serif text-maroon-dominant dark:text-white">₹{order.total.toLocaleString()}</span>
                            </div>
                            <div className={`px-4 py-1.5 rounded-full border text-[8px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'text-green-500 bg-green-500/5 border-green-500/10' : 'text-gold bg-gold/5 border-gold/10'
                                }`}>
                                {order.status}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderWishlist = () => {
        const items = PRODUCTS.filter(p => wishlist.includes(p.id));
        if (items.length === 0) return (
            <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                <Heart className="w-12 h-12 text-gold/20 mx-auto mb-6" />
                <h3 className="text-xl font-serif text-maroon-dominant dark:text-white uppercase mb-4">Your wishlist is empty</h3>
                <button onClick={() => onNavigate('home')} className="text-gold text-[10px] font-black uppercase tracking-[0.3em] hover:text-maroon-dominant transition-colors border-b border-gold/30 pb-1">Begin Your Collection</button>
            </div>
        );

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {items.map(product => (
                    <div key={product.id} className="bg-white dark:bg-luxury-dark-card rounded-3xl border border-maroon-dominant/5 dark:border-white/5 p-4 flex gap-4 group">
                        <div className="w-24 h-24 bg-luxury-bg-primary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0">
                            <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                        </div>
                        <div className="flex-1 py-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-serif text-maroon-dominant dark:text-white text-base mb-1">{product.name}</h4>
                                    <p className="text-gold font-bold text-sm tracking-tight">₹{product.price.toLocaleString('en-IN')}</p>
                                </div>
                                <button onClick={() => onToggleWishlist(product.id)} className="text-red-500/40 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={() => onNavigate('pdp', product)}
                                className="mt-3 flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-maroon-dominant dark:text-white/60 hover:text-gold transition-colors"
                            >
                                View Piece <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderCart = () => {
        if (cart.length === 0) return (
            <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                <ShoppingBag className="w-12 h-12 text-gold/20 mx-auto mb-6" />
                <h3 className="text-xl font-serif text-maroon-dominant dark:text-white uppercase mb-4">Your bag is empty</h3>
                <button onClick={() => onNavigate('home')} className="text-gold text-[10px] font-black uppercase tracking-[0.3em] hover:text-maroon-dominant transition-colors border-b border-gold/30 pb-1">Explore Jewels</button>
            </div>
        );

        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {cart.map(item => (
                    <div key={item.id} className="bg-white dark:bg-luxury-dark-card rounded-3xl border border-maroon-dominant/5 dark:border-white/5 p-6 flex gap-6 group">
                        <div className="w-24 h-24 bg-luxury-bg-primary dark:bg-black/20 rounded-2xl overflow-hidden flex-shrink-0">
                            <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-serif text-maroon-dominant dark:text-white text-lg mb-1">{item.name}</h4>
                                    <p className="text-maroon-dominant dark:text-gold font-bold text-base tracking-tight">₹{item.price.toLocaleString('en-IN')}</p>
                                </div>
                                <button onClick={() => onRemoveFromCart(item.id)} className="text-maroon-dominant/20 dark:text-white/20 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/5">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-luxury-bg-primary dark:bg-black/20 rounded-full border border-maroon-dominant/10 dark:border-white/10 overflow-hidden">
                                    <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} className="px-4 py-1 text-maroon-dominant dark:text-gold text-lg">-</button>
                                    <span className="px-2 text-xs font-black text-maroon-dominant dark:text-white">{item.quantity}</span>
                                    <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} className="px-4 py-1 text-maroon-dominant dark:text-gold text-lg">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pt-6 border-t border-maroon-dominant/5 dark:border-white/5 flex justify-end">
                    <button onClick={() => onNavigate('cart')} className="bg-gold text-maroon-dominant px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-maroon-dominant hover:text-gold transition-all shadow-xl">Complete Acquisition</button>
                </div>
            </div>
        );
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
                                            <User className="w-12 h-12 text-gold/30" />
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
                                {[
                                    { id: 'profile', label: 'My Profile', icon: User },
                                    { id: 'orders', label: 'My Orders', icon: Package },
                                    { id: 'wishlist', label: 'My Wishlist', icon: Heart },
                                    { id: 'cart', label: 'My Cart', icon: ShoppingBag },
                                ].map((tab) => (
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
                                {activeTab === 'profile' && 'Authenticated Member'}
                                {activeTab === 'orders' && 'Acquisition History'}
                                {activeTab === 'wishlist' && 'Your Protected Treasures'}
                                {activeTab === 'cart' && 'Pieces Awaiting Ownership'}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">
                                {activeTab === 'profile' && 'My Profile'}
                                {activeTab === 'orders' && 'My Orders'}
                                {activeTab === 'wishlist' && 'My Wishlist'}
                                {activeTab === 'cart' && 'My Cart'}
                            </h1>
                        </div>

                        {activeTab === 'profile' && renderProfile()}
                        {activeTab === 'orders' && renderOrders()}
                        {activeTab === 'wishlist' && renderWishlist()}
                        {activeTab === 'cart' && renderCart()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
