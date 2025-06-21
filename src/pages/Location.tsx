import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import paris from '../assets/pic/paris.jpg';
import bali from '../assets/pic/bali.webp';
import newyork from '../assets/pic/newyork.avif';
import locationsBanner from '../assets/locations-banner.jpg';

interface LocationDetailProps {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
}

const LocationDetail: React.FC<{ location: LocationDetailProps }> = ({ location }) => (
  <Container className="py-5">
    <h1 className="text-center mb-4">{location.name}</h1>
    <Row className="g-4">
      <Col md={6}>
        <img 
          src={location.image} 
          alt={location.name} 
          className="img-fluid rounded"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Text>
              <p>{location.description}</p>
              <h4 className="mt-4">Highlights:</h4>
              <ul className="list-unstyled">
                {location.highlights.map((highlight, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    {highlight}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-100 mt-4">
                Book Your Trip
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const Location: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const destinationId = location.pathname.split('/').pop();

  const locations: LocationDetailProps[] = [
    {
      id: 'paris',
      name: 'Paris, France',
      image: paris,
      description: 'The city of lights and love, home to iconic landmarks like the Eiffel Tower and Louvre.',
      highlights: [
        'Eiffel Tower and Louvre Museum',
        'Romantic Seine River Cruise',
        'World-class Cuisine',
        'Fashion Capital of the World'
      ]
    },
    {
      id: 'bali',
      name: 'Bali, Indonesia',
      image: bali,
      description: 'A tropical paradise known for its beaches, temples, and serene landscapes.',
      highlights: [
        'Beautiful Beaches',
        'Ancient Temples',
        'Luxury Resorts',
        'Cultural Experiences'
      ]
    },
    {
      id: 'newyork',
      name: 'New York, USA',
      image: newyork,
      description: 'The vibrant city that never sleeps — from Times Square to Central Park.',
      highlights: [
        'Times Square and Broadway',
        'Central Park',
        'World-class Museums',
        'Diverse Cuisine'
      ]
    }
  ];

  const selectedLocation = locations.find(loc => loc.id === destinationId);

  if (selectedLocation) {
    return <LocationDetail location={selectedLocation} />;
  }

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(${locationsBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center'
        }}
      >
        <Container>
          <h1 className="display-4">Discover Your Next Adventure</h1>
          <p className="lead">Explore the world with us</p>
        </Container>
      </div>

      {/* Search Section */}
      <Container className="py-5">
        <div className="p-4 bg-light rounded-3">
          <h2 className="text-center mb-4">Search Your Destination</h2>
          <Form>
            <Row className="g-3">
              <Col md={8}>
                <Form.Group controlId="searchTerm">
                  <Form.Control
                    type="text"
                    placeholder="Enter destination name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Button variant="primary" className="w-100" onClick={() => console.log('Search')}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>

      {/* Locations Grid */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Popular Destinations</h2>
        <Row className="g-4">
          {locations.map((location) => (
            <Col key={location.id} md={4}>
              <Link to={`/destination/${location.id}`} className="text-decoration-none">
                <Card className="shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={location.image}
                    className="rounded"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{location.name}</Card.Title>
                    <Button variant="outline-primary" className="w-100">
                      Explore Now
                    </Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Location;