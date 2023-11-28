import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    ios: false,
    android: false,
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
        .post('http://45.55.45.170:8081/mobile_application', { selections })
        
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/step4'; // Navigate to '/step3' if no selection is made
    }

    // Custom logic to route based on selections
    if (selections.ios) {
      window.location.href = '/step4'; // Navigate to the logo page
    } else if (selections.android) {
      window.location.href = '/step4'; // Navigate to the web page
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Which Platform You Want The App For?</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="ios"
              checked={selections.ios}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/mp1.gif`)} className="logo-btn-img" />
            iOS
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="android"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/mp2.gif`)} className="logo-btn-img" />
            Android
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
