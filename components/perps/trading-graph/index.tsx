import React from 'react';

interface TradingGraphProps {
  selectedToken: string;
}

const TradingGraph: React.FC<TradingGraphProps> = ({ selectedToken }) => {
  const getGraphUrl = (token: string): string => {
    // Replace this with the actual URL or API endpoint to fetch the graph for the token
    const baseUrl = 'https://www.dextools.io/app/uniswap/pair-explorer/';
    const tokenUrls: { [key: string]: string } = {
      BTC: `${baseUrl}BTC_ADDRESS`,
      ETH: `${baseUrl}ETH_ADDRESS`,
      SOL: `${baseUrl}SOL_ADDRESS`,
    };
    return tokenUrls[token] || tokenUrls['BTC'];
  };

  return (
    <div className="trading-graph-container">
      <iframe
        src={getGraphUrl(selectedToken)}
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TradingGraph;
