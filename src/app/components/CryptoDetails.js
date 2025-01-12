'use client';
import { useEffect, useState } from 'react';
import PriceChart from './PriceChart';
import TrendingCoins from './TrendingCoins';
const sections = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];

export default function CryptoDetail() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Overview");
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
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24h_change=true'
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <img src="/bitcoin-logo.svg" alt="Bitcoin" className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Bitcoin (BTC)</h1>
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              Rank #1
            </span>
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold">
              ${bitcoinData.usd.toLocaleString()}
            </div>
            <div className="text-lg text-gray-600">
              ₹{bitcoinData.inr.toLocaleString()}
            </div>
            <div
              className={`inline-flex items-center space-x-2 ${bitcoinData.usd_24h_change >
              0
                ? 'text-green-500'
                : 'text-red-500'}`}
            >
              <span>
                {bitcoinData.usd_24h_change
                  ? bitcoinData.usd_24h_change.toFixed(2)
                  : 'N/A'}%
              </span>
              <span>(24H)</span>
            </div>
          </div>

          <PriceChart />
        </div>
      </div>
      <div className="flex overflow-x-scroll bg-gray-100 border-b border-gray-300">
        {sections.map((section, index) =>
          <button
            key={index}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 whitespace-nowrap ${activeSection === section
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500'}`}
          >
            {section}
          </button>
        )}
      </div>

      {/* Dynamic Section Rendering */}
      <div className="p-4">
        {activeSection === 'Overview' && <PerformanceComponent />}
        {activeSection === 'Fundamentals' && <div>Fundamentals Content</div>}
        {/* Add other sections similarly */}
      </div>
      <div className="lg:col-span-1">
        <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Started with KoinX for FREE
          </h2>
          <p className="mb-6">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
            Get Started for FREE →
          </button>
        </div>
        <TrendingCoins />
      </div>
    </div>
  );
}
