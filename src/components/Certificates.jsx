import React from 'react';
import { motion } from 'framer-motion';
import { BsAwardFill } from 'react-icons/bs';

const Certificates = () => {
    const certificates = [
        {
            title: "Advanced Web Designing Internship",
            issuer: "Malari's Software Solutions, Tirunelveli",
            date: "2024",
            gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
        },
        {
            title: "Python Full Stack",
            issuer: "Techy Toper, Tenkasi",
            date: "2026",
            gradient: "linear-gradient(135deg, #a855f7, #ec4899)"
        }
    ];

    return (
        <section id="certificates" className="py-5 position-relative">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">My <span className="text-accent">Certificates</span></h2>
                    <div className="mx-auto bg-accent" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {certificates.map((cert, index) => (
                        <div className="col-md-6 col-lg-4" key={cert.title}>
                            <motion.div 
                                className="card-custom bg-glass h-100 p-4 d-flex flex-column align-items-center text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="mb-4 p-3 rounded-circle" style={{ background: cert.gradient, color: 'white' }}>
                                    <BsAwardFill size={40} />
                                </div>
                                <h4 className="fw-bold text-primary mb-2">{cert.title}</h4>
                                <p className="text-secondary fw-medium mb-1">{cert.issuer}</p>
                                <p className="text-muted small mb-0">{cert.date}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
