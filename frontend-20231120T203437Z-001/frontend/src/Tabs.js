import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="tab-container">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tab 1</div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Tab 2</div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Tab 3</div>
      </div>

      <div className="tab-content">
        <ul className={`list ${activeTab === 1 ? 'active' : ''}`}>
          <li>Item 1 for Tab 1</li>
          <li>Item 2 for Tab 1</li>
          <li>Item 3 for Tab 1</li>
        </ul>

        <ul className={`list ${activeTab === 2 ? 'active' : ''}`}>
          <li>Item 1 for Tab 2</li>
          <li>Item 2 for Tab 2</li>
          <li>Item 3 for Tab 2</li>
        </ul>

        <ul className={`list ${activeTab === 3 ? 'active' : ''}`}>
          <li>Item 1 for Tab 3</li>
          <li>Item 2 for Tab 3</li>
          <li>Item 3 for Tab 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
