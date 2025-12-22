import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Emizentech Pvt. Ltd.',
      position: 'React Native Developer',
      location: 'Jaipur',
      duration: 'July 2022 - Present',
      type: 'Current',
      achievements: [
        'Optimized mobile app performance, reducing load times by 30% through efficient asset handling in React Native.',
        'Developed and integrated scalable features, enhancing user engagement by 25% and ensuring a smooth user experience.',
        'Implemented seamless API integrations with GraphQL, REST API, and AWS, improving app functionality and data flow.',
        'Set up and managed CI/CD pipelines using Firebase, reducing release cycle times by 50% and improving software reliability and deployment efficiency.',
        'Enhanced data management and app speed by employing SQLite for optimal local storage solutions in React Native applications.',
        'Enhanced UI/UX using Material UI and custom React Native components, ensuring a visually appealing and user-friendly app experience.'
      ],
      technologies: ['React Native', 'GraphQL', 'REST API', 'AWS', 'Firebase', 'SQLite', 'Material UI']
    },
    {
      id: 2,
      company: 'Arthonsys Technologies LLP.',
      position: 'Android | React Native Developer',
      location: 'Jaipur',
      duration: 'Jan 2018 - June 2022',
      type: 'Previous',
      achievements: [
        'Started my Android & React Native journey at Arthonsys Technologies, where I gained hands-on experience in building and optimizing mobile applications from the ground up. Over two years, I worked on four different applications, refining my skills in UI design, API integrations, and state management—even though these projects didn\'t go live, they provided invaluable learning experiences.',
        'Acquired extensive experience in React Native development by contributing to three major projects, with one successfully deployed, gaining over 1000 downloads.',
        'Implemented advanced state management techniques, reducing app load times by 20% and improving performance for real-time data handling.',
        'Optimized real-time data handling processes, enhancing user interaction responsiveness by 30% and minimizing latency issues.',
        'Integrated complex API implementations, ensuring seamless data flow and improving backend communication reliability by 95%.'
      ],
      technologies: ['Android', 'React Native', 'API Integration', 'State Management', 'UI Design', 'Real-time Data']
    }
  ];

  return (
    <div className="page experience-page">
      <div className="experience-hero">
        <span className="section-label">PROFESSIONAL JOURNEY</span>
        <h1 className="experience-title">EXPERIENCE</h1>
        <p className="experience-subtitle">
          My professional journey in mobile application development, showcasing growth and achievements
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot">
                {exp.type === 'Current' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
            </div>

            <div className="timeline-content">
              <div className="experience-card-modern">
                <div className="experience-header-modern">
                  <div className="experience-main-info">
                    <h2 className="experience-position">{exp.position}</h2>
                    <div className="experience-company-info">
                      <h3 className="experience-company">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'inline', marginRight: '8px'}}>
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="3" y1="9" x2="21" y2="9"></line>
                          <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                        {exp.company}
                      </h3>
                      <p className="experience-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'inline', marginRight: '5px'}}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="experience-duration-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{exp.duration}</span>
                  </div>
                  {exp.type === 'Current' && (
                    <div className="current-badge">
                      <span>Current Position</span>
                    </div>
                  )}
                </div>

                <div className="experience-achievements">
                  <h4 className="achievements-title">Key Achievements & Responsibilities:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="achievement-icon">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4 className="technologies-title">Technologies & Tools:</h4>
                  <div className="technologies-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-summary">
        <div className="summary-card">
          <h3 className="summary-title">Total Experience</h3>
          <p className="summary-value">6+ Years</p>
          <p className="summary-description">In Mobile Application Development</p>
        </div>
        <div className="summary-card">
          <h3 className="summary-title">Projects Completed</h3>
          <p className="summary-value">10+</p>
          <p className="summary-description">Successfully Delivered Applications</p>
        </div>
        <div className="summary-card">
          <h3 className="summary-title">Performance Improvement</h3>
          <p className="summary-value">30%</p>
          <p className="summary-description">Average Optimization Achieved</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
