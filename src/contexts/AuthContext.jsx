/**
 * Authentication Context
 * Provides authentication state and methods throughout the app
 */

import { createContext, useContext, useState, useEffect } from 'react';
import { login as authLogin, register as authRegister, logout as authLogout, isAuthenticated } from '../auth/authService.js';
import { STORAGE_KEYS } from '../utils/storage.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = () => {
      try {
        if (isAuthenticated()) {
          const sessionData = sessionStorage.getItem(STORAGE_KEYS.USER_SESSION);
          if (sessionData) {
            try {
              // Note: In production, this would decrypt the session data
              // For now, we'll just check if user exists in storage
              const token = sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
              if (token) {
                // Get user from localStorage (simplified for client-side)
                const users = JSON.parse(localStorage.getItem('ftc_users') || '[]');
                if (users.length > 0) {
                  // In a real app, we'd verify the token and get the specific user
                  // For now, we'll set a flag that user is authenticated
                  setUser({ authenticated: true });
                }
              }
            } catch (err) {
              console.error('Session check error:', err);
            }
          }
        }
      } catch (err) {
        console.error('Auth check error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authLogin(email, password);
      
      if (result.success) {
        setUser(result.user);
        return { success: true, user: result.user };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch {
      const errorMessage = 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, confirmPassword) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authRegister(email, password, confirmPassword);
      
      if (result.success) {
        // Auto-login after registration
        const loginResult = await authLogin(email, password);
        if (loginResult.success) {
          setUser(loginResult.user);
          return { success: true, user: loginResult.user };
        }
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch {
      const errorMessage = 'Registration failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authLogout();
    setUser(null);
    setError(null);
  };

  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
