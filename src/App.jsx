import AOS from 'aos';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import GithubStats from './components/GithubStats.jsx';
import Certificates from './components/Certificates.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'var(--bg-color)',
              zIndex: 9999
            }}
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                width: '50px',
                height: '50px',
                border: '4px solid var(--border-color)',
                borderTopColor: 'var(--accent-color)',
                borderRadius: '50%'
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <GithubStats />
            <Certificates />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
