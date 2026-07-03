import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// ── Utility components
import Loader           from './components/Loader';
import CustomCursor     from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop        from './components/BackToTop';

// ── Section components
import Navbar           from './components/Navbar';
import Hero             from './components/Hero';
import About            from './components/About';
import Skills           from './components/Skills';
import Experience       from './components/Experience';
import Projects         from './components/Projects';
import Services         from './components/Services';
import Certifications   from './components/Certifications';
import Contact          from './components/Contact';
import Footer           from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Show loader for 2.2 seconds then reveal the site
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Custom cursor glow (desktop only) ── */}
      <CustomCursor />

      {/* ── Scroll progress bar ── */}
      <ScrollProgressBar />

      {/* ── Loading screen ── */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* ── Main site ── */}
      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Certifications />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
