const Header = () => {
  return (
    <header className="flex sticky top-0 z-10 items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-10 py-3">
      <div className="flex items-center gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-text-light-secondary dark:text-text-dark-secondary flex border-border-light dark:border-border-dark bg-white dark:bg-surface-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-0 focus:ring-0 border-none bg-white dark:bg-surface-dark focus:border-none h-full placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 rounded-l-none border-l-0 pl-2 text-base font-normal" placeholder="Search for tickers..." value="" />
          </div>
        </label>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-text-light-secondary dark:text-text-dark-secondary gap-2 text-sm font-bold min-w-0 px-2.5 hover:bg-primary/10 hover:text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold">
          <span className="truncate">New Order</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
