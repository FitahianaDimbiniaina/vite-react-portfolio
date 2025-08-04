import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/navicon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
         
          <div size={12} sm={6} className="text-center ">
            <div className="social-icon">
             <a href="https://www.linkedin.com/in/fitahiana-razafimahatratra-14940b335"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/fitahiana.razafi/"><img src={navIcon2} alt="" /></a>
             <a href="https://github.com/FitahianaDimbiniaina"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
