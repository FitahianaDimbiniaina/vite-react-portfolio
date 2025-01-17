import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PaperTrail.png";
import projImg2 from "../assets/img/bt.png";
import projImg3 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "Business Training",
      description: "Business Training is a mobile E-learning platform built with React Native, offering training modules, progress tracking, and interactive resources.",
      imgUrl: projImg2,
      url:""
    },
    {
      title: "Paper Trail",
      description: "PaperTrail is an intuitive letter management app built with React, Node.js, and MySQL, enabling users to organize, store, and quickly retrieve letters for efficient correspondence management.",
      imgUrl: projImg1,
      url:""
    },
    {
      title: "Dimbiniaina Fitahiana",
      description:"another portfolio of mine built with react Js",
      imgUrl: projImg3,
      url:'https://fitahiana-portfolio.netlify.app'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <br/>
                    <Row className="text-center justify-content-center">
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
