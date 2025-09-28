import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const BulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const LabIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;

const programs = [
    { icon: <BulbIcon/>, title: "Pre-Incubation", description: "For early-stage ideas. We help you refine your concept, conduct market research, and build a viable business model through intensive workshops and expert guidance." },
    { icon: <RocketIcon/>, title: "Incubation Program", description: "For validated startups. Receive dedicated mentorship, access to our labs and co-working spaces, and strategic connections to our investor network to accelerate your growth." },
    { icon: <LabIcon/>, title: "Student Innovator Hub", description: "A vibrant, open platform for all MAHE students. Experiment with new technologies, collaborate on interdisciplinary projects, and turn your passion into a prototype." },
];

export const Programs = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="programs" className="relative min-h-screen flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">Our Core Programs</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">We offer structured programs to support innovators at every stage of their journey.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">{programs.map(program => (<div key={program.title} className="bg-surface p-8 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">{program.icon}<h3 className="text-xl font-display font-semibold text-slate-200">{program.title}</h3><p className="mt-3 text-slate-400">{program.description}</p></div>))}</div>
                </div>
            </AnimatedSection>
        </section>
    );
});
