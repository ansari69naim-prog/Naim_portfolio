import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Best Developer of the Year',
      organization: 'Tech Excellence Awards',
      year: '2024',
      description: 'Recognized for outstanding contributions to web development and innovative solutions.'
    },
    {
      id: 2,
      title: 'Innovation Award',
      organization: 'Global Tech Summit',
      year: '2023',
      description: 'Awarded for creating innovative AI-powered solutions that transformed business processes.'
    },
    {
      id: 3,
      title: 'Excellence in Full Stack Development',
      organization: 'Developer Conference',
      year: '2023',
      description: 'Acknowledged for expertise in both frontend and backend technologies.'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      year: '2022',
      description: 'Recognized for significant contributions to open-source projects and community engagement.'
    },
    {
      id: 5,
      title: 'Hackathon Winner',
      organization: 'CodeFest 2022',
      year: '2022',
      description: 'First place winner for developing an innovative solution in 24-hour hackathon competition.'
    },
    {
      id: 6,
      title: 'Rising Star Developer',
      organization: 'Tech Industry Awards',
      year: '2021',
      description: 'Honored as an emerging talent in software development with exceptional potential.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'MongoDB Certified Developer',
    'React Advanced Certification',
    'Node.js Professional Certification',
    'Google Cloud Professional'
  ];

  return (
    <div className="page awards-page">
      <div className="content-wrapper">
        <h1>Awards & Recognition</h1>
        <p className="subtitle">Achievements and certifications throughout my career</p>
        
        <div className="awards-section">
          <h2>Awards</h2>
          <div className="awards-list">
            {awards.map((award) => (
              <div key={award.id} className="award-card">
                <div className="award-icon">🏆</div>
                <div className="award-content">
                  <div className="award-header">
                    <h3>{award.title}</h3>
                    <span className="award-year">{award.year}</span>
                  </div>
                  <h4 className="organization">{award.organization}</h4>
                  <p className="description">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">📜</div>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
