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

      {/* Our Services Section */}
      <section className="dynamic-services">
        <h2 className="color-he">Our Services</h2>
        <div className="dynamic-service-cards">
          <div className="dynamic-service-card">
            <i className="fas fa-laptop-code dynamic-icon"></i>
            <h3>Web Development</h3>
            <p>Building custom websites with modern design and functionality to meet your business needs.</p>
          </div>
          <div className="dynamic-service-card">
            <i className="fas fa-mobile-alt dynamic-icon"></i>
            <h3>Responsive Design</h3>
            <p>Ensuring your website looks and works great on any device, from desktops to smartphones.</p>
          </div>
          <div className="dynamic-service-card">
            <i className="fas fa-lock dynamic-icon"></i>
            <h3>Security & Performance</h3>
            <p>Implementing the latest security measures to protect your site and optimize performance.</p>
          </div>
          <div className="dynamic-service-card">
            <i className="fas fa-rocket dynamic-icon"></i>
            <h3>SEO Optimization</h3>
            <p>Boosting your website's visibility with search engines and improving traffic and conversions.</p>
          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="dynamic-faq">
        <h2 className="color-he">Frequently Asked Questions</h2>
        <div className="dynamic-faq-items">
          <div className="dynamic-faq-item">
            <h3>What is Dynamic Website Development?</h3>
            <p>
              Dynamic website development involves creating sites that can change their content or layout automatically based on user interactions, data input, or server-side responses, offering more personalized and interactive experiences.
            </p>
          </div>
          <div className="dynamic-faq-item">
            <h3>How long does it take to build a dynamic website?</h3>
            <p>
              The timeline depends on the complexity of the site, but on average, a fully functional dynamic website can take anywhere from 4 to 12 weeks to develop, including design, coding, and testing.
            </p>
          </div>
          <div className="dynamic-faq-item">
            <h3>What technologies do you use?</h3>
            <p>
              We specialize in using modern technologies like React.js, Node.js, MongoDB, and REST APIs to build scalable, secure, and high-performance dynamic websites.
            </p>
          </div>
          <div className="dynamic-faq-item">
            <h3>Will my dynamic website be SEO-friendly?</h3>
            <p>
              Absolutely! We ensure that your dynamic website is optimized for search engines by implementing best practices like fast loading times, mobile responsiveness, and clean URLs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="dynamic-contact">
        <h3>Ready to elevate your online presence?</h3>
        <Link to="/contact" className="dynamic-contact-btn">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default DynamicWebsiteDev;
