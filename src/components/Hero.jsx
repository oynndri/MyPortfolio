import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TYPING_WORDS = ["Junior QA Engineer", "Software Tester", "SQA Intern"];

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = TYPING_WORDS[wordIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && typedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        } else if (isDeleting && typedText === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
            return;
        }

        const timeout = setTimeout(() => {
            setTypedText(currentWord.substring(0, typedText.length + (isDeleting ? -1 : 1)));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, wordIndex]);

    return (
        <section id="home" className="flex flex-col items-center pt-12 pb-12 relative w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-6 w-full max-w-4xl mx-auto"
            >
                {/* Centered Circular Avatar with sleek primary border */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary bg-black shadow-xl mb-4 relative flex items-center justify-center">
                    <img
                        src="/profile.jpeg"
                        alt="Oynndrila Singh Purkayestha"
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    {/* Fallback avatar if no image found */}
                    <div className="absolute inset-0 bg-cardbg hidden flex-col items-center justify-center text-textmuted text-sm">
                        Missing
                    </div>
                </div>

                {/* Centered Name */}
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-textmain tracking-tight uppercase px-4">
                    Oynndrila Singh Purkayestha
                </h1>

                {/* Typing Subtitle line */}
                <div className="text-lg md:text-xl font-medium text-textmuted">
                    {typedText}<span className="animate-pulse text-textmain ml-[2px]">|</span>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap justify-center items-center gap-5 pt-4">
                    {/* Premium Download CV Button */}
                    <a 
                        href="/resume.pdf" 
                        download="Oynndrila_Singh_CV.pdf" 
                        className="group relative px-6 py-3 rounded-xl bg-primary text-textmain font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Download CV
                    </a>

                    {/* Secondary Hire Me Button */}
                    <a 
                        href="#contact" 
                        className="px-6 py-3 rounded-xl border-2 border-bordercol hover:border-primary bg-cardbg/50 hover:bg-cardbg text-textmain font-bold flex items-center gap-2 transition-all duration-300 shadow-sm"
                    >
                        <Mail size={18} />
                        Hire Me
                    </a>
                </div>

                {/* Circular Social Icons */}
                <div className="flex items-center justify-center gap-4 pt-4">
                    <a href="https://github.com/oynndri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bordercol bg-cardbg/50 flex flex-col items-center justify-center text-textmuted hover:text-primary transition-colors">
                        <FaGithub size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/oynndrila-singh-purkayestha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bordercol bg-cardbg/50 flex flex-col items-center justify-center text-textmuted hover:text-primary transition-colors">
                        <FaLinkedin size={16} />
                    </a>
                    <a href="mailto:oynndrilapurkayestha@gmail.com" className="w-10 h-10 rounded-full border border-bordercol bg-cardbg/50 flex flex-col items-center justify-center text-textmuted hover:text-primary transition-colors">
                        <Mail size={16} />
                    </a>
                    <a href="tel:+8801753798664" className="w-10 h-10 rounded-full border border-bordercol bg-cardbg/50 flex flex-col items-center justify-center text-textmuted hover:text-primary transition-colors">
                        <Phone size={16} />
                    </a>
                </div>
            </motion.div>

            {/* Active Status Badge (Bottom floating or static) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full flex justify-center mt-12 md:mt-16"
            >
                <div className="flex flex-col sm:flex-row items-center gap-3 px-6 py-2.5 rounded-xl border border-bordercol bg-cardbg/80 backdrop-blur-sm text-sm font-medium text-textmuted">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs tracking-wide border border-emerald-500/20 uppercase font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        Active Status
                    </div>
                    <span className="text-xs sm:text-sm">Currently Open to Work &bull; QA Engineer &bull; QA Tester &bull; SQA Intern</span>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
