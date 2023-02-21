import React from 'react';
import { linkedIn } from '../img';

const Footer = () => {
  return (
    <footer id="social">
      <h2 className="gradient-text">Contact Me</h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/shalva-mishvelidze-212559257/"
      >
        <img src={linkedIn} alt="linkedin" />
      </a>
    </footer>
  );
};

export default Footer;
