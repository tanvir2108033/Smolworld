import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
    name: "Bronze",
    price: 99,
    description: "Perfect for small businesses just getting started",
    features: [
      { name: "Basic Website Design", included: true },
      { name: "5 Pages", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Contact Form", included: true },
      { name: "Social Media Integration", included: false },
      { name: "SEO Optimization", included: false },
      { name: "Content Management System", included: false },
      { name: "E-commerce Integration", included: false }
    ]
  },
  {
    name: "Silver",
    price: 199,
    description: "Ideal for growing businesses",
    features: [
      { name: "Everything in Bronze", included: true },
      { name: "10 Pages", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Basic SEO Optimization", included: true },
      { name: "Content Management System", included: false },
      { name: "E-commerce Integration", included: false },
      { name: "Custom Animations", included: false },
      { name: "Priority Support", included: false }
    ]
  },
  {
    name: "Gold",
    price: 399,
    description: "For established businesses",
    features: [
      { name: "Everything in Silver", included: true },
      { name: "15 Pages", included: true },
      { name: "Content Management System", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "E-commerce Integration", included: true },
      { name: "Custom Animations", included: true },
      { name: "Priority Support", included: false },
      { name: "Monthly Maintenance", included: false }
    ],
    recommended: true
  },
  {
    name: "Platinum",
    price: 699,
    description: "Complete solution for premium businesses",
    features: [
      { name: "Everything in Gold", included: true },
      { name: "Unlimited Pages", included: true },
      { name: "Priority Support", included: true },
      { name: "Monthly Maintenance", included: true },
      { name: "Custom Development", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Performance Optimization", included: true },
      { name: "Security Features", included: true }
    ]
  }
];

const Packages: React.FC = () => {
  return (
    <div className="packages-page">
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold text-center">Our Packages</h1>
          <p className="text-center lead">Choose the perfect package for your business needs</p>
        </Container>
      </section>

      <Container className="my-5">
        <Row className="justify-content-center g-4">
          {packages.map((pkg) => (
            <Col key={pkg.name} lg={3} md={6}>
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
                      <span className="period">/month</span>
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
                  <button className="btn btn-primary w-100">Get Started</button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages; 