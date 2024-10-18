import React from 'react';
import './AndroidAppDevelopment.css';
import { Link } from 'react-router-dom';
import android from './Android2.jpg'

const AndroidAppDevelopment = () => {
  return (
    <div className="android-app">
      {/* Top section with image */}
      <div className="first-section">
        <img
          src={android} // Replace with your image URL
          alt="Android App Development"
          className="first-image"
        />
      </div>

      {/* Main content */}
      <div className="content">
        <h1 className='Android_head'>Android App Development</h1>
        <p className='just_descr'>
          We offer professional Android app development services, tailored to meet your business needs. Our team of expert developers ensures that your app is scalable, user-friendly, and equipped with the latest technology.
        </p>
         {/* Card Section for Android Services */}
         <section className="services-card-section">
          <h2 className="section-title">Android Development Services</h2>
          <div className="cards-container">
            <div className="card">
              <h3 className="card-title">Custom Android App Development</h3>
              <p className="card-desc">
                Get tailored Android app solutions specifically designed to meet your business requirements, ensuring both quality and scalability.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Android Game Development</h3>
              <p className="card-desc">
                We create engaging, performance-optimized Android games, from casual to complex, using advanced tools and frameworks.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">App Redesign & Optimization</h3>
              <p className="card-desc">
                Upgrade your existing app with a modern design, improved performance, and optimized user experience.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">App Testing & Quality Assurance</h3>
              <p className="card-desc">
                Ensure your Android app is bug-free, secure, and performs smoothly across various devices with our QA services.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Wearables, Tablets, and TV Apps</h3>
              <p className="card-desc">
                We develop Android apps compatible with wearables, tablets, and Android TVs, expanding your reach across devices.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise section */}
        <section className="exper-section">
          <h2 className='why_us'>Why Choose Us?</h2>
          <ul className='choose_detail'>
            <li>Experienced Android developers with years of expertise.</li>
            <li>Custom app solutions for all types of industries.</li>
            <li>High-quality UI/UX design ensuring optimal user experience.</li>
            <li>Use of the latest Android technologies such as Kotlin, Jetpack, and more.</li>
            <li>Testing and optimization for performance on all devices.</li>
            <li>Post-launch support and maintenance services.</li>
          </ul>
        </section>

        {/* Services we provide */}
        <section className="service-section">
          <h2 className='provide_serv'>Services We Provide</h2>
          <p className='serv_descr'>We cover a wide range of Android app development services:</p>
          <ul className='serv_data'>
            <li>Custom Android app development</li>
            <li>Android game development</li>
            <li>App redesign and optimization</li>
            <li>App testing and quality assurance</li>
            <li>Integration of advanced features (e.g., AI, AR/VR)</li>
            <li>Support for Android Wearables, Tablets, and TVs</li>
            <li>App deployment and launch on Google Play Store</li>
          </ul>
        </section>
        

        {/* Contact and CTA */}
        <section className="section">
          <h2 className='Redirect'>Get Started with Your Android App Today!</h2>
          <p className='redir_descr'>
            Whether you're starting a new project or enhancing an existing app, our expert team is here to help. Contact us to learn more about how we can bring your Android app idea to life.
          </p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </section>
      </div>
    </div>
  );
};

export default AndroidAppDevelopment;
