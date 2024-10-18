import React from "react";
import "./ECommerceWebAppDev.css"; // Import the CSS for styling
import Background from "./Ecommerce.jpg"; // Replace with your background image URL
import { Link } from "react-router-dom";

const ECommerceWebAppDev = () => {
  return (
    <div className="ecommerce-container">
      {/* Image with Overlay Text */}
      <div className="ecommerce-image-container">
        <img
          src={Background} // Replace with your image URL
          alt="E-commerce Web App Development"
          className="ecommerce-hero-image"
        />
        <div className="ecommerce-overlay-text">
          <h1>E-commerce Web App Development</h1>
          <p className="ecommerce-description">
            Crafting seamless online shopping experiences tailored to your business needs.
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <h1 className="ecommerce-heading">Transform Your Business Online</h1>

      {/* Introductory Paragraph */}
      <p className="ecommerce-intro">
        In today's digital era, having an online presence is crucial for business success. Our expert team specializes in developing user-friendly e-commerce applications that drive sales and enhance customer engagement. We ensure that your online store stands out with intuitive design and robust functionality.
      </p>

      {/* Our Services Section */}
      <section className="ecommerce-services">
        <h2 className="serv_head">Our Services</h2>
        <div className="ecommerce-services-cards">
          <div className="ecommerce-service-card">
            <i className="fas fa-shopping-cart ecommerce-icon"></i>
            <h3>Custom E-Commerce Stores</h3>
            <p>We build customized, scalable, and feature-rich e-commerce platforms to meet your business needs.</p>
          </div>
          <div className="ecommerce-service-card">
            <i className="fas fa-mobile-alt ecommerce-icon"></i>
            <h3>Responsive Design</h3>
            <p>Our e-commerce websites are designed to provide optimal user experiences across all devices.</p>
          </div>
          <div className="ecommerce-service-card">
            <i className="fas fa-search-dollar ecommerce-icon"></i>
            <h3>SEO Optimization</h3>
            <p>Boost your online store’s visibility with SEO strategies that increase traffic and conversions.</p>
          </div>
          <div className="ecommerce-service-card">
            <i className="fas fa-lock ecommerce-icon"></i>
            <h3>Secure Payment Integration</h3>
            <p>We ensure safe and secure transactions by integrating trusted payment gateways.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="ecommerce-choose-us">
        <h2 className="serv_head">Why Choose Our Services?</h2>
        <p>
          We provide tailored e-commerce solutions that fit your unique business model. Our team works collaboratively with you to create a captivating online shopping experience that encourages customer loyalty and boosts sales. With our extensive expertise, we prioritize quality, performance, and user satisfaction.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="ecommerce-technologies">
        <h2 className="serv_head">Technologies We Use</h2>
        <div className="ecommerce-tech-cards">
          <div className="ecommerce-tech-card">
            <i className="fab fa-react ecommerce-icon"></i>
            <h3>React.js</h3>
            <p>A powerful library for building dynamic user interfaces.</p>
          </div>
          <div className="ecommerce-tech-card">
            <i className="fas fa-server ecommerce-icon"></i>
            <h3>Node.js</h3>
            <p>JavaScript runtime for scalable server-side applications.</p>
          </div>
          <div className="ecommerce-tech-card">
            <i className="fas fa-database ecommerce-icon"></i>
            <h3>MongoDB</h3>
            <p>A flexible, scalable database solution for modern applications.</p>
          </div>
          <div className="ecommerce-tech-card">
            <i className="fas fa-cloud ecommerce-icon"></i>
            <h3>RESTful APIs</h3>
            <p>Creating efficient communication between client and server.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ecommerce-faq">
        <h2 className="serv_head">Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h4>How long does it take to build an e-commerce website?</h4>
            <p>Typically, it takes 4-6 weeks depending on the complexity of the project.</p>
          </div>
          <div className="faq-item">
            <h4>Do you provide ongoing support after the website is live?</h4>
            <p>Yes, we offer maintenance and support services to ensure your website runs smoothly.</p>
          </div>
          <div className="faq-item">
            <h4>Can you integrate third-party tools into the e-commerce site?</h4>
            <p>Absolutely! We can integrate various third-party tools such as CRM systems, analytics, and more.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="ecommerce-contact">
        <h3>Ready to Start Your E-commerce Journey?</h3>
        <Link to='/contact' className="ecommerce-contact-btn">Contact Us Now</Link>
      </div>
    </div>
  );
};

export default ECommerceWebAppDev;
