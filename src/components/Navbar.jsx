import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${scrolled ? 'bg-glass shadow-sm py-2' : 'bg-transparent py-3'}`} style={{ zIndex: 1000, transition: 'all 0.3s ease' }}>
            <div className="container">
                <a className="navbar-brand fw-bold text-primary fs-4" href="#home" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '1px' }}>
                    <span className="text-accent">K</span>athirvel<span className="text-accent"> T</span>
                </a>

                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon" style={{ filter: isDark ? 'invert(1)' : 'none' }}></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link text-primary fw-medium position-relative hover-underline" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <motion.button 
                                onClick={toggleTheme}
                                className="btn rounded-circle d-flex align-items-center justify-content-center p-2"
                                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--primary-text)' }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isDark ? <BsSunFill size={20} className="text-warning" /> : <BsMoonFill size={20} className="text-secondary" />}
                            </motion.button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <style jsx="true">{`
                .hover-underline::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 50%;
                    background: var(--accent-gradient);
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }
                .hover-underline:hover::after {
                    width: 100%;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;