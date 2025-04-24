import React from 'react';
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import projImg1 from "../assets/img/PaperTrail.png";
import projImg2 from "../assets/img/bt.png";
import projImg3 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import fakestore from "../assets/img/fakestore.png";
import face_recognition from '../assets/img/face_recognitionImg.png';
import "./Project.css";

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
      title: "Face Recognition System",
      description:
        "A real-time face recognition app using PyTorch, MTCNN, and custom FaceNet-based embeddings for identity verification",
      imgUrl: face_recognition,
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
      title: "FakeStore",
      description: "An e-commerce app with a minimalistic user-friendly UI following iOS design aesthetics.",
      imgUrl: fakestore,
      url: "https://myfakestore-ecommerce.netlify.app"
    },
    {
      title: "Fitahiana",
      description: "Another portfolio of mine built with React.js",
      imgUrl: projImg3,
      url: "https://fitahiana-portfolio.netlify.app"
    },
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