function Projects() {
    return (
        <section id="projects" className="py-5">
            <h2 className="text-center mb-5" data-aos="fade-up">Projects</h2>
        <div className="row g-3 justify-content-center">
        <div className="col-md-6 col-lg-4" data-aos="fade-up">
        <div className="card h-100 shadow">
            <img src="todo.png" alt="" />
            <div className="card-body">
                <h5 className="card-title">Todo App</h5>
                <p className="card-text">React + Bootstrap based todo application.</p>
                <a href="https://github.com/Kathirvel022/ToDO-APP.git" target="_blank" className="btn btn-dark btn-sm me-2">GitHub</a>
                <a href="https://stellular-dolphin-425ff1.netlify.app/" target="_blank" className="btn btn-outline-dark btn-sm">Live Demo</a>
            </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up">
        <div className="card h-100 shadow">
            <img src="todo.png" alt="" />
            <div className="card-body">
                <h5 className="card-title">User Dashboard</h5>
                <p className="card-text">HTMl + CSS + JS based User Dashboard website.</p>
                <a href="https://github.com/Kathirvel022/user-dashboard.git" target="_blank" className="btn btn-dark btn-sm me-2">GitHub</a>
                <a href="https://kathirvel022.github.io/user-dashboard/" target="_blank" className="btn btn-outline-dark btn-sm">Live Demo</a>
            </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up">
        <div className="card h-100 shadow">
            <img src="todo.png" alt="" />
            <div className="card-body">
                <h5 className="card-title">Clone Software Solution</h5>
                <p className="card-text">HTML + CSS based Clone Software Solution website.</p>
                <a href="https://github.com/Kathirvel022/clone-software-solution.git" target="_blank" className="btn btn-dark btn-sm me-2">GitHub</a>
                <a href="https://kathirvel022.github.io/clone-software-solution/" target="_blank" className="btn btn-outline-dark btn-sm">Live Demo</a>
            </div>
        </div>
        </div>
        
        </div>
        </section>
);
}

export default Projects;
