import React, { useState, useEffect } from 'react';
import Navigationbar from './Navigationbar'
import Menu from './Menu'
import Footer2 from './Footer2'
export default function Portfolio() {
  // Initialize state variable to track the open dropdown
  const [openDropdown, setOpenDropdown] = useState('LOGO DESIGN');
  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };
  // Function to toggle the dropdown visibility
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName); 
    }
  };
 
  useEffect(() => {
    const storedOpenDropdown = localStorage.getItem('openDropdown');
    if (storedOpenDropdown) {
      setOpenDropdown(storedOpenDropdown);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('openDropdown', openDropdown);
  }, [openDropdown]);

  return (
    <div>
        <Navigationbar />
        <div className="background-container">
        <img src={require(`./images/port.jpeg`)} className="background-image"/>
        <div className='row m-0'>
        <div className='column' style={{padding:'30px 50px'}}>
        <h1 className='img-heading'>Perfection Down To Every Pixel!</h1>
        <h2>We have been stunning the digital world with our exceptional designs for almost a decade now. Delivering design excellence is not a skill for us anymore; it has become a habit!</h2>
        </div>
        <div className='column'>
        </div>
        </div>
     
    </div>
    <div className='align-div'>
        
        <p>OUR AWESOME WORK</p>
        <h1>Creativity At Its Peak!</h1>
        <h5>Our visually hooking digital designs add tons of weight to our claims of being the best out there. Take a look for yourself but don't blame us if you get addicted to our compelling digital art!</h5>
        <br></br>
        <br></br>
        <span><input placeholder='ENTER YOUR INDUSTRY NAME' className='input-question'></input>
        <button class="search-btn-2">SEARCH BY INDUSTRY</button>
        </span>
        </div>
        <br></br>
        <br></br>        
        <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('LOGO DESIGN')}
          >
            LOGO DESIGN
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO DESIGN' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/brownsafety.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/1sthome.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/1stop.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/aqua.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/angelica.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/royal.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/enviro.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/assiah.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/beardbros.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/designbenefits.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/madhu.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/noco.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/arizona.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/splash.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/videoani.jpg`)} className="logo-portfolio"/>
                </div>
            </div>
            <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/flair.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/eve.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/awet.jpg`)} className="logo-portfolio"/>
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
            className={`dropbtn-bar ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('LOGO ANIMATION')}
          >
            WEB DESIGN
            <i className={`fa fa-caret-down ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'LOGO ANIMATION' ? 'show' : ''}`}>
          <div className='row m-0'>
          <div className='column'>
                <img src={require(`./images/purple.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/grey.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/homepress.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/urogu.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/mens.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/yellow.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/olive.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/kinds.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/puppy.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/pink.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/body.jpg`)} className="logo-portfolio"/> 
                </div>
                <div className='column'>
                <img src={require(`./images/sale.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/ad.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/amt.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/c5.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/c1.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/c2.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/c3.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c4.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/c7.jpg`)} className="logo-portfolio"/>    
                </div>
            </div>
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BRANDING' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BRANDING')}
          >
            VIDEO ANIMATION
            <i className={`fa fa-caret-down ${openDropdown === 'BRANDING' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BRANDING' ? 'show' : ''}`}>
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
                <img src={require(`./images/v31.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/v32.jpg`)} className="logo-portfolio"/>   
                </div>
            
            </div>
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

          </div>
        </div>
        
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BUSINESS CARD')}
          >
            BUSINESS CARD
            <i className={`fa fa-caret-down ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BUSINESS CARD' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/crazy.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/ward.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/edible.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/really.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/pancho.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'DOOR HANGER' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('DOOR HANGER')}
          >
            DOOR HANGER
            <i className={`fa fa-caret-down ${openDropdown === 'DOOR HANGER' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'DOOR HANGER' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/asf.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/beach.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
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
            className={`dropbtn-bar ${openDropdown === 'SOCIAL MEDIA COVERS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('SOCIAL MEDIA COVERS')}
          >
            SOCIAL MEDIA COVERS
            <i className={`fa fa-caret-down ${openDropdown === 'SOCIAL MEDIA COVERS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'SOCIAL MEDIA COVERS' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/care.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/apple.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/hotline.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/elev.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'CAR STICKERS' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('CAR STICKERS')}
          >
            CAR STICKERS
            <i className={`fa fa-caret-down ${openDropdown === 'CAR STICKERS' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'CAR STICKERS' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/chapman.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/royalcar.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/enfield.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/aac.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                </div>
            </div>
            
          </div>
          
        </div>
        <div className="dropdown-bar">
          <button
            className={`dropbtn-bar ${openDropdown === 'BROCHURE' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BROCHURE')}
          >
            BROCHURE DESIGN
            <i className={`fa fa-caret-down ${openDropdown === 'BROCHURE' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BROCHURE' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/wilson.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/flexo.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/buddha.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/besic2.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/ams.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
            <div className='row m-0'>
            <div className='column'>
                <img src={require(`./images/meridian.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/boger2.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
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
            className={`dropbtn-bar ${openDropdown === 'BAG' ? 'show' : ''}`}
            onClick={() => handleDropdownClick('BAG')}
          >
            BAG DESIGN
            <i className={`fa fa-caret-down ${openDropdown === 'BAG' ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${openDropdown === 'BAG' ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>
                <img src={require(`./images/fab.jpg`)} className="logo-portfolio"/>
                </div>
                <div className='column'>
                <img src={require(`./images/reallybag.jpg`)} className="logo-portfolio"/>    
                </div>
                <div className='column'>
                <img src={require(`./images/nubian.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/maria.jpg`)} className="logo-portfolio"/>   
                </div>
                <div className='column'>
                <img src={require(`./images/storybooks.jpg`)} className="logo-portfolio"/>  
                </div>
            </div>
              
          </div>
        </div>
      </div>
      
    </div>

        <div style={{marginTop:'80%'}}>
        <Footer2 />
        </div>
    </div>
    
  )
}
