import React, { useState } from 'react';
import SelectTokenModal from '../../select-token-modal';
const Swap = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="swap-container">
      <div className="swap-input-container">
        <div className="swap-input">
          <div className="swap-form">
            <label htmlFor="You Pay">You Pay</label>
            <input type="number" placeholder="0.00" />
          </div>
          <button className="token" onClick={openModal}>
            <div className="icon">
              <img src="./Images/eth.svg" alt="" />
              <span>ETH</span>
            </div>
            <div title="drop down" id="drop-down">
              <img src="./Images/drop-down.svg" alt="" />
            </div>
          </button>
        </div>

        <div className="swap-input-button">
          <img src="./Images/swap-arrow.svg" alt="" />
        </div>

        <div className="swap-input">
          <div className="swap-form">
            <label htmlFor="You Pay">You Pay</label>
            <input type="number" placeholder="0.00" />
          </div>
          <button className="token" onClick={openModal}>
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
              <span>USDT</span>
            </div>
            <div title="drop down" id="drop-down">
              <img src="./Images/drop-down.svg" alt="" />
            </div>
          </button>
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

export default Swap;
