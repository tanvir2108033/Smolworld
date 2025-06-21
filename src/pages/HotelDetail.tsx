import React, { useState } from 'react';
import { Badge, Button, Card, Carousel, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  roomTypes: RoomType[];
  reviews: Review[];
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: string;
  features: string[];
}

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1
  });

  const hotels: Hotel[] = [
    {
      id: '1',
      name: 'Grand Palace Hotel',
      location: 'Paris, France',
      rating: 5,
      price: 299,
      description: 'Luxurious accommodation in the heart of Paris with stunning views of the Eiffel Tower. Experience world-class service and elegant French hospitality in this historic landmark hotel.',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Fitness Center', 'Concierge Service', 'Room Service', 'Parking'],
      roomTypes: [
        {
          id: 'deluxe',
          name: 'Deluxe Room',
          description: 'Spacious room with city view and modern amenities',
          price: 299,
          capacity: 2,
          size: '35 sqm',
          features: ['City View', 'King Bed', 'Balcony', 'Mini Bar', 'Free WiFi']
        },
        {
          id: 'suite',
          name: 'Executive Suite',
          description: 'Luxury suite with separate living area and premium services',
          price: 499,
          capacity: 4,
          size: '60 sqm',
          features: ['Eiffel Tower View', 'Living Room', 'Jacuzzi', 'Butler Service', 'Premium WiFi']
        },
        {
          id: 'presidential',
          name: 'Presidential Suite',
          description: 'Ultimate luxury with panoramic views and exclusive amenities',
          price: 999,
          capacity: 6,
          size: '120 sqm',
          features: ['Panoramic View', 'Private Terrace', 'Private Pool', '24/7 Butler', 'Helicopter Service']
        }
      ],
      reviews: [
        {
          id: '1',
          author: 'Sarah Johnson',
          rating: 5,
          date: '2024-05-15',
          comment: 'Absolutely stunning hotel with impeccable service. The view of the Eiffel Tower from our room was breathtaking!',
          avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        {
          id: '2',
          author: 'Michael Chen',
          rating: 5,
          date: '2024-05-10',
          comment: 'The staff went above and beyond to make our stay memorable. The spa and pool facilities are world-class.',
          avatar: 'https://randomuser.me/api/portraits/men/44.jpg'
        },
        {
          id: '3',
          author: 'Emma Davis',
          rating: 4,
          date: '2024-05-08',
          comment: 'Beautiful hotel in a perfect location. The rooms are spacious and clean. Highly recommend!',
          avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
        }
      ]
    },
    {
      id: '2',
      name: 'Ocean View Resort',
      location: 'Bali, Indonesia',
      rating: 4.5,
      price: 399,
      description: 'Premium beachfront resort with private villas and world-class amenities. Experience tropical paradise with stunning ocean views and authentic Balinese hospitality.',
      images: [
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['Beach Access', 'Infinity Pool', 'Spa', 'Water Sports', 'Restaurant', 'Bar', 'Free WiFi', 'Shuttle Service'],
      roomTypes: [
        {
          id: 'villa',
          name: 'Beach Villa',
          description: 'Private villa with direct beach access and outdoor shower',
          price: 399,
          capacity: 2,
          size: '45 sqm',
          features: ['Beach View', 'Private Pool', 'Outdoor Shower', 'Garden', 'Free WiFi']
        },
        {
          id: 'suite',
          name: 'Ocean Suite',
          description: 'Luxury suite with panoramic ocean views and premium amenities',
          price: 699,
          capacity: 4,
          size: '80 sqm',
          features: ['Ocean View', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'Premium WiFi']
        }
      ],
      reviews: [
        {
          id: '1',
          author: 'David Wilson',
          rating: 5,
          date: '2024-05-12',
          comment: 'Paradise found! The beach villa was incredible with direct access to the ocean. Staff was incredibly friendly.',
          avatar: 'https://randomuser.me/api/portraits/men/23.jpg'
        },
        {
          id: '2',
          author: 'Lisa Thompson',
          rating: 4,
          date: '2024-05-05',
          comment: 'Beautiful resort with amazing views. The spa treatments were heavenly. Will definitely return!',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
        }
      ]
    },
    {
      id: '3',
      name: 'Skyline Hotel',
      location: 'Tokyo, Japan',
      rating: 5,
      price: 499,
      description: 'Modern hotel with panoramic city views and traditional Japanese hospitality. Experience the perfect blend of contemporary luxury and authentic Japanese culture.',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9e1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
      ],
      amenities: ['City View', 'Onsen', 'Tea Ceremony', 'Restaurant', 'Fitness Center', 'Concierge', 'Free WiFi', 'Shuttle Service'],
      roomTypes: [
        {
          id: 'standard',
          name: 'Standard Room',
          description: 'Comfortable room with city views and modern amenities',
          price: 499,
          capacity: 2,
          size: '30 sqm',
          features: ['City View', 'Queen Bed', 'Mini Bar', 'Free WiFi', 'Tea Set']
        },
        {
          id: 'deluxe',
          name: 'Deluxe Room',
          description: 'Spacious room with panoramic city views and premium services',
          price: 799,
          capacity: 3,
          size: '45 sqm',
          features: ['Panoramic View', 'King Bed', 'Balcony', 'Premium WiFi', 'Butler Service']
        }
      ],
      reviews: [
        {
          id: '1',
          author: 'Yuki Tanaka',
          rating: 5,
          date: '2024-05-14',
          comment: 'Exceptional service and stunning views of Tokyo. The onsen experience was unforgettable!',
          avatar: 'https://randomuser.me/api/portraits/women/78.jpg'
        },
        {
          id: '2',
          author: 'Robert Kim',
          rating: 5,
          date: '2024-05-09',
          comment: 'Perfect location with amazing city views. The tea ceremony was a highlight of our stay.',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        }
      ]
    }
  ];

  const currentHotel = hotels.find(hotel => hotel.id === id);

  if (!currentHotel) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Hotel Not Found</h2>
          <p>The hotel you're looking for doesn't exist.</p>
          <Link to="/hotels" className="btn btn-primary">Back to Hotels</Link>
        </div>
      </Container>
    );
  }

  const handleBooking = (room: RoomType) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    alert('Booking submitted successfully!');
    setShowBookingModal(false);
  };

  const getAmenityIcon = (amenity: string): string => {
    switch (amenity.toLowerCase()) {
      case 'free wifi': return '📶';
      case 'swimming pool': return '🏊';
      case 'restaurant': return '🍽️';
      case 'parking': return '🅿️';
      case 'concierge service': return '🔔';
      case 'spa': return '💆';
      case 'fitness center': return '💪';
      case 'beach access': return '🏖️';
      case 'infinity pool': return '🏊';
      case 'water sports': return '🏄';
      case 'bar': return '🍸';
      case 'shuttle service': return '🚐';
      case 'city view': return '🏙️';
      case 'onsen': return '♨️';
      case 'tea ceremony': return '🍵';
      default: return '🔔';
    }
  };

  return (
    <div className="hotel-detail-page">
      <Container className="py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/hotels" className="text-decoration-none">Hotels</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{currentHotel.name}</li>
          </ol>
        </nav>

        {/* Hotel Header */}
        <div className="hotel-header mb-4">
          <h1 className="mb-2">{currentHotel.name}</h1>
          <p className="text-muted mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            {currentHotel.location}
          </p>
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={i < Math.floor(currentHotel.rating) ? 'text-warning' : 'text-muted'} 
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted">{currentHotel.rating} out of 5</span>
          </div>
        </div>

        {/* Image Carousel */}
        <Row className="mb-5">
          <Col>
            <Carousel>
              {currentHotel.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded"
                    src={image}
                    alt={`${currentHotel.name} ${index + 1}`}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            {/* Description */}
            <Card className="mb-4">
              <Card.Body>
                <h3>About This Hotel</h3>
                <p>{currentHotel.description}</p>
              </Card.Body>
            </Card>

            {/* Amenities */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Hotel Amenities</h3>
                <Row>
                  {currentHotel.amenities.map((amenity, index) => (
                    <Col key={index} md={6} className="mb-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">{getAmenityIcon(amenity)}</span>
                        <span>{amenity}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Room Types */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Available Room Types</h3>
                {currentHotel.roomTypes.map((room) => (
                  <Card key={room.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col md={8}>
                          <h5>{room.name}</h5>
                          <p className="text-muted">{room.description}</p>
                          <div className="mb-2">
                            <Badge bg="info" className="me-2">{room.capacity} Guests</Badge>
                            <Badge bg="secondary" className="me-2">{room.size}</Badge>
                          </div>
                          <div>
                            {room.features.map((feature, index) => (
                              <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </Col>
                        <Col md={4} className="text-end">
                          <div className="mb-2">
                            <h4 className="text-primary">${room.price}</h4>
                            <small className="text-muted">per night</small>
                          </div>
                          <Button 
                            variant="primary" 
                            onClick={() => handleBooking(room)}
                          >
                            Book Now
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>

            {/* Reviews */}
            <Card>
              <Card.Body>
                <h3>Guest Reviews</h3>
                {currentHotel.reviews.map((review) => (
                  <div key={review.id} className="border-bottom pb-3 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <img 
                        src={review.avatar} 
                        alt={review.author}
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px' }}
                      />
                      <div>
                        <h6 className="mb-0">{review.author}</h6>
                        <div>
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={i < review.rating ? 'text-warning' : 'text-muted'} 
                              style={{ fontSize: '12px' }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <small className="text-muted ms-auto">{review.date}</small>
                    </div>
                    <p className="mb-0">{review.comment}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            {/* Quick Booking Card */}
            <Card className="sticky-top" style={{ top: '20px' }}>
              <Card.Body>
                <h4>Quick Booking</h4>
                <p className="text-muted">Starting from ${currentHotel.price}/night</p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-100 mb-3"
                  onClick={() => handleBooking(currentHotel.roomTypes[0])}
                >
                  Book Your Stay
                </Button>
                <div className="text-center">
                  <small className="text-muted">
                    Free cancellation up to 24 hours before check-in
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Booking Modal */}
      <Modal show={showBookingModal} onHide={() => setShowBookingModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Your Stay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRoom && (
            <div className="mb-4">
              <h5>{selectedRoom.name}</h5>
              <p className="text-muted">{selectedRoom.description}</p>
              <h4 className="text-primary">${selectedRoom.price}/night</h4>
            </div>
          )}
          <Form onSubmit={handleBookingSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Guests</Form.Label>
                  <Form.Select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Rooms</Form.Label>
                  <Form.Select
                    value={bookingData.rooms}
                    onChange={(e) => setBookingData({...bookingData, rooms: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid">
              <Button type="submit" variant="primary" size="lg">
                Confirm Booking
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HotelDetail; 