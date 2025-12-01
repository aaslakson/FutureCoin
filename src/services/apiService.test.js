import { describe, it, expect, vi } from 'vitest';
import { getCryptoData } from './apiService';

global.fetch = vi.fn();

describe('apiService', () => {
  it('fetches crypto data successfully', async () => {
    const mockResponse = {
      bitcoin: {
        usd: 50000,
        usd_24h_change: 5
      }
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await getCryptoData('BTC');

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('bitcoin'));
    expect(data).toEqual({
      price: 50000,
      change: 5,
      percent_change: 5
    });
  });

  it('handles API errors gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const data = await getCryptoData('BTC');

    expect(data).toEqual({
      price: 0,
      change: 0,
      percent_change: 0
    });
  });
});
