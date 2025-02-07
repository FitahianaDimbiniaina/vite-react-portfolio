import React from 'react';
import { Container } from "react-bootstrap";
import projImg1 from "../assets/img/PaperTrail.png";
import projImg2 from "../assets/img/bt.png";
import projImg3 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Training",
      description:
        "Business Training is a mobile E-learning platform built with React Native, offering training modules, progress tracking, and interactive resources.",
      imgUrl: projImg2,
      url: ""
    },
    {
      title: "Paper Trail",
      description:
        "PaperTrail is an intuitive letter management app built with React, Node.js, and MySQL, enabling users to organize, store, and quickly retrieve letters for efficient correspondence management.",
      imgUrl: projImg1,
      url: ""
    },
    {
      title: "Dimbiniaina Fitahiana",
      description: "Another portfolio of mine built with React.js",
      imgUrl: projImg3,
      url: "https://fitahiana-portfolio.netlify.app"
    },
  ];


  const sectionStyle = {
    padding: '50px 0',
    position: 'relative',
  };

  const projectsContainerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#ffffff',
  };

  const projectRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '400px',
    marginBottom: '50px',

  };

  const imageContainerStyle = {
    width: '50%',
    height: '100%',
  };

  const textContainerStyle = {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    color: '#ffffff',
    textAlign: 'left',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    width: 'fit-content',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const trapezeStyleLeft = {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
  };

  const trapezeStyleRight = {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const backgroundImageStyle = {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '300px',
    opacity: '0.5',
    zIndex: '-1',
  };

  return (
    <section style={sectionStyle} id="projects">
      <Container style={projectsContainerStyle}>
        <h2 style={headerStyle}>Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...projectRowStyle,
              backgroundColor: '#121212' ,
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            }}
          >
            <div style={imageContainerStyle}>
              <div style={index % 2 === 0 ? trapezeStyleLeft : trapezeStyleRight}>
                <img src={project.imgUrl} alt={project.title} style={imageStyle} />
              </div>
            </div>
            <div style={textContainerStyle}>
              <h3 style={titleStyle}>{project.title}</h3>
              <p style={descriptionStyle}>{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </Container>
      <img src={colorSharp2} alt="Background decoration" style={backgroundImageStyle} />
    </section>
  );
};
