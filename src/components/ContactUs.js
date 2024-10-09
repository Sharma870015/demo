import React, { useEffect } from "react";
import './ContactUs.css'; // Separate CSS file for styling
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Importing icons

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-us-container">
      {/* First Section: Background Image with Heading */}
      <div className="ContactUsImg">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Reach out to us today!</p>
        </div>
      </div>

      {/* Second Section: Contact Information with Icons */}
      <div className="contact-info-section">
        <div className="contact-info">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Call Us</h3>
            <p><a href="#">+91 8287215545</a></p>
          </div>
        </div>

        <div className="contact-info">
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h3>WhatsApp Us</h3>
            <p><a href="#">+91 8700156237</a></p>
          </div>
        </div>

        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email Us</h3>
            <p><a href="#">info@digiappify.com</a></p>
          </div>
        </div>
      </div>

      {/* New Section: Additional Heading and Text */}
      <div className="contact-middle-section">
        <h2>We'd Love to Hear From You!</h2>
        <p>Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your thoughts are important to us!</p>
      </div>

      {/* Third Section: Contact Form */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
