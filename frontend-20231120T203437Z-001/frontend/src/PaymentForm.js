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
    security: false,
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
        .post('http://45.55.45.170:8081/step3', { step3 })
        .catch((error) => {
          console.error('API error:', error);
        });
    } else {
      window.location.href = '/step4'; // Navigate to '/step4' if no selection is made
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
              name="logo"
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
              name="web"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="logo"
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
              name="web"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="logo"
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
              name="web"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="video"
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
              name="mobile"
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
