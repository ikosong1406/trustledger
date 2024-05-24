// MainScreen.js
import React, { useState } from "react";
import "../styles/Main.css";
import Piechart from "../components/Piechart";
import CandlestickChart from "../components/CandlestickChart";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaBitcoin, FaEthereum, FaChartBar } from "react-icons/fa";
import { SiStellar, SiRipple, SiSolana } from "react-icons/si";
import wallet from "../images/wallet.png";

const Main = () => {
  const [selectedAsset, setSelectedAsset] = useState("XLM");

  const balance = 10000; // Example balance in USD
  const profit = 1200; // Example profit
  const profitPercentage = 12; // Example profit percentage

  const assets = ["XLM", "Bitcoin", "XRL", "Solana", "Ethereum"];
  const assetIcons = {
    XLM: <SiStellar />,
    Bitcoin: <FaBitcoin />,
    XRL: <SiRipple />,
    Solana: <SiSolana />,
    Ethereum: <FaEthereum />,
  };

  return (
    <div className="mainDiv1">
      <div className="mainDiv2">
        <div className="balance-section">
          <div className="mainDiv3">
            <img src={wallet} alt="" />
          </div>
          <div className="mainDiv4">
            <h3>Today</h3>
            <h1>Balance: ${balance}</h1>
            <div className="profit-section">
              <AiOutlineArrowUp className="profit-icon" />
              <span className="profit-amount">
                ${profit} ({profitPercentage}%)
              </span>
            </div>
          </div>
        </div>
        <div className="chart-section">
          <h1>Asset Share</h1>
          <div className="doughnut-chart">
            <Piechart />
          </div>
        </div>
      </div>
      <div className="asset-selection">
        {assets.map((asset) => (
          <button
            key={asset}
            className={`asset-button ${
              selectedAsset === asset ? "active" : ""
            }`}
            onClick={() => setSelectedAsset(asset)}
          >
            {assetIcons[asset]} {asset}
          </button>
        ))}
      </div>
      <div className="candlestick-chart">
        <h2 style={{ color: "white" }}>Market Data: {selectedAsset}</h2>
        <CandlestickChart symbol={"IBM"} />
      </div>
    </div>
  );
};

export default Main;
