import React from 'react';
import { BackgroundModel } from './BackgroundModel';
import { SpaceBackground } from './SpaceBackground';

// Video sources remain the same
const videoSources = {
    about: '/videos/video1.mp4',
    programs: '/videos/video2.mp4',
    portfolio: '/videos/video3.mp4',
    events: '/videos/video4.mp4',
};

export const BackgroundController = ({ activeSection, scrollProgress }) => {
    // Determine if the space background should be visible
    const isSpaceVisible = activeSection === 'hero' || activeSection === 'footer';

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* --- Layer 1: Videos --- */}
            {Object.entries(videoSources).map(([key, src]) => (
                <div 
                    key={key} 
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        // Changed from opacity-90 to opacity-100
                        activeSection === key ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <video
                        src={src}
                        className="absolute inset-0 w-full h-full object-cover"
                        preload="auto"
                        muted
                        loop
                        playsInline
                        key={src} 
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}

            {/* --- Layer 2: Space Background --- */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    // Changed from opacity-90 to opacity-100
                    isSpaceVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <SpaceBackground />
            </div>                                      

            {/* --- Layer 3: 3D Hexagon Model --- */}
            <div className="absolute inset-0 z-10">
                <BackgroundModel scrollProgress={scrollProgress} />
            </div>

            {/* --- Layer 4: Padded Dark Overlay --- */}
            {/* Increased opacity from 70% to 80% for better content visibility */}
            {/* Corrected z-15 to z-[15] for proper Tailwind syntax */}
            <div className="absolute inset-0 z-[15] bg-background/80"></div>
        </div>
    );
};

