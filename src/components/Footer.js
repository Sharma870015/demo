import React from 'react';
import './Footer.css';
import logo from './DigiLogo.png'
import { Link } from 'react-router-dom';

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
              <Link className='adjs' to='/wordpress-development'><i className="fas fa-angle-right"></i> WordPress Website</Link><br></br>
              <Link className='adjs' to='/custom-webdev'><i className="fas fa-angle-right"></i> Custom Web App</Link><br></br>
              <Link className='adjs' to='/Dynamic_WebDev'><i className="fas fa-angle-right"></i> Dynamic Website</Link><br></br>
              <Link className='adjs' to='/E-commerce_WebApp'><i className="fas fa-angle-right"></i> E-Commerce Website</Link><br></br>
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
              <Link className='adjs' to='/SEO-Services'><i className="fas fa-angle-right"></i> SEO</Link><br></br>
              <Link className='adjs' to='/EmailMarketingService'><i className="fas fa-angle-right"></i> Email Marketing</Link><br></br>
              <Link className='adjs' to='/Affiliate-marketing'><i className="fas fa-angle-right"></i> Affiliate Marketing</Link><br></br>
              <Link className='adjs' to='/PPC-Services'><i className="fas fa-angle-right"></i> PPC</Link><br></br>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <Link className='adjs' to='/about'><i className="fas fa-angle-right"></i> About</Link><br></br>
              <Link className='adjs' to='#'><i className="fas fa-angle-right"></i> Privacy</Link><br></br>
              <Link className='adjs' to='/web-development'><i className="fas fa-angle-right"></i> Web Development</Link><br></br>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          {/* Address and Contact Info */}
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
