import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
    {
        title: "Reqres API Automation Suite",
        difficulty: "HARD",
        description: "Built a production-grade REST API automation suite using Postman and Newman CLI with auto-generated HTMLExtra reports. Automated Magic Link authentication flow with dynamic session token extraction and environment chaining. Validated CRUD operations and implemented negative testing for 403, 404, and 400 scenarios.",
        tags: ["Postman", "Newman", "Node.js", "HTMLExtra"],
        github: "https://github.com/oynndri/reqres_api_automation",
        image: "/mockups/api_automation.png"
    },
    {
        title: "Selenium UI Automation : SauceDemo & DemoQA",
        difficulty: "HARD",
        description: "Built automated UI testing suites implementing Page Object Model (POM) architecture. Automated login flows, product inventory, cart management, checkout system, and form validation processes.",
        tags: ["Selenium", "Java", "POM"],
        github: "https://github.com/oynndri/saucedemo_selenium_automation",
        image: "/mockups/selenium.png"
    },
    {
        title: "PriceWatch BD",
        difficulty: "HARD",
        description: "A comprehensive market pricing platform involving web scraping, robust database architecture, and performance management to track and visualize daily commodities prices.",
        tags: ["Laravel", "Scraping", "Web Automation"],
        github: "https://github.com/oynndri/pricewatch-bd",
        image: "/mockups/pricewatch.png"
    },
    {
        title: "Smart Home Security System",
        difficulty: "MEDIUM",
        description: "Hardware and software integration project focused on home security robotics. Implemented sensor-driven alert systems, automation loops, and physical security triggers using microcontrollers.",
        tags: ["Arduino", "Robotics", "C", "IoT"],
        github: "https://github.com/oynndri/smart-home-security-system-using-Arduino",
        image: "/mockups/smart_home.png"
    },
    {
        title: "Swagger Petstore API Automation Framework",
        difficulty: "MEDIUM",
        description: "Developed an API automation testing framework using Postman for the Swagger Petstore API. Created comprehensive test collections covering CRUD operations with data-driven testing and environment variables.",
        tags: ["Postman", "API Testing", "Swagger", "Automation"],
        github: "https://github.com/oynndri/swagger-petstore-api-test-automation-postman",
        image: "/mockups/swagger.png"
    }
];

const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case 'HARD': return 'text-red-500 border-red-500/20 bg-red-500/10';
        case 'MEDIUM': return 'text-orange-500 border-orange-500/20 bg-orange-500/10';
        case 'EASY': return 'text-green-500 border-green-500/20 bg-green-500/10';
        default: return 'text-textmuted border-bordercol bg-darkbg';
    }
};

const Projects = () => {
    return (
        <section id="projects" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12">
                    <p className="text-textmuted text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-textmuted"></span> PORTFOLIO
                    </p>
                    <h2 className="text-3xl font-bold text-textmain inline-block border-b border-primary/40 pb-3 pr-12">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="glass-card group flex flex-col h-full overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] border border-bordercol rounded-xl bg-cardbg">
                            {/* Thumbnail Image */}
                            <div className="w-full h-48 overflow-hidden relative border-b border-bordercol">
                                <div className="absolute inset-0 bg-gradient-to-t from-cardbg to-transparent opacity-60 z-10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute top-4 right-4 z-20 text-[10px] font-bold px-2 py-1 rounded-full border backdrop-blur-md ${getDifficultyColor(project.difficulty)}`}>
                                    {project.difficulty}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col relative z-20">
                                <h3 className="text-xl font-bold text-textmain mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-textmuted mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-bordercol/30 text-textmuted rounded-md border border-bordercol/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="pt-4 mt-auto border-t border-bordercol/50 flex justify-between items-center">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-primary font-medium transition-colors"
                                    >
                                        <FaGithub size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overarching bottom button */}
                <a
                    href="https://github.com/oynndri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-bordercol bg-cardbg hover:bg-bordercol/60 transition-colors text-textmain text-sm font-bold uppercase tracking-wide"
                >
                    <FaGithub size={18} /> View All My Projects On GitHub
                </a>
            </motion.div>
        </section>
    );
};

export default Projects;
