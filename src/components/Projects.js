import React from 'react';
import {
  gpt3,
  comfyJs,
  comfyReact,
  github,
  githubSVG,
  cocktails,
} from '../img';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Some Of My Projects</h2>
      <div className="projects-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://comfy-store-sm.netlify.app/"
        >
          <img src={comfyReact} alt="react e commerce app" />
          <p>React Comfy Store</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://search-github-user-sm.netlify.app/"
        >
          <img src={github} alt="search github user app" />
          <p>Search GitHub User</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://comfy-store-js-sm.netlify.app/"
        >
          <img src={comfyJs} alt="e commerce app js" />
          <p>JS Comfy Store</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gpt3-website-sm.netlify.app/"
        >
          <img src={gpt3} alt="gpt3 website clone" />
          <p>GPT3 Website</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cocktails-sm.netlify.app/"
        >
          <img src={cocktails} alt="cocktails website js" />
          <p>Cocktails Website</p>
        </a>
      </div>
      <h4>To view source code of my projects visit my Github page</h4>
      <a
        target="_blank"
        rel="noreferrer"
        className="github-link"
        href="https://github.com/shalvamishvelidze"
      >
        <img src={githubSVG} alt="github page link" />
      </a>
    </section>
  );
};

export default Projects;
