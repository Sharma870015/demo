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

        {/* Technologies we use */}
        <section className="technologie-section">
          <h2 className='tech_uses'>Technologies We Use</h2>
          <p className='tech_use_descr'>We ensure that we use the latest and most powerful technologies for Android app development, including:</p>
          <ul className='tech_uses'>
            <li>Kotlin, Java</li>
            <li>Android Studio, IntelliJ</li>
            <li>Firebase, SQLite</li>
            <li>Google Play Services, Google Maps API</li>
            <li>ARCore, ML Kit for AI/ML integration</li>
            <li>Jetpack Compose for modern UI development</li>
            <li>REST APIs, GraphQL for backend integration</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="testimonial-section">
          <h2 className='testi_another'>What Our Clients Say</h2>
          <blockquote className='quote'>
            <p className='another_descr'>
              "The team delivered a fantastic Android app that met all our expectations. The design, functionality, and overall user experience were exceptional. We highly recommend their services!"
            </p>
            <footer className='Clie_name'>- Client A</footer>
          </blockquote>
          <blockquote className='another-quote'>
            <p className='Quote_descr'>
              "Expert developers with a keen eye for detail. The app was smooth, responsive, and perfect for our business. Looking forward to working with them again!"
            </p>
            <footer className='Clie_name'>- Client B</footer>
          </blockquote>
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
