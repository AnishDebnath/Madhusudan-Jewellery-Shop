import React from 'react';
import { ChevronRight } from 'lucide-react';
import OrderTracker from './OrderTracker';
import { getStatusColor } from './data';

interface OrderCardProps {
    order: any;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => (
    <div className="bg-white dark:bg-luxury-dark-card rounded-3xl overflow-hidden border border-maroon-dominant/5 dark:border-white/5 shadow-2xl group hover:shadow-maroon-dominant/5 transition-all duration-500">
        <div className="p-6 md:p-8 border-b border-maroon-dominant/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
                <div className="w-20 h-24 overflow-hidden rounded-xl border border-gold/10 relative">
                    <img src={order.image} alt="Order" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-maroon-dominant/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                    <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-1 block">{order.id}</span>
                    <h3 className="text-lg font-serif text-maroon-dominant dark:text-white uppercase">Precious Treasures Collection</h3>
                    <p className="text-[10px] font-bold text-maroon-dominant/40 dark:text-white/40 uppercase tracking-widest mt-1">Placed on {order.date} • {order.items} Items</p>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-maroon-dominant/40 dark:text-white/40 tracking-widest mb-1 block">Value</span>
                    <span className="text-xl font-serif text-maroon-dominant dark:text-white">₹{order.total.toLocaleString()}</span>
                </div>
                <div className={`px-5 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${getStatusColor(order.status)}`}>
                    {order.status}
                </div>
            </div>
        </div>

        <OrderTracker trackStep={order.trackStep} />

        <div className="p-6 bg-white dark:bg-luxury-dark-card border-t border-maroon-dominant/5 dark:border-white/5 flex justify-end gap-4">
            <button className="px-6 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-maroon-dominant/60 dark:text-white/60 hover:text-gold transition-all">Download Invoice</button>
            <button className="px-8 py-3 bg-maroon-dominant/5 dark:bg-white/5 border border-maroon-dominant/10 dark:border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-maroon-dominant dark:text-white hover:bg-maroon-dominant hover:text-white transition-all rounded-full flex items-center gap-2 group/btn">
                Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);

export default OrderCard;
