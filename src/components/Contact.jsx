const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">

        {/* Heading */}
        <div className="mb-4" data-aos="fade-up">
          <h2 className="fw-bold">Let’s Work Together</h2>
          <p className="text-muted mt-2">
            I’m open to frontend developer roles, internships, and freelance projects.
            If you like my work, feel free to reach out.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="zoom-in">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/919344127179"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-lg"
          >
            <i className="bi bi-whatsapp me-2"></i>
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:kathirvpy@gmail.com"
             className="btn btn-outline-light btn-lg"
          >
            <i className="bi bi-envelope me-2"></i>
            Email Me
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-4" data-aos="fade-up">
          <a href="https://github.com/kathirvel022" target="_blank" className="text-white me-3 fs-4">
            <i className="bi bi-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <hr className="border-secondary my-4" />

        <p className="text-white small mb-0">
          © {new Date().getFullYear()} Kathirvel. All rights reserved.
        </p>

      </div>
    </section>
  )
}

export default Contact