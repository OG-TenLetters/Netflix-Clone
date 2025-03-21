import React from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__left">
            <img src={Logo} alt="" />
            <ul>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar__right">
          <img src={search_icon} className='icons' alt="" />
          <p>Children</p>
          <img src={bell_icon} className='icons' alt="" />
          <div className="navbar__profile">
          <img src={profile_img} className='profile' alt="" />
          <img src={caret_icon} className='' alt="" />
          <div className="dropdown">
            <p>
              Sign Out of Netflix
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar