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
      description: "Project blah blah blah...",
      link: "https://github.com/Ani2nem/AshramamStore"
    },
    {
      image: "/assets/RepCounterImage.png",
      alt: "repcounterimg",
      description: "Project blah blah blah...",
      link: "https://github.com/Ani2nem/Muscle-Learning"
    },
    {
      image: "/assets/Debt-a-wayImg.png",
      alt: "debtawayimg",
      description: "Project blah blah blah...",
      link: "https://github.com/Sathwik6/Debt-A-Way"
    },
    {
      image: "/assets/dupImgsImg.png",
      alt: "dupimgsimg",
      description: "Project blah blah blah...",
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
            <div className='project-description'>
              {/* You can add the description here if needed */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;