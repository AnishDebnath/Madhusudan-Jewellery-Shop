import React from 'react';
import Hero from '../components/Hero';
import OffersSection from '../components/OffersSection';
import FeaturedSlider from '../components/FeaturedSlider';
import NewArrivals from '../components/NewArrivals';
import ProductCard from '../components/ProductCard';
import ProductCarouselSection from '../components/ProductCarouselSection';
import ShopByBudget from '../components/ShopByBudget';
import VivaahCollection from '../components/VivaahCollection';
import NikahCollection from '../components/NikahCollection';
import EarringCollection from '../components/EarringCollection';
import GemstoneCollection from '../components/GemstoneCollection';
import ShopByGender from '../components/ShopByGender';
import SilverCollection from '../components/SilverCollection';
import VideoCollectionSlider from '../components/VideoCollectionSlider';
import PerfectGift from '../components/PerfectGift';
import GoldLoanSection from '../components/GoldLoanSection';
import GoldExchangeSection from '../components/GoldExchangeSection';
import TrustSection from '../components/TrustSection';
import CustomerReviews from '../components/CustomerReviews';
import KolkataStore from '../components/KolkataStore';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface HomeProps {
    onProductClick: (p: Product) => void;
    onARTryOn: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onARTryOn }) => {
    return (
        <>
            <Hero />
            <OffersSection />
            <FeaturedSlider />
            <NewArrivals onProductClick={onProductClick} />
            <section className="py-32 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors duration-500">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div className="space-y-4">
                            <span className="text-gold text-[11px] tracking-[0.7em] uppercase font-black block mb-4 gold-glow">Our Masterpieces</span>
                            <h2 className="text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight">Signature Collections</h2>
                        </div>
                        <div className="flex items-center gap-4 text-luxury-text-light/30 dark:text-luxury-text-darkMuted text-[10px] font-black uppercase tracking-[0.3em]">
                            Handcrafted in Bengal
                            <div className="w-16 h-[1px] bg-gold/30"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
                        {PRODUCTS.slice(0, 8).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={onProductClick}
                                onARTryOn={onARTryOn}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <ProductCarouselSection title="Top Sellers" products={PRODUCTS.filter(p => p.isBestSeller)} onProductClick={onProductClick} showBestsellerBadge={true} />
            <VideoCollectionSlider />
            <ShopByBudget />
            <VivaahCollection />
            <NikahCollection />
            <EarringCollection />
            <GemstoneCollection />
            <ShopByGender />
            <SilverCollection />
            <PerfectGift />
            <GoldLoanSection />
            <GoldExchangeSection />
            <TrustSection />
            <CustomerReviews />
            <KolkataStore />
        </>
    );
};

export default Home;
