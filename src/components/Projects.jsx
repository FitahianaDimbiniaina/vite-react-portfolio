import React from 'react';
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
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

  return (
    <section id="projects" style={{ padding: '50px 0', position: 'relative' }}>
      <Container style={{ width: '100%', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: '#ffffff' }}>
          Projects
        </h2>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '400px',
                marginBottom: '50px',
                backgroundColor: '#121212',
                flexDirection: isEven ? 'row' : 'row-reverse',
              }}
            >
              <div style={{ width: '50%', height: '100%' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  clipPath: isEven
                    ? 'polygon(0 0, 100% 0, 90% 100%, 0 100%)'
                    : 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)'
                }}>
                  <img src={project.imgUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{
                  width: '50%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '20px',
                  color: '#ffffff',
                  textAlign: 'left',
                }}
              >
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '1rem' }}>{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      color: '#ffffff',
                      border: '2px solid #ffffff',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      width: 'fit-content',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </Container>
      <img src={colorSharp2} alt="Background decoration" style={{ position: 'absolute', right: '0', bottom: '0', width: '300px', opacity: '0.5', zIndex: '-1' }} />
    </section>
  );
};