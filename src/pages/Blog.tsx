import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blog1 from '../assets/pic/blog1.jpg';
import blog2 from '../assets/pic/blog2.jpg';
import blog3 from '../assets/pic/blog3.jpg';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Beaches to Visit in 2025',
      image: blog1,
      author: 'Sarah Johnson',
      date: 'June 15, 2025',
      excerpt: 'Discover the most stunning beaches around the world and plan your perfect beach vacation.',
      content: `
        <h2>The Ultimate Beach Guide</h2>
        <p>From tropical paradises to hidden gems, here are our top picks for beach destinations:</p>
        <ol>
          <li>Maldives - Luxury Overwater Bungalows</li>
          <li>Phuket, Thailand - Perfect for Adventure</li>
          <li>Amalfi Coast, Italy - Mediterranean Charm</li>
          <li>Bora Bora, French Polynesia - Ultimate Luxury</li>
          <li>Gold Coast, Australia - Surf Paradise</li>
        </ol>
        <p>Each destination offers unique experiences and breathtaking views. Whether you prefer luxury resorts or secluded beaches, there's something for everyone.</p>
      `
    },
    {
      id: 2,
      title: 'Packing Tips for Light Travelers',
      image: blog2,
      author: 'Mike Thompson',
      date: 'June 20, 2025',
      excerpt: 'Travel smarter, not harder with our essential packing tips.',
      content: `
        <h2>Smart Packing Guide</h2>
        <h3>Essential Items:</h3>
        <ul>
          <li>Comfortable walking shoes</li>
          <li>Layered clothing</li>
          <li>Travel adapter</li>
          <li>Reusable water bottle</li>
          <li>Travel documents</li>
        </ul>
        <p>Remember: Pack only what you need and consider the climate and activities of your destination.</p>
      `
    },
    {
      id: 3,
      title: 'Hidden Gems of Southeast Asia',
      image: blog3,
      author: 'Emily Chen',
      date: 'June 25, 2025',
      excerpt: 'Explore lesser-known destinations that offer authentic experiences.',
      content: `
        <h2>Discover Southeast Asia's Secrets</h2>
        <p>Beyond the popular tourist spots, these hidden gems offer unique experiences:</p>
        <ul>
          <li>Koh Rong, Cambodia - Untouched beaches</li>
          <li>Sapa, Vietnam - Mountainous beauty</li>
          <li>Komodo Island, Indonesia - Natural wonder</li>
          <li>Luang Prabang, Laos - Cultural heritage</li>
          <li>Koh Chang, Thailand - Wildlife sanctuary</li>
        </ul>
        <p>Each destination offers a chance to experience authentic local culture and breathtaking natural beauty.</p>
      `
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Travel Blog</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card as={Link} to={`/blog/${post.id}`} className="text-decoration-none">
              <Card.Img variant="top" src={post.image} className="rounded" />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <small className="text-muted">
                    By {post.author} • {post.date}
                  </small>
                  <p className="mt-2">{post.excerpt}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
