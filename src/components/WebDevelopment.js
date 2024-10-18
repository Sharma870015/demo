import React, { useEffect } from "react";
import './WebDevelopment.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';
import web from './Web Development.jpg';
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
          src={web}
          alt="Web Development Services"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Web Development Services</h1>
          <p className="hero-description">
            Creating dynamic, scalable, and visually stunning websites tailored for your business needs.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="first-title">Our Services</h2>
        <div className="services-container">
          <Link to='/wordpress-development' className="service-card">
            <h3 className="service-title">WordPress Development</h3>
            <p className="service-description">
              Custom WordPress solutions to help build your brand and business online.
            </p>
          </Link>
          <Link to='/Dynamic_WebDev' className="service-card">
            <h3 className="service-title">Dynamic Websites</h3>
            <p className="service-description">
              We create responsive and engaging websites for better user experience.
            </p>
          </Link>
          <Link to='/E-commerce_WebApp' className="service-card">
            <h3 className="service-title">E-Commerce Solutions</h3>
            <p className="service-description">
              Developing e-commerce platforms that maximize sales and customer engagement.
            </p>
          </Link>
          <Link to='/custom-webdev' className="service-card">
            <h3 className="service-title">Custom Web Applications</h3>
            <p className="service-description">
              Tailor-made web apps designed to meet your business needs and goals.
            </p>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <h2 className="-title">Why Choose Us?</h2>
        <div className="why-choose-container">
          <div className="why-choose-card">
            <h3 className="why-choose-title">Experienced Team</h3>
            <p className="why-choose-description">
              Our skilled developers have years of experience creating dynamic and scalable web solutions.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-title">Tailored Solutions</h3>
            <p className="why-choose-description">
              We create custom solutions tailored to your unique business needs and goals.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-title">Cutting-edge Technologies</h3>
            <p className="why-choose-description">
              We stay updated with the latest trends and technologies to ensure your website stands out.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3 className="faq-question">How long does it take to develop a website?</h3>
            <p className="faq-answer">
              The timeline varies depending on the complexity of the website. On average, a standard website can take 4-6 weeks.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Do you provide ongoing support after development?</h3>
            <p className="faq-answer">
              Yes, we offer maintenance and support services to ensure your website stays updated and secure.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Can you help with website hosting and domain registration?</h3>
            <p className="faq-answer">
              Absolutely! We can assist you in finding reliable hosting services and domain registration.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Section: Call to Action */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to Elevate Your Online Presence?</h2>
        <p className="cta-description">Get in touch with us today and let's build something amazing together!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>

    </div>
  );
};

export default WebDevelopment;
