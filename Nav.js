import React,{ useState, useRef} from 'react'
import './resume.css'
// import Home from './Home';

import { Link } from 'react-router-dom'
import img1 from './pix/img1.jpg';
import  img2 from './pix/img2.jpg';
import logo from './pix/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'







const Nav = () => {
  //responsive nav
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  //scroll effect
    const [display, setDisplay] = useState('')
    const changeDisplay = () => {
        if (window.scrollY > 100) {
            setDisplay(true)
        }
        else {
            setDisplay(false);
        }
    }

window.addEventListener('scroll', changeDisplay);

      return (
          <div className={display ? 'container non-container' : 'container'}>
        <nav ref={navRef}>
          <img className='pie' src={logo} alt='logo' />
              <ul>
                <li>
                  <Link to="/">
                    Profile
                    <div className='about'></div>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/about">
                    About
                    <div className='about'></div>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/Skill">
                    Skil
                    <div className='about'></div>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/resume">
                    Qualification
                    <div className='about'></div>
                  </Link>
                </li>
              </ul>
            <button className='nav-btn-close' onClick={showNavbar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </nav>
          <button className='nav-btn' onClick={showNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          </div>
      )
}

export default Nav