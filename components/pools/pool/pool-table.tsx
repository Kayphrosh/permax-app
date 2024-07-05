import React from 'react'

const PoolTable = () => {
  return (
    <div className="pool-table-container">
      <div className="bar">
        <div className="tabs">
          <div className="tab active">All (20)</div>
          <div className="tab">My Pools</div>
          <div className="tab">CL</div>
        </div>

        <div className="search-bar">
          <input
            type="search"
            name=""
            placeholder="Search for token"
            id=""
          />
          <img src="/Images/search-icon.svg" alt="" />
        </div>
      </div>


      <div className='pool-table'>

            <div className="table-head">
                
            </div>
      </div>
    </div>
  );
}

export default PoolTable