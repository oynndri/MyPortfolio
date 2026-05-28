import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulates a smooth, professional loading sequence taking ~1.8 seconds to complete
        const duration = 1800; // ms
        const intervalTime = 30; // ms
        const step = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    // Add a tiny delay at 100% for smooth visual payoff
                    setTimeout(() => {
                        onComplete();
                    }, 200);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                y: -50,
                transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }
            }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center selection:bg-transparent"
        >
            <div className="flex flex-col items-center justify-center max-w-md px-6 select-none">
                
                {/* Glowing tracked uppercase name matching the mockup */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-base md:text-lg font-bold tracking-[0.3em] text-white uppercase text-center mb-6 drop-shadow-[0_0_12px_rgba(129,140,248,0.3)] pr-[-0.3em]"
                >
                    Oynndrila Singh Purkayestha
                </motion.h1>

                {/* Progress bar outer track */}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-56 md:w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden relative mb-4"
                >
                    {/* Progress bar gradient fill */}
                    <div 
                        className="h-full bg-gradient-to-r from-primary via-secondary to-[#818cf8] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(129,140,248,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </motion.div>

                {/* Tagline aligned precisely like the mockup */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[9px] font-bold tracking-[0.25em] text-slate-500 uppercase text-center pr-[-0.25em]"
                >
                    QUALITY ASSURANCE &bull; PRECISION TESTING
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Preloader;
