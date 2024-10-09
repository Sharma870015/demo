// CallIcon.js
import React, { useEffect, useState } from 'react';
import './CallIcon.css';
import ContactModal from './ContactModal'; // Import the modal
import call from './Call-removebg-preview.png'

const CallIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 200); // Adjust this value as needed
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <div className="call-icon" onClick={toggleModal}>
          <img src={call} alt="Call Us" />
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default CallIcon;
