import React, { useState, useEffect, useRef } from 'react';
import TradingGraph from './trading-graph';
import Histories from './histories';
import PerpsTrade from './trade';

const Perps: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<string>('BTC');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleTokenClick = (token: string) => {
    setSelectedToken(token);
    setDropdownVisible(false);
  };

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getRateClassName = (rate: string) => {
    return rate.startsWith('-') ? 'rate-negative' : 'rate-positive';
  };

  return (
    <div className="perps-container">
      <main>
        <div className="left-side">
          <div className="top-bar">
            <div className="select-token" onClick={toggleDropdown}>
              <img id="token-icon" src="./Images/btc.svg" alt="" />
              <div className="details">
                <div className="token-name">BTCUSD</div>
                <div className="rate">20X</div>
              </div>
              <button title="drop-down">
                <img src="./Images/drop-down.svg" alt="" />
              </button>
            </div>

            {dropdownVisible && (
              <div className="all-tokens" ref={dropdownRef}>
                <div
                  className="perps-token"
                  onClick={() => handleTokenClick('BTC')}
                >
                  <div className="token-name">
                    <img src="./Images/btc.svg" alt="" />
                    <div>BTCUSD</div>
                  </div>
                  <div className="amount-rate">46362.00</div>
                  <div className={getRateClassName('-5%')}>-5%</div>
                </div>

                <div
                  className="perps-token"
                  onClick={() => handleTokenClick('ETH')}
                >
                  <div className="token-name">
                    <img src="./Images/eth.svg" alt="" />
                    <div>ETHUSD</div>
                  </div>
                  <div className="amount-rate">46362.00</div>
                  <div className={getRateClassName('+5%')}>+5%</div>
                </div>

                <div
                  className="perps-token"
                  onClick={() => handleTokenClick('SOL')}
                >
                  <div className="token-name">
                    <img src="./Images/sol.svg" alt="" />
                    <div>SOLUSD</div>
                  </div>
                  <div className="amount-rate">46362.00</div>
                  <div className={getRateClassName('-5%')}>-5%</div>
                </div>
              </div>
            )}

            <div className="token-rate">
              <div className="amount">70000.22</div>
              <div className={getRateClassName('5%')}>5%</div>
            </div>

            <div className="funding-rate">
              <div className="label">Funding Rate</div>
              <div>-0.000000%</div>
            </div>
            <div className="funding-rate">
              <div className="label">Funding Rate</div>
              <div>-0.000000%</div>
            </div>
            <div className="funding-rate">
              <div className="label">Funding Rate</div>
              <div>-0.000000%</div>
            </div>
          </div>
          <TradingGraph selectedToken={selectedToken} />
          <Histories />
        </div>

        <div className="right-side">
          <PerpsTrade />
        </div>
      </main>
    </div>
  );
};

export default Perps;
