import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Calendar, Edit3,
    Play, Bug, RefreshCw,
    CheckCircle, ShieldCheck
} from 'lucide-react';

const WORKFLOW_STEPS = [
    {
        id: "01",
        title: "Requirement Analysis",
        description: "Reviewing software specs and functional designs to extract test scenarios, identify ambiguities, and ensure testability.",
        icon: FileText,
        pos: { x: 25, y: 40 } // lg positioning percentages
    },
    {
        id: "02",
        title: "Test Planning",
        description: "Formulating test strategy, scoping, resource allocation, and creating risk assessments and test schedules.",
        icon: Calendar,
        pos: { x: 50, y: 20 }
    },
    {
        id: "03",
        title: "Test Case Design",
        description: "Writing detailed test steps, positive/negative assertions, and mapping traceability to business requirements.",
        icon: Edit3,
        pos: { x: 75, y: 40 }
    },
    {
        id: "04",
        title: "Execution",
        description: "Running automated scripting scripts, triggering API requests, and performing manual validation against expected criteria.",
        icon: Play,
        pos: { x: 82, y: 65 }
    },
    {
        id: "05",
        title: "Bug Reporting",
        description: "Filing comprehensive bug logs with dynamic steps, screenshots, console logs, and linking to developers.",
        icon: Bug,
        pos: { x: 65, y: 90 }
    },
    {
        id: "06",
        title: "Regression",
        description: "Re-running full automation suites and testing surrounding modules to ensure fixes have not broken existing behaviors.",
        icon: RefreshCw,
        pos: { x: 35, y: 90 }
    },
    {
        id: "07",
        title: "Validation",
        description: "Final verification of production readiness, formal sign-off reports, and cross-browser environments testing.",
        icon: CheckCircle,
        pos: { x: 18, y: 65 }
    }
];

const Workflow = () => {
    return (
        <section id="operations" className="pt-20 scroll-mt-20 relative px-2">

            <div className="mb-12 relative z-10">
                <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-3 font-semibold">
                    <span className="w-5 h-[1px] bg-gray-500"></span> OPERATIONS
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white relative inline-block pb-4 tracking-tight">
                    QA Process Workflow
                    {/* The purple underline matching the image extending outward */}
                    <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-purple-500/10 w-[150%] max-w-[400px]"></div>
                </h2>
            </div>

            {/* Mobile & Tablet Fallback List View */}
            <div className="lg:hidden flex flex-col gap-6 relative z-10 mt-12">
                <div className="bg-[#111116] border border-purple-500/30 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                    <ShieldCheck size={48} className="text-purple-500 mb-3" />
                    <h3 className="font-bold text-white text-lg tracking-widest uppercase">QA Core</h3>
                    <p className="text-sm text-gray-400 mt-2">Centralized Quality Assurance Ecosystem</p>
                </div>

                {WORKFLOW_STEPS.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.id} className="relative bg-[#0b0b0e] border border-[#22222a] rounded-xl p-6 shadow-sm">
                            <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-[11px] font-bold text-white border-[3px] border-[#0a0a0c]">
                                {step.id}
                            </div>
                            <div className="flex items-center gap-3 mb-3 mt-1">
                                <div className="text-purple-400"><Icon size={18} /></div>
                                <h4 className="text-white font-bold text-[15px]">{step.title}</h4>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Interactive Graph View */}
            <div className="hidden lg:block relative w-full h-[900px] mt-8 select-none">

                {/* Embedded Faint CSS Grid Background */}
                <div
                    className="absolute inset-[0] left-[-20%] right-[-20%] w-[140%] h-[120%] -top-[10%] pointer-events-none z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)'
                    }}
                ></div>

                {/* SVG Connector Lines */}
                <motion.svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <defs>
                        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>

                    {/* Perimeter Lines */}
                    {WORKFLOW_STEPS.map((step, idx) => {
                        const nextStep = WORKFLOW_STEPS[(idx + 1) % WORKFLOW_STEPS.length];
                        return (
                            <motion.line
                                key={`peri-${idx}`}
                                x1={`${step.pos.x}%`}
                                y1={`${step.pos.y}%`}
                                x2={`${nextStep.pos.x}%`}
                                y2={`${nextStep.pos.y}%`}
                                stroke="rgba(168, 85, 247, 0.5)"
                                strokeWidth="1.5"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: { duration: 1.5, delay: idx * 0.2, ease: "easeInOut" }
                                    }
                                }}
                            />
                        );
                    })}

                    {/* Lines specifically connecting outer nodes to the center */}
                    {WORKFLOW_STEPS.map((step, idx) => (
                        <motion.line
                            key={`center-${idx}`}
                            x1="50%"
                            y1="50%"
                            x2={`${step.pos.x}%`}
                            y2={`${step.pos.y}%`}
                            stroke="rgba(168, 85, 247, 0.3)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 1.2, delay: 1 + (idx * 0.1), ease: "easeOut" }
                                }
                            }}
                        />
                    ))}
                </motion.svg>

                {/* Central Core Node */}
                <div
                    className="absolute top-1/2 left-1/2 z-10 flex flex-col items-center justify-center pointer-events-none"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <motion.div
                        className="relative flex flex-col items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {/* Animated concentric rings */}
                        <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite] border-dashed"></div>
                        <div className="absolute w-[140px] h-[140px] rounded-full border border-purple-500/30">
                            {/* Orbiting particle */}
                            <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-[spin_3s_linear_infinite]" style={{ transformOrigin: "71px 0" }}></div>
                        </div>
                        <div className="absolute w-[100px] h-[100px] rounded-full border border-purple-500/50"></div>

                        <div className="relative w-[72px] h-[72px] rounded-full bg-[#0a0a0f] border-2 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.5)] flex flex-col items-center justify-center text-purple-400 z-20">
                            <ShieldCheck size={26} className="mb-1" strokeWidth={1.5} />
                            <span className="text-[7px] font-bold tracking-widest uppercase text-white">QA CORE</span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Step Cards */}
                {WORKFLOW_STEPS.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={step.id}
                            className="absolute pointer-events-none z-20"
                            style={{
                                left: `${step.pos.x}%`,
                                top: `${step.pos.y}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <motion.div
                                className="w-[280px] bg-[#0c0c10] border border-[#262130] rounded-xl p-5 shadow-2xl relative pointer-events-auto group hover:border-purple-500/40 transition-colors"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1, type: "spring", bounce: 0.3 }}
                            >
                                {/* Circle Badge overlapping border */}
                                <div className="absolute -top-[14px] left-[20px] w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white border-[3px] border-[#0c0c10] shadow-[0_0_10px_rgba(147,51,234,0.4)]">
                                    {step.id}
                                </div>

                                <div className="flex items-center gap-3 mb-3 mt-1">
                                    <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                                        <Icon size={16} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-white font-bold text-[14px] tracking-wide">{step.title}</h4>
                                </div>
                                <p className="text-[12px] text-gray-400 leading-relaxed font-normal">
                                    {step.description}
                                </p>
                            </motion.div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default Workflow;
