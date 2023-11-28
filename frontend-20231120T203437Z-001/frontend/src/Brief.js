
import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    emblem: false,
    illustrated: false,
    silhouette: false,
    abstract: false,
    fontbased: false,
    calligraphic: false,
    initials: false,
    mascot: false,
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
        .post('http://45.55.45.170:8081/brief', { selections })
        
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/step4'; // Navigate to '/step3' if no selection is made
    }

    // Custom logic to route based on selections
    if (selections.emblem) {
      window.location.href = '/step4'; // Navigate to the logo page
    } else if (selections.illustrated) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.silhouette) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.abstract) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.fontbased) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.calligraphic) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.initials) {
      window.location.href = '/step4'; // Navigate to the web page
    } else if (selections.mascot) {
      window.location.href = '/step4'; // Navigate to the web page
    } 
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Which Logo Type Are You Looking For?</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="emblem"
              checked={selections.ios}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b1.jpg`)} className="logo-btn-img" />
            Emblem
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="illustrated"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b2.jpg`)} className="logo-btn-img" />
            Illustrated
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="silhouette"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b3.jpg`)} className="logo-btn-img" />
            Silhouette
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="abstract"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b4.jpg`)} className="logo-btn-img" />
            Abstract
          </label>
          
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="fontbased"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b5.jpg`)} className="logo-btn-img" />
            Font Based
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="calligraphic"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b6.jpg`)} className="logo-btn-img" />
            Calligraphic
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="initials"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b7.jpg`)} className="logo-btn-img" />
            Initials
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="mascot"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/b8.jpg`)} className="logo-btn-img" />
            Mascot
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
