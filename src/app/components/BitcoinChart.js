'use client';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';
import { Loader2 } from 'lucide-react';
import { getHistoricalData } from '../utils/api'; // Import the API function

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function BitcoinChart() {
  const [prices, setPrices] = useState([]);
  const [finalTime, setFinalTime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activePeriod, setActivePeriod] = useState('7D');

  const timeButtons = [
    { label: '1H', value: '1' },
    { label: '24H', value: '1' },
    { label: '7D', value: '7' },
    { label: '1M', value: '30' },
    { label: '3M', value: '90' },
    { label: '6M', value: '180' },
    { label: '1Y', value: '365' },
    { label: 'ALL', value: 'max' }
  ];

  useEffect(
    () => {
      fetchHistoricalData(activePeriod);
    },
    [activePeriod]
  );

  const fetchHistoricalData = async period => {
    setIsLoading(true);
    try {
      const data = await getHistoricalData(period); // Use the API function
      const pricesArray = data.prices.map(price => price[1]);
      const timeArray = data.prices.map(price => {
        const date = new Date(price[0]);
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      });
      setPrices(pricesArray);
      setFinalTime(timeArray);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const data = {
    labels: finalTime,
    datasets: [
      {
        data: prices,
        borderColor: '#0052FE',
        borderWidth: 1.5,
        pointRadius: 0,
        fill: true,
        backgroundColor: context => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, 'rgba(0, 82, 254, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 82, 254, 0)');
          return gradient;
        },
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: window.innerWidth < 768 ? 4 : 8,
          color: '#616E85',
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      },
      y: {
        position: 'left',
        grid: {
          color: '#EFF2F5',
          drawBorder: false
        },
        ticks: {
          color: '#616E85',
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          },
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#000000',
        bodyColor: '#000000',
        borderColor: '#EFF2F5',
        borderWidth: 1,
        padding: window.innerWidth < 768 ? 8 : 12,
        displayColors: false,
        callbacks: {
          title: function(tooltipItems) {
            return '';
          },
          label: function(context) {
            return '$' + context.raw.toLocaleString();
          }
        }
      }
    }
  };

  return (
    <div className="w-full space-y-3 md:space-y-4 sm:p-0 md:p-0">
      {/* Chart Title and Time Period Selector */}
      <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <h2 className="text-base md:text-xl font-semibold text-gray-900">
          Bitcoin Price Chart (USD)
        </h2>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {timeButtons.map(({ label, value }) =>
            <button
              key={label}
              onClick={() => setActivePeriod(label)}
              className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full transition-all
                ${activePeriod === label
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {label}
            </button>
          )}
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[300px] md:h-[400px] relative">
        {isLoading &&
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
            <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-blue-600" />
          </div>}
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
