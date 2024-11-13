import React, { useState, useEffect, useRef, memo } from "react";
import "../styles/Market.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Market = () => {
  const container = useRef();
  const container1 = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "CRYPTOCAP:XLM|1D"
            ],
            [
              "CRYPTOCAP:XRP|1D"
            ],
            [
              "CRYPTOCAP:USDT|1D"
            ],
            [
              "CRYPTOCAP:SOL|1D"
            ],
            [
              "CRYPTOCAP:ETH|1D"
            ],
            [
              "CRYPTOCAP:BTC|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "450",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
            {
  "width": "100%",
  "height": 300,
  "currencies": [
    "EUR",
    "USD",
    "JPY",
    "GBP",
    "CHF",
    "AUD",
    "CAD",
    "NZD"
  ],
  "isTransparent": false,
  "colorTheme": "dark",
  "locale": "en",
  "backgroundColor": "#000000"
}`;
    if (container1.current) {
      container1.current.appendChild(script);
    }

    return () => {
      if (container1.current) {
        container1.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="marketDiv1">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
      <div className="tradingview-widget-container" ref={container1}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default Market;
