import { useState, useEffect } from 'react';
import { getStockData } from '../services/apiService';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 190.29, change: 0.85, volume: '52.3B', marketCap: '2.93T' },
    { symbol: 'BTC', name: 'Bitcoin', price: 68450.12, change: 2.54, volume: '45.8B', marketCap: '1.35T' },
    { symbol: 'ETH', name: 'Ethereum', price: 3560.78, change: -1.10, volume: '22.1B', marketCap: '427.8B' },
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: 120.51, change: 3.45, volume: '35.6B', marketCap: '2.96T' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 177.48, change: -2.31, volume: '9.81B', marketCap: '565.4B' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const updatedWatchlist = await Promise.all(
        watchlist.map(async (item) => {
          const data = item.symbol === 'BTC' || item.symbol === 'ETH'
            ? await getCryptoData(item.symbol)
            : await getStockData(item.symbol);
          return { ...item, price: data.price, change: data.percent_change };
        })
      );
      setWatchlist(updatedWatchlist);
    };

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [watchlist]);

  return (
    <main className="flex flex-1">
      <div className="flex-1 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">My Watchlist</p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-medium-blue text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-500 transition-colors">
            <span className="truncate">Add Symbol</span>
          </button>
        </div>
        <div className="flex gap-3 mb-6 flex-wrap">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 pl-4 pr-2 hover:bg-white/20 transition-colors">
            <p className="text-white text-sm font-medium leading-normal">My Watchlist</p>
            <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>arrow_drop_down</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent border border-white/10 pl-4 pr-4 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <p className="text-sm font-medium leading-normal">Tech Stocks</p>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent border border-white/10 pl-4 pr-4 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <p className="text-sm font-medium leading-normal">Crypto</p>
          </button>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr className="">
                <th className="px-4 py-3 text-left text-white/70 w-1/2 md:w-auto text-sm font-medium leading-normal">Asset</th>
                <th className="px-4 py-3 text-right text-white/70 w-1/4 md:w-auto text-sm font-medium leading-normal">Last Price</th>
                <th className="px-4 py-3 text-right text-white/70 w-1/4 md:w-auto text-sm font-medium leading-normal">24h Change</th>
                <th className="hidden xl:table-cell px-4 py-3 text-right text-white/70 text-sm font-medium leading-normal">24h Volume</th>
                <th className="hidden lg:table-cell px-4 py-3 text-right text-white/70 text-sm font-medium leading-normal">Market Cap</th>
                <th className="hidden 2xl:table-cell px-4 py-3 text-center text-white/70 text-sm font-medium leading-normal w-[120px]">24h Trend</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((item) => (
                <tr key={item.symbol} className="border-t border-t-white/10 hover:bg-white/5 cursor-pointer">
                  <td className="h-[72px] px-4 py-2">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white font-medium">{item.symbol}</p>
                        <p className="text-white/60 text-sm">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="h-[72px] px-4 py-2 text-right text-white text-sm font-normal leading-normal">${item.price.toLocaleString()}</td>
                  <td className={`h-[72px] px-4 py-2 text-right text-sm font-medium leading-normal ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </td>
                  <td className="hidden xl:table-cell h-[72px] px-4 py-2 text-right text-white/90 text-sm font-normal leading-normal">{item.volume}</td>
                  <td className="hidden lg:table-cell h-[72px] px-4 py-2 text-right text-white/90 text-sm font-normal leading-normal">{item.marketCap}</td>
                  <td className="hidden 2xl:table-cell h-[72px] px-4 py-2 w-[120px] text-white/90 text-sm font-normal leading-normal">
                    <svg className={`w-full h-8 ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`} fill="none" viewBox="0 0 100 25" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 20.5L15.5 12L29.5 15L43.5 8L58 14L72 5L86.5 10L100 1" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Watchlist;
