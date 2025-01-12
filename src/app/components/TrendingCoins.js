"use client"
import { useEffect, useState } from 'react';

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6" />
              <span>{coin.item.symbol.toUpperCase()}</span>
            </div>
            <div className={`px-2 py-1 rounded ${coin.item.data.price_change_percentage_24h.usd > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}