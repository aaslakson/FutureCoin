import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark p-4">
      <div className="flex items-center gap-2 px-3 py-2">
        <svg className="text-primary size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
        </svg>
        <h2 className="text-xl font-bold">FutureCoin</h2>
      </div>
      <div className="flex flex-grow flex-col justify-between mt-6">
        <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </Link>
          <Link to="/portfolio" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <p className="text-sm font-medium">Portfolio</p>
          </Link>
          <Link to="/trade" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">swap_horiz</span>
            <p className="text-sm font-medium">Trade</p>
          </Link>
          <Link to="/research" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">monitoring</span>
            <p className="text-sm font-medium">Research</p>
          </Link>
          <Link to="/news" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">feed</span>
            <p className="text-sm font-medium">News</p>
          </Link>
          <Link to="/watchlist" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">star</span>
            <p className="text-sm font-medium">Watchlist</p>
          </Link>
          <Link to="/technical-analysis" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">analytics</span>
            <p className="text-sm font-medium">Technical Analysis</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture of Alex Doe" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuns_NGQ0PXrTA_ofV6ZdNdiR7wCZJJvY8iDuNHPaqGNSUk1UEZHeKEjooi2lRtRQeA7ng-M6m3LDtcNILuXvXJOGKDzSAIOLHP-g6Mi03dHqOqaIKBC3NPk_mefIVgWHxYByFyWxVlOLI6lLykoyZQxGLlqJLXd4i8Wad-kjMK-QdEz7F4td6sGBkxY_9qynbrc7KSJyUkOv7aqkpXU4LZ73rklX6AdRug6JCN4Uxi2XIhamojdQ5_UZEp9QBkYYe6AJ3WkW9thY")'}}></div>
            <div className="flex flex-col">
              <h1 className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">Alex Doe</h1>
              <p className="text-sm font-normal">alex.doe@email.com</p>
            </div>
          </div>
          <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">person</span>
            <p className="text-sm font-medium">Profile</p>
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
