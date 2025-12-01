// Service to fetch financial data from external APIs

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

// Map symbols to CoinGecko IDs
const SYMBOL_MAP = {
  'BTC': 'bitcoin',
  'ETH': 'ethereum',
  'SOL': 'solana',
  'DOGE': 'dogecoin',
  'ADA': 'cardano'
};

const mockStockData = {
  'AAPL': { price: 170.45, change: 1.2, percent_change: 0.73 },
  'TSLA': { price: 180.10, change: -4.07, percent_change: -3.1 },
  'NVDA': { price: 903.65, change: 5.16, percent_change: 5.16 },
  'SPY': { price: 546.30, change: 1.36, percent_change: 0.25 },
  'DOW': { price: 39150.33, change: 15.66, percent_change: 0.04 },
};

export const getStockData = async (symbol) => {
  // For stocks, we'll keep the mock data for now as free real-time stock APIs are rarer
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStockData[symbol] || { price: 0, change: 0, percent_change: 0 });
    }, 500);
  });
};

export const getCryptoData = async (symbol) => {
  const id = SYMBOL_MAP[symbol];
  if (!id) {
    console.warn(`Symbol ${symbol} not found in map, returning mock data.`);
    // Fallback or error
    return { price: 0, change: 0, percent_change: 0 };
  }

  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const assetData = data[id];

    return {
      price: assetData.usd,
      change: assetData.usd_24h_change, // This is percentage change in CoinGecko response usually? No, let's check documentation.
      // CoinGecko 'usd_24h_change' is percentage change.
      percent_change: assetData.usd_24h_change
    };
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    // Fallback to mock data if API fails (e.g. rate limit)
    return { price: 0, change: 0, percent_change: 0 };
  }
};
