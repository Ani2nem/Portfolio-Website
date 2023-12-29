import React from "react";
import "./footer.css";
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <section className="footer">
        <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>
            <button className="upBtn">^</button>
        </Link>

        <div className="icons">
        <a href="https://www.linkedin.com/in/anirudhnemmani/" target="_blank" rel="noreferrer">
            <img src="/assets/Icons/linkedinIcon.png" alt="linkedin" className="linkedinIcon" />
            </a>
        <a href="https://github.com/Ani2nem" target='_blank' rel="noreferrer">
            <img src="/assets/Icons/githubIcon.png" alt="github" className="githubIcon"/>
            </a>
        <a href="/assets/Tech_Resume.pdf" target="_blank" rel="noreferrer">
            <img src="/assets/Icons/resumeIcon.png" alt="resume" className="resumeIcon" />
        </a>
        </div>

        <p className="contact-text">913-295-2960   |   anirudh.nemmani@yahoo.com</p>
        <p className="footerMsg">Anirudh Nemmani 2023 ©</p>
        </section>
    )
}

export default Footer;