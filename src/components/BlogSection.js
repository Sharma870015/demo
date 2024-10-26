import React, { useEffect } from "react";
import './BlogSection.css';
import Blog from './Blog.webp';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-section">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={Blog}
          alt="Digital Marketing"
          className="hero-image"
        />
        <div className="overlay-text">
          <h1>Blog Writing</h1>
          <p>Boost your business with expert digital marketing strategies</p>
        </div>
      </div>

      {/* Heading and Description */}
      <section className="content-section">
        <h2 className='look'>Welcome to Our Digital Marketing Blog</h2>
        <p>
          Discover the power of digital marketing with our expert insights.
          We cover a wide range of topics from search engine optimization,
          content marketing, social media strategies, and more. Stay ahead
          of the competition with actionable tips and the latest trends to
          grow your business online. Whether you're new to digital marketing
          or looking to hone your skills, you're in the right place!
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <h3 className='serv'>Our Services</h3>
        <div className="service-cards">
          <Link to='/SEO-Services' className="card">
            <h3 className='clr'>SEO</h3>
            <p>Optimize your website to rank higher on search engines and attract more traffic.</p>
          </Link>
          <Link to='/PPC-Services' className="card">
            <h3 className='clr'>PPC Advertising</h3>
            <p>Run cost-effective ad campaigns to reach your target audience quickly.</p>
          </Link>
          <div className="card">
            <h3 className='clr'>Content Marketing</h3>
            <p>Create valuable content to engage and convert your audience into customers.</p>
          </div>
          <Link to='/socialMedia-Marketing' className="card">
            <h3 className='clr'>Social Media</h3>
            <p>Build your brand's presence and grow a loyal audience across social platforms.</p>
          </Link>
          <Link to='/EmailMarketingService' className="card">
            <h3 className='clr'>Email Marketing</h3>
            <p>Stay connected with your customers through personalized and targeted emails.</p>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2 className='look'>Why Choose Us?</h2>
        <ul className="reasons-list">
          <li className='pad'>🚀Customized marketing strategies for your business.</li>
          <li className='pad'>🎯Proven track record of driving ROI.</li>
          <li className='pad'>📊Expert team with years of digital marketing experience.</li>
          <li className='pad'>🤝Data-driven solutions tailored to your specific needs.</li>
          <li className='pad'>💰Comprehensive support and transparent communication.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className='look'>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3 className='ques'>Q. How long does it take to see results?</h3>
          <p><strong>Ans. </strong>It can take between 3 to 6 months depending on the complexity of your strategy.</p>
        </div>
        <div className="faq-item">
          <h3 className='ques'>Q. What is SEO?</h3>
          <p><strong>Ans. </strong>SEO stands for Search Engine Optimization, which helps improve your website's visibility on search engines like Google.</p>
        </div>
      </section>

      {/* How to Connect */}
      <section className="connect-section">
        <h2 className='new'>How to Connect with Us</h2>
        <p className='mrgn'>Ready to take your business to the next level? Contact us today for a free consultation.</p>
        <Link to='/contact' className="connect-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default BlogSection;
