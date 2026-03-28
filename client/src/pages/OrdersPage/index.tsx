import React from 'react';
import { ShoppingBag, Search, ArrowLeft } from 'lucide-react';
import { PageView } from '../../types';
import { MOCK_ORDERS } from './data';
import OrderCard from './OrderCard';

interface OrdersPageProps {
    onNavigate: (view: PageView) => void;
}

const OrdersPage: React.FC<OrdersPageProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-luxury-bg-primary dark:bg-luxury-dark-primary pt-[104px] md:pt-[120px] pb-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={() => onNavigate('home')}
                                className="w-10 h-10 rounded-full bg-white dark:bg-luxury-dark-card border border-maroon-dominant/5 dark:border-white/5 flex items-center justify-center text-maroon-dominant dark:text-white hover:text-gold transition-colors shadow-lg"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">Acquisition History</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider">My Orders</h1>
                    </div>

                    <div className="relative group max-w-sm w-full">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-maroon-dominant/30 dark:text-white/30 group-focus-within:text-gold transition-colors" />
                        <input
                            type="text"
                            placeholder="SEARCH BY ORDER ID..."
                            className="w-full bg-white dark:bg-luxury-dark-card border border-maroon-dominant/5 dark:border-white/5 rounded-full pl-14 pr-8 py-4 text-[10px] font-black tracking-widest text-maroon-dominant dark:text-white focus:outline-none focus:border-gold/50 transition-all shadow-xl"
                        />
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-8">
                    {MOCK_ORDERS.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>

                {/* Empty State */}
                {MOCK_ORDERS.length === 0 && (
                    <div className="py-32 text-center">
                        <div className="w-24 h-24 bg-maroon-dominant/5 rounded-full flex items-center justify-center mx-auto mb-8">
                            <ShoppingBag className="w-10 h-10 text-gold/30" />
                        </div>
                        <h2 className="text-2xl font-serif text-maroon-dominant dark:text-white uppercase mb-4">No acquisitions found</h2>
                        <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted italic text-sm mb-12">Your collection journey is just beginning.</p>
                        <button
                            onClick={() => onNavigate('category' as any)}
                            className="px-12 py-4 bg-maroon-dominant text-white rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-2xl"
                        >
                            Explore Collections
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
