import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mylogo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/upwork.png';
import { profile } from "../data/profile";

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
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href={profile.socials.facebook} target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href={profile.socials.upwork} target="_blank" rel="noreferrer"><img src={navIcon3} alt="Upwork" /></a>
            </div>
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
