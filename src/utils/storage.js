/**
 * Secure storage utilities for sensitive data
 * Uses sessionStorage for temporary data and localStorage for persistent data
 * All sensitive data is encrypted before storage
 */

import { encryptData, decryptData } from './crypto.js';

const STORAGE_KEYS = {
  USER_SESSION: 'ftc_user_session',
  WALLET_DATA: 'ftc_wallet_data',
  AUTH_TOKEN: 'ftc_auth_token',
  USER_PREFERENCES: 'ftc_user_prefs'
};

/**
 * Store encrypted data in sessionStorage
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 * @param {string} password - Encryption password
 */
export async function setSecureSession(key, data, password) {
  try {
    const encrypted = await encryptData(JSON.stringify(data), password);
    sessionStorage.setItem(key, JSON.stringify(encrypted));
    return true;
  } catch (error) {
    console.error('Failed to store secure session:', error);
    return false;
  }
}

/**
 * Retrieve and decrypt data from sessionStorage
 * @param {string} key - Storage key
 * @param {string} password - Decryption password
 * @returns {any} - Decrypted data or null
 */
export async function getSecureSession(key, password) {
  try {
    const encrypted = sessionStorage.getItem(key);
    if (!encrypted) return null;
    
    const encryptedObj = JSON.parse(encrypted);
    const decrypted = await decryptData(encryptedObj, password);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Failed to retrieve secure session:', error);
    return null;
  }
}

/**
 * Store encrypted data in localStorage
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 * @param {string} password - Encryption password
 */
export async function setSecureLocal(key, data, password) {
  try {
    const encrypted = await encryptData(JSON.stringify(data), password);
    localStorage.setItem(key, JSON.stringify(encrypted));
    return true;
  } catch (error) {
    console.error('Failed to store secure local:', error);
    return false;
  }
}

/**
 * Retrieve and decrypt data from localStorage
 * @param {string} key - Storage key
 * @param {string} password - Decryption password
 * @returns {any} - Decrypted data or null
 */
export async function getSecureLocal(key, password) {
  try {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    
    const encryptedObj = JSON.parse(encrypted);
    const decrypted = await decryptData(encryptedObj, password);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Failed to retrieve secure local:', error);
    return null;
  }
}

/**
 * Clear all secure storage
 */
export function clearSecureStorage() {
  Object.values(STORAGE_KEYS).forEach(key => {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  });
}

/**
 * Clear only session data
 */
export function clearSession() {
  sessionStorage.removeItem(STORAGE_KEYS.USER_SESSION);
  sessionStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
}

/**
 * Check if user has an active session
 * @returns {boolean}
 */
export function hasActiveSession() {
  return sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) !== null;
}

export { STORAGE_KEYS };
