import React, { useEffect } from "react";
import './MobileAppDevelopment.css'
import Mobile from './Android.jpg'

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <img
          className="hero-image"
          src={Mobile} // Replace with a suitable image URL
          alt="Mobile App Development Services"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Mobile App Development Services</h1>
          <p className="hero-description">Building innovative, high-performance mobile apps for iOS and Android, tailored to your business needs.</p>
        </div>
      </div>
    <div className="mobile-development-section">
      <h1 className="mobile-dev-title">Our Mobile App Development Services</h1>
      <p className="mobile-dev-intro">
        At DigiAppify, we specialize in developing high-performance mobile applications tailored to meet the specific needs of your business. Our team of expert developers ensures that your app delivers a seamless and engaging experience across all devices. Explore our core offerings below:
      </p>

      <div className="services-container">
        <div className="service-card">
          <h2 className="service-title">Android App Development</h2>
          <p className="service-description">
            Building scalable, robust, and user-friendly Android applications with a focus on performance and engagement.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">iOS App Development</h2>
          <p className="service-description">
            Expertise in creating high-quality iOS apps with intuitive interfaces, ensuring compatibility with Apple devices.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">iPad App Development</h2>
          <p className="service-description">
            Cross-platform solutions for seamless app experiences across both iOS and Android platforms, saving time and resources.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-title">Apple Watch App Development</h2>
          <p className="service-description">
          Develop high-performance, visually stunning iPad apps that deliver seamless experiences, maximizing productivity and user satisfaction across all screen sizes.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MobileAppDevelopment;
