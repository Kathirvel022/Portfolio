import AOS from 'aos';
import { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, [])

return (
  <>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
)
}
export default App
