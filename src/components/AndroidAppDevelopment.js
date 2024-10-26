import React, { useEffect } from "react";
import './AndroidAppDevelopment.css';
import { Link } from 'react-router-dom';
import android from './Android2.jpg'

const AndroidAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        We offer professional Android app development services, tailored to meet your business needs. Our team of expert developers leverages the latest technologies and industry best practices to create high-performance, scalable, and user-friendly Android applications. Whether you need a simple utility app or a complex enterprise solution, we have the expertise to bring your vision to life.
        </p>
        
        {/* Card Section for Android Services */}
        <section className="services-card-section">
          <h2 className="section-title">Our Services</h2>
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
          </div>
        </section>

        {/* Why choose us */}
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

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className='faq-title'>Frequently Asked Questions (FAQ)</h2>
          <div className="faq-item">
            <h3 className="faq-question">Q. How long does it take to develop an Android app?</h3>
            <p className="faq-answer"><strong>Ans.</strong>
              The development timeline depends on the complexity of the app. A simple app may take a few weeks, while a more complex one could take several months.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q. Do you provide post-launch support and maintenance?</h3>
            <p className="faq-answer"><strong>Ans.</strong>
              Yes, we offer post-launch support and maintenance services to ensure your app remains up-to-date and runs smoothly.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q. What technologies do you use for Android app development?</h3>
            <p className="faq-answer"><strong>Ans.</strong>
              We primarily use Kotlin and Java for Android app development, along with the latest Android frameworks such as Jetpack for efficient and modern development.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q. Can you help with app deployment to the Google Play Store?</h3>
            <p className="faq-answer"><strong>Ans.</strong>
              Absolutely! We handle the entire process of deploying your app to the Google Play Store, including setting up listings, icons, and descriptions.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q. Do you offer cross-platform development services?</h3>
            <p className="faq-answer"><strong>Ans.</strong>
              Yes, besides Android app development, we also offer cross-platform development using frameworks like Flutter and React Native to target both Android and iOS platforms.
            </p>
          </div>
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
