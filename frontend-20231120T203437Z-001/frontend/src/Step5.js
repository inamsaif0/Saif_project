import React, { useState } from 'react';
import './Checkbox.css';
import Navigationbar from './Navigationbar';
import { Link } from 'react-router-dom';

function CheckboxPage() {
  const [selections, setSelections] = useState({
    logo: false,
    web: false,
    video: false,
    mobile: false,
  });

  const handleCheckboxChange = (name) => {
    setSelections({ ...selections, [name]: true });
  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>Click What You Need Next</h2>
        <br></br>
        <div className="checkbox-container">
          <div className="checkbox-button2" onClick={() => handleCheckboxChange('logo')}>
            <img
              src={require('./images/chat.jpg')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            <h4>Live Chat</h4>
            <p>Let's Talk! Share your design requirements with one of our designers to get a perfect logo that you envisioned for</p>
            <Link to="/contact"><button className='question-btn'>LETS CHAT</button>
          </Link>
          <br></br>
          <br></br>
          </div>
          <div className="checkbox-button2" onClick={() => handleCheckboxChange('logo')}>
            <img
              src={require('./images/pricing.png')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            <h4>Pricing</h4>
            <p>Checkout our budget-friendly packages & pricing plans tailor-made for startups & growing businesses of all sizes</p>
            <Link to="/pricing"><button className='question-btn'>VIEW PRICING</button>
          </Link>
          <br></br>
          <br></br>
          </div>
          <div className="checkbox-button2" onClick={() => handleCheckboxChange('logo')}>
            <img
              src={require('./images/port.jpg')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            <h4>Portfolio</h4>
            <p>Checkout our amazing logo projects that we have designed for our recent customers to give their brand an identity</p>
            <Link to="/portfolio"><button className='question-btn'>VIEW PORTFOLIO</button>
          </Link>
          <br></br>
          <br></br>
          </div>
          
        </div>
      </div>
      <div className="align-div">
        <br></br>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
}

export default CheckboxPage;
