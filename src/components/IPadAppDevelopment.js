import React from 'react';
import './IPadAppDevelopment.css';
import { Link } from 'react-router-dom';
import ipad from './iPad App Development 1980 X 850.jpg'; // Replace with your iPad image

const IPadAppDevelopment = () => {
  return (
    <div className="ipad-app">
      {/* Top section with image */}
      <div className="first-section">
        <img
          src={ipad} // Replace with your image URL
          alt="iPad App Development"
          className="first-image"
        />
      </div>

      {/* Main content */}
      <div className="content">
        <h1 className='IPad_head'>iPad App Development</h1>
        <p className='just_descr'>
          We specialize in delivering cutting-edge iPad app development services. Our team creates apps that leverage the full potential of the iPad, offering innovative and user-friendly solutions.
        </p>

        {/* Card Section for iPad Services */}
        <section className="services-card-section">
          <h2 className="section-title">iPad Development Services</h2>
          <div className="cards-container">
            <div className="card">
              <h3 className="card-title">Custom iPad App Development</h3>
              <p className="card-desc">
                Tailored solutions for your business needs, ensuring seamless performance across all iPad devices.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">iPad Game Development</h3>
              <p className="card-desc">
                Create highly engaging and performance-optimized games for the iPad using modern tools and frameworks.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">App Redesign & Optimization</h3>
              <p className="card-desc">
                Upgrade your app with an enhanced design and improved user experience specifically for the iPad.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">App Testing & Quality Assurance</h3>
              <p className="card-desc">
                Ensure your iPad app is free of bugs, secure, and performs well across various iPad versions and sizes.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Enterprise iPad Solutions</h3>
              <p className="card-desc">
                Build enterprise-grade applications to enhance productivity and streamline business operations on iPads.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise section */}
        <section className="exper-section">
          <h2 className='why_us'>Why Choose Us?</h2>
          <ul className='choose_detail'>
            <li>Experienced iPad developers with industry knowledge.</li>
            <li>Custom app solutions tailored for your business.</li>
            <li>High-quality UI/UX design that maximizes the iPad experience.</li>
            <li>Use of the latest iOS frameworks like Swift, Xcode, and more.</li>
            <li>Rigorous testing to ensure compatibility across all iPad versions.</li>
            <li>Post-launch support and updates to keep your app up-to-date.</li>
          </ul>
        </section>
        {/* Contact and CTA */}
        <section className="section">
          <h2 className='Redirect'>Start Building Your iPad App Today!</h2>
          <p className='redir_descr'>
            Contact us to discuss your iPad app development needs. We're here to turn your ideas into reality with our expert iPad development services.
          </p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </section>
      </div>
    </div>
  );
};

export default IPadAppDevelopment;
