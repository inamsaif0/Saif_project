import React from 'react'
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'
export default function About() {
  return (
    <div>
        <Navigationbar />
        <div className="background-container">
        <img src={require(`./images/dane-deaner-_-KLkj7on_c-unsplash.jpg`)} className="background-image"/>
      <div className="text-overlay">
        <h1>We Design For Your Success!</h1>
        <h4>At SeoInsighterX, our sole mission is to make our clients happy by ensuring their supremacy over the competition!</h4>
      </div>
    </div>
    <div className='row m-0' style={{padding:'0 40px'}}>
        <div className='column'>
        <p>WHAT WE DO</p>
        <h1>Masters Of Digital And Design</h1>
        <h4>We Add A Pinch Of Creativity To Your Digital Presence!</h4>
        <p>SeoInsighterX is a digital agency where our only goal is to achieve client satisfaction. Be it digital marketing, content creation, logo design, branding, or web development, our teams of professionals are always up for the task.</p>
        <Link to=''><button class="question-btn">CONTACT US</button></Link>
        </div>
        <div className='column'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/9SHXTC3SZ4o?si=M78u9v0YN9Pm5843" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <br></br>
    <div style={{textAlign:'center'}}>
    <p>SERVICES WE PROVIDE</p>
    <h2>Satisfying Our Clients With Their
Digital Needs For Years!</h2>
<h4>We work to achieve design excellence for our clients so that
they can shine brightly in the digital universe.</h4>
    </div>
    <div className='row m-0'>
        <div className='column' style={{backgroundColor:'#679bd4', color:'white'}}>
        <div style={{padding:'30px 100px'}}>
            <p>OUR MISSION & VISSION</p>
            <h1 style={{color:'black'}}>Our Mission & Vision</h1>
            <p>SeoInsighterX is a digital branding agency that has been delivering paramount designs for over a decade now. Our services are affordable yet stacked with stunning uniqueness and creativity. Our digital branding and marketing solutions have done wonders for multiple brands, and our constant support has helped them make a robust digital presence. We strongly believe that digital is for all: no matter how small a brand is, it deserves a fair chance of competing with the bigger fish. We are here for all those who want to grow in the ever-expanding digital landscape.</p>
        <span>LIVE CHAT </span><Link to=''><button class="question-btn">CONTACT US</button></Link>
        </div>
        </div>
        <div className='column'>
        <img src={require(`./images/chat-support.png`)} className="customer-support"/>
        </div>
        
    </div>
    <div style={{textAlign:'center'}}>
        <br></br>
    <p>SERVICE WE PROVIDE</p>
    <h1>Why Choose Us?</h1>
    <h5>With thousands of options out there, why exactly should you choose us?
Simply because we will conquer digital for your brand. And frankly speaking,
if you start shortlisting reputable design agencies, you don't have many options!</h5>
    <br></br>
    </div>
    
    <div className='row m-0'>
    <div className='column'  style={{textAlign:'center',padding:'0px 60px',backgroundColor:'#EEEEEE'}}>
    <img src={require(`./images/experience.png`)} className="about-us-images"/>
    <h2>Years Of Experience</h2>
    <p>We are a creative habitat that is home to many creative individuals. Our professional visionaries have transformed multiple brands into traffic-generating digital assets</p>
    </div>
    <div className='column' style={{textAlign:'center',padding:'0px 60px'}}>
    <img src={require(`./images/studio.png`)} className="about-us-images"/>
    <h2>Full-Service Studio</h2>
    <p>We are a one-stop-shop, offering every digital service that you will ever need. Be it a logo, branding, content, or web development, we have got you covered.</p>
    </div>
    <div className='column' style={{textAlign:'center',padding:'0px 60px',backgroundColor:'#EEEEEE'}}>
    <img src={require(`./images/quality.png`)} className="about-us-images"/>
    <h2>Quality Work</h2>
    <p>We never compromise on the uniqueness of our services. We are known to stand apart from the rest, and our quality is the reason for our supremacy in the digital industry.</p>
    </div>
    </div>
    <div className='row m-0'>
    <div className='column' style={{textAlign:'center',padding:'0px 60px'}}>
    <img src={require(`./images/affordable.png`)} className="about-us-images"/>
    <h2>Affordable</h2>
    <p>Our pocket-friendly packages make us more appealing. We believe in helping brands to achieve their digital goals without sucking every dollar from them.</p>
    </div>
    <div className='column' style={{textAlign:'center',padding:'0px 60px',backgroundColor:'#EEEEEE'}}>
    <img src={require(`./images/time.png`)} className="about-us-images"/>
    <h2>Quick Turnaround Time</h2>
    <p>Our professional environment is enriched with hardworking and dedicated individuals, enabling us to nail every project in very short times.</p>
    </div>
    <div className='column' style={{textAlign:'center',padding:'0px 60px'}}>
    <img src={require(`./images/tech.png`)} className="about-us-images"/>
    <h2>Latest Technology</h2>
    <p>SeoInsighterX is equipped with the state of the art technology. Working with design software requires heavy rendering machines.</p>
    </div>
    </div>
    <div style={{textAlign:'center'}}>
        <br></br>
        <br></br>
        <p>OUR CREATIVE PROCESS</p>
        <h1>Our Creative Process</h1>
        <h5>At SeoInsighterX, creative juices flow 24/7. We are dedicated to making your brands digitally optimized.</h5>
    </div>
    <br></br>



    <div className='row m-0'>
    <div className='column'>
    <div style={{padding:'0px 60px'}}>
    <br></br>
    <p>TELL US WHAT YOU NEED</p>
    <h1>Customer's Brief</h1>
    <p>We believe in providing the clients exactly what they want. And for that, a client's initial brief is essential. Our account men are highly trained to extract the information that helps create aesthetic branding designs.</p>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/step1.png`)} className=""/>
    </div>
    </div> 

    <div className='row m-0'>
    <div className='column'>
    <div style={{padding:'0px 60px'}}>
    <br></br>
    <p>WORK WITH OUR TALENTED TEAM</p>
    <h1>Team Collaboration</h1>
    <p>Digital Branding is not a one-person job; instead. It requires the collaboration of multiple talented creative individuals. Thankfully, we have plenty in our agency.</p>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/step2.png`)} className=""/>
    </div>
    </div> 
    
    <div className='row m-0'>
    <div className='column'>
    <div style={{padding:'0px 60px'}}>
    <br></br>
    <p>SEAL THE DEAL</p>
    <h1>Perfecting The Project</h1>
    <p>Our creative process is so complete and robust that we are always able to deliver beyond the expectations of our clients. With affordable, unique designs and quick turnaround time, SeoInsighterX is the best place for your brand to grow.</p>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <img src={require(`./images/step3.png`)} className=""/>
    </div>
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
<Footer2 />
    </div>
  )
}
