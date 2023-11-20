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
export default function WebDesign() {
  const [inputValue, setInputValue] = useState('');
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
        <h1 className='img-heading' style={{color:'white'}}>Website Design Empowering Brands On Digital For A Decade!</h1>
        <h2  style={{color:'white'}}>SeoInsighterX is a web design agency that doesn't compromise when it comes to optimizing digital storefronts. Our designed websites are both appealing and secure as well.</h2>
        <br></br>
        <br></br>
        <Link to='/step1'><button class="question-btn" style={{marginRight:'30px'}}>LET'S START</button></Link><span style={{color:'white',fontSize:'18px', marginRight:'30px'}}> LIVE CHAT </span> <span style={{color:'white',fontSize:'18px'}}> WATCH HOW IT WORKS </span>
        </div>
        <div className='column'>
        <br></br>
        <img src={require(`./images/web-image.png`)} style={{width:'100%',height:'450px'}}/>
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
    <div style={{backgroundColor:'rgb(103 169 185)'}}>
        <div className='search-div'>
        <br></br>
        <br></br>
        <h3 style={{color:'white'}}>The closest you've ever been to your dream website!</h3>
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
            <p>SERVICES WE PROVIDE</p>
            <h1>Reach The Corners Of Digital Media Through An Intriguing Website Design</h1>
            <h5>Website design and development just a click away! SeoInsighterX helps empower your brand by creating functional web pages. Hire us now and increase your digital presence.</h5>
            <br></br>
            </div>
            <div>
            <div className='row m-0'>
    <div className='column'>
    <img src={require(`./images/creativ.jpg`)} style={{width:'100%',padding:'15px'}}/>
    </div>
    <div className='column'>
    <img src={require(`./images/mm1.png`)} className="small-logo-marketing"/>
    <h3>Smooth Browsing Experience</h3>
    <p>A simple design layout and a smooth user experience are the USP of our website design service.</p>
    <br></br>
    <img src={require(`./images/mm2.png`)} className="small-logo-marketing"/>
    <h3>Responsive Designs</h3>
    <p>Our designed web pages have fast response times and eye-popping visuals.</p>
    </div>
    <div className='column'>
    <img src={require(`./images/mm3.png`)} className="small-logo-marketing"/>
    <h3>Customizable Designs</h3>
    <p>Websites we design are custom-tailored around the company. Moreover, you can get any feature you want to be integrated into your website.</p>
    <img src={require(`./images/mm4.png`)} className="small-logo-marketing"/>
    <h3>Safe & Secure</h3>
    <p>With our secure backends, your website will remain safe from every kind of cyberthreat.</p>
    </div>
    </div>
    </div>
    <div className='align-div'>
            <br></br>
            <br></br>
            <p>SERVICES WE PROVIDE</p>
            <h1>Powered By Digital Designs And Inspired By Consumer Behavior!</h1>
            <h5>Web developers at SeoInsighterXs are fluent in creativity. Our created websites are known to make a difference.</h5>
            <br></br>

    </div>
    <br></br>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>WORDPRESS TEMPLATE</p>
    <h1>Get Ten Times More Traffic With Our Designed Wordpress Website</h1>
    <h5>WordPress is the most popular content management system (CMS) that is easy to use and feature-rich at the same time.</h5>
    <p>The user-friendly nature of WordPress is the reason why the developers at SeoInsighterX focus on it. With multiple plugins and design layouts to choose from, WordPress websites are considered as lead generating machines.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/chicago.jpg`)} className="chicago"/>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/grilling.jpg`)} className="chicago"/>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>CUSTOM DESIGN</p>
    <h1>HTML Websites For A Robust Digital Presence</h1>
    <h5>Our web developers are capable of installing multiple custom features to a website layout through the power of HTML.</h5>
    <p>HTML is the language of modern web design. Only through HTML it is possible for our developers to incorporate the latest features to the layout of a web page. With the versatility of HTML, coupled with the dedication of our web developers, SeoInsighterX has been able to pull off some website masterpieces that have left a mark on digital media. With our unique approach toward web design aesthetics, we are able to build multiple digital stations for online businesses.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    
    <div className='align-div'>
        <br></br>
        <br></br>
        <p>WEBSITE TYPES</p>
        <h1>SeoInsighterX Is Fully Equipped To Design Every Type Of Website</h1>
        <h5>No matter what type of website it is, we are fully capable of delivering digital excellence to your business. Our Creative team is full of unique website design ideas.</h5>
        <br></br>
        <br></br>
    </div>

    <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'HTML' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('HTML')}
          >
            HTML
            <i className={`fa fa-caret-down ${openDropdown2 === 'HTML' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'HTML' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ HTML WEBSITE</p>
          <h2 className='bold-h2'>HTML Website</h2>
          <h5>Employ The True Potential Of Modern Web Development!</h5>
            <p>Say no to website design templates and get yourself an HTML powered website and stay ahead of the competition. Our designed websites are surety bonds to success. No matter how appealing your website layout, it is no match in front for the versatility of a custom HTML web design. HTML is a language that speaks of the future; the multiple feature options you get are simply unbeatable. Stand out of the crowd and reach out to us now!</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>
        </div>
        <div class="column-2">
        <img src={require(`./images/ck.png`)} className="menu-img-png"/>
        </div>
        
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'CMS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('CMS')}
          >
            CMS
            <i className={`fa fa-caret-down ${openDropdown2 === 'CMS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'CMS' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ CMS WEBSITE</p>
          <h2 className='bold-h2'>CMS Website</h2>
          <h5>Manage Your Web Content In Style!</h5>
            <p>The time has come to take the content management of your website seriously because it can either break or make your reach. Now take control of your website layout into your own hands! Our CMS development team is light years ahead of the competitors. We have developed hundreds of websites with appealing UX/UI design and content management that complements the entire design layout. So what are you waiting for? Call us now, and get your brand a robust CMS powered website.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/tiger.png`)} className="menu-img-png"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('E-COMMERCE')}
          >
            E-COMMERCE
            <i className={`fa fa-caret-down ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ E-COMMERCE</p>
          <h2 className='bold-h2'>E-Commerce Website</h2>
          <h5>Sell, Excel And Dwell In The Digital Landscape!</h5>
            <p>Set up a shop in the digital bazaar and sell your products to the entire world. A functional E-commerce website is crucial for every online vendor. At SeoInsighterX, we will develop a website for you with a mix of aesthetic design layout, a smooth billing process, and a secure backend so that you can emerge as a credible online seller. Hire us if you want to provide your customers with a pleasant and hassle-free online shopping experience because we are well-versed in designing personalized online stores according to your demand!</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/farmer.png`)} className="menu-img-png"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('BUSINESS PORTAL')}
          >
            BUSINESS PORTAL
            <i className={`fa fa-caret-down ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ PORTAL TEMPLATE</p>
          <h2 className='bold-h2'>Web Portal</h2>
          <h5>A Digital Space Developed Just For You!</h5>
            <p>Our specially customized web portals are backed by years of professional experience. Our developers design with authority and logic. Therefore, SeoInsighterX has always delivered brilliant business web portals custom-tailored around the needs of the clients. Our web developers are the digital architects who have mastered the art of UX/UI design aesthetics over the years of practice. Hire us, and we will provide you with a fully functioning web portal that will elevate your digital presence and attract the traffic your business needs in order to grow.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/vw.png`)} className="menu-img-png"/>
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
        <h1>Are You Ready To Witness The Pinnacle Of Website Design?</h1>
        <h5>Our web design portfolio is second to none. For over a decade, SeoInsighterX has given some traffic-hungry web stations to the digital world.</h5>
        <br></br>
        <br></br>
    </div>  
            
            <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('LOGO DESIGN')}
          >
            HTML
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/purple.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/grey.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/homepress.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/urogu.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/mens.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/yellow.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/olive.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/kinds.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/puppy.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/pink.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('LOGO ANIMATION')}
          >
            E-COMMERCE
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/body.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/sale.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/ad.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/amt.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BRANDING' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BRANDING')}
          >
            CMS
            <i className={`fa fa-caret-down ${openDropdown === 'BRANDING' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BRANDING' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/c1.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/c2.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/c3.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c4.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c5.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/c6.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/c7.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/c8.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c9.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c10.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>  
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BUSINESS CARD')}
          >
            PORTAL WEBSITE
            <i className={`fa fa-caret-down ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/po1.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/po2.jpg`)} className="logo-portfolio"/>    
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
        <br></br>
        <iframe width="60%" height="450" src="https://www.youtube.com/embed/9SHXTC3SZ4o?si=M78u9v0YN9Pm5843" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <br></br>
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
          <h4>What are the types of websites that you are offering?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our competent in-house team of web developers is capable of designing every type of website you may require. We have designed multiple e-commerce websites, CMS websites, custom HTML websites, and business portals for our clients up till now.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Is your web design service pocket-friendly?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our offerings are for everyone who wants a robust digital presence. Our low price and high-quality web design services have earned us a reputable position in the industry.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Is your work unique?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our work is 100% unique and original. We don't take inspiration because we believe in becoming one.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Do you offer e-commerce websites?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we surely do. The performance of our designed E-commerce platforms has exceeded even the expectations of our clients.  
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
          <h4>How do your designed websites perform?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our designed websites are responsive, optimized, and developed around the niche of the client's business. Our UI/UX designers create websites that are capable of outperforming the competition. 
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Who owns the right to the hosting and creative assets of the developed website?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We empower our clients by giving them the copyrights to each and everything designed in the process.          </Typography>
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
