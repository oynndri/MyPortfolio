import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import CVPreview from './components/CVPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Prevent scroll during introductory loading sequence
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative selection:bg-primary/30">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10 transition-colors duration-500"></div>

        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-6">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GithubActivity />
          <Workflow />
          <Certifications />
          <Testimonials />
          <CVPreview />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
