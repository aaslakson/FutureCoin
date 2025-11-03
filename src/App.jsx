import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')

  const handleBuy = () => {
    if (amount) {
      alert(`Buy order for ${amount} FutureCoins will be processed. Marketplace integration coming soon!`)
    }
  }

  const handleSell = () => {
    if (amount) {
      alert(`Sell order for ${amount} FutureCoins will be processed. Marketplace integration coming soon!`)
    }
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

        <section className="trading-section">
          <h3>Buy & Sell FutureCoin</h3>
          <div className="trading-card">
            <div className="input-group">
              <label htmlFor="amount">Amount (FTC)</label>
              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
            <div className="button-group">
              <button className="buy-button" onClick={handleBuy}>
                Buy FutureCoin
              </button>
              <button className="sell-button" onClick={handleSell}>
                Sell FutureCoin
              </button>
            </div>
            <p className="notice">
              * Marketplace integration in development
            </p>
          </div>
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
