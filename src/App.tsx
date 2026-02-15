import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PopularSearches from './components/PopularSearches';
import Concierge from './components/Concierge';
import ARTryOn from './components/ARTryOn';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import StaticPages from './pages/StaticPages';
import KolkataStore from './components/KolkataStore';

import { Product, CartItem, Category } from './types';
import { PRODUCTS } from './constants';


interface ProductRouteWrapperProps {
  addToCart: (product: Product) => void;
  setShowARTryOn: (product: Product | null) => void;
  handleNavigate: (view: string, data?: any) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const ProductRouteWrapper: React.FC<ProductRouteWrapperProps> = ({ addToCart, setShowARTryOn, handleNavigate, onToggleWishlist, wishlist }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <Navigate to="/" replace />;

  return (
    <ProductDetailPage
      key={product.id}
      product={product}
      onAddToCart={addToCart}
      onARTryOn={setShowARTryOn}
      onNavigateToCategory={(cat) => handleNavigate('category', cat)}
      onToggleWishlist={onToggleWishlist}
      isWishlisted={wishlist.includes(product.id)}
    />
  );
};

interface CategoryRouteWrapperProps {
  handleNavigate: (view: string, data?: any) => void;
  setShowARTryOn: (product: Product | null) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const CategoryRouteWrapper: React.FC<CategoryRouteWrapperProps> = ({ handleNavigate, setShowARTryOn, onToggleWishlist, wishlist }) => {
  const { category } = useParams<{ category: string }>();
  return (
    <CategoryPage
      category={category}
      onProductClick={(p) => handleNavigate('pdp', p)}
      onARTryOn={setShowARTryOn}
      onToggleWishlist={onToggleWishlist}
      wishlist={wishlist}
    />
  );
};

const App: React.FC = () => {
  // Global State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showARTryOn, setShowARTryOn] = useState<Product | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ensure dark mode is active on mount
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Navigation Helper for backward compatibility with components
  const handleNavigate = (view: string, data?: any) => {
    switch (view) {
      case 'home': navigate('/'); break;
      case 'category':
        // Handle both string and object data for category
        const cat = typeof data === 'string' ? data : data?.name || data;
        navigate(`/category/${cat}`);
        break;
      case 'pdp': navigate(`/product/${data.id}`); break;
      case 'cart': navigate('/cart'); break;
      case 'checkout': navigate('/checkout'); break;
      case 'wishlist': navigate('/wishlist'); break;
      case 'about': navigate('/about'); break;
      case 'contact': navigate('/contact'); break;
      case 'store-locator': navigate('/store-locator'); break;
      default: navigate('/');
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));

  const updateCartQuantity = (id: string, qty: number) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };



  return (
    <div className="min-h-screen font-sans bg-luxury-bg-primary dark:bg-luxury-dark-primary text-luxury-text-light dark:text-luxury-text-dark selection:bg-gold/30 transition-colors duration-500 overflow-x-hidden">
      <Header
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onNavigate={handleNavigate}
      />

      <main className="pt-[120px] lg:pt-[150px]">
        <Routes>
          <Route path="/" element={
            <Home
              onProductClick={(p) => handleNavigate('pdp', p)}
              onARTryOn={setShowARTryOn}
              onToggleWishlist={toggleWishlist}
              wishlist={wishlist}
              onNavigate={handleNavigate}
            />
          } />

          <Route path="/category/:category" element={<CategoryRouteWrapper handleNavigate={handleNavigate} setShowARTryOn={setShowARTryOn} onToggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/product/:id" element={<ProductRouteWrapper addToCart={addToCart} setShowARTryOn={setShowARTryOn} handleNavigate={handleNavigate} onToggleWishlist={toggleWishlist} wishlist={wishlist} />} />

          <Route path="/cart" element={
            <CartPage
              cart={cart}
              onUpdateQty={updateCartQuantity}
              onRemove={removeFromCart}
              onCheckout={() => handleNavigate('checkout')}
              onShopMore={() => handleNavigate('home')}
            />
          } />

          <Route path="/checkout" element={
            <CheckoutPage
              cart={cart}
              onComplete={() => { setCart([]); handleNavigate('home'); }}
            />
          } />

          <Route path="/wishlist" element={
            <WishlistPage
              wishlist={wishlist}
              onProductClick={(p) => handleNavigate('pdp', p)}
              onAddToCart={addToCart}
            />
          } />

          <Route path="/about" element={<StaticPages.About />} />
          <Route path="/contact" element={<StaticPages.Contact />} />
          <Route path="/store-locator" element={<KolkataStore />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
      <PopularSearches />
      <Concierge />

      {showARTryOn && (
        <ARTryOn
          product={showARTryOn}
          onClose={() => setShowARTryOn(null)}
        />
      )}
    </div>
  );
};

export default App;