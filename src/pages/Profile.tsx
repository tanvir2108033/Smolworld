import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import './Profile.css';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="profile-page">
      <section className="page-header">
        <Container>
          <h1 className="display-5 fw-bold">My Profile</h1>
          <p className="lead">Manage your account settings and preferences</p>
        </Container>
      </section>

      <Container className="my-5">
        <Row>
          <Col md={3}>
            <Card className="profile-sidebar">
              <Card.Body>
                <div className="text-center mb-4">
                  <div className="profile-avatar">
                    <img src="/src/assets/pic/default-avatar.png" alt="Profile" />
                  </div>
                  <h5 className="mt-3">John Doe</h5>
                  <p className="text-muted">john.doe@example.com</p>
                </div>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'profile'} 
                      onClick={() => setActiveTab('profile')}
                    >
                      Profile Information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'bookings'} 
                      onClick={() => setActiveTab('bookings')}
                    >
                      My Bookings
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'wishlist'} 
                      onClick={() => setActiveTab('wishlist')}
                    >
                      Wishlist
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'settings'} 
                      onClick={() => setActiveTab('settings')}
                    >
                      Settings
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          <Col md={9}>
            <Card className="profile-content">
              <Card.Body>
                {activeTab === 'profile' && (
                  <div>
                    <h4 className="mb-4">Profile Information</h4>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" defaultValue="John" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" defaultValue="Doe" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" defaultValue="john.doe@example.com" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" defaultValue="+1 234 567 890" />
                      </Form.Group>
                      <Button variant="primary">Save Changes</Button>
                    </Form>
                  </div>
                )}

                {activeTab === 'bookings' && (
                  <div>
                    <h4 className="mb-4">My Bookings</h4>
                    <div className="booking-list">
                      <Card className="mb-3">
                        <Card.Body>
                          <Row>
                            <Col md={3}>
                              <img src="/src/assets/pic/hotel1.jpg" alt="Hotel" className="booking-image" />
                            </Col>
                            <Col md={9}>
                              <h5>Grand Palace Hotel</h5>
                              <p className="text-muted">Paris, France</p>
                              <p>Check-in: 2024-04-01 | Check-out: 2024-04-05</p>
                              <Button variant="outline-primary" size="sm">View Details</Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div>
                    <h4 className="mb-4">My Wishlist</h4>
                    <Row>
                      <Col md={4}>
                        <Card className="wishlist-item">
                          <Card.Img variant="top" src="/src/assets/pic/paris.jpg" />
                          <Card.Body>
                            <Card.Title>Paris, France</Card.Title>
                            <Button variant="outline-danger" size="sm">Remove</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h4 className="mb-4">Account Settings</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Change Password</Form.Label>
                        <Form.Control type="password" placeholder="Current Password" />
                        <Form.Control type="password" placeholder="New Password" className="mt-2" />
                        <Form.Control type="password" placeholder="Confirm New Password" className="mt-2" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Check type="switch" label="Email Notifications" defaultChecked />
                        <Form.Check type="switch" label="SMS Notifications" />
                      </Form.Group>
                      <Button variant="primary">Save Settings</Button>
                    </Form>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile; 