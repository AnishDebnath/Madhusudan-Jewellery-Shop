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
    onToggleWishlist: (id: string) => void;
    wishlist: string[];
    onNavigate: (view: string, data?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onToggleWishlist, wishlist, onNavigate }) => {
    return (
        <>
            <Hero onNavigate={onNavigate} />
            <OffersSection onNavigate={onNavigate} />
            <FeaturedSlider onProductClick={onProductClick} onToggleWishlist={onToggleWishlist} wishlist={wishlist} />
            <NewArrivals onProductClick={onProductClick} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onNavigate={onNavigate} />
            <section className="py-20 md:py-28 bg-luxury-bg-primary dark:bg-luxury-dark-primary transition-colors duration-500 relative">
                {/* Background Decor */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-maroon-dominant/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-black block gold-glow">Our Masterpieces</span>
                                <div className="h-[1px] w-12 bg-gold/30"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-tight">
                                Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-dominant to-gold dark:from-white dark:to-gold/50">Collections</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-6 text-luxury-text-light/40 dark:text-luxury-text-darkMuted text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                            Handcrafted in Bengal
                            <div className="w-12 h-[1px] bg-gold/30"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {PRODUCTS.slice(0, 8).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={onProductClick}
                                onToggleWishlist={onToggleWishlist}
                                isWishlisted={wishlist.includes(product.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <ProductCarouselSection
                title="Top Sellers"
                products={PRODUCTS.filter(p => p.isBestSeller)}
                onProductClick={onProductClick}
                onToggleWishlist={onToggleWishlist}
                wishlist={wishlist}
                onNavigate={onNavigate}
                showBestsellerBadge={true}
            />
            <VideoCollectionSlider />
            <ShopByBudget onNavigate={onNavigate} />
            <VivaahCollection onNavigate={onNavigate} onProductClick={onProductClick} />
            <NikahCollection onNavigate={onNavigate} />
            <EarringCollection onNavigate={onNavigate} />
            <GemstoneCollection onNavigate={onNavigate} />
            <ShopByGender onNavigate={onNavigate} />
            <SilverCollection onNavigate={onNavigate} />
            <PerfectGift onNavigate={onNavigate} />
            <GoldLoanSection />
            <GoldExchangeSection />
            <TrustSection />
            <CustomerReviews />
            <KolkataStore />
        </>
    );
};

export default Home;
