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
export default function VideoAnimation() {
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
        <img src={require(`./images/logo-page-bg.jpg`)} className="logo-background-image2"/>
        <div className='row m-0'>
        <div className='column' style={{padding:'30px 50px'}}>
        <h1 className='img-heading' style={{color:'white'}}>Your Company’s Success Is Inevitable With The Best Explainer Videos</h1>
        <h2  style={{color:'white'}}>We create motion graphic videos with authority. SeoInsighterX is a place where the artistic freedom of the animators helps us achieve the impossible.</h2>
        <br></br>
        <br></br>
        <Link to='/step1'><button class="question-btn" style={{marginRight:'30px'}}>LET'S START</button></Link><span style={{color:'white',fontSize:'18px', marginRight:'30px'}}> LIVE CHAT </span> <span style={{color:'white',fontSize:'18px'}}> WATCH HOW IT WORKS </span>
        </div>
        <div className='column'>
        <br></br>
        <img src={require(`./images/clipart2.png`)} style={{width:'100%',height:'400px'}}/>
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
        <h3 style={{color:'white'}}>Enter the world of creativity and day adios to mainstream videos!</h3>
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
            <p>UNIQUE SELLING POINT</p>
            <h1>Making Your Brand Viral Through Breathtaking Vivid Video Animations Is Our USP</h1>
            <h5>We have animated hundreds of videos that stunned the online world. We have done it multiple times before, and we can definitely do it for you as well!</h5>
            <br></br>
            </div>
            <div>
            <div className='row m-0'>
    <div className='column'>
    <img src={require(`./images/v1.jpg`)}  style={{width:'100%',padding:'15px'}}/>
    </div>
    <div className='column'>
    <img src={require(`./images/ss1.png`)} className="small-logo-marketing"/>
    <h3>Skilled Animators</h3>
    <p>Animators at SeoInsighterX are dedicated to creating digital motion art for you!</p>
    <img src={require(`./images/ss2.png`)} className="small-logo-marketing"/>
    <h3>Niche videos</h3>
    <p>Our compelling animated films are tailored around the theme of relevant brands.</p>
    </div>
    <div className='column'>
    <img src={require(`./images/ss3.png`)} className="small-logo-marketing"/>
    <h3>Supreme Service</h3>
    <p>From creating the first pixel to rendering the last frame, we will keep you updated throughout the process.</p>
    <img src={require(`./images/ss4.png`)} className="small-logo-marketing"/>
    <h3>Hooking Storylines</h3>
    <p>We’ve aced the storyboard and script writing for explainer videos as we are pioneers of it.</p>
    </div>
    </div>
    </div>
    <div className='align-div'>
            <br></br>
            <br></br>
            <p>VIDEOS FOR BUSINESS</p>
            <h1>Give Your Business A Boost With The Power Of Animation!</h1>
            <h5>The ROI you get from video marketing is unparalleled. The popularity of video content has made it the new king of digital marketing. Our animated videos can help you reach your goal in no time!</h5>
            <br></br>

    </div>
    <br></br>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Best Explainer Videos</h1>
    <h5>Where words fail, animation delivers. We at SeoInsighterX have been offering such videos for over a decade now.</h5>
    <p>Animations are hooking and therefore are a great tool to gain the attention of prospects in the online world where the attention span is only a few seconds. We are known for creating videos that create a stir in the online marketplace.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v2.jpg`)} className="van"/>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v3.jpg`)} className="van"/>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Marketing Videos</h1>
    <h5>Digital Marketing infused with animated infographic videos is the way forward.</h5>
    <p>With the high ROI a brand gets through video marketing, it has become an essential marketing tool for every marketing campaign. Our animators are familiar with even the fine details that are required for a viral marketing video. Hire us now!</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Customer Service Videos</h1>
    <h5>Animated Videos are lead generating magnets.</h5>
    <p>Get one for your online business and beat your customers with traffic-hungry animated videos. Videos have the power to make your business look credible. Subscribe to our video animation services and hook every prospect in the online world.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v4.jpg`)} className="van"/>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v5.jpg`)} className="van"/>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Training Videos</h1>
    <h5>Animate to educate! Learning just got easier because of animated explainer videos.</h5>
    <p>For ages, pictures have been used to train people, and now with the rise of digital media, product animations have taken over to educate the masses about the features of newly launched services. Our created videos have the tendency to reach millions of potential prospects due to our imaginative approach towards animated videos.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Video Ads</h1>
    <h5>Add to your marketing KPIs through video ads!</h5>
    <p>Video ads boost the sales funnel; around one-third of the purchases are made after watching a video ad online. So what is stopping you from getting a crowd-pulling digital video ad? Choose from our versatile video packages and get yourself subscribed ASAP!</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v6.jpg`)} className="van"/>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/v7.jpg`)} className="van"/>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>VIDEO ANIMATION</p>
    <h1>Video Series</h1>
    <h5>Video content marketing is the best organic tool to expand your reach!</h5>
    <p>Advertising through animated video series has become a new trend in digital media. At SeoInsighterX, we have an entire team of scriptwriters, storyboard artists, and animators who can successfully pull off this feat. Let's get in touch and tell your side of the story to the world.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
    
    <div className='align-div'>
        <br></br>
        <br></br>
        <p>TYPES OF VIDEO ANIMATION</p>
        <h1>Our Video Animation Portfolio Is As Vast As The Milky Way!</h1>
        <h5>We are one of the pioneers of the animation industry. With years of experience, we have a team of professional animators who are capable of delivering every type of animated video.</h5>
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
            2D VIDEO ANIMATION
            <i className={`fa fa-caret-down ${openDropdown2 === 'HTML' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'HTML' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ VIDEO ANIMATION</p>
          <h2 className='bold-h2'>2d Animation</h2>
            <p>Animated videos with flat characters are called 2d and are the widely used format for explainer videos throughout the industry. The 2d style is perfect for brands that are looking to take full advantage of the video format. The simple design philosophy also adds to its benefits because the product gets the limelight due to flat characters.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>
        </div>
        <div class="column-3">
        <img src={require(`./images/v8.gif`)} className="gif"/>
        </div>
        
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'CMS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('CMS')}
          >
            3D ANIMATION
            <i className={`fa fa-caret-down ${openDropdown2 === 'CMS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'CMS' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ VIDEO ANIMATION</p>
          <h2 className='bold-h2'>3d Animation</h2>
            <p>3d animated videos are expensive as they are more difficult to create. However, the price has its own perks; the attention you get with a 3d video is beyond comparison. It will get a lot of views on social media platforms because people like to watch appealing video content, even if it's an ad.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-3">
        <img src={require(`./images/v9.gif`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('E-COMMERCE')}
          >
            WHITEBOARD ANIMATIONS
            <i className={`fa fa-caret-down ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'E-COMMERCE' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ VIDEO ANIMATION</p>
          <h2 className='bold-h2'>Whiteboard Animations</h2>
            <p>Whiteboard animations are a simple but unique way to educate the audience. When compared to 2d, 3d animation services, whiteboard videos are quite affordable, and many startups opt for them. They do an excellent job of easing down difficult processes through visual communication.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-3">
        <img src={require(`./images/v10.gif`)} className="gif"/>
        </div>
      </div>
          </div>
          
          </div>
          <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}
            onClick={() => handleDropdownClick2('BUSINESS PORTAL')}
          >
            EXPLAINER VIDEOS
            <i className={`fa fa-caret-down ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content-2 ${openDropdown2 === 'BUSINESS PORTAL' ? 'show' : ''}`}>
          <div class="row-2">
        
        <div class="menu-content-align-home-2">
          <p>~ VIDEO ANIMATION</p>
          <h2 className='bold-h2'>Typographic Videos</h2>
            <p>Typography videos are the easiest of the bunch but still effective to the core. Never underestimate the potential of typography because it can create an appeal if fused with motion graphics. SeoInsighterX offers highly engaging typography videos at a very affordable price. Click here for pricing.</p>
          <span>WANT TO DISCUSS?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-3">
        <img src={require(`./images/v11.gif`)} className="gif"/>
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
        <h1>Behold Of The Best Animated Videos You Have Ever Witnessed!</h1>
        <h5>Visual experience optimized! Our video portfolio has the potential to stun anyone who has a taste for digital art.</h5>
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
            2D GRAPHIC
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/v12.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/v13.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/v14.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v15.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v16.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/v17.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/v18.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/v19.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v20.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v21.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('LOGO ANIMATION')}
          >
            3D VIDEO
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/v22.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/v23.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/v24.jpg`)} className="logo-portfolio"/>
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
            className={`dropbtn-bar ${openDropdown === 'BRANDING' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BRANDING')}
          >
            WHITEBOARD
            <i className={`fa fa-caret-down ${openDropdown === 'BRANDING' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BRANDING' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/v25.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/v26.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/v27.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v28.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v29.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/v30.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/v31.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/v32.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v33.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/v34.jpg`)} className="logo-portfolio"/>  
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
        <h1>Let Us Take You To A Creative Ride Powered By Artistic Imagination!</h1>
        <h5>Making an animated video is no easy task; people of artistic nature are required to pull off a single video project.</h5>
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
          <h4>Can you make any type of animated video?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we can. The only thing that limits productivity are the creative minds, lucky we have plenty in our video marketing team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>What if your animated video doesn't meet my expectations?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you don't like the initial video, no worries, we will get it revised for you. However, the changes you require will depend upon your package.
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
            <h4>Will I own the complete rights of the video?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you will have the complete right over the video once it gets delivered.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How much time do you require to deliver the video?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Animating videos is no easy task; it requires both creativity and resilient effort. The turnaround time entirely depends on the length and complexity of the project.
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
          Client satisfaction is our foremost priority. Therefore our packages come with the option of revisions in case you are not pleased with the initial results.
          </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How much will I have to pay for an animated video?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It completely depends on the nature of the video, but you can get an animated video for as low as $150.          </Typography>
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
