import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './Footer.css'; // Create this if you want to move styles out

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-custom text-white pt-4">
      <Container className="text-center">
        <Row>
          <Col md={6} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Connect</h5>
            <div className="social">
              <a href="https://facebook.com"><i className='bx bxl-facebook'></i></a>
              <a href="https://instagram.com"><i className='bx bxl-instagram'></i></a>
              <a href="https://twitter.com"><i className='bx bxl-twitter'></i></a>
              <a href="https://linkedin.com"><i className='bx bxl-linkedin'></i></a>
              <a href="https://youtube.com"><i className='bx bxl-youtube'></i></a>
              <a href="https://github.com"><i className='bx bxl-github'></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
