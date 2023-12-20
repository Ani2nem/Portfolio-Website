import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Technologies</Link>
            <Link className="desktopMenuListItem">Reviews</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar