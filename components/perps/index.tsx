import React, { useState, useEffect, useRef } from 'react';
import TradingGraph from './trading-graph';
import Histories from './histories';
import PerpsTrade from './trade';
import LoadingSpinner from '../loading-spinner';

interface Rates {
  price: number;
  high: number;
  low: number;
  volume: number;
}

const tokenImages: Record<string, string> = {
  BTCUSD: './Images/btc.svg',
  ETHUSD: './Images/eth.svg',
  SOLUSD: './Images/sol.svg',
  // Add more tokens and their image paths as needed
};

const Perps: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<string>('BTCUSD');
  const [loading, setLoading] = useState<boolean>(true);
  const [rates, setRates] = useState<Rates | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleTokenClick = (token: string) => {
    setSelectedToken(token);
    setLoading(true); // Trigger loading state when token is changed
    setDropdownVisible(false); // Close dropdown menu
  };

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Setup to handle clicks outside the dropdown to close it
    const listener = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, []);

  const handleDataUpdate = (data: Rates) => {
    setRates(data);
    setLoading(false); // Update loading state when data is received
  };

  const getRateClassName = (rate: number) =>
    rate < 0 ? 'rate-negative' : 'rate-positive';

  return (
    <div className="perps-container">
      <main>
        <div className="left-side">
          <div className="top-bar">
            <div className="select-token" onClick={toggleDropdown}>
              <img
                id="token-icon"
                src={tokenImages[selectedToken] || './Images/default.svg'}
                alt={selectedToken}
              />
              <div className="details">
                <div className="token-name">{selectedToken}</div>
                <div className="rate">20X</div>
              </div>
              <button title="drop-down">
                <img src="./Images/drop-down.svg" alt="Dropdown" />
              </button>
            </div>

            {dropdownVisible && (
              <div className="all-tokens" ref={dropdownRef}>
                {Object.keys(tokenImages).map((token) => (
                  <div
                    key={token}
                    className="perps-token"
                    onClick={() => handleTokenClick(token)}
                  >
                    <div className="token-name">
                      <img src={tokenImages[token]} alt={token} />
                      <div>{token}</div>
                    </div>
                    <div className="amount-rate">
                      {loading ? (
                        <LoadingSpinner />
                      ) : (
                        `$${rates?.price.toFixed(2)}`
                      )}
                    </div>
                    <div className={getRateClassName(-5)}>-5%</div>
                  </div>
                ))}
              </div>
            )}

            <div className="token-rate">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <div className="amount">
                  $${rates?.price?.toFixed(2) || 'Loading...'}
                </div>
              )}
              <div className={getRateClassName(5)}>5%</div>
            </div>
            <div className="funding-rate">
              <div className="label">Funding Rate</div>
              <div>-0.000000%</div>
            </div>
            <div className="funding-rate">
              <div className="label">24h High</div>
              <div>-0.10%</div>
            </div>
            <div className="funding-rate">
              <div className="label">24h Low</div>
              <div>-0.10%</div>
            </div>
            <div className="funding-rate">
              <div className="label">24h Vol</div>
              <div>-0.000000%</div>
            </div>
          </div>

          <TradingGraph
            selectedToken={selectedToken}
            onDataUpdate={handleDataUpdate}
          />
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
