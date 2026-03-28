import React, { useEffect, useRef, useState, Suspense } from 'react';

export const SectionPlaceholder = () => (
    <div className="w-full py-16 flex items-center justify-center bg-luxury-bg-primary dark:bg-luxury-dark-primary">
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
);

export const LazySection: React.FC<{ children: React.ReactNode; rootMargin?: string }> = ({
    children,
    rootMargin = '300px',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref}>
            {isVisible ? (
                <Suspense fallback={<SectionPlaceholder />}>{children}</Suspense>
            ) : (
                <SectionPlaceholder />
            )}
        </div>
    );
};
