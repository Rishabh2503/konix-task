import { useState, useEffect } from 'react';
import axios from 'axios';

function SuggestionSection() {
  const [cryptoData, setCryptoData] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0); // State to track scroll position

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/search/trending')
      .then(response => {
        setCryptoData(response.data.coins);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const scrollCarousel = direction => {
    const carousel = document.getElementById('crypto-carousel');
    const scrollAmount = 300; // You can adjust this value for scrolling speed
    if (direction === 'left') {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white md:mt-2 p-8 w-full relative">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div
          className="mt-4 flex overflow-x-auto scroll-hidden no-scrollbar relative"
          id="crypto-carousel"
        >
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer"
            onClick={() => scrollCarousel('left')}
          >
            <span className="text-xl text-gray-700">&lt;</span>
          </div>

          {cryptoData
            .slice(0, 5)
            .map((crypto, index) =>
              <CryptoCard key={index} cryptoData={crypto.item} />
            )}

          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer"
            onClick={() => scrollCarousel('right')}
          >
            <span className="text-xl text-gray-700">&gt;</span>
          </div>
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div
          className="mt-4 flex overflow-x-auto no-scrollbar relative"
          id="crypto-carousel"
        >
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer"
            onClick={() => scrollCarousel('left')}
          >
            <span className="text-xl text-gray-700">&lt;</span>
          </div>

          {cryptoData
            .slice(1, 6)
            .map((crypto, index) =>
              <CryptoCard key={index} cryptoData={crypto.item} />
            )}

          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer"
            onClick={() => scrollCarousel('right')}
          >
            <span className="text-xl text-gray-700">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CryptoCard({ cryptoData }) {
  return (
    <div className="lg:w-[300px] w-full rounded-2xl p-5 border-2 my-2 mr-2 flex-shrink-0">
      <div className="flex items-center space-x-2">
        <img
          src={cryptoData.large}
          alt={cryptoData.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[16px] font-normal">
          {cryptoData.name}
        </span>
        <span
          className={`text-${cryptoData.data.price_change_percentage_24h.usd > 0
            ? 'green'
            : 'red'}-500 bg-${cryptoData.data.price_change_percentage_24h.usd >
          0
            ? '#0AB27D'
            : '#FF0000'}/10 text-xs font-normal pr-10`}
        >
          {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {cryptoData.data.price}
      </div>
      <img
        src={
          cryptoData && cryptoData.sparkline
            ? cryptoData.sparkline
            : 'https://www.coingecko.com/coins/33566/sparkline.svg'
        }
        alt={cryptoData && cryptoData.name ? cryptoData.name : ''}
        className="w-full h-20"
      />
    </div>
  );
}

export default SuggestionSection;
