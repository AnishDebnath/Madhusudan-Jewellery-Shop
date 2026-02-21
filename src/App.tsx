import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PopularSearches from './components/PopularSearches';
import Concierge from './components/Concierge';

const Home = React.lazy(() => import('./pages/Home'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const WishlistPage = React.lazy(() => import('./pages/WishlistPage'));
const About = React.lazy(() => import('./pages/StaticPages').then(m => ({ default: m.default.About })));
const Contact = React.lazy(() => import('./pages/StaticPages').then(m => ({ default: m.default.Contact })));
const KolkataStore = React.lazy(() => import('./components/KolkataStore'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary">
    <div className="relative w-20 h-20 mb-6">
      <div className="absolute inset-0 border-2 border-gold/10 rounded-full"></div>
      <div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin"></div>
      <div className="absolute inset-4 border border-gold/20 rounded-full animate-pulse"></div>
    </div>
    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] gold-glow mb-2">Madhusudan Jewellery</span>
    <span className="text-luxury-text-light/40 dark:text-white/40 text-[8px] uppercase tracking-widest italic animate-pulse">Loading Treasures...</span>
  </div>
);

import { Product, CartItem, Category } from './types';
import { PRODUCTS } from './constants';


interface ProductRouteWrapperProps {
  addToCart: (product: Product) => void;
  handleNavigate: (view: string, data?: any) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
}

const ProductRouteWrapper: React.FC<ProductRouteWrapperProps> = ({ addToCart, handleNavigate, onToggleWishlist, wishlist }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <Navigate to="/" replace />;

  return (
    <ProductDetailPage
      key={product.id}
      product={product}
      onAddToCart={addToCart}
      onNavigateToCategory={(cat) => handleNavigate('category', cat)}
      onToggleWishlist={onToggleWishlist}
      isWishlisted={wishlist.includes(product.id)}
      wishlist={wishlist}
      onNavigate={handleNavigate}
    />
  );
};

interface CategoryRouteWrapperProps {
  handleNavigate: (view: string, data?: any) => void;
  onToggleWishlist: (id: string) => void;
  wishlist: string[];
  addToCart: (product: Product) => void;
}

const CategoryRouteWrapper: React.FC<CategoryRouteWrapperProps> = ({ handleNavigate, onToggleWishlist, wishlist, addToCart }) => {
  const { category } = useParams<{ category: string }>();
  return (
    <CategoryPage
      category={category}
      onProductClick={(p) => handleNavigate('pdp', p)}
      onToggleWishlist={onToggleWishlist}
      wishlist={wishlist}
      onAddToCart={addToCart}
    />
  );
};

const App: React.FC = () => {
  // Global State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

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
      case 'login': navigate('/login'); break;
      case 'signup': navigate('/signup'); break;
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
        isLoggedIn={isLoggedIn}
        isMinimal={isAuthPage}
      />

      <main className={isAuthPage ? "pt-[110px] lg:pt-[140px]" : "pt-[130px] lg:pt-[180px]"}>
        <React.Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <Home
                onProductClick={(p) => handleNavigate('pdp', p)}
                onToggleWishlist={toggleWishlist}
                wishlist={wishlist}
                onNavigate={handleNavigate}
                onAddToCart={addToCart}
              />
            } />

            <Route path="/category/:category" element={<CategoryRouteWrapper handleNavigate={handleNavigate} onToggleWishlist={toggleWishlist} wishlist={wishlist} addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductRouteWrapper addToCart={addToCart} handleNavigate={handleNavigate} onToggleWishlist={toggleWishlist} wishlist={wishlist} />} />

            <Route path="/cart" element={
              <CartPage
                cart={cart}
                onUpdateQty={updateCartQuantity}
                onRemove={removeFromCart}
                onCheckout={() => handleNavigate('checkout')}
                onShopMore={() => handleNavigate('home')}
                onProductClick={(p) => handleNavigate('pdp', p)}
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
                onRemove={toggleWishlist}
              />
            } />

            {/* Static Content Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store-locator" element={<KolkataStore />} />
            <Route path="/login" element={<LoginPage onNavigate={handleNavigate} onLogin={() => { setIsLoggedIn(true); handleNavigate('home'); }} />} />
            <Route path="/signup" element={<SignUpPage onNavigate={handleNavigate} onSignUp={() => { setIsLoggedIn(true); handleNavigate('home'); }} />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </React.Suspense>
      </main>

      {!isAuthPage && (
        <>
          <Footer onNavigate={handleNavigate} />
          <PopularSearches />
          <Concierge />
        </>
      )}
    </div>
  );
};

export default App;