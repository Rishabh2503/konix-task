import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, YAxis } from "recharts";

const SAMPLE_CHART_DATA = Array.from({ length: 24 }, (_, i) => ({
  value: Math.random() * 100, // Random values for fallback data
}));

const CoinCard = ({ coin }) => {
  const [chartData, setChartData] = useState(SAMPLE_CHART_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchChartData();
  }, [coin.id]);

  const fetchChartData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=1&interval=hourly`
      );
      const prices = response.data.prices.map((price) => ({ value: price[1] }));
      setChartData(prices);
    } catch (error) {
      console.warn("Using sparkline or fallback data:", error.message);
      setChartData(
        coin.sparkline_in_7d?.price?.map((value) => ({ value })) || SAMPLE_CHART_DATA
      );
    } finally {
      setIsLoading(false);
    }
  };

  const priceChange = parseFloat(coin.price_change);
  const isPositive = priceChange >= 0;
  const lineColor = isPositive ? "#22c55e" : "#ef4444";

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <div className="flex items-center gap-2 mb-1">
        <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
        <span className="font-medium text-base">{coin.symbol}</span>
        <span
          className={`text-sm px-2 py-0.5 rounded-lg ${
            isPositive
              ? "text-green-600 bg-green-50"
              : "text-red-600 bg-red-50"
          }`}
        >
          {isPositive ? "+" : ""}
          {priceChange}%
        </span>
      </div>
      <div className="text-2xl font-bold mb-3">
        ${parseFloat(coin.price).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 6,
        })}
      </div>
      <div className="h-16">
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 h-full rounded-lg" />
        ) : (
          <LineChart
            width={270}
            height={60}
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <YAxis domain={["dataMin", "dataMax"]} hide={true} />
            <Line
              type="monotone"
              dataKey="value"
              stroke={lineColor}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        )}
      </div>
    </div>
  );
};

const TrendingCoinsCarousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const coins = response.data.coins.map((coin) => ({
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol.toUpperCase(),
        price: Math.random() * 100, // Mock price for demo purposes
        price_change: (Math.random() * 10 - 5).toFixed(2), // Mock price change
        logo: coin.item.thumb,
        sparkline_in_7d: coin.item.sparkline_in_7d, // Use sparkline from API
      }));
      setTrendingCoins(coins);
    } catch (error) {
      console.error("Error fetching trending coins:", error.message);
      // Use fallback coins if API fails
      setTrendingCoins([
        { id: "sample-1", name: "Sample Coin 1", symbol: "SC1", price: 50.23, price_change: "-2.34", logo: "/placeholder.png", sparkline_in_7d: { price: SAMPLE_CHART_DATA.map(d => d.value) } },
        { id: "sample-2", name: "Sample Coin 2", symbol: "SC2", price: 12.56, price_change: "+4.56", logo: "/placeholder.png", sparkline_in_7d: { price: SAMPLE_CHART_DATA.map(d => d.value) } },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const CarouselSection = ({ title, coins }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4 px-4">{title}</h2>
      <div className="relative">
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide">
          {coins.map((coin, index) => (
            <div key={`${coin.id}-${index}`} className="min-w-[280px] flex-shrink-0">
              <CoinCard coin={coin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="w-full p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map((n) => (
              <div key={n} className="min-w-[280px] h-[160px] bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <CarouselSection title="You May Also Like" coins={trendingCoins.slice(0, 5)} />
      <CarouselSection title="Trending Coins" coins={trendingCoins.slice(0, 5)} />
    </div>
  );
};

export default TrendingCoinsCarousel;
