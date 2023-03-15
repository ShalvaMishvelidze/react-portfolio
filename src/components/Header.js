import React from 'react';
import { html, css, js, react, figma, sass, ts } from '../img';

const Header = () => {
  return (
    <header id="home">
      <h1 className="my-name gradient-text">Hello, I'm Shalva</h1>
      <p className="job-desc">Front-End Developer</p>
      <h2 className="skills-header gradient-text">My Skills:</h2>
      <div className="skills">
        <div className="skill">
          <img src={html} alt="skill-logo" />
          <h4>HTML</h4>
        </div>
        <div className="skill">
          <img src={css} alt="skill-logo" />
          <h4>CSS</h4>
        </div>
        <div className="skill">
          <img src={js} alt="skill-logo" />
          <h4>JavaScript</h4>
        </div>
        <div className="skill">
          <img src={ts} alt="skill-logo" />
          <h4>TypeScript</h4>
        </div>
        <div className="skill">
          <img src={react} alt="skill-logo" />
          <h4>React JS</h4>
        </div>
        <div className="skill">
          <img src={figma} alt="skill-logo" />
          <h4>Figma</h4>
        </div>
        <div className="skill">
          <img src={sass} alt="skill-logo" />
          <h4>SASS</h4>
        </div>
      </div>
      <a href="#projects" className="projects-btn">
        My Projects
      </a>
    </header>
  );
};

export default Header;
