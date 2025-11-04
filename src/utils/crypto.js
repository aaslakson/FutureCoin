/**
 * Cryptographic utilities for secure data handling
 * Uses Web Crypto API for client-side encryption
 */

/**
 * Generate a cryptographic key from a password
 * @param {string} password - User password
 * @param {Uint8Array} salt - Salt for key derivation
 * @returns {Promise<CryptoKey>} - Derived key
 */
export async function deriveKey(password, salt) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt data using AES-GCM
 * @param {string} data - Data to encrypt
 * @param {string} password - Encryption password
 * @returns {Promise<object>} - Encrypted data with salt and IV
 */
export async function encryptData(data, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  
  const encoder = new TextEncoder();
  const encryptedData = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    key,
    encoder.encode(data)
  );

  return {
    encrypted: Array.from(new Uint8Array(encryptedData)),
    salt: Array.from(salt),
    iv: Array.from(iv)
  };
}

/**
 * Decrypt data using AES-GCM
 * @param {object} encryptedObj - Object containing encrypted data, salt, and IV
 * @param {string} password - Decryption password
 * @returns {Promise<string>} - Decrypted data
 */
export async function decryptData(encryptedObj, password) {
  const { encrypted, salt, iv } = encryptedObj;
  const key = await deriveKey(password, new Uint8Array(salt));
  
  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: new Uint8Array(iv)
    },
    key,
    new Uint8Array(encrypted)
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedData);
}

/**
 * Generate a secure random token
 * @param {number} length - Token length in bytes
 * @returns {string} - Hex encoded token
 */
export function generateSecureToken(length = 32) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Hash data using SHA-256
 * @param {string} data - Data to hash
 * @returns {Promise<string>} - Hex encoded hash
 */
export async function hashData(data) {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(data));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}
