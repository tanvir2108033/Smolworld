import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import communityImage from '../assets/community.jpg';
import videoBg from '../assets/Myvide_home.mp4';
import newJourneyImage from '../assets/new-journey.jpg';
import baliImage from '../assets/pic/bali.webp';
import blog1Image from '../assets/pic/blog1.jpg';
import blog2Image from '../assets/pic/blog2.jpg';
import blog3Image from '../assets/pic/blog3.jpg';
import parisImage from '../assets/pic/paris.jpg';
import tokyoImage from '../assets/pic/tokyo.avif';
import vipImage from '../assets/vip_image.jpg';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const buttons = [signupBtn, loginBtn];

    buttons.forEach((btn) => {
      if (btn) {
        btn.addEventListener('mouseover', () => {
          btn.style.backgroundColor = 'rgb(0,0,15)';
          btn.style.color = 'white';
          btn.style.transform = 'scale(1.1)';
        });

        btn.addEventListener('mouseout', () => {
          btn.style.backgroundColor = 'white';
          btn.style.color = 'rgb(21, 70, 74)';
          btn.style.transform = 'scale(1)';
        });
      }
    });

    const images = document.querySelectorAll('.benefit-box img');
    images.forEach((img) => {
      img.addEventListener('mouseover', () => img.classList.add('hover-effect'));
      img.addEventListener('mouseout', () => img.classList.remove('hover-effect'));
    });
  }, []);

  return (
    <div className="home">
      <header className="banner">
        <video src={videoBg} autoPlay muted loop />
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
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center py-4 w-150">
          <p className="fs-lg text-center" style={{ fontSize: 'x-large' }}>As seen in</p>
          <div className="logos-scroller-container py-3 w-150 overflow-hidden">
            <div className="logos-scroller-track d-flex">
              <ul className="logos-scroller-list d-flex m-0 p-0">
                {[
                  {
                    name: 'The Economist',
                    logo: 'https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_economist-4a24dc460814188887c4f66864d286f859d70812725c96654208395baeee772a.svg',
                    alt: 'The Economist'
                  },
                  {
                    name: 'The Guardian',
                    logo: 'https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/the_guardian-27c08576dfbcaa449c0c879ba75e770ce8aba9cf4d0ae4544cbe0126eb76a3ba.svg',
                    alt: 'The Guardian'
                  },
                  {
                    name: 'Le Monde',
                    logo: 'https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/monde-250b0af2c244e20b924f32afd63b4a944656a9ae171a7959e0043d9d886f3c2e.svg',
                    alt: 'Le Monde'
                  },
                  {
                    name: 'Forbes',
                    logo: 'https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/forbes-66ffba8a569ebe3292be8d5c03ce2b34834b54bb8210d476d9eec380440cbbe0.svg',
                    alt: 'Forbes'
                  },
                  {
                    name: 'Vogue',
                    logo: 'https://dv4xo43u9eo19.cloudfront.net/assets/welcome/network/vogue-2f206f7aef1911695b1363f40c2c5f63261dff2e29789714b5fbdc8adc1fe0b9.svg',
                    alt: 'Vogue'
                  }
                ].map((brand, index) => (
                  <li key={index} style={{ margin: '0 20px', listStyle: 'none' }}>
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      style={{ 
                        height: '40px', 
                        width: 'auto', 
                        maxWidth: '120px',
                        filter: 'grayscale(100%)',
                        opacity: '0.7',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.filter = 'grayscale(0%)';
                        target.style.opacity = '1';
                      }}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.filter = 'grayscale(100%)';
                        target.style.opacity = '0.7';
                      }}
                    />
                  </li>
                ))}
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
            <img src={vipImage} alt="VIP Travel" className="img-fluid" />
          </div>
        </div>

        <div className="row align-items-center benefit-box flex-md-row-reverse">
          <div className="col-md-6">
            <h3>Discover new inspiration for your next journey</h3>
            <p>Whether it's beautiful destinations or thrilling experiences, ignite your wanderlust and discover new reasons to travel and explore.</p>
          </div>
          <div className="col-md-6" id="over">
            <img src={newJourneyImage} alt="New Journey" className="img-fluid" />
          </div>
        </div>

        <div className="row align-items-center benefit-box">
          <div className="col-md-6">
            <h3>Belong to a community with a shared passion</h3>
            <p>Connect with other members online or at our events and forge lasting friendships that transcend borders.</p>
          </div>
          <div className="col-md-6" id="over">
            <img src={communityImage} alt="Community" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured-destinations container my-5">
        <h2 className="text-center mb-4">Featured Destinations</h2>
        <div className="row">
          {[{
            img: parisImage,
            title: 'Paris, France',
            desc: 'The city of lights awaits you with romantic streets and timeless landmarks.'
          }, {
            img: tokyoImage,
            title: 'Tokyo, Japan',
            desc: 'Experience vibrant culture and cutting-edge technology in this bustling metropolis.'
          }, {
            img: baliImage,
            title: 'Bali, Indonesia',
            desc: 'Relax on stunning beaches or explore spiritual temples in tropical paradise.'
          }].map((dest, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="destination-card card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                <img src={dest.img} alt={dest.title} className="card-img-top rounded-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{dest.title}</h5>
                  <p className="card-text">{dest.desc}</p>
                  <button className="btn btn-outline-primary mt-auto">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">What Our Travelers Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-card p-4 shadow rounded bg-white mx-auto" style={{ maxWidth: 500 }}>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex from Canada" className="rounded-circle mb-3" style={{ width: 60, height: 60, objectFit: 'cover', border: '3px solid #007bff' }} />
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#FFD700', fontSize: 18 }}>★</span>)}
                  </div>
                  <blockquote className="blockquote mb-1">
                    <p>"SmolWorld made my trip effortless and magical!"</p>
                  </blockquote>
                  <footer className="blockquote-footer">Alex from Canada</footer>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-card p-4 shadow rounded bg-white mx-auto" style={{ maxWidth: 500 }}>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Lena from Germany" className="rounded-circle mb-3" style={{ width: 60, height: 60, objectFit: 'cover', border: '3px solid #007bff' }} />
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#FFD700', fontSize: 18 }}>★</span>)}
                  </div>
                  <blockquote className="blockquote mb-1">
                    <p>"The best travel experience I've had – highly recommended!"</p>
                  </blockquote>
                  <footer className="blockquote-footer">Lena from Germany</footer>
                </div>
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

      {/* Map Section */}
      <section className="map-section container my-5">
        <h2 className="text-center mb-4">Explore Popular Destinations</h2>
        <div className="ratio ratio-16x9">
          <iframe src="https://www.google.com/maps/d/embed?mid=1RLWosxYREkXKhRx0t2P3nUzQPAo&hl=en" title="Popular Destinations Map"></iframe>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section container my-5">
        <h2 className="text-center mb-4">Latest from Our Blog</h2>
        <div className="row">
          {[{
            img: blog1Image,
            title: 'Top 5 Beaches to Visit in 2025',
            desc: 'Sun, sand, and serenity—discover the best coastal getaways this year.',
            date: 'May 10, 2024',
            author: 'Priya Sharma',
            id: 'top-5-beaches-2025'
          }, {
            img: blog2Image,
            title: 'Packing Tips for Light Travelers',
            desc: 'Travel smarter, lighter, and stress-free with these essential tips.',
            date: 'May 2, 2024',
            author: 'John Lee',
            id: 'packing-tips-light-travelers'
          }, {
            img: blog3Image,
            title: 'Hidden Gems of Southeast Asia',
            desc: 'Off-the-beaten-path locations that will leave you in awe.',
            date: 'Apr 28, 2024',
            author: 'Sara Kim',
            id: 'hidden-gems-southeast-asia'
          }, {
            img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            title: 'Why Solo Travel is the Ultimate Adventure',
            desc: 'Discover the freedom, confidence, and unforgettable experiences that come with exploring the world on your own.',
            date: 'May 20, 2024',
            author: 'Ava Patel',
            id: 'solo-travel-ultimate-adventure'
          }].map((blog, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="blog-card card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                <img src={blog.img} alt={blog.title} className="card-img-top rounded-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.desc}</p>
                  <div className="text-muted mb-2" style={{ fontSize: '0.9em' }}>{blog.date} &nbsp;|&nbsp; {blog.author}</div>
                  <Link to={`/blog/${blog.id}`} className="btn btn-outline-success mt-auto">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Home;
