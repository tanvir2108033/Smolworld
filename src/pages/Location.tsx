import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bali from '../assets/pic/bali.webp';
import newyork from '../assets/pic/newyork.avif';
import paris from '../assets/pic/paris.jpg';
import './Location.css';

// Declare global Google Maps types
declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

interface Location {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Location: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const locations: Location[] = [
    {
      id: 'paris',
      title: 'Paris, France',
      description: 'The city of lights and love, home to iconic landmarks like the Eiffel Tower and Louvre.',
      image: paris
    },
    {
      id: 'bali',
      title: 'Bali, Indonesia',
      description: 'A tropical paradise known for its beaches, temples, and serene landscapes.',
      image: bali
    },
    {
      id: 'newyork',
      title: 'New York, USA',
      description: 'The vibrant city that never sleeps — from Times Square to Central Park.',
      image: newyork
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initialize map
  const initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userLocation);

          if (mapRef.current && window.google) {
            const map = new window.google.maps.Map(mapRef.current, {
              zoom: 14,
              center: userLocation,
              styles: [
                {
                  featureType: "all",
                  elementType: "all",
                  stylers: [{ color: "#eee7db" }]
                }
              ]
            });

            new window.google.maps.Marker({
              position: userLocation,
              map: map,
              title: "You are here!"
            });
          }
        },
        () => {
          console.log("Geolocation failed or was denied.");
        }
      );
    }
  };

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      if (!scriptRef.current) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        scriptRef.current = script;
        document.head.appendChild(script);
      }

      // Define the initMap function globally
      window.initMap = initMap;
    };

    loadGoogleMapsScript();

    // Cleanup
    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      window.initMap = undefined;
    };
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold">Explore Top Travel Locations</h1>
          <p className="lead">Discover breathtaking destinations curated just for you</p>
        </Container>
      </section>

      {/* Search Bar */}
      <section className="container mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="Search Your Destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="me-2"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </Form>
          </Col>
        </Row>
      </section>

      {/* Locations Grid */}
      <section className="container my-5">
        <Row className="g-4">
          {filteredLocations.map(location => (
            <Col md={4} key={location.id} className="card">
              <Link to={`/location/${location.id}`} className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={location.image}
                    className="card-img-top"
                    alt={location.title}
                  />
                  <Card.Body>
                    <Card.Title>{location.title}</Card.Title>
                    <Card.Text>{location.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      {/* Map Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-3">Your Current Location</h2>
        <div ref={mapRef} style={{ height: '400px', width: '100%', borderRadius: '12px' }}></div>
      </div>
    </div>
  );
};

export default Location; 