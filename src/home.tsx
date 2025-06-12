import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '../public/css/style_home.css';

const Home: React.FC = () => {
    return (
        <>
            <header className="banner">
                <video src="Myvide_home.mp4" autoPlay muted loop></video>
                <div className="overlay"></div>
                <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: '#004d4d' }}>
                    <Link className="navbar-brand" to="/" style={{ fontFamily: "'Poppins',sans-serif" }}>
                        <img src="logo.png" alt="SmolWorld Logo" height="50" /> SmolWorld
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav" id="navi-leter">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/hotels">Hotels</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/tickets">Tickets</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/location">Destination</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/cost">Cost</Link></li>
                        </ul>
                        <div className="ms-lg-3 d-flex gap-2" id="over">
                            <Link to="/register" className="btn btn-light" id="signup-btn">Sign Up</Link>
                            <Link to="/login" className="btn btn-outline-light" id="login-btn">Log In</Link>
                        </div>
                    </div>
                </nav>
                <div className="content">
                    <div className="title">
                        <h1>SmolWorld</h1>
                        <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
                        <Link to="/register" className="btn btn-light btn-register">Register Now!</Link>
                    </div>
                </div>
            </header>

            <section id="scroll">
                <div className="container-fluid d-flex justify-content-center flex-column align-items-center py-4 w-150">
                    <p className="fs-lg ff-neue-haas text-center" style={{ fontSize: 'x-large' }}>As seen in</p>
                    <div className="logos-scroller-container py-3 w-150 overflow-hidden">
                        <div className="logos-scroller-track d-flex">
                            <ul className="logos-scroller-list d-flex m-0 p-0">
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_economist-4a24dc460814188887c4f66864d286f859d70812725c96654208395baeee772a.svg" alt="The Economist" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_guardian-27c08576dfbcaa449c0c879ba75e770ce8aba9cf4d0ae4544cbe0126eb76a3ba.svg" alt="The Guardian" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/monde-250b0af2c244e20b924f32afd63b4a944656a9ae171a7959e0043d9d886f3c2e.svg" alt="Le Monde" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/forbes-66ffba8a569ebe3292be8d5c03ce2b34834b54bb8210d476d9eec380440cbbe0.svg" alt="Forbes" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/vogue-2f206f7aef1911695b1363f40c2c5f63261dff2e29789714b5fbdc8adc1fe0b9.svg" alt="Vogue" /></li>
                            </ul>

                            <ul className="logos-scroller-list d-flex m-0 p-0">
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_economist-4a24dc460814188887c4f66864d286f859d70812725c96654208395baeee772a.svg" alt="The Economist" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_guardian-27c08576dfbcaa449c0c879ba75e770ce8aba9cf4d0ae4544cbe0126eb76a3ba.svg" alt="The Guardian" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/monde-250b0af2c244e20b924f32afd63b4a944656a9ae171a7959e0043d9d886f3c2e.svg" alt="Le Monde" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/forbes-66ffba8a569ebe3292be8d5c03ce2b34834b54bb8210d476d9eec380440cbbe0.svg" alt="Forbes" /></li>
                                <li><img src="https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/vogue-2f206f7aef1911695b1363f40c2c5f63261dff2e29789714b5fbdc8adc1fe0b9.svg" alt="Vogue" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefits-section container">
                <div className="row align-items-center benefit-box">
                    <div className="col-md-6">
                        <h3>Travel in style, with exclusive VIP benefits</h3>
                        <p>Indulge in luxury with our curated collection of the world's best hotels and enjoy exclusive VIP benefits, all at no extra cost.</p>
                    </div>
                    <div className="col-md-6" id="over">
                        <img src="vip_image.jpg" alt="VIP Travel" />
                    </div>
                </div>
                <div className="row align-items-center benefit-box flex-md-row-reverse">
                    <div className="col-md-6">
                        <h3>Discover new inspiration for your next journey</h3>
                        <p>Whether it's beautiful destinations or thrilling experiences, ignite your wanderlust and discover new reasons to travel and explore.</p>
                    </div>
                    <div className="col-md-6" id="over">
                        <img src="new-journey.jpg" alt="New Journey" />
                    </div>
                </div>
                <div className="row align-items-center benefit-box">
                    <div className="col-md-6">
                        <h3>Belong to a community with a shared passion</h3>
                        <p>Connect with other members online or at our events and forge lasting friendships that transcend borders.</p>
                    </div>
                    <div className="col-md-6" id="over">
                        <img src="community.jpg" alt="Community" />
                    </div>
                </div>
            </section>

            <section className="featured-destinations container my-5">
                <h2 className="text-center mb-4">Featured Destinations</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="./pic/paris.jpg" alt="Paris" className="img-fluid rounded" />
                        <h5 className="mt-2">Paris, France</h5>
                        <p>The city of lights awaits you with romantic streets and timeless landmarks.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./pic/tokyo.avif" alt="Tokyo" className="img-fluid rounded" />
                        <h5 className="mt-2">Tokyo, Japan</h5>
                        <p>Experience vibrant culture and cutting-edge technology in this bustling metropolis.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./pic/bali.webp" alt="Bali" className="img-fluid rounded" />
                        <h5 className="mt-2">Bali, Indonesia</h5>
                        <p>Relax on stunning beaches or explore spiritual temples in tropical paradise.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">What Our Travelers Say</h2>
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <blockquote className="blockquote">
                                    <p>"SmolWorld made my trip effortless and magical!"</p>
                                    <footer className="blockquote-footer">Alex from Canada</footer>
                                </blockquote>
                            </div>
                            <div className="carousel-item">
                                <blockquote className="blockquote">
                                    <p>"The best travel experience I've had – highly recommended!"</p>
                                    <footer className="blockquote-footer">Lena from Germany</footer>
                                </blockquote>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="map-section container my-5">
                <h2 className="text-center mb-4">Explore Popular Destinations</h2>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1RLWosxYREkXKhRx0t2P3nUzQPAo&hl=en"></iframe>
                </div>
            </section>

            <section className="blog-section container my-5">
                <h2 className="text-center mb-4">Latest from Our Blog</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="./pic/blog1.jpg" alt="Blog 1" className="img-fluid rounded" />
                        <h5 className="mt-2">Top 5 Beaches to Visit in 2025</h5>
                        <p>Sun, sand, and serenity—discover the best coastal getaways this year.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./pic/blog2.jpg" alt="Blog 2" className="img-fluid rounded" />
                        <h5 className="mt-2">Packing Tips for Light Travelers</h5>
                        <p>Travel smarter, lighter, and stress-free with these essential tips.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="./pic/blog3.jpg" alt="Blog 3" className="img-fluid rounded" />
                        <h5 className="mt-2">Hidden Gems of Southeast Asia</h5>
                        <p>Off-the-beaten-path locations that will leave you in awe.</p>
                    </div>
                </div>
            </section>

            <section className="newsletter-signup bg-dark text-white py-5">
                <div className="container text-center">
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
                </div>
            </section>

            <section className="faq-section container my-5">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                How do I book a trip?
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Simply register, log in, and browse our available packages under "Tickets" or "Hotels".
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                Can I cancel or reschedule?
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, cancellation policies vary by package. Check your booking details for more info.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-2">
                            <h5>Connect</h5>
                            <div className="social">
                                <a href="https://www.facebook.com"><i className='bx bxl-facebook'></i></a>
                                <a href="https://www.instagram.com"><i className='bx bxl-instagram'></i></a>
                                <a href="https://www.twitter.com"><i className='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com"><i className='bx bxl-linkedin'></i></a>
                                <a href="https://www.youtube.com"><i className='bx bxl-youtube'></i></a>
                                <a href="https://www.github.com"><i className='bx bxl-github'></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <section className="map-section container my-5">
                                <h2 className="text-center mb-4">Explore Popular Destinations</h2>
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1246879070486!2d91.96848427480828!3d22.461948237017747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1713160780519!5m2!1sen!2sbd"></iframe>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home; 