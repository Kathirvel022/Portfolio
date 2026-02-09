const Skills = () => (
    <section id="skills" className="py-5">
        <div className="container">
            <h2 className="text-center mb-5" data-aos="fade-up">Skills</h2>
            <div className="row g-4">
                {['HTML', 'CSS', 'JavaScript', 'React JS', 'Bootstrap', 'Python', 'MySQL'].map(skill => (
                    <div className="col-6 col-md-4 col-lg-3" key={skill}>
                        <div className="card text-center shadow-sm p-3" data-aos="zoom-in">
                            <h5>{skill}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;