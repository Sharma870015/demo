import React, { useEffect, useState } from 'react';
import './CallIcon.css';
import call from './chatIcon.png';

const CallIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 200); // Adjust this value as needed
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = '918700156237'; // Replace with your WhatsApp number (e.g., '919876543210' for India)
    const message = encodeURIComponent('Hi, I found your website and I would like to know more about your services. Can we chat?'); // Replace with your message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab/window
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="call-icon" onClick={redirectToWhatsApp}>
          <img src={call} alt="Call Us" />
        </div>
      )}
    </div>
  );
};

export default CallIcon;
