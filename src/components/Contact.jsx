import React from 'react';
import { motion } from 'framer-motion';
import { BsWhatsapp, BsEnvelopeFill, BsGithub } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact" className="py-5 position-relative border-top border-secondary border-opacity-10">
            <div className="container py-5 text-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Heading */}
                    <div className="mb-5">
                        <h2 className="display-5 fw-bold mb-3">Let's Work <span className="text-accent">Together</span></h2>
                        <div className="mx-auto bg-accent mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                            I’m open to frontend developer roles, internships, and freelance projects.
                            If you like my work, feel free to reach out.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                        <a
                            href="https://wa.me/919344127179"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-custom py-3 px-4 shadow"
                            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                        >
                            <BsWhatsapp size={20} />
                            Chat on WhatsApp
                        </a>

                        <a
                            href="mailto:kathirvpy@gmail.com"
                            className="btn-outline-custom py-3 px-4 bg-glass shadow"
                        >
                            <BsEnvelopeFill size={20} />
                            Email Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mb-5 d-flex justify-content-center gap-4">
                        <motion.a 
                            href="https://github.com/kathirvel022" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-primary bg-glass rounded-circle p-3 d-inline-flex border border-secondary border-opacity-25 shadow-sm"
                            whileHover={{ scale: 1.2, y: -5, color: 'var(--accent-color)' }}
                        >
                            <BsGithub size={24} />
                        </motion.a>
                    </div>

                    {/* Copyright */}
                    <hr className="border-secondary opacity-25 my-4 mx-auto" style={{ maxWidth: '800px' }} />

                    <p className="text-muted small mb-0 fw-medium">
                        © {new Date().getFullYear()} Kathirvel T. Crafted with <span className="text-accent">React</span> & <span className="text-accent">Framer Motion</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;