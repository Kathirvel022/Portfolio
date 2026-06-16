import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../assets/img.png';

const About = () => {
    return (
        <section id="about" className="py-5 position-relative">
            <div className="container py-5">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">About <span className="text-accent">Me</span></h2>
                        <div className="mx-auto bg-accent" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card-custom bg-glass p-4 p-md-5">
                                <div className="row align-items-center g-5">
                                    <div className="col-md-5 text-center">
                                        <div className="position-relative d-inline-block">
                                            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{ background: 'var(--accent-gradient)', transform: 'translate(10px, 10px)', zIndex: -1 }}></div>
                                            <img src={Profile} alt="Kathirvel" className="img-fluid rounded-4 shadow-lg border border-2" style={{ borderColor: 'var(--border-color)' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h3 className="h4 fw-bold mb-3 text-primary">React Developer & Tech Enthusiast</h3>
                                        <p className="text-secondary fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                                            Hi, I'm <b className="text-primary">Kathirvel T</b>. I'm a passionate developer who loves building modern, responsive, and user-centric web applications using cutting-edge technologies like React JS and Python.
                                        </p>
                                        <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                                            I have built several projects ranging from simple Todo apps to complex Full Stack Clinic Appointment Management Systems. I'm actively expanding my skill set in both frontend and backend domains to become a versatile Full Stack Engineer.
                                        </p>
                                        <div className="d-flex gap-3 mt-4">
                                            <div className="d-flex align-items-center gap-2 text-primary">
                                                <i className="bi bi-geo-alt-fill text-accent fs-4"></i>
                                                <span>India</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 text-primary ms-3">
                                                <i className="bi bi-briefcase-fill text-accent fs-4"></i>
                                                <span>Open to Work</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;