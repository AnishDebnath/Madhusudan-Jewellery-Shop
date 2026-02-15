
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SearchCategory {
  title: string;
  keywords: string[];
}

const SEARCH_DATA: SearchCategory[] = [
  {
    title: "Popular Searches – Jewellery",
    keywords: ["Mangalsutra", "Necklace", "Gold Jewellery", "Diamond Jewellery", "Gold Rings", "Gold Bracelet", "Diamond Rings", "Gold Earring Design", "Diamond Necklace", "Ladies Gold Chain", "Gold Bangle", "Platinum Ring", "Gold Kada For Men", "Gold Nose Pin"]
  },
  {
    title: "Trending Gold Jewellery Searches",
    keywords: ["Gold Jewellery", "Gold Rings", "Gold Earrings", "Gold Pendants", "Gold Necklaces", "Gold Mangalsutras", "Gold Bangles", "Gold Chains for Men", "Dailywear Gold Earrings", "Pola Bangle", "Gold Bracelet", "Studs Earring in Gold", "Drop Earrings"]
  },
  {
    title: "Diamond Jewellery Search Trends",
    keywords: ["Diamond Jewellery", "Diamond Rings", "Diamond Earrings", "Diamond Pendants", "Diamond Necklaces", "Diamond Mangalsutras", "Diamond Bangles", "Diamond Bracelets"]
  },
  {
    title: "Men’s Jewellery Collection – Trending Now",
    keywords: ["Men's Diamond Earrings", "Men's Diamond Rings", "Men's Jewellery", "Rings for Men", "Men's Kada", "Cufflinks for Men", "Men's Gold Bracelet", "Gold Chain for Men", "Men's Gold Rings", "Men's Platinum Chain"]
  },
  {
    title: "Women’s Jewellery Collection – Popular Styles",
    keywords: ["Jewellery for Women", "Rings for Women", "Earrings for Women", "Bangles for Women", "Pendants for Women", "Bracelets for Women", "Necklaces for Women", "Noa Bangle Gold", "Sita Haar", "Gold Jhumka", "Maang Tika", "Gold Bala", "Kada", "Gold Nathiya", "Women's Gold Chain"]
  },
  {
    title: "Explore Jewellery for Every Occasion",
    keywords: ["Engagement Ring", "Gold Engagement Rings", "Diamond Engagement Rings", "Platinum Engagement Rings", "Gifts for Women", "Gifts for Men", "Sindoor Dani", "Gold Utensils", "10 gm Gold Coin", "9 Lakkha Haar", "3 Gram Gold Earrings"]
  }
];

const PopularSearches: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const slugify = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  return (
    <section className="bg-luxury-bg-secondary dark:bg-luxury-dark-secondary py-12 border-t border-luxury-bg-card dark:border-white/5 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-lg font-serif text-maroon-dominant dark:text-white mb-10 tracking-widest uppercase border-b border-luxury-bg-card dark:border-white/10 pb-5">
          Popular Searches
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {SEARCH_DATA.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xs font-black text-gold mb-5 uppercase tracking-[0.2em]">
                {category.title}
              </h3>
              <div className="flex flex-wrap items-center text-[11px] leading-7 text-luxury-text-light/70 dark:text-luxury-text-darkMuted/70 font-medium">
                {category.keywords.map((keyword, kIdx) => (
                  <React.Fragment key={kIdx}>
                    <a
                      href={`/jewellery/${slugify(keyword)}`}
                      className="hover:text-gold dark:hover:text-white transition-colors duration-300 py-1"
                    >
                      {keyword}
                    </a>
                    {kIdx < category.keywords.length - 1 && (
                      <span className="mx-2 text-luxury-bg-card dark:text-white/10">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-2">
          {SEARCH_DATA.map((category, idx) => (
            <div key={idx} className="border-b border-luxury-bg-card dark:border-white/5 last:border-0">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center py-5 text-left group"
                aria-expanded={openIndex === idx}
              >
                <h3 className="text-[10px] font-black text-maroon-dominant dark:text-white uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                {openIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-gold" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-luxury-text-light/40 dark:text-white/40" />
                )}
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap items-center text-[11px] leading-7 text-luxury-text-light/60 dark:text-luxury-text-darkMuted/60">
                  {category.keywords.map((keyword, kIdx) => (
                    <React.Fragment key={kIdx}>
                      <a
                        href={`/jewellery/${slugify(keyword)}`}
                        className="hover:text-maroon-dominant dark:hover:text-white transition-colors duration-200 py-1"
                      >
                        {keyword}
                      </a>
                      {kIdx < category.keywords.length - 1 && (
                        <span className="mx-2 text-luxury-bg-card dark:text-white/10">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
