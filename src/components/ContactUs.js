import React, { useState, useEffect } from "react";
import './ContactUs.css'; // Separate CSS file for styling
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Importing icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const whatsappNumber = "+918700156237"; // Your WhatsApp number (with country code)

    // Create a WhatsApp message URL
    const whatsappMessage = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20${encodeURIComponent(name)}.%20My%20email%20is%20${encodeURIComponent(email)}.%20Here%20is%20my%20message:%20${encodeURIComponent(message)}`;

    // Redirect to the WhatsApp URL
    window.location.href = whatsappMessage;
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
