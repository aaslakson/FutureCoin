// This is a mock API service that simulates fetching data from a financial API.
// It will be replaced with a real implementation once an API key is obtained.

const mockStockData = {
  'AAPL': { price: 170.45, change: 1.2, percent_change: 0.73 },
  'TSLA': { price: 180.10, change: -4.07, percent_change: -3.1 },
  'NVDA': { price: 903.65, change: 5.16, percent_change: 5.16 },
  'SPY': { price: 546.30, change: 1.36, percent_change: 0.25 },
  'DOW': { price: 39150.33, change: 15.66, percent_change: 0.04 },
};

const mockCryptoData = {
  'BTC': { price: 65342.50, change: 1372.17, percent_change: 2.1 },
  'ETH': { price: 3510.80, change: -17.55, percent_change: -0.5 },
};

export const getStockData = async (symbol) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStockData[symbol]);
    }, 500);
  });
};

export const getCryptoData = async (symbol) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCryptoData[symbol]);
    }, 500);
  });
};
