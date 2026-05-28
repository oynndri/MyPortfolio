import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Award } from 'lucide-react';

const CVPreview = () => {
    return (
        <section id="cv" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-textmain">
                            <FileText className="text-primary" size={28} />
                            Resume / CV
                        </h2>
                        <p className="text-textmuted max-w-2xl text-sm leading-relaxed">
                            Software Engineering undergraduate with a 3.80 CGPA. Specialize in manual testing, TestRail, Jira, Selenium automation, and JMeter performance testing. Looking for a QA position to build robust, high-quality systems.
                        </p>
                        <div className="flex items-center gap-5 mt-6 border-t border-bordercol pt-5">
                            <div className="flex items-center gap-2 text-sm font-medium text-textmuted">
                                <Award className="text-amber-400" size={16} /> 3.80 / 4.00 CGPA
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-textmuted">
                                <FileText className="text-indigo-400" size={16} /> QA Specialization
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            download="Oynndrila_Singh_CV.pdf"
                            className="px-8 py-4 rounded-lg bg-primary hover:bg-primaryDark text-textmain font-semibold flex items-center gap-3 transition-colors shadow-lg shadow-primary/20"
                        >
                            <Download size={20} />
                            Download Full CV
                        </a>
                        <p className="text-xs text-textmuted font-medium text-center mt-3 uppercase tracking-wider">PDF Format</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CVPreview;
