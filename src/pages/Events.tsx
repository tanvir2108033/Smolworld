import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import artExpoImage from '../assets/pic/art-expo.avif';
import culturalFestImage from '../assets/pic/cultural-fest.jpg';
import fireworksImage from '../assets/pic/fireworks.jpg';
import foodFairImage from '../assets/pic/food-fair.jpg';
import musicFestivalImage from '../assets/pic/music-festival.jpg';
import winterFestImage from '../assets/pic/winter-fest.jpg';

interface Event {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  location: string;
  discount?: string;
}

const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">{event.title}</h1>
      <Row className="g-4">
        <Col md={6}>
          <img 
            src={event.image} 
            alt={event.title} 
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                <p className="mb-2">📅 {event.date}</p>
                <p className="mb-2">📍 {event.location}</p>
                <p>{event.description}</p>
                {event.discount && (
                  <p className="text-success fw-bold">{event.discount}% OFF</p>
                )}
              </Card.Text>
              <Button variant="primary" className="w-100">
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Events: React.FC = () => {
  const location = useLocation();
  const eventId = location.pathname.split('/').pop() || '';

  const events: Event[] = [
    {
      id: 'music-festival',
      title: 'Beachside Music Festival',
      image: musicFestivalImage,
      description: 'Dance by the sea with top DJs and amazing vibes in Bali.',
      date: 'July 15-17, 2025',
      location: 'Kuta Beach, Bali'
    },
    {
      id: 'yoga-retreat',
      title: 'Yoga & Wellness Retreat',
      image: culturalFestImage,
      description: 'Find inner peace and rejuvenate in Ubud.',
      date: 'August 1-7, 2025',
      location: 'Ubud, Bali'
    },
    {
      id: 'food-tour',
      title: 'Street Food Tour',
      image: foodFairImage,
      description: 'Explore Bali\'s vibrant food scene with local guides.',
      date: 'Every Saturday',
      location: 'Various Locations, Bali'
    }
  ];

  const discountEvents: Event[] = [
    {
      id: 'fireworks-gala',
      title: 'New Year\'s Fireworks Gala',
      image: fireworksImage,
      description: 'Enjoy the spectacular firework show with a 20% booking discount!',
      date: 'December 31, 2025',
      location: 'Central Park',
      discount: '20'
    },
    {
      id: 'winter-festival',
      title: 'Snowy Winter Festival',
      image: winterFestImage,
      description: 'Get cozy in the Alps with discounted winter fest packages.',
      date: 'January 10-15, 2026',
      location: 'Alps Mountains',
      discount: '15'
    },
    {
      id: 'art-expo',
      title: 'Contemporary Art Expo',
      image: artExpoImage,
      description: 'Book early and get 10% off tickets to global art exhibitions.',
      date: 'February 1-28, 2026',
      location: 'Modern Art Museum',
      discount: '10'
    }
  ];

  const getEventById = (id: string) => {
    return [...events, ...discountEvents].find(e => e.id === id);
  };

  const event = eventId ? getEventById(eventId) : null;

  if (event) {
    return <EventDetail event={event} />;
  }

  return (
    <div className="events-page">
      <Container>
        <h1 className="text-center mb-5">Upcoming Events</h1>
        <Row className="g-4">
          {events.map((event) => (
            <Col key={event.id} md={4}>
              <Link to={`/events/${event.id}`} className="text-decoration-none">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={event.image}
                    className="rounded"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                      <p className="mb-2">📅 {event.date}</p>
                      <p className="mb-2">📍 {event.location}</p>
                      <p>{event.description}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <div className="my-5">
          <h2 className="text-center mb-4 fw-bold">🎉 Special Discount Events</h2>
          <Row className="g-4">
            {discountEvents.map((event) => (
              <Col key={event.id} md={4}>
                <Link to={`/events/${event.id}`} className="text-decoration-none">
                  <Card className="h-100">
                    <div className="discount-tag position-absolute top-0 end-0 m-3 bg-danger text-white p-2 rounded">
                      {event.discount}% OFF
                    </div>
                    <Card.Img
                      variant="top"
                      src={event.image}
                      className="rounded"
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>
                        <p className="mb-2">📅 {event.date}</p>
                        <p className="mb-2">📍 {event.location}</p>
                        <p>{event.description}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Events;