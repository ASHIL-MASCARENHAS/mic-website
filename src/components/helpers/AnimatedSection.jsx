import React, { useState, useRef, useEffect } from 'react';

const useOnScreen = (options) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return [ref, isVisible];
};


// Key Change: Wrapped the component in React.forwardRef
export const AnimatedSection = React.forwardRef(({ children, className, id }, ref) => {
    const [internalRef, isVisible] = useOnScreen({ threshold: 0.1 });

    // This allows us to use both the observer ref and the forwarded ref
    const combinedRef = (node) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };

    return (
        <div 
            id={id} 
            ref={combinedRef} 
            className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
});
