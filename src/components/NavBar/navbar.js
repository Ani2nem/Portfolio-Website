import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link to="About" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">About</Link>
            <Link to="Projects" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link to="Skills" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link to="Contact" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar