import React from 'react';
import './Footer.css';
import logo from './DigiLogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Web Development Section */}
          <div className="footer-column">
            <h4>Web Development</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> WordPress Website</li>
              <li><i className="fas fa-angle-right"></i> Custom Web App</li>
              <li><i className="fas fa-angle-right"></i> Dynamic Website</li>
              <li><i className="fas fa-angle-right"></i> E-Commerce Website</li>
            </ul>
          </div>

          {/* Technologies Section */}
          <div className="footer-column">
            <h4>Technologies</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> HTML & CSS</li>
              <li><i className="fas fa-angle-right"></i> JavaScript</li>
              <li><i className="fas fa-angle-right"></i> React</li>
              <li><i className="fas fa-angle-right"></i> Angular</li>
            </ul>
          </div>

          {/* Digital Marketing Section */}
          <div className="footer-column">
            <h4>Digital Marketing</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> SEO</li>
              <li><i className="fas fa-angle-right"></i> Email Marketing</li>
              <li><i className="fas fa-angle-right"></i> Affiliate Marketing</li>
              <li><i className="fas fa-angle-right"></i> PPC</li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> About</li>
              <li><i className="fas fa-angle-right"></i> Privacy</li>
              <li><i className="fas fa-angle-right"></i> Teams</li>
              <li><i className="fas fa-angle-right"></i> Portfolio</li>
              <li><i className="fas fa-angle-right"></i> E-Commerce</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          {/* Address and Contact Info */}
          <p className='address'><strong>Address:</strong> N/A </p>
          <p className='telNum'><strong>Tel:</strong> +91-8700156237</p>
          <p className='mail'><strong>Email:</strong> info@DigiAppify.com</p>

          {/* Social Media Links */}
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
