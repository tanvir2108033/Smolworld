import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Register.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  departure: string;
  return: string;
  destinations: string[];
  package: string;
  terms: boolean;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    departure: '',
    return: '',
    destinations: [],
    package: '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'terms') {
        setFormData(prev => ({ ...prev, terms: checked }));
      } else {
        // Handle destination checkboxes
        setFormData(prev => ({
          ...prev,
          destinations: checked
            ? [...prev.destinations, value]
            : prev.destinations.filter(dest => dest !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Register <span className="text-primary">Here</span></h2>
      <Form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your full name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                pattern="\\d{10}"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid 10-digit phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                min="1"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your age.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  name="gender"
                  value="male"
                  label="Male"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  name="gender"
                  value="female"
                  label="Female"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Departure Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="departure"
                value={formData.departure}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Return Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="return"
                value={formData.return}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group>
              <Form.Label>Travel Destination</Form.Label>
              <div>
                {['Kashmir', 'Istanbul', 'Paris', 'Bali', 'Dubai', 'Geneva', 'Port Blair', 'Rome'].map((dest) => (
                  <Form.Check
                    key={dest}
                    inline
                    type="checkbox"
                    name="destinations"
                    value={dest.toLowerCase()}
                    label={dest}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group>
              <Form.Label>Package</Form.Label>
              <div>
                {['Bronze', 'Silver', 'Gold', 'Platinum'].map((pkg) => (
                  <Form.Check
                    key={pkg}
                    inline
                    type="radio"
                    name="package"
                    value={pkg.toLowerCase()}
                    label={pkg}
                    onChange={handleChange}
                    required
                  />
                ))}
              </div>
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="terms"
                label="I accept the Terms & Conditions."
                checked={formData.terms}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={12} className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register; 