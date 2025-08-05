import React from 'react';
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import projImg1 from "../assets/img/PaperTrail.png";
import projImg2 from "../assets/img/bt.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import fakestore from "../assets/img/fakestore.png";
import face_recognition from '../assets/img/face_recognitionImg.png';
import "./Project.css";
import { link, text } from 'framer-motion/client';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const projects = [
    {
      title: "Business Training",
      description:
        "A mobile E-learning platform offering training modules, progress tracking, and interactive resources.",
      imgUrl: projImg2,
      url: "",
      github: [],
      technologies: [
        { name: "React Native", logo: "https://cdn.simpleicons.org/react" }
      ]
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "An attendance app that uses facial recognition to verify identities and track presence.",
      imgUrl: face_recognition,
      url: "",
      github:[{link:"https://github.com/FitahianaDimbiniaina/face_recognition.git"}],
      technologies: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python" },
        { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch" },
        { name: "MTCNN", logo: "https://cdn.simpleicons.org/python" } 
      ]
    },
    {
      title: "Paper Trail",
      description:
        "An intuitive letter management app that helps users organize, store, and quickly retrieve letters for efficient correspondence.",
      imgUrl: projImg1,
      url: "",
      github:[],
      technologies: [
        { name: "React", logo: "https://cdn.simpleicons.org/react" },
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" }
      ]
    },
    {
      title: "supermarket ETL",
      description:"A supermarket ETL pipeline that extracts data from a CSV file, transforms it, and loads it into a postgre database for analysis.",
      imgUrl: "https://cdn.simpleicons.org/postgresql",
      url: "",
      github: [{link: "https://github.com/FitahianaDimbiniaina/Supermarket_ETL",
          image: "https://cdn.simpleicons.org/github"}]
  ,
      technologies: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" }
      ]
    },  
    // {
    //   title: "FakeStore",
    //   description:
    //     "An e-commerce app with a minimalistic and user-friendly UI inspired by iOS design aesthetics.",
    //   imgUrl: fakestore,
    //   url: "https://myfakestore-ecommerce.netlify.app",
    //  github: [],
    //   technologies: [ 
    //     { name: "React", logo: "https://cdn.simpleicons.org/react" },
    //     { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" }
    //   ]
    // }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`project-item ${isEven ? 'even' : 'odd'}`}
            >
              <div className="project-image-wrapper">
                <img src={project.imgUrl} alt={project.title} className="project-image" />
                <div className="project-description-mobile">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Technologies */}
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <div className="tech-item" key={i}>
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
               <div className="project-links">
              {project.github && project.github.map((link, i) => (
                <div className="project-link-item" key={i}>              
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code
                  </a>
                </div>
              ))}
            </div>


                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="project-description-desktop"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <div className="tech-item" key={i}>
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                    {project.github && project.github.map((link, i) => (
                    <div className="project-link-item" key={i}>              
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link mt-3"
                      >
                        View Code
                      </a>
                    </div>
                 ))}
                  </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </Container>
      <img src={colorSharp2} alt="Background decoration" className="projects-bg" />
    </section>
  );
};
