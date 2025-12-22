import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Naimuddin_Resume.pdf';
    link.download = 'Naimuddin_Ansari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Naim Ansari
        </Link>
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/coding-skills" className="nav-link" onClick={closeMenu}>
              Coding Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/awards" className="nav-link" onClick={closeMenu}>
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-download-btn" onClick={handleDownloadCV}>
              <svg className="download-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
