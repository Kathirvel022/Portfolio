const Intro = () => (
    <section id="home" className="vh-100 d-flex align-items-center bg-black text-white">
        <div className="container text-center">
            <h1 className="display-4 fw-bold" data-aos="fade-up">Hi, I'm Kathirvel T</h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
                React Developer | Frontend Engineer
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#contact" className="btn btn-primary btn-lg">Hire Me</a>
                <a href="src\assets\Kathirvel_Resume.pdf" target="_blank" className="btn btn-outline-light btn-lg">Download CV</a>
            </div>  
        </div>

    </section>
)
export default Intro;