import React from "react";
import "./IOSAppDevelopment.css";
import AppleIcon from "./AppleIcon-removebg-preview.png";
import IOS from './IOS App Development.jpg';

const IOSAppDevelopment = () => {
  return (
    <div className="ios-app">
      {/* Top Section with Banner */}
      <div className="top-section">
        <img 
          src={IOS}
          alt="iOS App Development"
          className="ios-banner"
        />
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="icon-section">
          <img src={AppleIcon} alt="Apple Icon" className="apple-icon" />
        </div>
        <h1 className="ios-heading">iOS App Development</h1>
        <p className="ios-description">
          We specialize in developing world-class iOS apps that elevate your business. Our team of experts crafts seamless and innovative solutions tailored to your needs, ensuring a smooth user experience across all iOS devices. With a focus on user-centric design and robust functionality, we bring your app idea to life.
        </p>

        {/* Benefits of iOS App Development */}
        <div className="benefits-section">
          <h2 className="section-heading">Benefits of iOS App Development</h2>
          <div className="benefits-cards">
            <div className="card">
              <h3>Security</h3>
              <p>iOS apps are known for their strong security features, providing a safe user experience. With Apple's commitment to privacy, users can trust your app with their data.</p>
            </div>
            <div className="card">
              <h3>Performance</h3>
              <p>Our iOS apps are optimized for fast performance and a smooth user experience, ensuring that users remain engaged with your application.</p>
            </div>
            <div className="card">
              <h3>Global Reach</h3>
              <p>Deploy apps globally via the App Store and reach millions of users. iOS users tend to spend more on apps, making it a lucrative market.</p>
            </div>
            <div className="card">
              <h3>Seamless Integration</h3>
              <p>iOS apps integrate seamlessly with Apple devices and services, providing a consistent and enhanced user experience.</p>
            </div>
            <div className="card">
              <h3>Brand Loyalty</h3>
              <p>iOS users are generally more loyal to brands, leading to higher retention rates. An iOS app can enhance your brand's reputation.</p>
            </div>
            <div className="card">
              <h3>Innovation</h3>
              <p>Stay ahead of the curve with the latest iOS features and updates, ensuring your app remains modern and competitive.</p>
            </div>
          </div>
        </div>

        {/* Development Procedure */}
        <div className="procedure-section">
          <h2 className="section-heading">Our iOS App Development Process</h2>
          <div className="procedure-cards">
            {/* Procedure Cards Code Here (remains unchanged) */}
            {/* ... */}
          </div>
        </div>

        {/* Why Choose Us? Section */}
        <div className="why-choose-us-section">
          <h2 className="section-heading">Why Choose Us?</h2>
          <p className="why-choose-us-description">
            Our dedicated team of developers, designers, and project managers work collaboratively to bring your vision to life. We prioritize quality, efficiency, and communication throughout the development process. With a proven track record of successful iOS app launches, we are your trusted partner in navigating the ever-evolving mobile landscape.
          </p>
          <ul className="why-choose-us-list">
            <li>Experienced developers with expertise in iOS technologies.</li>
            <li>User-focused design to enhance user experience.</li>
            <li>Comprehensive testing and quality assurance.</li>
            <li>Ongoing support and maintenance post-launch.</li>
            <li>Timely delivery of projects without compromising quality.</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-heading">Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item">
            <h3 className="faq-question">What is the average timeline for iOS app development?</h3>
            <p className="faq-answer">The timeline can vary based on the app's complexity, but it typically takes 3 to 6 months from concept to launch.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Do you provide post-launch support?</h3>
            <p className="faq-answer">Yes, we offer post-launch support for updates, bug fixes, and improvements based on user feedback.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Can I update the app after it’s launched?</h3>
            <p className="faq-answer">Absolutely! We can help you implement updates and new features as your business needs evolve.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">What platforms do you develop for?</h3>
            <p className="faq-answer">We specialize in iOS development but can also provide cross-platform solutions if needed.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default IOSAppDevelopment;
