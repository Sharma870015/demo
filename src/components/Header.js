import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="menu-bar">
      <h2 className="logoName">Digi<span className="halfName">Appify</span></h2>
      <ul>
        <li className="active">
          <a href="/Home">
            <i className="fa-solid fa-house"></i>Home
          </a>
        </li>
        <li>
          <a href="/About">
            <i className="fa-solid fa-user"></i>About us
          </a>
          <div className="sub-menu-1">
            <ul>
              <li>
                <a href="#Team">Mission</a>
              </li>
              <li>
                <a href="#Team">Vision</a>
              </li>
              <li>
                <a href="#Team">Team</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/Services">
            <i className="fa-solid fa-clone"></i>Services
          </a>
          <div className="sub-menu-1">
            <ul>
            <li className="hover-me">
                <a href="#Team">Web Development</a>
                <div className="sub-menu-2">
<ul>
              <li>
                <a href="#Team">Frontend</a>
              </li>
              <li>
                <a href="#Team">Backend</a>
              </li>
              <li>
                <a href="#Team">Full Stack Development</a>
              </li>
            </ul>
</div>
              </li>
              <li className="hover-me">
                <a href="#Team">Digital Marketing</a>
<div className="sub-menu-2">
<ul>
              <li>
                <a href="#Team">SEO</a>
              </li>
              <li>
                <a href="#Team">Social Media</a>
              </li>
              <li>
                <a href="#Team">Email Marketing</a>
              </li>
            </ul>
</div>
              </li>
              <li>
                <a href="#Team">Mobile App</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/Contact">
            <i className="fa-solid fa-phone"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
