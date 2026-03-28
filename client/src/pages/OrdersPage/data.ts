import { ShoppingBag, Clock, Package, Truck, CheckCircle2 } from 'lucide-react';

export const MOCK_ORDERS = [
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

export const STATUS_STEPS = [
    { icon: ShoppingBag, label: 'Placed' },
    { icon: Clock, label: 'Processing' },
    { icon: Package, label: 'Shipped' },
    { icon: Truck, label: 'Transit' },
    { icon: CheckCircle2, label: 'Delivered' }
];

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'Delivered': return 'text-green-500 bg-green-500/10 border-green-500/20';
        case 'In Transit': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
        case 'Processing': return 'text-gold bg-gold/10 border-gold/20';
        default: return 'text-luxury-text-light/40 bg-luxury-bg-primary/40 divider-color';
    }
};
