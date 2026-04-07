import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { profile } from "../data/profile";

export const Contact = () => {
  const primaryPhone = profile.phones?.[1] || profile.phones?.[0];
  const telHref = primaryPhone ? `tel:${primaryPhone.replace(/\s+/g, "")}` : undefined;

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact</h2>
                <p className="contact-lead">
                  Want to collaborate or discuss an opportunity? Reach me on any channel below.
                </p>
                <Row className="g-3">
                  <Col sm={6}>
                    <a className="contact-card" href={telHref}>
                      <div className="contact-card-title">Phone</div>
                      <div className="contact-card-value">{primaryPhone}</div>
                      <div className="contact-card-note">Tap to call</div>
                    </a>
                  </Col>
                  <Col sm={6}>
                    <a className="contact-card" href={`mailto:${profile.email}`}>
                      <div className="contact-card-title">Email</div>
                      <div className="contact-card-value">{profile.email}</div>
                      <div className="contact-card-note">Tap to email</div>
                    </a>
                  </Col>
                  <Col sm={6}>
                    <a
                      className="contact-card"
                      href={profile.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="contact-card-title">WhatsApp</div>
                      <div className="contact-card-value">{profile.phones?.[1] || primaryPhone}</div>
                      <div className="contact-card-note">Open chat</div>
                    </a>
                  </Col>
                  <Col sm={6}>
                    <a
                      className="contact-card"
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="contact-card-title">LinkedIn</div>
                      <div className="contact-card-value">Connect with me</div>
                      <div className="contact-card-note">View profile</div>
                    </a>
                  </Col>
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
