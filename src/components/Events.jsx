import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const events = [
    { name: "Innovate MAHE 2025", date: "Oct 15, 2025", type: "Hackathon" },
    { name: "Investor Pitch Day", date: "Nov 02, 2025", type: "Pitching" },
    { name: "AI & ML Workshop", date: "Nov 18, 2025", type: "Workshop" },
];

const Events = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="events" className="relative min-h-[150vh] flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-200">Upcoming Events</h2>
                        <div className="mt-12 relative border-l-2 border-surface">
                            <ul className="space-y-12">
                                {events.map((event) => (
                                    <li key={event.name} className="relative pl-8">
                                        <div className="absolute -left-2.5 top-1 h-5 w-5 bg-primary rounded-full border-4 border-background"></div>
                                        <div className="bg-surface p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300">
                                            <p className="font-semibold text-slate-200">{event.name}</p>
                                            <p className="text-sm text-slate-400 mt-1">{event.date}</p>
                                            <span className="text-sm font-medium bg-primary text-white px-3 py-1 rounded-full absolute top-4 right-4">{event.type}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
});

export { Events };

