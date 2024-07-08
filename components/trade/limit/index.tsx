import React, { useState } from 'react';
import SelectTokenModal from '../../select-token-modal';
interface Token {
  icon: string;
  name: string;
}

const Limit = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTokenField, setActiveTokenField] = useState<'pay' | 'receive'>(
    'pay',
  );
  const [tokens, setTokens] = useState({
    pay: { icon: './Images/eth.svg', name: 'ETH' },
    receive: { icon: './Images/usdt.svg', name: 'USDT' },
  });
  const [amounts, setAmounts] = useState({ pay: '', receive: '' });

  const openModal = (field: 'pay' | 'receive') => {
    setActiveTokenField(field);
    setModalOpen(true);
  };

  const handleTokenSelect = (token: Token) => {
    setTokens((prev) => ({ ...prev, [activeTokenField]: token }));
    setModalOpen(false);
  };

  const swapValues = () => {
    setTokens((prev) => ({ pay: prev.receive, receive: prev.pay }));
    setAmounts((prev) => ({ pay: prev.receive, receive: prev.pay }));
  };

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
            <input
              type="number"
              placeholder="0.00"
              value={amounts.pay}
              onChange={(e) =>
                setAmounts((prev) => ({ ...prev, pay: e.target.value }))
              }
            />
          </div>
          <button className="token" onClick={() => openModal('pay')}>
            <div className="icon">
              <img src={tokens.pay.icon} alt="" />
              <span>{tokens.pay.name}</span>
            </div>
          </button>
        </div>

        <button
          className="swap-input-button"
          title="Exchange values"
          onClick={swapValues}
        >
          <img src="./Images/swap-arrow.svg" alt="" />
        </button>

        <div className="swap-input">
          <div className="swap-form">
            <label htmlFor="You Receive">You Receive</label>
            <input
              type="number"
              placeholder="0.00"
              value={amounts.receive}
              onChange={(e) =>
                setAmounts((prev) => ({ ...prev, receive: e.target.value }))
              }
            />
          </div>
          <button className="token" onClick={() => openModal('receive')}>
            <div className="icon">
              <img src={tokens.receive.icon} alt="" />
              <span>{tokens.receive.name}</span>
            </div>
          </button>
        </div>
      </div>

      <button className="swap-cta">Connect Wallet</button>

      <SelectTokenModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleTokenSelect}
      />
    </div>
  );
};

export default Limit;
