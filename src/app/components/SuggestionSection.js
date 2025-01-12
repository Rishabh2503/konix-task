import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SuggestionSection() {
  const [cryptoData, setCryptoData] = useState([]);

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

  const scrollCarousel = (direction, carouselId) => {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = carousel.clientWidth * 0.8; // Scroll 80% of the viewport width

    if (direction === 'left') {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Custom CSS for hiding scrollbar while maintaining scroll functionality
  const scrollStyles = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <div className="bg-white md:mt-2 p-8 w-full relative">
      <style>
        {scrollStyles}
      </style>
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="relative mt-4">
          <div
            className="flex overflow-x-auto no-scrollbar scroll-smooth relative gap-4 px-4"
            id="crypto-carousel-1"
          >
            {cryptoData
              .slice(0, 5)
              .map((crypto, index) =>
                <CryptoCard key={index} cryptoData={crypto.item} />
              )}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-200 z-10 backdrop-blur-sm border border-gray-100"
            onClick={() => scrollCarousel('left', 'crypto-carousel-1')}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-200 z-10 backdrop-blur-sm border border-gray-100"
            onClick={() => scrollCarousel('right', 'crypto-carousel-1')}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="relative mt-4">
          <div
            className="flex overflow-x-auto no-scrollbar scroll-smooth relative gap-4 px-4"
            id="crypto-carousel-2"
          >
            {cryptoData
              .slice(1, 6)
              .map((crypto, index) =>
                <CryptoCard key={index} cryptoData={crypto.item} />
              )}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-200 z-10 backdrop-blur-sm border border-gray-100"
            onClick={() => scrollCarousel('left', 'crypto-carousel-2')}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2.5 transition-all duration-200 z-10 backdrop-blur-sm border border-gray-100"
            onClick={() => scrollCarousel('right', 'crypto-carousel-2')}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CryptoCard({ cryptoData }) {
  return (
    <div className="lg:w-[300px] w-full rounded-2xl p-5 border-2 my-2 flex-shrink-0 hover:border-gray-300 transition-colors duration-200">
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
