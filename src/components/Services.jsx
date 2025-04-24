import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import '../App.css';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "Developing mobile apps for your business.",
  },
  {
    id: 6,
    title: "AI & Machine Learning Solutions",
    description: "Designing and integrating intelligent systems powered by machine learning, deep learning, and data-driven insights.",
  }
];

const Service = () => {
  return (
    <div className="bg-transparent" id="service" style={{padding:'15px 0'}}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontFamily: 'CentraNo2, sans-serif', fontWeight: '400', fontSize: '2.5rem' }}>
          My Services
        </h2>
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col
              key={service.id}
              xs={12} sm={6} md={4} lg={4} 
              className="d-flex justify-content-center mb-5"
            >
              <Card
                className=" text-white border-0 shadow-lg hover-scale"
                style={{
                  transition: "transform 0.3s",
                  transform: "scale(1)",
                  padding: "30px", 
                  background:'#151515',
                  margin: "15px",  
                  borderRadius: "15px", 
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="mt-2"
                    style={{
                      background: "linear-gradient(to right, rgb(112, 2, 116), rgb(255, 0, 221))",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      fontFamily: 'CentraNo2-bold, sans-serif',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                    }}
                  >
                    {service.title}
                  </Card.Title>
                  <Card.Text
                    className="mt-3"
                    style={{
                      color: "#D3D3D3", 
                      fontFamily: 'CentraNo2-medium, sans-serif', 
                      fontSize: "1rem", 
                      lineHeight: "1.5", 
                    }}
                  >
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
