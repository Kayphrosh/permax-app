import React, { useState } from 'react';
import Swap from './swap';
import Limit from './limit';

const Trade: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Swap');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="trade-container">
      <div className="trade-tabs">
        <button
          className={activeTab === 'Swap' ? 'active' : ''}
          onClick={() => handleTabClick('Swap')}
        >
          Swap
        </button>
        <button
          className={activeTab === 'Limit' ? 'active' : ''}
          onClick={() => handleTabClick('Limit')}
        >
          Limit
        </button>
      </div>

      {activeTab === 'Swap' && <Swap />}
      {activeTab === 'Limit' && <Limit />}
    </div>
  );
};

export default Trade;
