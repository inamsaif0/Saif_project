import React, { useState } from 'react';
import axios from 'axios';
import './Checkbox.css';
import Navigationbar from './Navigationbar';

function CheckboxPage() {
  const [step3, setStep3] = useState({
    agriculture: false,
    art: false,
    construction: false,
    business: false,
    children: false,
    religious: false,
    fashion: false,
    food: false,
    games: false,
    health: false,
    travel: false,
    education: false,
    pet: false,
    home: false,
    realestate: false,
    securit: false,
    law: false,
    beauty: false,
    creative: false,
    sports: false,
    science: false,
    transport: false,
    music: false,
    other: false,
  });

  const isAnyCheckboxSelected = () => {
    return Object.values(step3).some((value) => value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setStep3({ ...step3, [name]: checked });
  };

  const handleContinue = () => {
    if (isAnyCheckboxSelected()) {
      axios
        .post('http://localhost:8081/step2_mobile', { step3 })
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/mobile-platform'; // Navigate to '/step4' if no selection is made
    }
    // Custom logic to route based on step3
if (step3.logo) {
  window.location.href = '/mobile-platform'; // Navigate to the logo page
} else if (step3.agriculture) {
  window.location.href = '/mobile-platform'; // Navigate to the web page
} else if (step3.art) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
} else if (step3.construction) {
  window.location.href = '/mobile-platform'; // Navigate to the mobile page
} else if (step3.business) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
} else if (step3.children) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.religious) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.fashion) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.food) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.games) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.health) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.travel) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.education) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.pet) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.home) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.realestate) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.securit) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.law) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}else if (step3.beauty) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.creative) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.sports) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.science) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.transport) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.music) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}
else if (step3.other) {
  window.location.href = '/mobile-platform'; // Navigate to the video page
}

else {
  window.location.href = '/mobile-platform'; // Navigate to a default page
}

  };

  return (
    <div>
      <Navigationbar />
      <div className="question-div">
        <h2>What Best Defines Your Business?</h2>
        <br></br>
        <div className="checkbox-container">
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="agriculture"
              checked={step3.agriculture}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s1.png')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            Agriculture
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="art"
              checked={step3.art}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s2.png')}
              className="logo-btn-img"
              alt="Web Design"
            />
            Art & Photography
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="construction"
              checked={step3.construction}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s3.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Construction
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="business"
              checked={step3.business}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s4.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
           Business & Finance
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="children"
              checked={step3.children}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s5.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Children
          </label>
          <br></br>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="religious"
              checked={step3.religious}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s6.png')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            Religious
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="fashion"
              checked={step3.fashion}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s7.png')}
              className="logo-btn-img"
              alt="Web Design"
            />
            Fashion
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="food"
              checked={step3.food}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s8.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Food & Drinks
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="games"
              checked={step3.games}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s9.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Games & Betting
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="health"
              checked={step3.health}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s10.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Health & Medical
          </label>
          <br></br>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="travel"
              checked={step3.travel}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s11.png')}
              className="logo-btn-img"
              alt="Logo Design"
            />
            Travel & Tourism
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="education"
              checked={step3.education}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s12.png')}
              className="logo-btn-img"
              alt="Web Design"
            />
            Education
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="pet"
              checked={step3.pet}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s13.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Pet & Animals
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="home"
              checked={step3.home}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s14.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Home Service
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="realestate"
              checked={step3.realestate}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s15.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Real Estate
          </label>
          <br></br>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="securit"
              checked={step3.securit}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s16.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Security
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="law"
              checked={step3.law}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s17.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
           Law
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="beauty"
              checked={step3.beauty}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s18.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
             Beauty & Spa
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="creative"
              checked={step3.creative}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s19.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
           Creative
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="sports"
              checked={step3.sports}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s20.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Sports
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="science"
              checked={step3.science}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s21.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Science
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="transport"
              checked={step3.transport}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s22.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Transportation
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="music"
              checked={step3.music}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s23.png')}
              className="logo-btn-img"
              alt="Video Production"
            />
            Music
          </label>
          <label className="checkbox-button">
            <input
              type="checkbox"
              name="other"
              checked={step3.other}
              onChange={handleCheckboxChange}
            />
            <img
              src={require('./images/s24.png')}
              className="logo-btn-img"
              alt="Mobile App Development"
            />
            Other
          </label>
        </div>
      </div>
      <div className="align-div">
        <br></br>
        <br></br>
        <hr></hr>
        <button className="question-btn" onClick={handleContinue}>
          {isAnyCheckboxSelected() ? 'CONTINUE' : 'SKIP'}
        </button>
      </div>
    </div>
  );
}

export default CheckboxPage;
