import React, { useState } from 'react';


const CollapseButton4 = ({ id, image, title, content1, content2, content3, activeButtonId, setActiveButtonId }) => {
  const isExpanded = id === activeButtonId;

  const toggleCollapse = () => {
    setActiveButtonId(isExpanded ? null : id);
  };

  return (
    <div className="collapse-container">
        {image}
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
      </button>
      {isExpanded && (
        <div className="collapse-content4"><h1>{content1}</h1>
        <h3>{content2}</h3>
        <p>{content3}</p>
        </div>
      )}
    </div>
  );
};

export default CollapseButton4;
