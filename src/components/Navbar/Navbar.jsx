import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import Logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logOut } from '../../firebase'


const Navbar = () => {
  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar__left">
            <img src={Logo} alt="" />
            <ul>
              <li className='nope'>Home</li>
              <li className='nope'>Tv Shows</li>
              <li className='nope'>Movies</li>
              <li className='nope'>New & Popular</li>
              <li className='nope'>My List</li>
              <li className='nope'>Browse by Languages</li>
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
            <p onClick={()=> {logOut()}}>
              Sign Out of Netflix
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar