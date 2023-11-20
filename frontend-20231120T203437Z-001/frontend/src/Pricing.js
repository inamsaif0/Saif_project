
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navigationbar from './Navigationbar'
import Footer2 from './Footer2';
import { FcCheckmark } from "react-icons/fc";
export default function Pricing() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [activeTab2, setActiveTab2] = useState(4);

  const handleTabClick2 = (tabNumber2) => {
    setActiveTab2(tabNumber2);
  };

  const [activeTab3, setActiveTab3] = useState(7);

  const handleTabClick3 = (tabNumber3) => {
    setActiveTab3(tabNumber3);
  };

  const [activeTab4, setActiveTab4] = useState(10);

  const handleTabClick4 = (tabNumber4) => {
    setActiveTab4(tabNumber4);
  };

  const [activeTab5, setActiveTab5] = useState(13);

  const handleTabClick5 = (tabNumber5) => {
    setActiveTab5(tabNumber5);
  };

  const [activeTab6, setActiveTab6] = useState(17);

  const handleTabClick6 = (tabNumber6) => {
    setActiveTab6(tabNumber6);
  };

  const [activeTab7, setActiveTab7] = useState(21);

  const handleTabClick7 = (tabNumber7) => {
    setActiveTab7(tabNumber7);
  };

  const [activeTab8, setActiveTab8] = useState(25);

  const handleTabClick8 = (tabNumber8) => {
    setActiveTab8(tabNumber8);
  };

  const [openDropdown, setOpenDropdown] = useState('LOGO DESIGN');
  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };
  // Initialize dropdown state from local storage
  useEffect(() => {
    const storedOpenDropdown = localStorage.getItem('openDropdown');
    if (storedOpenDropdown) {
      setOpenDropdown(storedOpenDropdown);
    }
  }, []);
  // Update local storage when a dropdown is clicked
  useEffect(() => {
    localStorage.setItem('openDropdown', openDropdown);
  }, [openDropdown]);

// ----------------------------------------------------------------
  // Initialize state variable to track the open dropdown
  const [openDropdown2, setOpenDropdown2] = useState('HTML');
  const handleDropdownClick2 = (dropdownName) => {
    setOpenDropdown2(dropdownName);
  };
  // Initialize dropdown state from local storage
  useEffect(() => {
    const storedOpenDropdown2 = localStorage.getItem('openDropdown2');
    if (storedOpenDropdown2) {
      setOpenDropdown2(storedOpenDropdown2);
    }
  }, []);
  // Update local storage when a dropdown is clicked
  useEffect(() => {
    localStorage.setItem('openDropdown2', openDropdown2);
  }, [openDropdown2]);

  // ----------------------------------------------------------------
  // Initialize state variable to track the open dropdown
  const [openDropdown3, setOpenDropdown3] = useState('Combo2');
  const handleDropdownClick3 = (dropdownName) => {
    setOpenDropdown3(dropdownName);
  };
  // Initialize dropdown state from local storage
  useEffect(() => {
    const storedOpenDropdown3 = localStorage.getItem('openDropdown3');
    if (storedOpenDropdown3) {
      setOpenDropdown3(storedOpenDropdown3);
    }
  }, []);
  // Update local storage when a dropdown is clicked
  useEffect(() => {
    localStorage.setItem('openDropdown3', openDropdown3);
  }, [openDropdown3]);




    const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [showDropdown7, setShowDropdown7] = useState(false);
  const [showDropdown8, setShowDropdown8] = useState(false);
  const [showDropdown9, setShowDropdown9] = useState(false);
  const [showDropdown10, setShowDropdown10] = useState(false);
  const [showDropdown11, setShowDropdown11] = useState(false);
  const [showDropdown12, setShowDropdown12] = useState(false);
  const [showDropdown13, setShowDropdown13] = useState(false);
  const [showDropdown14, setShowDropdown14] = useState(false);
  const [showDropdown15, setShowDropdown15] = useState(false);
  const [showDropdown16, setShowDropdown16] = useState(false);
  const [showDropdown17, setShowDropdown17] = useState(false);
  const [showDropdown18, setShowDropdown18] = useState(false);
  const [showDropdown19, setShowDropdown19] = useState(false);
  const [showDropdown20, setShowDropdown20] = useState(false);
  const [showDropdown21, setShowDropdown21] = useState(false);
  const [showDropdown22, setShowDropdown22] = useState(false);
  const [showDropdown23, setShowDropdown23] = useState(false);
  const [showDropdown24, setShowDropdown24] = useState(false);
  const [showDropdown25, setShowDropdown25] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    setShowDropdown3(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown1(false);
    setShowDropdown2(!showDropdown2);
    setShowDropdown3(false);
  };

  const toggleDropdown3 = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(!showDropdown3);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
    setShowDropdown5(false);
    setShowDropdown6(false);
  };

  const toggleDropdown5 = () => {
    setShowDropdown4(false);
    setShowDropdown5(!showDropdown5);
    setShowDropdown6(false);
  };

  const toggleDropdown6 = () => {
    setShowDropdown4(false);
    setShowDropdown5(false);
    setShowDropdown6(!showDropdown6);
  };
  const toggleDropdown7 = () => {
    setShowDropdown7(!showDropdown7);
    setShowDropdown8(false);
    setShowDropdown9(false);
  };

  const toggleDropdown8 = () => {
    setShowDropdown7(false);
    setShowDropdown8(!showDropdown8);
    setShowDropdown9(false);
  };

  const toggleDropdown9 = () => {
    setShowDropdown7(false);
    setShowDropdown8(false);
    setShowDropdown9(!showDropdown9);
  };

  const toggleDropdown10 = () => {
    setShowDropdown10(!showDropdown10);
    setShowDropdown11(false);
    setShowDropdown12(false);
    setShowDropdown13(false);
  };
  const toggleDropdown11 = () => {
    setShowDropdown10(false);
    setShowDropdown11(!showDropdown11);
    setShowDropdown12(false);
    setShowDropdown13(false);
  };
  const toggleDropdown12 = () => {
    setShowDropdown10(false);
    setShowDropdown11(false);
    setShowDropdown12(!showDropdown12);
    setShowDropdown13(false);
  };
  const toggleDropdown13 = () => {
    setShowDropdown10(false);
    setShowDropdown11(false);
    setShowDropdown12(false);
    setShowDropdown13(!showDropdown13);
  };
  const toggleDropdown14 = () => {
    setShowDropdown14(!showDropdown14);
    setShowDropdown15(false);
    setShowDropdown16(false);
    setShowDropdown17(false);
  };
  const toggleDropdown15 = () => {
    setShowDropdown14(false);
    setShowDropdown15(!showDropdown15);
    setShowDropdown16(false);
    setShowDropdown17(false);
  };
  const toggleDropdown16 = () => {
    setShowDropdown14(false);
    setShowDropdown15(false);
    setShowDropdown16(!showDropdown16);
    setShowDropdown17(false);
  };
  const toggleDropdown17 = () => {
    setShowDropdown14(false);
    setShowDropdown15(false);
    setShowDropdown16(false);
    setShowDropdown17(!showDropdown17);
  };
  const toggleDropdown18 = () => {
    setShowDropdown18(!showDropdown18);
    setShowDropdown19(false);
    setShowDropdown20(false);
    setShowDropdown21(false);
  };
  const toggleDropdown19 = () => {
    setShowDropdown18(false);
    setShowDropdown19(!showDropdown19);
    setShowDropdown20(false);
    setShowDropdown21(false);
  };
  const toggleDropdown20 = () => {
    setShowDropdown18(false);
    setShowDropdown19(false);
    setShowDropdown20(!showDropdown20);
    setShowDropdown21(false);
  };
  const toggleDropdown21 = () => {
    setShowDropdown18(false);
    setShowDropdown19(false);
    setShowDropdown20(false);
    setShowDropdown21(!showDropdown21);
  };
  const toggleDropdown22 = () => {
    setShowDropdown22(!showDropdown22);
    setShowDropdown23(false);
    setShowDropdown24(false);
    setShowDropdown25(false);
  };
  const toggleDropdown23 = () => {
    setShowDropdown22(false);
    setShowDropdown23(!showDropdown23);
    setShowDropdown24(false);
    setShowDropdown25(false);
  };
  const toggleDropdown24 = () => {
    setShowDropdown22(false);
    setShowDropdown23(false);
    setShowDropdown24(!showDropdown24);
    setShowDropdown25(false);
  };
  const toggleDropdown25 = () => {
    setShowDropdown22(false);
    setShowDropdown23(false);
    setShowDropdown24(false);
    setShowDropdown25(!showDropdown25);
  };
  
  return (
    <div>
        <Navigationbar />
        <div className='align-div' style={{backgroundColor:'black',color:'white'}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='img-heading2'>Digitally Optimized, Pocket-friendly Designs Just A Click Away!</h1>
            <h3>At SeoInsighterX, we offer custom plans personalized around your needs. Our only goal is the success of our clients!</h3>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className='align-div'>
            <br></br>
            <br></br>
            <p>LOGO DESIGN</p>
            <h1>Unique And Affordable Logo Designs</h1>
            <h5>Conquer the digital world with a stunning logo design without going bankrupt!</h5>
            <br></br>
            <br></br>

            <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'HTML' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('HTML')}
          >
            LOGO DESIGN
            <i className={`fa fa-caret-down ${openDropdown2 === 'HTML' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'HTML' ? 'show' : ''}`}>
          <div class="row m-0">
        
        <div class="column">
        <h3>Basic Plan</h3>
          <h1>$49</h1>
          <p>2 LOGO CONCEPTS</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <p className='p-bold'>Features</p>
          <ul>
            <li><FcCheckmark /> By 1 Experienced Designer</li>
            <li><FcCheckmark /> 4 Free Revisions</li>
            <li><FcCheckmark /> Dedicated Project Manager</li>
            <li><FcCheckmark /> 24 - 48 Hours Delivery</li>
            <br></br>
            <p className='p-bold'>What you will Get?</p>
            <li><FcCheckmark /> 1 Finalized Logo</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> No Print-Ready PDF File</li>
            <li><FcCheckmark /> No Vector EPS File</li>
            <li><FcCheckmark /> No Editable Vector AI File</li>
          </ul>
        </div>
        <div class="column">
        <h3>Professional Plan</h3>
          <h1>$99</h1>
          <p>4 LOGO CONCEPTS</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <p className='p-bold'>Features</p>
          <ul>
            <li><FcCheckmark /> By 3 Experienced Designer</li>
            <li><FcCheckmark /> 8 Free Revisions</li>
            <li><FcCheckmark /> Dedicated Project Manager</li>
            <li><FcCheckmark /> 24 - 48 Hours Delivery</li>
            <br></br>
            <p className='p-bold'>What you will Get?</p>
            <li><FcCheckmark /> 1 Finalized Logo</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> Online JPEG & PNG Files</li>
            <li><FcCheckmark /> Print Ready PDF File</li>
            <li><FcCheckmark /> No Vector EPS File</li>
            <li><FcCheckmark /> No Editable Vector AI File</li>
          </ul>
          </div>
        <div class="column">
        <h3>Premium Plan</h3>
          <h1>$149</h1>
          <p>6 LOGO CONCEPTS</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <p className='p-bold'>Features</p>
          <ul>
            <li><FcCheckmark /> By 5 Experienced Designer</li>
            <li><FcCheckmark /> Unlimited Revisions</li>
            <li><FcCheckmark /> Dedicated Project Manager</li>
            <li><FcCheckmark /> 24 - 48 Hours Delivery</li>
            <br></br>
            <p className='p-bold'>What you will Get?</p>
            <li><FcCheckmark /> 1 Finalized Logo</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> Online JPEG & PNG Files</li>
            <li><FcCheckmark /> Print-Ready PDF File</li>
            <li><FcCheckmark /> Vector EPS File</li>
            <li><FcCheckmark /> No Editable Vector AI File</li>
          </ul>
          </div>
        <div class="column">
        <h3>Deluxe Plan</h3>
          <h1>$199</h1>
          <p>Unlimited LOGO CONCEPTS</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <p className='p-bold'>Features</p>
          <ul>
            <li><FcCheckmark /> By 8 Experienced Designer</li>
            <li><FcCheckmark /> 4 Free Revisions</li>
            <li><FcCheckmark /> Dedicated Project Manager</li>
            <li><FcCheckmark /> 24 - 48 Hours Delivery</li>
            <br></br>
            <p className='p-bold'>What you will Get?</p>
            <li><FcCheckmark /> 1 Finalized Logo</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> Online JPEG & PNG Files</li>
            <li><FcCheckmark /> Print-Ready PDF File</li>
            <li><FcCheckmark /> Vector EPS File</li>
            <li><FcCheckmark /> Editable Vector AI File</li>
          </ul>
          </div>
        
        
        
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'CMS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('CMS')}
          >
            BRANDING
            <i className={`fa fa-caret-down ${openDropdown2 === 'CMS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'CMS' ? 'show' : ''}`}>
          <div class="row m-0">
          <div class="column">
          <h3>Startup Plan</h3>
          <h1>$99</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letter head Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> MS Word Letterhead</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Invoice Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Facebook Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Youtube Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Twitter Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Linkedin Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Logo Watermark</li> 
        </ul>
        </div>

        <div class="column">
        <h3>Professional Plan</h3>
          <h1>$139</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letter head Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> MS Word Letterhead</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Invoice Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Facebook Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Youtube Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Twitter Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Linkedin Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Logo Watermark</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Polo/T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cap/Hat Design</li> 
        </ul>
          </div>

        <div class="column">
        <h3>Corporate Plan</h3>
          <h1>$249</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letter head Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> MS Word Letterhead</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Invoice Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Facebook Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Youtube Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Twitter Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Linkedin Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Logo Watermark</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Polo/T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cap/Hat Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Bag Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Signage Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Flyer Design</li> 
        </ul>
          </div>

        <div class="column">
        <h3>Ultimate Plan</h3>
          <h1>$299</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letter head Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> MS Word Letterhead</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Invoice Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Facebook Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Youtube Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Twitter Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Linkedin Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Logo Watermark</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Polo/T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cap/Hat Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Bag Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Signage Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Flyer Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Car Wrap/Vinyl Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> PPT Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Magnet Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Door Sign Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Menu Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Mug/Cup Design</li> 
            </ul>
          </div>

      </div>
          </div>
          
          </div>
          
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'LOGO + BRANDING' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('LOGO + BRANDING')}
          >
            LOGO + BRANDING
            <i className={`fa fa-caret-down ${openDropdown2 === 'LOGO + BRANDING' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'LOGO + BRANDING' ? 'show' : ''}`}>
          <div class="row m-0">
          <br></br>
          <div class="column">
          <h3>Basic Plan</h3>
          <h1>$89</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Combo</div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Logo</div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Branding</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab === 1 ? 'active' : ''}`}>
            <br></br>
            
            <p className='p-bold'>Professional Logo</p>
            <li><FcCheckmark /> 2 Logo Concepts</li>
            <li><FcCheckmark /> 3 Revisions</li>
            <li><FcCheckmark /> No High Res. Files</li>
            <li><FcCheckmark /> 48 hours Delivery</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> JPG + PNG</li>
           
            <br></br>
            <p className='p-bold'>Startup Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> 100% Ownership</li>
            
        </ul>

        <ul className={`list ${activeTab === 2 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Basic Logo</p>
            <li><FcCheckmark /> 2 Logo Concepts</li>
            <li><FcCheckmark /> 3 Revisions</li>
            <li><FcCheckmark /> No High Res. Files</li>
            <li><FcCheckmark /> 48 hours Delivery</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> JPG + PNG</li>
        </ul>

        <ul className={`list ${activeTab === 3 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Startup Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> 100% Ownership</li>
        </ul>
      </div>
    </div>
      <div>
      
    </div>

          </div>
          <br></br>
          <div class="column">
          <h3>Professional Plan</h3>
          <h1>$219</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab2 === 4 ? 'active' : ''}`} onClick={() => handleTabClick2(4)}>Combo</div>
        <div className={`tab ${activeTab2 === 5 ? 'active' : ''}`} onClick={() => handleTabClick2(5)}>Logo</div>
        <div className={`tab ${activeTab2 === 6 ? 'active' : ''}`} onClick={() => handleTabClick2(6)}>Branding</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab2 === 4 ? 'active' : ''}`}>
            <br></br>
            
            <p className='p-bold'>Professional Logo</p>
            <li><FcCheckmark /> 4 Logo Concepts</li>
            <li><FcCheckmark /> 6 Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Vector PDF File</li>
            <li><FcCheckmark /> 48 hours Delivery</li>
            <li><FcCheckmark /> JPG + PDF + PNG</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <br></br>
            <p className='p-bold'>Corporate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 2 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>

        </ul>
        
        <ul className={`list ${activeTab2 === 5 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Professional Logo</p>
            <li><FcCheckmark /> 4 Logo Concepts</li>
            <li><FcCheckmark /> 6 Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Vector PDF File</li>
            <li><FcCheckmark /> 48 hours Delivery</li>
            <li><FcCheckmark /> JPG + PDF + PNG</li>
            <li><FcCheckmark /> 100% Ownership</li>
        </ul>

        <ul className={`list ${activeTab2 === 6 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Corporate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 2 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>
        </ul>
      </div>
    </div>
          </div>
          <br></br>
          <div class="column">
          <h3>Corporate Plan</h3>
          <h1>$299</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab3 === 7 ? 'active' : ''}`} onClick={() => handleTabClick3(7)}>Combo</div>
        <div className={`tab ${activeTab3 === 8 ? 'active' : ''}`} onClick={() => handleTabClick3(8)}>Logo</div>
        <div className={`tab ${activeTab3 === 9 ? 'active' : ''}`} onClick={() => handleTabClick3(9)}>Branding</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab3 === 7 ? 'active' : ''}`}>
            <br></br>
            
            <p className='p-bold'>Premium Logo</p>
            <li><FcCheckmark /> 6 Logo Concepts</li>
            <li><FcCheckmark /> Unlimited Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Vector EPS, PDF File</li>
            <li><FcCheckmark /> 24-48 hours Delivery</li>
            <li><FcCheckmark /> JPG + PDF + PNG + EPS</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <br></br>
            <p className='p-bold'>Ultimate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 4 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>
            <li><FcCheckmark /> Signage Design</li>
            <li><FcCheckmark /> Car Stickers Design</li>

        </ul>
        
        <ul className={`list ${activeTab3 === 8 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Premium Logo</p>
        <li><FcCheckmark /> 6 Logo Concepts</li>
            <li><FcCheckmark /> Unlimited Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Vector EPS, PDF File</li>
            <li><FcCheckmark /> 24-48 hours Delivery</li>
            <li><FcCheckmark /> JPG + PDF + PNG + EPS</li>
            <li><FcCheckmark /> 100% Ownership</li>
        </ul>

        <ul className={`list ${activeTab3 === 9 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Ultimate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 4 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>
            <li><FcCheckmark /> Signage Design</li>
            <li><FcCheckmark /> Car Stickers Design</li>
        </ul>
      </div>
    </div>
          </div>
          <br></br>
          <div class="column">
          <h3>Ultimate Plan</h3>
          <h1>$599</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab4 === 10 ? 'active' : ''}`} onClick={() => handleTabClick4(10)}>Combo</div>
        <div className={`tab ${activeTab4 === 11 ? 'active' : ''}`} onClick={() => handleTabClick4(11)}>Logo</div>
        <div className={`tab ${activeTab4 === 12 ? 'active' : ''}`} onClick={() => handleTabClick4(12)}>Branding</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab4 === 10 ? 'active' : ''}`}>
            <br></br>
            
            <p className='p-bold'>Deluxe Logo</p>
            <li><FcCheckmark /> Unlimited Logo Concepts</li>
            <li><FcCheckmark /> Unlimited Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Editable Vector Ai</li>
            <li><FcCheckmark /> 24-48 hours Delivery</li>
            <li><FcCheckmark /> Vector EPS, PDF</li>
            <li><FcCheckmark /> JPG + PDF + PNG + EPS + AI</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> Business Card Design</li>
            <br></br>
            <p className='p-bold'>Ultimate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 4 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>
            <li><FcCheckmark /> Signage Design</li>
            <li><FcCheckmark /> Car Stickers Design</li>

        </ul>
        
        <ul className={`list ${activeTab4 === 11 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Deluxe Logo</p>
            <li><FcCheckmark /> Unlimited Logo Concepts</li>
            <li><FcCheckmark /> Unlimited Revisions</li>
            <li><FcCheckmark /> Custom Logo</li>
            <li><FcCheckmark /> Editable Vector Ai</li>
            <li><FcCheckmark /> 24-48 hours Delivery</li>
            <li><FcCheckmark /> Vector EPS, PDF</li>
            <li><FcCheckmark /> JPG + PDF + PNG + EPS + AI</li>
            <li><FcCheckmark /> 100% Ownership</li>
            <li><FcCheckmark /> Business Card Design</li>
        </ul>

        <ul className={`list ${activeTab4 === 12 ? 'active' : ''}`}>
        <br></br>
        <p className='p-bold'>Ultimate Branding</p>
            <li><FcCheckmark /> Business Card Design</li>
            <li><FcCheckmark /> Letterhead Design</li>
            <li><FcCheckmark /> Envelope Design</li>
            <li><FcCheckmark /> Email Signature</li>
            <li><FcCheckmark /> 4 Social Covers</li>
            <li><FcCheckmark /> T-Shirt Design</li>
            <li><FcCheckmark /> Web Banner Design</li>
            <li><FcCheckmark /> Signage Design</li>
            <li><FcCheckmark /> Car Stickers Design</li>
        </ul>
      </div>
    </div>
          </div>
          </div>
          </div>
          
          </div>

          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'WEB-DESIGN' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('WEB-DESIGN')}
          >
            WEB DESIGN
            <i className={`fa fa-caret-down ${openDropdown2 === 'WEB-DESIGN' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'WEB-DESIGN' ? 'show' : ''}`}>
          <div class="row m-0">
          <div class="column">
          <h3>HTML</h3>
          <h1>$499</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Jquery Slider Banner</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> UI Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 3 Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
          </ul>
        </div>

        <div class="column">
        <h3>CMS</h3>
          <h1>$999</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 10 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Inte</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li> 
          </ul>
          </div>

        <div class="column">
        <h3>E-Commerce</h3>
          <h1>$1999</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Admin Panel Support</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Mobile Responsive Layout</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Customers Login Area</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cart Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Pay. Module Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Inventory Mangement</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unltd. Products &amp; Cate</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Easy Product Search</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Product Reviews</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 15 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 8 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Basic Search Engine Submission</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Analytics Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li> 
          </ul>
          </div>

        <div class="column">
        <h3>Portal</h3>
          <h1>$3999</h1>
          <p>BRANDING KIT</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <ul> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Any One:</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Dating Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Job Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Professional Network</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Network</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Media Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Real Estate Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Medical Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> News Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Enterprise Portal</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Client/User Dashboard</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Coding</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Module-wise Architecture</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Extensive Admin Panel</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Complete Deployment</li> 
          </ul>
          </div>

      </div>
          </div>
          
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'LOGO + BRANDING + WEBSITE' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('LOGO + BRANDING + WEBSITE')}
          >
            LOGO + BRANDING + WEBSITE
            <i className={`fa fa-caret-down ${openDropdown2 === 'LOGO + BRANDING + WEBSITE' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'LOGO + BRANDING + WEBSITE' ? 'show' : ''}`}>
          <div class="row m-0">
          <br></br>
          <div class="column">
          <h3>Basic Plan</h3>
          <h1>$499</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab5 === 13 ? 'active' : ''}`} onClick={() => handleTabClick5(13)}>Combo</div>
        <div className={`tab ${activeTab5 === 14 ? 'active' : ''}`} onClick={() => handleTabClick5(14)}>Logo</div>
        <div className={`tab ${activeTab5 === 15 ? 'active' : ''}`} onClick={() => handleTabClick5(15)}>Branding</div>
        <div className={`tab ${activeTab5 === 16 ? 'active' : ''}`} onClick={() => handleTabClick5(16)}>Website</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab5 === 13 ? 'active' : ''}`}>
            <br></br>
           
              <p class="p-bold"> Professional Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Logo Concepts</li>
            <li><FcCheckmark /> <i class="fas fa-check"></i> 6 Revisions</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector PDF File</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 48 hours Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <br></br>
            <p class="p-bold"> Startup Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <br></br>
            <p class="p-bold"> 1 Page HTML</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 1 Page Static Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Jquery Slider Banner</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> UI Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 3 Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
      
        </ul>
        
        <ul className={`list ${activeTab5 === 14 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Professional Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Logo Concepts</li>
            <li><FcCheckmark /> <i class="fas fa-check"></i> 6 Revisions</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector PDF File</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 48 hours Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li>
        </ul>

        <ul className={`list ${activeTab5 === 15 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Startup Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li>
        </ul>
        <ul className={`list ${activeTab5 === 16 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> 1 Page HTML</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 1 Page Static Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Jquery Slider Banner</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> UI Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 3 Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li>
        </ul>
      </div>
    </div>
      <div>
      
    </div>

          </div>
          <br></br>
          <div class="column">
          <h3>Professional Plan</h3>
          <h1>$699</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab6 === 17 ? 'active' : ''}`} onClick={() => handleTabClick6(17)}>Combo</div>
        <div className={`tab ${activeTab6 === 18 ? 'active' : ''}`} onClick={() => handleTabClick6(18)}>Logo</div>
        <div className={`tab ${activeTab6 === 19 ? 'active' : ''}`} onClick={() => handleTabClick6(19)}>Branding</div>
        <div className={`tab ${activeTab6 === 20 ? 'active' : ''}`} onClick={() => handleTabClick6(20)}>Website</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab6 === 17 ? 'active' : ''}`}>
            <br></br>
            
            <p class="p-bold"> Premium Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 6 Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS , PDF file</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <br></br>
            <p class="p-bold"> Professional Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 2 Social Covers</li> 
            <br></br>
            <p class="p-bold"> HTML Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Page Static Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Jquery Slider Banner</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> UI Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 3 Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            </ul>
        
        <ul className={`list ${activeTab6 === 18 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Premium Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 6 Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS , PDF file</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li>
        </ul>

        <ul className={`list ${activeTab6 === 19 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Professional Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 2 Social Covers</li>
        </ul>
        <ul className={`list ${activeTab6 === 20 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> HTML Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Page Static Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Jquery Slider Banner</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> UI Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 3 Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li>
        </ul>
      </div>
    </div>
          </div>
          <br></br>
          <div class="column">
          <h3>Corporate Plan</h3>
          <h1>$1299</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab7 === 21 ? 'active' : ''}`} onClick={() => handleTabClick7(21)}>Combo</div>
        <div className={`tab ${activeTab7 === 22 ? 'active' : ''}`} onClick={() => handleTabClick7(22)}>Logo</div>
        <div className={`tab ${activeTab7 === 23 ? 'active' : ''}`} onClick={() => handleTabClick7(23)}>Branding</div>
        <div className={`tab ${activeTab7 === 24 ? 'active' : ''}`} onClick={() => handleTabClick7(24)}>Website</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab7 === 21 ? 'active' : ''}`}>
            <br></br>  
            <p class="p-bold"> Deluxe Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Editable Vector Ai</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS, PDF</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS + AI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <br></br>
            <p class="p-bold"> Corporate Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 2 Social Covers</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Banner Design</li> 
            <br></br>
            <p class="p-bold"> CMS Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Pages Dynamic Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 10 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li>
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Inte</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li>
        </ul>
        
        <ul className={`list ${activeTab7 === 22 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Deluxe Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Editable Vector Ai</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS, PDF</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS + AI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li>
        </ul>

        <ul className={`list ${activeTab7 === 23 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Corporate Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 2 Social Covers</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Banner Design</li>
        </ul>
        <ul className={`list ${activeTab7 === 24 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> CMS Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Pages Dynamic Website</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 10 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 5 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li>
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Inte</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li>
        </ul>
      </div>
    </div>
          </div>
          <br></br>
          <div class="column">
          <h3>Ultimate Plan</h3>
          <h1>$1999</h1>
          <p>2 IN 1</p>
          <Link to=''><button class="question-btn">ORDER NOW</button></Link>
          <hr></hr>
          <div className="tab-container">
        <div className={`tab ${activeTab8 === 25 ? 'active' : ''}`} onClick={() => handleTabClick8(25)}>Combo</div>
        <div className={`tab ${activeTab8 === 26 ? 'active' : ''}`} onClick={() => handleTabClick8(26)}>Logo</div>
        <div className={`tab ${activeTab8 === 27 ? 'active' : ''}`} onClick={() => handleTabClick8(27)}>Branding</div>
        <div className={`tab ${activeTab8 === 28 ? 'active' : ''}`} onClick={() => handleTabClick8(28)}>Website</div>
      </div>

      <div className="tab-content">
        <div class="list-container"> 
        <ul className={`list ${activeTab8 === 25 ? 'active' : ''}`}>
            <br></br>
            <p class="p-bold"> Deluxe Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Editable Vector Ai</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS, PDF</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS + AI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li>
            <br></br> 
            <p class="p-bold"> Ultimate Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Covers</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Signage Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Car Stickers Design</li> 
            <br></br>
            <p class="p-bold"> E-commerce Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Admin Panel Support</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Mobile Responsive Layout</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Customers Login Area</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cart Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Pay. Module Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Inventory Mangement</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unltd. Products &amp; Cate</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Easy Product Search</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Product Reviews</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 15 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 8 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Basic Search Engine Submission</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Analytics Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li>
        </ul>
        
        <ul className={`list ${activeTab8 === 26 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Deluxe Logo</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Logo Concepts</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revision</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Custom Logo</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Editable Vector Ai</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 24-48 H Delivery</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Vector EPS, PDF</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> JPG + PDF + PNG + EPS + AI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li>
        </ul>

        <ul className={`list ${activeTab8 === 27 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> Ultimate Branding</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Covers</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> T-Shirt Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Banner Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Signage Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Car Stickers Design</li>
        </ul>
        <ul className={`list ${activeTab8 === 28 ? 'active' : ''}`}>
        <br></br>
        <p class="p-bold"> E-commerce Website</p> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Development</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> W3C Certified HTML</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Admin Panel Support</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Mobile Responsive Layout</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Customers Login Area</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Cart Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Pay. Module Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Inventory Mangement</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Unltd. Products &amp; Cate</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Easy Product Search</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Product Reviews</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Web Design &amp; UI</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 15 Stock Images</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 8 Banner Designs</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Advance UI Effects</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Basic Search Engine Submission</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Design</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> SEO Friendly Sitemap</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Analytics Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> On Page Optimization</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> Social Media Integration</li> 
            <li><FcCheckmark /> <i class="fas fa-check"></i> 4 Social Platforms</li>
        </ul>
      </div>
    </div>
          </div>
          </div>
          </div>
          
          </div>
          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
        
        <div className='align-div'>
            <br></br>
            <br></br>
            <p>ULTIMATE BRANDING</p>
            <h1>We Transform Your Brand Into Something Grand!</h1>
            <h5>Hire us now for your digital branding needs and get all the design-related services at a reasonable price.</h5>
            <br></br>
            <br></br>
            <div className='align-div' style={{ backgroundColor:'whitesmoke'}}>
                <br></br>
                <br></br>
                <h1>Ultimate Branding Kit</h1>
                <div className='row m-0'>
                    <div className='column'>
                    <h1>$499</h1>
                    <h4>ULTIMATE BRANDING KIT</h4>
                    <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                    </div>
                    <div className='column'>
                    <ul class="fullpricingli" className='list-none'> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Social Covers Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Letterhead &amp; Invoice Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Ms Word Letterhead</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Flyer Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Bag Design</li> 
                    </ul>
                    </div>
                    <div className='column'>
                    <ul class="fullpricingli" className='list-none'> <li><FcCheckmark /> <i class="fas fa-check"></i> Car Stickers Design</li> <li><FcCheckmark /> <i class="fas fa-check"></i> Email Signature</li> <li><FcCheckmark /> <i class="fas fa-check"></i> Envelope Design</li> <li><FcCheckmark /> <i class="fas fa-check"></i> Fax Template</li> <li><FcCheckmark /> <i class="fas fa-check"></i> Favicon Design</li> <li><FcCheckmark /> <i class="fas fa-check"></i> PPT Presentation</li> </ul>
                    </div>
                    <div className='column'>
                    <ul class="fullpricingli" className='list-none'> <li><FcCheckmark /> <i class="fas fa-check"></i> Signage Design</li> <li><FcCheckmark /> <i class="fas fa-check"></i> T-Shirt Design</li> <li><FcCheckmark /> <i class="fas fa-check"></i> Website Banner</li> 
                    <br></br>
                    <img src={require(`./images/guarantee.webp`)} className="guarantee"/></ul>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <p>AWARD WINNING</p>
            <h1>Award Winning Design Team Logo</h1>
            <h4>So, you don't want anything but the best; well, don't worry, at SeoInsighterX, you only get the best!</h4>
            <br></br>
            <br></br>
            </div>
            <div className='align-div' style={{ backgroundColor:'whitesmoke'}}>
                
                <br></br>
                <h1>Award Winning Package</h1>
                <div className='row m-0'>
                    <div className='column'>
                    <h1>$399</h1>
                    <h4>AWARD WINNING PACKAGE</h4>
                    <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                    </div>
                    <div className='column'>
                    <ul className='list-none'> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Designed by our 20+ years Experienced Art Directors</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Unlimited Revisions</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Ownership</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> 24 hours Delivery Time</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Ai, PDF, EPS, JPG & PNG files</li> 
                    </ul>
                    </div>
                    <div className='column'>
                    <ul className='list-none'> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Business Card Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Flyer Design</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Font names, Color codes.</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> Black and White version Files</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> 2 Social Cover Page Designs Addon</li> 
                    <li><FcCheckmark /> <i class="fas fa-check"></i> 100% Unique Design Guarantee</li>
                    </ul>
                    </div>
                    <div className='column'>
                    <ul className='list-none'> 
                    <br></br>
                    <img src={require(`./images/guarantee.webp`)} className="guarantee"/></ul>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='align-div'>
                
                <p>LOGO + WEBSITE + BRANDING KIT</p>
                <h1>Special Offer</h1>
                <h4>Get our diamond package and get the branding that will outshine the competition!</h4>
            </div>
            <br></br>
            <br></br>
            <div className='align-div' style={{ backgroundColor:'whitesmoke'}}>
               <br></br>
               <h1>Diamond</h1>
               <div className='row m-0'>
                <div className='column'>
                <h1>$499</h1>
                <h3>DIAMOND PACKAGE</h3>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                </div>
                <div className='column'>
                <h3 style={{textAlign:'start'}}>Logo Design</h3>
                <ul className='list-none'>
                    <li><FcCheckmark /> 10 Logo Concepts</li>
                    <li><FcCheckmark /> Unlimited Revisions</li>
                    <li><FcCheckmark /> Ai, PDF, EPS, JPG & PNG files</li>
                    <li><FcCheckmark /> 100% Ownership</li>
                </ul>
                </div>
                <div className='column'>
                <h3 style={{textAlign:'start'}}>Business Stationery</h3>
                <ul className='list-none'>
                    <li><FcCheckmark /> 250 Business Cards Printing</li>
                    <li><FcCheckmark /> Business Card Designs</li>
                    <li><FcCheckmark /> Letterhead Designs</li>
                    <li><FcCheckmark /> Envelope Designs</li>
                    <li><FcCheckmark /> Social Media Cover Designs</li>
                </ul>
                </div>
                <div className='column'>
                <h3 style={{textAlign:'start'}}>Website</h3>
                <ul className='list-none'>
                    <li><FcCheckmark /> 1 Page Dynamic Website</li>
                    <li><FcCheckmark /> Cross platform compatible</li>
                    <li><FcCheckmark /> Responsive Layout</li>
                    <li><FcCheckmark /> Unlimited UI Effects</li>
                    <li><FcCheckmark /> 5 stock photos</li>
                    <li><FcCheckmark /> 100% Ownership</li>
                </ul>
                </div>
               </div>
            </div>
            <br></br>
            <br></br>
            <div className='align-div'>   
                <p>ANIMATED DESIGN</p>
                <h1>Animated Logo</h1>
                <h4>Give a touch of motion to your logos and get your brand going in the digital world!</h4>
            </div>
            <br></br>
            <br></br>
            <div className='row m-0' style={{padding:'0 50px'}}>
            <div className='pricing-card'>
            <h2>Basic Plan</h2>
            <h1>$299</h1>
            <h5>4 Secs LOGO CONCEPTS</h5>
            <Link to=''><button class="question-btn">ORDER NOW</button></Link>
            <hr></hr>
            <ul>
                <li><FcCheckmark /> 2 Concepts</li>
                <li><FcCheckmark /> HD Quality</li>
                <li><FcCheckmark /> Dedicated Motion Artists</li>
                <li><FcCheckmark /> 72 Hours Delivery</li>
                <li><FcCheckmark /> 100% Ownership</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Professional Plan</h2>
                <h1>$399</h1>
                <h5>8 Secs LOGO CONCEPTS</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <li><FcCheckmark /> 3 Concepts</li>
            <li><FcCheckmark /> HD & 2K Quality</li>
            <li><FcCheckmark /> Dedicated Motion Artist</li>
            <li><FcCheckmark /> 72 Hours Delivery</li>
            <li><FcCheckmark /> 100% Ownership</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Premium Plan</h2>
                <h1>$499</h1>
                <h5>12 Secs LOGO CONCEPTS</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <li><FcCheckmark /> 4 Concepts</li>
            <li><FcCheckmark /> HD, 2K & 4K Quality</li>
            <li><FcCheckmark /> Dedicated Motion Artist & Graphic Designer</li>
            <li><FcCheckmark /> 72 Hours Delivery</li>
            <li><FcCheckmark /> 100% Ownership</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Deluxe Plan</h2>
                <h1>$899</h1>
                <h5>16 Secs LOGO CONCEPTS</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <li><FcCheckmark /> 6 Concepts</li>
            <li><FcCheckmark /> HD, 2K Quality</li>
            <li><FcCheckmark /> Dedicated Motion Artist & Graphic Designer</li>
            <li><FcCheckmark /> 72 Hours Delivery</li>
            <li><FcCheckmark /> 100% Ownership</li>
            </ul>
            </div>
            </div>
            <br></br>
            <br></br>
            <div className='align-div'>   
                <p>VIDEO ANIMATION</p>
                <h1>Priceless Animated Videos At Less Price</h1>
                <h4>Animated videos are expensive; therefore, not everyone can afford them. Well, you can if you hire us!</h4>
            </div>
            <br></br>
            <br></br>
            <div className='row m-0' style={{padding:'0 50px'}}>
            <div className='pricing-card'>
            <h2>Basic Plan</h2>
            <h1>$499</h1>
            <h5>60 SECOND VIDEO</h5>
            <Link to=''><button class="question-btn">ORDER NOW</button></Link>
            <hr></hr>
            <ul>
                <p className='p-bold'>Custom Work</p>
                <li><FcCheckmark /> Script Writing</li>
                <li><FcCheckmark /> Detail Storyboard</li>
                <li><FcCheckmark /> Professional Voice over</li>
                <li><FcCheckmark /> Impressive Animation</li>
                <li><FcCheckmark /> Royalty free BG & SFX</li>
                <br></br>
                <p className='p-bold'>More Features</p>
                <li><FcCheckmark /> File Delivered in HD 720p</li>
                <li><FcCheckmark /> 3 round of revisions in each phase</li>
                <li><FcCheckmark /> 4 weeks Deadline</li>
                <li><FcCheckmark /> 100% satisfaction</li>
                <li><FcCheckmark /> 100% Ownership Rights</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Professional Plan</h2>
                <h1>$799</h1>
                <h5>60 SECOND VIDEO</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <p className='p-bold'>Custom Work</p>
            <li><FcCheckmark /> Script Writing</li>
            <li><FcCheckmark /> Storyboarding</li>
            <li><FcCheckmark /> Detail Illustrations</li>
            <li><FcCheckmark /> Professional Voice Over</li>
            <li><FcCheckmark /> Impressive Animation</li>
            <li><FcCheckmark /> Royalty free BG & SFX</li>
            <br></br>
                <p className='p-bold'>More Features</p>
                <li><FcCheckmark /> File Delivered in HD 720p</li>
                <li><FcCheckmark /> 3 round of revisions in each phase</li>
                <li><FcCheckmark /> 3 weeks Deadline</li>
                <li><FcCheckmark /> 100% satisfaction</li>
                <li><FcCheckmark /> 100% Ownership Rights</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Premium Plan</h2>
                <h1>$999</h1>
                <h5>60 SECOND VIDEO</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <p className='p-bold'>Custom Work</p>
            <li><FcCheckmark /> Script Writing</li>
            <li><FcCheckmark /> Storyboarding</li>
            <li><FcCheckmark /> Detail Illustrations</li>
            <li><FcCheckmark /> Professional Voice Over</li>
            <li><FcCheckmark /> Impressive Animation</li>
            <li><FcCheckmark /> Royalty free BG & SFX</li>
            <br></br>
                <p className='p-bold'>More Features</p>
                <li><FcCheckmark /> File Delivered in HD 1080p</li>
                <li><FcCheckmark /> Multiple revisions in each phase</li>
                <li><FcCheckmark /> 2 weeks Deadline</li>
                <li><FcCheckmark /> Dedicated Project Manager</li>
                <li><FcCheckmark /> 100% satisfaction</li>
                <li><FcCheckmark /> 100% Ownership Rights</li>
            </ul>
            </div>
            <div className='pricing-card'>
                <h2>Deluxe Plan</h2>
                <h1>$1499</h1>
                <h5>60 SECONDS</h5>
                <Link to=''><button class="question-btn">ORDER NOW</button></Link>
                <hr></hr>
            <ul>
            <p className='p-bold'>Custom Work</p>
            <li><FcCheckmark /> 2 Concepts + premium scriptwriting</li>
            <li><FcCheckmark /> Storyboarding</li>
            <li><FcCheckmark /> Detail Illustrations</li>
            <li><FcCheckmark /> Professional Voice Over</li>
            <li><FcCheckmark /> Impressive Animation</li>
            <li><FcCheckmark /> Royalty free BG & SFX</li>
            <br></br>
                <p className='p-bold'>More Features</p>
                <li><FcCheckmark /> File Delivered in HD 1080p</li>
                <li><FcCheckmark /> Unlimited revisions</li>
                <li><FcCheckmark /> 6 weeks Deadline</li>
                <li><FcCheckmark /> Dedicated Project Manager</li>
                <li><FcCheckmark /> 100% satisfaction</li>
                <li><FcCheckmark /> 100% Ownership Rights</li>
                <li><FcCheckmark /> Source File</li>
            </ul>
            </div>
            </div>
            <br></br>
            <br></br>
            <Footer2 />
        </div>
  )
}
