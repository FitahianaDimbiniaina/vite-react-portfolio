import React, { useState, useEffect } from 'react';
import reactSvg from '../assets/img/react.svg';
import NesjSvg from '../assets/img/Nest.svg';
import node from '../assets/img/node.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/js.svg';
import reactNative from '../assets/img/reactN.svg';
import mysql from '../assets/img/mysql.svg';
import postgresql from '../assets/img/postgre.svg'; 
import ts from '../assets/img/typescript-official-svgrepo-com.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import chakraUIIcon from "../assets/img/chakraUi.svg";
import materialUIIcon from "../assets/img/materialUi.svg"
import tailwindIcon from '../assets/img/tailwind.svg';
import bootstrapIcon from '../assets/img/bootstrap.svg';
import cssIcon from '../assets/img/css.svg';
import scssIcon from '../assets/img/scss.svg';
import next from '../assets/img/nextjs.svg';
import images from '../assets/img/data_science';

export const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const skills = [
    { name: "React", icon: reactSvg, type: "framework" },
    { name: "Nest.js", icon: NesjSvg, type: "framework" },
    { name: "Node.js", icon: node, type: "framework" },
    { name: "React Native", icon: reactNative, type: "framework" },
    { name: "Python", type: "language", icon: images.pythonImage },
    { name: "HTML", icon: html, type: "language" },
    { name: "JavaScript", icon: javascript, type: "language" },
    { name: "MySQL", icon: mysql, type: "database" },
    { name: "PostgreSQL", icon: postgresql, type: "database" },
    {name: "TypeScript", type:"language" ,icon : ts},
    { name: "CSS", type: "Styling Language", icon: cssIcon },
    { name: "SCSS", type: "Styling Language", icon: scssIcon },
    { name: "Tailwind CSS", type: "CSS Framework", icon: tailwindIcon },
    { name: "Bootstrap", type: "CSS Framework", icon: bootstrapIcon },
    { name: "Material UI", type: "React Component Library", icon: materialUIIcon },
    { name: "Chakra UI", type: "React Component Library", icon: chakraUIIcon },
    {name: "Next JS", type: "framework", icon: next},
    { name: "PyTorch", type: "Machine Learning Framework", icon: images.pytorchImage},
    { name: "TensorFlow", type: "Machine Learning Framework", icon: images.tensorflowImage},
    { name: "Jupyter Notebook", type: "Development Environment", icon: images.jupyterImage},
    { name: "Pandas", type: "Data Analysis Library", icon: images.pandasImage},
    { name: "NumPy", type: "Data Analysis Library", icon: images.numpyImage},  
  ];

 
const groupedSkills = {
  framework: skills.filter(skill => skill.type === "framework"),
  language: skills.filter(skill => skill.type === "language"),
  database: skills.filter(skill => skill.type === "database"),
  Library: skills.filter(skill => skill.type === "React Component Library"),
  Styling: skills.filter(skill => skill.type === "Styling Language"),
  cssFramework: skills.filter(skill => skill.type === "CSS Framework"),
  machineLearning: skills.filter(skill => skill.type === "Machine Learning Framework"),
  devEnvironment: skills.filter(skill => skill.type === "Development Environment"),
  dataAnalysis: skills.filter(skill => skill.type === "Data Analysis Library"),
};

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
      items: 1,
    },
  };

  const groupContainerStyle = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: isMobile ? '0px' : '40px'
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

  const mobileItemStyle = {
    ...itemStyle,
    marginBottom : '-15px',

  };
  

  const renderCarousel = (skills, title) => {
    const center = skills.length < 3; 
    
    return (
      <div key={title} style={groupContainerStyle}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{title}</h3>
        {!isMobile ? (
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            className="owl-carousel owl-theme skill-slider"
            containerClass={`carousel-container ${center ? 'carousel-centered' : ''}`}  
            itemClass="carousel-item-padding-40-px"
          >
            {skills.map((skill, index) => (
              <div className="item" key={index}>
                <div style={itemStyle}>
                  <img src={skill.icon} alt={skill.name} style={iconStyle} />
                </div>
                <h5 style={{ textAlign: 'center', marginTop: 10 }}>{skill.name}</h5>
              </div>
            ))}
          </Carousel>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around' }}>
            {skills.map((skill, index) => (
              <div key={index} style={{ textAlign: 'center', width: '40%' , display: 'flex', alignItems: 'center', justifyContent : 'center', flexDirection:'column'}}>
                <div style={mobileItemStyle}>
                  <img src={skill.icon} alt={skill.name} style={iconStyle} />
                </div>
                <div style={mobileItemStyle}>
                <h5 style={{ marginTop: 10 }}>{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technologies I Work With</h2>
              {!isMobile && (
               <p>
               As a full-stack developer, I’m passionate about building elegant and efficient solutions. With a foundation in both frontend and backend technologies—and now AI-powered systems—I create seamless digital experiences from concept to deployment.
             </p>
              )}
              {renderCarousel(groupedSkills.framework, "Frameworks")}
              {renderCarousel(groupedSkills.language, "Programming Languages")}
              {renderCarousel(groupedSkills.dataAnalysis,"data Analysis")}
              {renderCarousel(groupedSkills.devEnvironment,"development environement")}
              {renderCarousel(groupedSkills.machineLearning,"machine learning")}
              {renderCarousel(groupedSkills.database, "Databases")}
              {renderCarousel(groupedSkills.Styling, "Styling languages")}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  );
};
