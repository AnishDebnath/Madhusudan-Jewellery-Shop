
import { Category, Product, Review } from './types';
import necklace1 from './assets/jewellery/necklace/nacklace (1).jpg';
import necklace2 from './assets/jewellery/necklace/nacklace (2).jpg';
import necklace3 from './assets/jewellery/necklace/nacklace (3).jpg';
import necklace4 from './assets/jewellery/necklace/nacklace (4).jpg';
import necklace5 from './assets/jewellery/necklace/nacklace (5).jpg';
import necklace6 from './assets/jewellery/necklace/nacklace (6).jpg';
import necklace7 from './assets/jewellery/necklace/nacklace (7).jpg';
import necklace8 from './assets/jewellery/necklace/nacklace (8).jpg';
import necklace9 from './assets/jewellery/necklace/nacklace (9).jpg';
import necklace10 from './assets/jewellery/necklace/nacklace (10).jpg';

import ring11 from './assets/jewellery/ring/ring (11).jpg';
import ring12 from './assets/jewellery/ring/ring (12).jpg';
import ring13 from './assets/jewellery/ring/ring (13).jpg';

import bangles1 from './assets/jewellery/bangles/bangles (1).jpg';
import bangles2 from './assets/jewellery/bangles/bangles (2).jpg';
import bangles3 from './assets/jewellery/bangles/bangles (3).jpg';
import bangles4 from './assets/jewellery/bangles/bangles (4).jpg';

import earrings1 from './assets/jewellery/earrings/earrings (1).jpg';
import earrings2 from './assets/jewellery/earrings/earrings (2).jpg';
import earrings3 from './assets/jewellery/earrings/earrings (3).jpg';
import earrings7 from './assets/jewellery/earrings/earrings (7).jpg';
import earrings8 from './assets/jewellery/earrings/earrings (8).jpg';
import earrings9 from './assets/jewellery/earrings/earrings (9).jpg';

import goldDiamond22 from './assets/jewellery/gold&diamond-jewellery(22).jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'g1',
    name: 'Royal Kolkata Filigree Choker',
    category: Category.GOLD,
    subCategory: 'Necklaces',
    price: 185000,
    image: necklace1,
    karat: '22K',
    weight: '32.5g',
    description: 'Exquisite handcrafted gold filigree work reflecting the rich heritage of Kolkata artisans.',
    isBestSeller: true,
    additionalImages: [necklace6, necklace7, necklace8]
  },
  {
    id: 'd1',
    name: 'Eternal Glow Diamond Ring',
    category: Category.DIAMOND,
    subCategory: 'Rings',
    price: 95000,
    image: ring11,
    diamondCarat: '1.2ct',
    description: 'A brilliant-cut certified solitaire diamond set in 18K white gold.',
    isNewArrival: true,
    additionalImages: [ring12, ring13]
  },
  {
    id: 'b1',
    name: 'Majestic Bridal Maharani Set',
    category: Category.BRIDAL,
    subCategory: 'Necklaces & Sets',
    price: 750000,
    image: necklace2,
    karat: '22K',
    weight: '120g',
    description: 'The ultimate wedding statement. Intricate Nakshi work with ruby and emerald highlights.',
    isBestSeller: true,
    additionalImages: [necklace9, necklace10]
  },
  {
    id: 'g2',
    name: 'Heritage Gold Kadas',
    category: Category.GOLD,
    subCategory: 'Bangles',
    price: 240000,
    image: bangles1,
    karat: '22K',
    weight: '45g',
    description: 'Traditional solid gold bangles with hand-carved floral motifs.',
    additionalImages: [bangles2, bangles3, bangles4]
  },
  {
    id: 'd2',
    name: 'Starlight Diamond Drops',
    category: Category.DIAMOND,
    subCategory: 'Earrings',
    price: 65000,
    image: earrings1,
    diamondCarat: '0.8ct',
    description: 'Dancing diamonds in an elegant drop design, perfect for evening wear.',
    additionalImages: [earrings7, earrings8, earrings9]
  },
  {
    id: 'inv1',
    name: '24K Lakshmi Gold Coin',
    category: Category.GOLD,
    subCategory: 'Investment',
    price: 74500,
    image: goldDiamond22,
    karat: '24K',
    weight: '10g',
    description: 'Pure 999.9 investment grade gold coin with divine Lakshmi motif.',
    isBestSeller: true,
    additionalImages: [goldDiamond22]
  },
  {
    id: 'p1',
    name: 'Antique Polki Heirloom Jhumkas',
    category: Category.CUSTOM,
    subCategory: 'Earrings',
    price: 320000,
    image: earrings2,
    karat: '22K',
    description: 'Uncut diamonds (Polki) set in a traditional jadau technique with freshwater pearl drops.',
    additionalImages: [earrings3, earrings1]
  },
  {
    id: 'e1',
    name: 'Daily Charm Diamond Pendant',
    category: Category.DIAMOND,
    subCategory: 'Necklaces',
    price: 42000,
    image: necklace4,
    diamondCarat: '0.3ct',
    description: 'Minimalist 18K rose gold pendant for effortless everyday elegance.',
    isNewArrival: true,
    additionalImages: [necklace5, necklace4]
  },
  {
    id: 's1',
    name: 'Sterling Silver Peacock Platter',
    category: Category.SILVER,
    subCategory: 'Articles',
    price: 12500,
    image: necklace5,
    description: 'Pure 999 sterling silver platter featuring a majestic peacock design.',
    additionalImages: [necklace1, necklace2]
  },
  {
    id: 'gs1',
    name: 'Imperial Emerald Necklace',
    category: Category.GEMSTONE,
    subCategory: 'Necklaces',
    price: 385000,
    image: necklace3,
    description: 'Handpicked Zambian emeralds surrounded by brilliant-cut diamonds.',
    isNewArrival: true,
    additionalImages: [necklace8, necklace9]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Ananya S.',
    rating: 5,
    comment: 'The craftsmanship of the Kolkata filigree choker I bought is simply unmatched. It was the centerpiece of my wedding attire.',
    location: 'Ballygunge, Kolkata'
  },
  {
    id: 'r2',
    user: 'Rahul M.',
    rating: 5,
    comment: 'Exceptional service at the Park Street showroom. They guided me through certified diamonds with full transparency.',
    location: 'Salt Lake City, Kolkata'
  },
  {
    id: 'r3',
    user: 'Priyanka D.',
    rating: 5,
    comment: 'The AR Try-On feature is a game-changer. I could see exactly how the Jhumkas would look before visiting the boutique.',
    location: 'New Alipore, Kolkata'
  },
  {
    id: 'r4',
    user: 'Sourav G.',
    rating: 4,
    comment: 'Very professional team. Their gold exchange rates were the most honest I found in the city. High trust factor.',
    location: 'Howrah, WB'
  },
  {
    id: 'r5',
    user: 'Megha K.',
    rating: 5,
    comment: 'Aura captures the true soul of Bengal in their designs. My mother was overjoyed with the customized Polki set.',
    location: 'Jodhpur Park, Kolkata'
  }
];
