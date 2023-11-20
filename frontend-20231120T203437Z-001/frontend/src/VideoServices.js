import React, { useState } from 'react';
import Navigationbar from './Navigationbar';
import './App.css';
import { Link } from 'react-router-dom';

export default function VideoServices() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  const handleOptionClick = (option) => {
    const updatedOptions = [...selectedOptions];
    if (selectedOptions.includes(option)) {
      const index = updatedOptions.indexOf(option);
      updatedOptions.splice(index, 1); // Remove the option if it's already selected
    } else {
      updatedOptions.push(option); // Add the option if it's not selected
    }
    setSelectedOptions(updatedOptions);

    // Define the redirection logic based on the selected option
    switch (option) {
      
      default:
        setNextPage('/step4');
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="question2-div">
        <h2>Which Animation Type Are You Looking For?</h2>
        <br></br>
        <label className="logo-label">
          <input
            type="checkbox"
            className="logo-checkbox"
            checked={selectedOptions.includes('Logo Design')}
            onChange={() => handleOptionClick('Logo Design')}
          />
          <button
            className={`logo-btn ${
              selectedOptions.includes('Logo Design') ? 'shaded' : ''
            }`}
            onClick={() => handleOptionClick('Logo Design')}
          >
            <img src={require(`./images/vs1.gif`)} className="logo-btn-img" />
            Explainer
          </button>
        </label>
        <label className="logo-label">
          <input
            type="checkbox"
            className="logo-checkbox"
            checked={selectedOptions.includes('Web Design')}
            onChange={() => handleOptionClick('Web Design')}
          />
          <button
            className={`logo-btn ${
              selectedOptions.includes('Web Design') ? 'shaded' : ''
            }`}
            onClick={() => handleOptionClick('Web Design')}
          >
            <img src={require(`./images/vs2.gif`)} className="logo-btn-img" />
            2D Animation
          </button>
        </label>
        <label className="logo-label">
          <input
            type="checkbox"
            className="logo-checkbox"
            checked={selectedOptions.includes('Video Animation')}
            onChange={() => handleOptionClick('Video Animation')}
          />
          <button
            className={`logo-btn ${
              selectedOptions.includes('Video Animation') ? 'shaded' : ''
            }`}
            onClick={() => handleOptionClick('Video Animation')}
          >
            <img src={require(`./images/vs3.gif`)} className="logo-btn-img" />
            3D Animation
          </button>
        </label>
        <label className="logo-label">
          <input
            type="checkbox"
            className="logo-checkbox"
            checked={selectedOptions.includes('Mobile Application')}
            onChange={() => handleOptionClick('Mobile Application')}
          />
          <button
            className={`logo-btn ${
              selectedOptions.includes('Mobile Application') ? 'shaded' : ''
            }`}
            onClick={() => handleOptionClick('Mobile Application')}
          >
            <img src={require(`./images/vs4.gif`)} className="logo-btn-img" />
            Whiteboard
          </button>
        </label>
        <br></br>
        <br></br>
        <label className="logo-label">
          <input
            type="checkbox"
            className="logo-checkbox"
            checked={selectedOptions.includes('vs5')}
            onChange={() => handleOptionClick('vs5')}
          />
          <button
            className={`logo-btn ${
              selectedOptions.includes('vs5') ? 'shaded' : ''
            }`}
            onClick={() => handleOptionClick('vs5')}
          >
            <img src={require(`./images/vs5.gif`)} className="logo-btn-img" />
            Typographic
          </button>
        </label>
        {/* Add more options using a similar structure */}
      </div>
      <div className="question2-div2">
        <hr></hr>
        <Link to={nextPage ? nextPage : '/step4'}>
          <button className="question-btn">
            {selectedOptions.length > 0 ? 'Continue' : 'SKIP'}
          </button>
        </Link>
      </div>
    </div>
  );
}
