import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './DropdownMenu.css';

const DropdownMenu = () => {

  // Function to scroll to the top of the page when "Home" is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  return (
    <div className='mainHead'>
      <header>
        <Link to="/" className='logo'>Digi<span className='halfName'>Appify</span></Link>
        
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">Menu</label>

        <nav className='navbar'>
          <ul>
            {/* Call scrollToTop on Home click */}
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href='#'>Services +</a>
              <ul>
                <li><a href='/mobileApp-development'>Mobile App Development +</a>
                  <ul>
                    <li><a href='#'>Android App Development</a></li>
                    <li><a href='#'>iOS App Development</a></li>
                    <li><a href='#'>iPad App Development</a></li>
                    <li><a href='#'>Apple Watch App Development</a></li>
                  </ul>
                </li>
                <li><a href='/web-development'>Web Development +</a>
                  <ul>
                    <li><a href='#'>WordPress Website Development</a></li>
                    <li><a href='#'>Dynamic Website Development</a></li>
                    <li><a href='#'>Custom Web App Development</a></li>
                    <li><a href='#'>E-commerce Web App Development</a></li>
                  </ul>
                </li>
                <li><a href='/digital-marketing'>Digital Marketing</a>
                  <ul>
                    <li><a href='#'>SEO Services</a></li>
                    <li><a href='#'>Email Marketing</a></li>
                    <li><a href='#'>PPC Services</a></li>
                    <li><a href='#'>Social Media Marketing</a></li>
                    <li><a href='#'>Affiliate Marketing</a></li>
                    <li><a href='#'>E-commerce Marketing</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href='#'>Resourcies +</a>
              <ul>
                <li><a href='#'>Blog</a></li>
              </ul>
            </li>
            <li><a href='#'>Industries +</a>
              <ul>
                <li><a href='#'>Fintech</a></li>
                <li><a href='#'>Education</a></li>
                <li><a href='#'>Healthcare</a></li>
                <li><a href='#'>Media & Entertainment</a></li>
              </ul>
            </li>
            <li><Link className='contactOpt' to="/contact">Contact Us</Link></li> {/* Link to Contact Us page */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default DropdownMenu;
