import React from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, 
    Calendar,
    Award, 
    GraduationCap, 
    GitBranch, 
    Database, 
    ShieldCheck, 
    ArrowUpRight
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const CERTIFICATIONS = [
    {
        id: "ostad-career",
        year: "Feb 2025",
        title: "SQA Career Launchpad",
        company: "Ostad",
        iconName: "GraduationCap",
        accent: "indigo",
    },
    {
        id: "git-basics",
        year: "Aug 2024",
        title: "Git & GitHub Basics",
        company: "Self-Paced Learning",
        iconName: "GitBranch",
        accent: "purple",
    },
    {
        id: "sql-beginners",
        year: "Mar 2024",
        title: "SQL for Beginners",
        company: "Coursera",
        iconName: "Database",
        accent: "blue",
    },
    {
        id: "intro-testing",
        year: "Jan 2024",
        title: "Introduction to Software Testing",
        company: "Simplilearn SkillUp",
        iconName: "ShieldCheck",
        accent: "cyan",
    }
];

const accentMap = {
    indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/25",
        hoverBorder: "hover:border-indigo-500/50",
        glow: "bg-indigo-500/5",
        iconBg: "bg-indigo-500/10",
        iconBorder: "border-indigo-500/30",
    },
    purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/25",
        hoverBorder: "hover:border-purple-500/50",
        glow: "bg-purple-500/5",
        iconBg: "bg-purple-500/10",
        iconBorder: "border-purple-500/30",
    },
    blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/25",
        hoverBorder: "hover:border-blue-500/50",
        glow: "bg-blue-500/5",
        iconBg: "bg-blue-500/10",
        iconBorder: "border-blue-500/30",
    },
    cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/25",
        hoverBorder: "hover:border-cyan-500/50",
        glow: "bg-cyan-500/5",
        iconBg: "bg-cyan-500/10",
        iconBorder: "border-cyan-500/30",
    },
};

const Certifications = () => {
    const getIcon = (name, colorClass) => {
        const props = { className: `w-5 h-5 ${colorClass}` };
        switch(name) {
            case "GraduationCap": return <GraduationCap {...props} />;
            case "GitBranch": return <GitBranch {...props} />;
            case "Database": return <Database {...props} />;
            case "ShieldCheck": return <ShieldCheck {...props} />;
            default: return <Award {...props} />;
        }
    };

    return (
        <section id="certifications" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                {/* Heading Block */}
                <div className="mb-10">
                    <p className="text-textmuted text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                        <span className="w-6 h-[1.5px] bg-primary"></span> PROFESSIONAL TRAINING & EDUCATION
                    </p>
                    <h2 className="text-3xl font-bold text-textmain mb-3">
                        Certifications & Learning Journey
                    </h2>
                </div>

                {/* Clean Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const colors = accentMap[cert.accent];
                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`glass-card p-5 rounded-xl border border-bordercol/60 ${colors.hoverBorder} transition-all duration-400 relative overflow-hidden group cursor-default`}
                            >
                                {/* Subtle corner glow on hover */}
                                <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${colors.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                                <div className="flex items-start gap-4 relative z-10">
                                    {/* Icon */}
                                    <div className={`w-11 h-11 rounded-lg ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                        {getIcon(cert.iconName, colors.text)}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[15px] font-bold text-textmain group-hover:text-primary transition-colors duration-300 leading-snug mb-1">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-xs text-textmuted">
                                            <span className="flex items-center gap-1 font-medium">
                                                <Briefcase size={11} className="text-primary/70" />
                                                {cert.company}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-bordercol"></span>
                                            <span className="flex items-center gap-1 font-medium">
                                                <Calendar size={11} className="text-primary/70" />
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* LinkedIn CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 p-5 md:p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/35 hover:bg-indigo-500/8 transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto relative overflow-hidden group"
                >
                    <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>
                    
                    <div className="text-center sm:text-left">
                        <h3 className="text-sm font-bold text-textmain mb-1">
                            More credentials on LinkedIn
                        </h3>
                        <p className="text-xs text-textmuted leading-relaxed">
                            Additional SQA, automation & tech certificates verified on my profile.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/oynndrila-singh-purkayestha/details/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-500/30 bg-[#0a66c2]/10 text-indigo-400 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-[11px] cursor-pointer group/btn shrink-0"
                    >
                        <FaLinkedin size={14} />
                        View All
                        <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Certifications;

