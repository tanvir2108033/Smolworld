import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hotel1 from '../assets/pic/hotel1.jpeg';
import hotel2 from '../assets/pic/hotel2.jpg';
import hotel3 from '../assets/pic/hotel3.avif';
import './Hotels.css';

const Hotels: React.FC = () => {
  const hotels = [
    {
      id: '1',
      name: 'Grand Palace Hotel',
      location: 'Paris, France',
      rating: 5,
      image: hotel1,
      description: 'Luxurious accommodation in the heart of Paris with stunning views of the Eiffel Tower.',
      price: 299
    },
    {
      id: '2',
      name: 'Ocean View Resort',
      location: 'Bali, Indonesia',
      rating: 4.5,
      image: hotel2,
      description: 'Premium beachfront resort with private villas and world-class amenities.',
      price: 399
    },
    {
      id: '3',
      name: 'Skyline Hotel',
      location: 'Tokyo, Japan',
      rating: 5,
      image: hotel3,
      description: 'Modern hotel with panoramic city views and traditional Japanese hospitality.',
      price: 499
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Featured Hotels</h1>
      <Row>
        {hotels.map((hotel) => (
          <Col key={hotel.id} md={4} className="mb-4">
            <Link 
              to={`/hotel/${hotel.id}`} 
              className="hotel-link"
            >
              <Card className="h-100 shadow-sm hotel-card">
                <Card.Img 
                  variant="top" 
                  src={hotel.image} 
                  className="rounded-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-3">{hotel.name}</Card.Title>
                  <Card.Text className="mb-3">
                    <strong>Location:</strong> {hotel.location}<br />
                    <strong>Rating:</strong> {hotel.rating}★<br />
                    <strong>Price:</strong> ${hotel.price}/night
                  </Card.Text>
                  <Card.Text className="text-muted flex-grow-1">
                    {hotel.description}
                  </Card.Text>
                  <div className="d-grid gap-2 mt-auto">
                    <div className="btn btn-primary">View Details</div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hotels;