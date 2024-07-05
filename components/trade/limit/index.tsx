import React, { useState } from 'react';
import SelectTokenModal from '../../select-token-modal';

const Limit = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="limit-container swap-container">
      <div className="limit-input swap-input">
        <div className="main">
          <div className="limit-form swap-form">
            <label htmlFor="">
              When 1{' '}
              <span>
                <img src="./images/bnb.svg" alt="" />
                BNB
              </span>
              is worth
            </label>

            <input className="value" placeholder="62249" />
          </div>
          <div className="ouput-currency">
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
              <span>USDT</span>
            </div>
          </div>
        </div>

        <div className="limit-rate">
          <div className="active">Market</div>
          <div>-2%</div>
          <div>-5%</div>
          <div>-10%</div>
          <div>-50%</div>
        </div>
      </div>
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

      <button className="swap-cta">Connect Wallet</button>

      <SelectTokenModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Limit;
