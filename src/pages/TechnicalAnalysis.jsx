const TechnicalAnalysis = () => {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden">
      <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col">
            <p className="text-white text-2xl font-black leading-tight">BTC/USD</p>
            <p className="text-gray-400 text-sm font-normal leading-normal">Bitcoin / US Dollar - Coinbase</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">1m</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">5m</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-primary/20 px-3 text-sm font-medium text-primary hover:bg-primary/30">15m</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">1H</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">4H</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">1D</button>
            <button className="h-8 shrink-0 items-center justify-center gap-x-2 rounded-md bg-transparent px-3 text-sm font-medium text-gray-300 hover:bg-white/10">1W</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">candlestick_chart</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">show_chart</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">add_chart</span>
          </button>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">photo_camera</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
      <div className="flex-1 flex min-h-0">
        <aside className="flex flex-col items-center gap-2 p-2 border-r border-white/10">
          <button className="p-2 text-gray-300 rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">horizontal_rule</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">gesture</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">brush</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">text_fields</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">percent</span>
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">straighten</span>
          </button>
          <div className="flex-1"></div>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </aside>
        <div className="flex-1 flex flex-col p-4">
          <div className="flex-1 bg-black/20 rounded-lg p-4">
            <div className="flex flex-col h-full">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-white text-base font-medium leading-normal">BTC/USD Price Chart</p>
                <div className="flex items-end gap-3">
                  <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$68,450.23</p>
                  <div className="flex gap-1 pb-1">
                    <p className="text-gray-400 text-base font-normal leading-normal">24H</p>
                    <p className="text-green-500 text-base font-medium leading-normal">+2.5%</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col mt-4">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 149" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                  <path className="text-primary" d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935" x1="236" x2="236" y1="1" y2="149">
                      <stop className="text-primary" stopColor="currentColor" stopOpacity="0.2"></stop>
                      <stop className="text-primary" offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-around mt-2">
                  <p className="text-gray-400 text-xs font-medium tracking-wide">10:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">12:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">14:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">16:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">18:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">20:00</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="flex flex-col w-80 border-l border-white/10 p-4 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Asset Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">24h Change</p>
                <p className="text-green-500">+1,673.12</p>
              </div>
              <div>
                <p className="text-gray-400">24h High</p>
                <p className="text-white">68,991.50</p>
              </div>
              <div>
                <p className="text-gray-400">24h Low</p>
                <p className="text-white">66,880.00</p>
              </div>
              <div>
                <p className="text-gray-400">24h Volume</p>
                <p className="text-white">34.8K BTC</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 bg-black/20 rounded-lg overflow-hidden">
            <h3 className="text-white font-semibold p-4">Order Book</h3>
            <div className="grid grid-cols-3 text-xs px-4 pb-2 border-b border-white/10">
              <span className="text-gray-400">Price (USD)</span>
              <span className="text-gray-400 text-right">Amount (BTC)</span>
              <span className="text-gray-400 text-right">Total</span>
            </div>
            <div className="overflow-y-auto">
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-red-500">68452.10</span>
                <span className="text-right">0.0512</span>
                <span className="text-right">3,504.75</span>
              </div>
              <div className="py-2 text-center text-lg font-bold text-white border-y border-white/10 my-1">68,450.23</div>
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-green-500">68449.80</span>
                <span className="text-right">0.1205</span>
                <span className="text-right">8,248.19</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 bg-black/20 rounded-lg overflow-hidden">
            <h3 className="text-white font-semibold p-4">Recent Trades</h3>
            <div className="grid grid-cols-3 text-xs px-4 pb-2 border-b border-white/10">
              <span className="text-gray-400">Price (USD)</span>
              <span className="text-gray-400 text-right">Amount (BTC)</span>
              <span className="text-gray-400 text-right">Time</span>
            </div>
            <div className="overflow-y-auto">
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-green-500">68450.11</span>
                <span className="text-right">0.0024</span>
                <span className="text-right text-gray-400">15:32:11</span>
              </div>
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-red-500">68451.98</span>
                <span className="text-right">0.0150</span>
                <span className="text-right text-gray-400">15:32:09</span>
              </div>
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-green-500">68450.05</span>
                <span className="text-right">0.0312</span>
                <span className="text-right text-gray-400">15:32:09</span>
              </div>
              <div className="grid grid-cols-3 text-xs p-2 px-4 hover:bg-white/5">
                <span className="text-red-500">68452.40</span>
                <span className="text-right">0.0088</span>
                <span className="text-right text-gray-400">15:32:05</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default TechnicalAnalysis;
