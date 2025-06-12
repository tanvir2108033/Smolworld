import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import blog_post_1 from '../assets/pic/blog_post_1.png';
import blog_post_1_1 from '../assets/pic/blog_post_1_1.jpg';
import blog_post_1_2 from '../assets/pic/blog_post_1_2.jpg';
import ocanview_2 from '../assets/pic/ocanview_2.png';
import ocanview_3 from '../assets/pic/ocanview_3.png';
import PACKING_1 from '../assets/pic/PACKING_1.png';
import Packing_2 from '../assets/pic/Packing_2.jpg';
import Packing_3 from '../assets/pic/Packing_3.jpeg';
import top_5_beaches_1 from '../assets/pic/top_5_beaches_1.jpg';
import './BlogPost.css';

interface BlogPostData {
  id: number;
  title: string;
  content: string;
  images: string[];
  date: string;
  author: string;
}

const blogPosts: { [key: number]: BlogPostData } = {
  1: {
    id: 1,
    title: "Latest from Our Blog",
    content: `Sun, sand, and serenity—discover the best coastal getaways this year. From pristine beaches to hidden coves, we've curated a list of the most breathtaking coastal destinations that will make your summer unforgettable.

    Whether you're looking for a romantic getaway or a family vacation, these coastal paradises offer something for everyone. Crystal clear waters, white sandy beaches, and stunning sunsets await you at these carefully selected locations.

    Our travel experts have personally visited each destination to ensure you get the most authentic and enjoyable experience. From luxury resorts to charming beachside cottages, we've got you covered with the best accommodation options.

    Don't miss out on these incredible coastal destinations that are perfect for your next vacation. Book early to secure the best rates and availability.`,
    images: [blog_post_1, blog_post_1_1, blog_post_1_2],
    date: "March 15, 2024",
    author: "Aminul"
  },
  2: {
    id: 2,
    title: "Top 5 Beaches to Visit in 2025",
    content: `Travel smarter, lighter, and stress-free with these essential tips. Packing efficiently is an art form that can make or break your travel experience. Here are our expert tips to help you pack like a pro:

    1. Roll, Don't Fold: Rolling your clothes saves space and reduces wrinkles
    2. Use Packing Cubes: Keep your belongings organized and easily accessible
    3. Choose Versatile Items: Pack clothes that can be mixed and matched
    4. Limit Shoes: Stick to 2-3 pairs that can be worn with multiple outfits
    5. Use Travel-Sized Toiletries: Save space and comply with airline regulations

    Remember, the key to stress-free travel is packing smart, not heavy. These tips will help you maintain a light suitcase while ensuring you have everything you need for a comfortable journey.`,
    images: [top_5_beaches_1, ocanview_2, ocanview_3],
    date: "March 10, 2024",
    author: "Michael Chen"
  },
  3: {
    id: 3,
    title: "Packing Tips for Light Travelers",
    content: `Off-the-beaten-path locations that will leave you in awe. Southeast Asia is home to some of the world's most stunning hidden gems, waiting to be discovered by adventurous travelers.

    From secluded islands to ancient temples hidden in dense jungles, these destinations offer unique experiences away from the typical tourist crowds. Our local guides have shared their insider knowledge to help you discover these magical places.

    Experience authentic local culture, indulge in delicious street food, and create memories that will last a lifetime. These hidden gems provide a perfect blend of adventure, culture, and relaxation.

    Don't forget to respect local customs and traditions while exploring these beautiful destinations. Sustainable tourism is key to preserving these hidden treasures for future generations.`,
    images: [PACKING_1, Packing_2, Packing_3],
    date: "March 5, 2024",
    author: "Emma Rodriguez"
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <Container className="mt-5">
        <h1>Blog post not found</h1>
      </Container>
    );
  }

  const paragraphs = post.content.split('\n\n');
  const imageCount = post.images.length;
  const paragraphsPerImage = Math.ceil(paragraphs.length / (imageCount + 1));

  return (
    <div className="blog-post-page">
      <section className="page-header">
        <Container>
          <h1 className="display-4 fw-bold">{post.title}</h1>
          <div className="blog-meta">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </Container>
      </section>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="blog-content">
              {paragraphs.map((paragraph, index) => {
                const imageIndex = Math.floor(index / paragraphsPerImage);
                const shouldShowImage = imageIndex < imageCount && index % paragraphsPerImage === 0;
                const isEven = imageIndex % 2 === 0;

                return (
                  <React.Fragment key={index}>
                    {shouldShowImage && (
                      <Row className="mb-4">
                        <Col md={5} className={isEven ? 'order-md-2' : 'order-md-1'}>
                          <div className="blog-image-container">
                            <img 
                              src={post.images[imageIndex]} 
                              alt={`${post.title} - Image ${imageIndex + 1}`} 
                              className="img-fluid rounded" 
                            />
                          </div>
                        </Col>
                        <Col md={7} className={isEven ? 'order-md-1' : 'order-md-2'}>
                          <div className="blog-text-content">
                            <p>{paragraph}</p>
                          </div>
                        </Col>
                      </Row>
                    )}
                    {!shouldShowImage && (
                      <div className="blog-text-content mb-4">
                        <p>{paragraph}</p>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost; 