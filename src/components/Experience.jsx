import React from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { Briefcase, Calendar, Award, CheckCircle2, ArrowUpRight, ShieldAlert, Cpu } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState("0");
    
    useEffect(() => {
        if (!inView) return;
        
        // Check if value has numbers
        const numMatch = value.match(/(\d+)/);
        if (!numMatch) {
            // Not a number (e.g. "Stable")
            setDisplayValue(value);
            return;
        }

        const targetNum = parseInt(numMatch[1], 10);
        const prefix = value.substring(0, numMatch.index);
        const suffix = value.substring(numMatch.index + numMatch[1].length);

        const controls = animate(0, targetNum, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (current) => {
                setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
            }
        });

        return () => controls.stop();
    }, [value, inView]);

    return <span ref={ref}>{displayValue}</span>;
};

const Experience = () => {
    const internshipDetails = {
        role: "Software QA Intern",
        company: "Orbitsq",
        duration: "2026",
        badge: "Certified SQA",
        description: "Successfully completed an intensive Software Quality Assurance internship and formal industry certification program. Actively collaborated in agile sprint cycles, designed automated regression scripts, and validated commercial software releases.",
        link: "https://orbitsq.com/verify-certificate/OSQ-INT-2026-ABWZG",
        skills: ["Manual Testing", "Regression Sweeps", "Defect Verification", "API Testing", "Agile Scrum"],
        metrics: [
            { label: "Defects Logged", value: "50+", desc: "Documented with detailed step-by-step reproduction flows", color: "text-emerald-400" },
            { label: "Test Case Coverage", value: "95%", desc: "Comprehensive functional & non-functional coverage", color: "text-indigo-400" },
            { label: "Agile Speed", value: "Stable", desc: "Fast release validation cycles within active sprints", color: "text-purple-400" }
        ],
        achievements: [
           "Executed manual testing on live web applications to ensure functionality, usability, and reliability.",
           "Created and maintained comprehensive test cases, test scenarios, and defect reports.",
           "Performed REST API testing with Postman and validated request-response workflows.",
           "Reported, tracked, and verified bugs throughout the software development lifecycle.",
           "Worked collaboratively with developers and QA team members in Agile sprint environments.",
           "Conducted regression testing following feature updates and bug fixes to maintain application stability."
        ]
    };

    return (
        <section id="experience" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                {/* Heading Block */}
                <div className="mb-12">
                    <p className="text-textmuted text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                        <span className="w-6 h-[1.5px] bg-primary"></span> INDUSTRY EXPERIENCE
                    </p>
                    <h2 className="text-3xl font-bold text-textmain mb-3">
                        Work Experience
                    </h2>
                </div>

                {/* Single High-End Work Experience Dashboard Card */}
                <div className="glass-card p-6 md:p-10 rounded-2xl border border-bordercol/80 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden group">
                    {/* Glowing background accent mesh */}
                    <div className="absolute -right-32 -top-32 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    {/* Card Header Area */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-bordercol/30 pb-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm uppercase tracking-wide">
                                    {internshipDetails.badge}
                                </span>
                                <span className="text-xs font-bold text-textmuted bg-cardbg/80 border border-bordercol/50 px-2.5 py-1 rounded-md flex items-center gap-1.5 uppercase">
                                    <Calendar size={12} className="text-primary" /> {internshipDetails.duration}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-textmain group-hover:text-primary transition-colors duration-300">
                                {internshipDetails.role}
                            </h3>
                            <div className="text-sm font-semibold text-textmuted uppercase tracking-wider mt-1 flex items-center gap-1.5">
                                <Briefcase size={14} className="text-primary" /> {internshipDetails.company}
                            </div>
                        </div>

                        {internshipDetails.link && (
                            <a 
                                href={internshipDetails.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm shadow-emerald-500/5 group/btn shrink-0 w-fit"
                            >
                                <Award size={14} />
                                Verify Internship Credentials
                                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                        )}
                    </div>

                    {/* Summary Paragraph */}
                    <p className="text-base text-textmuted leading-relaxed mb-8 max-w-4xl">
                        {internshipDetails.description}
                    </p>

                    {/* QA Metrics Panel Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        {internshipDetails.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="bg-[#0b0f19]/40 border border-bordercol/50 rounded-xl p-5 hover:border-bordercol transition-colors duration-300">
                                <div className={`text-3xl font-extrabold mb-1.5 ${metric.color}`}>
                                    <AnimatedCounter value={metric.value} />
                                </div>
                                <div className="text-xs font-bold uppercase text-textmain tracking-wider mb-1">
                                    {metric.label}
                                </div>
                                <div className="text-[11px] text-textmuted font-medium leading-relaxed">
                                    {metric.desc}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Core Contributions Check List */}
                    <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-textmain mb-4 flex items-center gap-2">
                            <ShieldAlert size={14} className="text-emerald-400" /> Key Internship Responsibilities & Impacts
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-textmuted">
                            {internshipDetails.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-3 bg-[#0b0f19]/20 p-3 rounded-lg border border-bordercol/10 hover:border-emerald-500/10 transition-all duration-300">
                                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{ach}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer Stack Tags */}
                    <div>
                        <h4 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-textmuted mb-3 flex items-center gap-1.5">
                            <Cpu size={12} className="text-primary" /> Core QA Tool Stack & Methodologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                            {internshipDetails.skills.map((skill, sIdx) => (
                                <span 
                                    key={sIdx} 
                                    className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
