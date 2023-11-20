import React, { useState } from 'react';

function Button({ tag, image, selected, onSelect }) {
  return (
    <div className={`button ${selected ? 'selected' : ''}`} onClick={() => onSelect(tag)}>
      <img src={image} alt={tag} />
    </div>
  );
}

export default Button;
