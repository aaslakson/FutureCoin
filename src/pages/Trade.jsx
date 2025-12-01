import { useState, useEffect } from 'react';
import { getStockData, getCryptoData } from '../services/apiService';
import { usePortfolio } from '../contexts/PortfolioContext';

const Trade = () => {
  const [asset, setAsset] = useState({ symbol: 'BTC', name: 'Bitcoin', pair: 'BTC/USD', price: 65523.40, change: 2.45 });
  const { balance, executeTrade } = usePortfolio();
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('Buy');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData(asset.symbol);
      setAsset(prev => ({ ...prev, price: data.price, change: data.percent_change }));
    };

    fetchData(); // Fetch immediately
    const interval = setInterval(fetchData, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, [asset.symbol]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePercentageClick = (percentage) => {
    if (orderType === 'Buy') {
      const maxBuy = balance / asset.price;
      setAmount((maxBuy * percentage).toFixed(6));
    } else {
      // Logic for Sell percentage would require knowing holdings from context
      // For now, let's just leave it or implement it if we pulled holdings in
    }
  };

  const handleTrade = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setFeedback({ type: 'error', message: 'Please enter a valid amount' });
      return;
    }

    const result = executeTrade(orderType, asset.symbol, numAmount, asset.price);
    setFeedback({ type: result.success ? 'success' : 'error', message: result.message });

    if (result.success) {
      setAmount('');
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const totalCost = (parseFloat(amount) || 0) * asset.price;

  return (
    <main className="flex-1 flex justify-center p-8 bg-background-dark overflow-y-auto">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <header>
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Place Order</p>
              <p className="text-[#9db9a6] text-base font-normal leading-normal">Select an asset and define your order parameters to execute a trade.</p>
            </div>
            <div className="flex flex-col items-end gap-1 min-w-48">
              <p className="text-sm text-[#9db9a6]">Available Balance</p>
              <p className="text-lg font-semibold text-white">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
        </header>

        {feedback && (
          <div className={`p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
            {feedback.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 bg-[#111813] p-6 rounded-xl">
            <div className="w-full">
              <label className="flex flex-col h-12">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#9db9a6] flex bg-[#28392e] items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#28392e] h-full placeholder:text-[#9db9a6] px-4 text-base font-normal leading-normal" placeholder="Search asset (e.g., BTC/USD, AAPL)" value={asset.pair} readOnly />
                </div>
              </label>
            </div>
            <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#28392e] p-1.5">
              <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 ${orderType === 'Buy' ? 'bg-medium-blue shadow-lg text-white' : 'text-[#9db9a6]'} text-sm font-bold transition-all`}>
                <span>BUY</span>
                <input checked={orderType === 'Buy'} className="invisible w-0" name="order-action" type="radio" value="Buy" onChange={() => setOrderType('Buy')} />
              </label>
              <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 ${orderType === 'Sell' ? 'bg-red-accent shadow-lg text-white' : 'text-[#9db9a6]'} text-sm font-bold transition-all`}>
                <span>SELL</span>
                <input checked={orderType === 'Sell'} className="invisible w-0" name="order-action" type="radio" value="Sell" onChange={() => setOrderType('Sell')} />
              </label>
            </div>
            <div className="w-full">
              <div className="flex border-b border-[#3b5443] gap-6">
                <a className="flex items-center justify-center border-b-[3px] border-b-primary text-white pb-3 pt-2" href="#">
                  <p className="text-sm font-bold leading-normal">Market</p>
                </a>
                <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-3 pt-2 hover:text-white transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal">Limit</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-[#9db9a6] mb-2" htmlFor="price">Price (USD)</label>
                <div className="relative">
                  <input className="form-input w-full bg-[#28392e] border-none rounded-lg text-white h-12 px-4 focus:ring-2 focus:ring-primary/50" id="price" type="text" value={asset.price.toLocaleString()} disabled />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#9db9a6] mb-2" htmlFor="amount">Amount ({asset.symbol})</label>
                <div className="relative">
                  <input className="form-input w-full bg-[#28392e] border-none rounded-lg text-white h-12 px-4 focus:ring-2 focus:ring-primary/50" id="amount" placeholder="0.00" type="number" value={amount} onChange={handleAmountChange} />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  {[0.25, 0.5, 0.75, 1].map((pct) => (
                    <button key={pct} onClick={() => handlePercentageClick(pct)} className="text-xs font-semibold text-[#9db9a6] bg-[#28392e] hover:bg-medium-blue/50 hover:text-white rounded-full px-3 py-1 transition-colors">
                      {pct * 100}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#111813] p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <img alt="Bitcoin logo" className="h-10 w-10" src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" />
              <div>
                <p className="text-xl font-bold text-white">{asset.name} ({asset.symbol})</p>
                <p className="text-sm text-[#9db9a6]">{asset.pair}</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-4 border-y border-[#28392e]">
              <div className="text-left">
                <p className="text-sm text-[#9db9a6]">Current Price</p>
                <p className="text-2xl font-semibold text-white">${asset.price.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#9db9a6]">24h Change</p>
                <p className={`text-lg font-semibold ${asset.change >= 0 ? 'text-green-accent' : 'text-red-accent'}`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change}%
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-lg font-bold text-white">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <p className="text-[#9db9a6]">Order Type</p>
                  <p className="font-medium text-white">Market {orderType}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#9db9a6]">Amount</p>
                  <p className="font-medium text-white">{amount || 0} {asset.symbol}</p>
                </div>
                <hr className="border-t border-[#28392e] my-1" />
                <div className="flex justify-between text-base">
                  <p className="text-[#9db9a6]">Total Cost</p>
                  <p className="font-bold text-white">${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>
            <button onClick={handleTrade} className={`w-full text-white font-bold py-3.5 rounded-lg text-base h-14 transition-colors focus:outline-none focus:ring-4 ${orderType === 'Buy' ? 'bg-medium-blue hover:bg-blue-700 focus:ring-medium-blue/30' : 'bg-red-accent hover:bg-red-700 focus:ring-red-accent/30'}`}>
              Place {orderType} Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trade;
