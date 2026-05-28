import React from 'react';
import { motion } from 'framer-motion';
import { 
    CheckCircle2, Wrench, ClipboardList, Code2, Globe, 
    Play, Activity, Database, HelpCircle 
} from 'lucide-react';
import { 
    SiPostman, 
    SiSelenium, 
    SiGithub, 
    SiGooglechrome, 
    SiJira, 
    SiGit, 
    SiSwagger, 
    SiApachejmeter, 
    SiJavascript, 
    SiCplusplus, 
    SiPython,
    SiC
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    // Row 1: Testing Types (Static label, scrolling text pills)
    const testingTypes = [
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "UAT",
        "API Testing",
        "Performance Testing",
        "Exploratory Testing",
        "Manual Testing"
    ];
    const testingTypesCombined = [...testingTypes, ...testingTypes];

    // Row 2: Tools & Platforms (Static label, scrolling white rounded-square icons)
    const tools = [
        { icon: VscVscode, color: "#007ACC", name: "VS Code" },
        { icon: SiGooglechrome, color: "#4285F4", name: "Chrome" },
        { icon: SiSelenium, color: "#43B02A", name: "Selenium" },
        { icon: SiPostman, color: "#FF6C37", name: "Postman" },
        { icon: SiJira, color: "#0052CC", name: "Jira" },
        { icon: HelpCircle, color: "#4CAF50", name: "TestRail" }, // Green custom test icon representing TestRail
        { icon: SiApachejmeter, color: "#D22128", name: "JMeter" },
        { icon: SiGithub, color: "#181717", name: "GitHub" }
    ];
    const toolsCombined = [...tools, ...tools];

    // Row 3: Methodologies (Static label, scrolling text separated by purple dots)
    const methodologies = [
        "SDLC",
        "STLC",
        "Bug Life Cycle",
        "Test Planning",
        "Test Case Design",
        "Requirement Analysis",
        "Defect Management",
        "Agile / Scrum"
    ];
    const methodologiesCombined = [...methodologies, ...methodologies];

    // Row 4: Programming & Automation (Static label, scrolling white pills with logos + text)
    const programming = [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "SQL", icon: Database, color: "#00758F", isLucide: true },
        { name: "Selenium WebDriver", icon: SiSelenium, color: "#43B02A" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" }
    ];
    const programmingCombined = [...programming, ...programming];

    return (
        <section id="skills" className="pt-20 scroll-mt-20 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                {/* Heading Block */}
                <div className="mb-12">
                    <p className="text-textmuted text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                        <span className="w-6 h-[1.5px] bg-primary"></span> TECHNICAL SYSTEMS
                    </p>
                    <h2 className="text-3xl font-bold text-textmain mb-3">
                        Technical Skills
                    </h2>
                    <p className="text-textmuted text-sm max-w-2xl">
                        Technologies, tools, and methodologies I use to deliver quality software.
                    </p>
                </div>

                {/* Subtle Indigo/Purple glowing divider line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-primary/40 via-secondary/20 to-transparent mb-12 mt-4"></div>

                {/* Skills Row Cards Container */}
                <div className="flex flex-col gap-5">
                    
                    {/* Row 1: Testing Types */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-5 flex items-center gap-6 shadow-sm">
                        {/* Left Column Label */}
                        <div className="w-56 shrink-0 flex items-center gap-3.5 text-textmain text-sm font-bold tracking-wider uppercase">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <span>Testing Types</span>
                        </div>
                        {/* Vertical Divider */}
                        <div className="h-8 w-[1px] bg-bordercol/30 shrink-0"></div>
                        {/* Right Column Scrolling Marquee */}
                        <div className="relative flex-1 overflow-hidden py-1">
                            {/* Lateral fading shadow overlay gradients */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            
                            <div className="flex w-max animate-marquee gap-5">
                                {testingTypesCombined.map((type, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-5 py-2.5 rounded-full border border-bordercol/60 bg-cardbg/20 text-textmuted text-sm hover:text-textmain hover:border-primary/50 transition-colors duration-300 cursor-default"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Tools & Platforms */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-5 flex items-center gap-6 shadow-sm">
                        {/* Left Column Label */}
                        <div className="w-56 shrink-0 flex items-center gap-3.5 text-textmain text-sm font-bold tracking-wider uppercase">
                            <Wrench size={16} className="text-secondary" />
                            <span>Tools & Platforms</span>
                        </div>
                        {/* Vertical Divider */}
                        <div className="h-8 w-[1px] bg-bordercol/30 shrink-0"></div>
                        {/* Right Column Scrolling Marquee */}
                        <div className="relative flex-1 overflow-hidden py-1">
                            {/* Lateral fading shadow overlay gradients */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            
                            <div className="flex w-max animate-marquee gap-5">
                                {toolsCombined.map((tool, idx) => {
                                    const IconComponent = tool.icon;
                                    return (
                                        <div 
                                            key={idx}
                                            title={tool.name}
                                            className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer shrink-0"
                                        >
                                            <IconComponent size={22} style={{ color: tool.color }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Methodologies */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-5 flex items-center gap-6 shadow-sm">
                        {/* Left Column Label */}
                        <div className="w-56 shrink-0 flex items-center gap-3.5 text-textmain text-sm font-bold tracking-wider uppercase">
                            <ClipboardList size={16} className="text-secondary" />
                            <span>Methodologies</span>
                        </div>
                        {/* Vertical Divider */}
                        <div className="h-8 w-[1px] bg-bordercol/30 shrink-0"></div>
                        {/* Right Column Scrolling Marquee */}
                        <div className="relative flex-1 overflow-hidden py-1.5">
                            {/* Lateral fading shadow overlay gradients */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            
                            <div className="flex w-max animate-marquee gap-8 items-center">
                                {methodologiesCombined.map((method, idx) => (
                                    <div key={idx} className="flex items-center gap-8 text-textmuted text-[14.5px] font-medium hover:text-textmain transition-colors duration-300 cursor-default">
                                        <span>{method}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/80 shrink-0"></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Programming & Auto */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-5 flex items-center gap-6 shadow-sm">
                        {/* Left Column Label */}
                        <div className="w-56 shrink-0 flex items-center gap-3.5 text-textmain text-sm font-bold tracking-wider uppercase">
                            <Code2 size={16} className="text-secondary" />
                            <span>Programming & Auto</span>
                        </div>
                        {/* Vertical Divider */}
                        <div className="h-8 w-[1px] bg-bordercol/30 shrink-0"></div>
                        {/* Right Column Scrolling Marquee */}
                        <div className="relative flex-1 overflow-hidden py-1">
                            {/* Lateral fading shadow overlay gradients */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
                            
                            <div className="flex w-max animate-marquee gap-5">
                                {programmingCombined.map((prog, idx) => {
                                    const IconComponent = prog.icon;
                                    return (
                                        <div 
                                            key={idx}
                                            className="flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4.5 py-2.5 rounded-xl shadow-md hover:scale-102 transition-all duration-300 cursor-default shrink-0"
                                        >
                                            <IconComponent size={16} style={{ color: prog.color }} />
                                            <span className="text-[13px] tracking-wide text-slate-800">{prog.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
