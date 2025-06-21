import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import ticket1 from '../assets/pic/ticket1.jpg';
import ticket2 from '../assets/pic/ticket2.jpg';
import ticket3 from '../assets/pic/ticket3.jpg';

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

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Book Your Journey</h1>
      
      {/* Search Form */}
      <Card className="mb-4">
        <Card.Body>
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
      <Row>
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
    </Container>
  );
};

export default Tickets;