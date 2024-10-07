import React from "react";
import './Para.css';

const Para = () => {
  return (
    <div className="section">
      {/* First Heading and Description */}
      <div className="box">
        <h2 className="head_ing">
          Welcome to DigiAppify: Your Partner in Digital Solutions
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
            <button className="arrow_button">→</button>
          </div>
          <div className="card">
            <h3 className="card_title">Mobile Development</h3>
            <p className="card_desc">Creating innovative mobile applications for Android and iOS platforms.</p>
            <button className="arrow_button">→</button>
          </div>
          <div className="card">
            <h3 className="card_title">Digital Marketing</h3>
            <p className="card_desc">Boosting your online presence with effective digital marketing strategies.</p>
            <button className="arrow_button">→</button>
          </div>
          <div className="card">
            <h3 className="card_title">SEO Optimization</h3>
            <p className="card_desc">Improving your website’s visibility and rankings on search engines.</p>
            <button className="arrow_button">→</button>
          </div>
          <div className="card">
            <h3 className="card_title">UI/UX Design</h3>
            <p className="card_desc">Crafting intuitive and engaging user experiences through design.</p>
            <button className="arrow_button">→</button>
          </div>
          <div className="card">
            <h3 className="card_title">Cloud Solutions</h3>
            <p className="card_desc">Providing scalable secure cloud-based services for your business.</p>
            <button className="arrow_button">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Para;
