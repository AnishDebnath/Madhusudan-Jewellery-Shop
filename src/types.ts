
export enum Category {
  GOLD = 'Gold',
  DIAMOND = 'Diamond',
  BRIDAL = 'Bridal',
  CUSTOM = 'Custom',
  SILVER = 'Silver',
  GEMSTONE = 'Gemstone'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory: string;
  price: number;
  image: string;
  karat?: string;
  weight?: string;
  diamondCarat?: string;
  description: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  additionalImages?: string[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  location: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type PageView = 'home' | 'category' | 'pdp' | 'cart' | 'checkout' | 'wishlist' | 'about' | 'contact' | 'store-locator';

export interface AppState {
  currentView: PageView;
  selectedCategory?: Category | string;
  selectedProduct?: Product;
  cart: CartItem[];
  wishlist: string[]; // array of product IDs
}
