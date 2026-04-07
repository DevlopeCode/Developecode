import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { profile } from "../data/profile";

export const Extras = () => {
  return (
    <section className="extras" id="extras">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Certifications</h2>
                  <div className="card-surface">
                    <ul className="clean-list">
                      {profile.certifications.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col lg={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Languages</h2>
                  <div className="card-surface">
                    <div className="pill-row">
                      {profile.languages.map((l) => (
                        <span className="pill" key={l.label}>
                          {l.label} — {l.level}
                        </span>
                      ))}
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

