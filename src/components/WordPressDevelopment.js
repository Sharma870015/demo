import React from "react";
import "./WordPressDevelopment.css"; // Import the CSS for styling
import Background from "./Wordpress2.jpg";
import { Link } from "react-router-dom";

const WordPressDevelopment = () => {
  return (
    <div className="wordpress-container">
      {/* Image with Overlay Text */}
      <div className="wp-image-container">
        <img
          src={Background} // Replace with your image URL
          alt="WordPress Development"
          className="wp-hero-image"
        />
        <div className="wp-overlay-text">
          <h1 className="h_animate"> WordPress Website Dev</h1>
          <p className="descr_hea">
            Develop custom WordPress websites with unique themes, plugins, and
            optimized performance, ensuring secure, fast-loading, and
            SEO-friendly solutions tailored to your brand.
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <h1 className="wp-heading">WordPress Website Development</h1>

      {/* Introductory Paragraph */}
      <p className="wp-description">
        WordPress powers over 40% of the websites on the internet, making it one
        of the most widely used content management systems. Whether you need a
        custom design, unique plugins, or a fast-loading, SEO-friendly site, our
        team is here to build the perfect WordPress solution for you.
      </p>

      {/* WordPress Services Section */}
      <section className="wp-services">
        <h2 className="clr-bottom">Our WordPress Services</h2>
        <div className="wp-service-cards">
          <div className="wp-service-card">
            <i className="fas fa-paint-brush wp-service-icon"></i>
            <h3>Custom Design</h3>
            <p>
              We craft visually stunning, fully responsive, and custom-designed
              WordPress websites tailored to your brand's aesthetics.
            </p>
          </div>
          <div className="wp-service-card">
            <i className="fas fa-code wp-service-icon"></i>
            <h3>Theme Development</h3>
            <p>
              Get bespoke themes developed from scratch, or customize existing
              themes to match your business needs.
            </p>
          </div>
          <div className="wp-service-card">
            <i className="fas fa-cogs wp-service-icon"></i>
            <h3>Plugin Integration</h3>
            <p>
              Enhance your WordPress site's functionality with custom plugin
              development and seamless integration.
            </p>
          </div>
          <div className="wp-service-card">
            <i className="fas fa-lock wp-service-icon"></i>
            <h3>Security & Maintenance</h3>
            <p>
              Keep your website secure and up-to-date with our ongoing
              maintenance and security services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="wp-choose-us">
        <h2>Why Choose Us</h2>
        <p>
          Our dedicated team of WordPress developers is committed to delivering
          high-quality, tailored solutions that meet your business needs. With
          years of experience and expertise, we ensure that every project is
          executed with precision, creativity, and a focus on user experience.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="wp-technologies">
        <h2 className="color_h">Technologies We Use</h2>
        <div className="wp-tech-cards">
          <div className="wp-tech-card">
            <i className="fab fa-wordpress wp-icon"></i>
            <h3 className="color_h">WordPress</h3>
            <p>The leading content management system.</p>
          </div>
          <div className="wp-tech-card">
            <i className="fas fa-database wp-icon"></i>
            <h3 className="color_h">MySQL</h3>
            <p>Robust database management for your site.</p>
          </div>
          <div className="wp-tech-card">
            <i className="fab fa-html5 wp-icon"></i>
            <h3 className="color_h">HTML5/CSS3</h3>
            <p>Modern web standards for responsive design.</p>
          </div>
          <div className="wp-tech-card">
            <i className="fab fa-js-square wp-icon"></i>
            <h3 className="color_h">JavaScript</h3>
            <p>Interactive elements to enhance user engagement.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="wp-contact">
        <h3>Ready to start your WordPress project?</h3>
        <Link to="/contact" className="wp-contact-btn">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default WordPressDevelopment;
