import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { profile } from "../data/profile";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>About</h2>
                  <div className="about-bx">
                    {profile.summary.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <div className="about-meta">
                      <div className="meta-item">
                        <span className="meta-label">Location</span>
                        <span className="meta-value">{profile.location}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Email</span>
                        <a
                          className="meta-link"
                          href={`mailto:${profile.email}`}
                        >
                          {profile.email}
                        </a>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Phone</span>
                        <span className="meta-value">
                          {profile.phones.join(" • ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

