import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar-container">

        <div className="logo">
          <img src="./Images/logo.svg" alt="" />
        </div>

        <ul>
          <li>
            <a href="/">Trade</a>
          </li>

          <li>
            <a href="/perps">Perps</a>
          </li>

          <li>
            <a href="/pools">Pools</a>
          </li>
        </ul>

        <div className="navbar-cta">
          <div className="network">
            <img src="./Images/eth.svg" alt="" />
          </div>
          <button>Connect Wallet</button>
        </div>
    </div>
  );
};

export default NavBar;
