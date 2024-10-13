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

      {/* Benefits Section */}
      <section className="seo-benefits">
        <h2>Benefits of Our SEO Services</h2>
        <div className="seo-benefit-cards">
          <div className="seo-benefit-card">
            <h3>Increased Traffic</h3>
            <p>Our SEO strategies lead to higher organic search traffic and visibility.</p>
          </div>
          <div className="seo-benefit-card">
            <h3>Improved User Experience</h3>
            <p>We optimize your website structure and content for better user engagement.</p>
          </div>
          <div className="seo-benefit-card">
            <h3>Better ROI</h3>
            <p>SEO provides one of the best returns on investment compared to other marketing strategies.</p>
          </div>
          <div className="seo-benefit-card">
            <h3>Brand Credibility</h3>
            <p>Higher rankings increase your brand’s credibility and trustworthiness.</p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="seo-services-offered">
        <h2>Our SEO Services</h2>
        <ul className="seo-services-list">
          <li className="list_serv">
            <strong>Keyword Research and Analysis</strong>
            <p>Identifying relevant keywords that your target audience is searching for.</p>
          </li>
          <li className="list_serv">
            <strong>On-Page Optimization</strong>
            <p>Optimizing individual web pages to rank higher and earn more relevant traffic.</p>
          </li>
          <li className="list_serv">
            <strong>Off-Page SEO (Link Building)</strong>
            <p>Building high-quality backlinks to improve your site's authority and ranking.</p>
          </li>
          <li className="list_serv">
            <strong>Technical SEO Audits</strong>
            <p>Assessing your website's technical aspects to improve its performance and indexability.</p>
          </li>
          <li className="list_serv">
            <strong>Content Strategy Development</strong>
            <p>Creating a plan to produce valuable and relevant content to attract your audience.</p>
          </li>
          <li className="list_serv">
            <strong>Local SEO Services</strong>
            <p>Optimizing your online presence to attract more business from relevant local searches.</p>
          </li>
          <li className="list_serv">
            <strong className="seoHead">SEO Reporting and Analytics</strong>
            <p>Providing insights and analysis to track your SEO performance and adjust strategies.</p>
          </li>
        </ul>
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
