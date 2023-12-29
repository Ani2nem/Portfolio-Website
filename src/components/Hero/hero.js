import React from 'react';
import './hero.css';
import TypeWriter from '../TypeWriter/typewriter';

const Hero = () => {
  return (
    <div className="hero-container" id="Home">
      <img src="/assets/hero.jpeg" alt="hero" className="heroImg" />
      <div className="text">
        <TypeWriter text="Hi! I'm Anirudh." highlightColor="rgb(210, 48, 210)" />
        <text className="hero-text">
          A Software Engineer with a passion for unraveling complex problems. Proficient in Java for robust applications,
          Python for insightful data visualization, and adept in the MERN stack for full-stack web development.
          <div className="icons">
        <a href="https://www.linkedin.com/in/anirudhnemmani/" target="_blank">
            <img src="/assets/Icons/linkedinIcon.png" alt="linkedin" className="linkedinIcon" />
            </a>
        <a href="https://github.com/Ani2nem" target='_blank'>
            <img src="/assets/Icons/githubIcon.png" alt="github" className="githubIcon"/>
            </a>
        <a href="/assets/Tech_Resume.pdf" target="_blank">
            <img src="/assets/Icons/resumeIcon.png" alt="resume" className="resumeIcon" />
        </a>
        </div>
          
        </text>
      </div>
    </div>
  );
};

export default Hero;
