import React from 'react';
import './SocialMediaMarketing.css';
import PCA from './PCA.webp';
import Social from './SMM.jpg';
import Content from './CCM.webp';
import Back from './SMM.webp';

const SocialMediaMarketing = () => {
  return (
    <div className="smm-page">
      {/* Hero Section */}
      <section className="smm-hero">
        <img
          src={Back}
          alt="Social Media Marketing"
          className="smm-hero-image"
        />
        <div className="smm-hero-overlay">
          <h1 className='for_clr'>Social Media Marketing</h1>
          <p className='hdesc'>Boost Your Brand with Our Expert Strategies</p>
          <button className="button">Get Started</button>
        </div>
      </section>

      {/* Description Section */}
      <section className="smm-description">
        <h2 className='for_clr'>What is Social Media Marketing?</h2>
        <p>
          Social Media Marketing involves promoting your brand and content on social media platforms to increase visibility, engagement, and ultimately, conversions. Our tailored strategies ensure that your brand reaches the right audience effectively.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="smm-services">
        <h2 className='for_clr'>Our Digital Marketing Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Paid Campaigns</h3>
            <p>Leverage targeted advertising to maximize your reach, drive traffic, and achieve measurable results through data-driven strategies.</p>
          </div>
          <div className="service-card">
            <h3>Social Media Management</h3>
            <p>Strategically manage your social media platforms to enhance brand visibility and foster meaningful connections with your audience.</p>
          </div>
          <div className="service-card">
            <h3>Content Creation</h3>
            <p>Craft engaging content that speaks to your audience, from social media posts to blogs, designed to boost engagement and brand loyalty.
            </p>
          </div>
          <div className="service-card">
            <h3>Influencer Marketing</h3>
            <p>Partner with influencers to promote your brand and reach a wider audience. Leverage their credibility and reach for impactful marketing.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="smm-why-choose-us">
        <h2 className='for_clr'>Why Choose Us?</h2>
        <p>
          Our team of experts is dedicated to crafting tailored strategies that align with your business goals. We prioritize transparency, communication, and measurable results to ensure your satisfaction.
        </p>
        <ul>
          <li className='look'>🚀Experienced Professionals</li>
          <li className='look'>🎯Data-Driven Strategies</li>
          <li className='look'>📊 24/7 Support</li>
          <li className='look'>💰Custom Solutions for Every Business</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="smm-faq">
        <h2 className='for_clr'>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What platforms do you use for social media marketing?</h3>
          <p>We utilize all major platforms including Facebook, Instagram, Twitter, and LinkedIn to reach your target audience effectively.</p>
        </div>
        <div className="faq-item">
          <h3>How do you measure success?</h3>
          <p>We track key performance indicators (KPIs) such as engagement rates, click-through rates, and conversions to measure success.</p>
        </div>
        <div className="faq-item">
          <h3>Can I customize my social media package?</h3>
          <p>Absolutely! We offer flexible packages that can be tailored to fit your specific needs and goals.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="smm-cta">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>Let’s take your social media presence to the next level with our expert team.</p>
        <button className="down-button">Contact Us Today</button>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;