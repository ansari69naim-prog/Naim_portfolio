import React, { useState } from 'react';

const Portfolio = () => {
  const [platformModal, setPlatformModal] = useState({
    open: false,
    project: "",
    ios: "",
    android: "",
  });

  function handleViewClick(
    e: React.MouseEvent,
    project: string,
    ios?: string,
    android?: string
  ) {
    e.preventDefault();
    setPlatformModal({
      open: true,
      project,
      ios: ios || "#",
      android: android || "#",
    });
  }

  function closeModal() {
    setPlatformModal({ open: false, project: "", ios: "", android: "" });
  }

  const projects = [
    {
      id: 1,
      title: 'Carlift',
      category: 'Ride Sharing',
      description: 'First Fixed-Route Ride Platform in the Region',
      ios: 'https://apps.apple.com/in/app/carlift/id6447687280',
      android: 'https://play.google.com/store/apps/details?id=com.carlift&hl=en',
      tech: 'React Native • Node.js • Firebase'
    },
    {
      id: 2,
      title: 'Safe Pickup',
      category: 'School Safety',
      description: 'Make school pickups fast and secure',
      ios: 'https://apps.apple.com/us/app/safe-pickup/id6473260270',
      android: 'https://play.google.com/store/apps/details?id=com.safepickup',
      tech: 'React Native • Firebase • Maps'
    },
    {
      id: 3,
      title: '2gthr',
      category: 'Social Network',
      description: 'Share, Pray, Connect - Community Platform',
      ios: 'https://apps.apple.com/in/app/2gthr-share-pray-connect/id1447927019',
      android: '#',
      tech: 'React Native • Firebase • Social'
    },
    {
      id: 4,
      title: 'Elite Usan',
      category: 'E-Commerce',
      description: 'Premium e-commerce platform',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.ecommerce.eliteusan',
      tech: 'React Native • Redux • Payment'
    },
    {
      id: 5,
      title: 'Wheelsz',
      category: 'Transportation',
      description: 'Innovative transportation solution',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.wheelsz',
      tech: 'React Native • Maps • Firebase'
    },
    {
      id: 6,
      title: 'Watch Party',
      category: 'Entertainment',
      description: 'Stream and connect with others',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.watchparty&hl=en_IN',
      tech: 'React Native • Streaming • WebSocket'
    },
    {
      id: 7,
      title: 'Accuwise',
      category: 'Health & Wellness',
      description: 'Smart health tracking application',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.accuwise.app&hl=en',
      tech: 'React Native • Firebase • Health API'
    },
    {
      id: 8,
      title: 'Fratem',
      category: 'Social Networking',
      description: 'Community for meaningful connections',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.fratem&hl=en',
      tech: 'React Native • Firebase • Chat'
    },
    {
      id: 9,
      title: 'PoopMates',
      category: 'Pet Care',
      description: 'Track your pet\'s health and activities',
      ios: 'https://apps.apple.com/in/app/poopmates/id6503128827',
      android: '#',
      tech: 'React Native • Firebase • Health'
    },
    {
      id: 10,
      title: 'Cab Connect',
      category: 'Ride Sharing',
      description: 'Reliable cab booking with tracking',
      ios: '#',
      android: 'https://play.google.com/store/apps/details?id=com.cabconnect&hl=en',
      tech: 'React Native • Maps • Real-time'
    },
    {
      id: 11,
      title: 'TacTix',
      category: 'Event Management',
      description: 'Smart ticket and event booking',
      ios: 'https://apps.apple.com/in/app/tactix/id6751491909',
      android: '#',
      tech: 'React Native • Firebase • Payment'
    },
    {
      id: 12,
      title: 'Lista',
      category: 'Productivity',
      description: 'Shopping list and recipe app',
      ios: 'https://apps.apple.com/in/app/lista-shopping-list-recipe/id6535685681',
      android: '#',
      tech: 'React Native • Firebase • API'
    },
    {
      id: 13,
      title: 'Dot Event',
      category: 'Event Planning',
      description: 'Organize and track events effortlessly',
      ios: 'https://apps.apple.com/in/app/dot-event/id6743077718',
      android: '#',
      tech: 'React Native • Firebase • Calendar'
    }
  ];

  return (
    <div className="page portfolio-page">
      <div className="content-wrapper">
        <div className="projects-header">
          <span className="section-label">PORTFOLIO</span>
          <h1 className="section-title">Mobile Apps & Projects</h1>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="app-icon-placeholder">
                  {project.title.charAt(0).toUpperCase()}
                </div>
                <div className="project-overlay">
                  <a
                    href="#"
                    className="project-link"
                    onClick={(e) => handleViewClick(e, project.title, project.ios, project.android)}
                  >
                    View App
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {platformModal.open && (
        <div className="platform-modal-overlay" onClick={closeModal}>
          <div className="platform-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{platformModal.project}</h3>
            <p>Choose a platform to download:</p>
            <div className="platform-buttons">
              <a
                href={platformModal.ios}
                target="_blank"
                rel="noopener noreferrer"
                className={`platform-btn ios ${platformModal.ios === '#' ? 'disabled' : ''}`}
                onClick={(e) => platformModal.ios === '#' && e.preventDefault()}
              >
                iOS
              </a>
              <a
                href={platformModal.android}
                target="_blank"
                rel="noopener noreferrer"
                className={`platform-btn android ${platformModal.android === '#' ? 'disabled' : ''}`}
                onClick={(e) => platformModal.android === '#' && e.preventDefault()}
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

export default Portfolio;
