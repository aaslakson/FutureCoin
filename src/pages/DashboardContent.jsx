import { useState, useEffect } from 'react';
import { getStockData, getCryptoData } from '../services/apiService';

const DashboardContent = () => {
  const [portfolioValue] = useState(1250345.67);
  const [dailyChange] = useState(12483.21);
  const [percentChange] = useState(1.01);
  const [positions, setPositions] = useState([
    { symbol: 'TSLA', quantity: 150, price: 177.48, pnl: 2105.50 },
    { symbol: 'BTC', quantity: 5.25, price: 67910.12, pnl: -8421.15 },
    { symbol: 'AAPL', quantity: 200, price: 214.29, pnl: 5832.00 },
    { symbol: 'ETH', quantity: 25.1, price: 3514.88, pnl: -1109.40 },
  ]);
  
  // Passive FutureCoin accumulator with Fibonacci-inspired growth
  const [coinBank, setCoinBank] = useState({
    accumulated: 0,
    birthTimestamp: Date.now(),
    fibSeq: [1, 1],
    pulseCount: 0,
  });
  
  const [watchlist, setWatchlist] = useState([
    { symbol: 'SPY', name: 'S&P 500 ETF', price: 546.30, change: 0.25 },
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: 129.61, change: -1.15 },
    { symbol: 'DOW', name: 'Dow Jones Industrial', price: 39150.33, change: 0.04 },
  ]);

  // Unique Fibonacci pulse accumulation for clean energy
  useEffect(() => {
    const pulseId = setInterval(() => {
      setCoinBank(bank => {
        const nextPulse = bank.pulseCount + 1;
        const lifespan = (Date.now() - bank.birthTimestamp) / 1000;
        const fibMultiplier = bank.fibSeq[bank.fibSeq.length - 1] / 1000000;
        const wealthDelta = 0.0012 + (fibMultiplier * 0.1);
        const newAccumulated = bank.accumulated + wealthDelta;
        
        const newFibSeq = [...bank.fibSeq];
        if (nextPulse % 10 === 0 && newFibSeq.length < 20) {
          const last = newFibSeq[newFibSeq.length - 1];
          const secondLast = newFibSeq[newFibSeq.length - 2];
          newFibSeq.push(last + secondLast);
        }
        
        return {
          accumulated: newAccumulated,
          birthTimestamp: bank.birthTimestamp,
          fibSeq: newFibSeq,
          pulseCount: nextPulse,
          environmentMetrics: {
            carbonPrevented: (newAccumulated * 9.2).toFixed(1),
            forestsGrown: (newAccumulated * 0.41).toFixed(2),
            fusionPowerMW: (newAccumulated * 0.0023).toFixed(4),
            lifespan: lifespan.toFixed(0),
          }
        };
      });
    }, 1000);
    
    return () => clearInterval(pulseId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const updatedPositions = await Promise.all(
        positions.map(async (position) => {
          const data = position.symbol === 'BTC' || position.symbol === 'ETH'
            ? await getCryptoData(position.symbol)
            : await getStockData(position.symbol);
          return { ...position, price: data.price, pnl: position.pnl + data.change };
        })
      );
      setPositions(updatedPositions);

      const updatedWatchlist = await Promise.all(
        watchlist.map(async (item) => {
          const data = await getStockData(item.symbol);
          return { ...item, price: data.price, change: data.percent_change };
        })
      );
      setWatchlist(updatedWatchlist);
    };

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [positions, watchlist]);

  return (
    <div className="flex-1 p-6 lg:p-8 space-y-8">
      <div className="flex flex-wrap justify-between gap-3">
        <p className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black tracking-[-0.033em] min-w-72">Dashboard</p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* FutureCoin Wealth Accumulator for Clean Energy */}
        <div className="col-span-12 bg-gradient-to-r from-emerald-800 via-teal-700 to-green-800 rounded-2xl p-8 shadow-2xl border-2 border-emerald-600">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">⚛️</div>
              <div>
                <h2 className="text-3xl font-extrabold text-white">FutureCoin Wealth Builder</h2>
                <p className="text-emerald-100 text-sm">Passively accumulating ecoins for fusion energy research</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
              <p className="text-emerald-100 text-xs font-semibold">LIVE ACCUMULATION</p>
              <p className="text-white text-3xl font-black">{coinBank.accumulated.toFixed(5)}</p>
              <p className="text-emerald-200 text-xs">FutureCoins</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <p className="text-emerald-200 text-xs font-medium mb-1">🌍 Carbon Offset</p>
              <p className="text-white text-lg font-bold">{coinBank.environmentMetrics?.carbonPrevented || 0} kg CO₂</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <p className="text-emerald-200 text-xs font-medium mb-1">🌲 Forest Impact</p>
              <p className="text-white text-lg font-bold">{coinBank.environmentMetrics?.forestsGrown || 0} acres</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <p className="text-emerald-200 text-xs font-medium mb-1">⚡ Fusion Power</p>
              <p className="text-white text-lg font-bold">{coinBank.environmentMetrics?.fusionPowerMW || 0} MW</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
              <p className="text-emerald-200 text-xs font-medium mb-1">⏱️ Runtime</p>
              <p className="text-white text-lg font-bold">{coinBank.environmentMetrics?.lifespan || 0}s</p>
            </div>
          </div>
          
          <div className="mt-4 bg-white/5 rounded-lg p-3">
            <p className="text-emerald-100 text-xs">
              <span className="font-semibold">Fibonacci Growth Active:</span> Using sequence growth pattern for accelerated wealth building • 
              Current pulse #{coinBank.pulseCount} • 
              All proceeds fund nuclear fusion research & deployment
            </p>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2">
              <p className="text-base font-medium">Portfolio Performance</p>
              <p className="tracking-light text-[32px] font-bold">${portfolioValue.toLocaleString()}</p>
              <div className="flex gap-1">
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal">1D</p>
                <p className={dailyChange >= 0 ? 'text-positive' : 'text-negative'}>
                  {dailyChange >= 0 ? '+' : ''}${dailyChange.toLocaleString()} ({percentChange}%)
                </p>
              </div>
              <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                <svg fill="none" height="148" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#9db9a6" strokeLinecap="round" strokeWidth="3"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="#28392e"></stop>
                      <stop offset="1" stopColor="#28392e" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Positions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary">
                  <tr>
                    <th className="py-2 px-4 font-medium">Ticker</th>
                    <th className="py-2 px-4 font-medium text-right">Quantity</th>
                    <th className="py-2 px-4 font-medium text-right">Last Price</th>
                    <th className="py-2 px-4 font-medium text-right">P&L</th>
                    <th className="py-2 px-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => (
                    <tr key={position.symbol} className="border-b border-border-light dark:border-border-dark">
                      <td className="py-3 px-4 font-bold">{position.symbol}</td>
                      <td className="py-3 px-4 text-right">{position.quantity}</td>
                      <td className="py-3 px-4 text-right">${position.price.toLocaleString()}</td>
                      <td className={`py-3 px-4 text-right ${position.pnl >= 0 ? 'text-positive' : 'text-negative'}`}>
                        {position.pnl >= 0 ? '+' : ''}${position.pnl.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right"><button className="text-primary font-bold text-xs">Trade</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Watchlist</h2>
            <div className="space-y-4">
              {watchlist.map((item) => (
                <div key={item.symbol} className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{item.symbol}</p>
                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{item.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price.toLocaleString()}</p>
                    <p className={`text-xs ${item.change >= 0 ? 'text-positive' : 'text-negative'}`}>
                      {item.change >= 0 ? '+' : ''}{item.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Market News</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Bloomberg · 1h ago</p>
                <p className="font-medium text-sm mt-1">Fed signals potential rate cuts later this year as inflation cools.</p>
              </div>
              <div>
                <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Reuters · 2h ago</p>
                <p className="font-medium text-sm mt-1">Tech stocks rally on strong earnings reports from major chipmakers.</p>
              </div>
              <div>
                <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">CoinDesk · 3h ago</p>
                <p className="font-medium text-sm mt-1">Bitcoin faces resistance at $70k as regulatory concerns linger.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
