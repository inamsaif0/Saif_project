
import React from 'react';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/SeoInsighterX/home"><img src={require(`./images/seo-logo.png`)} className="seo-logo"/></Link>
      </div>
      <div className="navbar-button">
      
      
  <div class="dropdown-2">
    <button class="nav-button-drp">SERVICES
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        <div class="column-menu">
          <p className='p-bold'>SeoInsighterX</p>
          <p>Make your brand speak crystal clear and loud with our ROI focused design, development and marketing services.</p>
          <Link to='/pricing'>Check Pricing</Link>
          <br></br>
          <Link to='/portfolio'>View Portfolio</Link>
        </div>

        <div class="column-menu">
          <p className='p-bold-2'>LOGO & BRANDING</p>
          <Link to='/logo-and-branding-identity'><img src={require(`./images/logo&brand.jpg`)} className="navbar-menu-img"/></Link>
          <p>Supreme Logo Design Services Fused With Creativity</p>
          <p>Our custom logo design artists know all the strategies that can boost your business with design.</p>
          <Link to='/logo-and-branding-identity'>VIEW MORE</Link>

        </div>
        <div class="column-menu">
          <p className='p-bold-2'>WEB DESIGN</p>
          <Link to='/web-design-services'><img src={require(`./images/webdesign.jpg`)} className="navbar-menu-img"/></Link>
          <p>Conquer The Online Fraternity With Our Web Development Services</p>
          <p>Our web development services include robust and beautiful carved websites which beat the competition with ease.</p>
          <Link to='/web-design-services'>VIEW MORE</Link>
        </div>

        <div class="column-menu">
          <p className='p-bold-2'>VIDEO ANIMATION</p>
          <Link to='/animation-videos'><img src={require(`./images/videoanimation.jpg`)} className="navbar-menu-img"/></Link>
          <p>Videofy Your Services To Get More From Your Business</p>
          <p>Our animated videos are known to expand the scope of your business to the maximum with increased engagement</p>
          <Link to='/animation-videos'>VIEW MORE</Link>
        </div>

        <div class="column-menu">
          <p className='p-bold-2'>MOBILE APPLICATION</p>
          <Link to='/mobile-app-developers'><img src={require(`./images/mobileapp.jpg`)} className="navbar-menu-img"/></Link>
          <p>Get More Audience With Our Futuristically Developed Mobile Apps</p>
          <p>We create the best mobile apps that are poised to make noise and engagement for your business.</p>
          <Link to='/mobile-app-developers'>VIEW MORE</Link>
        </div>
       
      </div>
    </div>
  </div>
    <Link to="/digital-marketing-service"><button class="nav-buttons1">MARKETING
      <i class="fa fa-caret-down"></i>
    </button></Link>
    <Link to="/portfolio"><button class="nav-buttons1">PORTFOLIO
      <i class="fa fa-caret-down"></i>
    </button></Link>
    <Link to="/pricing"><button class="nav-buttons1">PRICING
      <i class="fa fa-caret-down"></i>
    </button></Link>
    <Link to="/about"><button class="nav-buttons1">ABOUT
      <i class="fa fa-caret-down"></i>
    </button></Link>
    <Link to="/contact"><button class="nav-buttons1">CONTACT
      <i class="fa fa-caret-down"></i>
    </button></Link>
    </div>
    </nav>
  );
};

export default Navigationbar;

