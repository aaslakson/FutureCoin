const News = () => {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      <div className="flex-1 p-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">News & Research</p>
                <p className="text-[#9db9a6] text-base font-normal leading-normal">Real-time financial news, analyst recommendations, and reports.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#9db9a6] flex border-none bg-[#28392e] items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#28392e] h-full placeholder:text-[#9db9a6] px-4 text-base font-normal leading-normal" placeholder="Search news, tickers, keywords..." value="" />
                </div>
              </label>
              <div className="flex gap-3 overflow-x-auto pb-2">
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-3">
                  <span className="material-symbols-outlined text-white text-base">sell</span>
                  <p className="text-white text-sm font-medium leading-normal">Asset Class</p>
                  <span className="material-symbols-outlined text-white text-base">expand_more</span>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-3">
                  <span className="material-symbols-outlined text-white text-base">corporate_fare</span>
                  <p className="text-white text-sm font-medium leading-normal">Source</p>
                  <span className="material-symbols-outlined text-white text-base">expand_more</span>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-3">
                  <span className="material-symbols-outlined text-white text-base">article</span>
                  <p className="text-white text-sm font-medium leading-normal">Report Type</p>
                  <span className="material-symbols-outlined text-white text-base">expand_more</span>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-3">
                  <span className="material-symbols-outlined text-white text-base">calendar_today</span>
                  <p className="text-white text-sm font-medium leading-normal">Date Range</p>
                  <span className="material-symbols-outlined text-white text-base">expand_more</span>
                </button>
              </div>
            </div>
            <div className="border-b border-[#3b5443]">
              <div className="flex px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-2" href="#">
                  <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">All News</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-[13px] pt-2 hover:text-white" href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Analyst Ratings</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9db9a6] pb-[13px] pt-2 hover:text-white" href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Research Reports</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3 text-sm text-[#9db9a6] mb-2">
                  <img alt="Bloomberg logo" className="w-5 h-5 rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuqftmT2OUuuIM1h8ewZbrYAz27I-2058WDCsJ6Wc5Bq7bZk2q860XVfhQpWnN3VI16sMM8YIvGHVQqzOiwUZ3WSSu_kQLC9F7IBYWvUsE-om9KwDgn4XXVDtHz9JFa88iM7AQytfIxVCiT4dx84QEpOpUFmdGgU_kW57wrz8uIfs9ohoiLkSxaPTaetW9AuD19OM7vqyH9T5RwJJaNSSZVJ9gGQfgIDLKF-kVpmzqzMKnhtr2JMefEG0p1ZBWi6AuihwvQCZhyY" />
                  <span>Bloomberg</span>
                  <span>•</span>
                  <span>5m ago</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Federal Reserve Signals Potential Pause in Interest Rate Hikes Amid Inflation Concerns</h3>
                <p className="text-[#9db9a6] text-sm mb-3">Officials suggest a data-dependent approach for future meetings, closely monitoring economic indicators before making further decisions...</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$SPY</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$QQQ</span>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 ml-auto" title="Neutral Sentiment"></div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3 text-sm text-[#9db9a6] mb-2">
                  <img alt="Reuters logo" className="w-5 h-5 rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhjjPQSCvELmcQfqq2_yIxHifzaNERlZCL0kOIdRZfLchXT2FQ_RwnHZGEDjPyrwf52EIp2MHptJ8S5fcNHfmS9pkecrzzGyQIXR0xBrPj-oeZzeoO40y7Jf5CbIXoj2IXF0UR9AihoUr5HAg4325WzXCpPO9eBkkWLvKOfRE5Q7yWDOuMaaMZGnXSqsMSIyvhpMS_KsOrbhuHHfd0gN8Eiw2qVDV2_lMi3hnkgh7BRU4_oSJ6osUHly8E1xIfCI8138kZ53SKj70" />
                  <span>Reuters</span>
                  <span>•</span>
                  <span>12m ago</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">NVIDIA Shares Surge After Strong Earnings Report and Upbeat AI Chip Forecast</h3>
                <p className="text-[#9db9a6] text-sm mb-3">The chipmaker's quarterly results far surpassed Wall Street expectations, driven by booming demand for its artificial intelligence processors...</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$NVDA</span>
                  <div className="w-2 h-2 rounded-full bg-positive ml-auto" title="Positive Sentiment"></div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3 text-sm text-[#9db9a6] mb-2">
                  <img alt="J.P. Morgan logo" className="w-5 h-5 rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBel8zfiBLYadZNNOukjPIJTIipRWN38QG_IN4nrbX7IdBox8-XBrmC05kF3G3Jxg-N4iO80Pbfzm3YRf8M5XtxvWUNL5XyD3PgTLrMW4DPsf1_5YaxV9YtBpkYO0MGqudMlRLvhXFjLvhbwYLBv24GR8iHqgt8fGCSCe5zkwlKgkvMRPGbMDYl2zf_upiSRqV0pKzsb6ac9am2pDT6fzeOgCqmYGyisedcaKfI6o0XDd4B9eZAd_995UIuCXB3d-Io1XR7fU8x7dM" />
                  <span>J.P. Morgan</span>
                  <span>•</span>
                  <span>30m ago</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tesla ($TSLA) Upgraded to "Overweight" with Price Target of $250</h3>
                <p className="text-[#9db9a6] text-sm mb-3">Analysts cite improving production efficiency and strong demand for the Model Y as key drivers for the revised outlook...</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$TSLA</span>
                  <span className="inline-flex items-center gap-1.5 bg-positive/20 text-positive text-xs font-medium px-2 py-1 rounded-full">BUY</span>
                  <div className="w-2 h-2 rounded-full bg-positive ml-auto" title="Positive Sentiment"></div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer transition-colors duration-200">
                <div className="flex items-center gap-3 text-sm text-[#9db9a6] mb-2">
                  <img alt="CoinDesk logo" className="w-5 h-5 rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHfCevOx4ApL6GNrCOe6L2H5l_4oT7d1cYkSVfJwPiewz_GtkrezMjSnSm2hddu1fSoSNKgUW-38GsIfacxMYm_nWjIYMtD_S5cBVY-0VFqT2CncWSEjzWlJ24AmerhPXSXQRxZskTIJrRXOiKYXWRBgZcoZza4nBkTBN4AOn7ZQ2CHjPWVLMv5k2psCOrjkflPnb9sH0K-yVNzpXto-viURuzSPhT2zTgmCICUexwG5olamQOp8DbbviCaxDUCVzsbtxDfNaWKYU" />
                  <span>CoinDesk</span>
                  <span>•</span>
                  <span>45m ago</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Ethereum Network Upgrade 'Dencun' Successfully Deployed, Reducing Layer-2 Fees</h3>
                <p className="text-[#9db9a6] text-sm mb-3">The much-anticipated upgrade introduces "proto-danksharding," aimed at significantly lowering transaction costs for rollup solutions like Arbitrum and Optimism...</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$ETH</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#28392e] text-[#9db9a6] text-xs font-medium px-2 py-1 rounded-full">$ARB</span>
                  <div className="w-2 h-2 rounded-full bg-positive ml-auto" title="Positive Sentiment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-12 xl:col-span-4">
          <div className="sticky top-8 flex flex-col gap-6">
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Watchlist</h3>
                <button className="text-[#9db9a6] hover:text-white">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full" data-alt="Apple Inc. logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpo-VVSk1FCU7fQK7CW_ZLUVX-qVtbKloa_dCx8_83pvNs_2Iqh4Z0sH6IbGpfSqEFsGuhiOP36rLSY-DFucshXLyb-t6ySs-aKlotTYXOtNe7NuUoOms5P_3TlISlEbF5BjHIV8bUoeBlNULxZ5olQTMinQmQeOloVLOGGD_Fq_uyvTau6wmrUQCzqFYQMb3ctrcLTWhVn0Z-mYkBWVKVsp7fyyjDmir5nfv0KdmQlTQ2p-nXEbq7_Cw2Ftmrmi6bROAjVjeTzM" />
                    <div>
                      <p className="font-bold text-white">AAPL</p>
                      <p className="text-xs text-[#9db9a6]">Apple Inc.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$172.50</p>
                    <p className="text-xs text-positive">+1.25 (0.73%)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8" data-alt="Bitcoin logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8JD9ZUkmE9F_-2C0ztrF7PBAOLBpK1lQ4lnqH4bVHyzmnA3kSO9KO3TqYb_D5Ts85Q8cwHPpjkBPF6cUgFVFriWXHKvc-xmW57Z8cGCM_W--2qQW7_Ckayeh3T4QIi_BKg9yz0TBQbQOCyJcWLbn8G7Hp_wuqEIHexrfwvg-fAywLy7OVokZnnvonBKHcwwWqWHncrEXgo33RdIZd1IkimXHRQ1527YS-Gkngt7O8KU4d_jOkyltNwYAdSOU_sSBwbFCMbUAV4E0" />
                    <div>
                      <p className="font-bold text-white">BTC</p>
                      <p className="text-xs text-[#9db9a6]">Bitcoin</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$65,432.10</p>
                    <p className="text-xs text-negative">-812.45 (1.23%)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full" data-alt="Microsoft logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFtsZsJ2BUxbA0Jo59vNKgLJ8Tp-8P8DWokaw2MKZA5GZ2g2LOgn3lRpCiC4iEX75SMBLQtGGF1ApqGRMuP-AEq1bBPCnN94-TsdtOKbZaC72uYuD0cjCONdxEoRq1Tqv0p6n4lerO1jLc5lowp5gDGKpx5ec5tbkO_5Qn_3CCLWcJEM0sLMNAX4aHP4mdzubCSmtwYNko5AiTM6vayQO84oIoiI_sfyCt5RFbSz3NUtTk9VsPZ8HqXOIaJ9PWUpYBnMJceD8I1Fw" />
                    <div>
                      <p className="font-bold text-white">MSFT</p>
                      <p className="text-xs text-[#9db9a6]">Microsoft Corp.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$415.80</p>
                    <p className="text-xs text-positive">+3.10 (0.75%)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full" data-alt="Amazon logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsuEBHraT4JicsSuGTj2hg_mgk2IU9UeC7LxM24L7nlr4qTWiRDT8GfwtQQTFcIzj4900kaEki6uAHNn7IudkiaZ-gGWiA7cXCVgBx0a3lMysTJOYwh-c1TRNc790i1UhErpGk9obOtzLsz3HWkR7IRLtvmKUbZt-9ZFaTaBU2hFiycQMgT_98_FRymUSFmBzN9XUQRQfvAfC0soycoiYznD32l60zNc0GFiqNn6Z5iwIaZV3Q7yXqm-Oyf4ZjBemmmXsUdyAJio" />
                    <div>
                      <p className="font-bold text-white">AMZN</p>
                      <p className="text-xs text-[#9db9a6]">Amazon.com, Inc.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$178.22</p>
                    <p className="text-xs text-negative">-0.98 (0.55%)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Top Movers</h3>
                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-3 py-1.5 rounded-lg">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full" data-alt="NVIDIA logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnNevdgV2Fpb7SZQxytJSqNAe48PgF5lCIwCbTmw8Qym9NPypb3b7xMw5uJc8PBst9EpPHJHQ0FFxXUFkinttfFxm3MkC0DjLU6z_ZgLLEu3aPHRz5mcR7WwFZSieAUH2YNKKxMS_xKhW80IigQcvyW7FKl8w65qUToLUs324ybcD-8L8FCmQq_nKxYldahRWsQxbyv9MCh6ulGNNQsiKEOUb38_aErnAAdy-RiPjhiRRBjYxXPfDGKjrraKmj6MPTF0yflVb50wI" />
                    <div>
                      <p className="font-bold text-white">NVDA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$903.65</p>
                    <p className="text-xs font-semibold text-positive">+5.16%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full" data-alt="Boeing logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi_h-leoGANoHq7YYCXlsjKiFhuWHZR_bLAYLxA5AZqb-TBYytFTJDbbO03LTihSlOoE7zSSbYjjvRc4O7o6v89hK35aN-msJ5yGa9MjH-cHtCc7d8u2QCHJKaRXQBR_o30_izIjOuhUeG6s4l5ZHgJrFYawNq5GSJOzwllQnFNbezUCnUe379Q69UhrX_EZvbdqVSZX5j9byadmZWZcIDbAZvnIC5C3al_ALzrvv2rzstlUCpkXwWlVp6T-I30mMkrpei1B64Vrk" />
                    <div>
                      <p className="font-bold text-white">BA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$180.45</p>
                    <p className="text-xs font-semibold text-negative">-3.78%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default News;
