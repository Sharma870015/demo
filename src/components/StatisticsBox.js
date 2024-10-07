import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faProjectDiagram, faUsers, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './StatisticsBox.css'; // Create a CSS file for styling
import logo from './Static.png'

const StatisticsBox = () => {
  return (
    <div className="statistics-container">
      <div className="illustration">
        {/* Replace the src with your illustration image URL */}
        <img src={logo} alt="Illustration" />
      </div>
      <div className="statistics-box">
        <h1 className="Achieve">Our Achievements</h1>
        <div className="statistics">
          <div className="stat">
            <FontAwesomeIcon icon={faUserFriends} style={{ color: '#007bff', fontSize: '2rem' }} />
            <h3>100+</h3>
            <p className="clientsCount">Clients</p>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faProjectDiagram} style={{ color: '#007bff', fontSize: '2rem' }} />
            <h3>50+</h3>
            <p className="ProjCount">Internal Projects</p>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faUsers} style={{ color: '#007bff', fontSize: '2rem' }} />
            <h3>10</h3>
            <p className="TeamMem">Teams</p>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faClipboardCheck} style={{ color: '#007bff', fontSize: '2rem' }} />
            <h3>200+</h3>
            <p className="ComplPro">Delivered Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBox;
