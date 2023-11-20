import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    html: false,
    cms: false,
    ecom: false,
    portal: false,
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
        .post('http://localhost:8081/website_type', { selections })
        
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/step4'; // Navigate to '/step3' if no selection is made
    }

    // Custom logic to route based on selections
    if (selections.html) {
      window.location.href = '/step4'; // Navigate to the logo page
    } else if (selections.cms) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.ecom) {
      window.location.href = '/step4'; // Navigate to the video page
    } else if (selections.portal) {
      window.location.href = '/step4'; // Navigate to the mobile page
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Which Website Type Are You Looking For?</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="html"
              checked={selections.logo}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/ws1.jpg')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            HTML
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="cms"
              checked={selections.web}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/ws2.jpg')}
              className="logo-btn-img"
              alt="Web Design"
            />
            CMS
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="ecom"
              checked={selections.video}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/ws3.jpg')}
              className="logo-btn-img"
              alt="Video Production"
            />
            <br></br>
            E-Commerce
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="portal"
              checked={selections.mobile}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/ws4.jpg')}
              className="logo-btn-img"
              alt="Mobile App Development"
            />
            Portal
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
