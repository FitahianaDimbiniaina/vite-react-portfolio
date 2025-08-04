import React, { useState, useEffect } from 'react';
import reactSvg from '../assets/img/react.svg';
import NesjSvg from '../assets/img/Nest.svg';
import node from '../assets/img/node.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/js.svg';
import reactNative from '../assets/img/reactN.svg';
import mysql from '../assets/img/mysql.svg';
import postgresql from '../assets/img/postgre.svg'; 
import ts from '../assets/img/typescript-official-svgrepo-com.svg';
import colorSharp from "../assets/img/color-sharp.png";
import chakraUIIcon from "../assets/img/chakraUi.svg";
import materialUIIcon from "../assets/img/materialUi.svg";
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
    { name: "TypeScript", type: "language", icon: ts },
    { name: "MySQL", icon: mysql, type: "database" },
    { name: "PostgreSQL", icon: postgresql, type: "database" },
    { name: "CSS", type: "styling", icon: cssIcon },
    { name: "SCSS", type: "styling", icon: scssIcon },
    { name: "Tailwind CSS", type: "styling", icon: tailwindIcon },
    { name: "Bootstrap", type: "styling", icon: bootstrapIcon },
    { name: "Material UI", type: "styling", icon: materialUIIcon },
    { name: "Chakra UI", type: "styling", icon: chakraUIIcon },
    { name: "Next JS", type: "framework", icon: next },
    { name: "PyTorch", type: "ml", icon: images.pytorchImage },
    { name: "TensorFlow", type: "ml", icon: images.tensorflowImage },
    { name: "Jupyter Notebook", type: "tool", icon: images.jupyterImage },
    { name: "Pandas", type: "data", icon: images.pandasImage },
    { name: "NumPy", type: "data", icon: images.numpyImage },
  ];

  const languages = skills.filter(s => s.type === "language");
  const frameworks = skills.filter(s => s.type === "framework");
  const others = skills.filter(s => !["language", "framework"].includes(s.type));

  const groupStyle = {
    marginBottom: '40px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)',
    gap: '20px',
    justifyItems: 'center',
  };

  const cardStyle = {
    width: 100,
    textAlign: 'center',
  };

  const iconStyle = {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: 10,
  };

  const renderGroup = (title, data) => (
    <div key={title} style={groupStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: 20 }}>{title}</h3>
      <div style={gridStyle}>
        {data.map((skill, idx) => (
          <div key={idx} style={cardStyle}>
            <img src={skill.icon} alt={skill.name} style={iconStyle} />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

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
              {renderGroup("Programming Languages", languages)}
              {renderGroup("Frameworks", frameworks)}
              {renderGroup("Other Technologies", others)}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  );
};
