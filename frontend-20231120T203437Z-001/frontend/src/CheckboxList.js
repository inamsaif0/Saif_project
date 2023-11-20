import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigationbar from './Navigationbar';
import './App.css';
import Validation from './LoginValidation';
import axios from 'axios';

export default function CheckboxList() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [skipClicked, setSkipClicked] = useState(false);
  const [continueClicked, setContinueClicked] = useState(false);

  const handleOptionClick = (option) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(option)) {
      const index = updatedOptions.indexOf(option);
      updatedOptions.splice(index, 1);
    } else {
      updatedOptions.push(option);
    }

    setSelectedOptions(updatedOptions);

    let newNextPage;

    if (updatedOptions.length > 0) {
      switch (updatedOptions[0]) {
        case 'Logo Design':
          newNextPage = '/step2-logo';
          break;
        case 'Web Design':
          newNextPage = '/step2-web-design';
          break;
        case 'Video Animation':
          newNextPage = '/step2-video-services';
          break;
        case 'Mobile Application':
          newNextPage = '/step2-mobile-app';
          break;
        default:
          newNextPage = '/step3';
      }

      setNextPage(newNextPage);

      if (!continueClicked) {
        navigate(newNextPage);
      }
    }
  };

  const [values, setValues] = useState({
    yourname: '',
    youremail: '',
    LogoDesign: false,
    WebDesign: false,
    VideoAnimation: false,
    MobileApp: false,
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleOption1Change = () => {
    setValues((prev) => ({ ...prev, LogoDesign: !values.LogoDesign }));
    if (!continueClicked) {
      navigate(nextPage);
    }
  };

  const handleWebDesignChange = () => {
    setValues((prev) => ({ ...prev, WebDesign: !values.WebDesign }));
    if (!continueClicked) {
      navigate(nextPage);
    }
  };

  const handleVideoAnimationChange = () => {
    setValues((prev) => ({ ...prev, VideoAnimation: !values.VideoAnimation }));
    if (!continueClicked) {
      navigate(nextPage);
    }
  };

  const handleMobileAppChange = () => {
    setValues((prev) => ({ ...prev, MobileApp: !values.MobileApp }));
    if (!continueClicked) {
      navigate(nextPage);
    }
  };

  const handleSkipClick = () => {
    setSkipClicked(true);
    if (!continueClicked) {
      navigate('/step3');
    }
  };

  const handleContinueClick = () => {
    setContinueClicked(true);
    navigate('/color-picker');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (!err.yourname && !err.youremail) {
      const dataToSend = {
        yourname: values.yourname,
        youremail: values.youremail,
        LogoDesign: values.LogoDesign,
        WebDesign: values.WebDesign,
        VideoAnimation: values.VideoAnimation,
        MobileApp: values.MobileApp,
      };
      axios
        .post('http://localhost:8081/step2', dataToSend)
        .then((res) => {
          if (selectedOptions.length > 0 && !continueClicked) {
            navigate(nextPage);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleSubmit}>
        <Navigationbar />
        <div className="question-div">
          <h2>Fill In Details To Get It Moving</h2>
          <input
            type="name"
            onChange={handleInput}
            name="yourname"
            placeholder="Please Enter Your Name"
            className="input-question"
          ></input>
          {errors.yourname && <span className="text-danger"> {errors.yourname}</span>}
          <br></br>
          <br></br>
          <input
            type="email"
            onChange={handleInput}
            name="youremail"
            placeholder="Please Enter Your Email"
            className="input-question"
          ></input>
          {errors.youremail && <span className="text-danger"> {errors.youremail}</span>}
        </div>

        <label>
          <button
            className={`logo-btn ${values.LogoDesign || selectedOptions.includes('Logo Design') ? 'shaded' : ''}`}
            onClick={handleOption1Change}
          >
            <img src={require('./images/1.png')} className="logo-btn-img" alt="Logo Design" />
            Logo Design
          </button>
        </label>

        <label>
          <button
            className={`logo-btn ${values.WebDesign || selectedOptions.includes('Web Design') ? 'shaded' : ''}`}
            onClick={handleWebDesignChange}
          >
            <img src={require('./images/2.png')} className="logo-btn-img" alt="Web Design" />
            Web Design
          </button>
        </label>

        <label>
          <button
            className={`logo-btn ${values.VideoAnimation || selectedOptions.includes('Video Animation') ? 'shaded' : ''}`}
            onClick={handleVideoAnimationChange}
          >
            <img src={require('./images/3.png')} className="logo-btn-img" alt="Video Animation" />
            Video Animation
          </button>
        </label>

        <label>
          <button
            className={`logo-btn ${values.MobileApp || selectedOptions.includes('Mobile Application') ? 'shaded' : ''}`}
            onClick={handleMobileAppChange}
          >
            <img src={require('./images/4.png')} className="logo-btn-img" alt="Mobile Application" />
            Mobile Application
          </button>
        </label>

        <br />

        <div className="question-div2">
          <hr></hr>
          {selectedOptions.length > 0 ? (
            <button type="button" onClick={handleContinueClick} className="question-btn">
              CONTINUE
            </button>
          ) : (
            <button type="button" onClick={handleSkipClick} className="question-btn">
              SKIP
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
