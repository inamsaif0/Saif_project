import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer2() {
  return (
    <div>
        <div style={{backgroundColor:'#1c1c1c',color:'white' , padding:'0px 40px'}}>
        <br></br>
    <div className='row m-0'>
    <div className='column'>
    <Link to="/SeoInsighterX/home" className='link'><img src={require(`./images/seo-logo.png`)} className="seo-logo-footer"/></Link>
    <p style={{color:'silver'}}>We work with a focused approach empowered by your business goal. Our digital services are harnessed with strategic moves to make your business a leader.</p>
    </div>
    <div className='column'>
    <ul style={{listStyle:'none', fontSize:'13px', lineHeight:'25px' ,color:'silver'}}>
        <h5 style={{color:'white'}}>Logo & Branding</h5>
        <a href="/logo-and-branding-identity#logodesign"><li>Logo Design</li></a>
        <Link><li>Branding</li></Link>
        <Link><li>Logo Portfolio</li></Link>
        <Link><li>Creative Process</li></Link>
        <Link><li>Logo Faq's</li></Link>
        <Link><li>Logo Types</li></Link>
        <Link><li>Logo Pricing</li></Link>
    </ul>
    </div>
    <div className='column'>
    <ul style={{listStyle:'none', fontSize:'13px', lineHeight:'25px' ,color:'silver'}}>
        <h5 style={{color:'white'}}>Web Design</h5>
        <Link><li>Wordpress</li></Link>
        <Link><li>Custom Website</li></Link>
        <Link><li>Web Portfolio</li></Link>
        <Link><li>Creative Process</li></Link>
        <Link><li>Website Faq's</li></Link>
        <Link><li>Website Types</li></Link>
        <Link><li>Web Pricing</li></Link>
    </ul>
    </div>
    <div className='column'>
    <ul style={{listStyle:'none', fontSize:'13px', lineHeight:'25px' ,color:'silver'}}>
        <h5 style={{color:'white'}}>Video Animation</h5>
        <Link><li>Video Types</li></Link>
        <Link><li>Video Portfolio</li></Link>
        <Link><li>Work Process</li></Link>
        <Link><li>Video Faq's</li></Link>
        <Link><li>Video Pricing</li></Link>
    </ul>
    </div>
    <div className='column'>
    <ul style={{listStyle:'none', fontSize:'13px', lineHeight:'25px' ,color:'silver'}}>
        <h5 style={{color:'white'}}>Digital Marketing</h5>
        <Link><li>Services</li></Link>
        <Link><li>Creative Process</li></Link>
        <Link><li>Testimonials</li></Link>
        <Link><li>Faq's</li></Link>
    </ul>
    </div>
    <div className='column'>
    <ul style={{listStyle:'none', fontSize:'13px', lineHeight:'25px' ,color:'silver'}}>
        <h5 style={{color:'white'}}>Contact Us</h5>
        <li>929-322-1108</li>
        <li>info@seoinsighterx.com</li>
        <li>Address</li>
        <img src={require(`./images/fb.png`)} className='footer-logo-btn-img2'/>
        <img src={require(`./images/twitter.png`)} className='footer-logo-btn-img2'/>
        <img src={require(`./images/in.png`)} className='footer-logo-btn-img2'/>
        <img src={require(`./images/yt.png`)} className='footer-logo-btn-img2'/>
        <img src={require(`./images/ins.png`)} className='footer-logo-btn-img2'/>

    </ul>
    </div>
    

    </div>
    
    </div>
    <div style={{backgroundColor:'#343a40', color:'white', height:'50px', padding:'15px 30px', fontSize:'13px'}}>
    ©SeoInsighterX 2023. All rights reserved.
    <span style={{float:'right'}}><a href='#'>Terms of Services</a> -- <a href='#'>Privacy Policy</a></span>
    </div>
    </div>
    
  )
}
