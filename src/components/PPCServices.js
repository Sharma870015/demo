import React from "react";
import "./PPCServices.css"; // Import the CSS for styling
import PPCImage from "./PPC.jpg"; // Replace with your PPC image URL

const PPCServices = () => {
  return (
    <div className="ppc-services-container">
      {/* Hero Section */}
      <div className="ppc-hero">
        <img src={PPCImage} alt="PPC Services" className="ppc-hero-image" />
        <div className="ppc-hero-text">
          <h1>Maximize Your ROI with Our PPC Services</h1>
          <p>
            Drive traffic and boost conversions with our targeted pay-per-click campaigns.
          </p>
          <button className="ppc-cta-button">Get Started</button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="ppc-overview">
        <h2>What is PPC Advertising?</h2>
        <p>
          Pay-Per-Click (PPC) advertising is a powerful digital marketing strategy that allows you to reach your target audience effectively and efficiently. Our PPC services are designed to maximize your ad spend and increase your visibility online.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="ppc-benefits">
        <h2>Our Services</h2>
        <div className="ppc-benefit-cards">
          <div className="ppc-benefit-card">
            <h3>Targeted Campaigns</h3>
            <p>Reach your ideal customers based on demographics, interests, and behaviors.</p>
          </div>
          <div className="ppc-benefit-card">
            <h3>Quick Results</h3>
            <p>See immediate traffic and conversions after launching your campaigns.</p>
          </div>
          <div className="ppc-benefit-card">
            <h3>Performance Tracking</h3>
            <p>Access real-time analytics to measure the success of your campaigns.</p>
          </div>
          <div className="ppc-benefit-card">
            <h3>Budget Control</h3>
            <p>Set daily budgets and control costs effectively to maximize ROI.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="ppc-choose-us">
        <h2>Why Choose Us?</h2>
        <ul className="choose-us-list">
          <li className="padding">🚀 Experienced Team with Proven Results</li>
          <li className="padding">🎯 Customized Strategies Tailored to Your Needs</li>
          <li className="padding">📊 Transparent Reporting and Analytics</li>
          <li className="padding">🤝 24/7 Customer Support</li>
          <li className="padding">💰 Competitive Pricing Packages</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="ppc-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is PPC advertising?</h3>
          <p>PPC advertising is a model where advertisers pay each time a user clicks on their ad. It’s an effective way to gain visibility quickly.</p>
        </div>
        <div className="faq-item">
          <h3>How quickly can I see results?</h3>
          <p>Many clients see results almost immediately after launching their campaigns, with increased traffic and conversions.</p>
        </div>
        <div className="faq-item">
          <h3>Can you manage my PPC campaigns?</h3>
          <p>Yes, we provide full management services for PPC campaigns, from setup to ongoing optimization.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="ppc-contact">
        <h3>Ready to Boost Your Online Presence?</h3>
        <button className="ppc-contact-btn">Contact Us Today</button>
      </div>
    </div>
  );
};

export default PPCServices;
