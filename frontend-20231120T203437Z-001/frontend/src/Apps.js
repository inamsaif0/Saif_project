import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import SelectionTable from './SelectionTable';

const buttonData = [
  { tag: 'logo', image: 'logo.png' },
  { tag: 'web', image: 'web.png' },
  { tag: 'video', image: 'video.png' },
  { tag: 'mobile', image: 'mobile.png' },
];

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelect = (tag) => {
    setSelectedButton(tag);
  };

  const handleContinue = (selectedTag) => {
    axios
      .post('/api/selected-buttons', { tag: selectedTag, image: selectedButton + '.png' })
      .then((response) => {
        console.log(response.data);
        // Handle any success actions here
      })
      .catch((error) => {
        console.error('Error while sending data to the server:', error);
        // Handle any error actions here
      });
  };

  return (
    
      <div className="App">
        <div className="button-container">
          {buttonData.map((button, index) => (
            <Button
              key={index}
              tag={button.tag}
              image={button.image}
              selected={selectedButton === button.tag}
              onSelect={handleSelect}
            />
          ))}
        </div>
        {selectedButton && (
          <button onClick={() => handleContinue(selectedButton)}>
            <Link to="/selectiontable">CONTINUE</Link>
          </button>
        )}
      </div>
      
    
  );
}

export default App;
