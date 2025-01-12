'use client';
import { useEffect, useState } from 'react';
import { getBitcoinData } from '../utils/api';
import BitcoinChart from './BitcoinChart';
import PerformanceSection from './PerformanceSection';
import About from './About';
import ToggleSection from './ToggleSection';
import SentimentSection from './SentimentSection';
import Tokenomics from './Tokenomics';
import TeamCard from './TeamCard';
import SuggestionSection from './SuggestionSection';
const sections = [
  'Overview',
  'Fundamentals',
  'News Insights',
  'Sentiments',
  'Team',
  'Technicals',
  'Tokenomics'
];

const CryptoDashboard = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('Overview');
  const PerformanceComponent = () => {
    return (
      <div className="w-full">
        {/* Performance Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold">Performance</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-500">Today's Low: 46,930.22</span>
              <div className="flex-grow h-1 bg-gradient-to-r from-red-500 to-green-500 relative">
                <span className="absolute left-1/2 top-[-10px] transform -translate-x-1/2 text-sm font-bold">
                  $48,637.83
                </span>
              </div>
              <span className="text-green-500">Today's High: 49,343.83</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-500">52W Low: 16,930.22</span>
              <div className="flex-grow h-1 bg-gradient-to-r from-red-500 to-green-500" />
              <span className="text-green-500">52W High: 49,743.83</span>
            </div>
          </div>

          {/* Fundamentals Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-500">Bitcoin Price</h3>
              <p className="font-bold">$16,815.46</p>
            </div>
            <div>
              <h3 className="text-gray-500">Market Cap</h3>
              <p className="font-bold">$323,507,290,047</p>
            </div>
            {/* Add other data points */}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const data = await getBitcoinData();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto ">
      {/* Header Section */}
      <div className="bg-white rounded-lg p-4 md:p-6">
        {/* Bitcoin Title and Rank */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 ">
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="Bitcoin"
              className="w-12 h-12 mr-1"
            />
            <h1 className="text-2xl font-semibold text-gray-900">Bitcoin</h1>
            <span className="text-gray-500 font-medium">BTC</span>
          </div>
          <div className="px-3 py-1.5 bg-gray-400 rounded-lg">
            <span className=" font-bold text-white">Rank #1</span>
          </div>
        </div>

        {/* Price Information */}
        <div className="space-y-2">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                ${bitcoinData.usd.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded ${bitcoinData.usd_24h_change >=
                  0
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'}`}
                >
                  <span className="text-sm">
                    {bitcoinData.usd_24h_change >= 0 ? '▲' : '▼'}
                  </span>
                  <span className="font-medium">
                    {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
                  </span>
                </div>
                <span className="text-gray-500 text-sm">(24H)</span>
              </div>
            </div>
          </div>
          <div className="text-lg text-gray-700">
            ₹ {bitcoinData.inr.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="mt-4 md:mt-8">
          <BitcoinChart />
        </div>
      </div>
      <ToggleSection />
      <PerformanceSection />
      <About />
      <SentimentSection />
      <Tokenomics />
      <TeamCard />
      <SuggestionSection />
    </div>
  );
};

export default CryptoDashboard;
