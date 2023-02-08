import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MANSI</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/mansigupta1907/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/mansi1924" target="_blank"><FaGithub/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; MANSI gupta. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer