import React from 'react';
import Hero from './hero';
import OffersSection from './offers-section';
import FeaturedSlider from './featured-slider';
import SignatureCollections from './signature-collections';
import { Product } from '../../types';
import { LazySection } from '../../components/feature/lazy-section';

// Lazy-load sections to optimize performance
const NewArrivals = React.lazy(() => import('./new-arrivals'));
const TopSellers = React.lazy(() => import('./top-sellers'));
const VideoCollectionSlider = React.lazy(() => import('./video-collection-slider'));
const ShopByBudget = React.lazy(() => import('./shop-by-budget'));
const VivaahCollection = React.lazy(() => import('./vivaah-collection'));
const NikahCollection = React.lazy(() => import('./nikah-collection'));
const EarringCollection = React.lazy(() => import('./earring-collection'));
const GemstoneCollection = React.lazy(() => import('./gemstone-collection'));
const ShopByGender = React.lazy(() => import('./shop-by-gender'));
const SilverCollection = React.lazy(() => import('./silver-collection'));
const PerfectGift = React.lazy(() => import('./perfect-gift'));
const GoldLoanSection = React.lazy(() => import('./gold-loan-section'));
const GoldExchangeSection = React.lazy(() => import('./gold-exchange-section'));
const TrustSection = React.lazy(() => import('./trust-section'));
const CustomerReviews = React.lazy(() => import('./customer-reviews'));
const StoreLocation = React.lazy(() => import('../../components/ui/store-location'));

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
