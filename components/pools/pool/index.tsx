import React from 'react';
import PoolTable from './pool-table';
const Pool = () => {
  return (
    <div className="pool-container">
      <div className="title">
        <h2>Pools</h2>
        <p>
          Create a pair or add liquidity to existing Correlated, Volatile, or
          Concentrated Liquidity positions.
        </p>
      </div>

        <PoolTable />

    </div>
  );
};

export default Pool;
