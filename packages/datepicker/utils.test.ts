import { describe, expect, test } from 'vitest';

import { getDateInputType } from './utils.js';

describe('getDateInputType', () => {
  test('uses text input for Safari to avoid native placeholder rendering', () => {
    expect(
      getDateInputType(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
      ),
    ).toBe('text');
  });

  test('uses text input for iOS browsers', () => {
    expect(
      getDateInputType(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.0.0 Mobile/15E148 Safari/604.1',
      ),
    ).toBe('text');
  });

  test('keeps date input for Chrome on desktop', () => {
    expect(
      getDateInputType(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      ),
    ).toBe('date');
  });
});
