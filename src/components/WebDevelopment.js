import React, { useEffect } from "react";
import './WebDevelopment.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';
import web from './Web Development.jpg'
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <img
          className="hero-image"
          src={web} // Replace with a suitable image URL
          alt="Web Development Services"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Web Development Services</h1>
          <p className="hero-description">Creating dynamic, scalable, and visually stunning websites tailored for your business needs.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="first-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3 className="service-title">WordPress Development</h3>
            <p className="service-description">Custom WordPress solutions to help build your brand and business online.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Dynamic Websites</h3>
            <p className="service-description">We create responsive and engaging websites for better user experience.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">E-Commerce Solutions</h3>
            <p className="service-description">Developing e-commerce platforms that maximize sales and customer engagement.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Custom Web Applications</h3>
            <p className="service-description">Tailor-made web apps designed to meet your business needs and goals.</p>
          </div>
        </div>
      </div>

      {/* Additional Section: Call to Action */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to Elevate Your Online Presence?</h2>
        <p className="cta-description">Get in touch with us today and let's build something amazing together!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          items={1} // Only one testimonial visible at a time
          autoplay
          autoplayTimeout={3000}
        >
          <div className="testimonial-card">
            <p>"Amazing service and outstanding results!"</p>
            <p className="client-name">- John Doe, CEO</p>
          </div>
          <div className="testimonial-card">
            <p>"The best web development experience I've ever had!"</p>
            <p className="client-name">- Jane Smith, Founder</p>
          </div>
          {/* Add more testimonials if needed */}
        </OwlCarousel>
      </div>

      {/* Other sections remain unchanged */}
    </div>
  );
};

export default WebDevelopment;
