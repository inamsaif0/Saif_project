import React, { useState, useEffect } from 'react';
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer2 from './Footer2';
export default function MobileApp() {
  const [inputValue, setInputValue] = useState('');
  const [openDropdown, setOpenDropdown] = useState('ALL');
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
  const [openDropdown2, setOpenDropdown2] = useState('FOOD APP');
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



    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      const images = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
      ];
    return (
    <div>
        <Navigationbar />
        <div>
        <img src={require(`./images/logo-page-bg.jpg`)} className="logo-background-image"/>
        <div className='row m-0'>
        <div className='column' style={{padding:'30px 50px'}}>
        <h1 className='img-heading' style={{color:'white'}}>Innovative Mobile Application Development</h1>
        <h2  style={{color:'white'}}>Hire us, and your mobile application will top the charts for months to come.</h2>
        <br></br>
        <br></br>
        <a href='#start'><button class="question-btn" style={{marginRight:'30px'}}>LET'S START</button></a><span style={{color:'white',fontSize:'18px', marginRight:'30px'}}> LIVE CHAT </span> <span style={{color:'white',fontSize:'18px'}}> WATCH HOW IT WORKS </span>
        </div>
        <div className='column'>
        <br></br>
        <img src={require(`./images/mobile-main.png`)} style={{width:'100%',height:'400px'}}/>
        </div>       
        </div>
        
        </div>
        <br></br>
        
        <div>
        <div className="carousel-container2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={require(`./images/${image}`)} alt={`Image ${index + 1}`} style={{height:'60px', width:'12rem'}}/>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    <div style={{backgroundColor:'rgb(103 169 185)'}} id='start'>
        <div className='search-div'>
        <br></br>
        <br></br>
        <h3 style={{color:'white'}}>Mobility and ease of communication through our mobile application development services now just a click away.</h3>
        <br></br>
        <span><input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='ENTER YOUR BUSINESS NAME' className='input-question'></input>
        <Link to={`/step1?data=${inputValue}`}><button class="search-btn-2">LET'S START</button></Link>
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    </div>
    <div className='align-div'>
            <br></br>
            <br></br>
            <p>CREATIVE APP DESIGNS</p>
            <h1>We Are Dedicated To Providing You With Intriguing And Irresistible App Designs</h1>
            <h5>At SeoInsighterX, we are home to some innovative app developers capable of creating an app with powerful visual and smooth functionality.</h5>
            <br></br>
            </div>
            <div>
            <div className='row m-0'>
    <div className='column'>
    <img src={require(`./images/m1.jpg`)}  style={{width:'100%',padding:'15px'}}/>
    </div>
    <div className='column'>
    <img src={require(`./images/mm1.png`)} className="small-logo-marketing"/>
    <h3>UI/UX Design</h3>
    <p>Smooth and functional design layouts are the salient features of our developed apps.</p>
    <img src={require(`./images/mm2.png`)} className="small-logo-marketing"/>
    <h3>Hybrid App</h3>
    <p>Our apps are optimized for every electronic screen. Smooth functionality no matter where you use it.</p>
    </div>
    <div className='column'>
    <img src={require(`./images/cc1.png`)} className="small-logo-marketing"/>
    <h3>Innovative Design</h3>
    <p>Innovation is the tool that has kept us leading the industry for over a decade now.</p>
    <img src={require(`./images/quality.png`)} className="small-logo-marketing"/>
    <h3>Quality apps</h3>
    <p>Our apps are packed with features and visual aesthetics that keep them at the top.</p>
    </div>
    </div>
    </div>
    <div className='align-div'>
            <br></br>
            <br></br>
            <p>WHAT WE MAKE</p>
            <h1>We Design Mobile Apps With A Goal To Attain Perfection</h1>
            <h5>Only the apps with functionality have a chance to end up on the mobile phones of the end-users. Our master app developers will aesthetically fine-tune your apps so they can earn that spot.</h5>
            <br></br>

    </div>
    <br></br>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>IOS APP</p>
    <h1>A Prominent IOS App Development Agency</h1>
    <h5>Our iOS app design creators know the master art of crafting beautiful iOS apps</h5>
    <p>The iPhone consumer base doesn't compromise in the usability of the app interface, and at the same time, wants the visuals to be on point. Our developers are aware of the taste of Apple users and exactly know how to satisfy their visual needs.</p>
    <span>WANT TO DISCUSS? </span><a href='#start'><button class="question-btn">LET'S START</button></a>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/m2.jpg`)} className="map"/>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/m3.jpg`)} className="map"/>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>ANDROID APP</p>
    <h1>Android Apps Tailored Around Your Needs</h1>
    <h5>Our android app developers are focused in developing spectacular android app designs</h5>
    <p>SeoInsighterX is the most reliable android app development agency with hundreds of clients to its name. We have come so far in the mobile application industry due to our sheer commitment to work and our unbeatable understanding of how the app design functions.</p>
    <span>WANT TO DISCUSS? </span><a href='#start'><button class="question-btn">LET'S START</button></a>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    
    <div className='align-div'>
        <br></br>
        <br></br>
        <p>TYPES OF MOBILE APP</p>
        <h1>We Are A Mobile Application Development Company That Offers It All!</h1>
        <h5>SeoInsighterX has excelled at every niche and has provided its clients with the best looking and functioning apps, packed with modern features.</h5>
        <br></br>
        <br></br>
    </div>

    <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'FOOD APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('FOOD APP')}
          >
            FOOD APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'FOOD APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'FOOD APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>Food App</h2>
            <p>Food looks more tempting when displayed in a more appealing manner. We have designed hundreds of food applications that have been cherished by Android and iOS users alike! SeoInsighterX is home to multiple expert developers who have delivered some popular mobile applications to the digital food industry.</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>
        </div>
        <div class="column-3">
        <img src={require(`./images/m4.png`)} className="gif"/>
        </div>
        
      </div>
          </div>
          
          </div>

          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'E-COMMERCE APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('E-COMMERCE APP')}
          >
            E-COMMERCE APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'E-COMMERCE APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'E-COMMERCE APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>E-Commerce App</h2>
            <p>For all the online vendors e-commerce mobile applications have become crucial because 80% of the traffic comes from cell phones. E-commerce apps can boost the sales funnel if it is equipped with the latest set of features. Hire us because this is what we excel at!</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>

        </div>
        <div class="column-3">
        <img src={require(`./images/m5.png`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'BOOKING APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('BOOKING APP')}
          >
            BOOKING APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'BOOKING APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'BOOKING APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>Booking App</h2>
            <p>The world is going digital; people like doing everything from the comfort of their homes. Be it booking a hotel, car, airplane tickets, or any other rental service; people like to use apps for the purpose. We have designed functional booking apps by integrating simple design layouts with intriguing UX designs. Hire us, and get one for your business.</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>

        </div>
        <div class="column-3">
        <img src={require(`./images/m6.png`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'PLAYER APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('PLAYER APP')}
          >
            PLAYER APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'PLAYER APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'PLAYER APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>Player App</h2>
            <p>We have the perfect idea for your next player app! Our ideas are limitless, just like the opportunities that an app provides to your business. Get in touch with us, and our team will design an app for you filled with exciting features that will keep your audience engaged, updated, and logged in.</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>

        </div>
        <div class="column-3">
        <img src={require(`./images/m7.png`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>

          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'PORTAL APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('PORTAL APP')}
          >
            PORTAL APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'PORTAL APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'PORTAL APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>Portal App</h2>
            <p>Our app developers have a firm grip over portal app development design. We have provided companies with functional portal apps for daily employee usage. Our designed apps are developed to ease day-to-day operations and are best for practical usage of tech devices used in organizations.</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>

        </div>
        <div class="column-3">
        <img src={require(`./images/m8.png`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'STATS APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('STATS APP')}
          >
            STATS APP
            <i className={`fa fa-caret-down ${openDropdown2 === 'STATS APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'STATS APP' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ MOBILE APP</p>
          <h2 className='bold-h2'>Stats App</h2>
            <p>Businesses that deal with numbers need to have a stats app. It is essential to boost the productivity of the workplace. Be it tracking, billing, or buying process, stats app will put your company at ease. Hire us now, and get yourself a functional and feature-rich app at a low price.</p>
          <span>WANT TO DISCUSS?  </span><a href='#start'><button class="question-btn">LET'S START</button></a>

        </div>
        <div class="column-3">
        <img src={require(`./images/m9.png`)} className="gif"/>
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
          
        

    
  
<div className='align-div'>
        <br></br>
        <br></br>
        <p>OUR AWESOME WORK</p>
        <h1>Get Ready To Witness The Most Superior Mobile Applications To Ever Exist!</h1>
        <h5>We design everything with a sole goal: to provide an optimum experience to the end user. Our developed apps have excelled and delivered remarkable results for our clients.</h5>
        <br></br>
        <br></br>
    </div>  
            
            <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'ALL' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('ALL')}
          >
            ALL
            <i className={`fa fa-caret-down ${openDropdown === 'ALL' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'ALL' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m10.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m11.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/m12.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/m13.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/m14.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/m15.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m16.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/m17.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/m18.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/m19.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'FOOD APP' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('FOOD APP')}
          >
            FOOD APP
            <i className={`fa fa-caret-down ${openDropdown === 'FOOD APP' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'FOOD APP' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m10.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/m13.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m16.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>

        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'E-COMM' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('E-COMM')}
          >
            E-COMMERCE APP
            <i className={`fa fa-caret-down ${openDropdown === 'E-COMM' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'E-COMM' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m16.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/m11.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m20.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BOOK' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BOOK')}
          >
            BOOKING APP
            <i className={`fa fa-caret-down ${openDropdown === 'BOOK' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BOOK' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m21.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/m18.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m15.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m23.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/m24.jpg`)} className="logo-portfolio"/>
                </div>
            </div>
            <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m25.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/m21.jpg`)} className="logo-portfolio"/>
                </div>
                
                <div className='column'>

                </div>
                <div className='column'>

                </div>
                <div className='column'>

                </div>
                </div>
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'PORTAL' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('PORTAL')}
          >
            PORTAL APP
            <i className={`fa fa-caret-down ${openDropdown === 'PORTAL' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'PORTAL' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m26.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/m14.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'PLAYER' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('PLAYER')}
          >
            PLAYER APP
            <i className={`fa fa-caret-down ${openDropdown === 'PLAYER' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'PLAYER' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m12.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>

        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'STATS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('STATS')}
          >
            STATS APP
            <i className={`fa fa-caret-down ${openDropdown === 'STATS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'STATS' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/m17.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>
        
        
        
      </div>
      
    


            </div>
            <div style={{marginTop:'42%'}}>
            <div style={{textAlign:'center'}}>
              <Link to='/portfolio'><button class="portfolio">VISIT OUR PORTFOLIO</button></Link>
            </div>
            <br></br>
            <br></br>
            <div style={{backgroundColor:'rgb(103, 155, 212)',textAlign:'center',color:'white'}}>
  <br></br>
  <h1>Pocket-Friendly Design. Just A Click Away!</h1>
  <br></br>
  <Link to='/pricing'><button class="portfolio">POCKET PLANS</button></Link>
  <br></br>
  <br></br>

</div>

<div className='align-div'>
        <br></br>
        <br></br>
        <p>OUR CREATIVE PROCESS</p>
        <h1>At SeoInsighterX We Make Magic Happen!</h1>
        <h5>Our digital agency is optimized for producing exceptional end-results. We conquer each phase of the project and ensure that we deliver the best quality work possible.</h5>
          <br></br>
          </div>
    
    <br></br>
    <div className='logo-main' style={{textAlign:'center'}}>
<button className='logo-btnt'><img src={require(`./images/5.png`)} className='logo-btn-img'/><br></br><h3>Initial Phase</h3>
<p>We listen to our clients to get the initial idea of the project. Then our creative teams join their head and polish it into a shining diamond.</p>
</button>
<button className='logo-btnt'><img src={require(`./images/6.png`)} className='logo-btn-img'/><br></br><h3>Execution</h3>
<p>We are equipped with skilled people and state-of-the-art rendering machines. Coming up with brilliant products is our habit.</p>
</button>
<button className='logo-btnt'><img src={require(`./images/7.png`)} className='logo-btn-img'/><br></br><h3>Delivery</h3>
<p>On-time delivery is our best service. Our healthy work environment ensures that you get your project handed over to you ASAP.</p>
</button>

</div>

<div style={{textAlign:'center'}}>
<br></br>
<br></br>
  <p>TESTIMONIALS</p>
  <h1>Our Services Are Cherished By All!</h1>
  <h4>We have served hundreds of brands, and look at what they have to say for us:</h4>
  <br></br>
  <button className='logo-btn2'><br></br>
<p>" I am thankful to SeoInsighterX for providing a pleasant experience with promoting our brand on social media platforms. SeoInsighterX is go-to digital solution agency for all services."</p>
<img src={require(`./images/p1.jpg`)} className='logo-btn-img2'/>
<h3>Carlos Leanard</h3>
<p><i>Brand Manager</i></p>
</button>
<button className='logo-btn2'><br></br>
<p>" I have been availing graphic design services from SeoInsighterX for a long time. I must say that I am not only impressed but inspired by the way they serve the clients. They are just too good! "</p>
<img src={require(`./images/p2.jpg`)} className='logo-btn-img2'/>
<h3>Amanda Kristen</h3>
<p><i>CEO</i></p>
</button>
<button className='logo-btn2'><br></br>
<p>" The team at SeoInsighterX surprises you with their work. My digital campaigns have never been better. I would definitely recommend SeoInsighterX to businesses that look for a dynamic digital agency."</p>
<img src={require(`./images/p3.jpg`)} className='logo-btn-img2'/>
<h3>Tanya Shawn</h3>
<p><i>Startup Owner</i></p>
</button>
<br></br>
<button className='logo-btn2'><br></br>
<p>" Great digital agency with excellent services. I got my blog content written from them and their work has made me more than happy. I am definitely coming back here for availing more services."</p>
<img src={require(`./images/p4.jpg`)} className='logo-btn-img2'/>
<h3>Amit Tundrikar</h3>
<p><i>Digital Marketer</i></p>
</button>
<button className='logo-btn2'><br></br>
<p>" I was struggling with the ROI of my digital marketing campaigns when I came to SeoInsighterX. Their SEO strategy has helped my rankings and conversions improve over the time."</p>
<img src={require(`./images/p5.jpg`)} className='logo-btn-img2'/>
<h3>Edmund Rowan</h3>
<p><i>Brand Manager</i></p>
</button>
<button className='logo-btn2'><br></br>
<p>" Brilliant service! SeoInsighterX are the masters at designing, whether it is post content or logo design. I have always admired their creative and out of the box ideas."</p>
<img src={require(`./images/p6.jpg`)} className='logo-btn-img2'/>
<h3>Sophie Harper</h3>
<p><i>Marketing Specialist</i></p>
</button>
<br></br>
<br></br>
<br></br>
</div>
<div className='align-div'>
    <p>FAQ'S</p>
    <h1>Frequently Asked Questions</h1>
    <h5>We have summed up every query that clients mostly have, but you can always get in touch if you have something else to ask.</h5>
    <br></br>
    <br></br>
    <div>
      <Accordion >
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>Can you design all types of mobile applications?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are a group of digital experts who are ready for every challenge. We designed various applications for food bloggers, e-commerce stores, booking services, online portals, and stats providing organizations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>What if i don't like the outcome?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Client satisfaction is a way to measure the effectiveness of our services. Our packages come with the option of revision in case you are not satisfied with the initial outcome.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Who will own the rights to the app developed?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Clients own the right to every creative asset that the package offers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How long will it take you to develop the app?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Developing an app requires time and patience. The turnaround time will depend on the complexity of the project.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Do you guarantee satisfaction?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Satisfaction comes free with every package we offer. If you are not pleased with the delivered creatives, you can always get them tweaked according to your package.
          </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How much will it cost me?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Every project is different and is priced accordingly. For further assistance, contact us now and get accurate estimates.
            </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
</div>
<br></br>
            <Footer2 />
            </div>
    </div>
  )
}
