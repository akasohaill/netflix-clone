import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import seacrh_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'


const Navbar = () => {

  const navRef=useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse My Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={seacrh_icon} className='icons' />
        <p>Children</p>
        <img src={bell_icon} className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} className='profile' />
          <img src={caret} alt="" />
          <div className="dropdown">
            <p>Sign Out Of  Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
