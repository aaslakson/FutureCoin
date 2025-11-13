import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const { currentUser } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {currentUser ? (
        <Dashboard />
      ) : (
        showRegister ? (
          <Register onSwitchToLogin={() => setShowRegister(false)} />
        ) : (
          <Login onSwitchToRegister={() => setShowRegister(true)} />
        )
      )}
    </div>
  );
}

export default App;
