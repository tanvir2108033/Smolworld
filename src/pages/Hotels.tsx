import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import hotel1 from '../assets/pic/hotel1.jpeg';
import hotel2 from '../assets/pic/hotel2.jpg';
import hotel3 from '../assets/pic/hotel3.avif';
import HotelCard from '../components/HotelCard';
import './Hotels.css';

interface Hotel {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Hotels: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const hotels: Hotel[] = [
    {
      id: '1',
      title: 'Grand Palace Hotel',
      description: 'Located in the heart of Paris, offering exquisite rooms and top-notch services.',
      image: hotel1
    },
    {
      id: '2',
      title: 'Oceanview Resort',
      description: 'Enjoy breathtaking sea views and relaxing spa treatments in Bali.',
      image: hotel2
    },
    {
      id: '3',
      title: 'Skyline Inn',
      description: 'Modern amenities and central location in New York City.',
      image: hotel3
    }
  ];

  const filteredHotels = hotels.filter(hotel =>
    hotel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold">Top Hotels for Your Stay</h1>
          <p className="lead">Experience luxury and comfort at our handpicked hotels</p>
        </Container>
      </section>

      <section className="container mt-4">
        <Row className="justify-content-center">
          <div className="col-md-8">
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="Search hotels..."
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

      <section className="container my-5">
        <Row className="g-4">
          {filteredHotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              title={hotel.title}
              description={hotel.description}
              image={hotel.image}
            />
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Hotels; 