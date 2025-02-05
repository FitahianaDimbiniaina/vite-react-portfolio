import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx preview">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />

          {/* Button for Preview */}
          {url ? (
            <button onClick={() => window.open(url, "_blank")} className="preview-btn">
              Preview
            </button>
          ) : (
            <button className="contact-form" disabled>
              Preview Unavailable
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};
