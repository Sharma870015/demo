import React, { useEffect } from "react";
import './EcommerceMarketing.css';
import E_commerce from './SEO_ECommerce.webp';
import Paid from './PA.jpg';
import Email from './EmailMar.jpg';
import back from './E_commerce.jpg';
import { Link } from 'react-router-dom';

const EcommerceMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ecommerce-page">
      {/* Hero Section */}
      <section className="ecommerce-hero">
        <img
          src={back} 
          alt="E-commerce Marketing"
          className="ecommerce-hero-image"
        />
        <div className="ecommerce-hero-overlay">
          <h1>E-commerce Marketing</h1>
          <p>Boost Your Online Sales with Expert E-commerce Strategies</p>
          <Link to='/contact' className="cta-button">Grow Your Store</Link>
        </div>
      </section>

      {/* New Heading and Description Section */}
      <section className="intro-section">
        <h2 className="intro-heading">Elevate Your Online Presence</h2>
        <p className="intro-description">Whether you're starting a new e-commerce store or looking to boost an existing one, our proven strategies will help you increase traffic, conversions, and sales. Let's take your business to the next level.</p>
      </section>

      {/* Our Services Section */}
      <section className="ecommerce-services">
        <h2 className='color'>Our Services</h2>
        <div className="services-container">
          <Link to='/SEO-Services' className="services-card">
            <h3 className='titl'>SEO for E-commerce</h3>
            <p className='des'>Improve your store's visibility and organic traffic with expert SEO techniques.</p>
          </Link>
          <Link to='/EmailMarketingService' className="services-card">
            <h3 className='titl'>Email Marketing</h3>
            <p className='des'>Engage customers with personalized and effective email campaigns.</p>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className='color'>Why Choose Us</h2>
        <p>We offer personalized, data-driven strategies designed to help you succeed in the competitive e-commerce world. Here's why we stand out:</p>
        <ul>
          <li className='look'>🚀 Proven track record of increasing sales.</li>
          <li className='look'>🎯 Dedicated support and transparent reporting.</li>
          <li className='look'>📊 Tailored strategies to fit your unique business needs.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className='color'>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h4>How do I get started with your services?</h4>
            <p>You can reach out through our contact form, and we will get in touch to discuss your needs.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer customizable packages?</h4>
            <p>Yes, we offer tailored solutions to meet the specific needs of your e-commerce business.</p>
          </div>
          <div className="faq-item">
            <h4>How long before I start seeing results?</h4>
            <p>Results vary depending on the service, but many clients see improvements within 3-6 months.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="ecommerce-cta">
        <h2 className='width'>Ready to Take Your E-commerce Store to the Next Level?</h2>
        <p>Partner with us to grow your online sales and dominate the e-commerce market.</p>
        <button className="-button">Start Now</button>
      </section>
    </div>
  );
};

export default EcommerceMarketing;
