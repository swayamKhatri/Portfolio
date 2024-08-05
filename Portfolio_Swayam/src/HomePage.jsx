import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="name">Swayam Khatri</h1>
        <p className="intro">Welcome to my portfolio website!</p>
      </header>
      <section className="interests">
        <h2 className="section-title">Interests</h2>
        <div className="interest">
          <h3 className="interest-title">App Development</h3>
          <p className="interest-description">
            Passionate about building innovative and user-friendly applications. Skilled in React, Node.js, and various mobile development frameworks.
          </p>
        </div>
        <div className="interest">
          <h3 className="interest-title">Cybersecurity</h3>
          <p className="interest-description">
            Dedicated to securing digital environments and safeguarding data. Experienced in penetration testing, security audits, and threat analysis.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">© 2024 Swayam Khatri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;