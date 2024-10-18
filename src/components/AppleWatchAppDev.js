import React from 'react';
import './AppleWatchAppDev.css'; // Import the CSS file for this component
import Apple from './AppleApp.jpg';

const AppleWatchAppDev = () => {
  return (
    <div className="apple-watch-app">
      {/* Top Section */}
      <div className="first-section">
        <img
          className="first-image"
          src={Apple} // Replace with your image URL
          alt="Apple Watch App Development"
        />
      </div>

      {/* Content Section */}
      <div className="content">
        <h1 className="AppleWatch_head">Apple Watch App Development</h1>
        <p className="just_descr">
          Enhance your life with innovative Apple Watch apps that blend
          functionality and style. Our expert developers create engaging and
          user-friendly applications tailored for your needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="service-section">
        <h2 className="provide_serv">Our Services</h2>
        <div className="services-cards-container">
          <div className="service-card">
            <h3 className="service-card-title">Custom App Development</h3>
            <p className="service-card-desc">
              Tailored app solutions to meet your specific requirements.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card-title">UI/UX Design</h3>
            <p className="service-card-desc">
              User-friendly and aesthetically pleasing designs for your app.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card-title">App Testing and QA</h3>
            <p className="service-card-desc">
              Rigorous testing to ensure your app is bug-free and performs well.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card-title">Maintenance and Support</h3>
            <p className="service-card-desc">
              Ongoing support and updates to keep your app running smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
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
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li>
            <strong>Q: How long does it take to develop an Apple Watch app?</strong>
            <br />
            A: Development time varies based on complexity, but we aim for timely delivery.
          </li>
          <li>
            <strong>Q: Do you offer post-launch support?</strong>
            <br />
            A: Yes, we provide ongoing support and maintenance for all our apps.
          </li>
          <li>
            <strong>Q: Can you integrate health tracking features?</strong>
            <br />
            A: Absolutely! We specialize in health and fitness app development.
          </li>
        </ul>
      </div>

      {/* Call-to-Action Button */}
      <a href="#contact" className="cta-button">
        Get Started with Your Apple Watch App!
      </a>
    </div>
  );
};

export default AppleWatchAppDev;
