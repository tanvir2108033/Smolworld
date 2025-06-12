import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Cost.css';

interface CostFormData {
  location: string;
  hotel: string;
  nights: number;
  flight: string;
  other: number;
}

const Cost: React.FC = () => {
  const [formData, setFormData] = useState<CostFormData>({
    location: '',
    hotel: '',
    nights: 1,
    flight: '',
    other: 0
  });

  const [totalCost, setTotalCost] = useState<number>(0);

  const hotelPrices: { [key: string]: number } = {
    grand: 200,
    ocean: 150,
    skyline: 180
  };

  const flightPrices: { [key: string]: number } = {
    paris: 600,
    bali: 700,
    newyork: 550
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nights' || name === 'other' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hotelCost = hotelPrices[formData.hotel] * formData.nights;
    const flightCost = flightPrices[formData.flight];
    const total = hotelCost + flightCost + formData.other;
    setTotalCost(total);
  };

  return (
    <div>
      <section className="page-header">
        <Container>
          <h1 className="display-5 fw-bold">Vacation Cost Estimator</h1>
          <p className="lead">Calculate your total vacation cost based on tickets, hotels, and activities.</p>
        </Container>
      </section>

      <section className="container">
        <div className="form-section">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Choose Destination</Form.Label>
              <Form.Select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a destination</option>
                <option value="paris">Paris, France</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="newyork">New York, USA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Hotel</Form.Label>
              <Form.Select
                name="hotel"
                value={formData.hotel}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a hotel</option>
                <option value="grand">Grand Palace Hotel (Paris) - $200/night</option>
                <option value="ocean">Oceanview Resort (Bali) - $150/night</option>
                <option value="skyline">Skyline Inn (New York) - $180/night</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Nights</Form.Label>
              <Form.Control
                type="number"
                name="nights"
                value={formData.nights}
                onChange={handleInputChange}
                min="1"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Flight Option</Form.Label>
              <Form.Select
                name="flight"
                value={formData.flight}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a flight</option>
                <option value="paris">Flight to Paris - $600</option>
                <option value="bali">Flight to Bali - $700</option>
                <option value="newyork">Flight to New York - $550</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Other Activities Cost ($)</Form.Label>
              <Form.Control
                type="number"
                name="other"
                value={formData.other}
                onChange={handleInputChange}
                min="0"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Calculate Total
            </Button>
          </Form>

          <div className="mt-4">
            <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cost; 