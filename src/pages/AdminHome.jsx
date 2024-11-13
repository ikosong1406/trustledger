import React, { useState, useEffect, useRef, memo } from "react";
import "../styles/AdminHome.css";
import { FaUsers } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import api from "../Api/BackendApi";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const AdminHome = () => {
  const [numUsers, setNumUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${api}/allUsers`);
        setNumUsers(response.data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const container = useRef();

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
          "height": "500",
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

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="adHomeMain" style={{ minHeight: 500 }}>
      <div className="adHomeDiv1">
        <h1 style={{ color: Colors.white, marginLeft: 20 }}>Dashboard</h1>
      </div>
      <div className="adHomeDiv2">
        <div className="adHomeDiv21">
          <div className="adHome211">
            <p style={{ color: "gray", fontWeight: 500 }}>Total User</p>
            <h2 style={{ color: Colors.white }}>{numUsers}</h2>
          </div>
          <FaUsers
            style={{
              fontSize: 35,
              padding: 5,
              backgroundColor: "purple",
              color: Colors.white,
              borderRadius: 10,
            }}
          />
        </div>
        <div className="adHomeDiv21">
          <div className="adHome211">
            <p style={{ color: "gray", fontWeight: 500 }}>Total Order</p>
            <h2 style={{ color: Colors.white }}>0</h2>
          </div>
          <FaFirstOrder
            style={{
              fontSize: 35,
              padding: 5,
              backgroundColor: "blue",
              color: Colors.white,
              borderRadius: 10,
            }}
          />
        </div>
        <div className="adHomeDiv21">
          <div className="adHome211">
            <p style={{ color: "gray", fontWeight: 500 }}>Total Sales</p>
            <h2 style={{ color: Colors.white }}>$0</h2>
          </div>
          <FaChartLine
            style={{
              fontSize: 35,
              padding: 5,
              backgroundColor: "green",
              color: Colors.white,
              borderRadius: 10,
            }}
          />
        </div>
        <div className="adHomeDiv21">
          <div className="adHome211">
            <p style={{ color: "gray", fontWeight: 500 }}>Total Pending</p>
            <h2 style={{ color: Colors.white }}>0</h2>
          </div>
          <MdOutlinePendingActions
            style={{
              fontSize: 35,
              padding: 5,
              backgroundColor: "orange",
              color: Colors.white,
              borderRadius: 10,
            }}
          />
        </div>
      </div>
      <div className="adHomeDiv3">
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
