import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { profile } from "../data/profile";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Experience</h2>
                  <div className="timeline">
                    {profile.experience.map((item) => (
                      <div className="timeline-item" key={`${item.company}-${item.role}`}>
                        <div className="timeline-header">
                          <div>
                            <h3 className="timeline-role">{item.role}</h3>
                            <div className="timeline-company">{item.company}</div>
                          </div>
                          <div className="timeline-date">
                            {item.start} — {item.end}
                          </div>
                        </div>
                        <ul className="timeline-list">
                          {item.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

