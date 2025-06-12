import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#004d4d', color: 'white' }}>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/register" className="text-white text-decoration-none">Register</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-2">
            <h5>Connect</h5>
            <div className="social d-flex justify-content-center gap-2 fs-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-facebook'></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-twitter'></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-youtube'></i>
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className='bx bxl-github'></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>123 Travel Street, City</li>
              <li>+1 234 567 890</li>
              <li>info@smolworld.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
