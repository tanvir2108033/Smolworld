import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import artExpo from '../assets/pic/art-expo.avif';
import culturalFest from '../assets/pic/cultural-fest.jpg';
import fireworks from '../assets/pic/fireworks.jpg';
import foodFair from '../assets/pic/food-fair.jpg';
import musicFestival from '../assets/pic/music-festival.jpg';
import winterFest from '../assets/pic/winter-fest.jpg';
import "./Events.css";

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  discount?: number;
}

const Events: React.FC = () => {
  const regularEvents: Event[] = [
    {
      id: "music-festival",
      title: "Beachside Music Festival",
      description: "Dance by the sea with top DJs and amazing vibes in Bali.",
      image: musicFestival,
    },
    {
      id: "food-fair",
      title: "Global Food Fair",
      description:
        "A gastronomic journey with dishes from all around the world.",
      image: foodFair,
    },
    {
      id: "cultural-fest",
      title: "International Culture Carnival",
      description: "Explore the traditions and dances of different continents.",
      image: culturalFest,
    },
  ];

  const discountEvents: Event[] = [
    {
      id: "fireworks",
      title: "New Year's Fireworks Gala",
      description:
        "Enjoy the spectacular firework show with a 20% booking discount!",
      image: fireworks,
      discount: 20,
    },
    {
      id: "winter-fest",
      title: "Snowy Winter Festival",
      description: "Get cozy in the Alps with discounted winter fest packages.",
      image: winterFest,
      discount: 15,
    },
    {
      id: "art-expo",
      title: "Contemporary Art Expo",
      description:
        "Book early and get 10% off tickets to global art exhibitions.",
      image: artExpo,
      discount: 10,
    },
  ];

  return (
    <div>
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold">Upcoming Events & Festivals</h1>
          <p className="lead">
            Don't miss out on the most exciting travel experiences!
          </p>
        </Container>
      </section>

      <section className="container my-5">
        <Row className="g-4">
          {regularEvents.map((event) => (
            <Col md={4} key={event.id}>
              <Link
                to={`/event/${event.id}`}
                className="text-decoration-none text-dark"
              >
                <Card className="shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={event.image}
                    className="card-img-top"
                    alt={event.title}
                  />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      <section className="container discount-section">
        <h2 className="text-center mb-4 fw-bold">🎉 Special Discount Events</h2>
        <Row className="g-4">
          {discountEvents.map((event) => (
            <Col md={4} key={event.id}>
              <Card className="position-relative shadow-sm h-100">
                {event.discount && (
                  <span className="discount-tag">{event.discount}% OFF</span>
                )}
                <Card.Img
                  variant="top"
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Events;
