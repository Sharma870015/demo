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

        {/* Technologies Used */}
        <div className="technologies-section">
          <h2 className="section-heading">Technologies We Use</h2>
          <ul className="technologies-list">
            <li className="Name-serv"><a className="a_tag" href="a_tag">Swift</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">Objective-C</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">Xcode</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">iOS SDK</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">Apple Pay Integration</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">Core Data & CloudKit</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">Firebase for Backend Support</a></li>
            <li className="Name-serv"><a className="a_tag" href="a_tag">RESTful APIs for Data Integration</a></li>
          </ul>
        </div>

       {/* Development Procedure */}
<div className="procedure-section">
  <h2 className="section-heading">Our iOS App Development Process</h2>
  <div className="procedure-cards">
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">1</span>
          <h3>Requirement Gathering</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">We discuss your app idea and understand your business goals to outline the project scope.</p>
        </div>
      </div>
    </div>
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">2</span>
          <h3>UI/UX Design</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">Our design team creates wireframes and prototypes to visualize the user experience and interface.</p>
        </div>
      </div>
    </div>
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">3</span>
          <h3>Development</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">Our developers start coding your app using the latest technologies and best practices.</p>
        </div>
      </div>
    </div>
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">4</span>
          <h3>Testing & QA</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">Rigorous testing is conducted to identify and fix any bugs, ensuring a smooth launch.</p>
        </div>
      </div>
    </div>
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">5</span>
          <h3>Deployment to App Store</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">We handle the submission process to get your app live on the App Store.</p>
        </div>
      </div>
    </div>
    <div className="procedure-card">
      <div className="card-inner">
        <div className="card-front">
          <span className="step-number">6</span>
          <h3>Post-Launch Support</h3>
        </div>
        <div className="card-back">
          <p className="inc_pad">Our support team is available for updates, bug fixes, and improvements based on user feedback.</p>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Why Choose Us? Section */}
        <div className="why-choose-us-section">
          <h2 className="section-heading">Why Choose Us?</h2>
          <p className="why-choose-us-description">
            Our dedicated team of developers, designers, and project managers work collaboratively to bring your vision to life. We prioritize quality, efficiency, and communication throughout the development process. With a proven track record of successful iOS app launches, we are your trusted partner in navigating the ever-evolving mobile landscape.
          </p>
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
