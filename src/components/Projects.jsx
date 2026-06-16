import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import clinicImage from '../assets/projects/clinic.png';
import todoImage from '../assets/projects/todo.png';
import dashboardImage from '../assets/projects/dashboard.png';
import cloneImage from '../assets/projects/clone.png';

const Projects = () => {
    const projects = [
        {
            title: "Clinic Appointment Management System",
            description: "A comprehensive Full Stack Clinic Appointment Management System allowing patients to book appointments and doctors/admins to manage schedules efficiently.",
            tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "FastAPI", "Python", "MySQL"],
            github: "https://github.com/Kathirvel022/Clinic_Appointment_Management_System.git",
            live: "https://clinic-appointment-management-system.netlify.app/",
            image: clinicImage
        },
        {
            title: "Todo App",
            description: "A sleek and responsive task management application built with React and Bootstrap for organizing daily activities.",
            tech: ["React"],
            github: "https://github.com/Kathirvel022/ToDO-APP.git",
            live: "https://stellular-dolphin-425ff1.netlify.app/",
            image: todoImage
        },
        {
            title: "User Dashboard",
            description: "A modern administrative user dashboard interface featuring clean UI components, built purely with HTML, CSS, and JavaScript.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Kathirvel022/user-dashboard.git",
            live: "https://kathirvel022.github.io/user-dashboard/",
            image: dashboardImage
        },
        {
            title: "Clone Software Solution",
            description: "A responsive landing page cloning a software solution provider website, focusing on pixel-perfect UI and modern styling.",
            tech: ["HTML", "CSS"],
            github: "https://github.com/Kathirvel022/clone-software-solution.git",
            live: "https://kathirvel022.github.io/clone-software-solution/",
            image: cloneImage
        }
    ];

    return (
        <section id="projects" className="py-5 position-relative">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Featured <span className="text-accent">Projects</span></h2>
                    <div className="mx-auto bg-accent" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-6" key={project.title}>
                            <motion.div 
                                className="card-custom bg-glass h-100 d-flex flex-column"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Project Image with Hover Zoom */}
                                <div className="position-relative overflow-hidden w-100" style={{ height: '220px', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
                                    <motion.img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover' }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>
                                
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <h4 className="card-title fw-bold text-primary mb-3">{project.title}</h4>
                                    <p className="card-text text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                                        {project.description}
                                    </p>
                                    
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="badge bg-transparent border border-secondary text-muted rounded-pill px-3 py-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="d-flex gap-3 mt-auto">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline-custom flex-grow-1 text-center justify-content-center">
                                            <BsGithub /> GitHub
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" className="btn-custom flex-grow-1 text-center justify-content-center">
                                            <BsBoxArrowUpRight /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
