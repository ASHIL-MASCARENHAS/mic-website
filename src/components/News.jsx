import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const newsItems = [
    {
        category: "Announcement",
        title: "MIC Opens Applications for Fall 2025 Incubator Cohort",
        date: "Sep 20, 2025",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop",
    },
    {
        category: "Startup Spotlight",
        title: "Portfolio company 'Healthify' secures $2M in seed funding",
        date: "Sep 15, 2025",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    },
];

const testimonials = [
    {
        quote: "The mentorship at MIC was a game-changer for our startup. We went from a rough idea to a funded company in under a year.",
        author: "Jane Doe",
        title: "CEO, InnovaTech",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop",
    },
];

export const News = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="news" className="relative min-h-screen flex items-center justify-center bg-transparent py-20 md:py-28">
            <AnimatedSection>
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* News Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-8">News & Updates</h2>
                            <div className="space-y-8">
                                {newsItems.map(item => (
                                    <div key={item.title} className="group flex flex-col sm:flex-row gap-4 bg-surface/50 p-4 rounded-lg hover:bg-surface transition-all duration-300">
                                        <div className="w-full sm:w-1/3 h-40 sm:h-auto rounded-md overflow-hidden">
                                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-primary">{item.category}</p>
                                            <h3 className="mt-1 text-lg font-bold text-slate-200 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="mt-2 text-sm text-slate-400">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Testimonials Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-8 mt-12 lg:mt-0">What Our Members Say</h2>
                            <div className="bg-surface p-8 rounded-lg shadow-lg">
                                {testimonials.map(item => (
                                    <div key={item.author}>
                                        <p className="text-slate-300 italic">"{item.quote}"</p>
                                        <div className="mt-6 flex items-center">
                                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                                <img src={item.imageUrl} alt={item.author} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-slate-200">{item.author}</p>
                                                <p className="text-sm text-primary">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
});
