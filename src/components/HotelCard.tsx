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
    <div className="col-md-4 card">
      <Link to={`/hotel/${id}`} className="text-decoration-none text-dark">
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={image}
            className="card-img-top"
            alt={title}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default HotelCard; 