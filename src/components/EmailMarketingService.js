import React from "react";
import "./EmailMarketingService.css"; // Import the CSS for styling
import EmailMarketingImage from "./EmailMarketing.png"; // Replace with your background image URL
import { Link } from "react-router-dom";

const EmailMarketingService = () => {
  return (
    <div className="email-marketing-container">
      {/* Hero Section */}
      <div className="email-hero">
        <img
          src={EmailMarketingImage}
          alt="Email Marketing Services"
          className="email-hero-image"
        />
        <div className="email-hero-text">
          <h1>Email Marketing Services to Engage Your Audience</h1>
          <p>
            Drive engagement and boost conversions with our tailored email marketing solutions.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="email-overview">
        <h2>What is Email Marketing?</h2>
        <p>
          Email marketing is a powerful tool that allows businesses to communicate directly with their customers. Our comprehensive email marketing services are designed to help you connect with your audience, promote your products, and increase customer loyalty.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="email-benefits">
        <h2>Our Services</h2>
        <div className="email-benefit-cards">
          <div className="email-benefit-card">
            <h3>Targeted Messaging</h3>
            <p>Send personalized messages to segmented audiences for better results.</p>
          </div>
          <div className="email-benefit-card">
            <h3>High ROI</h3>
            <p>Email marketing has one of the highest returns on investment in digital marketing.</p>
          </div>
          <div className="email-benefit-card">
            <h3>Increased Engagement</h3>
            <p>Engage your audience with interactive content and relevant offers.</p>
          </div>
          <div className="email-benefit-card">
            <h3>Performance Tracking</h3>
            <p>Measure the success of your campaigns with detailed analytics and reporting.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="email-choose-us">
        <h2>Why Choose Us?</h2>
        <ul className="choose-us-list">
          <li>🚀 Experienced Team with Proven Results</li>
          <li>🎯 Customized Strategies Tailored to Your Needs</li>
          <li>📊 Transparent Reporting and Analytics</li>
          <li>🤝 24/7 Customer Support</li>
          <li>💰 Competitive Pricing Packages</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="email-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What types of email marketing campaigns do you offer?</h3>
          <p>We offer promotional emails, newsletters, event invitations, and automated drip campaigns.</p>
        </div>
        <div className="faq-item">
          <h3>How can I measure the success of my email campaigns?</h3>
          <p>You can track open rates, click-through rates, and conversions through our detailed analytics reports.</p>
        </div>
        <div className="faq-item">
          <h3>Can you help me grow my email list?</h3>
          <p>Yes, we provide strategies to capture leads and grow your subscriber list effectively.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="email-contact">
        <h3>Ready to Elevate Your Email Marketing?</h3>
        <p className="us_today">Contact us today for a free consultation!</p>
        <Link to='/contact' className="email-contact-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default EmailMarketingService;
