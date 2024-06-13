import React, { useState, useEffect } from "react";
import "../styles/Market.css";
import axios from "axios";
import { SiStellar } from "react-icons/si";
import ReactApexChart from "react-apexcharts";
import Colors from "../components/Colors";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const navigation = useNavigate();
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Price",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      title: {
        text: "",
        align: "left",
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false, // Hide x-axis labels
        },
        axisBorder: {
          show: false, // Hide x-axis border
        },
        axisTicks: {
          show: false, // Hide x-axis ticks
        },
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
        },
        axisBorder: {
          show: false, // Hide y-axis border
        },
        axisTicks: {
          show: false, // Hide y-axis ticks
        },
        tooltip: {
          enabled: true,
        },
      },
      grid: {
        // show: false,
      },
      stroke: {
        colors: Colors.white, // Set the line color to white
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
              y: parseFloat(dayData["4. close"]), // Use the closing price for the line chart
            };
          });

          setChartData({
            series: [
              {
                name: "Price",
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

  const handleBuy = () => {
    navigation("/login");
  };

  return (
    <div className="marketDiv1">
      <div className="marketDiv2">
        <div className="marketDiv21">
          <SiStellar className="s" />
          <div>
            <h2>XLM</h2>
            <h2>Stellar</h2>
          </div>
        </div>
        <div className="marketDiv3">
          <h1>$163.80</h1>
          <h3>+ $8.04(2.3%)</h3>
        </div>
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
          type="line"
          height={400}
        />
      </div>

      <div className="marketDiv5">
        <div className="marketDiv51">
          <h4>current value</h4>
          <h1>$16,380.70</h1>
          <h3>$163.48</h3>
        </div>
        <div className="marketDiv51">
          <h4>lots</h4>
          <h1>X10</h1>
        </div>
      </div>
      <div className="depositDiv9">
        <button onClick={handleBuy}>BUY</button>
      </div>
    </div>
  );
};

export default Market;
