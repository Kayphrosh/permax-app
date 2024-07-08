import React, { FC } from 'react';

interface SelectTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: { icon: string; name: string }) => void;
}

const SelectTokenModal: FC<SelectTokenModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  if (!isOpen) return null;

  const tokens = [
    { icon: './Images/frax-icon.svg', name: 'FRAX' },
    { icon: './Images/usdc.svg', name: 'USDC' },
    { icon: './Images/btc.svg', name: 'BTC' },
    { icon: './Images/bnb.svg', name: 'BNB' },
    { icon: './Images/eth.svg', name: 'ETH' },
    { icon: './Images/usdt.svg', name: 'USDT' },
  ];

  return (
    <div className="select-token-modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <h5>Select a token</h5>

          <button onClick={onClose} title="close">
            <img src="./Images/close.svg" alt="" />
          </button>
        </div>

        <div className="search-token">
          <input type="search" placeholder="Search by token or paste address" />
          <img src="./Images/search-icon.svg" alt="" />
        </div>
        <div className="all-tokens">
          {tokens.map((token) => (
            <div
              key={token.name}
              className="token"
              onClick={() => onSelect(token)}
            >
              <div className="icon">
                <img src={token.icon} alt={token.name} />
              </div>
              <div className="name">{token.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenModal;
