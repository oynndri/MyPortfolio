import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-textmain">
                    <span className="text-primary">01.</span> About Me
                </h2>

                <div className="glass-card p-8 mb-16">
                    <h3 className="text-lg font-semibold text-textmain mb-4 flex items-center gap-2">
                        <BookOpen className="text-primary" size={20} /> Professional Profile
                    </h3>
                    <p className="text-textmuted leading-relaxed text-sm">
                        I am a Software Engineering undergraduate with a keen interest in Software Quality Assurance (QA). I am seeking opportunities to apply my skills in manual testing, test case preparation, defect reporting, basic API testing, and performance testing.
                        <br /><br />
                        I enjoy solving complex problems, writing precise automation scripts, and ensuring robust application architectures.
                        <br /><br />
                        Experienced in on-site QA practices at OrbitSQ, Dhaka, specializing in API testing, core feature validation, and developer collaboration. 
                        <br /><br />
                        With a portfolio of 7 real-world projects (E-commerce, API, and Performance), I have designed and executed over 100+ manual test cases, ensuring end-to-end quality and seamless application performance.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="mb-8">
                        <p className="text-textmuted text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-textmuted"></span> EDUCATION
                        </p>
                        <h3 className="text-3xl font-bold text-textmain inline-block border-b border-primary/40 pb-3 pr-12">
                            Academic Background
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-cardbg border border-bordercol rounded-xl p-8 flex flex-col justify-between hover:bg-cardhover transition-colors">
                            <div>
                                <h4 className="text-textmain font-bold text-[17px] mb-5 leading-tight">BSc in Software Engineering</h4>
                                <p className="text-textmuted text-sm mb-5 leading-relaxed">Daffodil International University, Biruliya, Savar, Dhaka</p>
                                <p className="text-textmuted/60 text-xs font-semibold mb-8">Aug 2023 - Present (Ongoing)</p>
                            </div>
                            <div className="inline-flex bg-darkbg border border-bordercol rounded px-3 py-1.5 w-max items-center shadow-sm -mt-2">
                                <span className="text-[11px] font-bold text-textmain tracking-wide">CGPA: 3.80 / 4.00</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-cardbg border border-bordercol rounded-xl p-8 flex flex-col justify-between hover:bg-cardhover transition-colors">
                            <div>
                                <h4 className="text-textmain font-bold text-[17px] mb-5 leading-tight">Higher Secondary Certificate (HSC)</h4>
                                <p className="text-textmuted text-sm mb-5 leading-relaxed">Gazipur Govt. Mohila College, Gazipur</p>
                                <p className="text-textmuted/60 text-xs font-semibold mb-8">Jul 2019 - Dec 2021</p>
                            </div>
                            <div className="inline-flex bg-darkbg border border-bordercol rounded px-3 py-1.5 w-max items-center shadow-sm -mt-2">
                                <span className="text-[11px] font-bold text-textmain tracking-wide">GPA: 5.00 / 5.00</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-cardbg border border-bordercol rounded-xl p-8 flex flex-col justify-between hover:bg-cardhover transition-colors">
                            <div>
                                <h4 className="text-textmain font-bold text-[17px] mb-5 leading-tight">Secondary School Certificate (SSC)</h4>
                                <p className="text-textmuted text-sm mb-5 leading-relaxed">Joydebpur Govt. Girls High School, Gazipur</p>
                                <p className="text-textmuted/60 text-xs font-semibold mb-8">Jan 2014 - Feb 2019</p>
                            </div>
                            <div className="inline-flex bg-darkbg border border-bordercol rounded px-3 py-1.5 w-max items-center shadow-sm -mt-2">
                                <span className="text-[11px] font-bold text-textmain tracking-wide">GPA: 4.83 / 5.00</span>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
