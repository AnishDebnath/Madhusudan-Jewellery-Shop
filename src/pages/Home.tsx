import React, { useEffect, useRef, useState, Suspense } from 'react';
import Hero from '../components/Hero';
import { ArrowRight, Sparkles } from 'lucide-react';
import OffersSection from '../components/OffersSection';
import FeaturedSlider from '../components/FeaturedSlider';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

// Lazy-load all below-the-fold heavy sections
const NewArrivals = React.lazy(() => import('../components/NewArrivals'));
const ProductCarouselSection = React.lazy(() => import('../components/ProductCarouselSection'));
const VideoCollectionSlider = React.lazy(() => import('../components/VideoCollectionSlider'));
const ShopByBudget = React.lazy(() => import('../components/ShopByBudget'));
const VivaahCollection = React.lazy(() => import('../components/VivaahCollection'));
const NikahCollection = React.lazy(() => import('../components/NikahCollection'));
const EarringCollection = React.lazy(() => import('../components/EarringCollection'));
const GemstoneCollection = React.lazy(() => import('../components/GemstoneCollection'));
const ShopByGender = React.lazy(() => import('../components/ShopByGender'));
const SilverCollection = React.lazy(() => import('../components/SilverCollection'));
const PerfectGift = React.lazy(() => import('../components/PerfectGift'));
const GoldLoanSection = React.lazy(() => import('../components/GoldLoanSection'));
const GoldExchangeSection = React.lazy(() => import('../components/GoldExchangeSection'));
const TrustSection = React.lazy(() => import('../components/TrustSection'));
const CustomerReviews = React.lazy(() => import('../components/CustomerReviews'));
const KolkataStore = React.lazy(() => import('../components/KolkataStore'));

// Lightweight placeholder shown while a section loads in
const SectionPlaceholder = () => (
    <div className="w-full py-16 flex items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary">
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
);

// Wraps a section so it only mounts once it enters the viewport (IntersectionObserver)
const LazySection: React.FC<{ children: React.ReactNode; rootMargin?: string }> = ({
    children,
    rootMargin = '300px',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref}>
            {isVisible ? (
                <Suspense fallback={<SectionPlaceholder />}>{children}</Suspense>
            ) : (
                <SectionPlaceholder />
            )}
        </div>
    );
};

interface HomeProps {
    onProductClick: (p: Product) => void;
    onToggleWishlist: (id: string) => void;
    wishlist: string[];
    onNavigate: (view: string, data?: any) => void;
    onAddToCart?: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onToggleWishlist, wishlist, onNavigate, onAddToCart }) => {
    return (
        <>
            {/* Above-the-fold: renders immediately */}
            <Hero onNavigate={onNavigate} />
            <OffersSection onNavigate={onNavigate} />
            <FeaturedSlider onProductClick={onProductClick} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onNavigate={onNavigate} onAddToCart={onAddToCart} />

            {/* Signature Collections - render immediately as it's just below fold */}
            <ProductCarouselSection
                title="Signature Collections"
                products={PRODUCTS.slice(0, 12)}
                onProductClick={onProductClick}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onNavigate={onNavigate}
                onAddToCart={onAddToCart}
            />

            {/* Below-the-fold sections — lazy loaded as user scrolls */}
            <LazySection>
                <NewArrivals onProductClick={onProductClick} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onNavigate={onNavigate} onAddToCart={onAddToCart} />
            </LazySection>

            <LazySection>
                <ProductCarouselSection
                    title="Top Sellers"
                    products={PRODUCTS.filter(p => p.isBestSeller)}
                    onProductClick={onProductClick}
                    onToggleWishlist={onToggleWishlist}
                    wishlist={wishlist}
                    onNavigate={onNavigate}
                    showBestsellerBadge={true}
                    onAddToCart={onAddToCart}
                />
            </LazySection>

            <LazySection><VideoCollectionSlider /></LazySection>
            <LazySection><ShopByBudget onNavigate={onNavigate} /></LazySection>

            <LazySection>
                <VivaahCollection onNavigate={onNavigate} onProductClick={onProductClick} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onAddToCart={onAddToCart} />
            </LazySection>

            <LazySection><NikahCollection onNavigate={onNavigate} /></LazySection>
            <LazySection><EarringCollection onNavigate={onNavigate} /></LazySection>
            <LazySection><GemstoneCollection onNavigate={onNavigate} /></LazySection>
            <LazySection><ShopByGender onNavigate={onNavigate} /></LazySection>
            <LazySection><SilverCollection onNavigate={onNavigate} /></LazySection>
            <LazySection><PerfectGift onNavigate={onNavigate} /></LazySection>
            <LazySection><GoldLoanSection /></LazySection>
            <LazySection><GoldExchangeSection /></LazySection>
            <LazySection><TrustSection /></LazySection>
            <LazySection><CustomerReviews /></LazySection>
            <LazySection><KolkataStore /></LazySection>
        </>
    );
};

export default Home;
