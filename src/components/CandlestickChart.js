import React, { useEffect, useMemo, useState } from "react";
import { fetchStockData } from "./Services";
import { formatStockData } from "./Utils";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "./Constant";

const CandlestickChart = ({ symbol }) => {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    fetchStockData(symbol).then((data) => setStockData(data));
  }, []);

  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  return (
    <ReactApexChart
      series={[
        {
          data: seriesData,
        },
      ]}
      options={candleStickOptions}
      type="candlestick"
    />
  );
};

export default CandlestickChart;
