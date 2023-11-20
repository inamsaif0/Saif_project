import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from 'react-bootstrap';
const CollapseMenu = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <div className='bmain'>
            <ul className='ul-collapse'>
      <li className="main2" onClick={()=>setOpen(!open)}
        aria-controls="collapse">LOGO DESIGN & BRANDING
        {/* <img src="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" onClick={()=>setOpen(!open)}
        aria-controls="collapse"
        style={{width:'12rem', height:'10rem',backgroundColor:'grey'}}
        /> */}
        <Collapse in={open}>
            <div id="collapse">
                <h1>Logo Design & Branding</h1>
                <h3>We Design With a Purpose!</h3>
                <p>We design logos that last for a lifetime! Our creative approach to branding has made us an industry leader. The logo design services we offer will elevate your brand equity. However, only a logo design is not enough; you need to brand your entire business to create an impact on digital media. Luckily, we have the answer to that as well! Design cater provides different branding packages at pocket-friendly rates!</p>
            </div>
        </Collapse>
        
      </li>
      <li className="main2" onClick={()=>setOpen2(!open2)}
        aria-controls="collapse">WEB DESIGN
        {/* <img src="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" onClick={()=>setOpen2(!open2)}
        aria-controls="collapse"
        style={{width:'12rem', height:'10rem'}}
        /> */}
        <Collapse in={open2}>
            <div id="collapse">
                <h1>Web Design & Development</h1>
                <h3>Our Designed Websites Are As Smooth As Silk!</h3>
                <p>Your website design is the front store in digital media; you cannot take any risk with it. Our websites are functional inside out; with a secured back-end and attractive front-end, your website will be the lead generating machine that you always wanted it to be!

Hire us now, and our digital architects will give your web page the attention it deserves! The best and affordable website design service in town.</p>
            </div>
        </Collapse>
        
      </li>
      <li className="main2" onClick={()=>setOpen3(!open3)}
        aria-controls="collapse">VIDEO ANIMATION
        
        {/* <img src="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" onClick={()=>setOpen3(!open3)}
        aria-controls="collapse"
        style={{width:'12rem', height:'10rem'}}
        /> */}
        <Collapse in={open3}>
            <div id="collapse">
                <h1>VIDEO ANIMATION</h1>
                <h3>There Are Some Emotions That Only An Animated Video Can Express!</h3>
                <p>Video is the new king, and it is time we accept it as one! Netizens are crazy over video content and consume hours of it every day. Do you know what that means? Yes, you are right! An ROI value beyond our calculation.

Then what are you waiting for? Hire us because we are the most affordable 2d and 3d animation service out there.</p>
            </div>
        </Collapse>
        
      </li>
      <li className="main2" onClick={()=>setOpen4(!open4)}
        aria-controls="collapse">DIGITAL MARKETING
        {/* <img src="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" onClick={()=>setOpen4(!open4)}
        aria-controls="collapse"
        style={{width:'12rem', height:'10rem'}}
        /> */}
        <Collapse in={open4}>
            <div id="collapse">
                <h1>DIGITAL MARKETING</h1>
                <h3>Announce Your Dominance In The Digital World!</h3>
                <p>Marketing wasn't this effective before the rise of digital media. Our digital marketing campaigns will spread like wildfire! Our team of digital marketers are well-versed in digital and exactly know how the complex algorithm works. We are a complete digital marketing agency that promises a high ROI. No matter what your digital media budget is, we assure you that your brand will do wonders!</p>
            </div>
        </Collapse>
        
      </li>
      </ul>
      </div>
    );
  };
  
  export default CollapseMenu;