/**
 * Transaction security utilities
 * Handles transaction signing, validation, and verification
 */

import { hashData, generateSecureToken } from '../utils/crypto.js';
import { validateAmount, isValidWalletAddress } from '../utils/validation.js';

/**
 * Transaction status enum
 */
export const TransactionStatus = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};

/**
 * Transaction type enum
 */
export const TransactionType = {
  BUY: 'buy',
  SELL: 'sell',
  TRANSFER: 'transfer'
};

/**
 * Create a transaction object
 * @param {object} params - Transaction parameters
 * @returns {Promise<object>} - Transaction object
 */
export async function createTransaction({
  type,
  fromAddress,
  toAddress,
  amount,
  userId
}) {
  // Validate amount
  const amountValidation = validateAmount(amount);
  if (!amountValidation.isValid) {
    throw new Error(amountValidation.message);
  }

  // Validate addresses for transfer type
  if (type === TransactionType.TRANSFER) {
    if (!isValidWalletAddress(fromAddress)) {
      throw new Error('Invalid from address');
    }
    if (!isValidWalletAddress(toAddress)) {
      throw new Error('Invalid to address');
    }
  }

  const transaction = {
    id: generateSecureToken(16),
    type,
    fromAddress: fromAddress || null,
    toAddress: toAddress || null,
    amount: amountValidation.value,
    userId,
    status: TransactionStatus.PENDING,
    timestamp: new Date().toISOString(),
    signature: null
  };

  // Sign transaction
  transaction.signature = await signTransaction(transaction);

  return transaction;
}

/**
 * Sign a transaction
 * @param {object} transaction - Transaction to sign
 * @returns {Promise<string>} - Transaction signature
 */
export async function signTransaction(transaction) {
  // eslint-disable-next-line no-unused-vars
  const { signature, ...txData } = transaction;
  const dataString = JSON.stringify(txData);
  return await hashData(dataString);
}

/**
 * Verify transaction signature
 * @param {object} transaction - Transaction to verify
 * @returns {Promise<boolean>} - True if signature is valid
 */
export async function verifyTransactionSignature(transaction) {
  const { signature, ...txData } = transaction;
  const expectedSignature = await hashData(JSON.stringify(txData));
  return signature === expectedSignature;
}

/**
 * Validate transaction
 * @param {object} transaction - Transaction to validate
 * @param {number} userBalance - User's current balance
 * @returns {object} - Validation result
 */
export async function validateTransaction(transaction, userBalance) {
  // Verify signature
  const isSignatureValid = await verifyTransactionSignature(transaction);
  if (!isSignatureValid) {
    return { isValid: false, error: 'Invalid transaction signature' };
  }

  // Check transaction amount
  if (transaction.amount <= 0) {
    return { isValid: false, error: 'Transaction amount must be greater than zero' };
  }

  // For sell and transfer, check if user has sufficient balance
  if (transaction.type === TransactionType.SELL || transaction.type === TransactionType.TRANSFER) {
    if (userBalance < transaction.amount) {
      return { isValid: false, error: 'Insufficient balance' };
    }
  }

  // Check transaction age (prevent replay attacks)
  const transactionAge = Date.now() - new Date(transaction.timestamp).getTime();
  const MAX_TRANSACTION_AGE = 5 * 60 * 1000; // 5 minutes
  if (transactionAge > MAX_TRANSACTION_AGE) {
    return { isValid: false, error: 'Transaction expired' };
  }

  return { isValid: true };
}

/**
 * Store transaction
 * @param {object} transaction - Transaction to store
 */
export function storeTransaction(transaction) {
  const transactions = JSON.parse(localStorage.getItem('ftc_transactions') || '[]');
  transactions.push(transaction);
  localStorage.setItem('ftc_transactions', JSON.stringify(transactions));
}

/**
 * Get user transactions
 * @param {string} userId - User ID
 * @returns {array} - Array of user transactions
 */
export function getUserTransactions(userId) {
  const transactions = JSON.parse(localStorage.getItem('ftc_transactions') || '[]');
  return transactions
    .filter(tx => tx.userId === userId)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

/**
 * Update transaction status
 * @param {string} transactionId - Transaction ID
 * @param {string} status - New status
 */
export function updateTransactionStatus(transactionId, status) {
  const transactions = JSON.parse(localStorage.getItem('ftc_transactions') || '[]');
  const index = transactions.findIndex(tx => tx.id === transactionId);
  
  if (index !== -1) {
    transactions[index].status = status;
    transactions[index].updatedAt = new Date().toISOString();
    localStorage.setItem('ftc_transactions', JSON.stringify(transactions));
  }
}

/**
 * Calculate transaction fee
 * @param {number} amount - Transaction amount
 * @param {string} type - Transaction type
 * @returns {number} - Transaction fee
 */
export function calculateTransactionFee(amount, type) {
  const FEE_RATES = {
    [TransactionType.BUY]: 0.01, // 1%
    [TransactionType.SELL]: 0.01, // 1%
    [TransactionType.TRANSFER]: 0.005 // 0.5%
  };

  const feeRate = FEE_RATES[type] || 0.01;
  return amount * feeRate;
}
