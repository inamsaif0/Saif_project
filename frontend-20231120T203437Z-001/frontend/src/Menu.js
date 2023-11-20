import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <div>
      <div class="navbar-2" style={{textAlign:'center'}}>
  <div class="dropdown-2">
    <button class="dropbtn-2">SEO 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk5.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Search Engine Optimization</h2>
          <p>The best place to hide is the second page of Google search results; as a brand, you don't wanna end up there. Our SEO specialists strategies according to the ever-changing algorithm of Google, so that your website can shine at the top of everyone else.</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>
        </div>
        
      </div>
    </div>
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">SOCIAL MEDIA
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk6.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Social Media Marketing</h2>
          <p>In this day and age of social media dominance, having no social media presence is committing suicide. A brand needs to socialize and connect with its target audience. Our social media experts will make your brand vocal on every social platform and will sure that your brand voice is heard in the digital world.</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">CONTENT WRITING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk7.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Content Writing</h2>
          <p>Strong content helps a brand connect to its target audience; the right words have the tendency to evoke an emotional response from a potential prospect. Our wordsmiths are equipped with creativity that enables them to write for every medium.</p>  
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">SEM
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk8.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>SEM</h2>
          <p>SEO optimization is necessary for a good organic reach, but at times it's not efficient. Paid advertising campaigns at times are a must if you want to increase your reach by manifolds. Our digital media strategists design PPC campaigns that earn you a high ROI at minimal costs.</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">EMAIL MARKETING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
         
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk9.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Email Marketing</h2>
          <p>Never underestimate the power of target marketing. Our email marketing has done wonders for our existing clients and will do for you as well. Composing an email is an art that our content marketing has mastered way back. Our email marketing campaigns are bound to make an impact. Now the question is: Do you want to make an impact or not?</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

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
        <div class="column-2">
        <img src={require(`./images/mk10.jpg`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Web Design</h2>
          <p>Your website is the most important digital asset of your company. It adds the credibility a client is looking for in an online vendor. The UX/UI design of a website should be on point, or the marketing efforts will go in vain. Our web developers are professionals when it comes to renovating a website with the latest features and functionalities. We make websites smoother than butter and more attractive than a magnet.</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
        
      </div>
    </div>
      
  </div>
  <div class="dropdown-2">
    <button class="dropbtn-2">VIDEO MARKETING
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content-2">
      
      <div class="row-2">
        <div class="column-2">
        <img src={require(`./images/mk11.gif`)} className="menu-img"/>
        </div>
        <div class="menu-content-align">
          <p>~ DIGITAL MARKETING</p>
          <h2 className='bold-h2'>Video Marketing</h2>
          <p>Video marketing is the future of the digital world, and guess what! The future is here. The newer generation is all about watching; therefore, marketers are actively integrating videos in their marketing strategies. We at Design Caters make videos that can hook your target audience. Contact us now!</p>
          <span>DISCUSS MY TYPE?  </span><Link to=''><button class="question-btn">LET'S START</button></Link>

        </div>
       
      </div>
    </div>
      
  </div>
</div>



    </div>
  )
}
