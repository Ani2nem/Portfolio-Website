import React from 'react'
import './aboutMe.css'

const AboutMe = () =>{
    return (
        <div>
            <h1 className="aboutMeTitle" id="About">About Me</h1>  
            <div className='textContainer'>
            <p className="aboutMe">I’m a Software Engineer focused on cloud-native infrastructure, high-velocity development, and agentic AI systems. I build distributed, event-driven serverless applications on AWS that scale autonomously and cut out the friction.
            Currently at Hagerty, I own the full architecture for Node.js serverless platforms supporting $32M+ ARR. I love solving real-world challenges through clean architecture, creative automation, and constantly leveling up in cloud technologies and AI.</p>
             </div>
             <img src="/assets/memoji.gif" alt="memeoji" className='memoji'></img>
        </div>
        
    )
}

export default AboutMe