import React from 'react';
import './EcommerceMarketing.css';
import E_commerce from './SEO_ECommerce.webp'
import Paid from './PA.jpg'
import Email from './EmailMar.jpg'
import back from './E_commerce.jpg'


const EcommerceMarketing = () => {
  return (
    <div className="ecommerce-page">
      {/* Hero Section */}
      <section className="ecommerce-hero">
        <img
          src={back} // Replace with actual image URL
          alt="E-commerce Marketing"
          className="ecommerce-hero-image"
        />
        <div className="ecommerce-hero-overlay">
          <h1>E-commerce Marketing</h1>
          <p>Boost Your Online Sales with Expert E-commerce Strategies</p>
          <button className="cta-button">Grow Your Store</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="ecommerce-services">
        <h2 className='h2'>Our E-commerce Marketing Services</h2>
        <div className="services-container">
          {/* SEO for E-commerce */}
          <div className="service-card">
            <img
              src={E_commerce} // Replace with actual image URL
              alt="SEO for E-commerce"
            />
            <h3>SEO for E-commerce</h3>
            <p>Optimize your online store for search engines and drive organic traffic.</p>
          </div>
          {/* Paid Advertising */}
          <div className="service-card">
            <img
              src={Paid} // Replace with actual image URL
              alt="Paid Advertising"
            />
            <h3>Paid Advertising</h3>
            <p>Run effective PPC campaigns to increase visibility and sales.</p>
          </div>
          {/* Email Marketing */}
          <div className="service-card">
            <img
              src={Email} // Replace with actual image URL
              alt="Email Marketing"
            />
            <h3>Email Marketing</h3>
            <p>Engage customers and increase conversions through targeted emails.</p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="ecommerce-strategy">
        <h2 className='h2'>Our Proven Strategy</h2>
        <div className="strategy-container">
          <div className="strategy-step">
            <h4 className='h2'>1. Product Optimization</h4>
            <p>Ensure your products are optimized for customer discovery and sales.</p>
          </div>
          <div className="strategy-step">
            <h4 className='h2'>2. Conversion Optimization</h4>
            <p>Improve your online store’s conversion rate through design and UX improvements.</p>
          </div>
          <div className="strategy-step">
            <h4 className='h2'>3. Retargeting</h4>
            <p>Retarget lost visitors and convert them into paying customers.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="ecommerce-cta">
        <h2>Ready to Take Your E-commerce Store to the Next Level?</h2>
        <p>Partner with us to grow your online sales and dominate the e-commerce market.</p>
        <button className="-button">Start Now</button>
      </section>
    </div>
  );
};

export default EcommerceMarketing;
