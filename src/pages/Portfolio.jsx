const Portfolio = () => {
  return (
    <main className="flex-grow p-4 sm:p-6 lg:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <p className="text-text-dark dark:text-text-light text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Portfolio Overview</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">Total Portfolio Value</p>
            <p className="text-text-dark dark:text-text-light tracking-light text-3xl font-bold leading-tight">$1,250,432.80</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">24-Hour Change</p>
            <p className="text-gain tracking-light text-3xl font-bold leading-tight">+$5,123.45</p>
            <p className="text-gain text-sm font-medium leading-normal">+0.41%</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">Total Realized P&L</p>
            <p className="text-text-dark dark:text-text-light tracking-light text-3xl font-bold leading-tight">$82,194.11</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">Total Unrealized P&L</p>
            <p className="text-text-dark dark:text-text-light tracking-light text-3xl font-bold leading-tight">$15,678.90</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-text-dark dark:text-text-light text-lg font-medium leading-normal">Portfolio Performance</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-text-dark dark:text-text-light tracking-light text-3xl font-bold leading-tight truncate">$1,250,432.80</p>
                  <p className="text-gain text-base font-medium leading-normal">+3.1%</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white/5 dark:bg-background-dark p-1 rounded-lg">
                <button className="px-3 py-1 text-xs font-bold rounded-md bg-primary text-white">1D</button>
                <button className="px-3 py-1 text-xs font-bold rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-primary/20 hover:text-primary">1W</button>
                <button className="px-3 py-1 text-xs font-bold rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-primary/20 hover:text-primary">1M</button>
                <button className="px-3 py-1 text-xs font-bold rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-primary/20 hover:text-primary">1Y</button>
                <button className="px-3 py-1 text-xs font-bold rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-primary/20 hover:text-primary">ALL</button>
              </div>
            </div>
            <div className="flex min-h-[250px] flex-1 flex-col">
              <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#3B82F6" strokeLinecap="round" strokeWidth="3"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                    <stop stopColor="#3B82F6" stopOpacity="0.2"></stop>
                    <stop offset="1" stopColor="#3B82F6" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-panel-dark border border-white/10">
            <p className="text-text-dark dark:text-text-light text-lg font-medium leading-normal">Asset Allocation</p>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00C853" strokeDasharray="60, 100" strokeWidth="4"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3B82F6" strokeDasharray="25, 100" strokeDashoffset="-60" strokeWidth="4"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#D50000" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-text-dark dark:text-text-light">$1.25M</span>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Total Value</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#00C853]"></div>
                <span>Crypto (60%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#3B82F6]"></div>
                <span>Stocks (25%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#D50000]"></div>
                <span>Bonds (15%)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white dark:bg-panel-dark border border-white/10 overflow-hidden">
          <div className="border-b border-white/10 px-4">
            <div className="flex gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-3 pt-4" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Positions</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-muted-light dark:text-text-muted-dark hover:text-primary pb-3 pt-4 transition-colors" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Activity</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-muted-light dark:text-text-muted-dark hover:text-primary pb-3 pt-4 transition-colors" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Realized Gains</p>
              </a>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase bg-white/5 dark:bg-background-dark/50">
                <tr>
                  <th className="px-6 py-3" scope="col">Asset</th>
                  <th className="px-6 py-3 text-right" scope="col">Quantity</th>
                  <th className="px-6 py-3 text-right" scope="col">Avg. Cost</th>
                  <th className="px-6 py-3 text-right" scope="col">Last Price</th>
                  <th className="px-6 py-3 text-right" scope="col">Market Value</th>
                  <th className="px-6 py-3 text-right" scope="col">Unrealized P&L</th>
                  <th className="px-6 py-3 text-right" scope="col">24h Change</th>
                  <th className="px-6 py-3 text-right" scope="col">Allocation</th>
                  <th className="px-6 py-3 text-center" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5 dark:hover:bg-background-dark/50">
                  <th className="px-6 py-4 font-medium whitespace-nowrap text-text-dark dark:text-text-light flex items-center gap-3" scope="row">
                    <img alt="Bitcoin icon" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfJMs1x3OiFYSukVUZZ2mJsoJ_4v1HopXA6E-oE0Rd_rM5jGB0hPGrjihMTUShNUQaf7qTs1IbZJSVJ8RQLQdbfgwgWd0-PQKahkhIRQg0UOlHdaJRdgNl7brsdaoUnYoedMJb2CyO_rVc2aIqsRn8ncRCgkaS1sa8xYG_ajp2TAh16biBAbLvhL9L26PddKD1NfNWV_btjYmcknqkpsgOE9OmfyipZNGO7w13DLsqJ8P4H5nysOtCZCpQyoIulE9y4QTo8_M9Cok" />
                    <div>
                      <div>Bitcoin</div>
                      <div className="font-normal text-text-muted-light dark:text-text-muted-dark">BTC</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">5.1234</td>
                  <td className="px-6 py-4 text-right">$45,201.10</td>
                  <td className="px-6 py-4 text-right">$65,342.50</td>
                  <td className="px-6 py-4 text-right">$334,845.21</td>
                  <td className="px-6 py-4 text-right text-gain">+$103,184.15 (44.5%)</td>
                  <td className="px-6 py-4 text-right text-gain">+2.1%</td>
                  <td className="px-6 py-4 text-right">26.7%</td>
                  <td className="px-6 py-4 text-center"><button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors">Trade</button></td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 dark:hover:bg-background-dark/50">
                  <th className="px-6 py-4 font-medium whitespace-nowrap text-text-dark dark:text-text-light flex items-center gap-3" scope="row">
                    <img alt="Ethereum icon" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExkyT1XZ7EHdgZux5n0E0SkNbLDk5OR3EHu1LkAMPnnRMlKPlFN4qvDyRaz6UYvd3bg_6eR30qx5_55HT4g3g5VS_PrNpFYN8K1rp86Gl5z-P8MvFlEgpR6pwaz9XtUgsnnU-M5r4TNtn9QuYR-_hDW7tcm9KvUFWzAxSZQ2V15BsDyEXL-2BW_bwH-lx37htTfr5jr9zkBNLkJbm62-_TZdvUUqJAwAib0v8gTCkLSsg5Zj76X8qLsD3N_7wwd3HXWDDSCfqwcs" />
                    <div>
                      <div>Ethereum</div>
                      <div className="font-normal text-text-muted-light dark:text-text-muted-dark">ETH</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">100.50</td>
                  <td className="px-6 py-4 text-right">$2,890.45</td>
                  <td className="px-6 py-4 text-right">$3,510.80</td>
                  <td className="px-6 py-4 text-right">$352,835.40</td>
                  <td className="px-6 py-4 text-right text-gain">+$62,348.27 (21.5%)</td>
                  <td className="px-6 py-4 text-right text-loss">-0.5%</td>
                  <td className="px-6 py-4 text-right">28.2%</td>
                  <td className="px-6 py-4 text-center"><button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors">Trade</button></td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 dark:hover:bg-background-dark/50">
                  <th className="px-6 py-4 font-medium whitespace-nowrap text-text-dark dark:text-text-light flex items-center gap-3" scope="row">
                    <img alt="Apple Inc. icon" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9j7_g9hHghFj0osf--FwkMaSXntszdcfVUf3LqUNOxVAgglahPtmfG95oL-slHgetdYfrhx--Hr4RZyd29_S10FgWU_WxC8q3G8HFvarI-5m-Cbm9VCVZ92b8mmpRArDUy3K-BBHNQjBdNdR6JjTG6bK3ocAbatuNVC-VZsyAwvFkDvNQunQuCnDe8s17zQk8wJgssfzVPqjTFner17dJznaiDnDUQFeRXf38fd9YLZDbilV6mHYgKDEgzFl0acMlgkbdv3-fIx4" />
                    <div>
                      <div>Apple Inc.</div>
                      <div className="font-normal text-text-muted-light dark:text-text-muted-dark">AAPL</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">250</td>
                  <td className="px-6 py-4 text-right">$155.20</td>
                  <td className="px-6 py-4 text-right">$170.45</td>
                  <td className="px-6 py-4 text-right">$42,612.50</td>
                  <td className="px-6 py-4 text-right text-gain">+$3,812.50 (9.8%)</td>
                  <td className="px-6 py-4 text-right text-gain">+1.2%</td>
                  <td className="px-6 py-4 text-right">3.4%</td>
                  <td className="px-6 py-4 text-center"><button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors">Trade</button></td>
                </tr>
                <tr className="hover:bg-white/5 dark:hover:bg-background-dark/50">
                  <th className="px-6 py-4 font-medium whitespace-nowrap text-text-dark dark:text-text-light flex items-center gap-3" scope="row">
                    <img alt="Tesla, Inc. icon" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHj1AwIxTa3tjOLuEJ_qAA_bgECIOpTA8sblGoKp0nMubV_3HCC-fewynZWLe7mnkqOECV4GuPQeOdNUife-1uNBRElijGV55R9TYqq05Y2t4w4S7Xg7SHdyreiA6gRxx7tvyslc5rx0wcAaaFDidrFkkw_0d3ahOTNmQMHG1baf8P2etTlUF3syazMVzNZiZ_szcRMS1auUH9C_Y0-C-rjVZvnm2VvPxu18TGHvB1yFxv3cVnVWzZC29Qr5J1l3By1SvmQz2pe3M" />
                    <div>
                      <div>Tesla, Inc.</div>
                      <div className="font-normal text-text-muted-light dark:text-text-muted-dark">TSLA</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">100</td>
                  <td className="px-6 py-4 text-right">$220.80</td>
                  <td className="px-6 py-4 text-right">$180.10</td>
                  <td className="px-6 py-4 text-right">$18,010.00</td>
                  <td className="px-6 py-4 text-right text-loss">-$4,070.00 (-18.4%)</td>
                  <td className="px-6 py-4 text-right text-loss">-3.1%</td>
                  <td className="px-6 py-4 text-right">1.4%</td>
                  <td className="px-6 py-4 text-center"><button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors">Trade</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
