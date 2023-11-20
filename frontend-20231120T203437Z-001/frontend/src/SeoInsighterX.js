import React, { useState } from 'react';
import Navigationbar from './Navigationbar';
import './App.css';
import Carousel from './Carousel';
import AutoplaySlider from './AutoplaySlider';
import ReverseAutoplaySlider from './ReverseAutoplaySlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
<meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
</head>

export default function SeoInsighterX() {
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
        <Navigationbar />
    
    <div style={{marginTop:'0', textAlign:'center'}} >
        <div className="video-background">
          
    <video autoPlay loop muted>
      
    <source src={require('./videobg-new.mp4')} type="video/mp4" />
    
</video>

<div className="centered-text">
        <h1 className="text-h1">Welcome To The Digital Paradise Where Creativity Is Served For All!</h1>
        <p className="text-p">Your Business Needs Unique Branding For Digital Recognition.</p>
        {/* <SearchBar /> */}
        <div class="search-container">
        <span>
        <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder='ENTER YOUR BUSINESS NAME HERE...' 
        className='input-question'>
        </input>
        <Link to={`/step1?data=${inputValue}`}>
        <button className='search-btn-2'>Submit</button>
      </Link></span>
  </div>
  <br></br>
  <hr></hr>
  <h6><i>Our Awesome Work Is Below</i></h6>
  <br></br>
  <br></br>
  <br></br>
      </div>
      < Carousel />
</div>

    </div>
    
    <div style={{backgroundColor:'', marginTop:'-4.3rem'}}>
      <div className="three-column-container">
      <div className="column">
        <p>HOW WE DO</p>
        <h1 className='h1-clr'>Digitally Focused Quality Design Services</h1>
        <p>SeoInsighterX helps you create an everlasting impact on digital, we make sure your presence is felt at every digital platform.</p>
        <Link to='/about'><button class="question-btn">ABOUT US</button></Link>
      </div>
      <div className="column">
      <img src={require(`./images/experience.png`)} className="small-logo-marketing"/>
        <h1  className='h1-clr'>Quality Services</h1>
        <p>We never compromise on the uniqueness of our services. We are known to stand apart from the rest, and our quality is the reason for our supremacy in the digital industry.</p>
        <Link to='/about'><button class="question-btn">DISCOVER MORE</button></Link>
        <br></br>
        <br></br>
        <img src={require(`./images/affordable.png`)} className="small-logo-marketing"/>
        <h1 className='h1-clr'>ROI Focused</h1>
        <p>Our creative approach towards digital services guarantees ROI beyond comprehension to boost the digital sale funnel.</p>
        <Link to='/about'><button class="question-btn">DISCOVER MORE</button></Link>
      </div>
      <div className="column">
      <img src={require(`./images/teamcoll.png`)} className="small-logo-marketing"/>
        <h1 className='h1-clr'>Team Collaboration</h1>
        <p>Digital branding is not a one-person job; instead. It requires the collaboration of multiple talented creative individuals. Thankfully, we have plenty in our agency.</p>
        <Link to='/about'><button class="question-btn">DISCOVER MORE</button></Link>
        <br></br>
        <br></br>
        <img src={require(`./images/time.png`)} className="small-logo-marketing"/>
        <h1 className='h1-clr'>Quick Delivery</h1>
        <p>Our professional environment is enriched with hardworking individuals, enabling us to nail every project in very short times.</p>
        <Link to='/about'><button class="question-btn">DISCOVER MORE</button></Link>
      </div>
      </div>
      <br></br>
      <div style={{textAlign:'center'}}>
        <p>OUR AWESOME WORK</p>
        <h1 className='h1-clr'>Our Custom Logo Designs Leave A Mark</h1>
        <h5>The creative graphic designers at SeoInsighterX are well-versed in giving every logo design a unique perspective.</h5>
      </div>
      <br></br>
        <ReverseAutoplaySlider />
       `<AutoplaySlider />` 
        
       <div className='align-div'>
       <Link to='/portfolio'><button class="portfolio">VISIT OUR PORTFOLIO</button></Link>
       
    </div>
    <br></br>
    <div style={{textAlign:'center'}}>
        <p>SERVICES WE PROVIDE</p>
        <h1>Grow, Stun, Conquer & Lead</h1>
        <br></br>
        <h5>These are the main motives behind our every digital service. We will fight for your supermacy in the digital world through our creative design services.</h5>
      </div>
      <br></br>
      {/* DROP DOWN MENU */}
      <div class="navbar-2" style={{textAlign:'center'}}>
  <div class="dropdown-2">
    <button class="dropbtn-2">LOGO DESIGN & BRANDING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ LOGO DESIGN & BRANDING</p>
          <h2 className='bold-h2'>Logo Design & Branding</h2>
          <h4>We Design With a Purpose!</h4>
          <p>We design logos that last for a lifetime! Our creative approach to branding has made us an industry leader. The logo design services we offer will elevate your brand equity. However, only a logo design is not enough; you need to brand your entire business to create an impact on digital media. Luckily, we have the answer to that as well! SeoInsighterX provides different branding packages at pocket-friendly rates!</p>
          <span>WANT TO DISCUSS?  </span><Link to='/logo-and-branding-identity'><button class="question-btn">LET'S START</button></Link>
        </div>
        <div class="column-2">
        <img src={require(`./images/ll1.png`)} className="menu-img"/>
        </div>
        
      </div>
    </div>
  </div>
  
  <div class="dropdown-2">
    <button class="dropbtn-2">WEB DESIGN
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ STRIKING WEB DESIGN & DEVELOPMENT</p>
          <h2 className='bold-h2'>Web Design & Development</h2>
          <h4>Our Designed Websites Are As Smooth As Silk!</h4>
          <p>Your website design is the front store in digital media; you cannot take any risk with it. Our websites are functional inside out; with a secured back-end and attractive front-end, your website will be the lead generating machine that you always wanted it to be! Hire us now, and our digital architects will give your web page the attention it deserves! The best and affordable website design service in town.</p>
          <span>WANT TO DISCUSS?  </span><Link to='/web-design-services'><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/ll2.png`)} className="menu-img"/>
        </div>
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">VIDEO ANIMATION
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
        
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ STUNNING VIDEO ANIMATION</p>
          <h2 className='bold-h2'>Video Animation</h2>
          <h4>There Are Some Emotions That Only An Animated Video Can Express!</h4>
          <p>Video is the new king, and it is time we accept it as one! Netizens are crazy over video content and consume hours of it every day. Do you know what that means? Yes, you are right! An ROI value beyond our calculation. Then what are you waiting for? Hire us because we are the most affordable 2d and 3d animation service out there.</p>
          <span>WANT TO DISCUSS?  </span><Link to='/animation-videos'><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/ll3.png`)} className="menu-img"/>
        </div>
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">DIGITAL MARKETING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        
        <div class="menu-content-align-home">
          <p>~ UNMATCHED DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Digital Marketing</h2>
          <h4>Announce Your Dominance In The Digital World!</h4>
          <p>Marketing wasn't this effective before the rise of digital media. Our digital marketing campaigns will spread like wildfire! Our team of digital marketers are well-versed in digital and exactly know how the complex algorithm works. We are a complete digital marketing agency that promises a high ROI. No matter what your digital media budget is, we assure you that your brand will do wonders!</p>
          <span>WANT TO DISCUSS?  </span><Link to='/digital-marketing-service'><button class="question-btn">LET'S START</button></Link>

        </div>
        <div class="column-2">
        <img src={require(`./images/ll4.png`)} className="menu-img"/>
        </div>
      </div>
    </div>
      
  </div>
</div>


      <br></br>
      
    </div>
    <div style={{backgroundColor:'#679bd4', textAlign:'center',color:'white'}}>
      <br></br>
        <h1>Introduce Your Brand To Digital Media!</h1>
        <h4>Your brand will steal the limelight from top tier names in the marketspace with our creative digital services.</h4>
        <br></br>
        <button class="logo-btn">
        <img src={require(`./images/1.png`)} className='logo-btn-img'/><h1>90%</h1>Increase in ROI</button>
        <button class="logo-btn">
        <img src={require(`./images/2.png`)} className='logo-btn-img'/><h1>1560+</h1>Projects Done</button>
        <button class="logo-btn">
        <img src={require(`./images/3.png`)} className='logo-btn-img'/><h1>200+</h1>Daily Website Visits</button>
        <button class="logo-btn">
        <img src={require(`./images/4.png`)} className='logo-btn-img'/><h1>1000+</h1>Satisfied Customers</button>
        <br></br>
        <br></br>
    </div>
    <div style={{ textAlign:'center'}}>
      <br></br>
      <p>OUR CREATIVE PROCESS</p>
        <h1>At SeoInsighterX We Make Magic Happen!</h1>
        <h4>Our digital agency is optimized for producing exceptional end-results.
We conquer each phase of the project and ensure that
we deliver the best quality work possible.</h4>
<br></br>
<iframe width="60%" height="430" src="https://www.youtube.com/embed/9SHXTC3SZ4o?si=M78u9v0YN9Pm5843" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br></br>
<br></br>
<div className='logo-main'>
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
    </div>    
    <br></br>
    {/* <CollapseMenu /> */}
<div style={{backgroundColor:'rgb(103, 155, 212)',textAlign:'center',color:'white'}}>
  <br></br>
  <h1>Pocket-Friendly Design. Just A Click Away!</h1>
  <br></br>
  <Link to='/pricing'><button class="portfolio">POCKET PLANS</button></Link>
  <br></br>
  <br></br>

</div>

<div style={{textAlign:'center'}}>
<br></br>
<br></br>
  <p>TESTIMONIALS</p>
  <h1>Our Services Are Cherished By All!</h1>
  <h4>We have served hundreds of brands, and look at what they have to say for us:</h4>
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
<Link to='/pricing'><button class="portfolio">VIEW PRICING</button></Link>
<br></br>
<br></br>
</div>
<div style={{textAlign:'center'}}>
  <br></br>
  <p>Awards</p>
  <h1>Achievements & Recognition</h1>
  <h4>During our amazing digital journey, we have earned massive respect from the fellow digital fraternity!</h4>
  <br></br>
  <div className='fellow'>
  <img src={require(`./images/01.png`)} className='logo-btn-img3'/>
  <img src={require(`./images/02.png`)} className='logo-btn-img3'/>
  <img src={require(`./images/03.png`)} className='logo-btn-img3'/>
  <img src={require(`./images/04.png`)} className='logo-btn-img3'/>
  <img src={require(`./images/005.png`)} className='logo-btn-img3'/>
  <br></br>
  <br></br>
</div>
</div>
    <Footer />
    </div>
    
  )
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
  // const [inputValue, setInputValue] = useState('');

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <input
//         type="text"
//         placeholder="Enter data"
        // value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
//       />
      // <Link to={`/step1?data=${inputValue}`}>
      //   <button>Submit</button>
      // </Link>
//     </div>
//   );
// };

// export default HomePage;


