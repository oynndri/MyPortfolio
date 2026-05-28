import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const NAV_LINKS = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full mt-28 relative overflow-hidden">
            {/* Top gradient divider line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            {/* Ambient glow effects */}
            <div className="absolute left-1/2 -top-32 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/3 blur-[100px] pointer-events-none"></div>
            <div className="absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-indigo-600/3 blur-[80px] pointer-events-none"></div>
            <div className="absolute -right-20 bottom-0 w-64 h-64 rounded-full bg-purple-600/3 blur-[80px] pointer-events-none"></div>

            <div className="bg-[#060a12]/80 backdrop-blur-xl pt-16 pb-8">
                <div className="container mx-auto px-6 max-w-5xl relative z-10">

                    {/* Main Footer Content */}
                    <div className="text-center space-y-8">

                        {/* Brand Name */}
                        <div>
                            <h3 className="text-2xl font-bold text-textmain tracking-tight">
                                Oynndrila Singh Purkayestha
                                <span className="text-primary">.</span>
                            </h3>
                            <p className="text-xs text-textmuted mt-2 tracking-wide uppercase">
                                Quality Assurance Engineer • Software Tester
                            </p>
                        </div>

                        {/* Navigation Links - Inline */}
                        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {NAV_LINKS.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="text-xs text-textmuted hover:text-primary transition-colors duration-300 font-medium tracking-wide uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/oynndrila-singh-purkayestha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-bordercol/60 bg-white/[0.02] flex items-center justify-center text-textmuted hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:shadow-lg hover:shadow-[#0a66c2]/10 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={16} />
                            </a>
                            <a
                                href="https://github.com/oynndri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-bordercol/60 bg-white/[0.02] flex items-center justify-center text-textmuted hover:text-white hover:border-white/30 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a
                                href="mailto:oynndrilapurkayestha@gmail.com"
                                className="w-10 h-10 rounded-full border border-bordercol/60 bg-white/[0.02] flex items-center justify-center text-textmuted hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-6 border-t border-bordercol/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                            <p className="text-[11px] text-textmuted/60 tracking-wide">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>

                            <p className="text-[11px] text-textmuted/60 tracking-wide flex items-center gap-1.5">
                                Developed by
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-primary bg-clip-text text-transparent font-semibold">
                                    Oynndrila Singh
                                </span>
                            </p>

                            {/* Back to top */}
                            <button
                                onClick={scrollToTop}
                                className="text-[11px] text-textmuted/60 hover:text-primary flex items-center gap-1 transition-colors duration-300 group"
                            >
                                Back to top
                                <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
