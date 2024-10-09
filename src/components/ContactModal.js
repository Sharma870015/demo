// ContactModal.js
import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
