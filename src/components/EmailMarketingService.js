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
        <h2>Benefits of Our Email Marketing Services</h2>
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

      {/* Services Offered Section */}
      <section className="email-services-offered">
        <h2>Our Email Marketing Services</h2>
        <ul className="email-services-list">
          <li className="list_serv">
            <strong>Email Campaign Management</strong>
            <p>We handle everything from strategy to execution for your email campaigns.</p>
          </li>
          <li className="list_serv">
            <strong>List Building and Segmentation</strong>
            <p>Grow your email list and segment it for targeted campaigns.</p>
          </li>
          <li className="list_serv">
            <strong>Design and Content Creation</strong>
            <p>Create engaging emails with captivating designs and copy that resonates.</p>
          </li>
          <li className="list_serv">
            <strong>A/B Testing</strong>
            <p>Optimize your campaigns with A/B testing to determine what works best.</p>
          </li>
          <li className="list_serv">
            <strong>Automation</strong>
            <p>Set up automated email sequences to nurture leads and retain customers.</p>
          </li>
          <li className="list_serv">
            <strong>Performance Reporting</strong>
            <p>Receive detailed reports on your campaigns' performance metrics.</p>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="email-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"Our email open rates have doubled since we started using these services! Highly recommended!"</p>
          <strong>- Sarah J.</strong>
        </div>
        <div className="testimonial-card">
          <p>"The team helped us craft perfect emails that truly resonate with our audience."</p>
          <strong>- John D.</strong>
        </div>
      </section>

      {/* Email Signup Form Section */}
      <section className="email-signup">
        <h2 className="Subs">Subscribe to Our Newsletter</h2>
        <p className="Stay-Tune">Stay updated with the latest news and tips in email marketing.</p>
        <form className="signup-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit" className="signup-button">Subscribe</button>
        </form>
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
