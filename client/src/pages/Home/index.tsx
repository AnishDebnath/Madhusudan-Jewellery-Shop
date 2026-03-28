import React from 'react';
import Hero from './Hero';
import OffersSection from './OffersSection';
import FeaturedSlider from './FeaturedSlider';
import SignatureCollections from './SignatureCollections';
import { Product } from '../../types';
import { LazySection } from '../../components/feature/LazySection';

// Lazy-load sections to optimize performance
const NewArrivals = React.lazy(() => import('./NewArrivals'));
const TopSellers = React.lazy(() => import('./TopSellers'));
const VideoCollectionSlider = React.lazy(() => import('./VideoCollectionSlider'));
const ShopByBudget = React.lazy(() => import('./ShopByBudget'));
const VivaahCollection = React.lazy(() => import('./VivaahCollection'));
const NikahCollection = React.lazy(() => import('./NikahCollection'));
const EarringCollection = React.lazy(() => import('./EarringCollection'));
const GemstoneCollection = React.lazy(() => import('./GemstoneCollection'));
const ShopByGender = React.lazy(() => import('./ShopByGender'));
const SilverCollection = React.lazy(() => import('./SilverCollection'));
const PerfectGift = React.lazy(() => import('./PerfectGift'));
const GoldLoanSection = React.lazy(() => import('./GoldLoanSection'));
const GoldExchangeSection = React.lazy(() => import('./GoldExchangeSection'));
const TrustSection = React.lazy(() => import('./TrustSection'));
const CustomerReviews = React.lazy(() => import('./CustomerReviews'));
const StoreLocation = React.lazy(() => import('../../components/ui/StoreLocation'));

interface HomeProps {
    onProductClick: (p: Product) => void;
    onToggleWishlist: (id: string) => void;
    wishlist: string[];
    onNavigate: (view: string, data?: any) => void;
    onAddToCart?: (p: Product) => void;
}

const Home: React.FC<HomeProps> = (props) => {
    const { onNavigate } = props;

    // These props are passed to almost every section
    const sharedProps = props;

    return (
        <>
            {/* Above-the-fold: renders immediately */}
            <Hero onNavigate={onNavigate} />
            <OffersSection onNavigate={onNavigate} />
            <FeaturedSlider {...sharedProps} />
            <SignatureCollections {...sharedProps} />

            {/* Below-the-fold sections — lazy loaded as user scrolls to optimize initial LCP */}
            <LazySection>
                <NewArrivals {...sharedProps} />
            </LazySection>

            <LazySection>
                <TopSellers {...sharedProps} />
            </LazySection>

            <LazySection><VideoCollectionSlider /></LazySection>
            <LazySection><ShopByBudget onNavigate={onNavigate} /></LazySection>

            <LazySection>
                <VivaahCollection {...sharedProps} />
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
            <LazySection><StoreLocation /></LazySection>
        </>
    );
};

export default Home;
