import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#004d4d' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <img src={logo} alt="SmolWorld Logo" height="50" /> SmolWorld
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto d-flex align-items-center gap-2">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
            <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
            <Nav.Link as={Link} to="/location">Destination</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/cost">Cost</Nav.Link>
            <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
            <Link to="/register" className="btn btn-light ms-2">Sign Up</Link>
            <Link to="/login" className="btn btn-outline-light ms-2">Log In</Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 