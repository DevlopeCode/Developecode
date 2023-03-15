import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mylogo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/upwork.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/prabhat-choudhary-641653150/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100048907991276"><img src={navIcon2} alt="" /></a>
                <a href="https://www.upwork.com/freelancers/~019190b83a2e48cbfa?viewMode=1&s=1110580755107926016/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
