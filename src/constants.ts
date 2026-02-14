
import { Category, Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'g1',
    name: 'Royal Kolkata Filigree Choker',
    category: Category.GOLD,
    subCategory: 'Necklaces',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    karat: '22K',
    weight: '32.5g',
    description: 'Exquisite handcrafted gold filigree work reflecting the rich heritage of Kolkata artisans.',
    isBestSeller: true,
    arSupport: true,
    additionalImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616151475510-9993309a489f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'd1',
    name: 'Eternal Glow Diamond Ring',
    category: Category.DIAMOND,
    subCategory: 'Rings',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1603561591411-0e7041f02c63?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1598560912005-59a0d5c1a412?auto=format&fit=crop&q=80&w=400',
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
    image: 'https://images.unsplash.com/photo-1584305323473-d674ede008f1?auto=format&fit=crop&q=80&w=800',
    description: 'Pure 999 sterling silver platter featuring a majestic peacock design.',
  },
  {
    id: 'gs1',
    name: 'Imperial Emerald Necklace',
    category: Category.GEMSTONE,
    subCategory: 'Necklaces',
    price: 385000,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800',
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
