import React from 'react'
import './Footer.css'
import fb_icon from '../../assets/facebook_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import X_icon from '../../assets/twitter_icon.png'
import Ytube_icon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={fb_icon} alt="" />
        <img src={ig_icon} alt="" />
        <img src={X_icon} alt="" />
        <img src={Ytube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Home</li>
        <li>About US</li>
        <li>Contact Us</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Policy</li>
        <li>contact@netflix.com </li>
        <li>Jobs</li>
        <li>Legal Notices</li>
        <li> Head Quarter</li>
        <li>+1-999-000-8888</li>
      </ul>
      <div className="copyright-text">
        ©1997 Netflix, Inc. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
