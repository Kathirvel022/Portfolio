import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Profile from '../assets/img.png';

const Intro = () => {
    return (
        <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ paddingTop: '80px' }}>
            {/* Animated Background Gradients */}
            <div className="position-absolute w-100 h-100 top-0 start-0 z-n1">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    style={{ 
                        position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', 
                        background: 'var(--accent-gradient)', filter: 'blur(100px)', borderRadius: '50%', opacity: 0.3 
                    }}
                />
                <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear", delay: 1 }}
                    style={{ 
                        position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', 
                        background: 'var(--accent-color)', filter: 'blur(120px)', borderRadius: '50%', opacity: 0.2 
                    }}
                />
            </div>

            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-lg-row g-5">
                    {/* Right Side: Text & CTA */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="badge rounded-pill bg-glass text-primary border border-accent mb-3 px-3 py-2">
                                <span className="me-2 d-inline-block rounded-circle bg-success" style={{width: '8px', height: '8px'}}></span>
                                Available for Hire
                            </span>
                            
                            <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
                                Hi, I'm <span className="text-accent">Kathirvel T</span>
                            </h1>
                            
                            <h2 className="h3 text-secondary mb-4" style={{ minHeight: '40px' }}>
                                I am a{' '}
                                <TypeAnimation
                                    sequence={[
                                        'React Developer', 2000,
                                        'Frontend Developer', 2000,
                                        'Backend Developer', 2000,
                                        'Python Full Stack Developer', 2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="text-primary fw-bold"
                                    repeat={Infinity}
                                />
                            </h2>
                            
                            <p className="lead text-muted mb-5" style={{ maxWidth: '600px' }}>
                                Building modern, responsive, and high-performance web applications. Turning complex problems into elegant solutions.
                            </p>
                            
                            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                                <a href="#contact" className="btn-custom">
                                    Hire Me
                                </a>
                                <a href="src/assets/Kathirvel_Resume.pdf" target="_blank" rel="noreferrer" className="btn-outline-custom">
                                    Download CV
                                </a>
                            </div>  
                        </motion.div>
                    </div>

                    {/* Left Side: Profile Image */}
                    <div className="col-lg-5">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="position-relative d-flex justify-content-center"
                        >
                            {/* Glow Effect */}
                            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100" 
                                 style={{ background: 'var(--accent-gradient)', filter: 'blur(60px)', opacity: 0.5, borderRadius: '50%', zIndex: -1 }}>
                            </div>
                            
                            <motion.img 
                                src={Profile}
                                alt="Kathirvel T" 
                                className="img-fluid rounded-circle border border-4"
                                style={{ borderColor: 'var(--card-bg)', maxWidth: '350px', width: '100%', objectFit: 'cover', aspectRatio: '1/1', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;