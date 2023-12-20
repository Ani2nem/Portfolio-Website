import React from 'react'
import './hero.css'
import TypeWriter from "../TypeWriter/typewriter"


const Hero = () => {

    return (
        <div className="hero-container">
        <img src="/assets/hero.jpeg" alt="hero" className="heroImg" />
        <div className="text">
            <TypeWriter text="Hi! I'm Anirudh."/>
            <text className="hero-text">A Software Engineer ready to dive into impactful projects across various <br/>
            domains. Proficient in a range of technologies and possessing a natural<br/>
            aptitude for problem-solving. 
            </text>
        </div>
    </div>
    
    )
}

export default Hero

