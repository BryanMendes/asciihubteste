import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PointsHistoryChart = () => {
  // Sample data - you should replace this with real data from your backend
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const points = [100, 220, 280, 350, 450, 534];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Pontos',
        data: points,
        borderColor: '#061380',
        backgroundColor: 'rgba(6, 19, 128, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#061380',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#061380',
        bodyColor: '#061380',
        borderColor: '#061380',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y} pontos`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
          callback: (value) => `${value} pts`,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PointsHistoryChart; 