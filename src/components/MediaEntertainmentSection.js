import React, { useEffect } from "react";
import './MediaEntertainmentSection.css';
import MediaImage from './Media.png'; // Sample Image
import { Link } from 'react-router-dom';

const MediaEntertainmentSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="media-entertainment-section">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={MediaImage} alt="Media & Entertainment" className="hero-image" />
        <div className="overlay-text">
          <h1>Media & Entertainment Solutions</h1>
          <p>Innovative solutions to engage audiences and enhance content experiences.</p>
        </div>
      </div>

      {/* Heading and Description */}
      <section className="content-section">
        <h2 className='heading'>Future of Media & Entertainment</h2>
        <p>
          Dive into a world of innovative media and entertainment solutions designed to captivate audiences
          and streamline content distribution. From video streaming to interactive experiences, we provide
          the tools to revolutionize your media offerings and engage your audience like never before.
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <h3 className='service-heading'>Media & Entertainment Services</h3>
        <div className="service-cards">
          <div className="card">
            <h3 className='clr'>Video Streaming</h3>
            <p>Deliver high-quality, scalable video streaming services to global audiences.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Content Distribution</h3>
            <p>Streamline and automate your content delivery with our state-of-the-art systems.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Interactive Experiences</h3>
            <p>Engage your audience with immersive and interactive content experiences.</p>
          </div>
          <div className="card">
            <h3 className='clr'>Digital Advertising</h3>
            <p>Maximize your reach with targeted digital advertising across platforms.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose us</h2>
        <ul className="reasons-list">
          <li className='look'>📺 Advanced technologies tailored for the media & entertainment industry.</li>
          <li className='look'>💡 Innovative solutions to enhance audience engagement.</li>
          <li className='look'>🎥 End-to-end support for content creation, management, and distribution.</li>
          <li className='look'>📈 Proven track record of increasing viewer retention and satisfaction.</li>
          <li className='look'>⚡ 24/7 support to ensure your content is always available and running smoothly.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Q. What kind of content can I stream using your platform?</h3>
          <p><strong>Ans. </strong>Our platform supports all types of content, including live video, on-demand content, and more.</p>
        </div>
        <div className="faq-item">
          <h3>Q. How do you ensure high-quality video streaming?</h3>
          <p><strong>Ans. </strong>We use advanced encoding and adaptive bitrate streaming to ensure high-quality video across all devices.</p>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="connect-section">
        <h2 className='btm'>Connect with Us</h2>
        <p className='descr'>Want to learn more about our media & entertainment solutions? Contact us today!</p>
        <Link to='/contact' className="connect-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default MediaEntertainmentSection;
