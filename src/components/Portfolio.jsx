import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const portfolio = [
    { 
      name: "InnovaTech", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-24 w-24 rounded-full border-2 border-background group-hover:border-primary transition-colors"><g fill="#1F2937"><rect width="100" height="100" rx="50" fill="#1F2937" /><path fill="#F58B33" d="M50 25l-15 15h10v20h10V40h10z M50 75l15-15h-10V40h-10v20H35z" /></g></svg>
      ), 
      description: "AI-driven solutions for logistics." 
    },
    { 
      name: "Healthify", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-24 w-24 rounded-full border-2 border-background group-hover:border-primary transition-colors"><g fill="#1F2937"><rect width="100" height="100" rx="50" fill="#1F2937" /><path fill="#E5E7EB" d="M50 25a25 25 0 0117.68 42.68L50 85.36l-17.68-17.68A25 25 0 0150 25zm0 10a5 5 0 00-5 5v10h10V40a5 5 0 00-5-5z" /></g></svg>
      ), 
      description: "Personalized healthcare platform." 
    },
    { 
      name: "EduVerse", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-24 w-24 rounded-full border-2 border-background group-hover:border-primary transition-colors"><g fill="#1F2937"><rect width="100" height="100" rx="50" fill="#1F2937" /><path fill="#C62128" d="M25 50a25 25 0 0125-25v50a25 25 0 01-25-25zm50 0a25 25 0 00-25 25V25a25 25 0 0025 25z" /></g></svg>
      ), 
      description: "Immersive learning experiences." 
    },
    { 
      name: "GreenShift", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-24 w-24 rounded-full border-2 border-background group-hover:border-primary transition-colors"><g fill="#1F2937"><rect width="100" height="100" rx="50" fill="#1F2937" /><path fill="#E5E7EB" d="M50 25c-8.3 0-15 6.7-15 15 0 5.5 3 10.2 7.2 12.8L50 75l7.8-22.2c4.2-2.6 7.2-7.3 7.2-12.8 0-8.3-6.7-15-15-15z" /></g></svg>
      ), 
      description: "Sustainable energy solutions." 
    },
];

const Portfolio = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="portfolio" className="relative min-h-[150vh] flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">Our Portfolio</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A selection of innovative startups nurtured at MIC.</p>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                        {portfolio.map(startup => (
                            <div key={startup.name} className="flex flex-col items-center justify-center p-4 rounded-lg group">
                                {startup.logo}
                                <h4 className="mt-4 font-display font-semibold text-slate-200">{startup.name}</h4>
                                <p className="text-sm text-slate-500 text-center">{startup.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
});

export { Portfolio };

