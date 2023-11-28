import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    red: false,
    pink: false,
    purple: false,
    blue: false,
    aqua: false,
    green: false,
    orange: false,
    grey: false,
    yellow: false,
    brown: false,
    multi: false,
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
        .post('http://45.55.45.170:8081/color_picker', { selections })
        
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/brief'; // Navigate to '/step3' if no selection is made
    }

    // Custom logic to route based on selections
    if (selections.red) {
      window.location.href = '/brief'; // Navigate to the logo page
    } else if (selections.pink) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.purple) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.blue) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.aqua) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.green) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.orange) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.grey) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.yellow) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.brown) {
      window.location.href = '/brief'; // Navigate to the web page
    } else if (selections.multi) {
      window.location.href = '/brief'; // Navigate to the web page
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Every Design Needs Some Colors</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="red"
              checked={selections.ios}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/red.jpg`)} className="logo-btn-img" />
            Red
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="pink"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/pink1.jpg`)} className="logo-btn-img" />
            Pink
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="purple"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/purple1.jpg`)} className="logo-btn-img" />
            Purple
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="blue"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/blue1.jpg`)} className="logo-btn-img" />
            Blue
          </label>
          
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="aqua"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/aqua1.jpg`)} className="logo-btn-img" />
            Aqua
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="green"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/green1.jpg`)} className="logo-btn-img" />
            Green
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="orange"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/orange1.jpg`)} className="logo-btn-img" />
            Orange
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="grey"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/grey1.jpg`)} className="logo-btn-img" />
            Grey
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="yellow"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/yellow1.jpg`)} className="logo-btn-img" />
            Yellow
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="brown"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/brown1.jpg`)} className="logo-btn-img" />
            Brown
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="multi"
              checked={selections.android}
              onChange={handleCheckboxChange}
            />
            <img src={require(`./images/multi1.jpg`)} className="logo-btn-img" />
            Multi
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
