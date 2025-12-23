import { useEffect, useState } from "react";
import rajeshImagep from "../assets/images/1336AD3B-8479-4BE9-8990-BED59ACB9F47_4_5005_c.jpeg";
import Medianaim from "../assets/images/Media.jpeg";
import naim from "../assets/images/naim.jpeg";
import Projectfirst from "../assets/images/Flipshotz.png";
import projectsecond from "../assets/images/Tactix.png";
import projectthird from "../assets/images/Zellcarz.png";

const Home = () => {
  useEffect(() => {
    const texts = ["Software Developer", "Freelancer", "Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function type() {
      if (!typingElement) return;

      const currentText = texts[textIndex];

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before next word
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }, []);

  const [platformModal, setPlatformModal] = useState({
    open: false,
    project: "",
    ios: "",
    android: "",
    logo: "",
  });

  function handleViewClick(
    e: React.MouseEvent,
    project: string,
    ios?: string,
    android?: string,
    logo?: string
  ) {
    e.preventDefault();
    setPlatformModal({
      open: true,
      project,
      ios: ios || "#",
      android: android || "#",
      logo: logo || "",
    });
  }

  function closeModal() {
    setPlatformModal({
      open: false,
      project: "",
      ios: "",
      android: "",
      logo: "",
    });
  }

  return (
    <div className="page home-page-hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Naimuddin</h1>
          <p className="hero-location">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "inline", marginRight: "5px" }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Kota, India
          </p>
          <div className="hero-contact-info">
            <a href="mailto:ansari69naim@gmail.com" className="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              ansari69naim@gmail.com
            </a>
            <a href="tel:8107593732" className="contact-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              8107593732
            </a>
            <a
              href="https://linkedin.com/in/ansari-naim-a82a79134"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn Profile
            </a>
          </div>
          <p className="hero-subtitle">
            I'm <span className="typing-text" id="typing-text"></span>
          </p>
          <p className="hero-summary">
            Experienced React Native Mobile Application Developer with 8 years
            of expertise in designing and launching scalable mobile apps for
            Android and iOS. Skilled in React Native, Redux, GraphQL, SQLite,
            and RESTful APIs, with a strong focus on intuitive UI/UX design and
            app performance optimization. Proficient in managing full app
            lifecycle from concept to deployment.
          </p>

          <div className="hero-social-icons">
            <a
              href="https://x.com/ansari69naim"
              className="hero-social-icon"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hero-social-icon" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ansari9051?igsh=MWw4a2w2d2syYmlnNA=="
              className="hero-social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/naim-uddin-a82a79134/"
              className="hero-social-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-placeholder">
            <img src={naim} alt="Naimuddin" />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="home-about-section">
        <div className="home-about-content">
          <div className="home-about-image">
            <img src={Medianaim} alt="About Naimuddin" />
          </div>
          <div className="home-about-text">
            <span className="section-label">ABOUT ME</span>
            <h2 className="section-title">Who Am I?</h2>
            <p className="about-description">
              I am a passionate Software Developer specializing in
              cross-platform mobile and web application development. With strong
              expertise in React Native, React.js, and Flutter, I build
              high-performance, scalable, and user-friendly applications that
              deliver seamless user experiences across platforms.
            </p>
            <p className="about-description">
              My development journey has strengthened my problem-solving
              abilities and enabled me to transform complex ideas into reliable
              digital solutions. I focus on writing clean, maintainable code
              while following modern development best practices. I am committed
              to delivering high-quality products, meeting deadlines, and
              creating impactful applications that align with business goals.
            </p>
            <div className="home-stats">
              <div className="home-stat-item">
                <h3 className="stat-value">30+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="home-stat-item">
                <h3 className="stat-value">22000+</h3>
                <p className="stat-label">Hours of Coding</p>
              </div>
              <div className="home-stat-item">
                <h3 className="stat-value">20+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
            <a href="/about" className="cta-button">
              Learn More About Me
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="home-services-section">
        <div className="services-header">
          <span className="section-label">SERVICES</span>
          <h2 className="section-title">What I Offer</h2>
          <p className="services-description">
            I provide a wide range of development services tailored to meet your
            business needs
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Creating responsive and modern websites using React.js, HTML5,
              CSS3, and JavaScript
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-description">
              Building cross-platform mobile applications using React Native for
              iOS and Android
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              Developing robust server-side applications with Node.js, Express,
              and MongoDB
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Designing beautiful and intuitive user interfaces using Figma and
              modern design principles
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="service-title">Performance Optimization</h3>
            <p className="service-description">
              Optimizing website speed, SEO, and overall performance for better
              user experience
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="service-title">Maintenance & Support</h3>
            <p className="service-description">
              Providing ongoing maintenance, updates, and technical support for
              your applications
            </p>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="home-projects-section">
        <div className="projects-header">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-title">Recent Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={Projectfirst} alt="Naimuddin" />

              <div className="project-overlay">
                <a
                  href="#"
                  className="project-link"
                  onClick={(e) =>
                    handleViewClick(
                      e,
                      "Flipshotz App",
                      "https://apps.apple.com/us/app/flipshotz/id6751222279",
                      "#",
                      Projectfirst
                    )
                  }
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Flipshotz App</h3>
              <p className="project-description">Easy Photo Book Creation</p>
              <p className="project-tech">
                React Native • REST API • Firebase • Firebase Authentication •
                Firebase Realtime DB
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={projectsecond} alt="Naimuddin" />

              <div className="project-overlay">
                <a
                  href="#"
                  className="project-link"
                  onClick={(e) =>
                    handleViewClick(
                      e,
                      "TacTix App",
                      "https://apps.apple.com/in/app/tactix/id6751491909",
                      "#",
                      projectsecond
                    )
                  }
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">TacTix App</h3>
              <p className="project-description">
                Mobile app to track workouts, nutrition, and progress with
                realtime sync via Firebase.
              </p>
              <p className="project-tech">React Native • Firebase</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={projectthird} alt="Naimuddin" />
              <div className="project-overlay">
                <a
                  href="#"
                  className="project-link"
                  onClick={(e) =>
                    handleViewClick(
                      e,
                      "Zellcarz App",
                      "https://apps.apple.com/us/app/zellcarz-find-a-ride/id6749255918",
                      "https://play.google.com/store/apps/details?id=com.carlinkx&pli=1",
                      projectthird
                    )
                  }
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Zellcarz App</h3>
              <p className="project-description">
                Personal portfolio showcasing projects, case studies, and
                interactive UI animations.
              </p>
              <p className="project-tech">
                React Native • REST API • Firebase Authentication •
                
              </p>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <a href="/portfolio" className="cta-button">
            View All Projects
          </a>
        </div>
      </div>

      {/* Skills Preview Section */}
      <div className="home-skills-section">
        <div className="skills-content">
          <div className="skills-text">
            <span className="section-label">EXPERTISE</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="skills-intro">
              I continuously expand my skill set to stay current with the latest
              technologies and best practices in web and mobile development.
            </p>
          </div>

          <div className="skills-list">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">API Testing</span>
                <span className="skill-tag">Environment Variables</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">REST API</span>
                <span className="skill-tag">JWT Authentication</span>
                <span className="skill-tag">Role Based Access (RBAC)</span>
                <span className="skill-tag">MVC Architecture</span>
                <span className="skill-tag">API Security</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Firebase Authentication</span>
                <span className="skill-tag">Firestore</span>
                <span className="skill-tag">Firebase Realtime DB</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Design</h3>
              <div className="skill-tags">
                <span className="skill-tag">Cloud Functions</span>
                <span className="skill-tag">Firebase Hosting</span>
                <span className="skill-tag">Push Notifications (FCM)</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Canva</span>
                <span className="skill-tag">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="home-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">
              Get In Touch
            </a>
            <a href="/portfolio" className="cta-button secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
      {platformModal.open && (
        <div className="platform-modal-overlay" onClick={closeModal}>
          <div className="platform-modal" onClick={(e) => e.stopPropagation()}>
            {platformModal.logo && (
              <img
                src={platformModal.logo}
                alt={`${platformModal.project} logo`}
                className="platform-modal-logo"
              />
            )}
            <h3>{platformModal.project}</h3>
            <p>Choose a platform to open:</p>
            <div className="platform-buttons">
              <a
                href={platformModal.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn ios"
              >
                iOS
              </a>
              <a
                href={platformModal.android}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn android"
              >
                Android
              </a>
            </div>
            <button onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
