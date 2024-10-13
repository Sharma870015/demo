import React from 'react';
import './SocialMediaMarketing.css';
import PCA from './PCA.webp'
import Social from './SMM.jpg'
import Content from './CCM.webp'
import Back from './SMM.webp'

const SocialMediaMarketing = () => {
  return (
    <div className="smm-page">
      {/* Hero Section */}
      <section className="smm-hero">
        <img
          src={Back} // Replace with an actual image URL
          alt="Social Media Marketing"
          className="smm-hero-image"
        />
        <div className="smm-hero-overlay">
          <h1 className='for_clr'>Social Media Marketing</h1>
          <p className='hdesc'>Boost Your Brand with Our Expert Strategies</p>
          <button className="button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="smm-services">
        <h2 className='for_clr'>Our Digital Marketing Services</h2>
        <div className="services-container">
          {/* Social Media Management */}
          <div className="service-card">
            <img
              src={Social} // Replace with an actual image URL
              alt="Social Media Management"
            />
            <h3 className='for_clr'>Social Media Management</h3>
            <p>Grow your social presence, engage audiences, and drive conversions.</p>
          </div>
          {/* Content Creation */}
          <div className="service-card">
            <img
              src={Content} // Replace with an actual image URL
              alt="Content Creation"
            />
            <h3 className='for_clr'>Content Creation</h3>
            <p>We create engaging posts, videos, and graphics that capture your brand.</p>
          </div>
          {/* Paid Social Advertising */}
          <div className="service-card">
            <img
              src={PCA} // Replace with an actual image URL
              alt="Paid Social Advertising"
            />
            <h3 className='for_clr'>Paid Social Advertising</h3>
            <p>Get quick results with targeted ads across all major social platforms.</p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="smm-strategy">
        <h2 className='for_clr'>Our Approach</h2>
        <div className="strategy-container">
          <div className="strategy-step">
            <h4 className='for_clr'>1. Audit & Analysis</h4>
            <p>We start by analyzing your current social presence and market position.</p>
          </div>
          <div className="strategy-step">
            <h4 className='for_clr'>2. Custom Strategy</h4>
            <p>Develop a bespoke plan tailored to your brand’s unique goals and target audience.</p>
          </div>
          <div className="strategy-step">
            <h4 className='for_clr'>3. Continuous Optimization</h4>
            <p>We monitor performance and optimize for better engagement and ROI.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="smm-cta">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>Let’s take your social media presence to the next level with our expert team.</p>
        <button className="-button">Contact Us Today</button>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
