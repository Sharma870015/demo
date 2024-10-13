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
            <li><a href='/Services'>Services +</a>
              <ul>
                <li><a href='/mobileApp-development'>Mobile App Development +</a>
                  <ul>
                    <li><a href='/android'>Android App Development</a></li>
                    <li><a href='/ios-development'>iOS App Development</a></li>
                    <li><Link to="/iPad-development">iPad App Development</Link></li>
                    <li><a href='/AppleWatch-App'>Apple Watch App Development</a></li>
                  </ul>
                </li>
                <li><a href='/web-development'>Web Development +</a>
                  <ul>
                    <li><a href='/wordpress-development'>WordPress Website Development</a></li>
                    <li><a href='/Dynamic_WebDev'>Dynamic Website Development</a></li>
                    <li><a href='/custom-webdev'>Custom Web App Development</a></li>
                    <li><a href='/E-commerce_WebApp'>E-commerce Web App Development</a></li>
                  </ul>
                </li>
                <li><a href='/digital-marketing'>Digital Marketing</a>
                  <ul>
                    <li><a href='/SEO-Services'>SEO Services</a></li>
                    <li><a href='/EmailMarketingService'>Email Marketing</a></li>
                    <li><a href='/PPC-Services'>PPC Services</a></li>
                    <li><a href='/socialMedia-Marketing'>Social Media Marketing</a></li>
                    <li><a href='/Affiliate-marketing'>Affiliate Marketing</a></li>
                    <li><a href='/Ecommerce-marketing'>E-commerce Marketing</a></li>
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
            <li><Link className='contactO' to="/contact">Contact Us</Link></li> {/* Link to Contact Us page */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default DropdownMenu;
