/**
 * User Dashboard Component
 * Displays user wallet and transaction management
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { createTransaction, getUserTransactions, TransactionType, calculateTransactionFee } from '../utils/transactions.js';
import { validateAmount } from '../utils/validation.js';
import './UserDashboard.css';

export default function UserDashboard() {
  const { user, logout, updateUser } = useAuth();
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.id) {
      loadTransactions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const loadTransactions = () => {
    if (user?.id) {
      const userTxs = getUserTransactions(user.id);
      setTransactions(userTxs);
    }
  };

  const handleTransaction = async (type) => {
    setError('');
    setSuccess('');

    const validation = validateAmount(amount);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    setLoading(true);

    try {
      const fee = calculateTransactionFee(validation.value, type);

      // Check balance for sell transactions
      if (type === TransactionType.SELL && user.balance < validation.value) {
        setError('Insufficient balance');
        setLoading(false);
        return;
      }

      const transaction = await createTransaction({
        type,
        fromAddress: type === TransactionType.SELL ? user.walletAddress : null,
        toAddress: type === TransactionType.BUY ? user.walletAddress : null,
        amount: validation.value,
        userId: user.id
      });

      // Simulate transaction processing
      setTimeout(() => {
        // Update user balance
        const newBalance = type === TransactionType.BUY 
          ? (user.balance || 0) + validation.value
          : (user.balance || 0) - validation.value;

        updateUser({ balance: newBalance });

        // Update transaction in storage
        const users = JSON.parse(localStorage.getItem('ftc_users') || '[]');
        const userIndex = users.findIndex(u => u.id === user.id);
        if (userIndex !== -1) {
          users[userIndex].balance = newBalance;
          localStorage.setItem('ftc_users', JSON.stringify(users));
        }

        // Store transaction
        const existingTxs = JSON.parse(localStorage.getItem('ftc_transactions') || '[]');
        existingTxs.push({ ...transaction, status: 'completed' });
        localStorage.setItem('ftc_transactions', JSON.stringify(existingTxs));

        setSuccess(`${type === TransactionType.BUY ? 'Purchase' : 'Sale'} of ${validation.value} FTC successful! Fee: ${fee.toFixed(8)} FTC`);
        setAmount('');
        loadTransactions();
        setLoading(false);
      }, 1000);

    } catch (err) {
      setError(err.message || 'Transaction failed');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <div className="user-info">
          <h2>Welcome back! 👋</h2>
          <p className="user-email">{user?.email}</p>
        </div>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="wallet-section">
        <div className="wallet-card">
          <h3>💰 Your Wallet</h3>
          <div className="wallet-address">
            <label>Wallet Address:</label>
            <code>{user?.walletAddress}</code>
          </div>
          <div className="balance">
            <label>Balance:</label>
            <div className="balance-amount">
              {(user?.balance || 0).toFixed(8)} FTC
            </div>
          </div>
        </div>
      </div>

      <div className="trading-section">
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
              step="0.00000001"
              disabled={loading}
            />
          </div>

          {amount && validateAmount(amount).isValid && (
            <div className="fee-info">
              Buy Fee: {calculateTransactionFee(parseFloat(amount), TransactionType.BUY).toFixed(8)} FTC<br />
              Sell Fee: {calculateTransactionFee(parseFloat(amount), TransactionType.SELL).toFixed(8)} FTC
            </div>
          )}

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="button-group">
            <button 
              className="buy-button" 
              onClick={() => handleTransaction(TransactionType.BUY)}
              disabled={loading || !amount}
            >
              {loading ? 'Processing...' : 'Buy FutureCoin'}
            </button>
            <button 
              className="sell-button" 
              onClick={() => handleTransaction(TransactionType.SELL)}
              disabled={loading || !amount}
            >
              {loading ? 'Processing...' : 'Sell FutureCoin'}
            </button>
          </div>
        </div>
      </div>

      <div className="transactions-section">
        <h3>Transaction History</h3>
        {transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet. Start trading to see your history!</p>
        ) : (
          <div className="transactions-list">
            {transactions.map((tx) => (
              <div key={tx.id} className={`transaction-item ${tx.type}`}>
                <div className="transaction-header">
                  <span className={`transaction-type ${tx.type}`}>
                    {tx.type.toUpperCase()}
                  </span>
                  <span className={`transaction-status ${tx.status}`}>
                    {tx.status}
                  </span>
                </div>
                <div className="transaction-details">
                  <div className="transaction-amount">
                    {tx.type === TransactionType.BUY ? '+' : '-'}
                    {tx.amount.toFixed(8)} FTC
                  </div>
                  <div className="transaction-date">
                    {formatDate(tx.timestamp)}
                  </div>
                </div>
                <div className="transaction-id">
                  ID: {tx.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
