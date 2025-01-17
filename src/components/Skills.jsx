import React, { useState, useEffect } from 'react';
import reactSvg from '../assets/img/react.svg';
import NesjSvg from '../assets/img/Nest.svg';
import node from '../assets/img/node.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/js.svg';
import reactNative from '../assets/img/reactN.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 464);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const skills = [
    { name: "React", icon: reactSvg, percentage: 85, description: "React description" },
    { name: "Nest.js", icon: NesjSvg, percentage: 70, description: "Nest.js description" },
    { name: "Node.js", icon: node, percentage: 90, description: "Node.js description" },
    { name: "HTML", icon: html, percentage: 95, description: "HTML description" },
    { name: "JavaScript", icon: javascript, percentage: 90, description: "JavaScript description" },
    { name: "React Native", icon: reactNative, percentage: 75, description: "React Native description" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item per row on mobile
    },
  };

  const mobileStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px', // Add space between items
  };

  const itemStyle = {
    width: 120,
    height: 120,
    margin: '0 auto',
    position: 'relative',
  };

  const iconStyle = {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '50%',
    height: '50%',
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* Always show the intro text on desktop */}
              {!isMobile && (
                <p>
                  I am a passionate full-stack developer with a focus on building modern and responsive web applications.
                  With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
                </p>
              )}

              {/* Carousel for larger screens */}
              {!isMobile ? (
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <div style={itemStyle}>
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: "#D5006D", stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: "#402539", stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                        </svg>

                        <CircularProgressbar
                          value={skill.percentage}
                          styles={buildStyles({
                            pathColor: "url(#gradient)",
                            trailColor: "transparent",
                            textColor: "#000",
                            strokeLinecap: "round",
                          })}
                        />
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={iconStyle}
                        />
                      </div>
                      <h5 style={{ textAlign: 'center', marginTop: 10 }}>{skill.name}</h5>
                     
                    </div>
                  ))}
                </Carousel>
              ) : (
                // Mobile view: 3 items per column, no descriptions
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {skills.map((skill, index) => (
                    <div key={index} style={mobileStyle}>
                      <div style={itemStyle}>
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: "#D5006D", stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: "#402539", stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                        </svg>

                        <CircularProgressbar
                          value={skill.percentage}
                          styles={buildStyles({
                            pathColor: "url(#gradient)",
                            trailColor: "transparent",
                            textColor: "#000",
                            strokeLinecap: "round",
                          })}
                        />
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={iconStyle}
                        />
                      </div>
                      <h5 style={{ textAlign: 'center', marginTop: 10 }}>{skill.name}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
