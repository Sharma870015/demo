import React, { useState, useEffect } from "react";
import "./About.css"; // Assuming you'll add the CSS separately for styling
import AboutUs from "./AboutUs.avif";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    const phoneNumber = "918700156237"; // Replace with your WhatsApp number in international format
    const whatsappMessage = `Hello, my name is ${name}. You can contact me at ${email}. ${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="about-container">
      {/* Header Section with Image and Overlay Text */}
      <div className="about-header">
        <img src={AboutUs} alt="DigiAppify" className="about-header-image" />
        <div className="about-header-overlay">
          <h1 className="about-header-title">About DigiAppify</h1>
          <p className="About_desc">
            DigiAppify is a digital solutions company focused on web and mobile
            app development, digital marketing, and cloud services, dedicated to
            helping businesses thrive online.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About us</h2>
        <p>
          Welcome to DigiAppify! We are a forward-thinking company that is
          committed to revolutionizing the digital landscape. Our mission is to
          provide innovative digital solutions to businesses of all sizes,
          helping them stay ahead of the competition by embracing technology and
          transformation.
        </p>
        <p>
          Founded with a passion for technology, we have grown into a team of
          experienced professionals who are dedicated to delivering the best in
          web development, mobile application development, and digital marketing
          strategies. Our commitment to excellence, combined with our drive to
          stay on the cutting edge, has made us a leader in the digital space.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="About_Servc">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>We build responsive, fast, and user-friendly websites...</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Our mobile apps are crafted to provide an intuitive experience...
            </p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>
              Boost your online presence with our data-driven digital marketing
              solutions...
            </p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>We offer scalable and secure cloud solutions...</p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <h2 className="Where_You">Where You Can Find Us</h2>
        <ul className="Platforms">
          <li className="Single">
            Website: <a className="link" href="https://digiappify.com">digiappify.com</a>
          </li>
          <li className="Single">
            LinkedIn:{" "}
            <a className="link" href="https://linkedin.com/company/digiappify">
              DigiAppify LinkedIn
            </a>
          </li>
          <li className="Single">
            Facebook:{" "}
            <a className="link" href="https://facebook.com/digiappify">DigiAppify Facebook</a>
          </li>
          <li className="Single">
            Instagram:{" "}
            <a className="link" href="https://instagram.com/digiappify">DigiAppify Instagram</a>
          </li>
          <li className="Single">
            Twitter:{" "}
            <a className="link" href="https://twitter.com/digiappify">DigiAppify Twitter</a>
          </li>
          <li className="Single">
            Email:{" "}
            <a className="link" href="mailto:info@digiappify.com">info@digiappify.com</a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} DigiAppify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
