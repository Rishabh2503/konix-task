// components/Sidebar.js
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import image1 from "../assets/apple.svg"
const GetStartedCard = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-8 md:mt-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">
        Get Started with KoinX
        <br />
        for FREE
      </h2>
      <p className="text-sm mb-8 opacity-90">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <div className="mb-8">
        <Image
          src={image1} 
          alt="Crypto Tax Illustration"
          className="w-48 h-48 mx-auto"
        />
      </div>
      <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors">
        Get Started for FREE
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const processedCoins = response.data.coins.slice(0, 3).map(coin => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol.toUpperCase(),
          image: coin.item.small,
          priceChange: coin.item.data.price_change_percentage_24h?.usd || 0
        }));
        setTrendingCoins(processedCoins);
        setError(null);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setError('Failed to load trending coins');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      
      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div key={coin.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src={coin.image} 
                  alt={coin.name} 
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium">
                  {coin.name} ({coin.symbol})
                </span>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-sm ${
                coin.priceChange >= 0 
                  ? 'bg-green-50 text-green-600' 
                  : 'bg-red-50 text-red-600'
              }`}>
                <span className="text-sm">
                  {coin.priceChange >= 0 ? '▲' : '▼'}
                </span>
                <span className="font-medium text-sm">
                  {Math.abs(coin.priceChange).toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <GetStartedCard />
      <TrendingCoins />
    </div>
  );
};

export default Sidebar;