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
import Dropmenu from './Dropmenu';
import Footer2 from './Footer2';
export default function Logo() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    // Function to close the dropdown when clicking outside
    const closeDropdown = (e) => {
      if (!e.target.matches('.dropbtn')) {
        setDropdownVisible(false);
      }
    };
  
    // Add an event listener to the window to close the dropdown
    useEffect(() => {
      window.addEventListener('click', closeDropdown);
      return () => {
        window.removeEventListener('click', closeDropdown);
      };
    }, []);
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
        <h1 className='img-heading' style={{color:'white'}}>Masterminds Of Digital Design</h1>
        <h2  style={{color:'white'}}>Unique and hooking custom logo design services just a click away! Our competitors can neither beat our design sense nor our price</h2>
        <br></br>
        <br></br>
        <Link to='/step1'><button class="question-btn" style={{marginRight:'30px'}}>LET'S START</button></Link><span style={{color:'white',fontSize:'18px', marginRight:'30px'}}> LIVE CHAT </span> <span style={{color:'white',fontSize:'18px'}}> WATCH HOW IT WORKS </span>
        </div>
        <div className='column'>
        <br></br>
        <img src={require(`./images/logo-main.png`)} style={{width:'100%'}}/>
        </div>
        </div>
        </div>
        <br></br>
        <br></br>
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
        <h3 style={{color:'white'}}>The first step to your branding success!</h3>
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
            <p>OUR UNIQUE SELLING POINT</p>
            <h1>Our Modern Logo Design And Branding Designs Are The Standards For Digital.</h1>
            <h5>SeoInsighterX offers the best logo design services that reinforce the authority of your brand identity design. So call us now and choose from the variety of logo design and branding packages.</h5>
            <br></br>
            </div>
            <div>
            <div className='row m-0'>
    <div className='column'>
    <img src={require(`./images/creativ.jpg`)} style={{width:'100%',padding:'15px'}}/>
    </div>
    <div className='column'>
    <img src={require(`./images/cc1.png`)} className="small-logo-marketing"/>
    <h3>Creativity</h3>
    <p>Mediocrity is an alien concept to us. We only deliver exceptional brand development services.</p>
    <img src={require(`./images/affordable.png`)} className="small-logo-marketing"/>
    <h3>Pocket Friendly</h3>
    <p>There is no place for generic and low quality work on digital; therefore, while building a brand, meeting the industry standard is our main focus.</p>
    </div>
    <div className='column'>
    <img src={require(`./images/quality.png`)} className="small-logo-marketing"/>
    <h3>Focused Quality</h3>
    <p>Quality branding strategies were never this pocket-friendly before. Logo design cost that you can afford!</p>
    <img src={require(`./images/cc4.png`)} className="small-logo-marketing"/>
    <h3>Support</h3>
    <p>From the beginning till the very end, we will have your back. During each phase of rebranding, our customer support team will be there to guide you.</p>
    </div>
    </div>
    </div>
    <div className='align-div'>
            <br></br>
            <br></br>
            <p>SERVICES WE PROVIDE</p>
            <h1>Designing Is An Art, And We Are The Artists</h1>
            <h5>We have designed different types of logos for different niches custom-tailored around their specific nature of business. From a startup to a multinational, SeoInsighterX has served them all.</h5>
            <br></br>

    </div>
    <div style={{textAlign:'center'}}>
    <br></br>
    <br></br>
    <p>DIGITAL MARKETING</p>
    <h1>Digital Media Is The New Big Thing You Need To Consider For Your Marketing Needs</h1>
    <h5>It's now or never; the digital media is taking over pretty fast. Keep up the world and invest in digital marketing for a secure future.</h5>
    </div>
    <br></br>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p id="logodesign">LOGO DESIGN</p>
    <h1>What Sets Our Logo Design Services Apart?</h1>
    <h5>We design logos because of our passion for making a difference.</h5>
    <p>We've helped leading names in the industry, and our mission is to drive innovation in the digital space. A good logo design sets the mind of your customers regarding your company. Our logo design team of artists and marketing strategists know how important a logo's colors, sound, and visual identity are for a company. We are considered the best place for designing flawless logos, and our in-depth analysis combined with years of experience is the sole reason why we excel at it.</p>
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
    <p>BRANDING</p>
    <h1>Branding Services That Evoke Emotions</h1>
    <h5>Brand personas that will resonate with the audience on a personal level.</h5>
    <p>Our out of the box thinking has made us stand tall from the competition. Our strategic planners follow the brand identity guidelines to achieve excellence in the design industry. Our team of professional designers, marketers, and brand specialists has been serving the online fraternity for over a decade now. If you are confused about how to build a brand, don’t be; call us, and we will do all the creative work for you!</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    
    <div className='align-div'>
        <br></br>
        <br></br>
        <p>UNIQUE LOGO TYPES</p>
        <h1>We Are The Design Allrounders!</h1>
        <h5>We design logos that express the real essence of your company vision. Our niche-focused design practices have made us the industry leader.</h5>
        <br></br>
        <br></br>
    </div>


    <div class="navbar-2" style={{textAlign:'center'}}>
  <div class="dropdown-2">
    <button class="dropbtn-2">WORD MARK LOGO
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ LOGO DESIGN & BRANDING</p>
          <h2 className='bold-h2'>Wordmark Logo</h2>
            <p>A wordmark logo may look simple but creating an appealing one is far from it. Only professional graphic designers have the art to turn your company initial into a piece of digital art. Luckily, we have plenty of them at SeoInsighterX. Our design team is full of creative ideas and has mastered hundreds of wordmark logos that have left an everlasting mark on the masses. Hire us now and get the logo design of your dreams.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>
        </div>
        <div class="column-2">
        <img src={require(`./images/ck.png`)} className="menu-img-png"/>
        </div>
        
      </div>
    </div>
  </div>
  
  <div class="dropdown-2">
    <button class="dropbtn-2">ABSTRACT LOGO
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ LOGOS WITH PICTURES</p>
          <h2 className='bold-h2'>Abstract Logo</h2>
            <p>Do you want your logo design to be symbolic? If yes, then SeoInsighterX can help you achieve your goal. Abstract logos are all about narrating your company vision through a symbolic picture. Some of our best logo designs are abstract because it is the best subtle way to express your brand persona. SeoInsighterX is the perfect agency for the digital vendors that are interested in getting a logo that represents the values they offer.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/tiger.png`)} className="menu-img-png"/>
        </div>
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">ILLUSTRATIVE LOGO
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
        
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ LOGOS THAT HAVE VARIOUS ILLUSTRATIONS</p>
          <h2 className='bold-h2'>Illustrative Logo</h2>
            <p>Illustrative logos tell your brand story through the relevant characters that resonate with your brand philosophy. Digital businesses opt for these logos designs as they are currently trending. The modern illustrative logo designs are one of the best ways to define your brand identity; therefore, it is quite popular with startup companies that are looking to establish their brand image. Hire us now and get the best illustrative logo designs at the most affordable price.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/farmer.png`)} className="menu-img-png"/>
        </div>
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">EMBLEM LOGO
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ LOGOS THAT HAVE FONTS AND PICTURES</p>
          <h2 className='bold-h2'>Emblem Logo</h2>
            <p>Go traditional in the modern era with an emblem logo design! We can help you as we are firmly attached to the roots of vintage design aesthetics. SeoInsighterX has been serving digital-based brands for over a decade now and is well-versed in designing emblem logos as they require years of experience because of their complex nature. Create a monogram logo for your brand and stamp it over the digital world! Hire us now and stun your competitors.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/vw.png`)} className="menu-img-png"/>
        </div>
      </div>
    </div>
      
  </div>
</div>
<div className='align-div'>
        <br></br>
        <br></br>
        <p>OUR AWESOME WORK</p>
        <h1>Logo Design & Branding That Will Steal Your Heart!</h1>
        <h5>Our designs are a treat for the eyes! Brace yourself and get ready to be stunned for you are about to witness digital excellence!</h5>
        <br></br>
        <br></br>
    </div>  
            <div>
            <Dropmenu />
            </div>
            <div style={{marginTop:'40%'}}>
            <div style={{textAlign:'center'}}>
              <Link to='/portfolio'><button class="portfolio">VISIT OUR PORTFOLIO</button></Link>
            </div>
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
        <h5>Our digital agency is optimized for producing exceptional end-results.
We conquer each phase of the project and ensure that
we deliver the best quality work possible.</h5>
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
<br></br>
<br></br>
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
          <h4>Do you have the experience of developing logos for different niches?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we do. SeoInsighterX has worked with various clients of all levels. From startups to multinationals, we have designed stunning logo designs for everyone.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Are you capable of designing multiple types of logo design?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are a hub of creative visionaries who see a single idea from multiple angles. Not only can we design every single type of logo design, we also ace it by adding a touch of our own creativity.
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
            <h4>What if the printed version of the logo looks different than the online version?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are design professionals who have a command of color themes. We only select the CMYK color model while designing the logos that are to be printed. So you get what you see on the screen.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Who owns the rights to the creative assets?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Obviously, you do. You have paid for the services; hence, you are the rightful owner of every file we create.
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
          <h4>How much do you charge for a log?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The price totally depends on creative requirements. As an estimate, it will cost you anywhere between $39 to $45.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Does your package include revisions?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, it does include revisions depending upon the package you subscribe for. We measure our success through our clients' satisfaction, and we don't compromise on that.
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
