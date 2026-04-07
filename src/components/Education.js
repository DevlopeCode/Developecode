import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { profile } from "../data/profile";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Education</h2>
                  <Row className="g-4">
                    {profile.education.map((e) => (
                      <Col md={6} key={e.degree}>
                        <div className="card-surface">
                          <div className="card-title">{e.degree}</div>
                          <div className="card-subtitle">{e.school}</div>
                          <div className="card-meta">{e.period}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

