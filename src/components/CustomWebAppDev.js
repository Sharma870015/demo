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

      {/* Our Services Section */}
      <section className="custom-services">
        <h2 className="Heading_desc">Our Services</h2>
        <div className="custom-service-cards">
          <div className="custom-service-card">
            <i className="fas fa-code custom-icon"></i>
            <h3>Custom Development</h3>
            <p>
              We build web apps from scratch tailored to your unique business
              requirements.
            </p>
          </div>
          <div className="custom-service-card">
            <i className="fas fa-cogs custom-icon"></i>
            <h3>API Integration</h3>
            <p>
              Seamlessly integrate third-party APIs into your web app to extend
              its capabilities.
            </p>
          </div>
          <div className="custom-service-card">
            <i className="fas fa-users custom-icon"></i>
            <h3>User Experience Design</h3>
            <p>
              We design user-friendly interfaces that make navigating your web
              app a breeze.
            </p>
          </div>
          <div className="custom-service-card">
            <i className="fas fa-laptop custom-icon"></i>
            <h3>Responsive Design</h3>
            <p>
              All our web apps are fully responsive, offering a seamless
              experience across all devices.
            </p>
          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="custom-faq">
        <h2 className="Heading_desc">Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h3>What is custom web app development?</h3>
            <p>
              Custom web app development involves creating web applications that
              are specifically designed to meet your business’s unique needs and
              requirements.
            </p>
          </div>
          <div className="faq-item">
            <h3>How long does it take to build a custom web app?</h3>
            <p>
              The time required to build a custom web app varies depending on
              the complexity and scope of the project. We provide detailed
              timelines after understanding your specific requirements.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can you integrate third-party services into my web app?</h3>
            <p>
              Absolutely! We specialize in integrating third-party services like
              payment gateways, social media, and other APIs to enhance your app.
            </p>
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
