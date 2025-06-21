import React from 'react';
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import artExpo from '../assets/pic/art-expo.avif';
import culturalFest from '../assets/pic/cultural-fest.jpg';
import fireworks from '../assets/pic/fireworks.jpg';
import foodFair from '../assets/pic/food-fair.jpg';
import musicFestival from '../assets/pic/music-festival.jpg';
import ticket1 from '../assets/pic/ticket1.jpg';
import ticket2 from '../assets/pic/ticket2.jpg';
import ticket3 from '../assets/pic/ticket3.jpg';
import winterFest from '../assets/pic/winter-fest.jpg';

const Tickets: React.FC = () => {
  const transportTypes = [
    {
      id: 1,
      name: 'Air Travel',
      image: ticket1,
      description: 'Book your flight tickets with our trusted airline partners'
    },
    {
      id: 2,
      name: 'Train Travel',
      image: ticket2,
      description: 'Comfortable and scenic train journeys across destinations'
    },
    {
      id: 3,
      name: 'Bus Travel',
      image: ticket3,
      description: 'Affordable and convenient bus travel options'
    }
  ];

  const events = [
    {
      id: 1,
      name: 'Summer Music Festival',
      image: musicFestival,
      date: '2024-07-15',
      location: 'Central Park, New York',
      price: '$89',
      category: 'Music',
      description: 'A three-day celebration of music featuring top artists from around the world.',
      available: true
    },
    {
      id: 2,
      name: 'Cultural Heritage Festival',
      image: culturalFest,
      date: '2024-08-20',
      location: 'Downtown Plaza, Bangkok',
      price: '$45',
      category: 'Cultural',
      description: 'Experience the rich traditions and customs of local communities.',
      available: true
    },
    {
      id: 3,
      name: 'International Food Fair',
      image: foodFair,
      date: '2024-09-10',
      location: 'Riverside Market, Paris',
      price: '$35',
      category: 'Food',
      description: 'Taste cuisines from around the world in this culinary extravaganza.',
      available: true
    },
    {
      id: 4,
      name: 'Winter Wonderland Festival',
      image: winterFest,
      date: '2024-12-15',
      location: 'City Square, Tokyo',
      price: '$55',
      category: 'Seasonal',
      description: 'Magical winter celebration with ice sculptures and holiday markets.',
      available: false
    },
    {
      id: 5,
      name: 'New Year Fireworks Spectacular',
      image: fireworks,
      date: '2024-12-31',
      location: 'Harbor Front, Sydney',
      price: '$120',
      category: 'Celebration',
      description: 'Ring in the new year with the most spectacular fireworks display.',
      available: true
    },
    {
      id: 6,
      name: 'Contemporary Art Expo',
      image: artExpo,
      date: '2024-10-05',
      location: 'Modern Art Museum, London',
      price: '$75',
      category: 'Art',
      description: 'Discover cutting-edge contemporary art from emerging and established artists.',
      available: true
    }
  ];

  const categories = ['All', 'Music', 'Cultural', 'Food', 'Seasonal', 'Celebration', 'Art'];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Book Your Journey</h1>
      
      {/* Transport Search Form */}
      <Card className="mb-5">
        <Card.Body>
          <h4 className="mb-3">Transport Tickets</h4>
          <Form>
            <Row>
              <Col md={3}>
                <Form.Group controlId="fromLocation">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" placeholder="Departure location" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="toLocation">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text" placeholder="Destination" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="travelDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={3} className="d-flex align-items-end">
                <Button variant="primary" className="w-100">Search Tickets</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Transport Options */}
      <Row className="mb-5">
        {transportTypes.map((transport) => (
          <Col key={transport.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={transport.image} className="rounded" />
              <Card.Body>
                <Card.Title>{transport.name}</Card.Title>
                <Card.Text>
                  {transport.description}
                </Card.Text>
                <Button variant="primary" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Event Tickets Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Event Tickets</h2>
        
        {/* Event Search Form */}
        <Card className="mb-4">
          <Card.Body>
            <Form>
              <Row>
                <Col md={3}>
                  <Form.Group controlId="eventLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Event location" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="eventDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="eventCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                      <option value="">All Categories</option>
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3} className="d-flex align-items-end">
                  <Button variant="success" className="w-100">Search Events</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {/* Category Filter Buttons */}
        <div className="text-center mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline-primary"
              className="me-2 mb-2"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <Row>
          {events.map((event) => (
            <Col key={event.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={event.image} 
                  className="rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg="info" className="mb-1">{event.category}</Badge>
                    <span className="text-muted small">{event.date}</span>
                  </div>
                  <Card.Title className="h5">{event.name}</Card.Title>
                  <Card.Text className="text-muted small mb-2">
                    📍 {event.location}
                  </Card.Text>
                  <Card.Text className="flex-grow-1">
                    {event.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="h5 text-success mb-0">{event.price}</span>
                    <Button 
                      variant={event.available ? "success" : "secondary"}
                      disabled={!event.available}
                      size="sm"
                    >
                      {event.available ? 'Book Now' : 'Sold Out'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Tickets;
