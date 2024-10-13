import React from "react";
import "./DynamicWebsiteDev.css"; // Import the CSS for styling
import Background from "./DynamicWebDev.png"; // Replace with your background image URL
import { Link } from "react-router-dom";

const DynamicWebsiteDev = () => {
  return (
    <div className="dynamic-container">
      {/* Image with Overlay Text */}
      <div className="dynamic-image-container">
        <img
          src={Background} // Replace with your image URL
          alt="Dynamic Website Development"
          className="dynamic-hero-image"
        />
        <div className="dynamic-overlay-text">
          <h1>Dynamic Website Dev</h1>
          <p className="dynamic-descr_hea">
            Create interactive and engaging dynamic websites that cater to
            your audience's needs, leveraging the latest technologies for
            enhanced performance and user experience.
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <h1 className="dynamic-heading">Dynamic Website Solutions</h1>

      {/* Introductory Paragraph */}
      <p className="dynamic-description">
        In today's fast-paced digital landscape, having a dynamic website is
        essential for engaging your audience and providing personalized content.
        Our team specializes in developing dynamic websites that seamlessly
        integrate with databases, enabling real-time content updates and
        interactive features. Whether it's an e-commerce platform, a social
        network, or a corporate site, we ensure that your website is not only
        visually appealing but also functionally robust.
      </p>

      {/* Why Choose Us Section */}
      <section className="dynamic-choose-us">
        <h2 className="color-he">Why Choose Us</h2>
        <p>
          Our dynamic website development services focus on delivering tailored
          solutions that meet your specific business requirements. With a
          skilled team of developers, designers, and strategists, we take a
          collaborative approach to ensure that your vision is realized. From
          concept to execution, we prioritize quality, innovation, and user
          satisfaction, making us your ideal partner for dynamic web
          development.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="dynamic-technologies">
        <h2 className="color-he">Technologies We Use</h2>
        <div className="dynamic-tech-cards">
          <div className="dynamic-tech-card">
            <i className="fab fa-react dynamic-icon"></i>
            <h3 className="color-he">React.js</h3>
            <p>A powerful JavaScript library for building user interfaces.</p>
          </div>
          <div className="dynamic-tech-card">
            <i className="fas fa-server dynamic-icon"></i>
            <h3 className="color-he">Node.js</h3>
            <p>Efficient server-side JavaScript for fast, scalable applications.</p>
          </div>
          <div className="dynamic-tech-card">
            <i className="fas fa-database dynamic-icon"></i>
            <h3 className="color-he">MongoDB</h3>
            <p>NoSQL database for storing and managing dynamic content.</p>
          </div>
          <div className="dynamic-tech-card">
            <i className="fas fa-cloud dynamic-icon"></i>
            <h3 className="color-he">REST APIs</h3>
            <p>Integrate with various services for enhanced functionality.</p>
          </div>
        </div>
      </section>

      {/* Expert Profiles Section */}
      <section className="dynamic-experts">
        <h2 className="color-he">Meet Our Experts</h2>
        <div className="dynamic-expert-cards">
          <div className="dynamic-expert-card">
            <h3 className="color-he">Aakash Sharma</h3>
            <p className="color-he">Lead Web Developer</p>
            <p>
              With over 10 years of experience in dynamic web development,
              Michael is a master in creating scalable and efficient web
              applications tailored to client needs.
            </p>
</div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="dynamic-contact">
        <h3>Ready to elevate your online presence?</h3>
        <Link to='/contact' className="dynamic-contact-btn">Contact Us Today</Link>
      </div>
    </div>
  );
};

export default DynamicWebsiteDev;
