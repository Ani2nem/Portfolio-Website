import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link to="Home" spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link  to="About" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">About</Link>
            <Link to="Skills" spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link to="Contact" spy={true} smooth={true} offset={300} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar