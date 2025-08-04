import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/navicon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleRedirect = (event, mobileUrl, fallbackUrl) => {
    if (isMobile) {
      event.preventDefault();
      let clicked = Date.now();
      let openedApp = false;
  
      const visibilityChangeHandler = () => {
        if (document.hidden) {
          openedApp = true;
        }
      };
  
      document.addEventListener("visibilitychange", visibilityChangeHandler);
  
      window.location.href = mobileUrl;
  
      setTimeout(() => {
        document.removeEventListener("visibilitychange", visibilityChangeHandler);
  
        if (!openedApp && Date.now() - clicked < 2000) {
          window.location.href = fallbackUrl;
        }
      }, 2000);
    }
  };
  
  
  
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <p style={{color: 'white', marginBottom:'-2px'}}>Dimbiniaina Fitahiana</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                <a 
                  href="https://www.linkedin.com/in/fitahiana-razafimahatratra-14940b335"
                  onClick={(e) => handleRedirect(e, "linkedin://profile/in/fitahiana-razafimahatratra-14940b335", "https://www.linkedin.com/in/fitahiana-razafimahatratra-14940b335")}
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <span style={{ margin: '0 4px' }}></span>

                {/* <a 
                  href="https://www.facebook.com/fitahiana.razafi"
                  onClick={(e) => handleRedirect(e, "fb://profile/fitahiana.razafi", "https://www.facebook.com/fitahiana.razafi")}
                >
                  <img src={navIcon2} alt="Facebook" />
                </a> */}

                <a 
                  href="https://github.com/FitahianaDimbiniaina"
                  onClick={(e) => handleRedirect(e, "github://github.com/FitahianaDimbiniaina", "https://github.com/FitahianaDimbiniaina")}
                >
                  <img src={navIcon3} alt="GitHub" />
                </a>
              </div>


              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
