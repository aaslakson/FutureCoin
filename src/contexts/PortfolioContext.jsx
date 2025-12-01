import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  // Initial state: User starts with $100,000 USD and 0 BTC
  const [balance, setBalance] = useState(100000);
  const [holdings, setHoldings] = useState({
    'BTC': 0,
    'ETH': 0
  });
  const [transactions, setTransactions] = useState([]);

  const executeTrade = (type, symbol, amount, price) => {
    const totalCost = amount * price;

    if (type === 'Buy') {
      if (balance >= totalCost) {
        setBalance(prev => prev - totalCost);
        setHoldings(prev => ({
          ...prev,
          [symbol]: (prev[symbol] || 0) + amount
        }));
        setTransactions(prev => [...prev, {
          type: 'Buy',
          symbol,
          amount,
          price,
          total: totalCost,
          date: new Date().toISOString()
        }]);
        return { success: true, message: `Successfully bought ${amount} ${symbol}` };
      } else {
        return { success: false, message: 'Insufficient funds' };
      }
    } else if (type === 'Sell') {
      if ((holdings[symbol] || 0) >= amount) {
        setBalance(prev => prev + totalCost);
        setHoldings(prev => ({
          ...prev,
          [symbol]: (prev[symbol] || 0) - amount
        }));
        setTransactions(prev => [...prev, {
          type: 'Sell',
          symbol,
          amount,
          price,
          total: totalCost,
          date: new Date().toISOString()
        }]);
        return { success: true, message: `Successfully sold ${amount} ${symbol}` };
      } else {
        return { success: false, message: `Insufficient ${symbol} balance` };
      }
    }
  };

  const value = {
    balance,
    holdings,
    transactions,
    executeTrade
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
