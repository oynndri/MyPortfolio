import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaFire, FaCalendarAlt, FaClock, FaCheckCircle, FaCodeBranch } from 'react-icons/fa';

const GithubActivity = () => {
    const [selectedYear, setSelectedYear] = useState('last');
    const [contributionsCount, setContributionsCount] = useState(81);

    // Custom theme for the calendar matching the slate theme
    const calendarTheme = {
        light: ['#181d2a', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#181d2a', '#0e4429', '#006d32', '#26a641', '#39d353']
    };

    // Callback to intercept calendar data and calculate the exact live contribution count
    const handleTransformData = (data) => {
        const total = data.reduce((sum, day) => sum + day.count, 0);
        setTimeout(() => {
            setContributionsCount(total);
        }, 0);
        return data;
    };

    // Dynamic button styling helper
    const getYearButtonStyle = (year) => {
        if (selectedYear === year) {
            return "px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm cursor-pointer hover:bg-emerald-500/20 transition-all duration-300 select-none outline-none";
        }
        return "hover:text-textmain cursor-pointer transition-colors duration-200 py-1.5 select-none outline-none";
    };

    return (
        <section id="github" className="pt-20 scroll-mt-20">
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
                        <span className="w-6 h-[1.5px] bg-primary"></span> OPEN SOURCE
                    </p>
                    <h2 className="text-3xl font-bold text-textmain mb-3">
                        GitHub Activity
                    </h2>
                </div>

                {/* Calendar Card */}
                <div className="bg-[#0b0f19]/60 border border-bordercol/80 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
                    {/* Header: Left stats, Right Selector buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-300">
                                <span className="text-emerald-400 font-extrabold text-xl">{contributionsCount}</span> contributions
                            </h3>
                        </div>
                        
                        {/* Selector Buttons */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-textmuted">
                            <button 
                                onClick={() => setSelectedYear('all')} 
                                className={getYearButtonStyle('all')}
                            >
                                Total Contributions
                            </button>
                            <button 
                                onClick={() => setSelectedYear('last')} 
                                className={getYearButtonStyle('last')}
                            >
                                Last Year
                            </button>
                            <button 
                                onClick={() => setSelectedYear(2026)} 
                                className={getYearButtonStyle(2026)}
                            >
                                2026
                            </button>
                            <button 
                                onClick={() => setSelectedYear(2025)} 
                                className={getYearButtonStyle(2025)}
                            >
                                2025
                            </button>
                            <button 
                                onClick={() => setSelectedYear(2024)} 
                                className={getYearButtonStyle(2024)}
                            >
                                2024
                            </button>
                        </div>
                    </div>

                    {/* Contribution Graph Center Subtitle */}
                    <div className="text-center text-sm font-semibold text-textmuted mb-6">
                        Contribution Graph
                    </div>

                    {/* GitHub Calendar Container with Custom Weekday Labels */}
                    <div className="overflow-x-auto pb-4 custom-scrollbar">
                        <div className="min-w-[840px] flex items-start gap-4 pl-1 select-none">
                            
                            {/* Left Column: Custom Day of Week Labels precisely aligned */}
                            <div className="flex flex-col text-left text-[11px] font-semibold text-textmuted shrink-0 select-none" style={{ paddingTop: '4px' }}>
                                <div className="text-[10px] text-textmain font-bold leading-none h-[14px]">Day of</div>
                                <div className="text-[10px] text-textmain font-bold leading-none h-[18px] mb-1">Week</div>
                                <div className="h-[17px] flex items-center">Sun</div>
                                <div className="h-[17px] flex items-center">Mon</div>
                                <div className="h-[17px] flex items-center">Tue</div>
                                <div className="h-[17px] flex items-center">Wed</div>
                                <div className="h-[17px] flex items-center">Thu</div>
                                <div className="h-[17px] flex items-center">Fri</div>
                                <div className="h-[17px] flex items-center">Sat</div>
                            </div>

                            {/* Calendar component itself */}
                            <div className="flex-1 relative text-slate-300">
                                <GitHubCalendar 
                                    key={selectedYear}
                                    username="oynndri"
                                    year={selectedYear}
                                    blockSize={13}
                                    blockMargin={4}
                                    fontSize={12}
                                    theme={calendarTheme}
                                    hideColorLegend={true}
                                    showWeekdayLabels={false}
                                    transformData={handleTransformData}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Custom Styled Calendar Footer matching the screenshot */}
                    <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-textmuted mt-4 border-t border-bordercol/10 pt-4 px-1 gap-3">
                        <div>Real-time data directly from GitHub</div>
                        <div className="flex items-center gap-1.5 select-none">
                            <span>Less</span>
                            <span className="w-[11px] h-[11px] rounded bg-[#181d2a] border border-bordercol/30"></span>
                            <span className="w-[11px] h-[11px] rounded bg-[#0e4429]"></span>
                            <span className="w-[11px] h-[11px] rounded bg-[#006d32]"></span>
                            <span className="w-[11px] h-[11px] rounded bg-[#26a641]"></span>
                            <span className="w-[11px] h-[11px] rounded bg-[#39d353]"></span>
                            <span>More</span>
                        </div>
                    </div>
                </div>

                {/* Stats Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    
                    {/* Card 1: Repository Stats */}
                    <div className="bg-[#0b0f19]/60 border border-bordercol/80 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-textmuted uppercase tracking-wider flex items-center gap-2">
                                <FaCodeBranch className="text-indigo-400" /> Open Source Impact
                            </h4>
                            <div className="space-y-3.5 pt-2">
                                <div className="flex items-center justify-between border-b border-bordercol/20 pb-2">
                                    <span className="text-sm text-textmuted font-medium">Public Repositories</span>
                                    <span className="text-sm font-bold text-textmain">12</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-bordercol/20 pb-2">
                                    <span className="text-sm text-textmuted font-medium">Main Languages</span>
                                    <span className="text-sm font-bold text-textmain">Java, JavaScript</span>
                                </div>
                                <div className="flex items-center justify-between pb-1">
                                    <span className="text-sm text-textmuted font-medium">Active Projects</span>
                                    <span className="text-sm font-bold text-textmain">QA Suite, Selenium POM</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-textmuted font-medium pt-4 border-t border-bordercol/10 mt-4 flex items-center gap-1.5">
                            <FaClock /> Updated hourly
                        </div>
                    </div>

                    {/* Card 2: QA Focus Metrics */}
                    <div className="bg-[#0b0f19]/60 border border-bordercol/80 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-textmuted uppercase tracking-wider flex items-center gap-2">
                                <FaCheckCircle className="text-emerald-400" /> QA Automation Runs
                            </h4>
                            <div className="space-y-3.5 pt-2">
                                <div className="flex items-center justify-between border-b border-bordercol/20 pb-2">
                                    <span className="text-sm text-textmuted font-medium">Automated Test Suites</span>
                                    <span className="text-sm font-bold text-textmain">4 Active</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-bordercol/20 pb-2">
                                    <span className="text-sm text-textmuted font-medium">Average Success Rate</span>
                                    <span className="text-sm font-bold text-emerald-400">98.4%</span>
                                </div>
                                <div className="flex items-center justify-between pb-1">
                                    <span className="text-sm text-textmuted font-medium">Scenarios Covered</span>
                                    <span className="text-sm font-bold text-textmain">120+ cases</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-[11px] text-textmuted font-medium pt-4 border-t border-bordercol/10 mt-4 flex items-center gap-1.5">
                            <FaClock /> Integration status: Stable
                        </div>
                    </div>

                    {/* Card 3: Streaks and Contribution Metrics */}
                    <div className="bg-[#0b0f19]/60 border border-bordercol/80 rounded-2xl p-6 flex items-center justify-between gap-4 hover:border-primary/40 transition-colors duration-300">
                        {/* Total & Longest Streaks (Left) */}
                        <div className="flex flex-col justify-between h-full py-1">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold text-textmuted uppercase tracking-wider">Total</span>
                                <div className="text-xl font-bold text-textmain">81</div>
                                <div className="text-[9px] font-semibold text-textmuted uppercase">Contributions</div>
                            </div>
                            <div className="space-y-1 pt-6">
                                <span className="text-[11px] font-bold text-textmuted uppercase tracking-wider">Longest Streak</span>
                                <div className="text-xl font-bold text-textmain">12</div>
                                <div className="text-[9px] font-semibold text-textmuted uppercase">Jan 1 - Jan 12</div>
                            </div>
                        </div>

                        {/* Current Streak Circle (Right) */}
                        <div className="flex flex-col items-center gap-2 justify-center h-full">
                            <div className="relative w-20 h-20 flex items-center justify-center">
                                {/* Circular progress track */}
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-slate-800/80"
                                        strokeWidth="2.5"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="text-primary"
                                        strokeWidth="2.5"
                                        strokeDasharray="42, 100" // 42% progress
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center justify-center">
                                    <FaFire className="text-orange-500 text-lg animate-bounce" />
                                    <span className="text-xs font-bold text-textmain mt-0.5">5</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-textmuted uppercase tracking-wide">Current Streak</span>
                            <span className="text-[9px] font-medium text-textmuted/80">Active May 28</span>
                        </div>
                    </div>

                </div>

                {/* Central Button */}
                <div className="w-full flex justify-center">
                    <a
                        href="https://github.com/oynndri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl border border-bordercol bg-cardbg hover:bg-bordercol/80 transition-all duration-300 text-textmain text-sm font-semibold flex items-center gap-2.5 shadow-sm uppercase tracking-wide"
                    >
                        <FaGithub size={18} /> Visit My GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default GithubActivity;
