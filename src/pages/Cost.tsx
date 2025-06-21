import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

// Define type for activity costs
interface ActivityCosts {
  sightseeing: number;
  adventure: number;
  cultural: number;
  relaxation: number;
  [key: string]: number;
}

interface CostCalculatorProps {
  destination: string;
  travelers: number;
  duration: number;
  accommodation: 'standard' | 'premium' | 'luxury';
  transport: 'economy' | 'business' | 'first';
  activities: string[];
  food: 'standard' | 'gourmet' | 'fineDining';
}

const Cost: React.FC = () => {
  const [formData, setFormData] = useState<CostCalculatorProps>({
    destination: '',
    travelers: 1,
    duration: 7,
    accommodation: 'standard',
    transport: 'economy',
    activities: [],
    food: 'standard'
  });

  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      activities: checked 
        ? [...(prev.activities || []), value] 
        : (prev.activities || []).filter(activity => activity !== value)
    }));
  };

  const calculateCosts = () => {
    const baseCosts = {
      standard: 100,
      premium: 150,
      luxury: 200
    } as const;

    const transportCosts = {
      economy: 50,
      business: 100,
      first: 150
    } as const;

    const foodCosts = {
      standard: 30,
      gourmet: 50,
      fineDining: 80
    } as const;

    const activityCosts: ActivityCosts = {
      sightseeing: 20,
      adventure: 30,
      cultural: 25,
      relaxation: 15
    } as const;

    const baseAccommodation = baseCosts[formData.accommodation] || 100;
    const transport = transportCosts[formData.transport] || 50;
    const food = foodCosts[formData.food] || 30;
    const activitiesTotal = formData.activities?.reduce((sum, activity) => {
      if (activity in activityCosts) {
        return sum + activityCosts[activity];
      }
      return sum;
    }, 0) || 0;

    const totalCost = (
      (baseAccommodation + transport + food + activitiesTotal) * 
      formData.duration * 
      formData.travelers
    );

    return {
      baseAccommodation,
      transport,
      food,
      activitiesTotal,
      totalCost
    };
  };

  const calculateCost = () => {
    if (!formData.destination.trim()) {
      alert('Please enter a destination');
      return;
    }

    const { totalCost } = calculateCosts();
    setEstimatedCost(totalCost);
    setShowResult(true);
  };

  const renderForm = () => (
    <Card className="shadow-sm">
      <Card.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control 
                type="text" 
                name="destination"
                value={formData.destination}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                placeholder="Enter your destination"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="travelers">
              <Form.Label>Number of Travelers</Form.Label>
              <Form.Control 
                type="number" 
                name="travelers"
                value={formData.travelers}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                min="1"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="duration">
              <Form.Label>Duration (days)</Form.Label>
              <Form.Control 
                type="number" 
                name="duration"
                value={formData.duration}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                min="1"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="accommodation">
              <Form.Label>Accommodation</Form.Label>
              <Form.Select 
                name="accommodation"
                value={formData.accommodation}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
                required
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="transport">
              <Form.Label>Transport</Form.Label>
              <Form.Select 
                name="transport"
                value={formData.transport}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
                required
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="food">
              <Form.Label>Food Plan</Form.Label>
              <Form.Select 
                name="food"
                value={formData.food}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
                required
              >
                <option value="standard">Standard</option>
                <option value="gourmet">Gourmet</option>
                <option value="fineDining">Fine Dining</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Activities (Select all that apply)</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              <Form.Check 
                type="checkbox" 
                label="Sightseeing" 
                name="activities"
                value="sightseeing"
                checked={formData.activities?.includes('sightseeing')}
                onChange={handleActivityChange}
              />
              <Form.Check 
                type="checkbox" 
                label="Adventure" 
                name="activities"
                value="adventure"
                checked={formData.activities?.includes('adventure')}
                onChange={handleActivityChange}
              />
              <Form.Check 
                type="checkbox" 
                label="Cultural" 
                name="activities"
                value="cultural"
                checked={formData.activities?.includes('cultural')}
                onChange={handleActivityChange}
              />
              <Form.Check 
                type="checkbox" 
                label="Relaxation" 
                name="activities"
                value="relaxation"
                checked={formData.activities?.includes('relaxation')}
                onChange={handleActivityChange}
              />
            </div>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" onClick={calculateCost}>
              Calculate Cost
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );

  const renderCostBreakdown = () => (
    <Card className="shadow-sm">
      <Card.Body>
        <h3 className="text-center mb-3">Estimated Cost Breakdown</h3>
        <div className="d-flex justify-content-between mb-2">
          <span>Base Accommodation:</span>
          <span>${calculateCosts().baseAccommodation}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Transport:</span>
          <span>${calculateCosts().transport}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Food Plan:</span>
          <span>${calculateCosts().food}</span>
        </div>
        {formData.activities?.length > 0 && (
          <div className="d-flex justify-content-between mb-2">
            <span>Activities:</span>
            <span>${calculateCosts().activitiesTotal}</span>
          </div>
        )}
        <div className="d-flex justify-content-between mb-2">
          <span>Duration:</span>
          <span>{formData.duration} days</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Travelers:</span>
          <span>{formData.travelers}</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <h4>Total Cost:</h4>
          <h4>${estimatedCost}</h4>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Travel Cost Calculator</h1>
      
      <Row>
        <Col md={8} className="mx-auto">
          {renderForm()}
        </Col>
      </Row>

      {showResult && (
        <Row>
          <Col md={8} className="mx-auto mt-4">
            {renderCostBreakdown()}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cost;