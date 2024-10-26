import React, { useEffect } from "react";
import './FintechSection.css';
import FintechImage from './Fintech.jpg'; // Sample Image
import { Link } from 'react-router-dom';

const FintechSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fintech-section">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={FintechImage} alt="Fintech" className="hero-image" />
        <div className="overlay-text">
          <h1>Fintech Solutions</h1>
          <p>Revolutionize the way you manage, invest, and grow your finances.</p>
        </div>
      </div>

      {/* Heading and Description */}
      <section className="content-section">
        <h2 className='heading'>Welcome to Fintech Innovation</h2>
        <p>
          Discover how our advanced fintech solutions can streamline your financial management,
          enhance security, and deliver exceptional financial experiences. From mobile banking to
          AI-driven investment strategies, we offer the tools you need to thrive in the digital
          economy.
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <h3 className='service-heading'>Our Fintech Services</h3>
        <div className="service-cards">
          <div className="card">
            <h3 className='clr'>Mobile Banking</h3>
            <p>Access your accounts, transfer funds, and manage your finances on the go.</p>
          </div>
          <div className="card">
            <h3 className='clr'>AI Investments</h3>
            <p>Automated AI-driven investment strategies for better portfolio management.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Blockchain Solutions</h3>
            <p>Secure, transparent, and decentralized financial transactions using blockchain.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Personal Finance Management</h3>
            <p>Track your spending, create budgets, and set financial goals with ease.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Our Fintech Solutions?</h2>
        <ul className="reasons-list">
          <li className='look'>🚀Innovative solutions tailored to your financial needs.</li>
          <li className='look'>🔒Uncompromising security and data protection.</li>
          <li className='look'>💡Expert team with deep financial and technical expertise.</li>
          <li className='look'>📈Proven track record of delivering results.</li>
          <li className='look'>💬24/7 customer support and transparent communication.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q. What is fintech?</h3>
          <p><strong>Ans. </strong>Fintech refers to the integration of technology in financial services to improve and automate financial transactions.</p>
        </div>
        <div className="faq-item">
          <h3>Q. How secure is your fintech platform?</h3>
          <p><strong>Ans. </strong>Our platform uses state-of-the-art encryption and security protocols to ensure the safety of your data and transactions.</p>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="connect-section">
        <h2 className='btm'>Connect with Us</h2>
        <p className='descr'>Want to explore our fintech solutions further? Contact us today for a consultation!</p>
        <Link to='/contact' className="connect-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default FintechSection;
