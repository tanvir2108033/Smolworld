import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css';

interface PackageFeature {
  name: string;
  included: boolean;
}

interface Package {
  name: string;
  price: number;
  description: string;
  features: PackageFeature[];
  recommended?: boolean;
}

const packages: Package[] = [
  {
    name: "Weekend Getaway",
    price: 299,
    description: "Perfect for short trips and weekend adventures",
    features: [
      { name: "2-3 Day Itinerary Planning", included: true },
      { name: "Hotel Booking Assistance", included: true },
      { name: "Local Transportation Guide", included: true },
      { name: "Restaurant Recommendations", included: true },
      { name: "24/7 Support", included: false },
      { name: "Airport Transfers", included: false },
      { name: "Activity Bookings", included: false },
      { name: "Travel Insurance", included: false }
    ]
  },
  {
    name: "Week Explorer",
    price: 599,
    description: "Ideal for week-long vacations",
    features: [
      { name: "Everything in Weekend Getaway", included: true },
      { name: "7-Day Detailed Itinerary", included: true },
      { name: "Activity Bookings", included: true },
      { name: "Local Guide Arrangements", included: true },
      { name: "24/7 Support", included: false },
      { name: "Airport Transfers", included: false },
      { name: "VIP Experiences", included: false },
      { name: "Travel Insurance", included: false }
    ]
  },
  {
    name: "Premium Journey",
    price: 999,
    description: "For those seeking luxury experiences",
    features: [
      { name: "Everything in Week Explorer", included: true },
      { name: "24/7 Support", included: true },
      { name: "Airport Transfers", included: true },
      { name: "VIP Experiences", included: true },
      { name: "Travel Insurance", included: true },
      { name: "Luxury Hotel Bookings", included: true },
      { name: "Priority Support", included: false },
      { name: "Personal Travel Concierge", included: false }
    ],
    recommended: true
  },
  {
    name: "Elite Experience",
    price: 1999,
    description: "Complete luxury travel planning",
    features: [
      { name: "Everything in Premium Journey", included: true },
      { name: "Personal Travel Concierge", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Experiences", included: true },
      { name: "Private Tours", included: true },
      { name: "Luxury Accommodation Booking", included: true },
      { name: "Exclusive Event Access", included: true },
      { name: "Post-Trip Follow-up", included: true }
    ]
  }
];

const Packages: React.FC = () => {
  return (
    <div className="packages-page">
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold text-center">Our Travel Packages</h1>
          <p className="text-center lead">Choose the perfect package for your dream vacation</p>
        </Container>
      </section>

      <Container className="my-5">
        <Row className="justify-content-center g-4">
          {packages.map((pkg) => (
            <Col key={pkg.name} lg={3} md={6} sm={12}>
              <Card className={`h-100 package-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && (
                  <div className="recommended-badge">Recommended</div>
                )}
                <Card.Body>
                  <Card.Title className="text-center mb-4">
                    <h2>{pkg.name}</h2>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">{pkg.price}</span>
                      <span className="period">/package</span>
                    </div>
                  </Card.Title>
                  <Card.Text className="text-center mb-4">
                    {pkg.description}
                  </Card.Text>
                  <ul className="feature-list">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className={feature.included ? 'included' : 'not-included'}>
                        <span className="feature-icon">
                          {feature.included ? '✓' : '×'}
                        </span>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Link to="/register" className="btn btn-primary w-100">Book Now</Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="faq-section container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                How do I choose the right package?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Consider your travel duration, budget, and desired level of service. Our Weekend Getaway is perfect for short trips, while our Elite Experience offers full concierge service for luxury travelers.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Can I customize my package?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, all packages can be customized to suit your specific needs. Contact our travel experts to discuss your requirements and create your perfect itinerary.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages; 