
import { Category, Product, Review } from './types';
import necklace1 from './assets/jewellery/necklace/nacklace (1).jpg';
import necklace2 from './assets/jewellery/necklace/nacklace (2).jpg';
import necklace3 from './assets/jewellery/necklace/nacklace (3).jpg';
import necklace4 from './assets/jewellery/necklace/nacklace (4).jpg';
import necklace5 from './assets/jewellery/necklace/nacklace (5).jpg';
import ring1 from './assets/jewellery/ring/ring (1).jpg';
import bangles1 from './assets/jewellery/bangles/bangles (1).jpg';
import earrings1 from './assets/jewellery/earrings/earrings (1).jpg';
import earrings2 from './assets/jewellery/earrings/earrings (2).jpg';
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
    arSupport: true,
    additionalImages: [
      necklace2,
      necklace3
    ]
  },
  {
    id: 'd1',
    name: 'Eternal Glow Diamond Ring',
    category: Category.DIAMOND,
    subCategory: 'Rings',
    price: 95000,
    image: ring1,
    diamondCarat: '1.2ct',
    description: 'A brilliant-cut certified solitaire diamond set in 18K white gold.',
    isNewArrival: true,
    arSupport: true
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
    isBestSeller: true
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
    arSupport: true
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
    arSupport: true
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
    isBestSeller: true
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
    arSupport: true
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
    arSupport: true
  },
  {
    id: 's1',
    name: 'Sterling Silver Peacock Platter',
    category: Category.SILVER,
    subCategory: 'Articles',
    price: 12500,
    image: necklace5,
    description: 'Pure 999 sterling silver platter featuring a majestic peacock design.',
  },
  {
    id: 'gs1',
    name: 'Imperial Emerald Necklace',
    category: Category.GEMSTONE,
    subCategory: 'Necklaces',
    price: 385000,
    image: necklace3,
    description: 'Handpicked Zambian emeralds surrounded by brilliant-cut diamonds.',
    isNewArrival: true
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
