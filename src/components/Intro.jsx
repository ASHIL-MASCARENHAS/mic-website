import React from 'react';

const ArrowRightIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> );

export const Intro = () => {
  return (
    <section id="intro" className="relative z-10 py-36 md:py-48 flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-200 [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            MIC<span className="text-primary">.</span>
        </h1>
        <div className="mt-6 text-2xl md:text-4xl font-semibold text-slate-200 [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] min-h-[3.5rem] flex items-center justify-center">
            <div className="typing-container">
                <span className="typing-text leading-normal">Where Innovation Begins.</span>
            </div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
            <a href="#join" className="group inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/20 hover:bg-secondary transition-all duration-300">
                Join Now
            </a>
            <a href="#about" className="group inline-flex items-center justify-center px-8 py-3 bg-surface text-slate-200 font-semibold rounded-lg shadow-lg hover:bg-slate-700 transition-all duration-300">
                About Us
            </a>
        </div>
      </div>
    </section>
  );
};

