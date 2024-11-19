import React from 'react'
import './aboutMe.css'

const AboutMe = () =>{
    return (
        <div>
            <h1 className="aboutMeTitle" id="About">About Me</h1>  
            <div className='textContainer'>
            <p className="aboutMe">I am a Computer Science student 
            graduating from The University of Texas at Dallas in Dec 2026 . Proficient in Java, 
            JavaScript, Python, C++, and C, I excel in technologies such as AWS, MongoDB, React.js, 
            and Node.js. With a solid foundation in Agile methodologies, Git, and GitHub, I bring diverse 
            experience and a commitment to impactful solutions in computer science.</p>
             </div>
             <img src="/assets/memoji.gif" alt="memeoji" className='memoji'></img>
        </div>
        
    )
}

export default AboutMe