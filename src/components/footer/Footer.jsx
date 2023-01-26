import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'

const footer = () => {
  return (
   <footer>
    <a href="#"className='footer__logo'>Egator</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testinomials">Testinomial</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
    <a href="https://facebook.com"><BsFacebook /></a>
    <a href="https://instagram.com"><SiInstagram /></a>
    <a href="https://twitter.com"><SiTwitter /></a>
    </div>

    <div className="footer__copyrigt">
    <small>&copy; Deepak. All right reversed.</small>
      
    

    </div>
   </footer>

  )
}

export default footer
