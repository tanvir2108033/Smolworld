import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ id, title, description, image }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <Link to={`/hotel/${id}`} className="text-decoration-none text-dark">
        <Card className="h-100 shadow-sm hover-card">
          <div className="card-img-container">
            <Card.Img
              variant="top"
              src={image}
              className="card-img-top"
              alt={title}
            />
          </div>
          <Card.Body>
            <Card.Title className="h5 mb-3">{title}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default HotelCard; 