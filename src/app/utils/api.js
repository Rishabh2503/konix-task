import axios from 'axios';

let cache = {};
let lastFetchTime = 0;
const CACHE_DURATION = 120000; // 1 minute in milliseconds

const fetchFromAPI = async url => {
  const currentTime = Date.now();

  // Check if the data is cached and still valid
  if (cache[url] && currentTime - lastFetchTime < CACHE_DURATION) {
    return cache[url];
  }

  try {
    const response = await axios.get(url);
    cache[url] = response.data; // Cache the response
    lastFetchTime = currentTime; // Update the last fetch time
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const getBitcoinData = () => {
  return fetchFromAPI(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24h_change=true'
  );
};

export const getHistoricalData = period => {
  return fetchFromAPI(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${period}`
  );
};

export const getTrendingCoins = () => {
  return fetchFromAPI('https://api.coingecko.com/api/v3/search/trending');
};
