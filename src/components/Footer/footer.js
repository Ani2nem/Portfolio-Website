import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <section className="footer">
        <button className="upBtn">^</button>
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
        <p className="footerMsg">Anirudh Nemmani 2023 ©</p>
        </section>
    )
}

export default Footer;