import { useState, useEffect } from 'react';
import { getStockData, getCryptoData } from '../services/apiService';

const Trade = () => {
  const [asset, setAsset] = useState({ symbol: 'BTC', name: 'Bitcoin', pair: 'BTC/USD', price: 65523.40, change: 2.45 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData(asset.symbol);
      setAsset({ ...asset, price: data.price, change: data.percent_change });
    };

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [asset]);

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
              <p className="text-lg font-semibold text-white">12,450.75 USD</p>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 bg-[#111813] p-6 rounded-xl">
            <div className="w-full">
              <label className="flex flex-col h-12">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#9db9a6] flex bg-[#28392e] items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#28392e] h-full placeholder:text-[#9db9a6] px-4 text-base font-normal leading-normal" placeholder="Search asset (e.g., BTC/USD, AAPL)" value={asset.pair} />
                </div>
              </label>
            </div>
            <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#28392e] p-1.5">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-medium-blue has-[:checked]:shadow-lg has-[:checked]:text-white text-[#9db9a6] text-sm font-bold transition-all">
                <span>BUY</span>
                <input checked="" className="invisible w-0" name="order-action" type="radio" value="Buy" />
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-red-accent has-[:checked]:shadow-lg has-[:checked]:text-white text-[#9db9a6] text-sm font-bold transition-all">
                <span>SELL</span>
                <input className="invisible w-0" name="order-action" type="radio" value="Sell" />
              </label>
            </div>
            <div className="w-full">
              <div className="flex border-b border-[#3b5443] gap-6">
                <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-3 pt-2 hover:text-white transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal">Market</p>
                </a>
                <a className="flex items-center justify-center border-b-[3px] border-b-primary text-white pb-3 pt-2" href="#">
                  <p className="text-sm font-bold leading-normal">Limit</p>
                </a>
                <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-3 pt-2 hover:text-white transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal">Stop</p>
                </a>
                <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-3 pt-2 hover:text-white transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal">Stop-Limit</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-[#9db9a6] mb-2" htmlFor="price">Price (USD)</label>
                <div className="relative">
                  <input className="form-input w-full bg-[#28392e] border-none rounded-lg text-white h-12 px-4 focus:ring-2 focus:ring-primary/50" id="price" type="text" value={asset.price.toLocaleString()} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#9db9a6] mb-2" htmlFor="amount">Amount (BTC)</label>
                <div className="relative">
                  <input className="form-input w-full bg-[#28392e] border-none rounded-lg text-white h-12 px-4 focus:ring-2 focus:ring-primary/50" id="amount" placeholder="0.00" type="text" />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button className="text-xs font-semibold text-[#9db9a6] bg-[#28392e] hover:bg-medium-blue/50 hover:text-white rounded-full px-3 py-1 transition-colors">25%</button>
                  <button className="text-xs font-semibold text-[#9db9a6] bg-[#28392e] hover:bg-medium-blue/50 hover:text-white rounded-full px-3 py-1 transition-colors">50%</button>
                  <button className="text-xs font-semibold text-[#9db9a6] bg-[#28392e] hover:bg-medium-blue/50 hover:text-white rounded-full px-3 py-1 transition-colors">75%</button>
                  <button className="text-xs font-semibold text-[#9db9a6] bg-[#28392e] hover:bg-medium-blue/50 hover:text-white rounded-full px-3 py-1 transition-colors">100%</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#111813] p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <img alt="Bitcoin logo" className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxY-eQ0K-s7kO7oPJH5PMaVy0giQCpfIMYLob_TLUclScJdIY21vaxqdY0X2fr7Wi6tIhfyDqdgNpZSCPBHekAzI0Xdff31Vd-kvy1eRHgwZoZzBLQrV0td1K_sD5_2bnHcPbfz-Zovde1Zhga4e6sQE5ywEYiTmtc_nxShckCDtRDmdF307m5HE28RtP_fhhqCigKWDgxOK3bxhlVbv2S38k_SbrC4KtovFqqQWCowiDN9bhWnLmVyDvxyDlECRrAUbdw4WTpmYQ" />
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
                  <p className="font-medium text-white">Limit Buy</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#9db9a6]">Amount</p>
                  <p className="font-medium text-white">0.5 BTC</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#9db9a6]">Limit Price</p>
                  <p className="font-medium text-white">$65,500.00</p>
                </div>
                <hr className="border-t border-[#28392e] my-1" />
                <div className="flex justify-between">
                  <p className="text-[#9db9a6]">Estimated Fees</p>
                  <p className="font-medium text-white">$32.75</p>
                </div>
                <div className="flex justify-between text-base">
                  <p className="text-[#9db9a6]">Total Cost</p>
                  <p className="font-bold text-white">$32,782.75</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-medium-blue text-white font-bold py-3.5 rounded-lg text-base h-14 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-medium-blue/30">
              Place Buy Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trade;
