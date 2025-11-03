import { useState } from 'react'
import './App.css'
import { useAuth } from './contexts/AuthContext.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import UserDashboard from './components/UserDashboard.jsx'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="app">
        <header className="header">
          <div className="logo-section">
            <div className="logo">⚛️</div>
            <h1>FutureCoin</h1>
          </div>
          <p className="tagline">Powering the Clean Energy Revolution</p>
        </header>
        <main className="main-content">
          <div className="loading">Loading...</div>
        </main>
      </div>
    )
  }

  if (user) {
    return (
      <div className="app">
        <header className="header">
          <div className="logo-section">
            <div className="logo">⚛️</div>
            <h1>FutureCoin</h1>
          </div>
          <p className="tagline">Powering the Clean Energy Revolution</p>
        </header>
        <main className="main-content">
          <UserDashboard />
        </main>
        <footer className="footer">
          <p>&copy; 2025 FutureCoin. Supporting clean energy development.</p>
          <p className="disclaimer">
            Cryptocurrency investments carry risks. Please invest responsibly.
          </p>
        </footer>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo-section">
          <div className="logo">⚛️</div>
          <h1>FutureCoin</h1>
        </div>
        <p className="tagline">Powering the Clean Energy Revolution</p>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>A Virtual Currency for Tomorrow&apos;s Energy</h2>
          <p>
            FutureCoin is a revolutionary virtual currency directly tied to nuclear fusion 
            development and deployment. Every transaction supports the rapid advancement of 
            clean, sustainable energy for future generations.
          </p>
        </section>

        <section className="auth-section">
          {showRegister ? (
            <Register onSwitchToLogin={() => setShowRegister(false)} />
          ) : (
            <Login onSwitchToRegister={() => setShowRegister(true)} />
          )}
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>🔬 Mission</h3>
            <p>
              Supporting rapid development and deployment of nuclear fusion technology 
              to create unlimited clean energy for humanity.
            </p>
          </div>
          <div className="info-card">
            <h3>💰 Transparent Funding</h3>
            <p>
              All proceeds, minus maintenance and processing costs, benefit users and 
              directly fund clean energy development initiatives.
            </p>
          </div>
          <div className="info-card">
            <h3>🌍 Marketplace Ready</h3>
            <p>
              FutureCoin is designed to be available on all major cryptocurrency 
              marketplaces, ensuring liquidity and accessibility.
            </p>
          </div>
        </section>

        <section className="about-fusion">
          <h3>Why Nuclear Fusion?</h3>
          <p>
            Nuclear fusion is the process that powers the sun - combining light atomic nuclei 
            to release enormous amounts of clean energy. Unlike fossil fuels, fusion:
          </p>
          <ul>
            <li>Produces no greenhouse gases or long-lived radioactive waste</li>
            <li>Uses abundant fuel sources (hydrogen isotopes from seawater)</li>
            <li>Provides safe, continuous baseload power</li>
            <li>Represents the ultimate solution to global energy needs</li>
          </ul>
          <p>
            By investing in FutureCoin, you&apos;re directly supporting the technology that will 
            power a sustainable future for all of humanity.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 FutureCoin. Supporting clean energy development.</p>
        <p className="disclaimer">
          Cryptocurrency investments carry risks. Please invest responsibly.
        </p>
      </footer>
    </div>
  )
}

export default App
