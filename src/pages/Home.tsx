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
            <section className="py-14 md:py-16 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors duration-500 relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 group">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
                                <span className="text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-black gold-glow flex items-center gap-2">
                                    <Sparkles className="w-2.5 h-2.5" /> Our Masterpieces
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-tight">
                                Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-dominant to-gold dark:from-white dark:to-gold/50">Collections</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-6 text-luxury-text-light/40 dark:text-luxury-text-darkMuted text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                            <div className="w-12 h-[1px] bg-gold/30"></div>
                            Handcrafted in Bengal
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-12">
                        {PRODUCTS.slice(0, 8).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={onProductClick}
                                onToggleWishlist={onToggleWishlist}
                                isWishlisted={wishlist.includes(product.id)}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => onNavigate('category', 'All')}
                            className="group relative px-10 py-4 bg-maroon-dominant text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full hover:bg-gold hover:text-maroon-dominant shadow-2xl active:scale-95 flex items-center gap-3"
                        >
                            Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

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
