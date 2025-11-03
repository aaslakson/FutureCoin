/**
 * Register Component
 * Provides secure user registration interface
 */

import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { validatePassword } from '../utils/validation.js';
import './AuthForms.css';

export default function Register({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const { register, loading } = useAuth();

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value) {
      const validation = validatePassword(value);
      setPasswordStrength(validation.message);
    } else {
      setPasswordStrength('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password || !confirmPassword) {
      setLocalError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    const result = await register(email, password, confirmPassword);
    if (!result.success) {
      setLocalError(result.error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Create FutureCoin Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              placeholder="Create a strong password"
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {passwordStrength && (
            <div className={`password-strength ${validatePassword(password).isValid ? 'valid' : 'invalid'}`}>
              {passwordStrength}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            autoComplete="new-password"
          />
        </div>

        {localError && <div className="error-message">{localError}</div>}

        <div className="password-requirements">
          <p><strong>Password must contain:</strong></p>
          <ul>
            <li>At least 8 characters</li>
            <li>One uppercase letter</li>
            <li>One lowercase letter</li>
            <li>One number</li>
            <li>One special character</li>
          </ul>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <div className="auth-switch">
        <p>Already have an account?</p>
        <button onClick={onSwitchToLogin} className="link-button">
          Login
        </button>
      </div>

      <div className="security-notice">
        <p>🔒 Your password is securely hashed and encrypted</p>
      </div>
    </div>
  );
}
