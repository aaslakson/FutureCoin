/**
 * Authentication service for user management
 * This is a client-side simulation until backend is implemented
 */

import { hashData, generateSecureToken } from '../utils/crypto.js';
import { setSecureSession, getSecureSession, clearSession, STORAGE_KEYS } from '../utils/storage.js';
import { isValidEmail, validatePassword } from '../utils/validation.js';

// Session expiration time (24 hours in milliseconds)
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

/**
 * Register a new user
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} confirmPassword - Password confirmation
 * @returns {Promise<object>} - Registration result
 */
export async function register(email, password, confirmPassword) {
  // Validate inputs
  if (!isValidEmail(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match' };
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return { success: false, error: passwordValidation.message };
  }

  try {
    // Check if user already exists (in localStorage)
    const existingUsers = JSON.parse(localStorage.getItem('ftc_users') || '[]');
    if (existingUsers.find(u => u.email === email)) {
      return { success: false, error: 'User already exists' };
    }

    // Hash password
    const passwordHash = await hashData(password);

    // Generate wallet address
    const walletAddress = 'FC' + generateSecureToken(20);

    // Create user object
    const user = {
      id: generateSecureToken(16),
      email,
      passwordHash,
      walletAddress,
      balance: 0,
      createdAt: new Date().toISOString()
    };

    // Store user
    existingUsers.push(user);
    localStorage.setItem('ftc_users', JSON.stringify(existingUsers));

    return { 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        walletAddress: user.walletAddress,
        balance: user.balance
      }
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'Registration failed. Please try again.' };
  }
}

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<object>} - Login result
 */
export async function login(email, password) {
  try {
    // Validate inputs
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    // Get users from storage
    const users = JSON.parse(localStorage.getItem('ftc_users') || '[]');
    const user = users.find(u => u.email === email);

    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }

    // Verify password
    const passwordHash = await hashData(password);
    if (passwordHash !== user.passwordHash) {
      return { success: false, error: 'Invalid email or password' };
    }

    // Generate session token
    const sessionToken = generateSecureToken(32);
    const sessionData = {
      userId: user.id,
      email: user.email,
      token: sessionToken,
      expiresAt: new Date(Date.now() + SESSION_DURATION_MS).toISOString()
    };

    // Store session
    sessionStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, sessionToken);
    await setSecureSession(STORAGE_KEYS.USER_SESSION, sessionData, password);

    return { 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        walletAddress: user.walletAddress,
        balance: user.balance
      },
      token: sessionToken
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Login failed. Please try again.' };
  }
}

/**
 * Logout user
 */
export function logout() {
  clearSession();
}

/**
 * Get current user session
 * @param {string} password - User password for decryption
 * @returns {Promise<object|null>} - Session data or null
 */
export async function getCurrentSession(password) {
  try {
    const sessionData = await getSecureSession(STORAGE_KEYS.USER_SESSION, password);
    if (!sessionData) return null;

    // Check if session is expired
    if (new Date(sessionData.expiresAt) < new Date()) {
      clearSession();
      return null;
    }

    return sessionData;
  } catch (error) {
    console.error('Session retrieval error:', error);
    return null;
  }
}

/**
 * Verify authentication token
 * @returns {boolean} - True if token exists and is valid
 */
export function isAuthenticated() {
  const token = sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  return token !== null;
}

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @returns {object|null} - User data or null
 */
export function getUserById(userId) {
  const users = JSON.parse(localStorage.getItem('ftc_users') || '[]');
  const user = users.find(u => u.id === userId);
  
  if (!user) return null;

  // Return user without password hash for security (intentionally not used, excluding from result)
  // eslint-disable-next-line no-unused-vars
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}
