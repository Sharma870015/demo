import React from "react";
import "./SEOService.css"; // Import the CSS for styling
import SEOImage from "./SEOServices.jpg"; // Replace with your background image URL
import { Link } from "react-router-dom";

const SEOService = () => {
  return (
    <div className="seo-container">
      {/* Hero Section */}
      <div className="seo-hero">
        <img src={SEOImage} alt="SEO Services" className="seo-hero-image" />
        <div className="seo-hero-text">
          <h1>SEO Services to Boost Your Online Presence</h1>
          <p>
            Elevate your brand with our comprehensive SEO strategies tailored to your business goals.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="seo-overview">
        <h2>What is SEO?</h2>
        <p>
          Search Engine Optimization (SEO) is the process of enhancing your online presence to rank higher in search engine results pages (SERPs). Our team specializes in a wide array of SEO services designed to drive organic traffic, increase visibility, and improve your website’s performance.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="seo-services-section">
        <h2>Our Services</h2>
        <div className="seo-services-cards">
          <div className="seo-service-card">
            <h3>Keyword Research</h3>
            <p>Identifying relevant keywords that your target audience is searching for.</p>
          </div>
          <div className="seo-service-card">
            <h3>On-Page SEO</h3>
            <p>Optimizing individual web pages to rank higher and earn more relevant traffic.</p>
          </div>
          <div className="seo-service-card">
            <h3>Off-Page SEO</h3>
            <p>Building high-quality backlinks to improve your site's authority and ranking.</p>
          </div>
          <div className="seo-service-card">
            <h3>Technical SEO</h3>
            <p>Assessing your website's technical aspects to improve its performance and indexability.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="seo-why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul className="why-choose-list">
          <li>Proven Results: We have a track record of delivering measurable results that elevate your business.</li>
          <li>Customized Strategies: Our team tailors SEO strategies to fit your unique business needs and goals.</li>
          <li>Expert Team: Our SEO specialists are experienced professionals with a passion for digital marketing.</li>
          <li>Transparent Reporting: We provide regular updates and detailed reports so you can see our progress.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="seo-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <strong>What is SEO?</strong>
            <p>SEO stands for Search Engine Optimization. It is the practice of optimizing your website to rank higher in search engine results.</p>
          </div>
          <div className="faq-item">
            <strong>How long does it take to see results from SEO?</strong>
            <p>SEO is a long-term strategy. Typically, you can start seeing results within 3-6 months, but it can take longer for competitive keywords.</p>
          </div>
          <div className="faq-item">
            <strong>Do I need to pay for SEO?</strong>
            <p>While there are costs associated with hiring SEO services, there are also many free techniques you can implement yourself.</p>
          </div>
          <div className="faq-item">
            <strong>Can I do SEO myself?</strong>
            <p>Yes! Many small business owners do their own SEO, but it can be time-consuming and may require specialized knowledge.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="seo-contact">
        <h3>Ready to Enhance Your Online Visibility?</h3>
        <p className="alignment">Contact us today for a free SEO consultation!</p>
        <Link to='/contact' className="seo-contact-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default SEOService;
