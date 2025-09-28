import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

// Key Change: Wrapped in React.forwardRef
export const Hero = React.forwardRef((props, ref) => {
  return (
    <AnimatedSection id="hero" ref={ref} className="h-screen flex items-center justify-center relative bg-transparent">
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-display font-extrabold text-slate-200 [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
                MIC<span className="text-primary">.</span>
            </h1>
            <div className="mt-6 text-2xl md:text-4xl font-display font-semibold text-slate-200 [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] min-h-[3.5rem] flex items-center justify-center">
                <div className="typing-container">
                    <span className="typing-text leading-normal">Where Innovation Begins.</span>
                </div>
            </div>

            {/* NEW: Added call-to-action buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#join" className="group inline-flex items-center justify-center px-8 py-3 w-48 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/20 hover:bg-opacity-80 transition-all duration-300">
                    Join Now
                </a>
                <a href="#about" className="group inline-flex items-center justify-center px-8 py-3 w-48 bg-surface/80 text-slate-200 font-semibold rounded-lg shadow-lg hover:bg-surface transition-all duration-300">
                    About Us
                </a>
            </div>

            {/* REMOVED: The descriptive paragraph at the bottom */}
        </div>
    </AnimatedSection>
  );
});
