
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
    items: ["Python", "Flask", "Java", "SQL", "Supabase", "SQLite", "Prisma"],
  },
  {
    title: "AI Training & Data Work",
    items: [
      "Data Annotation",
      "Data Labelling",
      "AI Response Evaluation",
      "AI Testing",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Godot", "Visual Studio Code"],
  },
];

const projects = [
  {
    number: "01",
    title: "SokoMtaani",
    category: "Web Application · E-commerce Marketplace",
    description:
      "A local online marketplace designed to connect customers and sellers through a digital shopping platform. The project includes product listings, user authentication, shopping experiences and marketplace management, using a modern web stack with a local SQLite database.",
    tech: ["Next.js", "React", "Prisma", "SQLite", "TypeScript"],
    status: "Development project",
  },
  {
    number: "02",
    title: "LimaFika",
    category: "Web Application · Marketplace & Delivery",
    description:
      "A marketplace and delivery platform designed to connect customers with products around Bungoma, Kenya. The project explores product listings, shopping carts, checkout, order management and delivery workflows.",
    tech: ["Next.js", "React", "Supabase", "TypeScript"],
    status: "In development",
  },
  {
    number: "03",
    title: "TheLastPromise",
    category: "Game Development · 3D",
    description:
      "A personal 3D game-development learning project involving character setup, animation, scene design and interactive environments using the Godot game engine.",
    tech: ["Godot", "GDScript", "3D Development"],
    status: "Learning project",
  },
  {
    number: "04",
    title: "Victor Portfolio",
    category: "Web Development · Personal Project",
    description:
      "A professional portfolio website developed to showcase my technical interests, practical projects, skills and professional profile.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    status: "Live",
  },
];

const experience = [
  {
    number: "01",
    title: "AI Data Annotation & Labelling",
    category: "Artificial Intelligence",
    description:
      "Experience with AI data annotation and labelling activities, working with data according to task requirements and instructions.",
    skills: ["Data Annotation", "Data Labelling", "Attention to Detail"],
  },
  {
    number: "02",
    title: "AI Response Evaluation & Testing",
    category: "AI Quality & Evaluation",
    description:
      "Experience evaluating AI-generated responses and participating in AI testing activities, with attention to response quality and task guidelines.",
    skills: ["Response Evaluation", "AI Testing", "Quality Assessment"],
  },
  {
    number: "03",
    title: "Academic IT Projects",
    category: "Information Technology",
    description:
      "Academic project and assignment work involving Information Technology concepts, technical problem-solving and practical learning.",
    skills: ["IT Concepts", "Research", "Problem Solving"],
  },
];

const opportunities = [
  {
    icon: "✧",
    title: "AI Training & Data Work",
    description:
      "Available for suitable AI data annotation, data labelling, AI response evaluation and AI testing opportunities.",
  },
  {
    icon: "⌘",
    title: "IT & Technical Roles",
    description:
      "Interested in entry-level IT opportunities, technical support, software development and technology-related projects.",
  },
  {
    icon: "◎",
    title: "Generalist Remote Work",
    description:
      "Open to suitable online research, digital operations, data-related tasks and other remote project opportunities.",
  },
  {
    icon: "⌘",
    title: "Junior Web Development",
    description:
      "Interested in junior web development opportunities involving modern web technologies, databases and practical application development.",
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
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#opportunities" onClick={closeMenu}>Opportunities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a href={GITHUB} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            GitHub ↗
          </a>

          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            INFORMATION TECHNOLOGY · AI · DIGITAL INNOVATION
          </p>

          <h1>
            Hello, I'm
            <br />
            <span>Victor Masika.</span>
            <br />
            Technology, data and innovation.
          </h1>

          <p className="hero-description">
            An Information Technology graduate with experience in
            web development, AI data annotation and AI response
            evaluation. I enjoy solving problems, learning new
            technologies and contributing to practical digital projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Work ↗
            </a>

            <a href="#contact" className="button secondary">
              Hire Me / Contact
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
            Open to suitable remote opportunities worldwide
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
            <p>Information Technology Graduate</p>

            <div className="visual-divider"></div>

            <div className="visual-stats">
              <div>
                <strong>IT</strong>
                <span>Education</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Data Work</span>
              </div>
              <div>
                <strong>WEB</strong>
                <span>Development</span>
              </div>
            </div>

            <div className="floating-symbol symbol-one">{"</>"}</div>
            <div className="floating-symbol symbol-two">✦</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label">01 / PROFESSIONAL PROFILE</div>

        <div className="about-grid">
          <h2>
            IT graduate.
            <br />
            <span>Digital problem solver.</span>
          </h2>

          <div>
            <p>
              I am Victor Masika, an Information Technology graduate
              from Kibabii University, Kenya, with interests and
              practical experience across technology and digital work.
            </p>

            <p>
              My experience includes AI data annotation, data labelling
              and AI response evaluation. I am interested in helping
              improve AI systems through careful evaluation, following
              task instructions and attention to detail.
            </p>

            <p>
              I also develop web applications using technologies
              including React, Next.js, TypeScript, Python and Supabase.
              My personal projects provide opportunities to apply
              technical knowledge to practical problems.
            </p>

            <p>
              I am interested in remote opportunities involving AI
              training, data work, IT support, digital operations
              and junior web development.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills section" id="skills">
        <div className="section-label">02 / TECHNICAL SKILLS</div>

        <h2 className="section-title">
          Skills and capabilities<span>.</span>
        </h2>

        <p className="section-description">
          Technical tools and professional areas I have explored
          and developed through practical and academic work.
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

      {/* EXPERIENCE */}
      <section className="projects section" id="experience">
        <div className="section-label">03 / RELEVANT EXPERIENCE</div>

        <h2 className="section-title">
          Experience and practical learning<span>.</span>
        </h2>

        <p className="section-description">
          Relevant activities and experience across artificial
          intelligence, data work and Information Technology.
        </p>

        <div className="projects-grid">
          {experience.map((item) => (
            <article className="project-card" key={item.number}>
              <div className="project-number">{item.number}</div>
              <div className="project-icon">✳</div>
              <p className="project-category">{item.category}</p>
              <h3>{item.title}</h3>

              <p className="project-description">
                {item.description}
              </p>

              <div className="project-tech">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section" id="projects">
        <div className="section-label">04 / SELECTED PROJECTS</div>

        <h2 className="section-title">
          Practical work and projects<span>.</span>
        </h2>

        <p className="section-description">
          Personal and academic learning projects demonstrating
          my interest in software development and technology.
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
          <p>Interested in exploring my development work?</p>

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

      {/* OPPORTUNITIES */}
      <section className="opportunities section" id="opportunities">
        <div className="section-label">05 / PROFESSIONAL OPPORTUNITIES</div>

        <h2 className="section-title">
          How I can contribute<span>.</span>
        </h2>

        <p className="section-description">
          I welcome opportunities to contribute my skills,
          learn from professional teams and deliver quality work.
        </p>

        <div className="opportunities-grid">
          {opportunities.map((item) => (
            <article className="opportunity-card" key={item.title}>
              <div className="opportunity-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education section" id="education">
        <div className="section-label">06 / EDUCATION</div>

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

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-label">07 / GET IN TOUCH</div>

        <h2 className="section-title">
          Let's work together.
          <br />
          <span>Let's create opportunities.</span>
        </h2>

        <p>
          I welcome conversations about AI training, data annotation,
          remote digital work, IT opportunities, internships and
          software development projects.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span>Professional email</span>
            <a
              href={EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              masikavictor4@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>University email</span>
            <a href="mailto:vwmasika20@student.kibu.ac.ke">
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

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Victor Masika. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
