import React from 'react';
import './Projects.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = [
    {
      image: "/assets/EcommerceImg.png",
      alt: "ecommerceimg",
      github: "https://github.com/Ani2nem/AshramamStore",
      link: "https://anirudh-e-store.vercel.app/"
    },
    {
      image: "/assets/RepCounterImage.png",
      alt: "repcounterimg",
      github: "https://github.com/Ani2nem/Muscle-Learning",
      link: "https://github.com/Ani2nem/Muscle-Learning"
    },
    {
      image: "/assets/Debt-a-wayImg.png",
      alt: "debtawayimg",
      github: "https://github.com/Sathwik6/Debt-A-Way",
      link: "https://debt-a-way.vercel.app/",
    },
    {
      image: "/assets/dupImgsImg.png",
      alt: "dupimgsimg",
      github: "https://github.com/Ani2nem/img_duplicate_detector",
      link: "https://github.com/Ani2nem/img_duplicate_detector"
    }
  ];

  return (
    <section>
      <h1 className="projectsTitle" id="Projects">Projects</h1>  
      <Slider {...settings} className="slider">
        {projects.map((project, index) => (
          <div key={index} className="slide">
            <a href={project.link} target="_blank" rel="noopener noreferrer"> 
              <img
                src={project.image}
                alt={project.alt}
                className="slideImg"
              />
            </a>
            <div className='project-links'>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img src="/assets/Icons/githubIcon.png" alt="github" className="githubIcon"/>
                <p> Code</p>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src="/assets/Icons/rocket.png" alt="rocket" className="githubIcon"/>
                <p>Try!</p>
              </a>
              
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;