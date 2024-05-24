

import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../Context/Context";
import "./Counter.css";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

function Counter() {
  const { counter, setCounter } = useContext(UserContext);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Counter",
        data: [],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4
      }
    ]
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    const newLabels = [...chartData.labels, time];
    const newData = [...chartData.datasets[0].data, counter];

    // Check if chart instance exists and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: newLabels,
        datasets: [{
          label: 'Counter',
          data: newData,
          fill: false,
          borderColor: 'rgb(98,0,234)',
          tension: 0.4
        }]
      }
    });

    setChartData({
      labels: newLabels,
      datasets: [
        {
          label: "Counter",
          data: newData,
          fill: false,
          borderColor: "rgb(98,0,234)",
          tension: 0.4
        }
      ]
    });
  }, [counter]);

  const increment = () => setCounter((preVal) => preVal + 1);
  const decrement = () => {
    if (counter !== 0) {
      setCounter((preVal) => preVal - 1);
    } else {
      alert("Counter cannot be negative.");
    }
  };
  const reset = () => setCounter(0);

  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <canvas id="chart"></canvas>
    </div>
  );
}

export default Counter;