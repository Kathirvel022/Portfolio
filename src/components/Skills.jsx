import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFastapi, SiMysql, SiVite } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <FaReact className="text-accent mb-3" size={40} />,
            skills: [
                { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
                { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
                { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
                { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
                { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> }
            ]
        },
        {
            title: "Backend",
            icon: <FaPython className="text-accent mb-3" size={40} />,
            skills: [
                { name: 'Python', icon: <FaPython color="#3776AB" /> },
                { name: 'FastAPI', icon: <SiFastapi color="#009688" /> }
            ]
        },
        {
            title: "Database",
            icon: <FaDatabase className="text-accent mb-3" size={40} />,
            skills: [
                { name: 'MySQL', icon: <SiMysql color="#4479A1" /> }
            ]
        },
        {
            title: "Tools",
            icon: <FaGithub className="text-accent mb-3" size={40} />,
            skills: [
                { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
                { name: 'GitHub', icon: <FaGithub color="var(--primary-text)" /> },
                { name: 'Vite', icon: <SiVite color="#646CFF" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-5 position-relative">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Technical <span className="text-accent">Skills</span></h2>
                    <div className="mx-auto bg-accent" style={{ height: '4px', width: '60px', borderRadius: '2px', background: 'var(--accent-gradient)' }}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {skillCategories.map((category, index) => (
                        <div className="col-md-6 col-lg-3" key={category.title}>
                            <motion.div 
                                className="card-custom bg-glass h-100 p-4 text-center d-flex flex-column"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="mb-2">
                                    {category.icon}
                                </div>
                                <h4 className="fw-bold text-primary mb-4">{category.title}</h4>
                                <div className="d-flex flex-column gap-3 mt-auto">
                                    {category.skills.map(skill => (
                                        <div key={skill.name} className="d-flex align-items-center justify-content-center gap-2 text-secondary fw-medium">
                                            <span className="fs-5">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;