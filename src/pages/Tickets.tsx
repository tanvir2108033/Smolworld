import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bus from '../assets/pic/bus.webp';
import plane from '../assets/pic/plane.webp';
import parisFlight from '../assets/pic/ticket1.jpg';
import eurorail from '../assets/pic/ticket2.jpg';
import disneyland from '../assets/pic/ticket3.jpg';
import train from '../assets/pic/train.jpg';
import './Tickets.css';

interface Ticket {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'transport' | 'pass';
}

const Tickets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tickets: Ticket[] = [
    {
      id: 'plane',
      title: 'Flight Tickets',
      description: 'Book flights to top destinations with flexible options and discounts.',
      image: plane,
      category: 'transport'
    },
    {
      id: 'bus',
      title: 'Bus Tickets',
      description: 'Affordable intercity and tourist buses across major cities.',
      image: bus,
      category: 'transport'
    },
    {
      id: 'train',
      title: 'Train Tickets',
      description: 'Book train rides with scenic routes and reserved seats worldwide.',
      image: train,
      category: 'transport'
    },
    {
      id: 'eurorail',
      title: 'EuroRail Pass',
      description: 'Travel across Europe by train with our exclusive discounted passes.',
      image: eurorail,
      category: 'pass'
    },
    {
      id: 'disneyland',
      title: 'Disneyland Entry',
      description: 'Priority entry and full-day access to Disneyland parks worldwide.',
      image: disneyland,
      category: 'pass'
    },
    {
      id: 'paris-flight',
      title: 'Flight to Paris',
      description: 'Book your round-trip to Paris with flexible cancellation and VIP lounge access.',
      image: parisFlight,
      category: 'pass'
    }
  ];

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const transportTickets = filteredTickets.filter(ticket => ticket.category === 'transport');
  const passTickets = filteredTickets.filter(ticket => ticket.category === 'pass');

  return (
    <div>
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold">Book Your Tickets</h1>
          <p className="lead">Choose the best travel options and passes for your journey</p>
        </Container>
      </section>

      <section className="container mt-4">
        <Row className="justify-content-center">
          <div className="col-md-8">
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="Search Your Tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="me-2"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </Form>
          </div>
        </Row>
      </section>

      <section className="container">
        <h2 className="section-title">Transport Tickets</h2>
        <Row className="g-4">
          {transportTickets.map(ticket => (
            <Col md={4} key={ticket.id} className="card">
              <Link to={`/ticket/${ticket.id}`} className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={ticket.image}
                    className="card-img-top"
                    alt={ticket.title}
                  />
                  <Card.Body>
                    <Card.Title>{ticket.title}</Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      <section className="container">
        <h2 className="section-title">Pass Tickets</h2>
        <Row className="g-4">
          {passTickets.map(ticket => (
            <Col md={4} key={ticket.id} className="card">
              <Link to={`/ticket/${ticket.id}`} className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={ticket.image}
                    className="card-img-top"
                    alt={ticket.title}
                  />
                  <Card.Body>
                    <Card.Title>{ticket.title}</Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Tickets; 