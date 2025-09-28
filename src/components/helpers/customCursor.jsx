import React, { useRef, useEffect } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            // Use requestAnimationFrame for performance, but update both elements to the exact same position
            requestAnimationFrame(() => {
                cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
                follower.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            });
        };
        
        const onHover = () => follower.classList.add('active');
        const onLeave = () => follower.classList.remove('active');

        window.addEventListener('mousemove', handleMouseMove);
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onHover);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onHover);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            ></div>
            <div 
                ref={followerRef} 
                className="cursor-follower fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 scale-100 opacity-50"
            ></div>
        </>
    );
};

