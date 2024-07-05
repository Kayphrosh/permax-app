import { FC, useEffect } from 'react';

interface SelectTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const SelectTokenModal: FC<SelectTokenModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
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

        <div className="top-tokens">
          <div className="token">
            <div className="icon">
              <img src="./Images/frax-icon.svg" alt="" />
            </div>
            <div className="name">FRAX</div>
          </div>
          <div className="token">
            <div className="icon">
              <img src="./Images/usdc.svg" alt="" />
            </div>
            <div className="name">USDC</div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/btc.svg" alt="" />
            </div>
            <div className="name">Mother</div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/btc.svg" alt="" />
            </div>
            <div className="name">BTC</div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/bnb.svg" alt="" />
            </div>
            <div className="name">BNB</div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/eth.svg" alt="" />
            </div>
            <div className="name">ETH</div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
            </div>
            <div className="name">USDT</div>
          </div>
        </div>

        <div className="all-tokens">
          <div className="token">
            <div className="icon">
              <img src="./Images/frax-icon.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">FRAX</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>
          <div className="token">
            <div className="icon">
              <img src="./Images/usdc.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">USDC</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/btc.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/btc.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/bnb.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/eth.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>

          <div className="token">
            <div className="icon">
              <img src="./Images/usdt.svg" alt="" />
            </div>
            <div className="details">
              <div className="name">Mother</div>
              <div className="full-name">Curve DAO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTokenModal;
