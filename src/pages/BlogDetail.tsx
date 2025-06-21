import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import blog1Image from '../assets/pic/blog1.jpg';
import blog2Image from '../assets/pic/blog2.jpg';
import blog3Image from '../assets/pic/blog3.jpg';

interface BlogPost {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  author: string;
  content: string;
  readTime: string;
  category: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts: BlogPost[] = [
    {
      id: 'top-5-beaches-2025',
      title: 'Top 5 Beaches to Visit in 2025',
      image: blog1Image,
      description: 'Sun, sand, and serenity—discover the best coastal getaways this year.',
      date: 'May 10, 2024',
      author: 'Priya Sharma',
      readTime: '5 min read',
      category: 'Destinations',
      content: `
        <p>As we approach 2025, the world's most stunning beaches continue to beckon travelers with their pristine shores, crystal-clear waters, and unforgettable experiences. Here are the top 5 beaches that should be on every traveler's radar this year.</p>
        
        <h3>1. Maldives - Veligandu Island</h3>
        <p>Known for its overwater bungalows and vibrant coral reefs, Veligandu Island offers the perfect blend of luxury and natural beauty. The powdery white sand and turquoise waters create a paradise-like setting that's perfect for both relaxation and adventure.</p>
        
        <h3>2. Bali - Nusa Penida</h3>
        <p>This hidden gem off the coast of Bali features dramatic cliffs, crystal-clear waters, and some of the most Instagram-worthy spots in Indonesia. The secluded beaches offer a peaceful escape from the tourist crowds.</p>
        
        <h3>3. Seychelles - Anse Source d'Argent</h3>
        <p>Famous for its unique granite boulders and pink-tinted sand, this beach is a photographer's dream. The shallow, warm waters make it perfect for families and snorkeling enthusiasts.</p>
        
        <h3>4. Australia - Whitehaven Beach</h3>
        <p>Located in the Whitsunday Islands, Whitehaven Beach boasts 98% pure silica sand that squeaks under your feet. The swirling patterns of sand and sea create a mesmerizing natural artwork.</p>
        
        <h3>5. Greece - Navagio Beach</h3>
        <p>Also known as Shipwreck Beach, this iconic location features a rusting shipwreck on a pristine beach surrounded by towering cliffs. Accessible only by boat, it offers a truly unique beach experience.</p>
        
        <p>Each of these destinations offers something unique, from luxury accommodations to untouched natural beauty. Whether you're planning a romantic getaway or a family vacation, these beaches promise unforgettable memories.</p>
      `
    },
    {
      id: 'packing-tips-light-travelers',
      title: 'Packing Tips for Light Travelers',
      image: blog2Image,
      description: 'Travel smarter, lighter, and stress-free with these essential tips.',
      date: 'May 2, 2024',
      author: 'John Lee',
      readTime: '4 min read',
      category: 'Travel Tips',
      content: `
        <p>Traveling light doesn't mean sacrificing comfort or style. With the right approach, you can pack everything you need in a carry-on and enjoy the freedom of traveling without checked baggage.</p>
        
        <h3>The 5-4-3-2-1 Rule</h3>
        <p>Follow this simple rule: 5 tops, 4 bottoms, 3 dresses, 2 pairs of shoes, and 1 bag. This formula ensures you have enough variety without overpacking.</p>
        
        <h3>Choose Versatile Clothing</h3>
        <p>Pack items that can be mixed and matched to create multiple outfits. Neutral colors work best, and wrinkle-resistant fabrics will keep you looking fresh throughout your trip.</p>
        
        <h3>Roll, Don't Fold</h3>
        <p>Rolling your clothes instead of folding them saves space and reduces wrinkles. Use packing cubes to organize your items and maximize space efficiency.</p>
        
        <h3>Digital Essentials</h3>
        <p>Instead of carrying physical books and documents, use your smartphone or tablet. Download offline maps, e-books, and important documents before you leave.</p>
        
        <h3>Sample-Size Toiletries</h3>
        <p>Invest in travel-sized toiletries or use refillable containers. Many hotels provide basic amenities, so you might not need to pack everything.</p>
        
        <p>Remember, the goal is to enjoy your journey, not to be weighed down by unnecessary items. Pack smart, travel light, and embrace the freedom of minimal luggage.</p>
      `
    },
    {
      id: 'hidden-gems-southeast-asia',
      title: 'Hidden Gems of Southeast Asia',
      image: blog3Image,
      description: 'Off-the-beaten-path locations that will leave you in awe.',
      date: 'Apr 28, 2024',
      author: 'Sara Kim',
      readTime: '6 min read',
      category: 'Destinations',
      content: `
        <p>Southeast Asia is full of well-known destinations, but some of the most magical experiences await in lesser-known locations. Here are some hidden gems that will give you authentic local experiences.</p>
        
        <h3>Luang Prabang, Laos</h3>
        <p>This UNESCO World Heritage site offers a peaceful alternative to busy tourist destinations. The morning alms ceremony, where monks collect offerings from locals, is a spiritual experience not to be missed.</p>
        
        <h3>Koh Rong Samloem, Cambodia</h3>
        <p>While most travelers head to Koh Rong, its smaller neighbor offers pristine beaches and a more relaxed atmosphere. The bioluminescent plankton create magical night swimming experiences.</p>
        
        <h3>Bagan, Myanmar</h3>
        <p>Home to over 2,000 ancient temples, Bagan offers a mystical experience that rivals Angkor Wat. Hot air balloon rides at sunrise provide breathtaking views of the temple-studded landscape.</p>
        
        <h3>Hoi An, Vietnam</h3>
        <p>This charming town is famous for its lantern-lit streets and excellent cuisine. Take a cooking class to learn the secrets of Vietnamese cooking, or have custom clothing made by local tailors.</p>
        
        <h3>Koh Lanta, Thailand</h3>
        <p>A peaceful alternative to the party islands, Koh Lanta offers beautiful beaches, excellent diving, and a laid-back atmosphere perfect for families and couples.</p>
        
        <p>These destinations offer authentic cultural experiences, fewer crowds, and often better value for money. They're perfect for travelers who want to go beyond the typical tourist trail.</p>
      `
    },
    {
      id: 'solo-travel-ultimate-adventure',
      title: 'Why Solo Travel is the Ultimate Adventure',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description: 'Discover the freedom, confidence, and unforgettable experiences that come with exploring the world on your own.',
      date: 'May 20, 2024',
      author: 'Ava Patel',
      readTime: '7 min read',
      category: 'Travel Tips',
      content: `
        <p>Solo travel is more than just a way to see the world—it's a journey of self-discovery that builds confidence, independence, and unforgettable memories. Here's why traveling alone might be the best decision you'll ever make.</p>
        
        <h3>Complete Freedom</h3>
        <p>When you travel solo, every decision is yours. Want to change your itinerary at the last minute? Go for it. Feel like spending an extra day in a place you love? No problem. This freedom allows you to truly follow your instincts and interests.</p>
        
        <h3>Enhanced Social Skills</h3>
        <p>Solo travel forces you out of your comfort zone and encourages interaction with locals and fellow travelers. You'll develop better communication skills and learn to navigate cultural differences with confidence.</p>
        
        <h3>Personal Growth</h3>
        <p>Facing challenges alone builds resilience and problem-solving skills. Every obstacle overcome becomes a confidence booster, and you'll return home with a stronger sense of self-reliance.</p>
        
        <h3>Authentic Experiences</h3>
        <p>Locals are often more open to engaging with solo travelers. You'll have opportunities for deeper cultural immersion and authentic experiences that might not happen in groups.</p>
        
        <h3>Self-Discovery</h3>
        <p>Without the influence of travel companions, you'll discover your true interests and preferences. You might find new passions or realize strengths you never knew you had.</p>
        
        <p>Solo travel isn't about being lonely—it's about being independent, confident, and open to the world's possibilities. It's an adventure that will change you forever.</p>
      `
    }
  ];

  const currentPost = blogPosts.find(post => post.id === id);

  if (!currentPost) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="blog-detail-page">
      <Container className="py-5">
        <Row>
          <Col lg={8} className="mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog" className="text-decoration-none">Blog</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{currentPost.title}</li>
              </ol>
            </nav>

            {/* Blog Header */}
            <div className="blog-header mb-4">
              <span className="badge bg-primary mb-2">{currentPost.category}</span>
              <h1 className="display-4 mb-3">{currentPost.title}</h1>
              <div className="blog-meta text-muted mb-4">
                <span>By {currentPost.author}</span>
                <span className="mx-2">•</span>
                <span>{currentPost.date}</span>
                <span className="mx-2">•</span>
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="blog-image mb-4">
              <img 
                src={currentPost.image} 
                alt={currentPost.title} 
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>

            {/* Author Bio */}
            <Card className="mt-5">
              <Card.Body>
                <h5>About the Author</h5>
                <p className="mb-0">Written by {currentPost.author}, a passionate travel writer and explorer who loves sharing unique travel experiences and tips with readers around the world.</p>
              </Card.Body>
            </Card>

            {/* Back to Blog Button */}
            <div className="text-center mt-5">
              <Link to="/" className="btn btn-outline-primary">
                ← Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail; 