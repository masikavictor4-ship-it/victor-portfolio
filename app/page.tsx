
"use client";

import { useState } from "react";

const CV_FILE = "/Victor-Masika-Professional-CV.pdf";
const PROFILE_IMAGE = "/victor-profile.jpg";

const LINKEDIN =
  "https://www.linkedin.com/in/masika-wekesa-victor-38b334431/";

const GITHUB = "https://github.com/masikavictor4-ship-it";

const EMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=masikavictor4@gmail.com&su=Professional%20Opportunity";

const skills = [
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Programming & Databases",
    items: ["Python", "Flask", "Java", "SQL", "Supabase"],
  },
  {
    title: "AI & Digital Work",
    items: ["AI Training", "Data Annotation", "Data Evaluation"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Godot", "Visual Studio Code"],
  },
];

const projects = [
  {
    number: "01",
    title: "LimaFika",
    category: "Web Application · Marketplace",
    description:
      "A marketplace and delivery platform concept designed to connect customers with products around Bungoma, Kenya. The project explores product listings, shopping carts, checkout, order management and delivery workflows.",
    tech: ["Next.js", "React", "Supabase", "TypeScript"],
    status: "In development",
  },
  {
    number: "02",
    title: "TheLastPromise",
    category: "Game Development · 3D",
    description:
      "A personal 3D game-development project exploring character setup, animation, scene design and interactive environments using the Godot game engine.",
    tech: ["Godot", "GDScript", "3D Development"],
    status: "Learning project",
  },
  {
    number: "03",
    title: "Victor Portfolio",
    category: "Web Development · Personal Project",
    description:
      "A personal portfolio website created to present my technical interests, projects, learning journey and professional profile.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    status: "In development",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          VM<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#opportunities" onClick={closeMenu}>Opportunities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            INFORMATION TECHNOLOGY · DIGITAL INNOVATION
          </p>

          <h1>
            Hello, I'm
            <br />
            <span>Victor Masika.</span>
            <br />
            I build and explore technology.
          </h1>

          <p className="hero-description">
            An Information Technology professional with interests in
            software development, web applications and artificial
            intelligence. I enjoy learning new technologies and using
            practical projects to solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Projects ↗
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>

            <a
              href={CV_FILE}
              download="Victor-Masika-Professional-CV.pdf"
              className="button primary"
            >
              Download My CV ↓
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Open to suitable remote opportunities and collaborations
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-top">
              <span>PROFESSIONAL PROFILE</span>
              <span>✦</span>
            </div>

            <img
              src={PROFILE_IMAGE}
              alt="Victor Masika profile photograph"
              className="avatar"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "50%",
                display: "block",
                margin: "25px auto",
              }}
            />

            <h2>Victor Masika</h2>
            <p>Information Technology</p>

            <div className="visual-divider"></div>

            <div className="visual-stats">
              <div>
                <strong>IT</strong>
                <span>Background</span>
              </div>
              <div>
                <strong>WEB</strong>
                <span>Development</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Interest</span>
              </div>
            </div>

            <div className="floating-symbol symbol-one">{"</>"}</div>
            <div className="floating-symbol symbol-two">✦</div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT ME</div>

        <div className="about-grid">
          <h2>
            Technology enthusiast.
            <br />
            <span>Problem solver.</span>
          </h2>

          <div>
            <p>
              I am Victor Masika, an Information Technology graduate
              from Kibabii University with an interest in software
              development, digital technology and artificial intelligence.
            </p>

            <p>
              My learning journey includes developing web applications,
              exploring programming languages, working with databases
              and experimenting with 3D game development.
            </p>

            <p>
              I am also interested in AI training, data annotation and
              evaluation work, where attention to detail, following
              instructions and understanding technology are important.
            </p>

            <p>
              I am motivated to keep learning, contribute to practical
              projects and grow through professional opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-label">02 / TECHNICAL SKILLS</div>

        <h2 className="section-title">
          My skills and interests<span>.</span>
        </h2>

        <p className="section-description">
          Technologies and professional areas I have explored and continue
          to develop through practical work.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-label">03 / SELECTED PROJECTS</div>

        <h2 className="section-title">
          What I have been working on<span>.</span>
        </h2>

        <p className="section-description">
          Practical projects that demonstrate my interest in technology,
          software development and continuous learning.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-icon">✳</div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-status">{project.status}</div>
            </article>
          ))}
        </div>

        <div className="github-note">
          <p>Interested in seeing my code and development work?</p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Visit my GitHub profile ↗
          </a>
        </div>
      </section>

      <section className="opportunities section" id="opportunities">
        <div className="section-label">04 / PROFESSIONAL INTERESTS</div>

        <h2 className="section-title">
          Areas where I can contribute<span>.</span>
        </h2>

        <div className="opportunities-grid">
          <article className="opportunity-card">
            <div className="opportunity-icon">⌘</div>
            <h3>IT & Technical Roles</h3>
            <p>
              Interested in entry-level IT opportunities, technical
              support, web development and other technology-related work.
            </p>
          </article>

          <article className="opportunity-card">
            <div className="opportunity-icon">✧</div>
            <h3>AI Training & Data Work</h3>
            <p>
              Interested in AI data annotation, response evaluation,
              data labelling and other AI-related project opportunities.
            </p>
          </article>

          <article className="opportunity-card">
            <div className="opportunity-icon">◎</div>
            <h3>Remote & Generalist Work</h3>
            <p>
              Open to suitable remote projects involving research,
              digital tasks, online operations and technology.
            </p>
          </article>
        </div>
      </section>

      <section className="education section" id="education">
        <div className="section-label">05 / EDUCATION</div>

        <h2 className="section-title">
          Academic background<span>.</span>
        </h2>

        <div className="education-card">
          <div className="education-icon">🎓</div>
          <div>
            <h3>Bachelor of Information Technology</h3>
            <p>Kibabii University</p>
            <span>Kenya</span>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-label">06 / GET IN TOUCH</div>

        <h2 className="section-title">
          Let's connect.
          <br />
          <span>Let's create opportunities.</span>
        </h2>

        <p>
          I welcome conversations about IT opportunities, AI training
          projects, remote work, internships and collaborations.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span>Email address</span>
            <a href={EMAIL_LINK} target="_blank" rel="noopener noreferrer">
              masikavictor4@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>University email</span>
            <a
              href="mailto:vwmasika20@student.kibu.ac.ke"
            >
              vwmasika20@student.kibu.ac.ke
            </a>
          </div>

          <div className="contact-item">
            <span>Phone number</span>
            <a href="tel:+254708275391">
              +254 708 275 391
            </a>
          </div>
        </div>

        <div className="contact-buttons">
          <a
            className="button primary"
            href={CV_FILE}
            download="Victor-Masika-Professional-CV.pdf"
          >
            Download My CV ↓
          </a>

          <a
            className="button secondary"
            href={EMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Me an Email ↗
          </a>

          <a
            className="button secondary"
            href="https://wa.me/254708275391"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Me ↗
          </a>

          <a
            className="button secondary"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Victor Masika. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
