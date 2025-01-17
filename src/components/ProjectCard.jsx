import { Col } from "react-bootstrap";
import { FaEye, FaEyeSlash,FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span style={{gap:'15px'}}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaEye />
                
              </a>
            ) : (
              <FaEyeSlash style={{ color: "white" }} />
            )}
            <span>&nbsp;</span>
            <FaGithub />
          </span>
        </div>
      </div>
    </Col>
  );
};
