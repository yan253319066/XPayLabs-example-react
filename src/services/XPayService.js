import { XPay } from '@xpaylabs/node-sdk';

/**
 * XPay Labs Service for React
 * This service is a wrapper around the official XPay Labs SDK
 */
class XPayService {
  constructor(config) {
    // Initialize the official XPay Labs SDK
    this.xpay = new XPay({
      apiKey: config.apiKey,
      apiSecret: config.apiSecret,
      baseUrl: config.baseUrl || 'https://api.xpaylabs.com'
    });
  }

  /**
   * Create a collection order
   * @param {Object} params - Collection order parameters
   * @returns {Promise<Object>} - Collection order details
   */
  async createCollection(params) {
    try {
      return await this.xpay.createCollection(params);
    } catch (error) {
      console.error('XPay Labs createCollection error:', error);
      throw error;
    }
  }

  /**
   * Create a payout order
   * @param {Object} params - Payout order parameters
   * @returns {Promise<Object>} - Payout order details
   */
  async createPayout(params) {
    try {
      return await this.xpay.createPayout(params);
    } catch (error) {
      console.error('XPay Labs createPayout error:', error);
      throw error;
    }
  }

  /**
   * Get order status
   * @param {string} orderId - Order ID
   * @returns {Promise<Object>} - Order status details
   */
  async getOrderStatus(orderId) {
    try {
      return await this.xpay.getOrderStatus(orderId);
    } catch (error) {
      console.error('XPay Labs getOrderStatus error:', error);
      throw error;
    }
  }

  /**
   * Get supported symbols
   * @param {string} chain - Optional chain filter
   * @param {string} symbol - Optional symbol filter
   * @returns {Promise<Object>} - Supported symbols
   */
  async getSupportedSymbols(chain, symbol) {
    try {
      return await this.xpay.getSupportedSymbols(chain, symbol);
    } catch (error) {
      console.error('XPay Labs getSupportedSymbols error:', error);
      throw error;
    }
  }

  /**
   * Verify webhook signature
   * @param {string} body - Webhook body as string
   * @param {string} signature - X-SIGNATURE header
   * @param {string} timestamp - X-TIMESTAMP header
   * @returns {boolean} - Whether the signature is valid
   */
  verifyWebhook(body, signature, timestamp) {
    try {
      return this.xpay.verifyWebhook(body, signature, timestamp);
    } catch (error) {
      console.error('XPay Labs verifyWebhook error:', error);
      return false;
    }
  }

  /**
   * Parse webhook body
   * @param {string} body - Webhook body as string
   * @returns {Object} - Parsed webhook data
   */
  parseWebhook(body) {
    try {
      return this.xpay.parseWebhook(body);
    } catch (error) {
      console.error('XPay Labs parseWebhook error:', error);
      throw new Error('Invalid webhook body');
    }
  }
}

export default XPayService;