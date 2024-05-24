import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function Piechart() {
  const data = {
    labels: ["XLM", "Bitcoin", "XRL", "Solana", "Ethereum"],
    datasets: [
      {
        // label: "My First Dataset",
        data: [1000, 150, 500, 70, 250],
        backgroundColor: ["#dc2649", "yellow", "green", "blue", "gray"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  return (
    <div
      className="pie-chart-container"
      style={{ width: "50%", height: "350px", marginLeft: "10%" }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default Piechart;
