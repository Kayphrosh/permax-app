import React, { useEffect, useRef } from 'react';

interface TradingGraphProps {
  selectedToken: string;
  onDataUpdate: (data: any) => void;
}

const TradingGraph: React.FC<TradingGraphProps> = ({
  selectedToken,
  onDataUpdate,
}) => {
  const widgetRef = useRef<any>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadWidget = () => {
      if (window.TradingView) {
        // Check if TradingView is available on window
        widgetRef.current = new window.TradingView.widget({
          container_id: 'tradingview_12345',
          symbol: selectedToken,
          autosize: true,
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          details: false,
          studies: ['Volume@tv-basicstudies'],
          show_popup_button: true,
        });
      } else {
        console.error('TradingView library is not loaded yet.');
      }
    };

    // Load the TradingView script
    if (!window.TradingView) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = loadWidget;
      document.body.appendChild(script);
    } else {
      loadWidget();
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.remove();
      }
    };
  }, [selectedToken]);

  return (
    <>
      <style>
        {`
          :root {
            --tv-color-pane-background: #000000; /* Changing background color for both light and dark themes */
          }
          .theme-dark {
            --tv-color-pane-background: #000000; /* Specific override for dark theme if needed */
          }
        `}
      </style>
      <div
        ref={chartContainerRef}
        id="tradingview_12345"
        className="trading-graph-container"
      ></div>
    </>
  );
};

export default TradingGraph;
