import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'References', href: '#references' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        setIsDark(document.documentElement.classList.contains('dark'));
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">

                {/* Top Left Layout */}
                <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                        <a href="#home" className="text-sm md:text-base font-bold tracking-widest text-textmain uppercase">
                            Oynndrila Singh Purkayestha
                        </a>
                        <p className="text-[10px] md:text-xs text-primary font-medium tracking-wider">
                            We don’t just find bugs—we improve experiences.
                        </p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-textmuted hover:text-textmain transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Actions Menu */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full border border-bordercol bg-cardbg flex items-center justify-center text-textmuted hover:text-textmain transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* Mobile Nav Toggle */}
                    <button
                        className="md:hidden text-textmuted hover:text-textmain"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-cardbg/95 backdrop-blur-md border-b border-bordercol flex flex-col items-center py-6 gap-6 md:hidden"
                    >
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-textmuted hover:text-textmain transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
