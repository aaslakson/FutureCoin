/**
 * Input validation and sanitization utilities
 * Prevents XSS and injection attacks
 */

/**
 * Sanitize string input to prevent XSS
 * @param {string} input - User input
 * @returns {string} - Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return input.replace(/[&<>"'/]/g, char => map[char]);
}

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} - True if valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid and message
 */
export function validatePassword(password) {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character' };
  }
  
  return { isValid: true, message: 'Password is strong' };
}

/**
 * Validate wallet address format
 * @param {string} address - Wallet address
 * @returns {boolean} - True if valid
 */
export function isValidWalletAddress(address) {
  // FutureCoin wallet addresses start with 'FC' followed by 40 hex characters
  const addressRegex = /^FC[0-9a-fA-F]{40}$/;
  return addressRegex.test(address);
}

/**
 * Validate transaction amount
 * @param {number|string} amount - Amount to validate
 * @returns {object} - Validation result
 */
export function validateAmount(amount) {
  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount)) {
    return { isValid: false, message: 'Amount must be a valid number' };
  }
  
  if (numAmount <= 0) {
    return { isValid: false, message: 'Amount must be greater than zero' };
  }
  
  if (numAmount > 1000000000) {
    return { isValid: false, message: 'Amount exceeds maximum limit' };
  }
  
  // Check for max 8 decimal places
  const decimalPlaces = (numAmount.toString().split('.')[1] || '').length;
  if (decimalPlaces > 8) {
    return { isValid: false, message: 'Amount can have maximum 8 decimal places' };
  }
  
  return { isValid: true, value: numAmount };
}

/**
 * Sanitize object for safe JSON storage
 * @param {object} obj - Object to sanitize
 * @returns {object} - Sanitized object
 */
export function sanitizeObject(obj) {
  if (typeof obj !== 'object' || obj === null) return {};
  
  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      sanitized[key] = value;
    }
  }
  return sanitized;
}
