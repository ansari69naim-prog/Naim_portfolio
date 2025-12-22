import React, { useState } from 'react';

const CodingSkills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Mobile Development & Architecture',
      icon: '📱',
      color: '#00ff88',
      gradient: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
      skills: [
        { name: 'React Native', level: 'Advanced', percentage: 95, description: 'Expert in building scalable, high-performance cross-platform mobile applications' },
        { name: 'React Hooks', level: 'Advanced', percentage: 92, description: 'Proficient in optimizing functional components using useState, useEffect, useMemo, useCallback, useRef' },
        { name: 'Modular Architecture', level: 'Advanced', percentage: 90, description: 'Implementing best practices for code reusability, maintainability, and scalability' }
      ]
    },
    {
      title: 'Programming Languages & Frameworks',
      icon: '💻',
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0088ff 100%)',
      skills: [
        { name: 'TypeScript', level: 'Advanced', percentage: 88, description: 'Strong experience in type-safe development and modern JavaScript patterns' },
        { name: 'JavaScript (ES6+)', level: 'Expert', percentage: 95, description: 'Deep knowledge of modern JavaScript features and asynchronous programming' }
      ]
    },
    {
      title: 'State Management & Data Flow',
      icon: '🔄',
      color: '#ff00aa',
      gradient: 'linear-gradient(135deg, #ff00aa 0%, #ff3388 100%)',
      skills: [
        { name: 'Redux & Redux Toolkit', level: 'Expert', percentage: 93, description: 'Expertise in managing complex application states efficiently' },
        { name: 'Recoil & Context API', level: 'Advanced', percentage: 87, description: 'Implementing modern state management solutions' },
        { name: 'Flux Architecture', level: 'Advanced', percentage: 85, description: 'Implemented Redux Thunk & Redux Saga for asynchronous operations' }
      ]
    },
    {
      title: 'Data Management & Offline Storage',
      icon: '💾',
      color: '#ffaa00',
      gradient: 'linear-gradient(135deg, #ffaa00 0%, #ff8800 100%)',
      skills: [
        { name: 'SQLite & Realm', level: 'Advanced', percentage: 88, description: 'Experience in handling local storage and offline capabilities' },
        { name: 'WatermelonDB & Async Storage', level: 'Advanced', percentage: 85, description: 'Implemented efficient offline-first data synchronization' },
        { name: 'MMKV & Encrypted Storage', level: 'Advanced', percentage: 82, description: 'Implemented secure storage solutions for sensitive user data' }
      ]
    },
    {
      title: 'Networking & API Integration',
      icon: '🌐',
      color: '#aa00ff',
      gradient: 'linear-gradient(135deg, #aa00ff 0%, #8800ff 100%)',
      skills: [
        { name: 'REST API & GraphQL', level: 'Expert', percentage: 94, description: 'Implemented efficient API communication using @apollo/client, Axios, Fetch API' },
        { name: 'WebSocket & Socket.io', level: 'Advanced', percentage: 87, description: 'Integrated real-time messaging, notifications, and live location tracking' }
      ]
    },
    {
      title: 'Cloud Services & Integrations',
      icon: '☁️',
      color: '#00ffff',
      gradient: 'linear-gradient(135deg, #00ffff 0%, #00ddff 100%)',
      skills: [
        { name: 'Firebase', level: 'Expert', percentage: 92, description: 'Firestore, Auth, Cloud Messaging, Cloud Functions - Expertise in authentication, push notifications & cloud storage' },
        { name: 'AWS Amplify & AppSync', level: 'Advanced', percentage: 83, description: 'Experience in scalable backend solutions for mobile applications' }
      ]
    },
    {
      title: 'CI/CD & Deployment',
      icon: '🚀',
      color: '#ff6600',
      gradient: 'linear-gradient(135deg, #ff6600 0%, #ff4400 100%)',
      skills: [
        { name: 'Firebase App Distribution', level: 'Advanced', percentage: 86, description: 'Managed automated testing and release cycles' },
        { name: 'App Store Deployment', level: 'Expert', percentage: 91, description: 'Expertise in Google Play Console & Apple App Store submission and release management' }
      ]
    },
    {
      title: 'UI/UX Development & Styling',
      icon: '🎨',
      color: '#ff0066',
      gradient: 'linear-gradient(135deg, #ff0066 0%, #ff0088 100%)',
      skills: [
        { name: 'Material UI & React Native Paper', level: 'Expert', percentage: 93, description: 'Expertise in building custom UI components and responsive designs' },
        { name: 'Styled Components & NativeBase', level: 'Advanced', percentage: 88, description: 'Creating maintainable and scalable styling solutions' },
        { name: 'Lottie Animations', level: 'Advanced', percentage: 85, description: 'Implemented engaging animations and smooth user interactions with gesture handling' }
      ]
    },
    {
      title: 'Navigation & Deep Linking',
      icon: '🧭',
      color: '#00ff00',
      gradient: 'linear-gradient(135deg, #00ff00 0%, #00dd00 100%)',
      skills: [
        { name: 'React Navigation', level: 'Expert', percentage: 94, description: 'Advanced navigation setup with Stack, Bottom Tabs, Drawer, and Dynamic Linking' },
        { name: 'Deep Linking', level: 'Advanced', percentage: 87, description: 'Enabled seamless in-app navigation across platforms with dynamic links' }
      ]
    },
    {
      title: 'Authentication & Security',
      icon: '🔐',
      color: '#ffdd00',
      gradient: 'linear-gradient(135deg, #ffdd00 0%, #ffbb00 100%)',
      skills: [
        { name: 'Firebase Auth & OAuth', level: 'Expert', percentage: 92, description: 'Implemented secure authentication and user authorization flows with JWT' },
        { name: 'Biometric Authentication', level: 'Advanced', percentage: 86, description: 'Integrated Face ID and Touch ID for enhanced security' }
      ]
    },
    {
      title: 'Performance Optimization & Scalability',
      icon: '⚡',
      color: '#ff9900',
      gradient: 'linear-gradient(135deg, #ff9900 0%, #ff7700 100%)',
      skills: [
        { name: 'Code Optimization', level: 'Expert', percentage: 91, description: 'Code Splitting, Memoization, Lazy Loading - Optimized app performance and load times' },
        { name: 'Hermes Engine', level: 'Advanced', percentage: 84, description: 'Improved JavaScript execution performance for React Native apps' }
      ]
    },
    {
      title: 'Real-Time & Advanced Features',
      icon: '🎯',
      color: '#00aaff',
      gradient: 'linear-gradient(135deg, #00aaff 0%, #0088ff 100%)',
      skills: [
        { name: 'Agora SDK', level: 'Advanced', percentage: 85, description: 'Integrated real-time communication for Audio/Video Calling and Live Streaming' },
        { name: 'Geolocation & Live Tracking', level: 'Expert', percentage: 93, description: 'Implemented Google Maps & OpenStreetMap-based live tracking solutions' },
        { name: 'Push Notifications', level: 'Expert', percentage: 95, description: 'Firebase Cloud Messaging - Configured in-app and background push notifications' }
      ]
    }
  ];

  return (
    <div className="page coding-skills-page">
      <div className="content-wrapper">
        <div className="skills-hero">
          <h1>Technical Skills & Expertise</h1>
          <p className="subtitle">Comprehensive skill set in Mobile Development & Modern Technologies</p>
          <div className="skills-stats">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Skill Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category-card ${activeCategory === index ? 'active' : ''}`}
              style={{ '--category-color': category.color, '--category-gradient': category.gradient } as React.CSSProperties}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">{category.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-detail-item">
                    <div className="skill-detail-header">
                      <h3 className="skill-detail-name">{skill.name}</h3>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                    <div className="skill-progress-bar">
                      <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }}>
                        <span className="skill-percentage-text">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <div className="expertise-summary">
            <h2>Core Expertise</h2>
            <div className="expertise-tags">
              <span className="expertise-tag">React Native Expert</span>
              <span className="expertise-tag">Cross-Platform Development</span>
              <span className="expertise-tag">Performance Optimization</span>
              <span className="expertise-tag">Real-Time Applications</span>
              <span className="expertise-tag">Cloud Integration</span>
              <span className="expertise-tag">State Management</span>
              <span className="expertise-tag">API Integration</span>
              <span className="expertise-tag">UI/UX Implementation</span>
              <span className="expertise-tag">Security & Authentication</span>
              <span className="expertise-tag">CI/CD Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingSkills;
