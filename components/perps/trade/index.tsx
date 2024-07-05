import React, { useState } from 'react';
import Long from './long';
import Short from './short';
const PerpsTrade: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Long');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="perps-trade-container">
      <div className="trade-tabs">
        <button
          className={activeTab === 'Long' ? 'active' : 'long'}
          onClick={() => handleTabClick('Long')}
          id="long"
        >
          Long
          <img src="./Images/long.svg" alt="" />
        </button>
        <button
          className={activeTab === 'Short' ? 'active' : ''}
          onClick={() => handleTabClick('Short')}
          id="short"
        >
          Short
          <img src="./Images/short.svg" alt="" />
        </button>
      </div>

      {activeTab === 'Long' && <Long />}
      {activeTab === 'Short' && <Short />}
    </div>
  );
};

export default PerpsTrade;
