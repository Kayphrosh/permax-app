import React, { useState } from 'react';
import SelectTokenModal from '@/components/select-token-modal';
const Short = () => {
  const leverageSteps = [1.1, 20, 40, 60, 80, 100];
  const [leverage, setLeverage] = useState(leverageSteps[0]);
  const [isModalOpen, setModalOpen] = useState(false);

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

  return (
    <div className="long-input-container swap-input-container">


      <div className="swap-input long-size-input">
        <div className="swap-form">
          <label htmlFor="You Pay">Size of Short</label>
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
              placeholder="x"
            />
            <datalist id="leverage-steps">
              {leverageSteps.map((step) => (
                <option key={step} value={step} label={`${step}x`}></option>
              ))}
            </datalist>
          </div>
        </div>
      </div>

      <div className="slippage-container">
        <div className="slippage">
          <div className="label">Price</div>
          <div className="value">1 ETH≈3,688.4 USDC</div>
        </div>

        <div className="slippage">
          <div className="label">Min received</div>
          <div className="value">4,308.51 USDC</div>
        </div>

        <div className="slippage">
          <div className="label">Price impact</div>
          <div className="value">High</div>
        </div>

        <div className="slippage">
          <div className="label">Order Routing</div>
          <div className="value">Fraxs</div>
        </div>
      </div>

      <button className="swap-cta">Connect Wallet</button>

      <SelectTokenModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Short;
