import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div style={{backgroundColor:'#1c1c1c', height:'300px',textAlign:'center'}}>
  <br></br>
  <Link className='link'><img src={require(`./images/seo-logo.png`)} className="seo-logo"/></Link>
    <br></br>
    <br></br>
    <img src={require(`./images/fb.png`)} className='logo-btn-img2'/>
    <img src={require(`./images/twitter.png`)} className='logo-btn-img2'/>
    <img src={require(`./images/in.png`)} className='logo-btn-img2'/>
    <img src={require(`./images/yt.png`)} className='logo-btn-img2'/>
    <img src={require(`./images/ins.png`)} className='logo-btn-img2'/>
    <br></br>
    <br></br>
    <div>
    <Link to='/SeoInsighterX/home' className='footer-list'>HOME</Link>
    <Link to='/logo-and-branding-identity' className='footer-list'>LOGO & BRANDING</Link>
    <Link to='/web-design-services' className='footer-list'>WEB DESIGN</Link>
    <Link to='/animation-videos' className='footer-list'>VIDEO ANIMATION</Link>
    <Link to='/digital-marketing-service' className='footer-list'>DIGITAL MARKETING</Link>
    <Link to='/portfolio' className='footer-list'>PORTFOLIO</Link>
    <Link to='/about' className='footer-list'>ABOUT</Link>
    <Link to='/contact' className='footer-list'>CONTACT</Link>
    <br></br>
    <br></br>
    <img src={require(`./images/payment-links.webp`)}/>
    </div>
</div>
  )
}
