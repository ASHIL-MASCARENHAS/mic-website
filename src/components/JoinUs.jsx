import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const membershipTiers = [
    {
        name: "Student Innovator",
        price: "Free",
        features: ["Access to Workshops", "Community Network", "Monthly Newsletter"],
        primary: false,
    },
    {
        name: "Startup Incubatee",
        price: "By Application",
        features: ["Dedicated Mentorship", "Seed Funding Access", "Lab & Co-working Space", "Investor Network"],
        primary: true,
    },
    {
        name: "Corporate Partner",
        price: "Contact Us",
        features: ["Scout Talent", "Collaborate on R&D", "Sponsor Events"],
        primary: false,
    },
];

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const JoinUs = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="join" className="relative min-h-screen flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">Become a Part of MIC</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Choose the path that's right for you and join a vibrant community of innovators.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 items-stretch">
                        {membershipTiers.map(tier => (
                            <div key={tier.name} className={`flex flex-col bg-surface p-8 rounded-lg shadow-lg text-left transition-all duration-300 ${tier.primary ? 'border-2 border-primary shadow-primary/20' : 'border-2 border-transparent'}`}>
                                <h3 className="text-2xl font-display font-bold text-slate-100">{tier.name}</h3>
                                <p className="mt-2 text-3xl font-bold text-primary">{tier.price}</p>
                                <ul className="mt-6 space-y-4 flex-grow">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-center">
                                            <CheckIcon />
                                            <span className="ml-3 text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className={`mt-8 block text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${tier.primary ? 'bg-primary text-white hover:bg-opacity-80' : 'bg-slate-600/50 text-slate-200 hover:bg-slate-600'}`}>
                                    {tier.price === "Contact Us" ? "Contact Us" : "Get Started"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
});
