import React from 'react';
import { motion } from 'framer-motion';
import { Quote, GraduationCap, Mail, Phone, ArrowUpRight } from 'lucide-react';

const REFERENCES = [
    {
        id: "ref-fayazunnesa",
        name: "Fayazunnesa Chowdhury",
        title: "Lecturer",
        department: "Department of Software Engineering",
        organization: "Daffodil International University, Savar",
        phone: "+8801737216620",
        email: "fayazunnesa.cse0405.c@diu.edu.bd",
        accent: "indigo",
        icon: GraduationCap,

    },
];

const accentStyles = {
    indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/25",
        hoverBorder: "hover:border-indigo-500/50",
        glow: "bg-indigo-500/5",
        iconBg: "bg-indigo-500/10",
        iconBorder: "border-indigo-500/30",
        quoteBg: "bg-indigo-500/5",
        quoteBorder: "border-indigo-500/15",
        ringColor: "ring-indigo-500/20",
    },
    emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/25",
        hoverBorder: "hover:border-emerald-500/50",
        glow: "bg-emerald-500/5",
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-500/30",
        quoteBg: "bg-emerald-500/5",
        quoteBorder: "border-emerald-500/15",
        ringColor: "ring-emerald-500/20",
    },
    purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/25",
        hoverBorder: "hover:border-purple-500/50",
        glow: "bg-purple-500/5",
        iconBg: "bg-purple-500/10",
        iconBorder: "border-purple-500/30",
        quoteBg: "bg-purple-500/5",
        quoteBorder: "border-purple-500/15",
        ringColor: "ring-purple-500/20",
    },
};

const Testimonials = () => {
    return (
        <section id="references" className="pt-20 scroll-mt-20">
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
                        <span className="w-6 h-[1.5px] bg-primary"></span> TRUSTED BY
                    </p>
                    <h2 className="text-3xl font-bold text-textmain mb-3">
                        References
                    </h2>
                    <p className="text-textmuted text-sm max-w-2xl">
                        Professional and academic references who can vouch for my skills, work ethic, and dedication to my work.
                    </p>
                </div>

                {/* References Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {REFERENCES.map((ref, index) => {
                        const colors = accentStyles[ref.accent];
                        const IconComponent = ref.icon;

                        return (
                            <motion.div
                                key={ref.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`glass-card rounded-2xl border border-bordercol/60 ${colors.hoverBorder} transition-all duration-500 relative overflow-hidden group`}
                            >
                                {/* Subtle corner glow on hover */}
                                <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full ${colors.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                                <div className={`absolute -left-16 -bottom-16 w-40 h-40 rounded-full ${colors.glow} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}></div>

                                <div className="p-6 md:p-8 relative z-10">
                                    {/* Reference Badge */}
                                    <div className="flex items-start justify-end mb-6">
                                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} uppercase tracking-wider`}>
                                            Academic Reference
                                        </span>
                                    </div>

                                    {/* Reference Person Info */}
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                        <div className="flex items-start gap-4">
                                            {/* Avatar Circle with Icon */}
                                            <div className={`w-14 h-14 rounded-full ${colors.iconBg} border-2 ${colors.iconBorder} flex items-center justify-center shrink-0 ring-4 ${colors.ringColor}`}>
                                                <IconComponent className={`w-6 h-6 ${colors.text}`} />
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-bold text-textmain group-hover:text-primary transition-colors duration-300">
                                                    {ref.name}
                                                </h3>
                                                <p className={`text-sm font-semibold ${colors.text} mb-1`}>
                                                    {ref.title}
                                                </p>
                                                <p className="text-xs text-textmuted leading-relaxed">
                                                    {ref.department}
                                                </p>
                                                <p className="text-xs text-textmuted">
                                                    {ref.organization}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact Links */}
                                        <div className="flex flex-col gap-2 sm:items-end">
                                            <a
                                                href={`mailto:${ref.email}`}
                                                className="inline-flex items-center gap-2 text-xs text-textmuted hover:text-primary transition-colors duration-300 group/link"
                                            >
                                                <Mail size={13} className="text-primary/70" />
                                                <span className="font-medium">{ref.email}</span>
                                                <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                                            </a>
                                            <a
                                                href={`tel:${ref.phone}`}
                                                className="inline-flex items-center gap-2 text-xs text-textmuted hover:text-primary transition-colors duration-300 group/link"
                                            >
                                                <Phone size={13} className="text-primary/70" />
                                                <span className="font-medium">{ref.phone}</span>
                                                <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


            </motion.div>
        </section>
    );
};

export default Testimonials;
