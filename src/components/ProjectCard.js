import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  blurb,
  techStack = [],
  bullets = [],
  links = {},
  tag,
}) => {
  const hasOverlay = true;
  const imageFallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#AA367C"/><stop offset="1" stop-color="#4A2FBD"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="60" y="120" font-family="Arial" font-size="52" fill="white" opacity="0.85">${title}</text></svg>`
    );

  const openLinks = Object.entries(links).filter(([, v]) => Boolean(v));

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageFallback} alt={title} loading="lazy" />
        {hasOverlay && (
          <div className="proj-txtx">
            <div className="proj-tag">{tag || "Project"}</div>
            <h4>{title}</h4>
            <span>{blurb}</span>

            {techStack?.length > 0 && (
              <div className="proj-stack">
                {techStack.slice(0, 6).map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {bullets?.length > 0 && (
              <ul className="proj-bullets">
                {bullets.slice(0, 3).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {openLinks.length > 0 && (
              <div className="proj-links">
                {openLinks.map(([k, v]) => (
                  <a
                    key={k}
                    className="proj-link"
                    href={v}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {k === "android"
                      ? "Android"
                      : k === "ios"
                        ? "iOS"
                        : "Link"}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Col>
  )
}
