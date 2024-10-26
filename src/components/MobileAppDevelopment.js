import React, { useEffect } from "react";
import "./MobileAppDevelopment.css";
import Mobile from "./Android.jpg";
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <img
          className="hero-image"
          src={Mobile}
          alt="Mobile App Development Services"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Mobile App Development Services</h1>
          <p className="hero-description">
            Building innovative, high-performance mobile apps for iOS and
            Android, tailored to your business needs.
          </p>
        </div>
      </div>

      {/* Mobile App Development Section */}
      <div className="mobile-development-section">
        <h1 className="mobile-dev-title">
          Our Mobile App Development Services
        </h1>
        <p className="mobile-dev-intro">
          At DigiAppify, we specialize in developing high-performance mobile
          applications tailored to meet the specific needs of your business. Our
          team of expert developers ensures that your app delivers a seamless
          and engaging experience across all devices. Explore our core offerings
          below:
        </p>

        <div className="services-container">
          <Link to="/android" className="service-card">
            <h2 className="service-title">Android App Development</h2>
            <p className="service-description">
              Building scalable, robust, and user-friendly Android applications
              with a focus on performance and engagement.
            </p>
          </Link>

          <Link to="/ios-development" className="service-card">
            <h2 className="service-title">iOS App Development</h2>
            <p className="service-description">
              Expertise in creating high-quality iOS apps with intuitive
              interfaces, ensuring compatibility with Apple devices.
            </p>
          </Link>

          <Link to="/iPad-development" className="service-card">
            <h2 className="service-title">iPad App Development</h2>
            <p className="service-description">
              Develop high-performance iPad apps that maximize user satisfaction
              across all screen sizes.
            </p>
          </Link>

          <Link to="/AppleWatch-App" className="service-card">
            <h2 className="service-title">Apple Watch App Development</h2>
            <p className="service-description">
              Design innovative apps for Apple Watch, delivering a seamless
              experience for wearable devices.
            </p>
          </Link>
        </div>
      </div>

      {/* Why choose us section */}
      <div className="exper-section">
        <h2 className="why_us">Why Choose Us?</h2>
        <ul className="choose_detail">
          <li>Expert Developers with extensive experience</li>
          <li>Custom Solutions tailored to your requirements</li>
          <li>Seamless Integration with existing systems</li>
          <li>Focus on user experience and interface design</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-container">
          <div className="faq-item">
            <h2 className="faq-question">What platforms do you develop for?</h2>
            <p className="faq-answer">
              We specialize in both iOS and Android development, ensuring
              seamless experiences across all platforms.
            </p>
          </div>
          <div className="faq-item">
            <h2 className="faq-question">
              How long does it take to develop a mobile app?
            </h2>
            <p className="faq-answer">
              Development time varies depending on the complexity of the app.
              Typically, it can take from a few weeks to several months.
            </p>
          </div>
          <div className="faq-item">
            <h2 className="faq-question">Do you offer post-launch support?</h2>
            <p className="faq-answer">
              Yes, we provide ongoing support and maintenance services to ensure
              your app runs smoothly after launch.
            </p>
          </div>
          <div className="faq-item">
            <h2 className="faq-question">
              What are your app development costs?
            </h2>
            <p className="faq-answer">
              Our pricing depends on the app’s complexity and features. Contact
              us for a customized quote based on your project’s needs.
            </p>
          </div>
        </div>
      </div>
 {/* Additional Section: Call to Action */}
 <div className="cta-section">
        <h2 className="btn-title">Ready to Elevate Your Online Presence?</h2>
        <p className="cta-description">Get in touch with us today and let's build something amazing together!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
    
  );
};

export default MobileAppDevelopment;
