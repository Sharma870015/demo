import React, { useEffect } from "react";
import './DigitalMarketing.css'; // Ensure you have a separate CSS file for styling
import { FaThumbsUp, FaUsers, FaChartLine } from 'react-icons/fa'; // Importing icons
import marketingImage from './marketingImg.jpg'; // Adjust the path as necessary
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="image-container">
        <img src={marketingImage} alt="Digital Marketing" className="full-width-image" />
        <div className="image-overlay">
          <h1 className="overlay-title">Digital Marketing</h1>
          <p className="overlay-description">Transform your online presence with tailored digital marketing strategies.
          Unlock new opportunities and drive growth in today’s competitive landscape.</p>
        </div>
      </div>
      
      <div className="digital-marketing-section">
        <h1 className="digital-marketing-title">Our Digital Marketing Services</h1>
        <p className="digital-marketing-intro">
          At DigiAppify, we provide a range of digital marketing services designed to elevate your brand's online presence and drive growth. Explore our core offerings below:
        </p>

        {/* Additional Descriptive Paragraphs */}
        <p className="digital-marketing-description">
          In today's digital age, having a strong online presence is essential for businesses of all sizes. Our team of experts is dedicated to crafting tailored strategies that resonate with your target audience, helping you achieve your business goals effectively.
        </p>
        <p className="digital-marketing-description">
          We understand that every business is unique, which is why we take the time to analyze your specific needs and challenges. By leveraging data-driven insights and the latest marketing techniques, we ensure that your brand stands out in a crowded marketplace.
        </p>
        <p className="digital-marketing-description">
          Our commitment to transparency and measurable results sets us apart. We provide regular updates and detailed reports to keep you informed about your campaign's progress, allowing you to make informed decisions based on real data.
        </p>
        <p className="digital-marketing-description">
          Whether you're looking to boost your search engine rankings, engage your audience through social media, or increase your conversion rates, our comprehensive suite of digital marketing services has you covered.
        </p>

        <div className="services-container">
          <div className="service-card">
            <h2 className="service-title">SEO Services</h2>
            <p className="service-description">
              Improve your website's visibility on search engines through strategic SEO techniques and content optimization.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">Email Marketing</h2>
            <p className="service-description">
              Engage your audience with personalized email campaigns that drive conversions and build customer loyalty.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">PPC Services</h2>
            <p className="service-description">
              Maximize your ROI with targeted pay-per-click advertising that reaches your ideal audience at the right time.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">Social Media Marketing</h2>
            <p className="service-description">
              Build your brand on social media platforms through engaging content and community management strategies.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">Affiliate Marketing</h2>
            <p className="service-description">
              Partner with affiliates to expand your reach and drive sales through performance-based marketing strategies.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">E-commerce Marketing</h2>
            <p className="service-description">
              Enhance your online store's visibility and sales with tailored marketing strategies for e-commerce businesses.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="statistics-container">
          <div className="statistic-card">
            <FaThumbsUp className="statistic-icon" />
            <h2 className="statistic-title">95% Client Satisfaction</h2>
            <p className="statistic-description">Our clients love us! We maintain a high satisfaction rate.</p>
          </div>
          <div className="statistic-card">
            <FaUsers className="statistic-icon" />
            <h2 className="statistic-title">500+ Clients Served</h2>
            <p className="statistic-description">Trusted by over 500 businesses across various industries.</p>
          </div>
          <div className="statistic-card">
            <FaChartLine className="statistic-icon" />
            <h2 className="statistic-title">200% Average ROI</h2>
            <p className="statistic-description">Our strategies yield significant returns for our clients.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <div className="testimonial">
            <p className="testimonial-text">“DigiAppify transformed our online presence! Their strategies are top-notch.”</p>
            <p className="testimonial-author">- Jane Doe, CEO of Tech Innovations</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">“We saw a significant increase in sales after partnering with DigiAppify.”</p>
            <p className="testimonial-author">- John Smith, Owner of Smart Gadgets</p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section">
          <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
          <p className="cta-description">Contact us today to discover how we can help your business grow.</p>
          <Link to="/contact" className="cta-button">Get a Free Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
