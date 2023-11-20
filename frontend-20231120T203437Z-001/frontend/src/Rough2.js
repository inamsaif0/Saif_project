import React, { useState, useEffect } from 'react';

function Dropmenu() {
    const [dropdownVisible1, setDropdownVisible1] = useState(
        localStorage.getItem('dropdownVisible1') === 'true'
      );

      const toggleDropdown1 = () => {
        const newDropdownState = !dropdownVisible1;
        setDropdownVisible1(newDropdownState);
        localStorage.setItem('dropdownVisible1', newDropdownState.toString());
      };
      useEffect(() => {
        // Initialize the dropdown state when the component mounts
        const storedDropdownState = localStorage.getItem('dropdownVisible1');
        if (storedDropdownState) {
          setDropdownVisible1(storedDropdownState === 'true');
        }
      }, []);

      const [dropdownVisible2, setDropdownVisible2] = useState(
        localStorage.getItem('dropdownVisible2') === 'true'
      );
      const toggleDropdown2 = () => {
        const newDropdownState = !dropdownVisible2;
        setDropdownVisible2(newDropdownState);
        localStorage.setItem('dropdownVisible2', newDropdownState.toString());
      };
      useEffect(() => {
        // Initialize the dropdown state when the component mounts
        const storedDropdownState = localStorage.getItem('dropdownVisible2');
        if (storedDropdownState) {
          setDropdownVisible2(storedDropdownState === 'true');
        }
      }, []);
      const [dropdownVisible3, setDropdownVisible3] = useState(
        localStorage.getItem('dropdownVisible3') === 'true'
      );
      const toggleDropdown3 = () => {
        const newDropdownState = !dropdownVisible3;
        setDropdownVisible3(newDropdownState);
        localStorage.setItem('dropdownVisible3', newDropdownState.toString());
      };
      useEffect(() => {
        // Initialize the dropdown state when the component mounts
        const storedDropdownState = localStorage.getItem('dropdownVisible3');
        if (storedDropdownState) {
          setDropdownVisible3(storedDropdownState === 'true');
        }
      }, []);


  return (
    <div className="Dropmenu">
      <div className="dropbar">
        <div className="dropdown-bar">
          <button className={`dropbtn-bar ${dropdownVisible1 ? 'show' : ''}`} onClick={toggleDropdown1}>
            LOGO DESIGN
            <i className={`fa fa-caret-down ${dropdownVisible1 ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible1 ? 'show' : ''}`}>
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
          </div>
        </div>
        <div className="dropdown-bar">
          <button className={`dropbtn-bar ${dropdownVisible2 ? 'show' : ''}`} onClick={toggleDropdown2}>
            LOGO ANIMATION
            <i className={`fa fa-caret-down ${dropdownVisible2 ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible2 ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible3 ? 'show' : ''}`} onClick={toggleDropdown3}>
            BRANDING
            <i className={`fa fa-caret-down ${dropdownVisible3 ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible3 ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
      </div>  
    </div>
  );
}

export default Dropmenu;

 <div className="dropdown-bar">
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            BUSINESS CARD
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            BAG
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            BROCHURE
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            DOOR HANGER
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            SOCIAL MEDIA COVERS
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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
          <button className={`dropbtn-bar ${dropdownVisible ? 'show' : ''}`} onClick={toggleDropdown}>
            CAR STICKERS
            <i className={`fa fa-caret-down ${dropdownVisible ? 'show' : ''}`}></i>
          </button>
          <div className={`dropdown-bar-content ${dropdownVisible ? 'show' : ''}`}>
          <div className='row m-0'>
                <div className='column'>

                </div>
                <div className='column'>
                    
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