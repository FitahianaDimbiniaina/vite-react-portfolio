import React from "react";
import { FaDocker } from "react-icons/fa";
import './TechXp.css';

const Techexp = () => {
  return (
    <div className="techexp-wrapper">
      <div className="techexp-card">
        <h2 className="techexp-title">Other Technical Experience</h2>

        <div className="techexp-content">
          <FaDocker size={48} className="techexp-icon" />
          <div>
            <h3 className="techexp-subtitle">Docker Compose for API Management</h3>
            <p className="techexp-text">    
            Configured and managed multi-container Docker Compose environments to run Gravitee API management platform locally, enabling rapid development and testing of microservices architectures.      
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techexp;
