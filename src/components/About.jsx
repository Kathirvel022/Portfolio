const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 mb-4" data-aos="fade-right">
                        <img src="src\assets\IMG-20260125-WA00202.jpg.jpeg" alt="" className="img-fluid rounded shadow"/>
                    </div>
                    <div className="col-md-7" data-aos="fade-left">
                        <h2 className="fw-bold">About Me</h2>
                        <p className="text-muted">
                            Hi, I'm <b>Kathirvel T</b>. I'm a beginner React Developer who loves building modern, responsive web application using React Js and Bootstrap 5.
                        </p>
                        <p className="text-muted">
                            I have built projects like Todo App and Portfolio website. I'm actively learning frondend technologies and improving my skilld.
                        </p>
                        <a href="#contact" className="btn btn-dark mt-2">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;