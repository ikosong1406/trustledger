import React, { useState, useEffect } from "react";
import "../styles/Market.css";
import axios from "axios";
import { SiStellar } from "react-icons/si";
import ReactApexChart from "react-apexcharts";

const Market = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    loading: true, // Add loading state
  });

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=XRP&market=USD&apikey=YOUR_API_KEY"
        );

        const timeSeries =
          response.data["Time Series (Digital Currency Daily)"];
        if (timeSeries) {
          const marketData = Object.keys(timeSeries).map((date) => {
            const dayData = timeSeries[date];
            return {
              x: new Date(date),
              y: [
                parseFloat(dayData["1. open"]),
                parseFloat(dayData["2. high"]),
                parseFloat(dayData["3. low"]),
                parseFloat(dayData["4. close"]),
              ],
            };
          });

          setChartData({
            series: [
              {
                data: marketData,
              },
            ],
            options: chartData.options,
            loading: false, // Update loading state
          });
        } else {
          console.error("Invalid API response structure", response.data);
        }
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData();
  }, []);
  return (
    <div className="marketDiv1">
      <div className="marketDiv2">
        <SiStellar className="s" />
        <h2>XLM</h2>
      </div>
      <div className="marketDiv3">
        <h3>Stellar</h3>
        <h1>23.751.00 US$</h1>
      </div>
      <div className="marketDiv4">
        <h3>1h</h3>
        <h3>24h</h3>
        <h3>7d</h3>
        <h3>30d</h3>
        <h3>90d</h3>
        <h3>1y</h3>
      </div>
      <div className="mainDiv4">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="candlestick"
          height={350}
        />
      </div>
    </div>
  );
};

export default Market;
