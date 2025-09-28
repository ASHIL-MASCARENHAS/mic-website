import React, { useState, useEffect, useRef } from 'react';

export const useSectionObserver = (sectionIds) => {
    // Default to the first section or null if empty
    const [activeSection, setActiveSection] = useState(sectionIds[0] || null);
    
    // Use a ref to hold the refs for each section, preventing re-creation on re-renders
    const refs = useRef(
        sectionIds.reduce((acc, id) => {
            acc[id] = React.createRef();
            return acc;
        }, {})
    ).current;

    useEffect(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When a section is intersecting (visible), set it as active
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: scrollContainer, // Observe within the main scrolling container
                rootMargin: '0px 0px -50% 0px', // Trigger when the top of a section is at the vertical center of the viewport
                threshold: 0, 
            }
        );

        // Get the current DOM elements from the refs and observe them
        const currentRefs = Object.values(refs).map(ref => ref.current).filter(Boolean);
        currentRefs.forEach((ref) => observer.observe(ref));

        // Cleanup function to unobserve all elements when the component unmounts
        return () => {
            currentRefs.forEach((ref) => {
                if(ref) observer.unobserve(ref)
            });
        };
    }, [refs, sectionIds]); // Re-run the effect if the refs or sectionIds change

    return { activeSection, refs };
};