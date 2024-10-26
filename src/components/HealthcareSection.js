import React, { useEffect } from "react";
import './HealthcareSection.css';
import HealthcareImage from './Healthcare.jpg'; // Sample Image
import { Link } from 'react-router-dom';

const HealthcareSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="healthcare-section">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={HealthcareImage} alt="Healthcare" className="hero-image" />
        <div className="overlay-text">
          <h1>Healthcare Solutions</h1>
          <p>Transform the way you deliver, manage, and enhance healthcare services.</p>
        </div>
      </div>

      {/* Heading and Description */}
      <section className="content-section">
        <h2 className='heading'>Welcome to Healthcare Innovation</h2>
        <p>
          Explore our advanced healthcare solutions designed to improve patient outcomes, streamline
          administrative processes, and foster innovation. From telemedicine to AI-assisted diagnostics, 
          we provide the tools necessary to lead in the digital healthcare revolution.
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <h3 className='service-heading'>Our Healthcare Services</h3>
        <div className="service-cards">
          <div className="card">
            <h3 className='clr'>Telemedicine</h3>
            <p>Deliver remote healthcare consultations to patients from anywhere in the world.</p>
          </div>
          <div className="card">
            <h3 className='clr'>AI Diagnostics</h3>
            <p>Harness the power of AI for faster and more accurate medical diagnoses.</p>
          </div>
          <div className="card">
            <h3 className='clr'>EHR Systems</h3>
            <p>Manage and store patient records securely with our electronic health record systems.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Patient Management</h3>
            <p>Optimize administrative workflows and enhance patient experiences.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose us</h2>
        <ul className="reasons-list">
          <li className='look'>🏥 Cutting-edge technology tailored to the healthcare industry.</li>
          <li className='look'>🔒 Uncompromising patient data security and privacy protection.</li>
          <li className='look'>💡 Expert team with deep healthcare and technical expertise.</li>
          <li className='look'>📈 Proven track record of improving patient outcomes.</li>
          <li className='look'>💬 24/7 support with an emphasis on patient care and satisfaction.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q. What is telemedicine?</h3>
          <p><strong>Ans. </strong>Telemedicine allows healthcare professionals to provide services remotely via technology, such as video consultations.</p>
        </div>
        <div className="faq-item">
          <h3>Q. How secure is your healthcare platform?</h3>
          <p><strong>Ans. </strong>We adhere to strict healthcare data security regulations and use advanced encryption to protect patient data.</p>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="connect-section">
        <h2 className='btm'>Connect with Us</h2>
        <p className='descr'>Want to learn more about our healthcare solutions? Contact us today!</p>
        <Link to='/contact' className="connect-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default HealthcareSection;
