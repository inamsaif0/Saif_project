import React, { useState } from 'react';

function DropdownButtons() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    setShowDropdown3(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown1(false);
    setShowDropdown2(!showDropdown2);
    setShowDropdown3(false);
  };

  const toggleDropdown3 = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(!showDropdown3);
  };

  return (
    <div>
      <button onClick={toggleDropdown1} className='buttons'>Combo</button>
      {showDropdown1 && (
        <div className="dropdown-content-1">
          <ul>
            <br></br>
            <p className='p-bold'>Basic Logo</p>
            <li>2 Logo Concepts</li>
            <li>3 Revisions</li>
            <li>No High Res. files</li>
            <li>48 hours Delivery</li>
            <li>100% Ownership</li>
            <li>JPG + PNG</li>
            <br></br>
            <p className='p-bold'>Startup Branding</p>
            <li>Business Card Design</li>
            <li>Letterhead Design</li>
            <li>Envelope Design</li>
            <li>100% Ownership</li>
          </ul>
        </div>
      )}

      <button onClick={toggleDropdown2} className='buttons'>Logo</button>
      {showDropdown2 && (
        <div className="dropdown-content-1">
          <br></br>
          <ul>
            <p className='p-bold'>Basic Logo</p>
            <li>2 Logo Concepts</li>
            <li>3 Revisions</li>
            <li>No High Res. files</li>
            <li>48 hours Delivery</li>
            <li>100% Ownership</li>
            <li>JPG + PNG</li>
          </ul>
        </div>
      )}

      <button onClick={toggleDropdown3} className='buttons'>Branding</button>
      {showDropdown3 && (
        <div className="dropdown-content-1">
          <br></br>
          <ul>
            <p className='p-bold'>Startup Branding</p>
            <li>Business Card Design</li>
            <li>Letterhead Design</li>
            <li>Envelope Design</li>
            <li>100% Ownership</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButtons;
