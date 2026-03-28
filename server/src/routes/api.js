import express from 'express';
const router = express.Router();

// Mock products data (In real project, fetch from database)
const PRODUCTS = [
    { id: '1', name: 'Heritage Gold Bangle', price: 125000, category: 'Gold' },
    { id: '2', name: 'Diamond Solitaire Ring', price: 250000, category: 'Diamond' },
    { id: '3', name: 'Temple Craft Necklace', price: 450000, category: 'Bridal' },
    { id: '4', name: 'Moonlit Pearl Earrings', price: 85000, category: 'Gemstones' }
];

// Product routes
router.get('/products', (req, res) => {
    res.json(PRODUCTS);
});

router.get('/products/:id', (req, res) => {
    const product = PRODUCTS.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// Category routes
router.get('/categories', (req, res) => {
    const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
    res.json(categories);
});

// Placeholder for future features
router.post('/orders', (req, res) => {
    const { items, total } = req.body;
    // Logic for order creation
    res.status(201).json({ message: 'Order created successfully', orderId: `MSJ-${Math.floor(Math.random() * 90000) + 10000}` });
});

export default router;
