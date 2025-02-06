import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    if (status === 'success') clearFields();

    return () => window.removeEventListener('resize', handleResize);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
      clearFields();
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  
  const mobileInputContainerStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '15px',
    marginTop: '15px',
  };

  const mobileInputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem 0 0 0.375rem',
    backgroundColor: '#2d3748', 
    border: '1px solid #4a5568', 
    outline: 'none',
    flex: '1',
  };

  const mobileButtonStyle = {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'linear-gradient(to right,rgb(255, 0, 157),rgb(116, 15, 163))',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0 0.375rem 0.375rem 0',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <Col lg={12}>
      {/* Desktop Version */}
      {!isMobile && (
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      )}

      {/* Mobile Version */}
      {isMobile && (
        <div className="flex-1 w-full">
          <form className="flex items-center justify-center" onSubmit={handleSubmit} style={mobileInputContainerStyle}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={mobileInputStyle}
            />
            <button
              type="submit"
              style={mobileButtonStyle}
            >
              Subscribe
            </button>
          </form>
        </div>
      )}
    </Col>
  );
};
