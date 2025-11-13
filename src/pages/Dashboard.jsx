import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from './DashboardContent';
import Portfolio from './Portfolio';
import Trade from './Trade';
import Research from './Research';
import News from './News';
import Settings from './Settings';
import Watchlist from './Watchlist';
import Profile from './Profile';
import TechnicalAnalysis from './TechnicalAnalysis';

const Dashboard = () => {
  return (
    <Router>
      <div className="flex h-screen w-full">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
