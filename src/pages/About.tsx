import { useNavigate } from "react-router-dom";
import rajeshImage from "../assets/images/naim.jpeg";

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/coding-skills");
  };

  return (
    <div className="page about-page">
      <div className="about-hero">
        <h1>About</h1>
        <p className="about-intro">
          a passionate Full-Stack Developer with expertise in building scalable
          and efficient web & mobile applications. Skilled in front-end and
          back-end technologies, ensuring seamless user experiences. Always
          exploring new technologies to craft innovative solutions. Dedicated to
          transforming ideas into reality with clean and maintainable code. 🚀🚀
        </p>
      </div>

      <div className="about-breadcrumb">
        <span 
          className="breadcrumb-home"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Home
        </span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">About</span>
      </div>

      <div className="about-content">
        <div className="about-image-section">
          <img
            src={rajeshImage}
            alt="Naimuddin - Developer"
            className="about-profile-image"
          />
        </div>

        <div className="about-info-section">
          <h2 className="about-title">Senior Software Engineer (Sr. SE)</h2>
          <p className="about-tagline">
            Senior Software Engineer (Sr. SE) | Building Scalable &
            High-Performance Applications | Turning Complex Problems into
            Elegant Solutions 🚀
          </p>

          <div className="about-details-grid">
            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Birthday:</span>
              <span className="detail-value">15-06-92</span>
            </div>

            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Age:</span>
              <span className="detail-value">34</span>
            </div>

            {/* <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Website:</span>
              <span className="detail-value">www.naimuddin.com</span>
            </div> */}

            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Degree:</span>
              <span className="detail-value">Post Graduation | MCA | Apex College | RTU</span>
            </div>

            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Phone:</span>
              <span className="detail-value green-text">8107593732</span>
            </div>

            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">Email:</span>
              <span className="detail-value green-text">
                ansari69naim@gmail.com
              </span>
            </div>

            <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">City:</span>
              <span className="detail-value">Kota, India</span>
            </div>

            {/* <div className="about-detail-item">
              <span className="detail-icon">▶</span>
              <span className="detail-label">LinkedIn:</span>
              <span className="detail-value green-text">in/ansari-naim-a82a79134</span>
            </div> */}
          </div>

          <blockquote className="about-quote">
            "Officials chosen in such a way work and suffer hardships, with true
            choice. Anyone can acquire everything and beyond. No accusation of
            pain occurs officially over time. And everything of his. Desire
            dictates the maximum obligations indeed. But also with dedication,
            because it repels in such a way that it does not."
          </blockquote>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div className="section-header">
          <span className="section-label">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">EDUCATION</h2>
        </div>

        <div className="education-timeline">
          <div className="education-card">
            <div className="education-year-badge">2017</div>
            <div className="education-content">
              <div className="education-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="education-details">
                <h3 className="education-degree">Post Graduation | MCA</h3>
                <h4 className="education-institute">Apex College</h4>
                <p className="education-university">RTU</p>
                <p className="education-location">
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
                  Jaipur (Rajasthan) IN
                </p>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-year-badge">2014</div>
            <div className="education-content">
              <div className="education-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="education-details">
                <h3 className="education-degree">Graduation | BCA</h3>
                <h4 className="education-institute">IBB College</h4>
                <p className="education-university">University Of Kota</p>
                <p className="education-location">
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
                  Kota (Rajasthan) IN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      {/* <div className="about-stats-section">
        <div className="about-stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
              </svg>
            </div>
            <div className="stat-number">10</div>
            <div className="stat-label">Projects</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <div className="stat-number">15</div>
            <div className="stat-label">Completed Features</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
              </svg>
            </div>
            <div className="stat-number">1080</div>
            <div className="stat-label">Hours of Coding</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div className="stat-number">5</div>
            <div className="stat-label">Collaborators</div>
          </div>
        </div>
      </div> */}

      {/* Skills Section */}
      <div className="about-skills-section">
        <div className="skills-header">
          <span className="skills-subtitle">SKILLS</span>
          <h2 className="skills-title">MY SKILLS</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-row">
            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">HTML</span>
                <span className="skill-percentage-about">75%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">REACT.JS</span>
                <span className="skill-percentage-about">60%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">CSS</span>
                <span className="skill-percentage-about">70%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">WORDPRESS/CMS</span>
                <span className="skill-percentage-about">40%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">JAVASCRIPT</span>
                <span className="skill-percentage-about">40%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">FIGMA & CANVA</span>
                <span className="skill-percentage-about">60%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">REACT NATIVE</span>
                <span className="skill-percentage-about">40%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">GIT AND GITHUB</span>
                <span className="skill-percentage-about">40%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">NODE JS</span>
                <span className="skill-percentage-about">30%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            <div className="skill-item-about">
              <div className="skill-header-about">
                <span className="skill-name-about">MONGODB</span>
                <span className="skill-percentage-about">40%</span>
              </div>
              <div className="skill-bar-about">
                <div
                  className="skill-progress-about"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-cta">
          <button className="learn-more-btn" onClick={handleLearnMore}>
            <span className="btn-text">Learn More About My Skills</span>
            <svg
              className="btn-arrow"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-header">
          <span className="features-label">FEATURES</span>
          <h2 className="features-title">I'M INTERESTED IN</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ffa500" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">Web Development</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#00ffff" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">Full-Stack Development</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ff1493" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="feature-title">Mobile App Development</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#9370db" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 className="feature-title">Database Management</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#4169e1" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Cloud Computing</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ffd700" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Cybersecurity</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#00ffff" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m-9-9h6m6 0h6"></path>
              </svg>
            </div>
            <h3 className="feature-title">UI/UX Design</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#4169e1" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="feature-title">DevOps & CI/CD</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ffa500" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6"></path>
                <path d="M17 7l-5 5"></path>
                <path d="M7 7l5 5"></path>
              </svg>
            </div>
            <h3 className="feature-title">Version Control (Git)</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ff1493" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="feature-title">SEO & Web Performance</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#ffd700" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <path d="M12 2L2 12l10 10 10-10L12 2z"></path>
              </svg>
            </div>
            <h3 className="feature-title">API Development</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ color: "#00ff88" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <h3 className="feature-title">AI & Automation</h3>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <span className="testimonials-label">TESTIMONIALS</span>
          <h2 className="testimonials-title">CHECK MY TESTIMONIALS</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p className="testimonial-text">
                As the leader of the management team, the MD motivates and
                oversees the executive staff, managers, and wider employee base.
              </p>
              <span className="quote-icon-end">"</span>
            </div>
            <div className="testimonial-author">
              <img
                src="././images/person1.jpg"
                alt="Author"
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">Rajesh Nitharwal</h4>
                <p className="author-source">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p className="testimonial-text">
                Rajendra Sir has given me a lot of attention in every project
                and has treated me like an elder brother, even small things are
                easily understood.
              </p>
              <span className="quote-icon-end">"</span>
            </div>
            <div className="testimonial-author">
              <img
                src="././images/person2.jpg"
                alt="Author"
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">Rajendra Kumar</h4>
                <p className="author-source">Client</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote">
              <span className="quote-icon">"</span>
              <p className="testimonial-text">
                Kamlesh sir has always helped me with my big brother or told him
                about my problems, be it any problem like network windows
                systems, my great friend.
              </p>
              <span className="quote-icon-end">"</span>
            </div>
            <div className="testimonial-author">
              <img
                src="././images/person3.jpg"
                alt="Author"
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">Kamlesh Singh</h4>
                <p className="author-source">Colleague</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
