import React from 'react';
import { Heart, Share2 } from 'lucide-react';

interface ProductGalleryProps {
  product: any;
  mainImage: string;
  setMainImage: (img: string) => void;
  onToggleWishlist: (id: string) => void;
  isWishlisted: boolean;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  product,
  mainImage,
  setMainImage,
  onToggleWishlist,
  isWishlisted
}) => (
  <div className="lg:w-1/2 flex flex-col md:flex-row gap-6 h-fit sticky top-[200px] lg:top-[220px]">
    <div className="hidden md:flex flex-col gap-4 w-24">
      <button
        className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${mainImage === product.image ? 'ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border border-transparent dark:border-white/10 opacity-70 hover:opacity-100'}`}
        onClick={() => setMainImage(product.image)}
      >
        <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className={`absolute inset-0 bg-black/10 transition-opacity ${mainImage === product.image ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
      </button>
      {product.additionalImages?.map((img: string, i: number) => (
        <button
          key={i}
          className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative group ${mainImage === img ? 'ring-2 ring-gold ring-offset-2 ring-offset-luxury-bg-primary dark:ring-offset-luxury-dark-primary' : 'border border-transparent dark:border-white/10 opacity-70 hover:opacity-100'}`}
          onClick={() => setMainImage(img)}
        >
          <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className={`absolute inset-0 bg-black/10 transition-opacity ${mainImage === img ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
        </button>
      ))}
    </div>
    <div className="flex-1 flex flex-col gap-6">
      <div className="aspect-[4/5] bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-3xl overflow-hidden relative group border border-transparent dark:border-white/5 shadow-2xl">
        <img src={mainImage} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-6 right-6 p-4 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 group/heart ${isWishlisted ? 'bg-gold text-white' : 'bg-white/10 hover:bg-gold text-white'}`}
        >
          <Heart className={`w-6 h-6 transition-colors ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
        <button className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-md hover:bg-gold text-white rounded-full shadow-lg transition-all hover:scale-110 border border-white/20 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100">
          <Share2 className="w-6 h-6 transition-colors" />
        </button>
      </div>

      {/* Mobile Thumbnails */}
      <div className="flex md:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button
          className={`min-w-[70px] aspect-square rounded-xl overflow-hidden relative ${mainImage === product.image ? 'ring-2 ring-gold' : 'opacity-60'}`}
          onClick={() => setMainImage(product.image)}
        >
          <img src={product.image} className="w-full h-full object-cover" />
        </button>
        {product.additionalImages?.map((img: string, i: number) => (
          <button
            key={i}
            className={`min-w-[70px] aspect-square rounded-xl overflow-hidden relative ${mainImage === img ? 'ring-2 ring-gold' : 'opacity-60'}`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ProductGallery;
