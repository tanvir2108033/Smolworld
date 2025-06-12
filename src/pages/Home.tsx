import React from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import videoBg from '../assets/Myvide_home.mp4';
import communityImage from '../assets/community.jpg';
import newJourneyImage from '../assets/new-journey.jpg';
import blog1 from '../assets/pic/blog1.jpg';
import blog2 from '../assets/pic/blog2.jpg';
import blog3 from '../assets/pic/blog3.jpg';
import vipImage from '../assets/vip_image.jpg';

import './Home.css';

const Home: React.FC = () => {
  const logos = [
    "https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_economist-4a24dc460814188887c4f66864d286f859d70812725c96654208395baeee772a.svg",
    "https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_guardian-27c08576dfbcaa449c0c879ba75e770ce8aba9cf4d0ae4544cbe0126eb76a3ba.svg",
    "https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/monde-250b0af2c244e20b924f32afd63b4a944656a9ae171a7959e0043d9d886f3c2e.svg",
    "https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/forbes-66ffba8a569ebe3292be8d5c03ce2b34834b54bb8210d476d9eec380440cbbe0.svg",
    "https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/vogue-2f206f7aef1911695b1363f40c2c5f63261dff2e29789714b5fbdc8adc1fe0b9.svg",
  ];

  return (
    <div>
      <header className="banner">
        <video src={videoBg} autoPlay muted loop playsInline />
        <div className="overlay"></div>
        <div className="content">
          <div className="title">
            <h1>SmolWorld</h1>
            <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
            <Link to="/register" className="btn btn-light btn-register">Register Now!</Link>
          </div>
        </div>
      </header>

      <section id="scroll">
        <Container className="text-center py-4">
          <p style={{ fontSize: 'x-large' }}>As seen in</p>
          <div className="logos-scroller-track d-flex flex-wrap justify-content-center gap-3">
            {[...logos, ...logos].map((src, index) => (
              <img key={index} src={src} alt={`Logo ${index % logos.length}`} height={40} className="logo-img" />
            ))}
          </div>
        </Container>
      </section>

      <section className="benefits py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="order-md-2">
              <div className="benefit-image-container">
                <img src={vipImage} alt="VIP Experience" className="benefit-image" />
                <div className="benefit-image-overlay"></div>
              </div>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="benefit-content">
                <h3>Travel in style, with exclusive VIP benefits</h3>
                <p>Indulge in luxury with our curated collection of the world's best hotels and enjoy exclusive VIP benefits, all at no extra cost.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col md={6} className="order-md-1">
              <div className="benefit-image-container">
                <img src={newJourneyImage} alt="New Journey" className="benefit-image" />
                <div className="benefit-image-overlay"></div>
              </div>
            </Col>
            <Col md={6} className="order-md-2">
              <div className="benefit-content">
                <h3>Discover new inspiration for your next journey</h3>
                <p>Whether it's beautiful destinations or thrilling experiences, ignite your wanderlust and discover new reasons to travel and explore.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col md={6} className="order-md-2">
              <div className="benefit-image-container">
                <img src={communityImage} alt="Community" className="benefit-image" />
                <div className="benefit-image-overlay"></div>
              </div>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="benefit-content">
                <h3>Belong to a community with a shared passion</h3>
                <p>Connect with other members online or at our events and forge lasting friendships that transcend borders.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-destinations py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Destinations</h2>
          <Row className="g-4">
            <Col md={4}>
              <Link to="/destination/paris" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="destination-card">
                  <div className="destination-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" 
                      alt="Paris" 
                      className="destination-image" 
                    />
                  </div>
                  <div className="destination-content">
                    <h3>Paris</h3>
                    <p>Experience the romance of the City of Light</p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/destination/tokyo" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="destination-card">
                  <div className="destination-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800" 
                      alt="Tokyo" 
                      className="destination-image" 
                    />
                  </div>
                  <div className="destination-content">
                    <h3>Tokyo</h3>
                    <p>Discover the perfect blend of tradition and innovation</p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/destination/bali" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="destination-card">
                  <div className="destination-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800" 
                      alt="Bali" 
                      className="destination-image" 
                    />
                  </div>
                  <div className="destination-content">
                    <h3>Bali</h3>
                    <p>Immerse yourself in paradise</p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials bg-light py-5">
        <Container className="text-center">
          <h2 className="mb-4">What Our Travelers Say</h2>
          <Carousel>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"SmolWorld made my trip effortless and magical!"</p>
                <footer className="blockquote-footer">Alex from Canada</footer>
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"The best travel experience I've had – highly recommended!"</p>
                <footer className="blockquote-footer">Lena from Germany</footer>
              </blockquote>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section className="map-section container my-5">
        <h2 className="text-center mb-4">Explore Popular Destinations</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1RLWosxYREkXKhRx0t2P3nUzQPAo&hl=en"
            title="Map"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="blog-section py-5">
        <Container>
          <h2 className="text-center mb-4">Latest Blog Posts</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="blog-card">
                <img src={blog1} alt="Blog 1" className="img-fluid rounded" />
                <h4 className="mt-3">
                  <Link to="/blog/1" style={{ textDecoration: 'none', color: 'inherit' }}>Latest from Our Blog</Link>
                </h4>
                <p>Sun, sand, and serenity—discover the best coastal getaways this year.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="blog-card">
                <img src={blog2} alt="Blog 2" className="img-fluid rounded" />
                <h4 className="mt-3">
                  <Link to="/blog/2" style={{ textDecoration: 'none', color: 'inherit' }}>Top 5 Beaches to Visit in 2025</Link>
                </h4>
                <p>Travel smarter, lighter, and stress-free with these essential tips.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="blog-card">
                <img src={blog3} alt="Blog 3" className="img-fluid rounded" />
                <h4 className="mt-3">
                  <Link to="/blog/3" style={{ textDecoration: 'none', color: 'inherit' }}>Packing Tips for Light Travelers</Link>
                </h4>
                <p>Off-the-beaten-path locations that will leave you in awe.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="newsletter-signup bg-dark text-white py-5">
        <Container className="text-center">
          <h2>Stay Updated</h2>
          <p>Sign up for our newsletter to receive the best deals and travel tips!</p>
          <form className="row justify-content-center">
            <div className="col-md-6">
              <input type="email" className="form-control mb-2" placeholder="Enter your email" required />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100">Subscribe</button>
            </div>
          </form>
        </Container>
      </section>

      <section className="faq-section container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I book a trip?</Accordion.Header>
            <Accordion.Body>
              Simply register, log in, and browse our available packages under "Tickets" or "Hotels".
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I cancel or reschedule?</Accordion.Header>
            <Accordion.Body>
              Yes, cancellation policies vary by package. Check your booking details for more info.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

    </div>
  );
};

export default Home;