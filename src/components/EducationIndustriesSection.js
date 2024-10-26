import React, { useEffect } from "react";
import './EducationIndustriesSection.css';
import EducationImage from './Education.png'; // Sample Image
import { Link } from 'react-router-dom';

const EducationIndustriesSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="education-section">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={EducationImage} alt="Education" className="hero-image" />
        <div className="overlay-text">
          <h1>Education Innovations</h1>
          <p>Empower learning through technology and innovative educational solutions.</p>
        </div>
      </div>

      {/* Heading and Description */}
      <section className="content-section">
        <h2 className='heading'>Welcome to Education Innovation</h2>
        <p>
          Explore how our educational solutions are transforming learning experiences. From virtual classrooms to AI-powered tutoring systems, we provide the tools to empower students and educators in the digital age.
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <h3 className='service-heading'>Our Educational Services</h3>
        <div className="service-cards">
          <div className="card">
            <h3 className='clr'>Virtual Classrooms</h3>
            <p>Engage students in interactive, real-time virtual learning environments.</p>
          </div>
          <div className="card">
            <h3 className='clr'>AI Tutoring</h3>
            <p>Personalized tutoring services powered by artificial intelligence.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Digital Learning Platforms</h3>
            <p>Access comprehensive digital tools for collaborative learning and teaching.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Learning Management Systems</h3>
            <p>Manage curriculums, assessments, and track progress with ease.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose us</h2>
        <ul className="reasons-list">
          <li className='look'>📚Innovative technology tailored for modern education.</li>
          <li className='look'>🔒Safe and secure learning environments.</li>
          <li className='look'>💡Experienced educators and tech specialists.</li>
          <li className='look'>📈Proven success in educational outcomes.</li>
          <li className='look'>💬24/7 support for both students and educators.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q. What is a Virtual Classroom?</h3>
          <p><strong>Ans. </strong>Virtual classrooms are online learning environments that allow real-time interaction between teachers and students.</p>
        </div>
        <div className="faq-item">
          <h3>Q. How secure is your platform?</h3>
          <p><strong>Ans. </strong>Our educational platforms use advanced security protocols to ensure data privacy and safety for all users.</p>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="connect-section">
        <h2 className='btm'>Connect with Us</h2>
        <p className='descr'>Interested in our educational solutions? Contact us for a demo and consultation today!</p>
        <Link to='/contact' className="connect-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default EducationIndustriesSection;
