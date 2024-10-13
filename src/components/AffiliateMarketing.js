import React from 'react';
import './AffiliateMarketing.css';
import image from './AM.jpg'
import Photo from './Affiliate.jpg'
import CS from './CS.jpg'

const AffiliateMarketing = () => {
  return (
    <div className="affiliate-page">
      {/* Hero Section */}
      <section className="affiliate-hero">
        <img
          src={Photo} // Replace with actual image URL
          alt="Affiliate Marketing"
          className="affiliate-hero-image"
        />
        <div className="affiliate-hero-overlay">
          <h1>Affiliate Marketing</h1>
          <p>Maximize Earnings with Performance-Driven Strategies</p>
          <button className="cta-button">Join Us Today</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="affiliate-services">
        <h2>Our Affiliate Marketing Services</h2>
        <div className="services-container">
          {/* Affiliate Network Management */}
          <div className="service-card">
            <img
              src={image} // Replace with actual image URL
              alt="Affiliate Network Management"
            />
            <h3>Affiliate Network Management</h3>
            <p>Manage, grow, and optimize your affiliate networks for maximum profits.</p>
          </div>
          {/* Performance Tracking */}
          <div className="service-card">
            <img
              src={Photo} // Replace with actual image URL
              alt="Performance Tracking"
            />
            <h3>Performance Tracking</h3>
            <p>Track your affiliate campaigns in real-time for better optimization.</p>
          </div>
          {/* Commission Strategy */}
          <div className="service-card">
            <img
              src={CS} // Replace with actual image URL
              alt="Commission Strategy"
            />
            <h3>Commission Strategy</h3>
            <p>Set up the perfect commission plan to attract top affiliates.</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="affiliate-approach">
        <h2>Our Approach</h2>
        <div className="approach-container">
          <div className="approach-step">
            <h4>1. Recruitment</h4>
            <p>We recruit top affiliates to represent your brand and drive traffic.</p>
          </div>
          <div className="approach-step">
            <h4>2. Campaign Setup</h4>
            <p>Designing and setting up effective campaigns for affiliates.</p>
          </div>
          <div className="approach-step">
            <h4>3. Results Optimization</h4>
            <p>Ongoing campaign monitoring to ensure consistent performance.</p>
          </div>
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
