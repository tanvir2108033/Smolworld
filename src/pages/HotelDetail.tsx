import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import grandpalace from '../assets/pic/grandpalace.jpg';
import grandpalace2 from '../assets/pic/grandpalace_2.jpg';
import grandpalace3 from '../assets/pic/grandpalace_3.jpg';
import skyview from '../assets/pic/hotel3.avif';
import ocanview from '../assets/pic/ocanview.png';
import ocanview2 from '../assets/pic/ocanview_2.png';
import ocanview3 from '../assets/pic/ocanview_3.png';
import skyview2 from '../assets/pic/skyview_2.jpg';
import skyview3 from '../assets/pic/skyview_3.jpg';
import './HotelDetail.css';

interface HotelDetails {
  id: string;
  title: string;
  description: string;
  images: string[];
  amenities: string[];
  price: string;
  location: string;
}

const hotels: HotelDetails[] = [
  {
    id: '1',
    title: 'Grand Palace Hotel',
    description: 'Located in the heart of Paris, offering exquisite rooms and top-notch services. Experience luxury at its finest with our world-class amenities and exceptional service.',
    images: [
      grandpalace,
      grandpalace2,
      grandpalace3
    ],
    amenities: [
      'Free WiFi',
      'Swimming Pool',
      'Spa & Wellness Center',
      '24/7 Room Service',
      'Restaurant',
      'Fitness Center'
    ],
    price: '$299/night',
    location: 'Paris, France'
  },
  {
    id: '2',
    title: 'Ocean View Resort',
    description: 'Stunning beachfront resort with panoramic ocean views. Enjoy direct beach access, water sports, and luxurious accommodations in a tropical paradise setting.',
    images: [
      ocanview,
      ocanview2,
      ocanview3
    ],
    amenities: [
      'Private Beach Access',
      'Water Sports Center',
      'Beachfront Restaurant',
      'Infinity Pool',
      'Spa Services',
      'Kids Club'
    ],
    price: '$399/night',
    location: 'Bali, Indonesia'
  },
  {
    id: '3',
    title: 'Tokyo Heights Hotel',
    description: 'Modern luxury hotel in the heart of Tokyo, offering breathtaking city views and authentic Japanese hospitality. Perfect for both business and leisure travelers.',
    images: [
      skyview,
      skyview2,
      skyview3
    ],
    amenities: [
      'High-Speed WiFi',
      'Business Center',
      'Rooftop Bar',
      'Japanese Restaurant',
      'Concierge Service',
      'City View Rooms'
    ],
    price: '$349/night',
    location: 'Tokyo, Japan'
  }
];

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotelDetails = hotels.find(hotel => hotel.id === id) || hotels[0];

  return (
    <Container className="hotel-detail py-5">
      <Row>
        <Col md={8}>
          <div className="hotel-images mb-4">
            <Row>
              {hotelDetails.images.map((image, index) => (
                <Col key={index} xs={6} md={4} className="mb-3">
                  <img
                    src={image}
                    alt={`${hotelDetails.title} - View ${index + 1}`}
                    className="hotel-image img-fluid rounded"
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                  />
                </Col>
              ))}
            </Row>
          </div>
          
          <div className="hotel-header mb-4">
            <h1 className="display-4 fw-bold">{hotelDetails.title}</h1>
            <p className="location">
              <i className="fas fa-map-marker-alt me-2"></i>
              {hotelDetails.location}
            </p>
          </div>

          <div className="hotel-description mb-4">
            <p className="description">{hotelDetails.description}</p>
          </div>
          
          <div className="amenities-section">
            <h3 className="mb-4">
              <i className="fas fa-concierge-bell me-2"></i>
              Hotel Amenities
            </h3>
            <ul className="amenities-list">
              {hotelDetails.amenities.map((amenity, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle me-2"></i>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="booking-card">
            <h3>
              <i className="fas fa-calendar-check me-2"></i>
              Book Your Stay
            </h3>
            <div className="price-container">
              <p className="price">{hotelDetails.price}</p>
              <p className="text-muted text-center mb-4">per night</p>
            </div>
            <Button variant="primary" className="w-100 mb-3">
              <i className="fas fa-check-circle me-2"></i>
              Book Now
            </Button>
            <Button variant="outline-primary" className="w-100">
              <i className="fas fa-envelope me-2"></i>
              Contact Hotel
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelDetail; 