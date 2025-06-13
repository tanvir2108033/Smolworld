import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#004d4d' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <img src={logo} alt="SmolWorld Logo" height="50" className="d-inline-block align-top" /> 
          <span className="d-none d-sm-inline"> SmolWorld</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" className="border-0" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto d-flex align-items-center gap-2 flex-wrap">
            <Nav.Link as={Link} to="/" className="text-center">Home</Nav.Link>
            <Nav.Link as={Link} to="/hotels" className="text-center">Hotels</Nav.Link>
            <Nav.Link as={Link} to="/tickets" className="text-center">Tickets</Nav.Link>
            <Nav.Link as={Link} to="/location" className="text-center">Destination</Nav.Link>
            <Nav.Link as={Link} to="/events" className="text-center">Events</Nav.Link>
            <Nav.Link as={Link} to="/cost" className="text-center">Cost</Nav.Link>
            <Nav.Link as={Link} to="/packages" className="text-center">Packages</Nav.Link>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-2 mt-lg-0">
              <Link to="/register" className="btn btn-light">Sign Up</Link>
              <Link to="/login" className="btn btn-outline-light">Log In</Link>
            </div>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 