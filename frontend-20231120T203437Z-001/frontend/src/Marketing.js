import React, { useState } from 'react';
import Modal from 'react-modal';
import Form from './Form';
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import Menu from './Menu'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer2 from './Footer2'
import CustomModal from './CustomModal'
import CustomModal2 from './CustomModal2'
export default function Marketing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    <div>
        <Navigationbar />
        <div style={{marginTop:'0', textAlign:'center'}} >
        <div className="video-background">
    <video autoPlay loop muted>
    <source src={require('./videobg.mp4')} type="video/mp4" />
    </video>
<div className="centered-text">
        <h1 className="text-h1">Digital Marketing Services With A Touch Of Creativity</h1>
        <p className="text-p">Empowering Brands With Stunning Advertising Campaigns And Functional Marketing Strategies.</p>
        {/* <SearchBar /> */}
        <div class="search-container">
    <input type="text" class="search-input" placeholder="PLEASE ENTER YOUR WEBSITE..."/>
    <Link to="/step1"><button class="search-button">LET'S ANALYZE</button></Link>
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
    <div style={{textAlign:'center'}}>
     <p>OUR DIGITAL EXCELLENCE</p>
     <h1>We Strive For Perfection!</h1>
     <h5>We are the best there is because our interests are aligned with yours: to provide you with digital excellence, so your brand can leave an everlasting mark.</h5>
    </div>
    <br></br>
    <div className='align-div'>
    <button class="logo-btn-m">
    <h1>`</h1>
    <img src={require(`./images/mk1.jpg`)} className="mk-btn-img"/>
    
        </button>
        <button class="logo-btn-m">
        <img src={require(`./images/experience.png`)} className="small-logo-marketing"/>
    <h3>Optimized Performance</h3>
    <p>We don't follow the trends; we set them for the rest to follow. We have transformed hundreds of brands by giving them a digital makeover.</p>
    <img src={require(`./images/affordable.png`)} className="small-logo-marketing"/>
    <h3>ROI Beyond Comprehension</h3>
    <p>By implementing proven marketing methods, we have achieved what others can't even imagine. We've got the tools, so you can monitor your growth.</p>
    
          </button>
        <button class="logo-btn-m">
        <img src={require(`./images/quality.png`)} className="small-logo-marketing"/>
    <h3>Team Of Digital Experts</h3>
    <p>SeoInsighterX is a hub of digital experts who have helped hundreds of businesses build a strong digital fort. Our entire team is in sync to achieve nothing but the best.</p>
    <img src={require(`./images/time.png`)} className="small-logo-marketing"/>
    <h3>History Of Victory</h3>
    <p>We are able to conquer the market through our versatile marketing campaigns. Our creative approach to digital marketing has earned us a lot of loyal clients.</p>
  
        </button>  
        </div>  
        
        <br></br>
    
    <div className='align-div'>
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
    <p>PAID AD CAMPAIGNS</p>
    <h1>Boost Your Ad Campaigns By Targeting Micro-Segments</h1>
    <p>Social media has become a perfect place to market your services only if you know how to capitalize on the opportunities. Our digital specialist will develop perfect marketing campaigns for your brand so you can achieve your desired goals. Our digital content creator, along with the social media strategist, will give their best to provide you with optimized content, custom-tailored marketing strategies, and targeted campaigns that will boost your sales funnel.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    
    <div className='column' style={{padding:'0px 0px'}}>
    
    <CustomModal />
    </div>
    </div> 

    <div className='row m-0'>
    <div className='column' style={{padding:'0px 0px'}}>
    <div className="image-container">
        <img
          src={require(`./images/mk3.jpg`)} className="cmp"
          onClick={openModal}
          style={{ cursor: '' }}
        />
        <button onClick={openModal} className="open-modal-button">
          REQUEST CUSTOM QUOTE
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
        >
        <Form />
        <br></br>
        <div className='align-div'>
          <button onClick={closeModal} className='question-btnm'>Close</button>
          </div>
        </Modal>
      </div>
    </div>
    <div className='column' style={{ backgroundColor:'#EEEEEE'}}>
    <div style={{padding:'0px 100px'}}>
    <br></br>
    <p>CONTENT OPTIMIZATION</p>
    <h1>Digital Marketing Is Lifeless Without Content</h1>
    <p>Compelling content attracts humans as the magnet attracts the metal. Words that evoke emotions are the soul of every brand campaign. Our content team is dedicated to attracting leads out of thin air through the power of wordplay. Be it blogs, articles, e-books, or any other form of copywriting; we have got the secret ingredients to successful content marketing strategies.</p>
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
    <p>SOCIAL MEDIA MARKETING</p>
    <h1>Social Media Marketing For Maximum Results</h1>
    <p>Having a website adds credibility to your company, but it's not enough. In recent years, brand presence on social media platforms has become essential. Millions of users browse on these mediums on a daily basis, making them a hub of untapped opportunities. The social media marketing team at SeoInsighterX will come up with campaigns that will boost reach, leads, and conversions.</p>
    <span>WANT TO DISCUSS? </span><Link to=''><button class="question-btn">LET'S START</button></Link>
    <br></br>
    <br></br>
    </div>
    </div>
    <div className='column' style={{padding:'0px 0px'}}>
    <div className="image-container">
        <img
          src={require(`./images/mk4.jpg`)} className="cmp"
          onClick={openModal}
          style={{ cursor: '' }}
        />
        <button onClick={openModal} className="open-modal-button">
          REQUEST CUSTOM QUOTE
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
        >
        <Form />
        <br></br>
        <div className='align-div'>
          <button onClick={closeModal} className='question-btnm'>Close</button>
          </div>
        </Modal>
      </div>
    </div>
    </div>



    
    <div className='align-div'>
        <br></br>
        <br></br>
    <p>WHAT YOU ACHIEVE</p>
    <h1>Digital Marketing Services Beyond Your Expectations</h1>
    <h5>A one-stop for all your digital marketing needs, SeoInsighterX is a platform for those who are ambitious to make a name for themselves in the digital landscape.</h5>
    <br></br>
    <Menu />
    </div>
    <div className='align-div'>
        <br></br>
        <br></br>
    <p>DIGITAL PRESENCE</p>
    <h1>Why Go Digital?</h1>
    <h5>The world is on the verge of evolving into a place where digital will take over conventional media. It's better to create a robust digital presence beforehand.</h5>
      <br></br>
        <button class="logo-btn-mk">
        <h3>Competition</h3>
        <p>Social media has gained a tremendous amount of popularity in the last decade, making it a potential medium for marketing. Every startup has a digital presence; to differentiate your brand from the clutter, you need a professional digital agency to achieve your goals.</p>
        </button>
        <button class="logo-btn-mk">
        <h3>Cost</h3>
        <p>When compared to conventional media, digital media is a very cost-friendly medium for marketing. Social media platforms give access to millions of users at a fraction of the price. At SeoInsighterX, we can help you to take full advantage of every digital medium.</p>
        </button>
        <button class="logo-btn-mk">
        <h3>Complexity</h3>
        <p>Digital media marketing is a complex process, and not everyone's cup of tea. It involves multiple skills to ensure the success of a digital marketing campaign. Our digital marketers have nailed thousands of campaigns and are eagerly waiting to work with you!</p>
        </button>    
        <br></br>
        <br></br>
        </div>
        <div className='align-div' style={{backgroundColor:'rgb(240, 246, 250)'}}>
        <br></br>
        <br></br>
        <p>GROW WITH US</p>
        <h1>Let The Digital Realm Shine Over Your Business!</h1>
        <h5>We are much more than an average marketing agency; we are your ticket to digital success!</h5>
        <br></br>
        <div className='row m-0'>
        <div className='column'>
        <img src={require(`./images/mk12.png`)} className="chicago"/>
        </div>
        <div className='column' style={{textAlign:'left', padding:'0px 100px'}}>
        <p>WORK WITH OUR TALENTED TEAM</p>
        <h1>Let's Unite For Your Digital Dream</h1>
        <p>We provide all the digital services you will ever need! SeoInsighterXs is a house to professionals with various skillsets, and together they create wonders. Reach out to us, and we ensure that your digital fantasy will become a reality.</p>
        <span>DISCUSS NOW </span>
        <br></br>
        <br></br>
        <CustomModal2 />
        
        </div>
        </div>
        <br></br>
        <br></br>
        </div>
        <div className='align-div'>
        <br></br>
        <br></br>
    <p>OUR CREATIVE PROCESS</p>
    <h1>Birds-Eye View Of Our Creative Process</h1>
    <h5>We believe in conquering a project one step at a time.</h5>
      <br></br>
      <br></br>
      </div>

      <div className='align-div'>
      <button className='logo-btn-m'>
      <p>STEP ONE</p>
    <h1>Research</h1>
    <p>Before working on any project, we conduct extensive research about the company we are working with. Only after knowing about the brand and its target market, goals, we start working on our strategy. This helps us to market a product at the right place and at the right time.</p>
    
      </button>
      <button className='logo-btn-m'>
        <p>`</p>
      <img src={require(`./images/mk13.png`)} className="steps"/>

      </button>
      <br></br>
      <button className='logo-btn-m'>
      <p>`</p>
      <img src={require(`./images/mk14.png`)} className="steps"/>
      </button>
      <button className='logo-btn-m'>
      <p>STEP TWO</p>
    <h1>Optimize</h1>
    <p>The knowledge we gather in the research process helps us to create optimized marketing strategies. A better understanding of the target audience allows us to create campaigns that are more effective in producing outstanding results.</p>

      </button>
      <br></br>
      <button className='logo-btn-m'>
      <p>STEP THREE</p>
    <h1>Content</h1>
    <p>Content marketing is our key element, which sets us apart from the rest. Our understanding and creative approach towards content creation have made it possible for us to execute some of the best performing campaigns out there.</p>
    
      </button>
      <button className='logo-btn-m'>
        <p>`</p>
      <img src={require(`./images/mk15.png`)} className="steps"/>

      </button>
      <br></br>
      <button className='logo-btn-m'>
      <p>`</p>
      <img src={require(`./images/mk16.png`)} className="steps"/>

      </button>
      <button className='logo-btn-m'>
      <p>STEP FOUR</p>
    <h1>Paid Ad Campaigns</h1>
    <p>Organic alone can't make a difference. A brand needs to run paid campaigns all over the digital media. With our years of experience in the field, we exactly know where to invest in getting maximal results.</p>
    
      
        </button>
      <br></br>
      <button className='logo-btn-m'>
      <p>STEP FIVE</p>
    <h1>Testing</h1>
    <p>We actively use A/B testing to find out which strategy is most effective. This practice allows us to create campaigns that yield more ROI in the future.</p>
    
      </button>
      <button className='logo-btn-m'>
        <p>`</p>
      <img src={require(`./images/mk17.png`)} className="steps"/>

      </button>
      </div>
      <br></br>
      <br></br>

    <div className='align-div' style={{backgroundColor:'rgb(240, 246, 250)'}}>
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

</div>
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
          <h4>Does my business require digital marketing services?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you do. In this day and age, not having a digital presence is suicide. To dominate the digital medium, you surely need to be visible on it. Almost 97% of the consumers in the US shop online; if you want to boost your sales funnel, you need to catch them online.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Are you a 360-degree digital marketing agency?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          SeoInsighterX is a full-fledged digital marketing agency. We provide results achieving social media marketing on all platforms, and our SEO optimized marketing practices make sure that our clients top ranks in the google searches.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <h4>Do you provide SEO consultancy?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our packages include SEO services. Our digital marketers are well aware of the complex algorithms of Google and know every trick in the book to elevate website ranking on the SERPs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How much will the services cost me?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our pocket-friendly services are quite affordable; we have designed different packages from which you can choose the one that suits your needs. For further details, visit our pricing section.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Do you guarantee results?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our service not only guarantees success, but it also comes with a money-back guarantee. If we are unable to elevate your numbers - which is highly unlikely- you will get a complete refund. However, terms and conditions may apply.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>How will I know that your services are fruitful?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We don't believe in fake promises; we talk in numbers because they don't lie. We generate monthly reports that will keep you updated about the digital success of your brand.          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
</div>
<br></br>
<br></br>
<Footer2 />
    </div>
  )
}
