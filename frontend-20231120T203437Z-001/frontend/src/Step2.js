import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    logo: false,
    web: false,
    video: false,
    mobile: false,
  });

  const isAnyCheckboxSelected = () => {
    return Object.values(selections).some((value) => value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelections({ ...selections, [name]: checked });
  };

  const handleContinue = () => {
    if (isAnyCheckboxSelected()) {
      axios
        .post('http://localhost:8081/step2', { selections })
        
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/step3'; // Navigate to '/step3' if no selection is made
    }

    // Custom logic to route based on selections
    if (selections.logo) {
      window.location.href = '/step2-logo'; // Navigate to the logo page
    } else if (selections.web) {
      window.location.href = '/step2-web-design'; // Navigate to the web page
    } else if (selections.video) {
      window.location.href = '/step2-video-services'; // Navigate to the video page
    } else if (selections.mobile) {
      window.location.href = '/step2-mobile-app'; // Navigate to the mobile page
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Fill In Details To Get It Moving</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="logo"
              checked={selections.logo}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/a1.jpg')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            Logo Design
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="web"
              checked={selections.web}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/a2.jpg')}
              className="logo-btn-img"
              alt="Web Design"
            />
            Web Design
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="video"
              checked={selections.video}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/a3.gif')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Video Animation
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="mobile"
              checked={selections.mobile}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/a4.jpg')}
              className="logo-btn-img"
              alt="Mobile App Development"
            />
            Mobile Application
          </label>
        </div>
      </div>
      <div className="align-div">
        <br></br>
        <br></br>
        <hr></hr>
        <button
          className="question-btn"
          onClick={handleContinue}
        >
          {isAnyCheckboxSelected() ? 'CONTINUE' : 'SKIP'}
        </button>
      </div>
    </div>
  );
}

export default CheckboxPage;
