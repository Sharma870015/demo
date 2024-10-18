import React from 'react';
import './AffiliateMarketing.css';
import image from './AM.jpg';
import Photo from './Affiliate.jpg';
import CS from './CS.jpg';

const AffiliateMarketing = () => {
  return (
    <div className="affiliate-page">
      {/* Hero Section */}
      <section className="affiliate-hero">
        <img
          src={Photo}
          alt="Affiliate Marketing"
          className="affiliate-hero-image"
        />
        <div className="affiliate-hero-overlay">
          <h1>Affiliate Marketing</h1>
          <p>Maximize Earnings with Performance-Driven Strategies</p>
          <button className="cta-button">Join Us Today</button>
        </div>
      </section>

      {/* Affiliate Services Description Section */}
      <section className="affiliate-services">
        <h2>Our Affiliate Marketing Services</h2>
        <p>
          Our affiliate marketing services are designed to help you leverage partnerships to boost your brand's visibility and sales. We provide comprehensive strategies that include tracking performance, optimizing campaigns, and increasing your revenue streams through effective affiliate collaborations.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Performance Analysis</h3>
            <p>Analyze and optimize your affiliate performance metrics for better ROI.</p>
          </div>
          <div className="service-card">
            <h3>Recruitment of Affiliates</h3>
            <p>Identify and onboard the right affiliates to promote your brand effectively.</p>
          </div>
          <div className="service-card">
            <h3>Marketing Strategy Development</h3>
            <p>Create tailored marketing strategies that align with your brand's goals.</p>
          </div>
          <div className="service-card">
            <h3>Commission Management</h3>
            <p>Manage commissions efficiently to ensure affiliates are rewarded fairly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="affiliate-why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our team is dedicated to maximizing your affiliate potential with transparent communication and measurable results. We focus on building long-term partnerships that benefit all parties involved.
        </p>
        <ul>
          <li>Experienced Affiliate Managers</li>
          <li>Data-Driven Decision Making</li>
          <li>24/7 Support and Guidance</li>
          <li>Custom Solutions for Every Business</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="affiliate-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How does affiliate marketing work?</h3>
          <p>Affiliates promote your products, and when sales are made through their links, they earn a commission.</p>
        </div>
        <div className="faq-item">
          <h3>What types of products can I promote?</h3>
          <p>You can promote any product that aligns with your audience's interests and needs.</p>
        </div>
        <div className="faq-item">
          <h3>How do I track my affiliate sales?</h3>
          <p>We provide detailed tracking through analytics tools to monitor sales and conversions.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="affiliate-cta">
        <h2>Ready to Increase Your Earnings?</h2>
        <p>Join our affiliate marketing program and watch your revenue soar.</p>
        <button className="-button">Start Earning Now</button>
      </section>
    </div>
  );
};

export default AffiliateMarketing;
