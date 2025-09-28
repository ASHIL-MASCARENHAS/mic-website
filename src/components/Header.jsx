import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const XIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        const handleScroll = () => { 
            setScrolled(scrollContainer.scrollTop > 50);
        };
        
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated navLinks to remove "join"
    const navLinks = ["about", "programs", "portfolio", "events", "news", "contact"];
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-lg shadow-2xl py-2' : 'py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#hero" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </a>
                <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {navLinks.map(link => (
                        <a href={`#${link === 'contact' ? 'footer' : link}`} key={link} className="capitalize text-sm lg:text-base text-slate-300 hover:text-primary transition-colors duration-300">{link}</a>
                    ))}
                </nav>
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 z-10">
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            <div className={`md:hidden fixed inset-0 bg-surface/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                    {navLinks.map(link => (
                        <a 
                            href={`#${link === 'contact' ? 'footer' : link}`} 
                            key={link} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="block py-4 text-2xl font-semibold capitalize text-slate-300 hover:text-primary"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};