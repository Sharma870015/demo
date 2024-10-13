import React from "react";
import "./CustomWebAppDev.css"; // Import the CSS for styling
import Background from "./CustomWebApp.jpg"; // Replace with your background image URL
import { Link } from "react-router-dom";

const CustomWebAppDev = () => {
  return (
    <div className="custom-container">
      {/* Image with Overlay Text */}
      <div className="custom-image-container">
        <img
          src={Background} // Replace with your image URL
          alt="Custom Web App Development"
          className="custom-hero-image"
        />
        <div className="custom-overlay-text">
          <h1>Custom Web App Development</h1>
          <p className="custom-description">
            Tailored web applications designed to fit your unique business
            needs, ensuring seamless functionality and user experience.
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <h1 className="custom-heading">Bespoke Solutions for Your Business</h1>

      {/* Introductory Paragraph */}
      <p className="custom-intro">
        In a world where digital solutions are paramount, custom web applications
        offer the flexibility and scalability that businesses require. Our
        expert team specializes in creating dynamic and interactive web apps
        using the latest technologies to ensure your project stands out. 
        Whether you need a complex platform or a simple interface, we tailor
        our services to meet your specific requirements.
      </p>

      {/* Why Choose Us Section */}
      <section className="custom-choose-us">
        <h2 className="Heading_desc">Why Work With Us?</h2>
        <p>
          Our custom web app development services focus on delivering solutions
          that are as unique as your business. We believe in a collaborative
          approach, working closely with you to understand your goals. Our team
          of experienced developers, designers, and strategists is dedicated to
          bringing your vision to life, prioritizing quality and user satisfaction.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="custom-technologies">
        <h2 className="Heading_desc">Technologies We Utilize</h2>
        <div className="custom-tech-cards">
          <div className="custom-tech-card">
            <i className="fab fa-react custom-icon"></i>
            <h3 className="Heading_desc">React.js</h3>
            <p>A JavaScript library for building user interfaces.</p>
          </div>
          <div className="custom-tech-card">
            <i className="fas fa-server custom-icon"></i>
            <h3 className="Heading_desc">Node.js</h3>
            <p>JavaScript runtime built on Chrome's V8 engine.</p>
          </div>
          <div className="custom-tech-card">
            <i className="fas fa-database custom-icon"></i>
            <h3 className="Heading_desc">PostgreSQL</h3>
            <p>A powerful, open-source relational database system.</p>
          </div>
          <div className="custom-tech-card">
            <i className="fas fa-cloud custom-icon"></i>
            <h3 className="Heading_desc">RESTful APIs</h3>
            <p>Creating efficient communication between client and server.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="custom-contact">
        <h3>Ready to Build Your Custom Solution?</h3>
        <Link to='/contact' className="custom-contact-btn">Contact Us Today</Link>
      </div>
    </div>
  );
};

export default CustomWebAppDev;
