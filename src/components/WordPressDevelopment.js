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
          <h1> WordPress Website Dev</h1>
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

      {/* Why Choose Us Section */}
      <section className="wp-choose-us">
        <h2>Why Choose Us</h2>
        <p>
          Our dedicated team of WordPress developers is committed to delivering
          high-quality, tailored solutions that meet your business needs. With
          years of experience and expertise, we ensure that every project is
          executed with precision, creativity, and a focus on user experience.
          From responsive design to advanced functionality, we take care of
          every detail to help you succeed online.
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

      {/* Expert Profiles Section */}
      <section className="wp-experts">
        <h2 className="color_h">Meet Our Experts</h2>
        <div className="wp-expert-cards">
          <div className="wp-expert-card">
            <h3 className="name-color">Aakash Sharma</h3>
            <p>Senior WordPress & Frontend Developer</p>
            <p>With over 8 years of experience in WordPress development, Aakash specializes in custom themes and plugin development.</p>
          </div>
          <div className="wp-expert-card">
            <h3 className="name-color">Kanika Sharma</h3>
            <p>Frontend Developer & SEO</p>
            <p>Kanika has a keen eye for design and user experience, ensuring that every site is not only functional but also beautiful.</p>
          </div>
          <div className="wp-expert-card">
            <h3 className="name-color">Versha Sharma</h3>
            <p>SEO Specialist</p>
            <p>Versha optimizes websites to rank higher in search engines, driving traffic and enhancing online visibility.</p>
          </div>
        </div>
      </section>

      {/* Section with Icons and Details */}
      <div className="wp-features">
        <div className="wp-feature-card">
          <i className="fas fa-cogs wp-icon"></i>
          <h2>Custom Themes</h2>
          <p>
            We develop custom themes from scratch or adapt existing templates to
            match your brand's identity.
          </p>
        </div>
        <div className="wp-feature-card">
          <i className="fas fa-plug wp-icon"></i>
          <h2>Custom Plugins</h2>
          <p>
            Our experts build tailor-made plugins to enhance the functionality
            of your WordPress site.
          </p>
        </div>
        <div className="wp-feature-card">
          <i className="fas fa-shield-alt wp-icon"></i>
          <h2>Security & Optimization</h2>
          <p>
            From malware protection to performance optimization, we ensure your
            website is secure and lightning-fast.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="wp-contact">
        <h3>Ready to start your WordPress project?</h3>
        <Link to="/contact" className="wp-contact-btn">Contact Us Today</Link>
      </div>
    </div>
  );
};

export default WordPressDevelopment;
