import { User, Package, Heart, ShoppingBag } from 'lucide-react';

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

export const NAV_TABS = [
    { id: 'profile', label: 'My Profile', icon: User, subtitle: 'Authenticated Member' },
    { id: 'orders', label: 'My Orders', icon: Package, subtitle: 'Acquisition History' },
    { id: 'wishlist', label: 'My Wishlist', icon: Heart, subtitle: 'Your Protected Treasures' },
    { id: 'cart', label: 'My Cart', icon: ShoppingBag, subtitle: 'Pieces Awaiting Ownership' },
];
