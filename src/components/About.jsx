import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

export const About = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className="relative min-h-screen flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">The Epicenter of Innovation at MAHE</h2>
                            <p className="mt-6 text-slate-400 leading-relaxed">
                                The MAHE Innovation Centre (MIC) is not just an incubator; it's a dynamic ecosystem where academia meets entrepreneurship. Our mission is to cultivate a thriving culture of innovation by providing students, faculty, and aspiring entrepreneurs with the resources, mentorship, and collaborative environment needed to transform groundbreaking ideas into real-world impact.
                            </p>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                We bridge the gap between concept and market, offering a structured pathway through ideation, validation, and acceleration.
                            </p>
                        </div>
                        <div className="hidden md:block aspect-square overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                                alt="A team of innovators brainstorming with sticky notes on a glass wall"
                                className="w-full h-full object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
});
