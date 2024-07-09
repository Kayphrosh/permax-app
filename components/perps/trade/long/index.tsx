import React, { useState } from 'react';
import SelectTokenModal from '@/components/select-token-modal';
const Long = () => {
  const leverageSteps = [1.1, 20, 40, 60, 80, 100];
  const [leverage, setLeverage] = useState(leverageSteps[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);

  const handleLeverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(parseFloat(event.target.value));
  };

  const incrementLeverage = () => {
    setLeverage((prev) => {
      const currentIndex = leverageSteps.indexOf(prev);
      return currentIndex < leverageSteps.length - 1
        ? leverageSteps[currentIndex + 1]
        : prev;
    });
  };

  const decrementLeverage = () => {
    setLeverage((prev) => {
      const currentIndex = leverageSteps.indexOf(prev);
      return currentIndex > 0 ? leverageSteps[currentIndex - 1] : prev;
    });
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSelectToken = (token: any) => {
    console.log('Selected Token:', token);
    setSelectedToken(token);
    closeModal();
  };

  return (
    <div className="long-input-container swap-input-container">
      <div className="swap-input long-size-input">
        <div className="swap-form">
          <label htmlFor="You Pay">Size of Long</label>
          <input type="number" placeholder="0.00" />
        </div>
        <div className="output-currency">
          <div className="icon">
            <img src="./Images/usdt.svg" alt="" />
            <span>USDT</span>
          </div>
        </div>
      </div>

      <div className="swap-input leverage">
        <div className="swap-form">
          <label htmlFor="You Pay">Leverage</label>
          <div className="input-container">
            <input
              type="number"
              value={leverage.toFixed(1)}
              onChange={handleLeverageChange}
              placeholder="1.0X"
            />
            <div className="control">
              <button onClick={decrementLeverage}>-</button>
              <button onClick={incrementLeverage}>+</button>
            </div>
          </div>
          <div className="leverage-slider">
            <input
              type="range"
              min="1.1"
              max="100"
              step="0.1"
              value={leverage}
              onChange={handleLeverageChange}
              list="leverage-steps"
              title='slider'
            />
            <datalist id="leverage-steps">
              {leverageSteps.map((step) => (
                <option key={step} value={step} label={`${step}x`}></option>
              ))}
            </datalist>
          </div>
        </div>
      </div>

      <button onClick={openModal} className="swap-cta">
        Select Token
      </button>

      <SelectTokenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelect={handleSelectToken}
      />
    </div>
  );
};

export default Long;

