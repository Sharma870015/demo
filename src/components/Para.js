import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link
import './Para.css';

const Para = () => {
  return (
    <div className="section">
      {/* First Heading and Description */}
      <div className="box">
        <h2 className="head_ing">
          Welcome to DigiAppify: Your Digital Partner
        </h2>
        <p className="desc_">
          At DigiAppify, we specialize in providing cutting-edge software
          development services tailored to meet your business needs. Whether
          you're looking for front-end or back-end web development, custom
          software solutions, or enhancing your online presence with SEO services,
          our team of experts is here to help. From concept to deployment, we
          focus on delivering innovative, scalable, and efficient digital products
          that drive success. Let us bring your ideas to life with our
          comprehensive tech solutions!
        </p>
      </div>

      {/* Second Heading and Description */}
      <div className="bordered-box">
        <h2 className="head_ing">
          Our Expertise
        </h2>
        <p className="desc_">
          At DigiAppify, we offer a wide range of services designed to meet the diverse needs of our clients. From mobile app development to digital marketing strategies, we provide comprehensive solutions to take your business to the next level.
        </p>

        {/* Service Cards with Titles and Descriptions */}
        <div className="cards_container">
          <div className="card">
            <h3 className="card_title">Web Development</h3>
            <p className="card_desc">Building responsive, user-friendly websites tailored to your business needs.</p>
            <Link to="/web-development" className="arrow_button"> {/* Use Link to route */}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          <div className="card">
            <h3 className="card_title">Mobile Development</h3>
            <p className="card_desc">Creating innovative mobile applications for Android and iOS platforms.</p>
            <Link to="/mobileApp-development" className="arrow_button"> {/* Use Link to route */}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          <div className="card">
            <h3 className="card_title">Digital Marketing</h3>
            <p className="card_desc">Boosting your online presence with effective digital marketing strategies.</p>
            <Link to="/digital-marketing" className="arrow_button"> {/* Use Link to route */}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          <div className="card">
            <h3 className="card_title">SEO Optimization</h3>
            <p className="card_desc">Improving your website’s visibility and rankings on search engines.</p>
            <button className="arrow_button">
               <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Para;
