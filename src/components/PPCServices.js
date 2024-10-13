import React from "react";
import "./PPCServices.css"; // Import the CSS for styling
import PPCImage from "./PPC.jpg"; // Replace with your PPC image URL

const PPCServices = () => {
  return (
    <div className="ppc-services-container">
      {/* Hero Section */}
      <div className="ppc-hero">
        <img
          src={PPCImage}
          alt="PPC Services"
          className="ppc-hero-image"
        />
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
        <h2>Benefits of Our PPC Services</h2>
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

      {/* Services Offered Section */}
      <section className="ppc-services-offered">
        <h2>Our PPC Services</h2>
        <ul className="ppc-services-list">
          <li className="list_serv">
            <strong>Keyword Research</strong>
            <p>Identify high-performing keywords to drive relevant traffic.</p>
          </li>
          <li className="list_serv">
            <strong>Ad Creation</strong>
            <p>Create compelling ad copy and visuals to attract clicks.</p>
          </li>
          <li className="list_serv">
            <strong>Landing Page Optimization</strong>
            <p>Enhance landing pages for better conversion rates.</p>
          </li>
          <li className="list_serv">
            <strong>A/B Testing</strong>
            <p>Test different ads to find the most effective versions.</p>
          </li>
          <li className="list_serv">
            <strong>Remarketing Campaigns</strong>
            <p>Re-engage visitors who didn’t convert the first time.</p>
          </li>
          <li className="list_serv">
            <strong>Performance Reporting</strong>
            <p>Receive comprehensive reports on campaign performance.</p>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="ppc-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"The PPC campaigns boosted our sales significantly! A game-changer for our business."</p>
          <strong>- Emily R.</strong>
        </div>
        <div className="testimonial-card">
          <p>"Professional and results-driven. Highly satisfied with the service!"</p>
          <strong>- Mark T.</strong>
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
