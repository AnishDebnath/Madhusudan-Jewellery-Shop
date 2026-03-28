import React from 'react';

interface Order {
    id: string;
    image: string;
    date: string;
    total: number;
    status: string;
}

interface OrdersTabProps {
    orders: Order[];
}

const OrdersTab: React.FC<OrdersTabProps> = ({ orders }) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {orders.map((order) => (
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

export default OrdersTab;
